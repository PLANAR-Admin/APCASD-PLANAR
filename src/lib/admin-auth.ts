import crypto from "crypto";

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const LOGIN_ATTEMPTS_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_LOGIN_ATTEMPTS = 5;

interface LoginAttempt {
  timestamp: number;
  success: boolean;
}

// In-memory rate limiting is acceptable (resets per cold start, minor trade-off)
const loginAttempts = new Map<string, LoginAttempt[]>();

function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error("ADMIN_PASSWORD environment variable is not set");
  return password;
}

// Derive a signing secret from the admin password
function getSecret(): Buffer {
  return crypto.createHash("sha256").update(getAdminPassword()).digest();
}

function signPayload(payload: string): string {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function recordLoginAttempt(ip: string, success: boolean): void {
  const now = Date.now();
  const attempts = loginAttempts.get(ip) ?? [];
  attempts.push({ timestamp: now, success });
  loginAttempts.set(ip, attempts);
  console.log(`[AUTH] Login attempt from ${ip}: ${success ? "SUCCESS" : "FAILED"}`);

  for (const [key, attemptsForIp] of loginAttempts.entries()) {
    const valid = attemptsForIp.filter((a) => now - a.timestamp < LOGIN_ATTEMPTS_WINDOW);
    if (valid.length === 0) loginAttempts.delete(key);
    else loginAttempts.set(key, valid);
  }
}

function isLoginRateLimited(ip: string): boolean {
  const now = Date.now();
  const attempts = loginAttempts.get(ip) ?? [];
  return attempts.filter((a) => now - a.timestamp < LOGIN_ATTEMPTS_WINDOW).length >= MAX_LOGIN_ATTEMPTS;
}

export const adminAuth = {
  verifyPassword(password: string, ip: string = "unknown"): boolean {
    if (isLoginRateLimited(ip)) {
      recordLoginAttempt(ip, false);
      console.warn(`[AUTH] Login rate limit exceeded for IP: ${ip}`);
      return false;
    }
    try {
      const expected = getAdminPassword();
      // Timing-safe comparison
      const match =
        password.length === expected.length &&
        crypto.timingSafeEqual(Buffer.from(password), Buffer.from(expected));
      recordLoginAttempt(ip, match);
      return match;
    } catch (error) {
      recordLoginAttempt(ip, false);
      console.error("[AUTH] Password verification error:", error);
      return false;
    }
  },

  // Stateless HMAC token: "<expiresAt>.<signature>"
  // Works across Vercel serverless instances without shared state.
  createSession(): string {
    const expiresAt = String(Date.now() + SESSION_DURATION);
    const sig = signPayload(expiresAt);
    console.log("[AUTH] New session created");
    return `${expiresAt}.${sig}`;
  },

  verifySession(token: string): boolean {
    const dot = token.lastIndexOf(".");
    if (dot === -1) return false;
    const payload = token.slice(0, dot);
    const sig = token.slice(dot + 1);
    try {
      const expectedSig = signPayload(payload);
      const sigBuf = Buffer.from(sig, "hex");
      const expectedBuf = Buffer.from(expectedSig, "hex");
      if (sigBuf.length !== expectedBuf.length) return false;
      if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return false;
    } catch {
      return false;
    }
    return Date.now() < Number(payload);
  },

  destroySession(_token: string): void {
    // Stateless tokens can't be server-side revoked; logout clears the cookie.
    console.log("[AUTH] Session destroyed (cookie cleared)");
  },
};

import crypto from "crypto";

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const LOGIN_ATTEMPTS_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_LOGIN_ATTEMPTS = 5;

interface AdminSession {
  token: string;
  expiresAt: number;
}

interface LoginAttempt {
  timestamp: number;
  success: boolean;
}

const activeSessions = new Map<string, AdminSession>();
const loginAttempts = new Map<string, LoginAttempt[]>();

function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("ADMIN_PASSWORD environment variable is not set");
  }
  return password;
}

function hashPassword(password: string, salt: string = ""): string {
  return crypto
    .pbkdf2Sync(password, salt || "admin-salt-v1", 100000, 64, "sha256")
    .toString("hex");
}

function recordLoginAttempt(ip: string, success: boolean): void {
  const now = Date.now();
  const attempts = loginAttempts.get(ip) ?? [];
  attempts.push({ timestamp: now, success });
  loginAttempts.set(ip, attempts);

  console.log(`[AUTH] Login attempt from ${ip}: ${success ? "SUCCESS" : "FAILED"}`);

  for (const [key, attemptsForIp] of loginAttempts.entries()) {
    const validAttempts = attemptsForIp.filter((a) => now - a.timestamp < LOGIN_ATTEMPTS_WINDOW);
    if (validAttempts.length === 0) {
      loginAttempts.delete(key);
    } else {
      loginAttempts.set(key, validAttempts);
    }
  }
}

function isLoginRateLimited(ip: string): boolean {
  const now = Date.now();
  const attempts = loginAttempts.get(ip) ?? [];
  const recentAttempts = attempts.filter((a) => now - a.timestamp < LOGIN_ATTEMPTS_WINDOW);
  return recentAttempts.length >= MAX_LOGIN_ATTEMPTS;
}

export const adminAuth = {
  verifyPassword(password: string, ip: string = "unknown"): boolean {
    if (isLoginRateLimited(ip)) {
      recordLoginAttempt(ip, false);
      console.warn(`[AUTH] Login rate limit exceeded for IP: ${ip}`);
      return false;
    }

    try {
      const expectedPassword = getAdminPassword();
      const match = hashPassword(password) === hashPassword(expectedPassword);
      recordLoginAttempt(ip, match);
      return match;
    } catch (error) {
      recordLoginAttempt(ip, false);
      console.error("[AUTH] Password verification error:", error);
      return false;
    }
  },

  createSession(): string {
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = Date.now() + SESSION_DURATION;
    activeSessions.set(token, { token, expiresAt });

    console.log("[AUTH] New session created");

    for (const [key, session] of activeSessions.entries()) {
      if (session.expiresAt < Date.now()) {
        activeSessions.delete(key);
      }
    }

    return token;
  },

  verifySession(token: string): boolean {
    const session = activeSessions.get(token);
    if (!session) return false;
    if (session.expiresAt < Date.now()) {
      activeSessions.delete(token);
      console.log("[AUTH] Session expired");
      return false;
    }
    return true;
  },

  destroySession(token: string): void {
    activeSessions.delete(token);
    console.log("[AUTH] Session destroyed");
  },
};

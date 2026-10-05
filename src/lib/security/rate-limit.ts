/**
 * Minimal in-memory rate limiter (per server instance). Good enough for a
 * single-instance deployment; swap for a shared store (e.g. Redis/Upstash)
 * once running on multiple instances.
 */
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, limit = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > limit;
}

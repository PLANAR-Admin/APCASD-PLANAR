"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/admin/dashboard");
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-darkblue/5 to-crimson/5 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-darkblue">Admin Panel</h1>
            <p className="mt-2 text-sm text-muted">APCASD PLANAR Management</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
                Admin Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-darkblue"
                disabled={loading}
                required
              />
            </div>

            {error && (
              <div className="rounded-lg bg-crimson/10 p-3 text-sm text-crimson">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-darkblue px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Access Admin Panel"}
            </button>
          </form>

          <div className="mt-6 border-t border-border pt-6">
            <p className="text-center text-xs text-muted">
              <Link href="/" className="text-darkblue hover:text-crimson">
                Back to Website
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

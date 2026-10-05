import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { adminAuth } from "@/lib/admin-auth";

const loginSchema = z.object({
  password: z.string().min(1),
});

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Password is required" },
      { status: 400 }
    );
  }

  if (!adminAuth.verifyPassword(parsed.data.password, ip)) {
    return NextResponse.json(
      { ok: false, message: "Invalid password" },
      { status: 401 }
    );
  }

  const token = adminAuth.createSession();
  const response = NextResponse.json({ ok: true, token });
  response.cookies.set("admin-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60, // 24 hours
  });

  return response;
}

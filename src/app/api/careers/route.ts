import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { storage } from "@/lib/storage";
import { isRateLimited } from "@/lib/security/rate-limit";

const careerApplicationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  position: z.string().min(2).max(200),
  coverLetter: z.string().min(10).max(5000).optional(),
  website: z.string().optional(), // Honeypot
});

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(`careers:${ip}`)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong, please try again." },
      { status: 400 }
    );
  }

  const parsed = careerApplicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Honeypot
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Thank you for your application." });
  }

  const { website: _honeypot, ...application } = parsed.data;
  void _honeypot;

  try {
    storage.careers.addApplication(application);
    console.log("New career application:", application);
  } catch (error) {
    console.error("Failed to save career application:", error);
  }

  return NextResponse.json({ ok: true, message: "Thank you for your application." });
}

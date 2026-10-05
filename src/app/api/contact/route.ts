import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { isRateLimited } from "@/lib/security/rate-limit";
import { storage } from "@/lib/storage";

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(`contact:${ip}`)) {
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

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // Honeypot: real visitors never fill this field.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, message: "Thank you, we received your message." });
  }

  const { website: _honeypot, ...submission } = parsed.data;
  void _honeypot;

  // Save to storage
  try {
    storage.contacts.add(submission);
    console.log("New contact enquiry:", submission);
  } catch (error) {
    console.error("Failed to save contact:", error);
  }

  return NextResponse.json({ ok: true, message: "Thank you, we received your message." });
}

import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { storage } from "@/lib/storage";
import { isRateLimited } from "@/lib/security/rate-limit";

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}

const applicationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  position: z.string().min(1),
  coverLetter: z.string().max(2000).optional(),
});

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  // Rate limiting for applications
  if (isRateLimited(`application:${ip}`, 5, 24 * 60 * 60 * 1000)) {
    return NextResponse.json(
      { ok: false, message: "Too many applications from this location. Please try again later." },
      { status: 429 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  // Extract form fields
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || undefined;
  const position = formData.get("position") as string;
  const coverLetter = (formData.get("coverLetter") as string) || undefined;
  const resume = formData.get("resume") as File;

  // Validate required fields
  const parsed = applicationSchema.safeParse({
    name,
    email,
    phone,
    position,
    coverLetter,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check all required fields." },
      { status: 400 }
    );
  }

  // Validate resume file
  if (!resume || resume.size === 0) {
    return NextResponse.json(
      { ok: false, message: "Please upload your CV/Resume." },
      { status: 400 }
    );
  }

  // Check file size (10MB max)
  if (resume.size > 10 * 1024 * 1024) {
    return NextResponse.json(
      { ok: false, message: "CV file size must be less than 10MB." },
      { status: 400 }
    );
  }

  // Validate file type
  const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (!allowedTypes.includes(resume.type)) {
    return NextResponse.json(
      { ok: false, message: "Only PDF and Word documents are accepted." },
      { status: 400 }
    );
  }

  try {
    const buffer = await resume.arrayBuffer();
    const application = {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      position: parsed.data.position,
      coverLetter: parsed.data.coverLetter,
      resume: `${resume.name} (${resume.size} bytes)`,
    };

    storage.careers.addApplication(application);
    console.log("New career application:", application);

    return NextResponse.json({ ok: true, message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Failed to save application:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to submit application" },
      { status: 500 }
    );
  }
}

import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { adminAuth } from "@/lib/admin-auth";
import { supabase } from "@/lib/supabase";

const listingSchema = z.object({
  title: z.string().min(1).max(200),
  department: z.string().min(1).max(100),
  description: z.string().min(10).max(5000),
  requirements: z.array(z.string().min(1)).min(1),
  active: z.boolean().optional().default(true),
});

function getToken(request: NextRequest): string | null {
  return request.cookies.get("admin-token")?.value ?? null;
}

export async function GET(request: NextRequest) {
  const token = getToken(request);
  if (!token || !adminAuth.verifySession(token)) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { data: listings, error } = await supabase
      .from("job_listings")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ ok: true, listings });
  } catch (error) {
    console.error("Failed to get listings:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to retrieve listings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const token = getToken(request);
  if (!token || !adminAuth.verifySession(token)) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  const parsed = listingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    const { data: listing, error } = await supabase
      .from("job_listings")
      .insert([parsed.data])
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json({ ok: true, listing }, { status: 201 });
  } catch (error) {
    console.error("Failed to create listing:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to create listing" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const token = getToken(request);
  if (!token || !adminAuth.verifySession(token)) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { ok: false, message: "ID is required" },
      { status: 400 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 }
    );
  }

  const parsed = listingSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed", errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase
      .from("job_listings")
      .update(parsed.data)
      .eq("id", id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update listing:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to update listing" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const token = getToken(request);
  if (!token || !adminAuth.verifySession(token)) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { ok: false, message: "ID is required" },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase.from("job_listings").delete().eq("id", id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete listing:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to delete listing" },
      { status: 500 }
    );
  }
}

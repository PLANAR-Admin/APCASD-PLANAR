import { NextResponse, type NextRequest } from "next/server";
import { adminAuth } from "@/lib/admin-auth";
import { supabase } from "@/lib/supabase";

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
    const { data: applications, error } = await supabase
      .from("job_applications")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ ok: true, applications });
  } catch (error) {
    console.error("Failed to get applications:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to retrieve applications" },
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
    const { error } = await supabase.from("job_applications").delete().eq("id", id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete application:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to delete application" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: listings, error } = await supabase
      .from("job_listings")
      .select("*")
      .eq("active", true)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ ok: true, listings });
  } catch (error) {
    console.error("Failed to fetch listings:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to retrieve listings" },
      { status: 500 }
    );
  }
}

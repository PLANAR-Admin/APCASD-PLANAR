import { NextResponse } from "next/server";
import { storage } from "@/lib/storage";

export async function GET() {
  try {
    const listings = storage.careers.getActiveListings();
    return NextResponse.json({ ok: true, listings });
  } catch (error) {
    console.error("Failed to fetch listings:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to retrieve listings" },
      { status: 500 }
    );
  }
}

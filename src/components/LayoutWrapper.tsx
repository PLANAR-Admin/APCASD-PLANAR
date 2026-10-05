"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShapesDivider } from "@/components/sections/ShapesDivider";
import type { ReactNode } from "react";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isAdmin && <ShapesDivider />}
      {!isAdmin && <Footer />}
    </>
  );
}

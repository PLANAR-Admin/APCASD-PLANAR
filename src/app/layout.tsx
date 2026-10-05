import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShapesDivider } from "@/components/sections/ShapesDivider";
import { PageLoader } from "@/components/PageLoader";
import { CustomCursor } from "@/components/CustomCursor";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { SITE } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const clashGrotesk = localFont({
  variable: "--font-clash-grotesk",
  src: "./fonts/ClashGrotesk-Variable.woff2",
  weight: "200 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} — HR Solutions & Corporate Event Management in Chennai`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "APCASD PLANAR provides people-focused HR solutions and professionally managed corporate events for businesses in Chennai and beyond.",
  openGraph: {
    title: SITE.shortName,
    description: SITE.positioningSupport,
    siteName: SITE.shortName,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${clashGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageLoader />
        <CustomCursor />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

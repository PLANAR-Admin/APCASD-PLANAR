import type { Metadata } from "next";
import { CategoryLandingPage } from "@/components/services/CategoryLandingPage";
import { EventsSeoContent } from "@/components/sections/EventsSeoContent";
import { CATEGORY_CONTENT } from "@/lib/services-data";

const content = CATEGORY_CONTENT["events"];

export const metadata: Metadata = {
  title: "Best Corporate Event Management Company in Chennai & Bengaluru",
  description:
    "APCASD PLANAR is a corporate event management company serving Chennai and Bengaluru — conferences, annual days, award shows, product launches and team experiences planned end to end.",
};

export default function EventsPage() {
  return <CategoryLandingPage content={content} extraContent={<EventsSeoContent />} />;
}

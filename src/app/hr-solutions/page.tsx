import type { Metadata } from "next";
import { CategoryLandingPage } from "@/components/services/CategoryLandingPage";
import { CATEGORY_CONTENT } from "@/lib/services-data";

const content = CATEGORY_CONTENT["hr-solutions"];

export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.metaDescription,
};

export default function HrSolutionsPage() {
  return <CategoryLandingPage content={content} />;
}

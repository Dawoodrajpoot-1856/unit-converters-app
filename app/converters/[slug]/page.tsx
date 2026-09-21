import ConverterClient from "@/components/Home/ConverterClient"; 
import { conversionData } from "@/utils/Converter"; 
import { notFound } from "next/navigation";

export interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export default async function ConverterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug;

  if (!rawSlug) {
    console.log("No raw slug found!");
    notFound();
  }

  // Clean slug: remove quotes, spaces & lowercase
  const cleanSlug = decodeURIComponent(String(rawSlug))
    .replace(/['"]+/g, "")
    .toLowerCase()
    .trim();

  // Direct check
  const categoryExists = Boolean(conversionData[cleanSlug]);

  if (!categoryExists) {
    console.error(`❌ Slug "${cleanSlug}" data mein nahi mila!`);
    console.log("Available Slugs:", Object.keys(conversionData));
    notFound();
  }

  return <ConverterClient slug={cleanSlug} />;
}

export async function generateStaticParams() {
  return Object.keys(conversionData).map((slug) => ({
    slug: slug.toLowerCase(),
  }));
}

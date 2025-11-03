import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BluePrynt — Marketing Insights, Case Studies & AI Strategies",
  description:
    "Explore the BluePrynt Blog for expert insights, marketing case studies, AI strategies, and growth blueprints that shape the future of digital marketing.",
  keywords: [
    "marketing blog",
    "digital marketing insights",
    "AI in marketing",
    "marketing strategies",
    "SEO trends 2025",
    "BluePrynt case studies",
    "growth marketing blog",
    "influencer marketing tips",
    "conversion optimization",
  ],
  alternates: { canonical: "https://blueprynt.io/blog" },
  openGraph: {
    title: "BluePrynt Blog — Insights, Case Studies & Marketing Strategies",
    description:
      "Stay ahead with BluePrynt’s expert articles on marketing, AI, SEO, and branding — crafted by digital architects shaping tomorrow’s growth.",
    url: "https://blueprynt.io/blog",
    siteName: "BluePrynt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BluePrynt Blog — Digital Marketing Insights & AI Growth Strategies",
    description:
      "Discover BluePrynt’s latest blog posts on AI, SEO, marketing trends, and data-driven case studies powering global brands.",
  },
  robots: { index: true, follow: true },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
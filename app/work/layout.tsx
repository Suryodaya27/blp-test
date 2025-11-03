// app/work/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | BluePrynt — Marketing Case Studies & Brand Success Stories",
  description:
    "Explore BluePrynt’s portfolio of successful marketing campaigns across industries — from AI-driven strategies to viral brand transformations.",
  keywords: [
    "marketing case studies",
    "digital marketing agency",
    "BluePrynt work",
    "AI campaigns",
    "SEO success stories",
    "brand growth examples",
  ],
  alternates: { canonical: "https://blueprynt.io/work" },
  openGraph: {
    title: "BluePrynt Work — Proven Marketing Case Studies",
    description:
      "Discover how BluePrynt helps global brands grow with data-driven, AI-enhanced, and creative marketing solutions.",
    url: "https://blueprynt.io/work",
    siteName: "BluePrynt",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

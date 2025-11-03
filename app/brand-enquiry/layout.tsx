import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Brand Blueprint | BluePrynt Marketing Agency India",
  description:
    "Partner with BluePrynt to craft a custom marketing strategy tailored to your brand. Share your vision, and our experts will design data-driven campaigns that elevate your business presence online and offline.",
  keywords: [
    "BluePrynt brand enquiry",
    "start your blueprint",
    "marketing collaboration India",
    "digital marketing proposal",
    "SEO and AI strategy India",
    "brand strategy consultation",
    "business growth plan",
    "custom marketing blueprint",
    "branding agency partnership",
  ],
  openGraph: {
    title: "Start Your Brand Blueprint | Collaborate with BluePrynt",
    description:
      "Ready to build your brand? Tell us about your business, and we’ll create a strategy that drives real growth. BluePrynt — India's premium marketing, SEO, and AI agency.",
    url: "https://blueprynt.io/brand-enquiry",
    siteName: "BluePrynt",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Start Your Blueprint | BluePrynt Marketing Agency India",
    description:
      "Submit your brand enquiry and let BluePrynt craft a data-driven strategy to help your business grow.",
    creator: "@blueprynt", // optional if you have a handle
  },
  alternates: {
    canonical: "https://blueprynt.io/brand-enquiry",
  },
};

export default function BrandEnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
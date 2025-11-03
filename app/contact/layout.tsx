import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BluePrynt | India's Leading Marketing & AI Agency",
  description:
    "Get in touch with BluePrynt — your growth partner in marketing, SEO, AI, and web development. Connect with our teams in Mumbai, Delhi, or Bangalore to start building your success story today.",
  keywords: [
    "BluePrynt contact",
    "marketing agency contact India",
    "digital marketing Mumbai",
    "SEO agency Delhi",
    "AI marketing agency Bangalore",
    "website development India",
    "contact BluePrynt team",
    "partnership inquiries BluePrynt",
    "marketing collaboration India",
  ],
  openGraph: {
    title: "Contact BluePrynt | Let's Build Something Amazing",
    description:
      "Connect with BluePrynt’s marketing and AI experts in Mumbai, Delhi, or Bangalore. Let’s discuss how we can scale your business with smart digital solutions.",
    url: "https://blueprynt.io/contact",
    siteName: "BluePrynt",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact BluePrynt | India's Leading Marketing Agency",
    description:
      "Talk to the experts at BluePrynt — marketing, SEO, AI, and influencer marketing specialists across India.",
    creator: "@blueprynt", // if you have Twitter handle
  },
  alternates: {
    canonical: "https://blueprynt.io/contact",
  },
};
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
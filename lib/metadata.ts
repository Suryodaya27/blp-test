// lib/metadata.ts
import type { Metadata } from "next";

export const BASE_URL = "https://blueprynt.io";

export function makeMetadata(
  title: string,
  description: string,
  path: string = "/",
  image: string = "/og-image.jpg"
): Metadata {
  const fullUrl = `${BASE_URL}${path}`;

  return {
    title: `${title} | BluePrynt`,
    description,
    openGraph: {
      title: `${title} | BluePrynt`,
      description,
      url: fullUrl,
      siteName: "BluePrynt",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} preview`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | BluePrynt`,
      description,
      images: [image],
      creator: "@blueprynt",
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

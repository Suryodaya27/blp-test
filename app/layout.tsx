import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BluePrynt | Creative Marketing, SEO & Web Engineering",
  description: "Premium marketing solutions with architectural precision.",
  alternates: {
    canonical: "https://blueprynt.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BluePrynt",
              "url": "https://blueprynt.io",
              "description": "Premium marketing solutions with architectural precision.",
              "sameAs": [
                "https://www.linkedin.com/company/blueprynt-llp/",
                "https://www.instagram.com/_blueprynt.io_",
                "https://www.facebook.com/share/1CU9fozFjh/?mibextid=wwXIfr"
              ]
            }),
          }}
        />
      </head>
      <body
        className='antialiased'
      >
        <Navigation />
        {/* <AnimatePresenceProvider>{children}</AnimatePresenceProvider> */}
        {children}
        <Footer />
      </body>
    </html >
  );
}

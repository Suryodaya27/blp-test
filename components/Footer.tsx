"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Square,
} from "lucide-react";
import logoImage from "@/assets/bp-2.png"; // ✅ move static assets to /public

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Work", path: "/work" },
      { name: "Blog", path: "/blog" },
    ],
    collaborate: [
      { name: "Brand Enquiry", path: "/brand-enquiry" },
      { name: "Influencer Register", path: "/influencer-register" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/blueprynt-llp/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/blueprynt.io", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1CU9fozFjh/?mibextid=wwXIfr", label: "Facebook" },
  ];

  return (
    <footer className="bg-background border-t border-border z-20 relative w-full shadow-lg">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <Image
                src={logoImage}
                alt="BluePrynt"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
            <p className="font-outfit text-muted-foreground mb-6 leading-relaxed">
              Where vision becomes reality. We turn raw potential into structures that stand tall.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <FooterColumn title="Company" links={footerLinks.company} />

          {/* Collaborate Links */}
          <FooterColumn title="Collaborate" links={footerLinks.collaborate} />

          {/* Legal Links */}
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-outfit text-muted-foreground text-sm">
            © {currentYear} BluePrynt. All rights reserved.
          </p>
          <p className="font-outfit text-muted-foreground text-sm flex items-center">
            Find your missing piece.
            <Square className="ml-2 w-3 h-3 text-cyan animate-pulse transform rotate-45" />
          </p>
        </div>
      </div>
    </footer>
  );
};

// ✅ Small subcomponent for cleaner structure
const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; path: string }[];
}) => (
  <div>
    <h3 className="font-outfit font-semibold text-foreground mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.path}
            className="font-outfit text-muted-foreground hover:text-cyan transition-colors duration-300 group relative"
          >
            {link.name}
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;

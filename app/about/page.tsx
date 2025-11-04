import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Twitter, Award, Target, Lightbulb, Users } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ayushImage from "@/public/assets/ayush_img_2.jpg";
import vruttiImage from "@/public/assets/vrutti-2.png";
import suryodayaImage from "@/public/assets/pandery-2.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BluePrynt — The Architects of Digital Growth & AI Marketing",
  description:
    "Learn about BluePrynt — the premium marketing agency redefining digital strategy with precision, creativity, and AI innovation. Discover our journey from a bold vision in 2021 to empowering 500+ global brands across 15+ countries with data-driven marketing, SEO, and web development excellence.",
  keywords: [
    "BluePrynt about",
    "digital marketing agency",
    "AI marketing company",
    "SEO and web development",
    "branding experts",
    "marketing architecture",
    "data-driven campaigns",
    "creative marketing agency",
    "global marketing firm",
    "BluePrynt team",
  ],
  openGraph: {
    title: "About BluePrynt — Premium Digital Marketing & AI Agency",
    description:
      "From 3 founders with a vision to 500+ brands transformed — BluePrynt builds marketing architectures designed to last. Discover our story, values, and mission.",
    url: "https://blueprynt.io/about",
    siteName: "BluePrynt",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "About BluePrynt — Premium Marketing & AI Agency",
    description:
      "Meet the architects behind BluePrynt — where creativity meets engineering precision to build the future of marketing.",
    creator: "@blueprynt",
  },
  alternates: {
    canonical: "https://blueprynt.io/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const About = () => {
  const team = [
    {
      name: "Ayush Singh",
      role: "CEO & Founder",
      bio: "Visionary leader with 8+ years in digital marketing. Ayush architects growth strategies that build lasting success.",
      image: ayushImage,
      linkedin: "https://www.linkedin.com/in/ayushsingh1214/",
      twitter: "#",
      achievements: ["Marketing Leader 2023", "Growth Expert"],
    },
    {
      name: "Vrutti Gala",
      role: "Head of Marketing",
      bio: "Creative strategist who transforms brand visions into compelling narratives that resonate with audiences.",
      image: vruttiImage,
      linkedin: "https://www.linkedin.com/in/vrutti-g/",
      twitter: "#",
      achievements: ["Growth Hacker of the Year", "Campaign Excellence Award"],
    },
    {
      name: "Suryodaya Pandey",
      role: "CTO",
      bio: "Technical mastermind who builds the infrastructure that powers our cutting-edge marketing solutions.",
      image: suryodayaImage,
      linkedin: "https://www.linkedin.com/in/suryodaya27/",
      twitter: "#",
      achievements: ["AI Innovation Award", "Tech Leader 2023"],
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Foundation",
      description: "BluePrynt founded with a vision to revolutionize digital marketing architecture.",
      icon: Lightbulb,
    },
    {
      year: "2022",
      title: "First Major Win",
      description: "Achieved 300% ROAS for our first enterprise client, setting industry benchmarks.",
      icon: Target,
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched proprietary AI agents, automating campaign optimization at scale.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations across 15+ countries, serving 500+ global brands.",
      icon: Users,
    },
  ];

  const values = [
    {
      title: "Precision Engineering",
      description: "Every campaign is built with architectural precision, ensuring no detail is overlooked.",
      icon: Target,
    },
    {
      title: "Innovation First",
      description: "We don't follow trends; we create them using cutting-edge technology and creative thinking.",
      icon: Lightbulb,
    },
    {
      title: "Client Partnership",
      description: "Your success is our blueprint. We work as an extension of your team, not just a vendor.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-outfit font-bold text-5xl md:text-6xl mb-6 text-foreground">
              The Architects Behind BluePrynt
            </h1>
            <p className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re not just marketers – we&apos;re digital architects building the future of brand experiences, one blueprint at a time.
            </p>
          </div>
        </section>
        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
                Our Story
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-6">
                    BluePrynt was born from a simple observation: most marketing agencies were building campaigns like houses of cards – flashy but fragile. We believed brands deserved structures built to last.
                  </p>
                  <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-6">
                    Founded by three friends who shared a passion for precision and innovation, we set out to create marketing solutions with the rigor of architecture and the creativity of art.
                  </p>
                  <p className="font-outfit text-lg text-muted-foreground leading-relaxed">
                    Today, we&apos;ve helped 500+ brands build digital foundations that don&apos;t just survive market changes – they thrive in them.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-primary rounded-xl p-8 text-white">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-outfit font-bold text-3xl">500+</div>
                        <div className="font-outfit text-sm opacity-90">Brands Transformed</div>
                      </div>
                      <div>
                        <div className="font-outfit font-bold text-3xl">₹2B+</div>
                        <div className="font-outfit text-sm opacity-90">Revenue Generated</div>
                      </div>
                      <div>
                        <div className="font-outfit font-bold text-3xl">15+</div>
                        <div className="font-outfit text-sm opacity-90">Countries Served</div>
                      </div>
                      <div>
                        <div className="font-outfit font-bold text-3xl">98%</div>
                        <div className="font-outfit text-sm opacity-90">Client Retention</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
              Meet the Architects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div key={member.name} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-card hover:-translate-y-2 transition-all duration-500">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary shadow-glow relative">
                    <Image src={member.image} alt={`${member.name} - ${member.role} at BluePrynt`} width={128} height={128} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-outfit font-semibold text-xl mb-2 text-foreground">{member.name}</h3>
                  <p className="font-outfit text-primary font-medium mb-3">{member.role}</p>
                  <p className="font-outfit text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  {/* Achievements */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.achievements.map((achievement) => (
                      <Badge key={achievement} variant="secondary" className="text-xs">{achievement}</Badge>
                    ))}
                  </div>
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Timeline Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex flex-col sm:flex-row items-start mb-12">
                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-0 sm:mr-6 shadow-glow mb-4 sm:mb-0">
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center mb-3">
                        <Badge variant="secondary" className="mr-3">{milestone.year}</Badge>
                        <h3 className="font-outfit font-semibold text-xl text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="font-outfit text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-16 bg-hero">
          <div className="container mx-auto px-6">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-outfit font-semibold text-xl mb-3 text-foreground">{value.title}</h3>
                  <p className="font-outfit text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-outfit font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Want to Join Our Story?
            </h2>
            <p className="font-outfit text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent and amazing clients to add to our blueprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="hover:scale-110 transition-transform duration-300 shadow-glow text-lg px-8 py-6">
                <Link href="/brand-enquiry">Work With Us<ArrowRight className="ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300 text-lg px-8 py-6 border-2">
                <Link href="/contact">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
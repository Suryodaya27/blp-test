import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Bot, Users, Target, Check, Zap, TrendingUp, Award, BarChart, Lightbulb } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | BluePrynt — Marketing, SEO, AI & Web Architecture Experts",
  description:
    "Explore BluePrynt’s full suite of marketing services — from SEO and AI-driven campaigns to web development and influencer marketing. We design data-backed strategies that build lasting brand structures.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "SEO services",
    "AI marketing",
    "web development",
    "branding",
    "influencer marketing",
    "BluePrynt marketing",
    "growth strategy",
    "social media marketing",
    "content marketing",
  ],
  openGraph: {
    title: "BluePrynt Services — Data-Driven Marketing & AI Innovation",
    description:
      "At BluePrynt, we merge creative storytelling with AI precision to deliver end-to-end marketing solutions — from SEO and web architecture to influencer collaborations.",
    url: "https://blueprynt.io/services",
    siteName: "BluePrynt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BluePrynt Services — Marketing, SEO & AI Architecture",
    description:
      "Discover how BluePrynt helps brands grow through SEO, AI-driven campaigns, and full-stack marketing innovation.",
  },
  alternates: {
    canonical: "https://blueprynt.io/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Services = () => {
  const services = [
    {
      id: "landing-pages",
      title: "Landing Pages",
      subtitle: "High-Converting Digital Storefronts",
      description: "We craft landing pages that don't just look good – they convert. Every element is strategically placed to guide visitors toward action.",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Conversion-Optimized Design",
        "A/B Testing Framework",
        "Mobile-First Approach",
        "Page Speed Optimization",
        "Analytics Integration",
        "Lead Generation Forms"
      ],
      process: [
        {
          step: "Research & Strategy",
          description: "Deep dive into your audience, competitors, and conversion goals."
        },
        {
          step: "Design & Development",
          description: "Create pixel-perfect, conversion-focused landing pages."
        },
        {
          step: "Testing & Optimization",
          description: "Continuous A/B testing to maximize conversion rates."
        },
        {
          step: "Launch & Scale",
          description: "Deploy, monitor, and scale successful page variants."
        }
      ],
      results: "Average 280% increase in conversion rates",
      pricing: "Starting from ₹50,000"
    },
    {
      id: "seo-aeo",
      title: "SEO/AEO",
      subtitle: "Search Visibility That Drives Growth",
      description: "Modern SEO goes beyond keywords. We build search strategies that work for both traditional and AI-powered search engines.",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      features: [
        "Technical SEO Audit",
        "AI-Optimized Content",
        "Local SEO Strategies",
        "Answer Engine Optimization",
        "Voice Search Optimization",
        "Performance Tracking"
      ],
      process: [
        {
          step: "SEO Audit & Analysis",
          description: "Comprehensive audit of your current search presence."
        },
        {
          step: "Strategy Development",
          description: "Create targeted SEO/AEO strategy for your market."
        },
        {
          step: "Content & Technical Optimization",
          description: "Optimize content and technical elements for search."
        },
        {
          step: "Monitoring & Reporting",
          description: "Track rankings, traffic, and conversions continuously."
        }
      ],
      results: "Average 340% increase in organic traffic",
      pricing: "Starting from ₹75,000/month"
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      subtitle: "Intelligent Automation for Modern Marketing",
      description: "Our AI agents work 24/7 to optimize campaigns, personalize experiences, and drive conversions without human intervention.",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      features: [
        "Campaign Optimization Bots",
        "Personalization Engines",
        "Customer Service Automation",
        "Lead Qualification Systems",
        "Content Generation AI",
        "Predictive Analytics"
      ],
      process: [
        {
          step: "AI Strategy Design",
          description: "Identify automation opportunities and AI use cases."
        },
        {
          step: "Agent Development",
          description: "Build and train custom AI agents for your needs."
        },
        {
          step: "Integration & Testing",
          description: "Seamlessly integrate AI agents into your workflow."
        },
        {
          step: "Optimization & Scaling",
          description: "Continuously improve AI performance and scale."
        }
      ],
      results: "Average 420% increase in operational efficiency",
      pricing: "Starting from ₹1,00,000"
    },
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      subtitle: "Authentic Partnerships That Drive Results",
      description: "We connect brands with the right creators to build authentic relationships that translate into measurable business outcomes.",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      features: [
        "Creator Network Access",
        "Campaign Strategy & Planning",
        "Content Creation Oversight",
        "Performance Analytics",
        "Authenticity Verification",
        "ROI Optimization"
      ],
      process: [
        {
          step: "Creator Discovery",
          description: "Find and vet creators aligned with your brand values."
        },
        {
          step: "Campaign Planning",
          description: "Develop strategic campaigns with clear objectives."
        },
        {
          step: "Content Production",
          description: "Oversee content creation and approval processes."
        },
        {
          step: "Performance Analysis",
          description: "Track engagement, reach, and conversion metrics."
        }
      ],
      results: "Average 380% increase in brand awareness",
      pricing: "Starting from ₹2,00,000/campaign"
    },
    {
      id: "social-ads",
      title: "Social Ads",
      subtitle: "Precision-Targeted Campaigns That Convert",
      description: "Data-driven social advertising that reaches the right audience at the right time with the right message across all platforms.",
      icon: Target,
      color: "from-orange-500 to-red-500",
      features: [
        "Multi-Platform Management",
        "Advanced Audience Targeting",
        "Creative Asset Development",
        "Real-Time Optimization",
        "Conversion Tracking",
        "Budget Optimization"
      ],
      process: [
        {
          step: "Audience Research",
          description: "Deep analysis of your target demographics and behaviors."
        },
        {
          step: "Creative Development",
          description: "Design and develop high-converting ad creatives."
        },
        {
          step: "Campaign Launch",
          description: "Launch optimized campaigns across social platforms."
        },
        {
          step: "Optimization & Scaling",
          description: "Continuously optimize for better ROI and scale winners."
        }
      ],
      results: "Average 450% increase in ROAS",
      pricing: "Starting from ₹1,50,000/month"
    }
  ];

  return (
    <div className="min-h-screen pt-24 relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h1
            className="font-outfit font-bold text-5xl md:text-6xl mb-6 text-foreground"
          >
            Services That Build Success
          </h1>
          <p
            className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Five core pillars of digital marketing, engineered with precision and designed for scale.
            Each service is a building block in your growth architecture.
          </p>
          <div
            className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
          >
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="group p-4 rounded-lg border border-border hover:border-border-bright transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:text-cyan transition-colors" />
                <p className="font-outfit text-sm text-foreground group-hover:text-cyan transition-colors">
                  {service.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-card"}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mr-4 shadow-glow`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground">
                        {service.title}
                      </h2>
                      <p className="font-outfit text-lg text-primary font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-2 shrink-0" />
                        <span className="font-outfit text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* Results & Pricing */}
                  <div className="bg-muted rounded-xl p-6 mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <TrendingUp className="w-5 h-5 text-primary mr-2" />
                          <span className="font-outfit font-semibold text-foreground">Results</span>
                        </div>
                        <p className="font-outfit text-sm text-muted-foreground">{service.results}</p>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Award className="w-5 h-5 text-primary mr-2" />
                          <span className="font-outfit font-semibold text-foreground">Investment</span>
                        </div>
                        <p className="font-outfit text-sm text-muted-foreground">{service.pricing}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="hero" asChild>
                    <Link href="/brand-enquiry">
                      Get Started
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
                {/* Process */}
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <div className="bg-linear-to-br from-card to-card-hover rounded-xl p-8 border border-border">
                    <h3 className="font-outfit font-semibold text-xl mb-6 text-foreground">
                      Our Process
                    </h3>
                    <div className="space-y-6">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shrink-0 shadow-blue">
                            <span className="font-outfit font-bold text-sm text-primary-foreground">
                              {stepIndex + 1}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-outfit font-semibold text-foreground mb-1">
                              {step.step}
                            </h4>
                            <p className="font-outfit text-sm text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section
        className="py-24 bg-gradient-hero"
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="font-outfit font-bold text-4xl md:text-5xl mb-6 text-foreground"
          >
            Ready to Build Your Growth Architecture?
          </h2>
          <p
            className="font-outfit text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Let&apos;s discuss which services will form the foundation of your success story.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link href="/brand-enquiry">
                Start Your Blueprint
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
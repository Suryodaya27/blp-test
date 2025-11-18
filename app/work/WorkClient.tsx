"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, TrendingUp, Users, Eye, MousePointer, Heart } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Work = () => {
  const [filter, setFilter] = useState("all");

  const caseStudies = [
    {
      id: 1,
      title: "BeReal Social Commerce",
      client: "BeReal",
      category: "social",
      industry: "Social Media",
      description: "Transformed BeReal's user engagement with strategic influencer partnerships and viral content campaigns.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Engagement Rate", value: "+340%", icon: Heart },
        { label: "User Growth", value: "2.3M", icon: Users },
        { label: "Viral Reach", value: "15M+", icon: Eye },
        { label: "Campaign ROAS", value: "4.8x", icon: TrendingUp },
      ],
      tags: ["Influencer Marketing", "Social Strategy", "Content Creation"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Myntra Fashion Forward",
      client: "Myntra",
      category: "ecommerce",
      industry: "E-commerce",
      description: "Boosted Myntra's seasonal sales with data-driven landing pages and conversion optimization.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Conversion Rate", value: "+280%", icon: MousePointer },
        { label: "Revenue Increase", value: "₹45M", icon: TrendingUp },
        { label: "Traffic Growth", value: "+150%", icon: Eye },
        { label: "ROI", value: "12.4x", icon: TrendingUp },
      ],
      tags: ["Landing Pages", "CRO", "Fashion"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Sugar Cosmetics Glow-Up",
      client: "Sugar Cosmetics",
      category: "beauty",
      industry: "Beauty",
      description: "Revolutionized Sugar's digital presence with AI-powered personalization and micro-influencer campaigns.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Sales Growth", value: "+420%", icon: TrendingUp },
        { label: "Brand Awareness", value: "+65%", icon: Eye },
        { label: "Customer LTV", value: "+180%", icon: Users },
        { label: "Social ROI", value: "8.2x", icon: TrendingUp },
      ],
      tags: ["AI Personalization", "Beauty Tech", "Influencer"],
      color: "from-pink-500 to-orange-500"
    },
    {
      id: 4,
      title: "Flipkart Prime Optimization",
      client: "Flipkart",
      category: "ecommerce",
      industry: "E-commerce",
      description: "Enhanced Flipkart's prime membership conversion through behavioral targeting and smart recommendations.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Prime Signups", value: "+380%", icon: Users },
        { label: "Cart Value", value: "+220%", icon: TrendingUp },
        { label: "Retention", value: "+95%", icon: MousePointer },
        { label: "Revenue", value: "₹120M", icon: TrendingUp },
      ],
      tags: ["AI Agents", "Personalization", "E-commerce"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "Zomato Delivery Revolution",
      client: "Zomato",
      category: "foodtech",
      industry: "FoodTech",
      description: "Increased Zomato's delivery orders through hyper-local targeting and real-time optimization campaigns.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Order Volume", value: "+450%", icon: TrendingUp },
        { label: "New Customers", value: "3.2M", icon: Users },
        { label: "Delivery Speed", value: "-15min", icon: MousePointer },
        { label: "Revenue Growth", value: "₹200M", icon: TrendingUp },
      ],
      tags: ["Hyper-local", "Real-time", "Food Tech"],
      color: "from-red-500 to-yellow-500"
    },
    {
      id: 6,
      title: "EdTech Platform Scale",
      client: "WhiteHat Jr",
      category: "edtech",
      industry: "EdTech",
      description: "Scaled WhiteHat Jr's student acquisition through performance marketing and parent-focused campaigns.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Student Acquisition", value: "+320%", icon: Users },
        { label: "Course Completion", value: "+85%", icon: MousePointer },
        { label: "Parent Satisfaction", value: "94%", icon: Heart },
        { label: "Revenue Growth", value: "₹80M", icon: TrendingUp },
      ],
      tags: ["EdTech", "Parent Marketing", "Performance"],
      color: "from-green-500 to-blue-500"
    }
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "social", label: "Social Media" },
    { id: "beauty", label: "Beauty" },
    { id: "foodtech", label: "FoodTech" },
    { id: "edtech", label: "EdTech" },
  ];

  const filteredCases = filter === "all"
    ? caseStudies
    : caseStudies.filter(study => study.category === filter);

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
            Our Blueprint Gallery
          </h1>
          <p
            className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Every structure tells a story. Here are the digital foundations we&apos;ve built
            that transformed businesses and drove extraordinary results.
          </p>
          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map((filterItem) => (
              <Button
                key={filterItem.id}
                variant={filter === filterItem.id ? "default" : "outline"}
                onClick={() => setFilter(filterItem.id)}
                className="transition-all duration-300"
              >
                {filterItem.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study, index) => (
              <div
                key={study.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-card cursor:pointer"
              >
                {/* <Link href='#'> */}

                  {/* Project Image */}
                  <div className="relative h-48 bg-linear-to-br overflow-hidden">
                    <div className={`absolute inset-0 bg-linear-to-br ${study.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="font-outfit font-bold text-2xl mb-2">{study.client}</h3>
                        <p className="font-outfit opacity-90">{study.industry}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-outfit font-semibold text-xl mb-3 text-foreground group-hover:text-cyan transition-colors">
                      {study.title}
                    </h3>
                    <p className="font-outfit text-muted-foreground mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {study.metrics.slice(0, 4).map((metric, idx) => (
                        <div key={idx} className="text-center p-2 bg-muted rounded-lg">
                          <div className="font-outfit font-bold text-lg text-primary">
                            {metric.value}
                          </div>
                          <div className="font-outfit text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {/* CTA */}
                    {/* <Button variant="outline" asChild className="w-full group-hover:border-cyan group-hover:text-cyan">
                      <Link href={`/work/${study.id}`}>
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button> */}
                  </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-gradient-hero"
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="font-outfit font-bold text-4xl md:text-5xl mb-6 text-foreground"
          >
            Ready to Build Your Success Story?
          </h2>
          <p
            className="font-outfit text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Join the ranks of industry leaders who&apos;ve transformed their business with BluePrynt.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/brand-enquiry">
              Start Your Blueprint
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Work;
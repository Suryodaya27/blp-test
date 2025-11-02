"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Search, Bot, Users, Target, TrendingUp, Award, Globe, ShoppingCart, CreditCard, GraduationCap, Heart, Home as HomeIcon, Building, Mouse } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import AnimatedBackground from "../components/AnimatedBackground";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built with architectural precision that convert visitors into customers.",
    },
    {
      icon: Search,
      title: "SEO/AEO",
      description: "Strategic optimization that builds your digital foundation for sustainable growth.",
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Harness AI to automate, analyze, and accelerate your business growth.",
    },
    {
      icon: Users,
      title: "Branding & Identity",
      description: "Build a memorable brand that resonates and endures.",
    },
    {
      icon: Target,
      title: "Performance Marketing",
      description: "Maximize ROI with data-driven campaigns and precision targeting.",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Solutions",
      description: "Seamless online stores that drive sales and delight customers.",
    },
  ];

  const metrics = [
    { number: "300%+", label: "Avg. ROAS Increase" },
    { number: "48h", label: "Campaign Launch" },
    { number: "100+", label: "Brands Served" },
    { number: "10+", label: "Industries" },
  ];

  const industries = [
    { icon: Building, name: "Real Estate" },
    { icon: GraduationCap, name: "Education" },
    { icon: CreditCard, name: "Fintech" },
    { icon: Heart, name: "Healthcare" },
    { icon: ShoppingCart, name: "Ecommerce" },
    { icon: Users, name: "Social" },
  ];

  return (
    <div className="bg-background relative z-10">
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="min-h-screen lg:pt-24 pt-24 relative  flex items-center justify-center overflow-hidden shadow-xl">
        <motion.div
          className="relative z-10 container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-outfit font-bold text-5xl md:text-6xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block md:inline whitespace-normal wrap-break-words">
              Where <span className="font-[cursive] italic text-cyan-400 text-5xl md:text-7xl drop-shadow-xl tracking-tight">Vision</span> Becomes <span className="font-[cursive] italic text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-5xl md:text-7xl font-extrabold drop-shadow-xl tracking-normal">Reality</span>
            </span>
          </motion.h1>
          <motion.p
            className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We turn raw potential into structures that stand tall.<br />
            Premium marketing solutions with architectural precision.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="default" size="lg" asChild className="hover:scale-110 transition-transform duration-300 shadow-glow text-lg px-8 py-6">
              <Link href="/brand-enquiry">
                Start Your BluePrynt
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300 text-lg px-8 py-6 border-2">
              <Link href="/work">See Our Work</Link>
            </Button>
          </motion.div>
          {/* Trust indicators */}
          <motion.div className="overflow-hidden relative w-full py-14">
            <p className="font-outfit text-base mb-8 tracking-wider uppercase text-center">
              Trusted by industry leaders
            </p>
            <motion.div
              className="flex gap-16 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
                transition={{
                ease: "linear",
                duration: typeof window !== "undefined" && window.innerWidth < 768 ? 12 : 25,
                repeat: Infinity,
              }}
            >
              {[...Array(3)].map((_, i) =>
                ["BeReal", "Myntra", "Flipkart", "Sugar Cosmetics", "Zomato"].map(
                  (brand, index) => (
                    <span
                      key={`${brand}-${i}-${index}`}
                      className="font-outfit font-semibold text-xl hover:text-cyan transition-all duration-300 cursor-pointer hover:scale-110 opacity-70 hover:opacity-100"
                    >
                      {brand}
                    </span>
                  )
                )
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {/* ...existing code... */}

      {/* Services Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <motion.div
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-8 animate-fade-up">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
              BluePrynt Your Success
            </h2>
            <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              Five core pillars that form the foundation of every successful digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5" />
        <motion.div
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center group cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="font-outfit font-bold text-3xl bg-primary bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                  {metric.number}
                </div>
                <div className="font-outfit text-sm text-muted-foreground group-hover:text-cyan transition-colors">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h2 className="font-outfit font-bold text-2xl md:text-4xl mb-4 text-foreground">
              Industries We Transform
            </h2>
            <p className="font-outfit text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we craft solutions that stand the test of time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-card border border-border rounded-lg p-6 text-center hover:bg-card-hover hover:border-border-bright transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <industry.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-cyan transition-colors duration-300 group-hover:scale-110 transform" />
                <p className="font-outfit font-medium text-sm text-foreground group-hover:text-cyan transition-colors">
                  {industry.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Additional Features Section */}
      <section className="py-24 bg-background border-y border-border">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <h2 className="font-outfit font-bold text-2xl md:text-4xl mb-4 text-foreground">
              Why Choose BluePrynt?
            </h2>
            <p className="font-outfit text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              More than an agency – we're your strategic partners in digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "Proven Results", desc: "300% average ROAS increase across all campaigns" },
              { icon: Zap, title: "Lightning Fast", desc: "Deploy campaigns in 48 hours, not weeks" },
              { icon: TrendingUp, title: "Data-Driven", desc: "Every decision backed by real performance data" },
              { icon: HomeIcon, title: "Full-Service", desc: "End-to-end solutions under one roof" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-outfit font-semibold text-lg mb-2 text-foreground group-hover:text-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="font-outfit text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-outfit font-bold text-2xl md:text-4xl mb-4 text-foreground">
              Our BluePrynt Process
            </h2>
            <p className="font-outfit text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that turns vision into measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your brand, audience, and objectives" },
              { step: "02", title: "Strategy", desc: "Craft a custom BluePrynt tailored to your goals" },
              { step: "03", title: "Execute", desc: "Launch campaigns with precision and speed" },
              { step: "04", title: "Optimize", desc: "Continuous improvement based on real-time data" }
            ].map((step, index) => (
              <div key={step.step} className="relative animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-hero border border-border rounded-xl p-6 hover:border-border-bright transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg shadow-glow group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <h3 className="font-outfit font-semibold text-lg mb-3 text-foreground group-hover:text-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-outfit text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-card relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary opacity-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan rounded-lg opacity-10 animate-float" />
        </div> */}

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-outfit font-bold text-2xl md:text-4xl mb-4 text-foreground">
            Find Your Missing Piece Today
          </h2>
          <p className="font-outfit text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Every great structure starts with a solid BluePrynt. Let's build yours.
          </p>

          <Button variant="default" size="lg" asChild>
            <Link href="/brand-enquiry">
              Start Your BluePrynt
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
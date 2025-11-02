"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Twitter, Award, Target, Lightbulb, Users } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import ayushImage from "@/assets/ayush_img_2.jpg";
import vruttiImage from "@/assets/vrutti-2.png";
import suryodayaImage from "@/assets/pandery-2.jpg";

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
        <motion.section className="py-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="container mx-auto px-6 text-center">
            <motion.h1 className="font-outfit font-bold text-5xl md:text-6xl mb-6 text-foreground" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              The Architects Behind BluePrynt
            </motion.h1>
            <motion.p className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              We're not just marketers – we're digital architects building the future of brand experiences, one blueprint at a time.
            </motion.p>
          </div>
        </motion.section>
        {/* Story Section */}
        <motion.section className="py-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 className="font-outfit font-bold text-3xl md:text-4xl mb-8 text-center text-foreground" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
                Our Story
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                    BluePrynt was born from a simple observation: most marketing agencies were building campaigns like houses of cards – flashy but fragile. We believed brands deserved structures built to last.
                  </motion.p>
                  <motion.p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
                    Founded by three friends who shared a passion for precision and innovation, we set out to create marketing solutions with the rigor of architecture and the creativity of art.
                  </motion.p>
                  <motion.p className="font-outfit text-lg text-muted-foreground leading-relaxed" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
                    Today, we've helped 500+ brands build digital foundations that don't just survive market changes – they thrive in them.
                  </motion.p>
                </div>
                <motion.div className="relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
                  <div className="bg-primary rounded-xl p-8 text-primary-foreground">
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
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* Team Section */}
        <motion.section className="py-16 bg-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="container mx-auto px-6">
            <motion.h2 className="font-outfit font-bold text-3xl md:text-4xl mb-12 text-center text-foreground" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              Meet the Architects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <motion.div key={member.name} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-card hover:-translate-y-2 transition-all duration-500" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Timeline Section */}
        <motion.section className="py-16 bg-background" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="container mx-auto px-6">
            <motion.h2 className="font-outfit font-bold text-3xl md:text-4xl mb-12 text-center text-foreground" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              Our Journey
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
                {milestones.map((milestone, index) => (
                  <motion.div key={milestone.year} className="relative flex flex-col sm:flex-row items-start mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-0 sm:mr-6 shadow-glow mb-4 sm:mb-0">
                      <milestone.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center mb-3">
                        <Badge variant="secondary" className="mr-3">{milestone.year}</Badge>
                        <h3 className="font-outfit font-semibold text-xl text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="font-outfit text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
        {/* Values Section */}
        <motion.section className="py-16 bg-hero" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="container mx-auto px-6">
            <motion.h2 className="font-outfit font-bold text-3xl md:text-4xl mb-12 text-center text-foreground" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              Our Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div key={value.title} className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-outfit font-semibold text-xl mb-3 text-foreground">{value.title}</h3>
                  <p className="font-outfit text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* CTA Section */}
        <motion.section className="py-24 bg-background" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="container mx-auto px-6 text-center">
            <motion.h2 className="font-outfit font-bold text-4xl md:text-5xl mb-6 text-foreground" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
              Want to Join Our Story?
            </motion.h2>
            <motion.p className="font-outfit text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              We're always looking for exceptional talent and amazing clients to add to our blueprint.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Button variant="hero" size="lg" asChild className="hover:scale-110 transition-transform duration-300 shadow-glow text-lg px-8 py-6">
                <Link href="/brand-enquiry">Work With Us<ArrowRight className="ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300 text-lg px-8 py-6 border-2">
                <Link href="/contact">Join Our Team</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
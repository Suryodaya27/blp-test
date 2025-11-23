"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User } from "lucide-react";
import { z } from "zod";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import InfluencerSignupPage from "@/app/influencer-form/page";
import InfluencerSignupPage from "@/components/InfluencerForm";
import BrandForm from "@/components/BrandForm";
import { contactFormSchema, type ContactFormData } from "@/components/FormValidation";

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactFormSchema.parse(formData);
      setErrors({});
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Locations",
      details: [
        "Mumbai: WeWork, Andheri East",
        "Delhi: Connaught Place",
        "Bangalore: Koramangala"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@blueprynt.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"]
    }
  ];

  const services = [
    "Landing Pages",
    "SEO/AEO",
    "AI Agents",
    "Influencer Marketing",
    "Social Ads",
    "Full Marketing Stack",
    "Other"
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
            Let&apos;s Build Something Amazing
          </h1>
          <p
            className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to transform your business? We&apos;d love to hear about your vision
            and show you how we can bring it to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-8 text-foreground">
                Get In Touch
              </h2>
              <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you&apos;re a startup looking to make your mark or an enterprise
                ready to scale, we&apos;re here to help you build the foundation for lasting success.
              </p>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-0 shadow-glow">
                      <info.icon className="w-12 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-outfit text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Quick Actions */}
              <div className="mt-12 space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:contact@blueprynt.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/brand-enquiry">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Start Project Brief
                  </Link>
                </Button>
              </div>
            </div>
            {/* Contact Form (now tabbed: Influencer | Brand) */}
            <div className="bg-card border border-border rounded-xl p-8 order-1 lg:order-2">
              <Tabs defaultValue="influencer">
                <div className="flex items-center justify-center gap-5 w-full">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Select your role</span>
                  </div>

                  <TabsList className="flex bg-muted rounded-full p-1">
                    <TabsTrigger
                      value="influencer"
                      className="px-4 py-1 rounded-full text-sm data-[state=active]:bg-primary data-[state=active]:text-white transition"
                    >
                      Influencer
                    </TabsTrigger>

                    <TabsTrigger
                      value="brand"
                      className="px-4 py-1 rounded-full text-sm data-[state=active]:bg-primary data-[state=active]:text-white transition"
                    >
                      Brand
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="mt-6">
                  <TabsContent value="influencer">
                    <InfluencerSignupPage />
                  </TabsContent>

                  <TabsContent value="brand">
                    <BrandForm />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section
        className="py-16 bg-card"
      >
        <div className="container mx-auto px-6">
          <h2
            className="font-outfit font-bold text-3xl md:text-4xl mb-8 text-center text-foreground"
          >
            Visit Our Offices
          </h2>
          <div
            className="max-w-4xl mx-auto"
          >
            <div className="bg-muted rounded-xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-outfit font-semibold text-xl text-foreground mb-4">
                We&apos;re Located Across India
              </h3>
              <p className="font-outfit text-muted-foreground mb-6">
                With offices in Mumbai, Delhi, and Bangalore, we&apos;re always close to our clients.
                Schedule a visit to see our team in action.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {['Mumbai', 'Delhi', 'Bangalore'].map((city) => (
                  <div key={city} className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-outfit font-semibold text-foreground mb-2">{city}</h4>
                    <p className="font-outfit text-sm text-muted-foreground">
                      Schedule a visit to our {city} office
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

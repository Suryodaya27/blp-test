"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, CheckCircle, Upload, Building, Mail, Phone, Globe, Calendar, DollarSign, Target, FileText } from "lucide-react";
import { z } from "zod";
import AnimatedBackground from "@/components/AnimatedBackground";
import { brandEnquirySchema, type BrandEnquiryFormData } from "@/components/FormValidation";

function BrandEnquiry() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<BrandEnquiryFormData>>({});
  const [formData, setFormData] = useState<BrandEnquiryFormData>({
    // Company Info
    companyName: "",
    website: "",
    industry: "",
    companySize: "",
    
    // Contact Info
    fullName: "",
    email: "",
    phone: "",
    position: "",
    
    // Project Details
    services: [] as string[],
    budget: "",
    timeline: "",
    
    // Challenges & Goals
    challenges: "",
    goals: "",
    currentMarketing: "",
    
    // Additional Info
    additionalInfo: "",
    hearAboutUs: "",
  });

  const totalSteps = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Validation for required fields on first step
  const validateStep1 = () => {
    const newErrors: Partial<BrandEnquiryFormData> = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!formData.industry.trim()) newErrors.industry = "Industry is required.";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!validateStep1()) return;
    }
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const services = [
    "Landing Pages",
    "SEO/AEO", 
    "AI Agents",
    "Influencer Marketing",
    "Social Ads",
    "Full Marketing Stack"
  ];

  const industries = [
    "E-commerce", "SaaS", "FinTech", "HealthTech", "EdTech", "Real Estate",
    "Fashion & Beauty", "Food & Beverage", "Travel & Hospitality", "Other"
  ];

  const budgetRanges = [
    "₹50K - ₹2L", "₹2L - ₹5L", "₹5L - ₹10L", "₹10L - ₹25L", "₹25L+"
  ];

  const timelines = [
    "ASAP", "1-2 weeks", "1 month", "2-3 months", "3-6 months", "6+ months"
  ];

  const companySizes = [
    "Startup (1-10)", "Small (11-50)", "Medium (51-200)", "Large (201-1000)", "Enterprise (1000+)"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-glow">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              {/* Floating cubes animation */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan rounded-md animate-float opacity-60" />
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-primary rounded-md animate-float opacity-40" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-cyan rounded-sm animate-float opacity-50" style={{ animationDelay: "1s" }} />
            </div>
            
            <h1 className="font-outfit font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Your Blueprint is in Motion
            </h1>
            
            <p className="font-outfit text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for sharing your vision with us! Our team is already reviewing your 
              requirements and will get back to you within 24 hours with a custom blueprint.
            </p>
            
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h3 className="font-outfit font-semibold text-lg text-foreground mb-4">
                What happens next?
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <span className="font-outfit text-muted-foreground">Strategy session within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <span className="font-outfit text-muted-foreground">Custom blueprint presentation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <span className="font-outfit text-muted-foreground">Project kickoff & timeline</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pb-5">
              <Button variant="hero" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link href="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-background relative">
      <AnimatedBackground />

      {/* Header */}
      <section
        className="py-6 bg-gradient-hero"
      >
        <div className="container mx-auto px-3 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="font-outfit font-bold text-2xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-foreground"
            >
              Start Your Blueprint
            </h1>
            <p
              className="font-outfit text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6"
            >
              Tell us about your vision, and we&apos;ll craft a custom strategy to bring it to life.
            </p>
            {/* Progress Bar */}
            <div
              className="w-full overflow-x-auto flex items-center justify-center mb-4 sm:mb-6 scrollbar-hide"
            >
              <div className="flex items-center space-x-2 min-w-[320px] sm:min-w-0">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      i + 1 <= currentStep 
                        ? "bg-primary text-primary-foreground shadow-glow" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {i + 1 <= currentStep ? (
                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ) : (
                        <span className="text-xs font-bold">{i + 1}</span>
                      )}
                    </div>
                    {i < totalSteps - 1 && (
                      <div className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 transition-all duration-300 ${
                        i + 1 < currentStep ? "bg-primary" : "bg-muted"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p
              className="font-outfit text-xs sm:text-sm text-muted-foreground"
            >
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section
        className="py-6 sm:py-12"
      >
        <div className="container mx-auto px-3 sm:px-6">
          <div className="max-w-lg sm:max-w-2xl mx-auto">
            <div
              className="bg-card border border-border rounded-xl p-4 sm:p-8"
            >
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-outfit font-bold text-2xl text-foreground mb-2">
                      Company Information
                    </h2>
                    <p className="font-outfit text-muted-foreground">
                      Tell us about your business and what you do.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="mt-1"
                      required
                    />
                    {errors.companyName && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.companyName}</span>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground"
                      required
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    {errors.industry && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.industry}</span>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-1"
                      required
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="mt-1"
                      required
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="companySize">Company Size</Label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground"
                    >
                      <option value="">Select company size</option>
                      {companySizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-outfit font-bold text-2xl text-foreground mb-2">
                      Contact Information
                    </h2>
                    <p className="font-outfit text-muted-foreground">
                      How can we reach you to discuss your project?
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="Your role/title"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}
              {/* Step 3: Services & Budget */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-outfit font-bold text-2xl text-foreground mb-2">
                      Services & Investment
                    </h2>
                    <p className="font-outfit text-muted-foreground">
                      What services are you interested in and what&apos;s your budget?
                    </p>
                  </div>
                  <div>
                    <Label>Services Interested In *</Label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`p-3 rounded-lg border text-left transition-all duration-300 ${
                            formData.services.includes(service)
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-border-bright text-foreground"
                          }`}
                        >
                          <span className="font-outfit text-sm">{service}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {/* Step 4: Challenges & Goals */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-outfit font-bold text-2xl text-foreground mb-2">
                      Challenges & Goals
                    </h2>
                    <p className="font-outfit text-muted-foreground">
                      Help us understand your current situation and objectives.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="challenges">What are your main marketing challenges? *</Label>
                    <Textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleInputChange}
                      placeholder="Describe the key challenges you're facing with your current marketing efforts..."
                      rows={4}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="goals">What are your primary goals? *</Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="What do you want to achieve? (e.g., increase sales, improve brand awareness, generate leads...)"
                      rows={4}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentMarketing">Current Marketing Efforts</Label>
                    <Textarea
                      id="currentMarketing"
                      name="currentMarketing"
                      value={formData.currentMarketing}
                      onChange={handleInputChange}
                      placeholder="Tell us about your current marketing activities, tools, and team..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>
                </div>
              )}
              {/* Step 5: Additional Information */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-outfit font-bold text-2xl text-foreground mb-2">
                      Final Details
                    </h2>
                    <p className="font-outfit text-muted-foreground">
                      Any additional information that would help us understand your needs better.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Anything else you'd like us to know about your project, expectations, or requirements..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                    <select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="blog">Blog/Content</option>
                      <option value="event">Event/Conference</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {/* File Upload */}
                  <div>
                    <Label>Upload Files (Optional)</Label>
                    <div className="mt-1 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-border-bright transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="font-outfit text-sm text-muted-foreground mb-1">
                        Upload any relevant documents, briefs, or materials
                      </p>
                      <p className="font-outfit text-xs text-muted-foreground">
                        PDF, DOC, PPT files up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                {currentStep === totalSteps ? (
                  <Button
                    variant="hero"
                    onClick={handleSubmit}
                    className="flex items-center"
                  >
                    Submit Blueprint
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    onClick={nextStep}
                    className="flex items-center"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandEnquiry;
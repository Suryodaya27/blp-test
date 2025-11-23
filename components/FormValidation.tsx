import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase(),
  company: z.string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

// Brand Enquiry Schema
export const brandEnquirySchema = z.object({
  // Company Info
  companyName: z.string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  website: z.string()
    .url("Please enter a valid website URL")
    .max(255, "Website URL must be less than 255 characters")
    .optional()
    .or(z.literal("")),
  industry: z.string().min(1, "Please select an industry"),
  companySize: z.string().min(1, "Please select company size"),
  
  // Contact Info
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase(),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number"),
  position: z.string()
    .min(2, "Position must be at least 2 characters")
    .max(100, "Position must be less than 100 characters"),
  
  // Project Details
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  
  // Challenges & Goals
  challenges: z.string()
    .min(10, "Please describe your challenges (at least 10 characters)")
    .max(2000, "Challenges description must be less than 2000 characters"),
  goals: z.string()
    .min(10, "Please describe your goals (at least 10 characters)")
    .max(2000, "Goals description must be less than 2000 characters"),
  currentMarketing: z.string()
    .min(10, "Please describe your current marketing (at least 10 characters)")
    .max(2000, "Current marketing description must be less than 2000 characters"),
  
  // Additional Info
  additionalInfo: z.string()
    .max(2000, "Additional information must be less than 2000 characters")
    .optional(),
  hearAboutUs: z.string().min(1, "Please let us know how you heard about us"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BrandEnquiryFormData = z.infer<typeof brandEnquirySchema>;

// Influencer Form Schema
export const influencerFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  location: z.string()
    .min(2, "Location must be at least 2 characters")
    .max(255, "Location must be less than 255 characters"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number"),
  category: z.array(z.string()).min(1, "Please select at least one category"),
  socialMedia: z.array(z.object({
    platform: z.string().min(1, "Platform is required"),
    username: z.string().min(1, "Username is required"),
    followers: z.string().min(1, "Followers/Subscribers is required"),
    collaborationType: z.enum(["paid", "barter", "both"]),
    minimumBudget: z.string().optional().or(z.literal("")),
  })).min(1, "Please add at least one social media account"),
});

export type InfluencerFormData = z.infer<typeof influencerFormSchema>;
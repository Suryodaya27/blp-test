"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { z } from "zod";
import AnimatedBackground from "@/components/AnimatedBackground";
import { contactFormSchema, type ContactFormData } from "@/components/FormValidation";

export default function BrandForm() {
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

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        try {
            contactFormSchema.parse(formData);
            setErrors({});
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
            });
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3500);
        } catch (error) {
            // Print a clear error for debugging
            // eslint-disable-next-line no-console
            console.error("Form submit error:", error);

            if (error instanceof z.ZodError) {
                // Log structured issues to console for easier debugging
                // eslint-disable-next-line no-console
                console.error("Validation issues:", JSON.stringify(error.issues, null, 2));

                const fieldErrors: Partial<ContactFormData> = {};
                error.issues.forEach((issue) => {
                    const key = issue.path && issue.path[0] ? String(issue.path[0]) : "form";
                    fieldErrors[key as keyof ContactFormData] = issue.message;
                });

                setErrors(fieldErrors);
                return;
            }

            return;
        }
    };

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
        <div className="relative">
            <AnimatedBackground />

            <div className="container mx-auto">
                <div className="max-w-lg sm:max-w-2xl mx-auto">
                    <Card className="bg-card border border-border rounded-xl">
                        <CardContent className="p-0">
                            {isSubmitted ? (
                                <div className="text-center py-12 animate-scale-in">
                                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-outfit font-semibold text-xl text-foreground mb-2">Message Sent!</h3>
                                    <p className="font-outfit text-muted-foreground">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold mb-4 font-outfit text-foreground">Brand Signup</h3>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your full name"
                                            aria-label="Name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your@email.com"
                                            aria-label="Email"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder="Company Name"
                                                aria-label="Company"
                                            />
                                            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

                                            <Input
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Phone"
                                                aria-label="Phone"
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                        </div>

                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="mt-0 w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground appearance-none pr-10"
                                            style={{
                                                backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%2394a3b8' stroke-width='1.5'><path d='M6 8l4 4 4-4' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "right 1rem center",
                                                backgroundSize: "1rem",
                                            }}
                                            aria-label="Service Interest"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your project, goals, and how we can help..."
                                            rows={5}
                                            aria-label="Message"
                                        />
                                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                                        <Button type="submit" className="w-full">
                                            Send Message
                                            <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
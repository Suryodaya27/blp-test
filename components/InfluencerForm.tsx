"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Plus } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { influencerFormSchema, InfluencerFormData } from "@/components/FormValidation";
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const PLATFORMS = [
    { id: "instagram", label: "Instagram" },
    { id: "youtube", label: "YouTube" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "snapchat", label: "Snapchat" },
    { id: "tiktok", label: "TikTok" },
    { id: "twitter", label: "X (Twitter)" },
];

const CATEGORY_OPTIONS = [
    "fashion",
    "beauty",
    "tech",
    "fitness",
    "travel",
    "lifestyle",
    "business",
    "food",
    "entertainment",
    "finance"
];

type SocialMediaItem = {
    platform: string;
    username: string;
    followers: string;
    collaborationType: string;
    minimumBudget: string;
};

type InfluencerPayload = {
    name: string;
    email: string;
    location: string;
    phone: string;
    category: string[];
    socialMedia: SocialMediaItem[];
    submittedAt: string;
};

export default function InfluencerSignupPage() {
    const [socialMedia, setSocialMedia] = useState<SocialMediaItem[]>([]);
    const [selectedPlatform, setSelectedPlatform] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [category, setCategory] = useState<string[]>([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [submittedInfluencer, setSubmittedInfluencer] = useState<InfluencerPayload | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState<string>('');

    function toggleCategory(opt: string) {
        setCategory((prev) => (prev.includes(opt) ? prev.filter((c) => c !== opt) : [...prev, opt]));
    }

    function addPlatform() {
        if (!selectedPlatform) return;
        setSocialMedia([
            ...socialMedia,
            { platform: selectedPlatform, username: "", followers: "", collaborationType: "", minimumBudget: "" },
        ]);
        setSelectedPlatform("");
    }

    function updateUsername(index: number, value: string) {
        const updated = [...socialMedia];
        updated[index].username = value;
        setSocialMedia(updated);
    }

    function updateFollowers(index: number, value: string) {
        const updated = [...socialMedia];
        updated[index].followers = value;
        setSocialMedia(updated);
    }

    function updateCollaborationType(index: number, value: string) {
        const updated = [...socialMedia];
        updated[index].collaborationType = value;
        setSocialMedia(updated);
    }

    function updateMinimumBudget(index: number, value: string) {
        const updated = [...socialMedia];
        updated[index].minimumBudget = value;
        setSocialMedia(updated);
    }

    function removePlatform(index: number) {
        setSocialMedia(socialMedia.filter((_, i) => i !== index));
    }

    async function handleSubmit() {
        setIsLoading(true);

        const payload: InfluencerPayload = {
            name,
            email,
            location,
            category,
            phone,
            socialMedia,
            submittedAt: new Date().toISOString(),
        };

        try {
            // Validate with Zod schema
            const result = influencerFormSchema.safeParse(payload);

            if (!result.success) {
                const map: Record<string, string> = {};
                result.error.issues.forEach((issue) => {
                    const key = issue.path.length ? issue.path.join(".") : "form";
                    if (!map[key]) map[key] = issue.message;
                });
                setErrors(map);
                return;
            }

            setErrors({});
            setSubmitError('');

            const response = await fetch('/api/contact-influencer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result2 = await response.json();

            if (!response.ok) {
                setSubmitError(result2.error || 'Failed to submit form');
                return;
            }

            // Clear the form
            setName("");
            setEmail("");
            setLocation("");
            setPhone("");
            setSocialMedia([]);
            setSelectedPlatform("");
            setCategory([]);

            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 4000);
        } catch (error) {
            setSubmitError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="relative">
            <AnimatedBackground />

            <div className="container mx-auto">
                <div className="max-w-lg sm:max-w-2xl mx-auto">
                    <Card className="px-10 border border-border rounded-xl">
                        <CardContent className="p-0">
                            {isSubmitted ? (
                                <div className="text-center py-12 animate-scale-in">
                                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="font-outfit font-semibold text-xl text-foreground mb-2">Message Sent!</h3>
                                    <p className="font-outfit text-muted-foreground">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-3xl font-bold mb-4 font-outfit text-foreground">Influencer Signup</h2>

                                    <div className="space-y-4">
                                        <Input placeholder="Your Name" value={name} onChange={(e) => setName((e.target as HTMLInputElement).value)} />
                                        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                                        <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail((e.target as HTMLInputElement).value)} />
                                        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                                        <Input placeholder="Location" value={location} onChange={(e) => setLocation((e.target as HTMLInputElement).value)} />
                                        {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location}</p>}
                                        <Input placeholder="Phone" value={phone} onChange={(e) => setPhone((e.target as HTMLInputElement).value)} />
                                        {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                                        <div className="mt-4 space-y-2">
                                            <p className="font-medium text-sm text-foreground">Category</p>

                                            {/* Selected category pills */}
                                            <div className="flex flex-wrap gap-2">
                                                {category.length > 0 ? (
                                                    category.map((c) => (
                                                        <span
                                                            key={c}
                                                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full capitalize border border-primary/20 shadow-sm"
                                                        >
                                                            {c}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="text-muted-foreground text-sm">
                                                        No categories selected
                                                    </span>
                                                )}
                                            </div>

                                            {errors.category && <p className="text-sm text-red-600 mt-2">{errors.category}</p>}

                                            {/* Dropdown Trigger */}
                                            <button
                                                type="button"
                                                onClick={() => setIsCategoryOpen((s) => !s)}
                                                className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-muted border border-border hover:bg-muted/70 transition-colors text-sm"
                                            >
                                                <span>Select categories</span>
                                                <svg
                                                    className={`ml-2 w-4 h-4 text-muted-foreground transition-transform ${isCategoryOpen ? "rotate-180" : ""
                                                        }`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        d="M6 8l4 4 4-4"
                                                        strokeWidth={1.5}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>

                                            {/* Dropdown Panel */}
                                            {isCategoryOpen && (
                                                <div className="relative">
                                                    <div className="absolute z-20 mt-2 w-full bg-card border border-border rounded-xl shadow-lg p-4 animate-in fade-in slide-in-from-top-2 duration-150">

                                                        <div className="grid grid-cols-2 gap-2">
                                                            {CATEGORY_OPTIONS.map((opt) => {
                                                                const selected = category.includes(opt);

                                                                return (
                                                                    <label
                                                                        key={opt}
                                                                        className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer transition
                  ${selected ? "bg-primary/10" : "hover:bg-accent/40"}
                `}
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={selected}
                                                                            onChange={() => toggleCategory(opt)}
                                                                            className="accent-primary w-4 h-4 rounded"
                                                                        />
                                                                        <span className="capitalize text-sm">{opt}</span>
                                                                    </label>
                                                                );
                                                            })}
                                                        </div>

                                                        <div className="mt-3 flex justify-end">
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                onClick={() => setIsCategoryOpen(false)}
                                                                className="rounded-full px-5"
                                                            >
                                                                Done
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-6">
                                            <p className="font-semibold mb-2">Social Media Accounts</p>

                                            <div className="flex gap-3">
                                                <select
                                                    value={selectedPlatform}
                                                    onChange={(e) => setSelectedPlatform(e.target.value)}
                                                    className="mt-1 w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground appearance-none pr-10"
                                                    style={{
                                                        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%2394a3b8' stroke-width='1.5'><path d='M6 8l4 4 4-4' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "right 1rem center",
                                                        backgroundSize: "1rem",
                                                    }}
                                                >
                                                    <option value="">Select Platform and click &apos;+&apos;</option>
                                                    {PLATFORMS.map((p) => (
                                                        <option key={p.id} value={p.id}>
                                                            {p.label}
                                                        </option>
                                                    ))}
                                                </select>

                                                <Button onClick={addPlatform} variant="outline">
                                                    <Plus className="w-4 h-4" />
                                                </Button>
                                            </div>

                                            <div className="mt-4 space-y-3">
                                                {socialMedia.map((item, index) => (
                                                    <Card key={index} className="relative bg-card border border-border rounded-lg">
                                                        <CardContent className="p-4 space-y-2">
                                                            <div className="flex justify-between items-center">
                                                                <p className="text-sm font-medium text-foreground">
                                                                    {PLATFORMS.find((p) => p.id === item.platform)?.label}
                                                                </p>
                                                                <button
                                                                    onClick={() => removePlatform(index)}
                                                                    className="text-muted-foreground hover:text-red-600"
                                                                    aria-label="Remove social platform"
                                                                >
                                                                    <X className="w-4 h-4" />
                                                                </button>
                                                            </div>

                                                            <Input
                                                                placeholder="Username"
                                                                value={item.username}
                                                                onChange={(e) => updateUsername(index, e.target.value)}
                                                                className="bg-input"
                                                            />
                                                            {errors[`socialMedia.${index}.username`] && (
                                                                <p className="text-sm text-red-600">{errors[`socialMedia.${index}.username`]}</p>
                                                            )}
                                                            <Input
                                                                placeholder="Followers/Subscribers"
                                                                value={item.followers}
                                                                onChange={(e) => updateFollowers(index, e.target.value)}
                                                                className="bg-input"
                                                            />
                                                            {errors[`socialMedia.${index}.followers`] && (
                                                                <p className="text-sm text-red-600">{errors[`socialMedia.${index}.followers`]}</p>
                                                            )}
                                                            <select
                                                                value={item.collaborationType}
                                                                onChange={(e) => updateCollaborationType(index, e.target.value)}
                                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base appearance-none pr-8 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                                            >
                                                                <option value="">Select collaboration type</option>
                                                                <option value="paid">Paid</option>
                                                                <option value="barter">Barter</option>
                                                                <option value="both">Both</option>
                                                            </select>
                                                            {errors[`socialMedia.${index}.collaborationType`] && (
                                                                <p className="text-sm text-red-600">{errors[`socialMedia.${index}.collaborationType`]}</p>
                                                            )}
                                                            <select
                                                                value={item.minimumBudget}
                                                                onChange={(e) => updateMinimumBudget(index, e.target.value)}
                                                                className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-outfit text-foreground"
                                                            >
                                                                <option value="">Select budget</option>
                                                                <option value="<5k">&lt;5k</option>
                                                                <option value="5-10k">5-10k</option>
                                                                <option value="10-25k">10-25k</option>
                                                                <option value="25-50k">25-50k</option>
                                                                <option value="50k+">50k+</option>
                                                            </select>
                                                            {errors[`socialMedia.${index}.minimumBudget`] && (
                                                                <p className="text-sm text-red-600">{errors[`socialMedia.${index}.minimumBudget`]}</p>
                                                            )}
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                        {errors.socialMedia && <p className="text-sm text-red-600 mt-1">{errors.socialMedia}</p>}

                                        {submitError && (
                                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                                                {submitError}
                                            </div>
                                        )}

                                        <div className="mt-6">
                                            <Button className="w-full" onClick={handleSubmit} disabled={isLoading}>
                                                {isLoading ? 'Submitting...' : 'Submit'}
                                            </Button>
                                            {isSubmitted && (
                                                <p className="text-sm text-muted-foreground mt-3">Thanks — your data has been captured.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>)}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

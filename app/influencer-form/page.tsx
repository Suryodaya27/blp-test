"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Plus } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const PLATFORMS = [
    { id: "instagram", label: "Instagram" },
    { id: "youtube", label: "YouTube" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "snapchat", label: "Snapchat" },
    { id: "tiktok", label: "TikTok" },
    { id: "twitter", label: "X (Twitter)" },
];

type SocialMediaItem = { platform: string; username: string };

type InfluencerPayload = {
    name: string;
    location: string;
    genre: string;
    socialMedia: SocialMediaItem[];
    submittedAt: string;
};

export default function InfluencerSignupPage() {
    const [socialMedia, setSocialMedia] = useState<{ platform: string; username: string }[]>([]);
    const [selectedPlatform, setSelectedPlatform] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [submittedInfluencer, setSubmittedInfluencer] = useState<InfluencerPayload | null>(null);

    function addPlatform() {
        if (!selectedPlatform) return;
        setSocialMedia([
            ...socialMedia,
            { platform: selectedPlatform, username: "" },
        ]);
        setSelectedPlatform("");
    }

    function updateUsername(index: number, value: string) {
        const updated = [...socialMedia];
        updated[index].username = value;
        setSocialMedia(updated);
    }

    function removePlatform(index: number) {
        setSocialMedia(socialMedia.filter((_, i) => i !== index));
    }
    
    function handleSubmit() {
        const payload: InfluencerPayload = {
            name,
            location,
            genre,
            socialMedia,
            submittedAt: new Date().toISOString(),
        };

        // Store the submitted object (could be sent to API instead)
        setSubmittedInfluencer(payload);

        // eslint-disable-next-line no-console
        console.log("Influencer form submit:", payload);

        // Clear the form so the page looks clean
        setName("");
        setLocation("");
        setGenre("");
        setSocialMedia([]);
        setSelectedPlatform("");

        // Show a brief confirmation
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
    }

    return (
        <div className="relative">
            <AnimatedBackground />

            <div className="container mx-auto px-3 sm:px-6">
                <div className="max-w-lg sm:max-w-2xl mx-auto py-8 px-2">
                    <Card className="bg-card border border-border rounded-xl p-4 sm:p-8">
                        <CardContent className="p-0">
                            <h2 className="text-3xl font-bold mb-4 text-foreground">Influencer Signup</h2>

                            <div className="space-y-4">
                                <Input placeholder="Your Name" value={name} onChange={(e) => setName((e.target as HTMLInputElement).value)} />
                                <Input placeholder="Location" value={location} onChange={(e) => setLocation((e.target as HTMLInputElement).value)} />
                                <Input placeholder="Genre / Niche" value={genre} onChange={(e) => setGenre((e.target as HTMLInputElement).value)} />

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
                                            <option value="">Select Platform</option>
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
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Button className="w-full" onClick={handleSubmit}>Submit</Button>
                                    {isSubmitted && (
                                        <p className="text-sm text-muted-foreground mt-3">Thanks — your data has been captured.</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

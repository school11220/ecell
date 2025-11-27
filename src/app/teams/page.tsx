import { SectionWrapper } from "@/components/SectionWrapper";
import { TeamCard } from "@/components/TeamCard";
import { Palette, Code, Megaphone, Calendar, Handshake, PenTool } from "lucide-react";

export default function TeamsPage() {
    const teams = [
        {
            title: "Design Team",
            description: "The creative minds behind our brand identity, social media graphics, and UI/UX designs.",
            icon: Palette,
            openings: 3,
        },
        {
            title: "Tech Team",
            description: "Developers who build and maintain our website, apps, and technical infrastructure.",
            icon: Code,
            openings: 5,
        },
        {
            title: "Content Team",
            description: "Storytellers who craft compelling narratives for our blogs, newsletters, and social media.",
            icon: PenTool,
            openings: 4,
        },
        {
            title: "PR & Outreach",
            description: "The face of E-Cell, connecting with speakers, sponsors, and other organizations.",
            icon: Handshake,
            openings: 4,
        },
        {
            title: "Events & Management",
            description: "Planners and executors who ensure every event runs smoothly and successfully.",
            icon: Calendar,
            openings: 6,
        },
        {
            title: "Marketing",
            description: "Strategists who promote our events and initiatives to reach a wider audience.",
            icon: Megaphone,
            openings: 3,
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                <SectionWrapper>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Teams</h1>
                        <p className="text-xl text-muted-foreground">
                            E-Cell is powered by passionate individuals working across various domains. Find where you fit in.
                        </p>
                    </div>
                </SectionWrapper>

                <SectionWrapper delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teams.map((team, index) => (
                            <TeamCard key={index} {...team} />
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
}

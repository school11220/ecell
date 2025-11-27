import { SectionWrapper } from "@/components/SectionWrapper";
import { GlassCard } from "@/components/GlassCard";
import { Calendar, Lightbulb, Users, Rocket, Award, Building } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <SectionWrapper>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About ECELL RVITM</h1>
                        <p className="text-xl text-[var(--muted-foreground)] leading-relaxed">
                            We are a community of dreamers, doers, and disruptors dedicated to fostering innovation, creativity, and entrepreneurial spirit among students.
                        </p>
                    </div>
                </SectionWrapper>

                {/* Our Mission */}
                <SectionWrapper delay={0.1} className="mb-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
                        <GlassCard className="p-8">
                            <p className="text-lg text-[var(--foreground)] leading-relaxed text-center">
                                The Entrepreneurship Cell at RV Institute of Technology & Management is dedicated to fostering innovation, creativity, and entrepreneurial spirit among students. We provide a platform for aspiring entrepreneurs to transform their ideas into reality through mentorship, workshops, and networking opportunities.
                            </p>
                        </GlassCard>
                    </div>
                </SectionWrapper>

                {/* What We Do */}
                <SectionWrapper delay={0.2} className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Rocket, title: "Organize entrepreneurship summits and startup competitions" },
                            { icon: Lightbulb, title: "Conduct workshops on business strategy and innovation" },
                            { icon: Users, title: "Connect students with industry mentors and investors" },
                            { icon: Building, title: "Provide incubation support for student startups" },
                        ].map((item, index) => (
                            <GlassCard key={index} className="flex items-start gap-4 p-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center text-[var(--primary)]">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <p className="text-[var(--foreground)] leading-relaxed">{item.title}</p>
                            </GlassCard>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Past Events */}
                <SectionWrapper delay={0.3} className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Past Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "E-Summit 2025", year: "2025" },
                            { title: "Resonance - Techno-Entreprenerial Fest", year: "2023" },
                            { title: "Brand Kombat - Build Your Brand", year: "2023" },
                            { title: "Covid-19 Waste Management - Ideation Event", year: "2023" },
                            { title: "Case Nova - Case Study Competition", year: "2022" },
                            { title: "E-Fizz - Competitive Quiz", year: "2022" },
                        ].map((event, index) => (
                            <GlassCard key={index} className="p-6 hover:border-[var(--primary)]/30 transition-colors">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center text-[var(--primary)]">
                                        <Calendar className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[var(--foreground)] mb-1 leading-tight">{event.title}</h3>
                                        <p className="text-sm text-[var(--muted-foreground)]">{event.year}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
}

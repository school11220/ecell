
import { SectionWrapper } from "@/components/SectionWrapper";
import { GlassCard } from "@/components/GlassCard";
import { TeamCard } from "@/components/TeamCard";
import { CTAButton } from "@/components/CTAButton";
import { Rocket, Target, Lightbulb, Users, Palette, Code, Megaphone, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* Official Header Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 border-b border-border/40 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-start gap-6">
            {/* Header badge removed to simplify header */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground">
              ECELL <span className="text-[var(--primary)]">RVITM</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Fostering innovation, leadership, and the entrepreneurial spirit within our student community.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <CTAButton href="/recruitment" text="Apply Now" />
              <CTAButton href="/about" text="Learn More" className="bg-secondary text-secondary-foreground hover:bg-secondary/80" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard className="text-left border-l-4 border-l-primary">
                <div className="mb-4 text-primary">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mission</h3>
                <p className="text-muted-foreground">
                  To foster an entrepreneurial culture and provide a platform for students to transform ideas into reality.
                </p>
              </GlassCard>
              <GlassCard className="text-left border-l-4 border-l-primary">
                <div className="mb-4 text-primary">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading hub for innovation and startup incubation in the region.
                </p>
              </GlassCard>
              <GlassCard className="text-left border-l-4 border-l-primary">
                <div className="mb-4 text-primary">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Activities</h3>
                <p className="text-muted-foreground">
                  Workshops, hackathons, speaker sessions, and mentorship programs for aspiring entrepreneurs.
                </p>
              </GlassCard>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Why Join Us? */}
      {/* Why Join Us? */}
<section className="py-20 bg-muted/30 border-y border-border/40">
  <div className="container mx-auto px-4">
    <SectionWrapper delay={0.2}>
      <div className="flex flex-col justify-center items-center mb-12 gap-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Why Join Us?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {[
          { icon: Users, title: "Network", desc: "Connect with like-minded peers and industry experts." },
          { icon: Lightbulb, title: "Learn", desc: "Gain practical skills in leadership and management." },
          { icon: Rocket, title: "Growth", desc: "Accelerate your personal and professional growth." },
          { icon: Target, title: "Impact", desc: "Create real impact through your initiatives." },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]/30 hover:bg-[var(--card)]/50 transition-colors"
          >
            <div className="mb-4 text-[var(--primary)]">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
            <p className="text-sm text-[var(--muted-foreground)]">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </div>
</section>


      {/* Our Teams */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionWrapper>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Domains</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Find the perfect role for your skills.</p>
              <div className="mt-6 hidden md:flex justify-center">
                <CTAButton href="/teams" text="View All Teams" className="bg-secondary text-secondary-foreground hover:bg-secondary/80" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TeamCard
                title="Design"
                description="Create stunning visuals and user experiences for our brand."
                icon={Palette}
                openings={3}
              />
              <TeamCard
                title="Tech"
                description="Build and maintain our digital presence and products."
                icon={Code}
                openings={5}
              />
              <TeamCard
                title="Content & PR"
                description="Craft compelling stories and manage our public image."
                icon={Megaphone}
                openings={4}
              />
              <TeamCard
                title="Management"
                description="Organize events and ensure smooth operations."
                icon={Calendar}
                openings={6}
              />
            </div>

            <div className="mt-8 text-center md:hidden">
              <CTAButton href="/teams" text="View All Teams" className="bg-secondary text-secondary-foreground hover:bg-secondary/80" />
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

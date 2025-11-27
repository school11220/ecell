import { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

interface TeamCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    openings?: number;
}

export function TeamCard({ title, description, icon: Icon, openings }: TeamCardProps) {
    return (
        <GlassCard className="h-full flex flex-col items-start hover:border-primary/30 transition-all duration-300 group">
            <div className="p-3 rounded-lg bg-primary/5 text-primary mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">{description}</p>
            {/* Openings number removed for a minimal display */}
        </GlassCard>
    );
}

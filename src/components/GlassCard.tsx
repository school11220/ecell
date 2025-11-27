import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-lg p-4 transition-all duration-300 bg-[var(--card)]/60 border border-[var(--border)] hover:bg-[var(--card)]/80",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

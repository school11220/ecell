import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
    href: string;
    text?: string;
    className?: string;
}

export function CTAButton({ href, text = "Apply Now", className }: CTAButtonProps) {
    return (
        <Button
            asChild
            size="lg"
            className={cn("rounded-md px-5 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-opacity-95", className)}
        >
            <Link href={href} className="flex items-center gap-2">
                {text}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
    );
}

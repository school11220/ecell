"use client";

import Link from "next/link";
// logo removed for a minimal header
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Teams", href: "/teams" },
    { name: "Recruitment", href: "/recruitment" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-[var(--background)]/95 border-[var(--border)]">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Title only (logo removed) */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                            ECELL <span className="text-[var(--primary)]">RVITM</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-[var(--primary)]",
                                    pathname === item.href
                                        ? "text-[var(--primary)]"
                                        : "text-[var(--muted-foreground)]"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]/95">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-[var(--primary)] py-2",
                                    pathname === item.href
                                        ? "text-[var(--primary)]"
                                        : "text-[var(--muted-foreground)]"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

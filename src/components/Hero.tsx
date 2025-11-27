"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)]">
                        ECELL <span className="block text-[var(--primary)]">RVITM</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Join a focused community of creators and problem-solvers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                        <Button asChild size="lg" className="px-6 py-3">
                            <Link href="/recruitment" className="flex items-center gap-2">
                                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="px-6 py-3">
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

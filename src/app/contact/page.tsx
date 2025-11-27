import { SectionWrapper } from "@/components/SectionWrapper";
import { GlassCard } from "@/components/GlassCard";
import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                <SectionWrapper>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl text-muted-foreground">
                            Have questions? Want to collaborate? We'd love to hear from you.
                        </p>
                    </div>
                </SectionWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <SectionWrapper delay={0.2}>
                        <GlassCard className="h-full space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email Us</h3>
                                            <a href="mailto:ecell@rvitm.edu.in" className="text-muted-foreground hover:text-primary transition-colors">
                                                ecell@rvitm.edu.in
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground">
                                                RV Institute of Technology and Management,<br />
                                                JP Nagar 8th Phase, Bengaluru,<br />
                                                Karnataka 560076
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="icon" asChild className="rounded-full hover:text-primary hover:border-primary">
                                        <Link href="#">
                                            <Instagram className="h-5 w-5" />
                                            <span className="sr-only">Instagram</span>
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="icon" asChild className="rounded-full hover:text-primary hover:border-primary">
                                        <Link href="#">
                                            <Linkedin className="h-5 w-5" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="icon" asChild className="rounded-full hover:text-primary hover:border-primary">
                                        <Link href="#">
                                            <Twitter className="h-5 w-5" />
                                            <span className="sr-only">Twitter</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    </SectionWrapper>

                    <SectionWrapper delay={0.3}>
                        <div className="h-[400px] lg:h-full rounded-xl overflow-hidden border border-border shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.026637066476!2d77.58655531482126!3d12.906008990899074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d7349a72b%3A0xf3d03ea1e1dd3d46!2sRV%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1677834567890!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </SectionWrapper>
                </div>
            </div>
        </div>
    );
}

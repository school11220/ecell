import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-transparent border-t border-[var(--border)] pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-[var(--foreground)]">E-Cell RVITM</h3>
                        <p className="text-[var(--muted-foreground)] text-sm">
                            Fostering entrepreneurship and innovation among students.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="font-medium mb-2 text-[var(--foreground)]">Quick links</h4>
                        <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                            <li><Link href="/" className="hover:text-[var(--primary)]">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[var(--primary)]">About</Link></li>
                            <li><Link href="/teams" className="hover:text-[var(--primary)]">Teams</Link></li>
                            <li><Link href="/recruitment" className="hover:text-[var(--primary)]">Recruitment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-2 text-[var(--foreground)]">Contact</h4>
                        <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:ecell@rvitm.edu.in" className="hover:text-[var(--primary)]">ecell@rvitm.edu.in</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1" />
                                <span className="block">RV Institute of Technology and Management, JP Nagar, Bengaluru</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 text-center text-sm text-[var(--muted-foreground)]">
                    <p>&copy; {new Date().getFullYear()} E-Cell RVITM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

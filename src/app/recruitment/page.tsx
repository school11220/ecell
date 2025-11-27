import { GoogleFormEmbed } from "@/components/GoogleFormEmbed";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function RecruitmentPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                <SectionWrapper>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
                        <p className="text-muted-foreground text-lg">
                            Fill out the form below to apply for the E-Cell team. We are looking for passionate individuals ready to make a difference.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Replace this URL with the actual Google Form URL */}
                        <GoogleFormEmbed
                            src="https://forms.gle/vCXsVDEWSufbvosM6"
                            height="1200px"
                        />
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
}

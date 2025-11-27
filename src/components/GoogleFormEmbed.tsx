"use client";

interface GoogleFormEmbedProps {
    src: string;
    title?: string;
    height?: string;
}

export function GoogleFormEmbed({ src, title = "Google Form", height = "800px" }: GoogleFormEmbedProps) {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-card/30 shadow-xl">
            <iframe
                src={src}
                width="100%"
                height={height}
                title={title}
                className="border-0 w-full"
            >
                Loading...
            </iframe>
        </div>
    );
}

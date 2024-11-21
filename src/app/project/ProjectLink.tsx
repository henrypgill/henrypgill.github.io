"use client";

import Image from "next/image";

export interface ProjectLinkProps {
    type: "web" | "figma" | "github";
    link: string;
    text?: string;
}

export function ProjectLink(props: ProjectLinkProps): JSX.Element {
    const { type, link, text } = props;

    const iconSrc = () => {
        switch (type) {
            case "web":
                return "/reactIcon.svg";
            case "figma":
                return "/reactIcon.svg";
            case "github":
                return "/reactIcon.svg";
        }
    };

    const linkText = () => {
        if (text) {
            return text;
        } else {
            switch (type) {
                case "web":
                    return "Website";
                case "figma":
                    return "Design File";
                case "github":
                    return "GitHub";
                default:
                    return "";
            }
        }
    };

    return (
        <button
            onClick={() => window.open(link, "_blank")}
            className="flex flex-row gap-12"
        >
            <Image src={iconSrc()} alt="Next.js logo" width={24} height={24} />
            <p>{linkText()}</p>
        </button>
    );
}

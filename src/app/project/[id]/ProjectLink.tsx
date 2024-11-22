"use client";

import { ProjectLink } from "@/types/projectTypes";
import Image from "next/image";

export interface ProjectLinkProps {
    link: ProjectLink;
}

export function ProjectLinkButton(props: ProjectLinkProps): JSX.Element {
    const { type, link, text } = props.link;

    const iconSrc = () => {
        switch (type) {
            case "web":
                return "/weblink.svg";
            case "figma":
                return "/figmaIcon.png";
            case "github":
                return "/githubIcon.png";
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
            className="flex flex-row gap-12 bg-white rounded-xl p-12 pt-4 pb-4"
        >
            <Image src={iconSrc()} alt="Next.js logo" width={24} height={24} />
            <p>{linkText()}</p>
        </button>
    );
}

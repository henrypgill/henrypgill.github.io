import { Technology } from "@/types/projectTypes";
import { technologies } from "@/utils/technologies";
import Image from "next/image";

export interface ProjectTechProps {
    tech: Technology;
}

export function ProjectTech({ tech }: ProjectTechProps): JSX.Element {
    const technology = technologies[tech];

    return (
        <div
            // onClick={() => window.open(link, "_blank")}
            className="flex flex-row gap-12 bg-white rounded-xl p-12 pt-4 pb-4 align-middle"
        >
            <Image
                src={technology.iconPath}
                alt={`${tech} logo`}
                width={24}
                height={24}
            />
            <p>{technology.name}</p>
        </div>
    );
}

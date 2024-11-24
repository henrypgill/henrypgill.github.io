"use client";

import { Technology } from "@/types/projectTypes";
import { technologies } from "@/utils/technologies";
import Image from "next/image";

export interface ProfileTechProps {
    tech: Technology;
}

export function ProfileTech({ tech }: ProfileTechProps): JSX.Element {
    const technology = technologies[tech];

    return (
        <div
            // onClick={() => window.open(link, "_blank")}
            className="flex flex-row gap-12 bg-white rounded-2xl p-12 py-6 justify-center align-middle bg-secondary"
        >
            <div className="flex justify-center align-middle w-24 h-24 ">
                <Image
                    src={technology.iconPath}
                    alt={`${tech} logo`}
                    width={24}
                    height={24}
                />
            </div>
            <p>{technology.name}</p>
        </div>
    );
}

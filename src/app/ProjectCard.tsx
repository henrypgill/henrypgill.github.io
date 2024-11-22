"use client";

import { PortfolioProject } from "@/types/projectTypes";
// interface ProjectCardProps {
// }

import Image from "next/image";

import { useRouter } from "next/navigation";

export interface ProjectCardProps {
    project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
    const router = useRouter();
    const projectId = project.id;

    return (
        <button
            className="h-[320px] w-[320px] rounded-[32px] bg-primary shadow-neumorph flex flex-col p-32 text-white gap-16"
            // onClick={() => console.log("hi")}
            onClick={() => router.push(`/project/${projectId}`)}
        >
            <div className="flex justify-center align-middle h-120 w-full">
                <Image
                    //   className="dark:invert"
                    src={project.coverImage}
                    alt="Next.js logo"
                    width={500}
                    height={120}
                    priority
                />
            </div>
            <div>
                <h3 className="text-lg font-medium text-left">
                    {project.name}
                </h3>
                <h4 className="text-md font-light text-left">
                    {project.subtitle}
                </h4>
            </div>
        </button>
    );
}

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

    function ProjectDate(): JSX.Element {
        if (project.startDate && project.endDate) {
            const start = new Date(project.startDate)
            const end = new Date(project.endDate)
            const string = `${months[start.getMonth()]} ${start.getFullYear()} - ${months[end.getMonth()]} ${end.getFullYear()}`
            return (
                <p>{string}</p>
            )

        } else if (project.endDate) {
            const end = new Date(project.endDate)
            const string = `${months[end.getMonth()]} ${end.getFullYear()}`
            return (
                <p>{string}</p>
            )

        } else if (project.startDate) {
            const start = new Date(project.startDate)
            const string = `${months[start.getMonth()]} ${start.getFullYear()}`
            return (
                <p>{string}</p>
            )

        } else {
            return <></>
        }

    }

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
            <div>
            {
                <ProjectDate />
            }
            </div>
        </button>
    );
}


const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]
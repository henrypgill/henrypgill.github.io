import { PortfolioProject } from "@/types/projectTypes";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
    project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
    const projectId = project.id;

    return (
        <button className="h-[320px] w-[320px] rounded-[32px] bg-primary shadow-neumorph text-white flex flex-col p-32 justify-between">
            <Link
                className="flex flex-col gap-16"
                href={`/project/${projectId}`}
            >
                <div className="flex justify-center align-middle h-120 w-full">
                    <Image
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
            </Link>
            {project.dateText && <div>{project.dateText}</div>}
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
];

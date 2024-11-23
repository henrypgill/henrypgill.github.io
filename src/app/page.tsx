import { ProjectCard } from "./ProjectCard";
import { projects } from "@/utils/projects";

export default function Home() {
    return (
        <div className="flex flex-row flex-wrap justify-center p-[64px] gap-64">
            {projects.filter(p => !p.hidden).map((p) => (
                <ProjectCard project={p} key={p.id} />
            ))}
        </div>
    );
}

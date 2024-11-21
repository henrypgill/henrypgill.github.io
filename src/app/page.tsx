import { ProjectCard } from "./ProjectCard";

export default function Home() {
    return (
        <div className="flex flex-row flex-wrap justify-center p-[64px] gap-64">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

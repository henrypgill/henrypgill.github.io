import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/utils/projects";

export default function Home() {
    return (
        <div>

        <div
        className="flex justify-center p-32"
        >
            <div
            className="flex flex-col p-16 w-240 gap-y-16"
            >
            <Image
                                src={"/henry.JPEG"}
                                alt="Next.js logo"
                                width={160}
                                height={160}
                                className="w-160 h-160 rounded-[80px] overflow-hidden"
                                />
                                <div
                                className="flex flex-col w-240"
                                >

                                <h1
                                    className="font-medium text-xl"
                                    >Henry Gill</h1>
                                <h2
                                    className="font-regular text-lg"
                                    >Full-stack web and mobile developer</h2>
                                </div>
            </div>
            <div>
                <h2>About</h2>
                <p>{`Hi I'm Henry, I'm a full stack developer and I've worked on a variety of projects, you can find out more about them by clicking on the cards below`}</p>
            </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center p-[64px] gap-64">
            {projects.filter(p => !p.hidden).map((p) => (
                <ProjectCard project={p} key={p.id} />
            ))}
        </div>
            </div>
    );
}

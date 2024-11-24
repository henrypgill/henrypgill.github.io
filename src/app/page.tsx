import { Technology, TechnologyMapItem } from "@/types/projectTypes";
import { projects } from "@/utils/projects";
import { technologies } from "@/utils/technologies";
import Image from "next/image";
import { ProfileTech } from "./ProfileTech";
import { ProjectCard } from "./ProjectCard";

export default function Home() {
    function ProfileSection(): JSX.Element {
        return (
            <div className="flex flex-col p-16 gap-y-16 w-1/4">
                <Image
                    src={"/henry.JPEG"}
                    alt="Next.js logo"
                    width={160}
                    height={160}
                    className="w-160 h-160 rounded-[80px] overflow-hidden"
                />
                <div className="flex flex-col w-240">
                    <h2 className="font-medium text-xl">Henry Gill</h2>
                    <h3 className="font-regular text-lg">
                        Full-stack web and mobile developer
                    </h3>
                </div>
            </div>
        );
    }

    function AboutSection(): JSX.Element {
        return (
            <div className="w-1/3">
                {/* <h2 className="font-regular text-lg">About</h2> */}
                <p
                    className={profileParagraphStyle}
                >{`Hi I'm Henry, I'm a full stack developer that loves building from scratch. I've worked on a variety of projects, you can find out more about them by clicking on the cards below.`}</p>
                <p
                    className={profileParagraphStyle}
                >{`The main thing I've worked on is Bump, where I founded a startup to tackle the loneliness epidemic, prevalence of mental health problems, and the disconnectedness that we are experiencing in society.`}</p>
            </div>
        );
    }

    function SkillsSection(): JSX.Element {
        const technologyKeys = Object.keys(technologies) as Technology[];
        const buckets: Record<TechnologyMapItem["type"], Technology[]> = {
            language: [],
            technology: [],
            software: [],
        };
        for (const key of technologyKeys) {
            buckets[technologies[key].type].push(key);
        }
        const skillsContainerStyle =
            "flex flex-row gap-y-8 p-16  flex-wrap w-1/3 h-full";
        const skillsHeadingStyle = "font-medium w-full text-center";

        return (
            <>
                <div className={skillsContainerStyle}>
                    <h3 className={skillsHeadingStyle}>Languages</h3>
                    <div className="flex flex-row gap-4 flex-wrap justify-center items-start">
                        {buckets.language.map((t) => (
                            <ProfileTech tech={t} key={t} />
                        ))}
                    </div>
                </div>
                <div className={skillsContainerStyle}>
                    <h3 className={skillsHeadingStyle}>Technologies</h3>
                    <div className="flex flex-row gap-4 flex-wrap justify-center">
                        {buckets.technology.map((t) => (
                            <ProfileTech tech={t} key={t} />
                        ))}
                    </div>
                </div>
                <div className={skillsContainerStyle}>
                    <h3 className={skillsHeadingStyle}>Software</h3>
                    <div className="flex flex-row gap-4 flex-wrap justify-center">
                        {buckets.software.map((t) => (
                            <ProfileTech tech={t} key={t} />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col gap-64 pt-32">
            <div>
                <h1 className="font-semibold text-2xl text-center">{`About me`}</h1>

                <div className="flex justify-center p-32">
                    <ProfileSection />
                    <AboutSection />
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-2xl text-center">{`Languages, Technologies, and Software I've Used`}</h2>
                <div className="flex flex-row px-32">
                    <SkillsSection />
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-2xl text-center">{`Things I've Made`}</h2>

                <div className="flex flex-row flex-wrap justify-center p-[64px] gap-64">
                    {projects
                        .filter((p) => !p.hidden)
                        .map((p) => (
                            <ProjectCard project={p} key={p.id} />
                        ))}
                </div>
            </div>
        </div>
    );
}

const profileParagraphStyle = "font-light";

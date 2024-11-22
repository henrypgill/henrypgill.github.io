import Image from "next/image";
import { ProjectLinkButton } from "./ProjectLink";
import { projects } from "@/utils/projects";
import { ProjectTech } from "./projectTech";

export default async function Project({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id)!;

    function ContentColumn(): JSX.Element {
        return (
            <div className="flex flex-col gap-32 w-auto">
                <div className="bg-white">
                    {/* <Image
                        src="/bumpLogo.png"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                    /> */}
                    <div className="bg-black w-full h-320 rounded-3xl flex align-middle justify-center ">
                        <p className="text-4xl text-white h-full">Images</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-32 rounded-2xl p-16 shadow-2xl">
                        <div className="flex gap-x-24">
                            <Image
                                src={project.coverImage}
                                alt="Next.js logo"
                                width={160}
                                height={38}
                            />
                            <div>
                                <h2 className="text-2xl font-bold">Bump</h2>
                                <p className="text-lg font-regular">
                                    A React Native mobile app on iOS and Android
                                    for meeting new people
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg">Description</h3>
                            <div className="flex flex-col gap-16">
                                {project.description.map((desc) => (
                                    <p key={desc} className="font-light">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function InfoColumn(): JSX.Element {
        return (
            <div className="flex flex-col gap-32 flex-shrink-0">
                {project.links.length > 0 && (
                    <div className="flex flex-col gap-12 rounded-2xl p-16 shadow-2xl w-auto bg-primary">
                        <h3 className="text-white text-lg font-medium">
                            Links
                        </h3>
                        {project.links.map((l) => (
                            <ProjectLinkButton link={l} key={l.link} />
                        ))}
                    </div>
                )}
                {project.technologies.length > 0 && (
                    <div className="flex flex-col gap-12 rounded-2xl p-16 shadow-2xl w-auto bg-primary">
                        <h3 className="text-white text-lg font-medium">
                            Technologies
                        </h3>
                        {project.technologies.map((t) => (
                            <ProjectTech tech={t} key={t+t.length} />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-row align-top p-[64px] pt-16 gap-64">
            <ContentColumn />

            <InfoColumn />
        </div>
    );
}

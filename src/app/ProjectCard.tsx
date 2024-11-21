"use client";

// interface ProjectCardProps {
// }

import Image from "next/image";

import { useRouter } from "next/navigation";

export function ProjectCard(): JSX.Element {
    const router = useRouter();

    return (
        <button
            className={cardClassName}
            // onClick={() => console.log("hi")}
            onClick={() => router.push("/project")}
        >
            <Image
                //   className="dark:invert"
                src="/bumpLogo.png"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <h3 className="text-lg font-medium">Bump</h3>
            <h4 className="text-md font-light">
                A React Native mobile app on iOS and Android for meeting new
                people
            </h4>
        </button>
    );
}

const cardClassName =
    "h-[320px] w-[320px] rounded-[32px] bg-[#F3E9DC] shadow-neumorph flex flex-col p-32";

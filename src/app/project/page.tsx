import Image from "next/image";
import { ProjectLink } from "./ProjectLink";

export default function Project() {

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
                    <div className="bg-black w-full h-320 rounded-3xl flex align-middle justify-center">
                        <p className="text-4xl text-white h-full">Images</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-32 rounded-2xl p-16 shadow-2xl">
                        <div>
                            <Image
                                src="/bumpLogo.png"
                                alt="Next.js logo"
                                width={180}
                                height={38}
                            />
                            <div>
                                <h2>Bump</h2>
                                <p>
                                    A React Native mobile app on iOS and Android
                                    for meeting new people
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>Description</h3>
                            <p>{descriptionText}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function InfoColumn(): JSX.Element {
        return (

            <div className="flex flex-col gap-32 rounded-2xl p-16 shadow-2xl w-auto">
                    <h3>links</h3>
                    <ProjectLink
                        type="figma"
                        link="https://www.bump-connect.com/"
                    />
                    <ProjectLink
                        type="figma"
                        link="https://www.bump-connect.com/"
                    />
                    <ProjectLink
                        type="figma"
                        link="https://www.bump-connect.com/"
                    />
                    <ProjectLink
                        type="figma"
                        link="https://www.bump-connect.com/"
                    />
            </div>
        )
    }

    return (
        <div className="flex flex-row align-middle justify-center p-[64px] pt-0 gap-64">
            <ContentColumn />
            <InfoColumn />
        </div>
    );
}

const descriptionText = `A React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for


meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new people

A React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS

and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new peopleA React Native mobile app on iOS and Android for meeting new people`;

import Image from "next/image";
import Link from "next/link";

export function AppHeader(): JSX.Element {
    // const router = useRouter();

    return (
        <header>
            <div className="flex px-32 bg-primary text-white py-16 gap-16 justify-between">
                <button>
                    <Link href="/">
                        <Image
                            src="/home.svg"
                            alt="Next.js logo"
                            width={32}
                            height={32}
                        />
                    </Link>
                </button>
                <div>
                    <p className="font-light text-xl">Henry Gill</p>
                </div>
                <div className="w-32">
                    {/* <Image
                                src="/menu.svg"
                                alt="Next.js logo"
                                width={32}
                                height={32}
                                /> */}
                </div>
            </div>
        </header>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Henry Gill's works",
};

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={"font-sans antialiased "}>
                <AppHeader />
                <main className={roboto.className}>{children}</main>
                <AppFooter />
            </body>
        </html>
    );
}

function AppHeader(): JSX.Element {
    return (
        <header>
            <div className="flex flex-row align-middle">
                <div className="flex flex-col gap-1 p-2">
                    <div className="bg-black h-[8px] w-[32px] rounded"></div>
                    <div className="bg-black h-[8px] w-[32px] rounded"></div>
                    <div className="bg-black h-[8px] w-[32px] rounded"></div>
                </div>
                <p>Henry Gill</p>
            </div>
        </header>
    );
}

function AppFooter(): JSX.Element {
    return (
        <footer className="flex bg-black text-white justify-center p-4">
            <div>
                <ul className="flex flex-row gap-4 align-middle justify-between w-full">
                    <li>
                        <a
                            href="mailto:hpgill312@gmail.com"
                            className="text-2xl"
                        >
                            email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/henrypgill"
                            className="text-2xl"
                            target="blank"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/henrypgill/"
                            target="blank"
                            className="text-2xl"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

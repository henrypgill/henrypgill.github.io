import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
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
        <html lang="en" className="h-full">
            <body className={"font-sans antialiased h-full flex flex-col"}>
                <AppHeader />
                <main className={roboto.className + " flex-grow"}>
                    {children}
                </main>
                <AppFooter />
            </body>
        </html>
    );
}

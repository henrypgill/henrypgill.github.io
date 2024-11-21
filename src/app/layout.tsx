import type { Metadata } from "next";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans
           antialiased`}
      >
        <header>
          <div>
            <div
            className=""></div>
            <p>Henry Gill</p>
          </div>
        </header>
        <main>
        {children}
        </main>
        <footer>
        <div>
        <ul>
          <li>
            <a href="mailto:hpgill312@gmail.com">email</a>
            <a href="https://github.com/henrypgill" target="blank">GitHub</a>
            <a href="https://www.linkedin.com/in/henrypgill/" target="blank">LinkedIn</a>
            <a></a>
          </li>
        </ul>
        </div>
        </footer>
      </body>
    </html>
  );
}
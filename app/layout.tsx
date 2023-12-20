import clsx from "clsx";
import type { Metadata } from "next";
import { Rubik_Mono_One } from "next/font/google";
import "./globals.css";

const rubikMonoOne = Rubik_Mono_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charlie Francis",
  description:
    "Charlie Francis is a freelance developer, engineer and creative technologist based in London, UK with a stong passion for all things technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("overflow-hidden", rubikMonoOne.className)}>
        {children}
      </body>
    </html>
  );
}

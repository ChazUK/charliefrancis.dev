import clsx from "clsx";
import type { Metadata } from "next";
import { Rubik_Mono_One } from "next/font/google";
import "./globals.css";

const rubikMonoOne = Rubik_Mono_One({ weight: "400", subsets: ["latin"] });

const siteName = "Charlie Francis";
const siteUrl = "https://www.charliefrancis.dev";
const description =
  "Charlie Francis is a freelance developer, engineer and creative technologist based in London, UK with a stong passion for all things technology.";

export const metadata: Metadata = {
  title: siteName,
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description,
    siteName,
    images: [
      {
        url: `${siteUrl}/social-card.jpg`,
      },
    ],
  },
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

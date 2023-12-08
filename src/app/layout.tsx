import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "./shared-metadata";
import { Navbar } from "./_components/Navbar/Navbar";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const heading = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "900",
  variable: "--font-barlow-condensed",
});

const display = localFont({
  src: [
    {
      path: "../../public/fonts/Akira Expanded Super Bold.ttf",
      weight: "900",
    },
  ],
  variable: "--font-akira-expanded",
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plus_jakarta_sans.variable} ${heading.variable} ${display.variable}`}
      data-theme="mytheme"
    >
      <body>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}

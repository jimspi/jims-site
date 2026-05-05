import type { Metadata } from "next";
import {
  Oswald,
  Playfair_Display,
  Source_Serif_4,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jim Spiewak",
  description:
    "Award-winning broadcast journalist, anchor, chief investigative reporter at KUTV CBS Salt Lake City, and builder of AI-powered applications.",
  openGraph: {
    title: "Jim Spiewak",
    description: "Anchor. Investigator. Builder.",
    url: "https://jimspiewak.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@JimSpiewak",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${playfair.variable} ${sourceSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

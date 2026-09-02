import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { personalInfo } from "../data/personal";

const inter = localFont({
  src: "./fonts/inter-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = localFont({
  src: "./fonts/jetbrains-mono-normal.woff2",
  weight: "100 800",
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://michael-cronin.com"),
  title: {
    default: "Michael Cronin",
    template: "%s · Michael Cronin",
  },
  description: personalInfo.bio,
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
  },
  openGraph: {
    title: "Michael Cronin",
    description: personalInfo.bio,
    url: "https://michael-cronin.com",
    siteName: "Michael Cronin",
    images: [{ url: "/headshot.jpg" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="grain" aria-hidden />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

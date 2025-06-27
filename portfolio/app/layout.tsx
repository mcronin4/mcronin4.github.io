import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";

export const metadata: Metadata = {
  title: "Michael Cronin - Portfolio",
  description: "Personal portfolio of Michael Cronin - Applied Mathematics & Engineering student at Queen's University",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
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
      <body className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <div className="flex justify-center w-full">
          <main className="w-full max-w-screen-2xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 
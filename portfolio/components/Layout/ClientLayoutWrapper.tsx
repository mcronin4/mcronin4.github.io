"use client";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={`flex justify-center w-full bg-gradient-with-pattern${isHome ? "" : " pt-24"}`}>
      <main className="w-full max-w-screen-2xl">
        {children}
      </main>
    </div>
  );
} 
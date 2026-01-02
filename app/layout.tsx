
import type { Metadata } from "next";
import Image from "next/image";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "ARTE Labs — AI Standards Recommender",
  description: "Select market & radio type. Get Radio, EMC, Safety, RF Exposure standards with key clauses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-3 p-3">
            <Image src="/arte-labs-logo.png" alt="ARTE Labs" width={180} height={36} priority />
            <div className="ml-auto hidden items-center gap-2 md:flex">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "linear-gradient(90deg,var(--arte-from),var(--arte-to))" }} />
              <span className="text-sm text-slate-500">AI Standards Recommender</span>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-6xl p-6">{children}</main>
        <footer className="mx-auto max-w-6xl border-t p-6 text-xs text-slate-500">© {new Date().getFullYear()} ARTE Labs — All rights reserved.</footer>
      </body>
    </html>
  );
}

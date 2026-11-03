// app/layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"], variable: "--font-display", display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"], variable: "--font-mono", display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.description,
  metadataBase: new URL("https://hanifimmr.dev"), // update with real domain
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
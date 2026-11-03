import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-12 border-t-4 border-violet">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-display font-bold text-2xl tracking-tight">
            {site.name.split(" ")[0]}<span className="text-lime">.</span>
          </Link>
          <p className="font-mono text-xs text-paper/60">
            Full Stack Web Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 font-mono text-sm">
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-lime transition-colors">
            Email
          </a>
          <a href={site.phoneHref} className="hover:text-lime transition-colors">
            {site.phone}
          </a>
        </div>

        <p className="font-mono text-xs text-paper/50 text-center md:text-right">
            © 2026 {site.name}.<br className="md:hidden" /> All rights reserved.
        </p>

      </div>
    </footer>
  );
}
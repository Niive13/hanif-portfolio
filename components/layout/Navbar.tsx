"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-2 ${scrolled ? "bg-paper/90 backdrop-blur-md border-ink" : "bg-transparent border-transparent"}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="#" className="font-display font-bold text-xl tracking-tight z-50">
          {site.name.split(" ")[0]}<span className="text-violet">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => (
            <Link key={item.label} href={item.href} className="font-mono text-sm hover:text-violet transition-colors">
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="bg-ink text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-violet transition-colors">
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="fixed inset-0 bg-paper z-40 flex flex-col items-center justify-center gap-8">
            {site.nav.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="font-display text-3xl font-bold hover:text-violet">
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${site.email}`} onClick={() => setIsOpen(false)} className="mt-4 bg-violet text-white px-8 py-3 rounded-xl font-medium">
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
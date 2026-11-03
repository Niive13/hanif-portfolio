// components/sections/About.tsx
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/experience";
import Image from "next/image"; // Tambahkan import ini
import { asset } from "@/lib/imageMap"; // Tambahkan import ini

export function About() {
  return (
    <section id="about" className="pt-10 md:pt-16 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader index="01" title="About" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              I'm a graduate of <strong className="text-ink">D3 Management Informatics,
              Politeknik Astra</strong> (GPA 3.61), focused on Full Stack Web Development.
              I design and test web applications across the front-end and back-end,
              build relational databases, and integrate RESTful APIs.
            </p>
            <p>
              My work spans industrial systems, e-commerce and freelance projects, and
              internal management tools, from a computer-vision early-detection
              dashboard at PT. Astra Daihatsu Motor to a commission-queue platform for
              a digital artist.
            </p>
            <p>
              I approach problems logically, adapt quickly to new technology, and value
              clear communication and teamwork.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-ink bg-white p-6 md:p-8 space-y-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink/60">
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((e) => (
                  <div key={e.school} className="flex gap-4">
                    {/* Logo Container */}
                    <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-lg border-2 border-ink bg-paper overflow-hidden flex items-center justify-center p-1">
                      <Image
                        src={asset(e.logo)}
                        alt={`${e.school} Logo`}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Text Content */}
                    <div className="border-l-2 border-violet pl-4">
                      <p className="font-semibold leading-tight mb-1">{e.degree}</p>
                      <p className="text-sm text-ink/70">{e.school}</p>
                      <p className="text-sm font-mono text-violet mt-1">{e.detail}</p>
                      {e.period && <p className="text-xs font-mono text-ink/50 mt-1">{e.period}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
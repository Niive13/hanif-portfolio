// components/sections/TechStack.tsx
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/data/techstack";
import { Code2, Database, Wrench, Lightbulb } from "lucide-react";

const allTechs = Object.values(techStack).flat();

const icons = {
  "Languages & Frameworks": <Code2 className="w-5 h-5" />,
  "Database": <Database className="w-5 h-5" />,
  "Development Tools": <Wrench className="w-5 h-5" />,
  "Core Concepts": <Lightbulb className="w-5 h-5" />,
};

export function TechStack() {
  return (
    <section id="stack" className="pt-10 md:pt-16 pb-20 md:pb-28 bg-paper">
      <div className="mb-20">
        <Marquee items={allTechs} />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader index="02" title="Tech Stack" description="Alat dan teknologi yang saya gunakan untuk membangun produk digital." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(techStack).map(([category, items], idx) => (
            <Reveal key={category} delay={idx * 0.1}>
              <div className="h-full rounded-2xl border-2 border-ink bg-white p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-ink/10">
                  <div className="p-2 rounded-lg bg-violet/10 text-violet border border-violet/20">
                    {icons[category as keyof typeof icons]}
                  </div>
                  <h3 className="font-display font-bold text-xl">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-sm px-3 py-1.5 rounded-lg border-2 border-ink bg-paper hover:bg-lime transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
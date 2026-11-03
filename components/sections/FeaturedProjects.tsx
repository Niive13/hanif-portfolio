import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter(p => p.featured).sort((a, b) => a.priority - b.priority);
  const others = projects.filter(p => !p.featured).sort((a, b) => a.priority - b.priority);

  return (
    <section id="projects" className="pt-10 md:pt-16 pb-20 md:pb-28 bg-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader 
          index="03" 
          title="Featured Projects" 
          description="Kumpulan proyek yang menunjukkan perjalanan saya dari sistem industri, platform freelance, hingga aplikasi mobile."
        />

        {/* Featured Projects (Grid Baru) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {featured.map((project, idx) => (
            <Reveal 
              key={project.slug} 
              delay={idx * 0.1} 
              // Project pertama (Early Detection) melebar penuh (2 kolom)
              // Project kedua & ketiga masing-masing 1 kolom
              className={idx === 0 ? "md:col-span-2" : "md:col-span-1"}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <>
            <div className="mb-8 border-b-2 border-ink/10 pb-4">
              <h3 className="font-display text-2xl font-bold">Other Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project, idx) => (
                <Reveal key={project.slug} delay={idx * 0.05}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
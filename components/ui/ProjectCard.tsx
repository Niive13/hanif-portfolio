import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { asset } from "@/lib/imageMap";

export function ProjectCard({ project }: { project: Project }) {
  const accentColors = {
    violet: "bg-violet text-white",
    lime: "bg-lime text-ink",
    coral: "bg-coral text-ink",
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full rounded-3xl border-2 border-ink bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-brutal"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b-2 border-ink bg-paper shrink-0">
        <Image
          src={asset(project.thumbnail)}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw" // Tambahkan ini
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full font-mono text-xs font-bold border-2 border-ink ${accentColors[project.accent]}`}>
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-ink/60 mb-3">
          {project.category} / {project.period}
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-violet transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-ink/70 line-clamp-3 mb-8">
          {project.summary}
        </p>
        
        {/* Footer Card */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-ink/10">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-mono border border-ink/20 rounded-md px-2 py-1 bg-paper">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] font-mono border border-ink/20 rounded-md px-2 py-1 bg-paper">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center group-hover:bg-lime transition-colors shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
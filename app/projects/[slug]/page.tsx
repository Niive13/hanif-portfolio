// app/projects/[slug]/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { asset } from "@/lib/imageMap";

// 1. Pisahkan konten ke komponen terpisah
async function ProjectContent({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <article className="mx-auto max-w-5xl px-5 pt-12 md:pt-20">
      {/* Header */}
      <header className="mb-12 md:mb-16">
        <p className="section-label mb-4">{project.category} / {project.period}</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-ink/70 max-w-3xl leading-relaxed">
          {project.summary}
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-video rounded-3xl border-2 border-ink overflow-hidden mb-12 md:mb-20 bg-white">
        <Image
          src={asset(project.thumbnail)}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          priority
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Sidebar (Tech & Role) */}
        <aside className="md:col-span-4 space-y-8">
          <div className="p-6 rounded-2xl border-2 border-ink bg-white">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-4 pb-2 border-b border-ink/10">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-xs font-mono bg-paper border border-ink/20 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-2xl border-2 border-ink bg-lime/20">
            <h3 className="font-mono text-sm uppercase tracking-wider mb-2">My Role</h3>
            <p className="text-sm font-medium leading-relaxed">{project.role}</p>
          </div>
        </aside>

        {/* Right Main Content */}
        <div className="md:col-span-8 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
            <p className="text-ink/80 leading-relaxed">{project.overview}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Background & Problem</h2>
            <p className="text-ink/80 leading-relaxed">{project.background}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Solution</h2>
            <p className="text-ink/80 leading-relaxed">{project.solution}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-ink/80">{f}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="mt-20 pt-12 border-t-2 border-ink/10">
          <h2 className="font-display text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl border-2 border-ink overflow-hidden bg-white">
                <Image src={asset(img)} alt={`Gallery ${i+1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

// 2. Komponen Utama Halaman
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  return (
    <main className="min-h-screen bg-paper pb-24">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b-2 border-ink">
        <div className="mx-auto max-w-5xl px-5 h-16 flex items-center">
          <Link href="/#projects" className="flex items-center gap-2 font-mono text-sm hover:text-violet transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </nav>

      {/* Bungkus konten dengan Suspense agar Next.js 16 tidak error */}
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="font-mono text-sm animate-pulse">Loading project details...</p>
        </div>
      }>
        <ProjectContent slug={resolvedParams.slug} />
      </Suspense>
    </main>
  );
}
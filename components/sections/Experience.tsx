// components/sections/Experience.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { experience } from "@/data/experience";
import { asset } from "@/lib/imageMap";
import { ZoomIn } from "lucide-react"; // Building2 dihapus

export function Experience() {
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-t-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader 
          index="04" 
          title="Experience" 
          description="Professional and real-world industry experience." 
        />
        
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative rounded-3xl border-2 border-ink bg-paper p-6 md:p-10 hover:-translate-y-1 hover:shadow-brutal transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Sisi Kiri: Info Pengalaman */}
                  <div className="lg:col-span-7">
                    <div className="inline-block bg-violet text-white font-mono text-sm px-4 py-1.5 rounded-full border-2 border-ink mb-6">
                      {exp.period}
                    </div>
                    
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                      {exp.role}
                    </h3>
                    
                    {/* Logo & Company Name Sejajar */}
                    <div className="flex items-center gap-4 mb-6">
                      {exp.logo && (
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white overflow-hidden p-2 shrink-0">
                          <Image src={asset(exp.logo)} alt={`${exp.company} Logo`} fill className="object-contain" />
                        </div>
                      )}
                      <p className="text-xl md:text-2xl font-semibold text-ink">
                        {exp.company}
                      </p>
                    </div>

                    <div className="w-full h-0.5 bg-ink/10 mb-6" />

                    <p className="text-base md:text-lg text-ink/80 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Sisi Kanan: Sertifikat */}
                  {exp.certificates && exp.certificates.length > 0 && (
                    <div className="lg:col-span-5">
                      <p className="font-mono text-xs text-ink/50 mb-3 uppercase tracking-wider">Internship Certificates</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {exp.certificates.map((cert, i) => (
                          <button
                            key={i}
                            onClick={() => setLightboxData({ src: asset(cert), alt: `${exp.company} Certificate ${i+1}` })}
                            className="group/cert relative aspect-[4/3] rounded-xl border-2 border-ink overflow-hidden bg-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
                          >
                            <Image src={asset(cert)} alt={`Certificate ${i+1}`} fill className="object-cover" />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                              <div className="bg-paper p-2 rounded-full border-2 border-ink">
                                <ZoomIn className="w-5 h-5 text-ink" />
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={!!lightboxData} 
        onClose={() => setLightboxData(null)} 
        imageSrc={lightboxData?.src || null} 
        alt={lightboxData?.alt} 
      />
    </section>
  );
}
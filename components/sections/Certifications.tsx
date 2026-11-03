"use client";
import { useState } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { certifications } from "@/data/certifications";
import { asset } from "@/lib/imageMap";
import Image from "next/image";
import { Award } from "lucide-react";

export function Certifications() {
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-white border-t-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader 
          index="06" 
          title="Certifications" 
          description="Professional certifications that support my technical expertise." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <button
                onClick={() => setLightboxData({ src: asset(cert.image), alt: cert.name })}
                className="group w-full text-left rounded-2xl border-2 border-ink bg-paper overflow-hidden hover:-translate-y-2 hover:shadow-brutal transition-all"
              >
                <div className="relative aspect-[4/3] border-b-2 border-ink bg-white">
                  <Image 
                    src={asset(cert.image)} 
                    alt={cert.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-violet">
                    <Award className="w-5 h-5" />
                    <span className="font-mono text-xs uppercase tracking-wider">{cert.issuer}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-tight">{cert.name}</h3>
                </div>
              </button>
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
"use client";
import { useState } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { organization } from "@/data/organization";
import { asset } from "@/lib/imageMap";
import Image from "next/image";
import { Users, CalendarDays } from "lucide-react";

export function Organization() {
  const [lightboxData, setLightboxData] = useState<{ src: string; alt: string } | null>(null);

  const orgRoles = organization.filter((o) => o.type === "organizational");
  const eventRoles = organization.filter((o) => o.type === "event");

  return (
    <section id="organization" className="py-20 md:py-28 bg-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader index="05" title="Organization & Events" description="Pengalaman kepemimpinan, manajemen acara, dan kontribusi saya dalam organisasi kemahasiswaan." />

        {/* ORGANIZATIONAL ROLES */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-ink/10">
            <Users className="w-6 h-6 text-violet" />
            <h3 className="font-display text-2xl font-bold">Organizational Roles</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {orgRoles.map((org, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="h-full rounded-2xl border-2 border-ink bg-white p-6 md:p-8 flex flex-col hover:shadow-brutal transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-violet/10 text-violet border border-violet/20 shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl leading-tight mb-1">{org.role}</h3>
                      <p className="text-sm font-medium text-ink/60">{org.org}</p>
                      <p className="font-mono text-xs mt-2 bg-ink text-white inline-block px-2 py-1 rounded">
                        {org.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/70 leading-relaxed flex-grow">{org.description}</p>
                  
                  {/* Gallery Images */}
                  {org.images && org.images.length > 0 && (
                    <div className="mt-6 pt-4 border-t-2 border-ink/10">
                      <p className="font-mono text-xs text-ink/50 mb-3 uppercase tracking-wider">Documentation</p>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {org.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setLightboxData({ src: asset(img), alt: `${org.role} documentation` })}
                            className="relative w-24 h-24 rounded-lg border-2 border-ink overflow-hidden shrink-0 hover:-translate-y-1 hover:shadow-brutal-sm transition-all bg-paper"
                          >
                            <Image src={asset(img)} alt="Documentation thumbnail" fill className="object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* EVENT COMMITTEES */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-ink/10">
            <CalendarDays className="w-6 h-6 text-coral" />
            <h3 className="font-display text-2xl font-bold">Event Committees</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventRoles.map((org, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border-2 border-ink bg-white p-6 flex flex-col hover:shadow-brutal transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-coral/10 text-coral border border-coral/20 shrink-0">
                      <CalendarDays className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg leading-tight mb-1">{org.role}</h3>
                      {org.org && org.org !== "Event Committee" && (
                        <p className="text-sm font-medium text-ink/60">{org.org}</p>
                      )}
                      <p className="font-mono text-xs mt-2 bg-ink text-white inline-block px-2 py-1 rounded">
                        {org.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/70 leading-relaxed flex-grow">{org.description}</p>
                  
                  {/* Gallery Images */}
                  {org.images && org.images.length > 0 && (
                    <div className="mt-6 pt-4 border-t-2 border-ink/10">
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {org.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setLightboxData({ src: asset(img), alt: `${org.role} documentation` })}
                            className="relative w-20 h-20 rounded-lg border-2 border-ink overflow-hidden shrink-0 hover:-translate-y-1 hover:shadow-brutal-sm transition-all bg-paper"
                          >
                            <Image src={asset(img)} alt="Documentation thumbnail" fill className="object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
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
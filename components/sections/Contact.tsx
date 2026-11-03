import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { Mail, Briefcase, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-violet text-white overflow-hidden relative">
      {/* Background pattern (opsional) */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "32px 32px" }} />
      
      <div className="mx-auto max-w-4xl px-5 md:px-8 relative z-10 text-center">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-lime mb-4">07 / Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Let's build something great together.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Saat ini saya terbuka untuk peluang kerja penuh waktu, proyek freelance, maupun kolaborasi menarik lainnya.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={`mailto:${site.email}`} variant="lime" className="w-full sm:w-auto text-lg px-8 py-4">
              <Mail className="w-5 h-5" /> Kirim Email
            </Button>
            <Button href={site.linkedin} external variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 bg-transparent text-white border-white hover:bg-white hover:text-violet">
                <Briefcase className="w-5 h-5" /> LinkedIn
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-white/10 rounded-lg"><Mail className="w-5 h-5" /></div>
              <div>
                <p className="text-sm text-white/60 mb-1">Email</p>
                <p className="font-medium text-sm md:text-base">{site.email}</p>
              </div>
            </a>
            <a href={site.phoneHref} className="flex items-center gap-4 p-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-white/10 rounded-lg"><Phone className="w-5 h-5" /></div>
              <div>
                <p className="text-sm text-white/60 mb-1">Phone</p>
                <p className="font-medium text-sm md:text-base">{site.phone}</p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
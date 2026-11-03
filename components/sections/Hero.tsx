// components/sections/Hero.tsx
"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) =>
    reduce ? {} : {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
    };

  return (
    <section className="relative pt-28 md:pt-36 pb-10 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: editorial headline */}
          <div className="lg:col-span-7">
            <motion.p {...fade(0)} className="section-label mb-5">
              {site.role} / {site.location}
            </motion.p>
            <motion.h1
              {...fade(0.05)}
              className="font-display font-bold tracking-tight leading-[0.92]
                         text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
            >
              I turn ideas into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">functional</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 md:h-4 bg-lime -z-0" />
              </span>{" "}
              digital products.
            </motion.h1>
            <motion.p
              {...fade(0.15)}
              className="mt-6 max-w-xl text-base md:text-lg text-ink/70 leading-relaxed"
            >
              {site.description}
            </motion.p>
            <motion.div {...fade(0.25)} className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" variant="solid">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#contact" variant="outline">
                <Mail className="w-4 h-4" /> Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Right: profile visual with brutalist frame */}
          <motion.div {...fade(0.2)} className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:ml-auto">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-violet" aria-hidden />
              <div className="relative rounded-3xl border-2 border-ink overflow-hidden bg-paper">
                <Image
                  src="/assets/profile/hanif.jpg"
                  alt="Portrait of Hanif Imam Rosyadi"
                  width={640}
                  height={800}
                  priority
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-lime border-2 border-ink rounded-xl px-4 py-2 font-mono text-xs">
                open to opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
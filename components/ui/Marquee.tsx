"use client";
import { useReducedMotion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-2 border-ink py-4 bg-white">
      <div
        className={reduce ? "flex gap-8 flex-wrap justify-center" : "flex gap-8 w-max animate-marquee"}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-sm uppercase tracking-wider whitespace-nowrap"
          >
            {item} <span className="text-violet mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
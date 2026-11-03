// components/layout/SectionHeader.tsx
import React from "react";

export function SectionHeader({
  index, title, description,
}: { index: string; title: string; description?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      {/* Menggunakan garis miring (/) alih-alih em-dash */}
      <p className="section-label mb-3">
        {index} / {title}
      </p>
      <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-ink/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
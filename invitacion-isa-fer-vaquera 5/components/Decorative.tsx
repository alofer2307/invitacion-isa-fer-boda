import { Heart, Sparkles } from 'lucide-react';

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-oliva">
      <span className="h-px w-10 bg-champagne" />
      {children}
      <span className="h-px w-10 bg-champagne" />
    </div>
  );
}

export function CowboyDivider() {
  return (
    <div className="my-8 flex items-center justify-center gap-4 text-champagne">
      <span className="gold-line w-20" />
      <Sparkles size={18} className="warm-glow" />
      <Heart size={16} className="fill-champagne/40" />
      <Sparkles size={18} className="warm-glow" />
      <span className="gold-line w-20" />
    </div>
  );
}

export function FineTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="font-display text-5xl font-semibold leading-tight text-cafe md:text-7xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-8 text-cafe/70 md:text-lg">{subtitle}</p>}
    </div>
  );
}

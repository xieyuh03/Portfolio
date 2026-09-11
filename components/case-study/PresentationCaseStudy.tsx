'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

type Tone = 'paper' | 'surface' | 'soft' | 'dark';

const chapterTone: Record<Tone, string> = {
  paper: 'bg-[#f7f8fa] text-[#111318]',
  surface: 'bg-white text-[#111318]',
  soft: 'bg-[#eef1f5] text-[#111318]',
  dark: 'bg-[#171a21] text-white',
};

export function ReadingProgress({ label }: { label: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[3px] bg-black/5" aria-hidden="true">
      <motion.div
        className="h-full origin-left bg-[#1267d6]"
        style={{ scaleX }}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { y: 22 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Chapter({
  id,
  tone = 'paper',
  children,
  className = '',
}: {
  id?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden border-t border-black/[0.07] px-6 py-24 md:py-32 lg:py-36 ${chapterTone[tone]} ${className}`}
    >
      <div className="mx-auto max-w-[1160px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  body,
  dark = false,
  centered = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
  centered?: boolean;
}) {
  const muted = dark ? 'text-white/58' : 'text-[#626872]';
  const subtle = dark ? 'text-white/42' : 'text-[#8e949e]';

  return (
    <Reveal className={centered ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <div className={`mb-6 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${centered ? 'justify-center' : ''} ${subtle}`}>
        <span className="text-[#1267d6]">{index}</span>
        <span className={`h-px w-9 ${dark ? 'bg-white/20' : 'bg-[#c9cdd4]'}`} />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-[clamp(2.4rem,5vw,4.15rem)] font-[720] leading-[0.98] tracking-[-0.052em]">
        {title}
      </h2>
      {body && (
        <p className={`mt-7 max-w-3xl text-base leading-8 md:text-[19px] ${centered ? 'mx-auto' : ''} ${muted}`}>
          {body}
        </p>
      )}
    </Reveal>
  );
}

export function EditorialCard({
  children,
  className = '',
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[24px] border p-6 md:p-7 ${
        dark
          ? 'border-white/12 bg-white/[0.055]'
          : 'border-[#dfe2e7] bg-white shadow-[0_16px_40px_rgba(17,19,24,0.045)]'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function MetaGrid({
  items,
  dark = false,
}: {
  items: Array<{ label: string; value: string }>;
  dark?: boolean;
}) {
  return (
    <div className={`grid overflow-hidden rounded-[24px] border sm:grid-cols-2 lg:grid-cols-4 ${dark ? 'border-white/12 bg-white/12' : 'border-[#dfe2e7] bg-[#dfe2e7]'}`}>
      {items.map((item) => (
        <div key={item.label} className={dark ? 'bg-[#171a21] p-5' : 'bg-white p-5'}>
          <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${dark ? 'text-white/42' : 'text-[#8e949e]'}`}>
            {item.label}
          </div>
          <div className={`mt-2 text-sm font-semibold leading-6 ${dark ? 'text-white' : 'text-[#111318]'}`}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export function StatementBand({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-[#2a2e37] bg-[#171a21] p-7 text-white shadow-[0_24px_70px_rgba(17,19,24,0.18)] md:p-10 lg:p-12">
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#70a9f5]">
        {label}
      </div>
      <div className="mt-6 text-[clamp(1.75rem,3.4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em]">
        {children}
      </div>
    </div>
  );
}

export function NumberBadge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 font-mono text-xs font-semibold ${
        dark
          ? 'border-white/14 text-white/64'
          : 'border-[#c9cdd4] text-[#626872]'
      }`}
    >
      {children}
    </span>
  );
}

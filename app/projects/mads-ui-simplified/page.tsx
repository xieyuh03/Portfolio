'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import FluidBackground from '@/components/FluidBackground';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

const components = [
  { name: 'Nav', desc: 'Left sidebar navigation with multi-level menus and collapse/expand' },
  { name: 'CompositeList', desc: 'Data table bundling CommandBar, search box, and sort — the M365 standard' },
  { name: 'Breadcrumb', desc: 'Page path navigation, built on Fluent UI v9' },
  { name: 'InPageNav', desc: 'Pivot tabs + left filter panel + scrollable content area' },
  { name: 'ActionCard', desc: 'Dashboard quick-action card with icon and description' },
  { name: 'DetailPanel', desc: 'Slide-in side panel for item detail views' },
];

const layers = [
  {
    label: 'Top level',
    name: 'ActionCard',
    path: 'componentsV8/public/actionCard/',
    detail: 'Business logic · Analytics tracking · Responsive styling',
    isPrivate: false,
  },
  {
    label: 'Middle layer',
    name: '@m365-admin/card',
    path: 'FabricActionCard',
    detail: 'ActionCard.base.js — Core UI structure\nActionCard.style.js — Theme styling system',
    isPrivate: true,
  },
  {
    label: 'Foundation',
    name: '@fluentui/react',
    path: 'v8 · Public',
    detail: 'Icon, IconButton, TooltipHost primitives',
    isPrivate: false,
  },
];

export default function MADSUIPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.96]);

  return (
    <>
      <FluidBackground />
      <Navigation />

      <main ref={containerRef} className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>
          </motion.div>

          {/* ── Hero ─────────────────────────────────────────────── */}
          <motion.section
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="mb-40"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
                <span className="text-sm uppercase tracking-wider text-gray-400">
                  Vibe Coding · Work Tool
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                MADS UI Agent
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light italic">
                "Refine to be ready."
              </p>

              <div className="flex flex-wrap gap-12 mb-16">
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">Year</div>
                  <div className="text-white text-lg">2026</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">Role</div>
                  <div className="text-white text-lg">Design + Engineering</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">Stack</div>
                  <div className="text-white text-lg">React · Fluent UI · Storybook · Claude Code</div>
                </div>
              </div>

              {/* Cover image */}
              <Image
                src={`${basePath}/images/MADS agent/Playground - Yuheng.png`}
                alt="MADS UI Simplified — project overview"
                width={2441}
                height={1817}
                className="w-full h-auto rounded-3xl"
                priority
              />
            </motion.div>
          </motion.section>

          {/* ── Goal ─────────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Goal</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl text-gray-200 leading-relaxed mb-8">
                  Achieve <span className="text-white font-medium">90%+ fidelity</span> to the
                  actual product UI — filling the gap between behavior design and engineering
                  implementation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The M365 Admin Center has a complex, tightly-spec&apos;d design language. Every
                  pixel matters when working across design, engineering, and stakeholder reviews.
                  This project was born out of the frustration of watching hours disappear into
                  manual UI reconstruction that should have been instant.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ── Outcomes ─────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Outcomes</h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Outcome 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all cursor-default"
              >
                <div className="text-3xl font-bold text-white/20 mb-6">1</div>
                <Image
                  src={`${basePath}/images/MADS agent/outcome01.png`}
                  alt="Outcome 1 — code consistency and efficiency"
                  width={2008}
                  height={1528}
                  className="w-full h-auto rounded-xl mb-6"
                />
                <p className="text-gray-200 leading-relaxed text-base mb-4">
                  Achieves over{' '}
                  <span className="text-white font-medium">90% fidelity</span> to the actual
                  product UI, filling the gap between design and implementation. Ensures
                  consistency with engineering.{' '}
                  <span className="text-white font-medium">
                    Significantly improving frontend development accuracy and efficiency.
                  </span>
                </p>
                <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300 border border-blue-500/20">
                  Ongoing
                </span>
              </motion.div>

              {/* Outcome 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all cursor-default"
              >
                <div className="text-3xl font-bold text-white/20 mb-6">2</div>
                <Image
                  src={`${basePath}/images/MADS agent/outcome02.png`}
                  alt="Outcome 2 — shared repository for PMs and designers"
                  width={2008}
                  height={1528}
                  className="w-full h-auto rounded-xl mb-6"
                />
                <p className="text-gray-200 leading-relaxed text-base">
                  A shared repository enables PMs and designers to quickly test AI-generated
                  elements into{' '}
                  <span className="text-white font-medium">
                    design-compliant, high-fidelity demos
                  </span>{' '}
                  with production-styled interactions and navigation. Improving{' '}
                  <span className="text-white font-medium">
                    early-stage pitching and prototype demo efficiency.
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ── Approaches ───────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Approaches</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
                <p className="text-gray-300 text-base leading-relaxed">
                  From a painful manual process to a streamlined AI-powered workflow — two
                  stages that changed how we build.
                </p>
              </div>

              <div className="md:col-span-8 space-y-16 relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

                {/* Stage 1 — Problem */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group pl-8"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-gray-600 group-hover:bg-white group-hover:scale-150 transition-all" />

                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Stage 1</div>
                  <h3 className="text-2xl font-semibold mb-2">Figma MCP</h3>
                  <p className="text-gray-300 text-base mb-6">
                    Send tokens to VS Code while summarizing the repeated components.
                  </p>

                  <Image
                    src={`${basePath}/images/MADS agent/figma mcp.png`}
                    alt="Figma MCP — 63.3k tokens estimated"
                    width={2589}
                    height={1528}
                    className="w-full h-auto rounded-2xl mb-6"
                  />

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      <p className="text-gray-200 text-base leading-relaxed">
                        Excessive tokens introduce{' '}
                        <span className="text-red-300 font-medium">significant code noise</span>,
                        leading to unstable page generation and inaccurate component use.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      <p className="text-gray-200 text-base leading-relaxed">
                        The instability and inaccuracy further require significant time spent on
                        manual page adjustments. Average page generation:{' '}
                        <span className="text-red-300 font-medium">
                          30 mins → 1 hour or even longer
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 2 — Solution */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group pl-8"
                >
                  <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-gray-600 group-hover:bg-white group-hover:scale-150 transition-all" />

                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Stage 2</div>
                  <h3 className="text-2xl font-semibold mb-2">Dev Ops Code File</h3>
                  <p className="text-gray-300 text-base mb-6">
                    Apply code-based components to re-generate the design.
                  </p>

                  <Image
                    src={`${basePath}/images/MADS agent/dev ops code file.png`}
                    alt="Dev Ops — code-based component library"
                    width={2263}
                    height={1528}
                    className="w-full h-auto rounded-2xl mb-6"
                  />

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/15">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <p className="text-gray-200 text-base leading-relaxed">
                      Notable{' '}
                      <span className="text-green-300 font-medium">
                        code-based component library
                      </span>{' '}
                      — each component distilled from real M365 patterns, ready to inject
                      directly into AI prompts without token bloat.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* ── Why rebuild the component specs ──────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                  Why rebuild the component specs?
                </h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
                <p className="text-gray-300 text-base leading-relaxed">
                  M365 Admin Center components don&apos;t map directly to Fluent UI — there&apos;s a
                  private intermediate layer in between that blocks everything.
                </p>
              </div>

              <div className="md:col-span-8 space-y-6">

                {/* Architecture diagram */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/[0.06] to-white/[0.01] rounded-2xl p-7 border border-white/10"
                >
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                    Component architecture — ActionCard example
                  </p>
                  <div className="space-y-2">
                    {layers.map((layer, i) => (
                      <div key={layer.name}>
                        <div
                          className={`rounded-xl px-5 py-4 border ${
                            layer.isPrivate
                              ? 'border-red-500/40 bg-red-500/5'
                              : 'border-white/10 bg-white/5'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-500 uppercase tracking-wider w-20 flex-shrink-0">
                                {layer.label}
                              </span>
                              <span className={`font-mono text-base font-semibold ${layer.isPrivate ? 'text-red-300' : 'text-white'}`}>
                                {layer.name}
                              </span>
                            </div>
                            {layer.isPrivate && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 flex-shrink-0">
                                PRIVATE · BLOCKED
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-base ml-[92px] whitespace-pre-line">
                            {layer.detail}
                          </p>
                        </div>
                        {i < layers.length - 1 && (
                          <div className="flex items-center gap-2 my-2 ml-[100px]">
                            <div className="w-px h-5 bg-white/20" />
                            <span className="text-xs text-gray-400">
                              {i === 0 ? 'wraps' : 'uses'}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Constraints */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl p-7 border border-red-500/15 bg-red-500/5"
                >
                  <p className="text-sm font-medium text-red-400 uppercase tracking-wider mb-4">
                    Constraints
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-200 text-base leading-relaxed">
                        <code className="text-red-300 font-mono text-sm">@m365-admin</code> is a
                        private MADS components library,{' '}
                        <span className="text-red-300 font-medium">blocked in the dev environment</span>
                        {' '}— the AI cannot reference or use it directly.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-200 text-base leading-relaxed">
                        Dev codes cannot be merged into a shared GitHub repository, meaning{' '}
                        <span className="text-red-300 font-medium">
                          no shared codebase for team collaboration
                        </span>
                        .
                      </p>
                    </li>
                  </ul>
                </motion.div>

                {/* Workaround */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl p-7 border border-green-500/15 bg-green-500/5"
                >
                  <p className="text-sm font-medium text-green-400 uppercase tracking-wider mb-4">
                    Workaround
                  </p>
                  <p className="text-gray-200 text-base leading-relaxed mb-4">
                    Enter the dev environment directly, crawl the private{' '}
                    <code className="text-green-300 font-mono text-sm">@m365-admin</code> library,
                    and{' '}
                    <span className="text-green-300 font-medium">
                      merge, refactor, and simplify the three-layer structure
                    </span>{' '}
                    into components that only depend on public Fluent UI — making them shareable,
                    AI-readable, and collaboration-ready.
                  </p>
                  {/* Before → After */}
                  <div className="flex items-center gap-4 mt-5 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-1 text-center">
                      <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Before</p>
                      <p className="text-base text-gray-300 font-mono">3 layers · 1 private</p>
                    </div>
                    <div className="text-gray-400 text-lg flex-shrink-0">→</div>
                    <div className="flex-1 text-center">
                      <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">After</p>
                      <p className="text-base text-green-300 font-mono">1 layer · fully public</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.section>

          {/* ── Component Library ─────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Re-build code based components library
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                A layered system of reusable components — from basic atoms to composite
                M365-specific patterns — all precisely tuned to Microsoft&apos;s design language.
              </p>
            </div>

            {/* Component hierarchy */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-gray-200 text-sm">
                Combined Components
              </span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 text-sm">
                Basic Components
              </span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 text-sm">
                Fluent UI v8 / v9
              </span>
            </div>

            {/* Component grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {components.map((comp, i) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  <div className="aspect-video rounded-lg bg-white/5 border border-white/5 mb-4 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">Storybook screenshot</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1.5 text-white">{comp.name}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{comp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── AI Workflow ───────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Re-generate the hi-fi prototype
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                With the component library in place, the AI has exactly what it needs — no
                noise, no ambiguity.
              </p>
            </div>

            {/* Workflow diagram */}
            <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="flex flex-col md:flex-row items-stretch gap-4 mb-10">

                {/* Input node */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 uppercase tracking-wider">Inputs</span>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center text-gray-400 text-xl flex-shrink-0">→</div>

                {/* Middle block */}
                <div className="flex-1 space-y-3">
                  <div className="bg-black/30 rounded-xl px-4 py-3 border border-white/10 text-center">
                    <code className="text-base text-white font-mono">UI-Restoration.md</code>
                  </div>
                  <div className="bg-red-950/30 rounded-xl p-4 border border-red-500/20">
                    <div className="text-sm text-red-400 font-medium mb-2 uppercase tracking-wider">Errors caught &amp; fixed</div>
                    <div className="space-y-2 text-base text-gray-200">
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>Not using the correct components</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>Wrong layout</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>Self-written components</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feedback loop */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3 max-w-[120px]">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Rounds of back and forth, nudging &amp; guidance
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center text-gray-400 text-xl flex-shrink-0">→</div>

                {/* Success node */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 uppercase tracking-wider">Success</span>
                </div>
              </div>

              {/* Bottom note */}
              <div className="pt-8 border-t border-white/5 flex items-start gap-3">
                <div className="w-0.5 self-stretch bg-blue-500/30 rounded-full flex-shrink-0" />
                <p className="text-gray-300 text-base leading-relaxed">
                  Summarize solutions and methods into{' '}
                  <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm font-mono">.md files</code>
                  {' '}— captured learnings feed back into the AI&apos;s next generation cycle,
                  making every iteration smarter than the last.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ── Claude Skill ─────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">The Claude Skill</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
                <p className="text-gray-300 text-base leading-relaxed">
                  The accumulated learnings were distilled into a structured Claude skill — auto-invoked whenever UI restoration work begins, enforcing standards on every run.
                </p>
              </div>

              <div className="md:col-span-8 space-y-6">

                {/* Skill file tree */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-black/40 rounded-2xl p-6 border border-white/10 font-mono text-base"
                >
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Skill structure</p>
                  <div className="space-y-1.5 text-gray-300">
                    <div className="text-blue-400">.claude/skills/mads-ui-restoration/</div>
                    <div className="pl-4 text-gray-400">├── <span className="text-white">SKILL.md</span> <span className="text-gray-500 text-sm ml-2">— agent entry point, auto-triggered</span></div>
                    <div className="pl-4 text-gray-400">├── <span className="text-white">README.md</span></div>
                    <div className="pl-4 text-gray-400">├── <span className="text-white">DEPENDENCIES.md</span></div>
                    <div className="pl-4 text-gray-400">└── references/</div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-1-DESIGN-ANALYSIS.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-2-COMPONENT-MAPPING.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-3-IMPLEMENTATION.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-4-QUALITY-CHECK.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PITFALLS.md</span> <span className="text-gray-500 text-sm ml-2">— 10 critical mistakes</span></div>
                    <div className="pl-8 text-gray-400">└── <span className="text-gray-200">CASE-STUDY.md</span> <span className="text-gray-500 text-sm ml-2">— Connectors page example</span></div>
                  </div>
                </motion.div>

                {/* Core principle */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="rounded-2xl p-6 border border-orange-500/20 bg-orange-500/5"
                >
                  <p className="text-sm text-orange-400 font-medium uppercase tracking-wider mb-3">🚨 Core Principle</p>
                  <p className="text-white font-semibold text-base mb-4">
                    Never manually implement components that already exist in Fluent UI.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-base">
                    {[
                      ['Tabs', 'Pivot component'],
                      ['Tables', 'CompositeList / DetailsList'],
                      ['Command bar', 'CommandBar component'],
                      ['Navigation', 'Nav component'],
                    ].map(([see, use]) => (
                      <div key={see} className="flex items-center gap-2 text-gray-300">
                        <span className="text-gray-500">See</span>
                        <code className="text-orange-300 text-sm">{see}</code>
                        <span className="text-gray-600">→</span>
                        <code className="text-green-300 text-sm">{use}</code>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* 4-phase process */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-white/[0.06] to-white/[0.01] rounded-2xl p-6 border border-white/10"
                >
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-5">Complete restoration process</p>
                  <div className="space-y-3">
                    {[
                      { phase: 'Phase 1', title: 'Design Analysis', effort: '30%', steps: ['UI Structure Breakdown', 'Measure Key Dimensions', 'Extract Color Specifications', 'Identify Typography Specifications'] },
                      { phase: 'Phase 2', title: 'Component Mapping', effort: '20%', steps: ['List Required Components', 'Find Components in Design System', 'Determine Component Reuse Priority', 'Plan Missing Component Implementation'] },
                      { phase: 'Phase 3', title: 'Code Implementation', effort: '40%', steps: ['Build Page Skeleton', 'Integrate Design System Components', 'Apply Fluent UI Components', 'Implement Interaction Logic', 'Responsive Layout Adaptation'] },
                      { phase: 'Phase 4', title: 'Quality Check', effort: '10%', steps: ['Typography & Color Review', 'Size & Spacing Review', 'Layout & Alignment Review', 'Component Functionality Verification'] },
                    ].map((p) => (
                      <div key={p.phase} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 uppercase tracking-wider w-14">{p.phase}</span>
                            <span className="text-white font-medium text-base">{p.title}</span>
                          </div>
                          <span className="text-sm text-gray-400 font-mono">{p.effort} effort</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 ml-[68px]">
                          {p.steps.map(s => (
                            <span key={s} className="text-sm text-gray-300">
                              <span className="text-gray-600 mr-1">├</span>{s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Standards */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {/* Dimensions */}
                  <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.03]">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">M365 Standard Dimensions</p>
                    <div className="space-y-2 font-mono text-base">
                      {[
                        ['Top nav', '48px'],
                        ['Sidebar expanded', '280px'],
                        ['Sidebar collapsed', '48px'],
                        ['Page margin', '32px'],
                        ['Card spacing', '16px'],
                      ].map(([label, val]) => (
                        <div key={label} className="flex justify-between">
                          <span className="text-gray-300">{label}</span>
                          <span className="text-blue-300">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Component priority */}
                  <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.03]">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">Component Reuse Priority</p>
                    <div className="space-y-2 text-base">
                      {[
                        ['1', 'Design System Combined', 'text-white'],
                        ['2', 'Basic Components', 'text-gray-300'],
                        ['3', 'Fluent UI v8', 'text-gray-300'],
                        ['4', 'Fluent UI v9', 'text-gray-300'],
                        ['5', 'Custom Implementation', 'text-gray-400'],
                      ].map(([n, label, color]) => (
                        <div key={n} className="flex items-center gap-3">
                          <span className="text-gray-500 font-mono text-sm w-4">{n}</span>
                          <span className={color}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.section>

          {/* ── Result ───────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            {/* Big statement */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10 opacity-60" />
              <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 md:p-20 border border-white/10 text-center">
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-8">Result</p>
                <p className="text-5xl md:text-7xl font-bold leading-tight">
                  Generate 90% accurate page
                </p>
                <p className="text-5xl md:text-7xl font-bold text-gray-500 leading-tight mt-2">
                  within <span className="text-white">3 mins</span>
                </p>
              </div>
            </div>

            {/* Storybook result screenshot */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={`${basePath}/images/MADS agent/figma mcp result.png`}
                alt="Storybook — Connectors page result"
                width={2441}
                height={1528}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 px-8 py-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-sm text-gray-300 uppercase tracking-wider">
                  Connectors page · Storybook · Fluent UI v8
                </p>
              </div>
            </div>
          </motion.section>

          {/* ── Footer nav ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-white/10 flex items-center justify-between"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>
            <Link
              href="/projects/bank-reconciliation"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Next: Bank Reconciliation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </main>
    </>
  );
}

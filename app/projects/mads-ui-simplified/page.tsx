'use client';

import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import FluidBackground from '@/components/FluidBackground';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

const componentsEN = [
  { name: 'ActionCard', desc: 'Dashboard quick-action card with icon and description', img: 'action card.png' },
  { name: 'Nav', desc: 'Left sidebar navigation with multi-level menus and collapse/expand', img: 'Nav.png' },
  { name: 'CompositeList', desc: 'Data table bundling CommandBar, search box, and sort — the M365 standard', img: 'compositelist.png' },
];
const componentsZH = [
  { name: 'ActionCard', desc: '仪表盘快速操作卡片，包含图标和描述', img: 'action card.png' },
  { name: 'Nav', desc: '左侧边栏导航，支持多级菜单和折叠展开', img: 'Nav.png' },
  { name: 'CompositeList', desc: '整合了 CommandBar、搜索框和排序的数据表格——M365 标准组件', img: 'compositelist.png' },
];

const layersEN = [
  { label: 'Top level', name: 'ActionCard', path: 'componentsV8/public/actionCard/', detail: 'Business logic · Analytics tracking · Responsive styling', isPrivate: false },
  { label: 'Middle layer', name: '@m365-admin/card', path: 'FabricActionCard', detail: 'ActionCard.base.js — Core UI structure\nActionCard.style.js — Theme styling system', isPrivate: true },
  { label: 'Foundation', name: '@fluentui/react', path: 'v8 · Public', detail: 'Icon, IconButton, TooltipHost primitives', isPrivate: false },
];
const layersZH = [
  { label: '顶层', name: 'ActionCard', path: 'componentsV8/public/actionCard/', detail: 'Business logic · Analytics tracking · Responsive styling', isPrivate: false },
  { label: '中间层', name: '@m365-admin/card', path: 'FabricActionCard', detail: 'ActionCard.base.js — 核心 UI 结构\nActionCard.style.js — 主题样式系统', isPrivate: true },
  { label: '基础层', name: '@fluentui/react', path: 'v8 · Public', detail: 'Icon, IconButton, TooltipHost 基础组件', isPrivate: false },
];

export default function MADSUIPage() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = <T,>(en: T, zh: T): T => lang === 'zh' ? zh : en;

  const components = lang === 'zh' ? componentsZH : componentsEN;
  const layers = lang === 'zh' ? layersZH : layersEN;

  const outcomes = lang === 'zh'
    ? [
        {
          number: '1',
          img: 'outcome01.png',
          alt: '成果 1 — 代码一致性与效率',
          tag: '进行中' as const,
          content: (
            <p className="text-gray-200 leading-relaxed text-base mb-4">
              实现与实际产品 UI{' '}
              <span className="text-white font-medium">90%+ 的还原度</span>，填补设计与工程实现之间的落差，确保与工程端保持一致。{' '}
              <span className="text-white font-medium">显著提升前端开发的准确性与效率。</span>
            </p>
          ),
        },
        {
          number: '2',
          img: 'outcome02.png',
          alt: '成果 2 — 面向 PM 和设计师的共享仓库',
          tag: null,
          content: (
            <p className="text-gray-200 leading-relaxed text-base">
              共享仓库让产品经理和设计师能够快速将 AI 生成的元素转化为{' '}
              <span className="text-white font-medium">符合设计规范的高保真 Demo</span>，具备生产级交互和导航体验，{' '}
              <span className="text-white font-medium">提升早期提案和演示效率。</span>
            </p>
          ),
        },
      ]
    : [
        {
          number: '1',
          img: 'outcome01.png',
          alt: 'Outcome 1 — code consistency and efficiency',
          tag: 'Ongoing' as const,
          content: (
            <p className="text-gray-200 leading-relaxed text-base mb-4">
              Achieves over{' '}
              <span className="text-white font-medium">90% fidelity</span> to the actual
              product UI, filling the gap between design and implementation. Ensures
              consistency with engineering.{' '}
              <span className="text-white font-medium">
                Significantly improves frontend development accuracy and efficiency.
              </span>
            </p>
          ),
        },
        {
          number: '2',
          img: 'outcome02.png',
          alt: 'Outcome 2 — shared repository for PMs and designers',
          tag: null,
          content: (
            <p className="text-gray-200 leading-relaxed text-base">
              A shared repository enables PMs and designers to quickly turn AI-generated
              elements into{' '}
              <span className="text-white font-medium">
                design-compliant, high-fidelity demos
              </span>{' '}
              with production-styled interactions and navigation, improving{' '}
              <span className="text-white font-medium">
                early-stage pitching and demo efficiency.
              </span>
            </p>
          ),
        },
      ];

  const containerRef = useRef(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxComp, setLightboxComp] = useState<{ name: string; desc: string; img: string } | null>(null);
  const [outcomeModal, setOutcomeModal] = useState<typeof outcomes[0] | null>(null);
  const [resultIndex, setResultIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideX = useMotionValue(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = slideContainerRef.current;
    if (!el) return;
    setSlideWidth(el.offsetWidth);
    const ro = new ResizeObserver(([entry]) => setSlideWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    const width = slideContainerRef.current?.offsetWidth ?? slideWidth;
    animate(slideX, -index * width, { type: 'spring', stiffness: 300, damping: 35 });
    setResultIndex(index);
  };

  const handleSlideDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const width = slideContainerRef.current?.offsetWidth ?? slideWidth;
    if (info.offset.x < -width * 0.2 && resultIndex < 1) goToSlide(resultIndex + 1);
    else if (info.offset.x > width * 0.2 && resultIndex > 0) goToSlide(resultIndex - 1);
    else goToSlide(resultIndex);
  };

  const [imgScale, setImgScale] = useState(1);
  const imgX = useMotionValue(0);
  const imgY = useMotionValue(0);

  const openOutcomeLightbox = (outcome: typeof outcomes[0]) => {
    setImgScale(1);
    imgX.set(0);
    imgY.set(0);
    setOutcomeModal(outcome);
  };

  const openLightbox = (comp: { name: string; desc: string; img: string }) => {
    setImgScale(1);
    imgX.set(0);
    imgY.set(0);
    setLightboxComp(comp);
  };

  const closeLightbox = () => {
    setImgScale(1);
    imgX.set(0);
    imgY.set(0);
    setLightboxComp(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setImgScale(prev => {
      const next = Math.min(Math.max(prev - e.deltaY * 0.001, 1), 5);
      if (next === 1) { imgX.set(0); imgY.set(0); }
      return next;
    });
  };

  const handleZoom = (delta: number) => {
    setImgScale(prev => {
      const next = Math.min(Math.max(prev + delta, 1), 5);
      if (next === 1) { imgX.set(0); imgY.set(0); }
      return next;
    });
  };

  const getDragConstraints = () => {
    if (!imgContainerRef.current) return { left: 0, right: 0, top: 0, bottom: 0 };
    const { width, height } = imgContainerRef.current.getBoundingClientRect();
    const ox = (width * imgScale - width) / 2;
    const oy = (height * imgScale - height) / 2;
    return { left: -ox, right: ox, top: -oy, bottom: oy };
  };

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

      {/* Language toggle */}
      <div className="fixed top-6 right-6 z-[60]">
        <div className="flex items-center bg-white/8 backdrop-blur-sm border border-white/15 rounded-full p-1 gap-0.5">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${lang === 'en' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('zh')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${lang === 'zh' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
          >
            中文
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxComp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative max-w-4xl w-full bg-gradient-to-br from-white/[0.10] to-white/[0.04] backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div
              ref={imgContainerRef}
              className="rounded-xl bg-white overflow-hidden mb-6 relative select-none"
              style={{ height: '420px' }}
              onWheel={handleWheel}
            >
              <motion.div
                drag={imgScale > 1}
                dragConstraints={getDragConstraints()}
                dragElastic={0.05}
                dragMomentum={false}
                style={{ x: imgX, y: imgY, scale: imgScale, cursor: imgScale > 1 ? 'grab' : 'default' }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src={`${basePath}/images/MADS agent/${lightboxComp.img}`}
                  alt={lightboxComp.name}
                  width={1600}
                  height={1200}
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
              </motion.div>
              <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                <button onClick={() => handleZoom(-0.5)} className="w-7 h-7 flex items-center justify-center text-white hover:text-gray-300 transition-colors text-lg font-light" aria-label="Zoom out">−</button>
                <span className="text-white text-xs w-10 text-center">{Math.round(imgScale * 100)}%</span>
                <button onClick={() => handleZoom(0.5)} className="w-7 h-7 flex items-center justify-center text-white hover:text-gray-300 transition-colors text-lg font-light" aria-label="Zoom in">+</button>
              </div>
              {imgScale > 1 && (
                <button
                  onClick={() => { setImgScale(1); imgX.set(0); imgY.set(0); }}
                  className="absolute bottom-3 left-3 text-xs text-white/60 hover:text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{lightboxComp.name}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{lightboxComp.desc}</p>
          </motion.div>
        </motion.div>
      )}

      {/* Outcome Lightbox */}
      {outcomeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 cursor-zoom-out"
          onClick={() => { setImgScale(1); imgX.set(0); imgY.set(0); setOutcomeModal(null); }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative max-w-4xl w-full bg-gradient-to-br from-white/[0.10] to-white/[0.04] backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setImgScale(1); imgX.set(0); imgY.set(0); setOutcomeModal(null); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-3xl font-bold text-white/20 mb-6">{outcomeModal.number}</div>
            <div
              ref={imgContainerRef}
              className="rounded-xl bg-white overflow-hidden mb-6 relative select-none"
              style={{ height: '420px' }}
              onWheel={handleWheel}
            >
              <motion.div
                drag={imgScale > 1}
                dragConstraints={getDragConstraints()}
                dragElastic={0.05}
                dragMomentum={false}
                style={{ x: imgX, y: imgY, scale: imgScale, cursor: imgScale > 1 ? 'grab' : 'default' }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src={`${basePath}/images/MADS agent/${outcomeModal.img}`}
                  alt={outcomeModal.alt}
                  width={2008}
                  height={1528}
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
              </motion.div>
              <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
                <button onClick={() => handleZoom(-0.5)} className="w-7 h-7 flex items-center justify-center text-white hover:text-gray-300 transition-colors text-lg font-light" aria-label="Zoom out">−</button>
                <span className="text-white text-xs w-10 text-center">{Math.round(imgScale * 100)}%</span>
                <button onClick={() => handleZoom(0.5)} className="w-7 h-7 flex items-center justify-center text-white hover:text-gray-300 transition-colors text-lg font-light" aria-label="Zoom in">+</button>
              </div>
              {imgScale > 1 && (
                <button
                  onClick={() => { setImgScale(1); imgX.set(0); imgY.set(0); }}
                  className="absolute bottom-3 left-3 text-xs text-white/60 hover:text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 transition-colors"
                >Reset</button>
              )}
            </div>
            {outcomeModal.content}
            {outcomeModal.tag && (
              <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300 border border-blue-500/20">
                {outcomeModal.tag}
              </span>
            )}
          </motion.div>
        </motion.div>
      )}

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
              {t('All Projects', '所有项目')}
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
                  {t('Vibe Coding · Work Tool', '产品设计 · 工作工具')}
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                MADS UI Agent
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light italic">
                {t('"Refine to be ready."', '"精炼即备用。"')}
              </p>

              <div className="flex flex-wrap gap-12 mb-16">
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">{t('Year', '年份')}</div>
                  <div className="text-white text-lg">2026</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">{t('Role', '角色')}</div>
                  <div className="text-white text-lg">{t('Design + Engineering', '设计 + 工程')}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">{t('Stack', '技术栈')}</div>
                  <div className="text-white text-lg">React · Fluent UI · Storybook · Claude Code</div>
                </div>
              </div>

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
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t('Goal', '目标')}</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl text-gray-200 leading-relaxed mb-8">
                  {t(
                    <>Achieve <span className="text-white font-medium">90%+ fidelity</span> to the actual product UI — filling the gap between design intent and engineering implementation.</>,
                    <>实现与实际产品 UI <span className="text-white font-medium">90%+ 的还原度</span>——填补设计意图与工程实现之间的落差。</>
                  ) as React.ReactNode}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t(
                    "The M365 Admin Center has a complex, tightly-spec'd design language. Every pixel matters when working across design, engineering, and stakeholder reviews. This project was born out of the frustration of watching hours disappear into manual UI reconstruction that should have been instant.",
                    'M365 管理中心拥有复杂且严格规范的设计语言。在设计、工程和利益相关方评审的交叉场景中，每一个像素都至关重要。这个项目诞生于对繁琐手动 UI 重建工作的不满——那些本应瞬间完成的事情，却消耗了大量时间。'
                  )}
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
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t('Outcomes', '成果')}</h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  onClick={() => openOutcomeLightbox(outcome)}
                >
                  <div className="text-3xl font-bold text-white/20 mb-6">{outcome.number}</div>
                  <Image
                    src={`${basePath}/images/MADS agent/${outcome.img}`}
                    alt={outcome.alt}
                    width={2008}
                    height={1528}
                    className="w-full h-auto rounded-xl mb-6"
                  />
                  {outcome.content}
                  {outcome.tag && (
                    <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300 border border-blue-500/20">
                      {outcome.tag}
                    </span>
                  )}
                </motion.div>
              ))}
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
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t('Approaches', '方案')}</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
                <p className="text-gray-300 text-base leading-relaxed">
                  {t(
                    'From a painful manual process to a streamlined AI-powered workflow — two stages that changed how we build.',
                    '从繁琐的手动流程到流畅的 AI 驱动工作流——两个阶段，彻底改变了构建方式。'
                  )}
                </p>
              </div>

              <div className="md:col-span-8 space-y-16 relative">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

                {/* Stage 1 */}
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
                    {t(
                      'Send tokens to VS Code while summarizing the repeated components.',
                      '将设计 token 发送至 VS Code，同时汇总重复组件。'
                    )}
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
                        {t(
                          <>{`Excessive tokens introduce `}<span className="text-red-300 font-medium">significant code noise</span>{`, leading to unstable page generation and inaccurate component use.`}</>,
                          <>过多的 token 引入大量<span className="text-red-300 font-medium">代码噪声</span>，导致页面生成不稳定、组件使用不准确。</>
                        ) as React.ReactNode}
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      <p className="text-gray-200 text-base leading-relaxed">
                        {t(
                          <>The instability and inaccuracy further require significant time spent on manual page adjustments. Average page generation: <span className="text-red-300 font-medium">30 mins → 1 hour or even longer</span>.</>,
                          <>不稳定和不准确进一步要求花费大量时间手动调整页面。平均页面生成时间：<span className="text-red-300 font-medium">30 分钟 → 1 小时甚至更长</span>。</>
                        ) as React.ReactNode}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={`${basePath}/images/MADS agent/figma mcp result.png`}
                      alt="Figma MCP — generated page output"
                      width={2441}
                      height={1528}
                      className="w-full h-auto"
                    />
                    <div className="px-4 py-3 bg-white/[0.03]">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {t('Figma MCP output — token-heavy, unstable generation', 'Figma MCP 输出——token 过载，生成不稳定')}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 2 */}
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
                    {t(
                      'Apply code-based components to re-generate the design.',
                      '应用基于代码的组件重新生成设计。'
                    )}
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
                      {t(
                        <>A structured <span className="text-green-300 font-medium">code-based component library</span> — each component distilled from real M365 patterns, ready to inject directly into AI prompts without token bloat.</>,
                        <>结构化的<span className="text-green-300 font-medium">基于代码的组件库</span>——每个组件均从真实 M365 设计模式中提炼，可直接注入 AI 提示词，无 token 膨胀。</>
                      ) as React.ReactNode}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* ── Why rebuild ──────────────────────────────────────── */}
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
                  {t('Why rebuild the component specs?', '为什么要重建组件规范？')}
                </h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
                <p className="text-gray-300 text-base leading-relaxed">
                  {t(
                    "M365 Admin Center components don't map directly to Fluent UI — there's a private intermediate layer in between that blocks everything.",
                    'M365 管理中心的组件无法直接映射到 Fluent UI——中间存在一个私有中间层，阻断了一切。'
                  )}
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
                    {t('Component architecture — ActionCard example', '组件架构——以 ActionCard 为例')}
                  </p>
                  <div className="space-y-2">
                    {layers.map((layer, i) => (
                      <div key={layer.name}>
                        <div className={`rounded-xl px-5 py-4 border ${layer.isPrivate ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5'}`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-500 uppercase tracking-wider w-20 flex-shrink-0">{layer.label}</span>
                              <span className={`font-mono text-base font-semibold ${layer.isPrivate ? 'text-red-300' : 'text-white'}`}>{layer.name}</span>
                            </div>
                            {layer.isPrivate && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 flex-shrink-0">
                                {t('PRIVATE · BLOCKED', '私有 · 已屏蔽')}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-base ml-[92px] whitespace-pre-line">{layer.detail}</p>
                        </div>
                        {i < layers.length - 1 && (
                          <div className="flex items-center gap-2 my-2 ml-[100px]">
                            <div className="w-px h-5 bg-white/20" />
                            <span className="text-xs text-gray-400">{i === 0 ? t('wraps', '包装') : t('uses', '使用')}</span>
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
                    {t('Constraints', '限制条件')}
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-200 text-base leading-relaxed">
                        {t(
                          <><code className="text-red-300 font-mono text-sm">@m365-admin</code> is a private MADS components library, <span className="text-red-300 font-medium">blocked in the dev environment</span> — the AI cannot reference or use it directly.</>,
                          <><code className="text-red-300 font-mono text-sm">@m365-admin</code> 是私有 MADS 组件库，<span className="text-red-300 font-medium">在开发环境中被屏蔽</span>——AI 无法直接引用或使用。</>
                        ) as React.ReactNode}
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-200 text-base leading-relaxed">
                        {t(
                          <>Dev code cannot be merged into a shared GitHub repository, meaning <span className="text-red-300 font-medium">no shared codebase for team collaboration</span>.</>,
                          <>开发代码无法合并到共享 GitHub 仓库，意味着<span className="text-red-300 font-medium">团队协作没有共享代码库</span>。</>
                        ) as React.ReactNode}
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
                    {t('Workaround', '解决方案')}
                  </p>
                  <p className="text-gray-200 text-base leading-relaxed mb-4">
                    {t(
                      <>Enter the dev environment directly, crawl the private <code className="text-green-300 font-mono text-sm">@m365-admin</code> library, and <span className="text-green-300 font-medium">merge, refactor, and simplify the three-layer structure</span> into components that only depend on public Fluent UI — making them shareable, AI-readable, and collaboration-ready.</>,
                      <>直接进入开发环境，爬取私有 <code className="text-green-300 font-mono text-sm">@m365-admin</code> 库，<span className="text-green-300 font-medium">将三层结构合并、重构并简化</span>为仅依赖公开 Fluent UI 的组件——使其可共享、AI 可读、随时可协作。</>
                    ) as React.ReactNode}
                  </p>
                  <div className="flex items-center gap-4 mt-5 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-1 text-center">
                      <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{t('Before', '之前')}</p>
                      <p className="text-base text-gray-300 font-mono">{t('3 layers · 1 private', '3 层 · 1 私有')}</p>
                    </div>
                    <div className="text-gray-400 text-lg flex-shrink-0">→</div>
                    <div className="flex-1 text-center">
                      <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{t('After', '之后')}</p>
                      <p className="text-base text-green-300 font-mono">{t('1 layer · fully public', '1 层 · 完全公开')}</p>
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
                {t('Rebuild code-based component library', '重建基于代码的组件库')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                {t(
                  "A layered system of reusable components — from basic atoms to composite M365-specific patterns — all precisely tuned to Microsoft's design language.",
                  '从基础原子组件到 M365 特定复合组件的分层可复用系统——精准调校至 Microsoft 设计语言。'
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 text-sm">
                Fluent UI v8 / v9
              </span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 text-sm">
                {t('Basic Components', '基础组件')}
              </span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-gray-200 text-sm">
                {t('Combined Components', '复合组件')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {components.map((comp, i) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  onClick={() => openLightbox(comp)}
                >
                  <div className="h-52 rounded-lg bg-white border border-white/10 mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={`${basePath}/images/MADS agent/${comp.img}`}
                      alt={comp.name}
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
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
                {t('Regenerate the hi-fi prototype', '重新生成高保真原型')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                {t(
                  'With the component library in place, the AI has exactly what it needs — no noise, no ambiguity.',
                  '组件库就位，AI 拥有了所需的一切——无噪声，无歧义。'
                )}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/10">
              <div className="flex flex-col md:flex-row items-stretch gap-4 mb-10">
                <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 uppercase tracking-wider">{t('Inputs', '输入')}</span>
                </div>
                <div className="flex items-center justify-center text-gray-400 text-xl flex-shrink-0">→</div>
                <div className="flex-1 space-y-3">
                  <div className="bg-black/30 rounded-xl px-4 py-3 border border-white/10 text-center">
                    <code className="text-base text-white font-mono">UI-Restoration.md</code>
                  </div>
                  <div className="bg-red-950/30 rounded-xl p-4 border border-red-500/20">
                    <div className="text-sm text-red-400 font-medium mb-2 uppercase tracking-wider">
                      {t('Errors caught & fixed', '发现并修正的错误')}
                    </div>
                    <div className="space-y-2 text-base text-gray-200">
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>{t('Not using the correct components', '未使用正确的组件')}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>{t('Wrong layout', '布局错误')}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>{t('Self-written components', '自行编写组件')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3 max-w-[120px]">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {t('Rounds of back and forth, nudging & guidance', '多轮反复调整与引导')}
                  </p>
                </div>
                <div className="flex items-center justify-center text-gray-400 text-xl flex-shrink-0">→</div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 uppercase tracking-wider">{t('Success', '成功')}</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-start gap-3">
                <div className="w-0.5 self-stretch bg-blue-500/30 rounded-full flex-shrink-0" />
                <p className="text-gray-300 text-base leading-relaxed">
                  {t(
                    <>Summarize solutions and methods into <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm font-mono">.md files</code> — captured learnings feed back into the AI&apos;s next generation cycle, making every iteration smarter than the last.</>,
                    <>将解决方案和方法总结到 <code className="px-1.5 py-0.5 bg-white/10 rounded text-sm font-mono">.md 文件</code>中——积累的经验反馈到 AI 的下一轮生成循环，让每次迭代都比上一次更智能。</>
                  ) as React.ReactNode}
                </p>
              </div>
            </div>

            {/* MD iteration */}
            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {(lang === 'zh'
                ? [
                    { step: '01', title: '生成并识别问题', desc: '审查 AI 输出——标记错误组件、布局异常和 M365 规范偏差。', color: 'text-red-400', border: 'border-red-500/15', bg: 'bg-red-500/5' },
                    { step: '02', title: '更新并优化 MD', desc: '将每个问题转化为明确规则，补充更清晰的规范和明确的避坑提示。', color: 'text-yellow-400', border: 'border-yellow-500/15', bg: 'bg-yellow-500/5' },
                    { step: '03', title: '整合并最终确定', desc: '规则收紧，冗余去除——提炼为稳定、可复用的指令集。', color: 'text-green-400', border: 'border-green-500/15', bg: 'bg-green-500/5' },
                  ]
                : [
                    { step: '01', title: 'Generate & identify gaps', desc: 'Review AI output — flag wrong components, broken layouts, and M365 deviations.', color: 'text-red-400', border: 'border-red-500/15', bg: 'bg-red-500/5' },
                    { step: '02', title: 'Update & refine MD', desc: 'Translate each issue into a concrete rule. Add clearer specs and explicit pitfall warnings.', color: 'text-yellow-400', border: 'border-yellow-500/15', bg: 'bg-yellow-500/5' },
                    { step: '03', title: 'Consolidate & finalize', desc: 'Rules tightened, redundancies removed — distilled into a stable, reusable instruction set.', color: 'text-green-400', border: 'border-green-500/15', bg: 'bg-green-500/5' },
                  ]
              ).map(({ step, title, desc, color, border, bg }) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-6 border ${border} ${bg}`}
                >
                  <div className={`text-sm font-mono font-medium mb-3 ${color}`}>{step}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Next step */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 flex items-start gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-7"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">{t('Next step', '下一步')}</p>
                <p className="text-white font-semibold text-base mb-1.5">
                  {t('Restructure into a Claude Skill', '重构为 Claude Skill')}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(
                    'Split and restructure the MD file following the Claude Skill format — trigger conditions, context injection, phase instructions, and quality checks as dedicated sections that auto-invoke on every run.',
                    '将 MD 文件拆分并按照 Claude Skill 格式重构——将触发条件、上下文注入、分阶段指令和质量检查分别整理为独立模块，每次运行时自动调用。'
                  )}
                </p>
              </div>
            </motion.div>
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
                  {t(
                    'The accumulated learnings were distilled into a structured Claude skill — auto-invoked whenever UI restoration work begins, enforcing standards on every run.',
                    '积累的经验被提炼成结构化的 Claude Skill——在 UI 还原工作开始时自动触发，每次运行都严格执行规范。'
                  )}
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
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">{t('Skill structure', 'Skill 文件结构')}</p>
                  <div className="space-y-1.5 text-gray-300">
                    <div className="text-blue-400">.claude/skills/mads-ui-restoration/</div>
                    <div className="pl-4 text-gray-400">├── <span className="text-white">SKILL.md</span> <span className="text-gray-500 text-sm ml-2">— {t('agent entry point, auto-triggered', '入口文件，自动触发')}</span></div>
                    <div className="pl-4 text-gray-400">├── <span className="text-white">README.md</span></div>
                    <div className="pl-4 text-gray-400">├── <span className="text-white">DEPENDENCIES.md</span></div>
                    <div className="pl-4 text-gray-400">└── references/</div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-1-DESIGN-ANALYSIS.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-2-COMPONENT-MAPPING.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-3-IMPLEMENTATION.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PHASE-4-QUALITY-CHECK.md</span></div>
                    <div className="pl-8 text-gray-400">├── <span className="text-gray-200">PITFALLS.md</span> <span className="text-gray-500 text-sm ml-2">— {t('10 critical mistakes', '10 个关键错误')}</span></div>
                    <div className="pl-8 text-gray-400">└── <span className="text-gray-200">CASE-STUDY.md</span> <span className="text-gray-500 text-sm ml-2">— {t('Connectors page example', 'Connectors 页面案例')}</span></div>
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
                  <p className="text-sm text-orange-400 font-medium uppercase tracking-wider mb-3">🚨 {t('Core Principle', '核心原则')}</p>
                  <p className="text-white font-semibold text-base mb-4">
                    {t(
                      'Never manually implement components that already exist in Fluent UI.',
                      '永远不要手动实现 Fluent UI 中已有的组件。'
                    )}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-base">
                    {[
                      ['Tabs', 'Pivot component'],
                      ['Tables', 'CompositeList / DetailsList'],
                      ['Command bar', 'CommandBar component'],
                      ['Navigation', 'Nav component'],
                    ].map(([see, use]) => (
                      <div key={see} className="flex items-center gap-2 text-gray-300">
                        <span className="text-gray-500">{t('See', '看到')}</span>
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
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-5">
                    {t('Complete restoration process', '完整还原流程')}
                  </p>
                  <div className="space-y-3">
                    {(lang === 'zh'
                      ? [
                          { phase: 'Phase 1', title: '设计分析', effort: '30%', steps: ['UI 结构拆解', '关键尺寸测量', '颜色规范提取', '字体规范识别'] },
                          { phase: 'Phase 2', title: '组件映射', effort: '20%', steps: ['列出所需组件', '在设计系统中查找组件', '确定组件复用优先级', '规划缺失组件实现方案'] },
                          { phase: 'Phase 3', title: '代码实现', effort: '40%', steps: ['构建页面骨架', '集成设计系统组件', '应用 Fluent UI 组件', '实现交互逻辑', '响应式布局适配'] },
                          { phase: 'Phase 4', title: '质量检查', effort: '10%', steps: ['字体与颜色审查', '尺寸与间距审查', '布局与对齐审查', '组件功能验证'] },
                        ]
                      : [
                          { phase: 'Phase 1', title: 'Design Analysis', effort: '30%', steps: ['UI Structure Breakdown', 'Measure Key Dimensions', 'Extract Color Specifications', 'Identify Typography Specifications'] },
                          { phase: 'Phase 2', title: 'Component Mapping', effort: '20%', steps: ['List Required Components', 'Find Components in Design System', 'Determine Component Reuse Priority', 'Plan Missing Component Implementation'] },
                          { phase: 'Phase 3', title: 'Code Implementation', effort: '40%', steps: ['Build Page Skeleton', 'Integrate Design System Components', 'Apply Fluent UI Components', 'Implement Interaction Logic', 'Responsive Layout Adaptation'] },
                          { phase: 'Phase 4', title: 'Quality Check', effort: '10%', steps: ['Typography & Color Review', 'Size & Spacing Review', 'Layout & Alignment Review', 'Component Functionality Verification'] },
                        ]
                    ).map((p) => (
                      <div key={p.phase} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 uppercase tracking-wider w-14">{p.phase}</span>
                            <span className="text-white font-medium text-base">{p.title}</span>
                          </div>
                          <span className="text-sm text-gray-400 font-mono">{p.effort} effort</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 ml-[68px]">
                          {p.steps.map((s, idx) => (
                            <span key={s} className="text-sm text-gray-300 flex items-center gap-1">
                              <span className="text-gray-500 font-mono text-xs">{idx + 1}.</span>
                              {s}
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
                  <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.03]">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                      {t('M365 Standard Dimensions', 'M365 标准尺寸')}
                    </p>
                    <div className="space-y-2 font-mono text-base">
                      {(lang === 'zh'
                        ? [['顶部导航', '48px'], ['侧边栏展开', '280px'], ['侧边栏收起', '48px'], ['页面边距', '32px'], ['卡片间距', '16px']]
                        : [['Top nav', '48px'], ['Sidebar expanded', '280px'], ['Sidebar collapsed', '48px'], ['Page margin', '32px'], ['Card spacing', '16px']]
                      ).map(([label, val]) => (
                        <div key={label} className="flex justify-between">
                          <span className="text-gray-300">{label}</span>
                          <span className="text-blue-300">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.03]">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                      {t('Component Reuse Priority', '组件复用优先级')}
                    </p>
                    <div className="space-y-2 text-base">
                      {(lang === 'zh'
                        ? [['1', '设计系统复合组件', 'text-white'], ['2', '基础组件', 'text-gray-300'], ['3', 'Fluent UI v8', 'text-gray-300'], ['4', 'Fluent UI v9', 'text-gray-300'], ['5', '自定义实现', 'text-gray-400']]
                        : [['1', 'Design System Combined', 'text-white'], ['2', 'Basic Components', 'text-gray-300'], ['3', 'Fluent UI v8', 'text-gray-300'], ['4', 'Fluent UI v9', 'text-gray-300'], ['5', 'Custom Implementation', 'text-gray-400']]
                      ).map(([n, label, color]) => (
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
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t('Result', '结果')}</h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
              <p className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {t(
                  <>Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">90% accurate</span> pages</>,
                  <>生成 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">90% 还原度</span>的页面</>
                ) as React.ReactNode}
              </p>
              <p className="text-4xl md:text-5xl font-bold leading-tight text-gray-500">
                {t(
                  <>within <span className="text-white">3 minutes</span></>,
                  <>仅需 <span className="text-white">3 分钟</span></>
                ) as React.ReactNode}
              </p>
              <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
                {t(
                  'Using the component library and Dev Ops workflow, the AI generates production-fidelity M365 pages end-to-end — no manual adjustment needed.',
                  '基于组件库和 Dev Ops 工作流，AI 端到端生成符合 M365 设计规范的高保真页面——无需手动调整。'
                )}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02]">
              <div ref={slideContainerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                  className="flex"
                  style={{ x: slideX }}
                  drag="x"
                  dragConstraints={{ left: -slideWidth, right: 0 }}
                  dragElastic={0.08}
                  onDragEnd={handleSlideDragEnd}
                >
                  {['result01.png', 'result02.png'].map((img, i) => (
                    <div key={i} className="min-w-full">
                      <Image
                        src={`${basePath}/images/MADS agent/${img}`}
                        alt={t(`Result example ${i + 1}`, `结果示例 ${i + 1}`)}
                        width={2008}
                        height={1528}
                        className="w-full h-auto pointer-events-none"
                        draggable={false}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <button
                  onClick={() => goToSlide(Math.max(resultIndex - 1, 0))}
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {[0, 1].map(i => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`rounded-full transition-all duration-300 ${i === resultIndex ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => goToSlide(Math.min(resultIndex + 1, 1))}
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
              {t('All Projects', '所有项目')}
            </Link>
            <Link
              href="/projects/bank-reconciliation"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t('Next: Bank Reconciliation', '下一个：Bank Reconciliation')}
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

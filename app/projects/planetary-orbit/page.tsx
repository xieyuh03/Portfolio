'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import FluidBackground from '@/components/FluidBackground';
import PlanetaryOrbit from '@/components/PlanetaryOrbit';

export default function PlanetaryOrbitProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <>
      <FluidBackground />
      <Navigation />

      <main ref={containerRef} className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Hero Section with Parallax */}
          <motion.div
            style={{ opacity, scale }}
            className="mb-32"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  style={{ maxWidth: "200px" }}
                />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                  Planetary Orbit
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
                从头像装饰到宇宙诗学：<br />
                一次设计探索的意外旅程
              </p>

              {/* Meta Info - Redesigned */}
              <div className="flex flex-wrap gap-12 text-sm">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group"
                >
                  <div className="text-gray-500 mb-2 text-xs uppercase tracking-wider">Timeline</div>
                  <div className="text-white text-lg">2026</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="group"
                >
                  <div className="text-gray-500 mb-2 text-xs uppercase tracking-wider">Discipline</div>
                  <div className="text-white text-lg">Motion · Interaction</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="group"
                >
                  <div className="text-gray-500 mb-2 text-xs uppercase tracking-wider">Tools</div>
                  <div className="text-white text-lg">React · SVG · TypeScript</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Live Demo Section - Enhanced */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 opacity-50"></div>

              <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 md:p-20 border border-white/10 shadow-2xl">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      Live Interactive Demo
                    </h2>
                    <p className="text-gray-400 text-lg">点击切换旋转方向，探索不同的视觉韵律</p>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <PlanetaryOrbit />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Project Overview */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Overview</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8"></div>
              </div>
              <div className="md:col-span-8">
                <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                  这是一次从简单想法到复杂系统的设计演化。最初只是想为头像周围添加一些装饰性元素，
                  在探索过程中逐渐发现，<span className="text-white font-medium">行星的轨道运动</span>是一个极具视觉表现力的概念——
                  它既有<span className="text-white font-medium">数学的精确性</span>，又有<span className="text-white font-medium">宇宙的浪漫诗意</span>。
                </p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  于是，一个简单的装饰想法演化为太阳系八大行星的轨道可视化。
                  头像成为太阳，周围的装饰变成了行星轨道——一个关于时间、空间和运动的视觉隐喻。
                </p>
              </div>
            </div>
          </motion.section>

          {/* Design Challenge - Redesigned */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Challenge</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8"></div>
              </div>
              <div className="md:col-span-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">初始想法</h3>
                    <p className="text-gray-400 leading-relaxed">
                      在 Portfolio 首页，头像周围的空白区域显得有些单调。
                      需要添加动态元素来增强视觉吸引力，但又不能喧宾夺主。
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">设计目标</h3>
                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">→</span>
                        <span>创造视觉层次感</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">→</span>
                        <span>探索有机的运动节奏</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">→</span>
                        <span>体现技术与美学的平衡</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Design Process - Timeline Style */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Process</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  设计不是线性的。每一步都是对前一步的回应，
                  在试错中寻找更好的解决方案。
                </p>
              </div>

              <div className="md:col-span-8 space-y-16">
                {/* Phase 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-white group-hover:scale-150 transition-all"></div>
                  <div className="pl-8">
                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Phase 01</div>
                    <h3 className="text-2xl font-semibold mb-3">简单圆环装饰</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      最初尝试在头像周围添加几个静态的圆环，作为装饰边框。
                      但很快发现静态元素缺乏生命力，无法传达我想要的动态美感。
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">静态设计</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">几何形状</span>
                    </div>
                  </div>
                </motion.div>

                {/* Phase 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-white group-hover:scale-150 transition-all"></div>
                  <div className="pl-8">
                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Phase 02</div>
                    <h3 className="text-2xl font-semibold mb-3">添加旋转动画</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      为圆环添加旋转动画，让画面动起来。但统一速度的旋转显得过于机械，
                      缺乏自然的节奏变化。这时我开始思考：自然界中有什么是以不同速度旋转的？
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">CSS 动画</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">均匀运动</span>
                    </div>
                  </div>
                </motion.div>

                {/* Phase 3 - Breakthrough */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-white shadow-lg shadow-white/50 group-hover:scale-150 transition-all"></div>
                  <div className="pl-8 bg-gradient-to-br from-white/[0.07] to-transparent rounded-2xl p-6 -ml-4 border border-white/10">
                    <div className="text-xs text-white mb-2 uppercase tracking-wider flex items-center gap-2">
                      Phase 03
                      <span className="px-2 py-0.5 bg-white text-black rounded-full text-[10px] font-semibold">突破</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">引入行星概念</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      灵感突然闪现：<span className="text-white font-medium">太阳系的行星</span>！
                      它们以不同速度围绕太阳旋转，形成自然的节奏差异。
                      水星快速，海王星缓慢，这种差异化的运动正是我想要的有机感。
                      头像就像太阳，周围的装饰变成了行星轨道。
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">概念转换</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">差异化节奏</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">自然隐喻</span>
                    </div>
                  </div>
                </motion.div>

                {/* Phase 4 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-white group-hover:scale-150 transition-all"></div>
                  <div className="pl-8">
                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Phase 04</div>
                    <h3 className="text-2xl font-semibold mb-3">细化视觉细节</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      确定了行星轨道的概念后，开始打磨视觉细节：渐变的轨迹线、
                      动态的拖影效果、细腻的配色方案。每个细节都在强化"宇宙美学"的主题，
                      同时保持克制，不喧宾夺主。
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">视觉打磨</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">细节设计</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">克制表达</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Visual Design Deep Dive - NEW SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Visual Language</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  每一个视觉决策都经过深思熟虑，
                  从配色到动效，从透明度到阴影，
                  都在讲述同一个故事。
                </p>
              </div>

              <div className="md:col-span-8 space-y-12">
                {/* Color Palette */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-6">配色哲学</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    色彩的选择不是任意的。每个行星都有独特的色调，灵感来自真实的太阳系观测数据，
                    但经过艺术化处理以适应深色背景。整体配色遵循<span className="text-white font-medium">低饱和度、冷色调</span>的原则，
                    营造宁静而深邃的宇宙氛围。
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: '水星', color: 'rgb(150, 160, 175)', desc: '银灰色调' },
                      { name: '金星', color: 'rgb(200, 185, 140)', desc: '暖金色调' },
                      { name: '地球', color: 'rgb(190, 200, 210)', desc: '冷蓝灰调' },
                      { name: '火星', color: 'rgb(160, 130, 130)', desc: '淡红褐色' },
                      { name: '木星', color: 'rgb(130, 150, 135)', desc: '青灰绿调' },
                      { name: '土星', color: 'rgb(160, 140, 110)', desc: '黄褐色调' },
                      { name: '天王星', color: 'rgb(170, 185, 200)', desc: '浅蓝灰调' },
                      { name: '海王星', color: 'rgb(120, 150, 160)', desc: '深蓝灰调' },
                    ].map((planet, i) => (
                      <motion.div
                        key={planet.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="group cursor-default"
                      >
                        <div
                          className="aspect-square rounded-2xl mb-3 relative overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors"
                          style={{
                            background: `linear-gradient(135deg, ${planet.color} 0%, rgba(0,0,0,0.3) 100%)`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="text-sm font-medium text-white mb-1">{planet.name}</div>
                        <div className="text-xs text-gray-500">{planet.desc}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <span className="text-white font-medium">透明度控制</span>：
                      外层行星（海王星、天王星）透明度更低（0.5-0.55），营造距离感和神秘感；
                      内层行星（水星、金星、地球）透明度更高（0.65-0.75），更加清晰可见。
                      这种渐进式的透明度变化强化了空间的纵深感。
                    </p>
                  </div>
                </motion.div>

                {/* Motion & Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-6">动效设计</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">匀速线性旋转</h4>
                        <p className="text-gray-400 leading-relaxed">
                          使用 <code className="px-2 py-0.5 bg-white/10 rounded text-sm">linear</code> 缓动函数，
                          而非常见的 ease 曲线。这是刻意的选择——天体运动在宏观尺度上是匀速的，
                          线性动画最能体现这种永恒而稳定的运动特质。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">渐变拖影</h4>
                        <p className="text-gray-400 leading-relaxed">
                          拖影使用 SVG <code className="px-2 py-0.5 bg-white/10 rounded text-sm">linearGradient</code>，
                          从完全透明渐变到行星本体颜色的 80% 透明度。
                          拖影长度动态计算：<code className="px-2 py-0.5 bg-white/10 rounded text-sm">trailLength = baseLength × (minSpeed / currentSpeed)</code>，
                          创造速度视觉化的效果。
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">轨道光晕</h4>
                        <p className="text-gray-400 leading-relaxed">
                          中心头像周围添加了径向渐变光晕效果（<code className="px-2 py-0.5 bg-white/10 rounded text-sm">radial-gradient</code>），
                          模拟"太阳光"向外扩散。透明度极低（8%），配合 <code className="px-2 py-0.5 bg-white/10 rounded text-sm">blur-3xl</code> 滤镜，
                          创造柔和的辉光，不抢镜但增强氛围。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Depth & Layering */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-6">空间层次</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    整个组件通过多层 z-index 和透明度控制营造立体空间感。
                    从视觉上看，可以识别出至少 5 个不同的深度层：
                  </p>

                  <div className="space-y-3">
                    {[
                      { layer: '背景光晕', zIndex: 1, opacity: '8%', desc: '最底层，营造环境氛围' },
                      { layer: '轨道线条', zIndex: 1, opacity: '4-25%', desc: '静态，渐变透明度' },
                      { layer: '中心头像', zIndex: 5, opacity: '100%', desc: '视觉焦点' },
                      { layer: '行星拖影', zIndex: '10+', opacity: '0-80%', desc: '动态，渐变效果' },
                      { layer: '行星本体', zIndex: '10+', opacity: '50-75%', desc: '最上层，带发光阴影' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.layer}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 group hover:bg-white/[0.07] transition-colors"
                      >
                        <div className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors w-8">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-medium text-white">{item.layer}</span>
                            <span className="text-xs text-gray-500 font-mono">z:{item.zIndex}</span>
                            <span className="text-xs text-gray-500 font-mono">α:{item.opacity}</span>
                          </div>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      设计洞察
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      头像的 z-index (5) 刻意设计在轨道 (1) 和行星 (10+) 之间，
                      这样行星会在头像"前方"运行，而轨道在头像"后方"，
                      创造一种行星从头像背后涌现、在前方划过的视觉叙事。
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Design Highlights - Redesigned */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="mb-16 text-center">
              <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Key Features</h2>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
              <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
                四个核心设计亮点，每一个都经过精心打磨
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  ),
                  title: '分段渐变轨迹',
                  desc: '轨道被分成 100 段，前后各 20% 区域渐变淡出。这种设计让轨道像是从虚空中浮现又消失，增强空间深度感和神秘氛围。',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  ),
                  title: '动态拖影系统',
                  desc: '拖影长度与速度成反比——水星最快，拖影最长；海王星最慢，拖影最短。这符合物理直觉（运动模糊），也强化了运动差异。',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  ),
                  title: '差异化运动节奏',
                  desc: '从水星的 5 秒到海王星的 95 秒，八大行星各有独特周期。这种差异创造复杂而和谐的视觉韵律，像精心编排的宇宙芭蕾。',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  ),
                  title: '交互式视角切换',
                  desc: '点击切换旋转方向，从不同视角观察轨道系统。交互反馈即时流畅，强化"可探索系统"的概念，而非被动观看。',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technical Implementation - Simplified */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Implementation</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  技术实现同样注重细节和性能，
                  每一行代码都服务于最终的视觉体验。
                </p>
              </div>

              <div className="md:col-span-8 space-y-6">
                {[
                  {
                    num: '01',
                    title: 'SVG 路径与渐变',
                    code: 'const segmentOpacity = \n  relativePosition < 0.2\n    ? (relativePosition / 0.2) * opacityFactor\n    : ((1 - relativePosition) / 0.2) * opacityFactor',
                    desc: '轨道分成 100 段独立 path，动态计算每段透明度。拖影使用 linearGradient 从透明渐变到行星颜色。'
                  },
                  {
                    num: '02',
                    title: '质数算法生成角度',
                    code: 'const getStartAngle = (index) => {\n  return (index * 47 + index * index * 23) % 360;\n}',
                    desc: '用质数乘法生成"随机"但固定的起始角度，避免轨道起点过于规律，金星特殊调整到 210° 平衡布局。'
                  },
                  {
                    num: '03',
                    title: '性能优化分离',
                    code: '// 轨道静态 (z-index: 1)\n// 行星动态 (transform + z-index: 10+)\n// 硬件加速 60fps',
                    desc: '轨道线条静态不旋转，只有行星和拖影使用 CSS transform 旋转，减少 GPU 负担，60fps 流畅运行。'
                  },
                  {
                    num: '04',
                    title: '动态拖影计算',
                    code: 'const trailLength = \n  baseLength * (minDuration / planet.duration)',
                    desc: '拖影长度根据速度动态计算，基础 50° 乘以速度比例因子，快速行星拖影更长，视觉化速度差异。'
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl font-bold text-white/20">{item.num}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 mb-4 font-mono text-sm text-gray-300 overflow-x-auto">
                      <pre><code>{item.code}</code></pre>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Reflection - Redesigned */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl -z-10"></div>

              <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">Reflection</h2>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                  <p className="text-2xl font-light">
                    这个项目让我深刻体会到：
                    <span className="block mt-4 text-3xl font-medium text-white">
                      最好的设计往往不是预先规划出来的，<br />而是在探索中自然涌现的。
                    </span>
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-white font-medium mb-4 text-lg">技术与创意</h4>
                      <p className="text-gray-400">
                        我学到了如何在技术约束中寻找创意可能性——
                        SVG 的分段路径、CSS 动画的性能考量、数学算法的视觉应用，
                        这些技术细节不是限制，而是创作的素材。
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-4 text-lg">克制的力量</h4>
                      <p className="text-gray-400">
                        尽管可以添加更多效果（粒子、光晕、3D 变换），
                        但我选择保持简洁。有时候，少即是多，留白也是设计的一部分。
                        克制不是妥协，而是更高级的审美选择。
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

                  <p className="text-xl text-center italic text-gray-400">
                    "这不仅是一个动画组件，更是一次关于<br />
                    <span className="text-white font-medium">如何用代码表达诗意</span>的实践。"
                  </p>

                  <p className="text-gray-400 text-center">
                    宇宙的浩瀚、运动的韵律、时间的流逝——<br />
                    这些抽象的概念通过像素和代码变得可见、可感。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Navigation Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-white/10 flex justify-between items-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>All Projects</span>
            </Link>

            <div className="text-gray-500 text-sm">
              Next Project →
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

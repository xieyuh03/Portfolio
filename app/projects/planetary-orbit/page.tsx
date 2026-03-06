'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
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

  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = <T,>(en: T, zh: T): T => lang === 'zh' ? zh : en;

  const planets = [
    { name: t('Mercury', '水星'), color: 'rgb(150, 160, 175)', desc: t('Silver gray', '银灰色调') },
    { name: t('Venus', '金星'), color: 'rgb(200, 185, 140)', desc: t('Warm gold', '暖金色调') },
    { name: t('Earth', '地球'), color: 'rgb(190, 200, 210)', desc: t('Cool blue-gray', '冷蓝灰调') },
    { name: t('Mars', '火星'), color: 'rgb(160, 130, 130)', desc: t('Light reddish brown', '淡红褐色') },
    { name: t('Jupiter', '木星'), color: 'rgb(130, 150, 135)', desc: t('Cyan-gray green', '青灰绿调') },
    { name: t('Saturn', '土星'), color: 'rgb(160, 140, 110)', desc: t('Yellow-brown', '黄褐色调') },
    { name: t('Uranus', '天王星'), color: 'rgb(170, 185, 200)', desc: t('Light blue-gray', '浅蓝灰调') },
    { name: t('Neptune', '海王星'), color: 'rgb(120, 150, 160)', desc: t('Deep blue-gray', '深蓝灰调') },
  ];

  const layers = [
    { layer: t('Background Glow', '背景光晕'), zIndex: 1, opacity: '8%', desc: t('Deepest layer, creating ambient atmosphere', '最底层，营造环境氛围') },
    { layer: t('Orbit Lines', '轨道线条'), zIndex: 1, opacity: '4-25%', desc: t('Static, gradient opacity', '静态，渐变透明度') },
    { layer: t('Center Avatar', '中心头像'), zIndex: 5, opacity: '100%', desc: t('Visual focal point', '视觉焦点') },
    { layer: t('Planet Trails', '行星拖影'), zIndex: '10+', opacity: '0-80%', desc: t('Dynamic, gradient effect', '动态，渐变效果') },
    { layer: t('Planet Bodies', '行星本体'), zIndex: '10+', opacity: '50-75%', desc: t('Topmost layer, with glowing shadow', '最上层，带发光阴影') },
  ];

  const features = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      ),
      title: t('Segmented Gradient Orbit', '分段渐变轨迹'),
      desc: t(
        'The orbit is divided into 100 segments, with the first and last 20% fading out. This design makes the orbit appear to emerge from and disappear into the void, enhancing spatial depth and a sense of mystery.',
        '轨道被分成 100 段，前后各 20% 区域渐变淡出。这种设计让轨道像是从虚空中浮现又消失，增强空间深度感和神秘氛围。'
      ),
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      title: t('Dynamic Trail System', '动态拖影系统'),
      desc: t(
        'Trail length is inversely proportional to speed — Mercury is fastest with the longest trail; Neptune is slowest with the shortest. This follows physical intuition (motion blur) and reinforces movement differentiation.',
        '拖影长度与速度成反比——水星最快，拖影最长；海王星最慢，拖影最短。这符合物理直觉（运动模糊），也强化了运动差异。'
      ),
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      ),
      title: t('Differentiated Motion Rhythm', '差异化运动节奏'),
      desc: t(
        'From Mercury\'s 5 seconds to Neptune\'s 95 seconds, each of the eight planets has a unique period. This variation creates a complex yet harmonious visual rhythm, like a carefully choreographed cosmic ballet.',
        '从水星的 5 秒到海王星的 95 秒，八大行星各有独特周期。这种差异创造复杂而和谐的视觉韵律，像精心编排的宇宙芭蕾。'
      ),
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      ),
      title: t('Interactive Perspective Toggle', '交互式视角切换'),
      desc: t(
        'Click to toggle rotation direction and observe the orbital system from different perspectives. Interactive feedback is immediate and fluid, reinforcing the concept of an "explorable system" rather than passive viewing.',
        '点击切换旋转方向，从不同视角观察轨道系统。交互反馈即时流畅，强化"可探索系统"的概念，而非被动观看。'
      ),
    },
  ];

  const implItems = [
    {
      num: '01',
      title: t('SVG Paths & Gradients', 'SVG 路径与渐变'),
      code: 'const segmentOpacity = \n  relativePosition < 0.2\n    ? (relativePosition / 0.2) * opacityFactor\n    : ((1 - relativePosition) / 0.2) * opacityFactor',
      desc: t(
        'Orbits split into 100 independent path segments with dynamically computed opacity per segment. Trails use linearGradient fading from transparent to planet color.',
        '轨道分成 100 段独立 path，动态计算每段透明度。拖影使用 linearGradient 从透明渐变到行星颜色。'
      ),
    },
    {
      num: '02',
      title: t('Prime Number Algorithm for Angles', '质数算法生成角度'),
      code: 'const getStartAngle = (index) => {\n  return (index * 47 + index * index * 23) % 360;\n}',
      desc: t(
        'Prime number multiplication generates "random" but fixed starting angles, preventing orbit start points from being too regular. Venus specially adjusted to 210° to balance the layout.',
        '用质数乘法生成"随机"但固定的起始角度，避免轨道起点过于规律，金星特殊调整到 210° 平衡布局。'
      ),
    },
    {
      num: '03',
      title: t('Performance-Separated Architecture', '性能优化分离'),
      code: '// Orbits static (z-index: 1)\n// Planets dynamic (transform + z-index: 10+)\n// Hardware accelerated 60fps',
      desc: t(
        'Orbit lines are static (no rotation), only planets and trails use CSS transform rotation, reducing GPU load for smooth 60fps performance.',
        '轨道线条静态不旋转，只有行星和拖影使用 CSS transform 旋转，减少 GPU 负担，60fps 流畅运行。'
      ),
    },
    {
      num: '04',
      title: t('Dynamic Trail Calculation', '动态拖影计算'),
      code: 'const trailLength = \n  baseLength * (minDuration / planet.duration)',
      desc: t(
        'Trail length dynamically calculated based on speed. Base 50° multiplied by a speed ratio factor — fast planets have longer trails, visually differentiating speed.',
        '拖影长度根据速度动态计算，基础 50° 乘以速度比例因子，快速行星拖影更长，视觉化速度差异。'
      ),
    },
  ];

  return (
    <>
      <FluidBackground />
      <Navigation />

      {/* Language Toggle */}
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
              <span className="text-sm">{t('Back to Projects', '返回项目列表')}</span>
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
                {t(
                  <>From avatar decoration to cosmic poetry:<br />An unexpected journey of design exploration</>,
                  <>从头像装饰到宇宙诗学：<br />一次设计探索的意外旅程</>
                )}
              </p>

              {/* Meta Info */}
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

          {/* Live Demo Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-40"
          >
            <div className="relative">
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
                    <p className="text-gray-400 text-lg">
                      {t('Click to toggle rotation direction and explore different visual rhythms', '点击切换旋转方向，探索不同的视觉韵律')}
                    </p>
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
                  {t(
                    <>This is a design evolution from a simple idea to a complex system. It started as just wanting to add decorative elements around an avatar, but through exploration I gradually discovered that <span className="text-white font-medium">planetary orbital motion</span> is an extremely expressive visual concept — it has both <span className="text-white font-medium">mathematical precision</span> and <span className="text-white font-medium">the romantic poetry of the cosmos</span>.</>,
                    <>这是一次从简单想法到复杂系统的设计演化。最初只是想为头像周围添加一些装饰性元素，在探索过程中逐渐发现，<span className="text-white font-medium">行星的轨道运动</span>是一个极具视觉表现力的概念——它既有<span className="text-white font-medium">数学的精确性</span>，又有<span className="text-white font-medium">宇宙的浪漫诗意</span>。</>
                  )}
                </p>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {t(
                    'So a simple decorative idea evolved into an orbital visualization of the eight planets of the solar system. The avatar became the sun, and the surrounding decorations became planetary orbits — a visual metaphor about time, space, and motion.',
                    '于是，一个简单的装饰想法演化为太阳系八大行星的轨道可视化。头像成为太阳，周围的装饰变成了行星轨道——一个关于时间、空间和运动的视觉隐喻。'
                  )}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Design Challenge */}
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
                    <h3 className="text-xl font-semibold mb-3">{t('Initial Idea', '初始想法')}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(
                        'The empty space around the avatar on the Portfolio homepage felt a bit plain. Dynamic elements were needed to enhance visual appeal, but without overshadowing the main content.',
                        '在 Portfolio 首页，头像周围的空白区域显得有些单调。需要添加动态元素来增强视觉吸引力，但又不能喧宾夺主。'
                      )}
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
                    <h3 className="text-xl font-semibold mb-3">{t('Design Goals', '设计目标')}</h3>
                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">→</span>
                        <span>{t('Create visual hierarchy', '创造视觉层次感')}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">→</span>
                        <span>{t('Explore organic motion rhythm', '探索有机的运动节奏')}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-white/40 mt-1">→</span>
                        <span>{t('Balance technology and aesthetics', '体现技术与美学的平衡')}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Design Process */}
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
                  {t(
                    'Design is not linear. Each step responds to the previous one, finding better solutions through trial and error.',
                    '设计不是线性的。每一步都是对前一步的回应，在试错中寻找更好的解决方案。'
                  )}
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
                    <h3 className="text-2xl font-semibold mb-3">{t('Simple Ring Decoration', '简单圆环装饰')}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {t(
                        'The first attempt was to add a few static rings around the avatar as decorative borders. But static elements quickly felt lifeless, unable to convey the dynamic aesthetic I was after.',
                        '最初尝试在头像周围添加几个静态的圆环，作为装饰边框。但很快发现静态元素缺乏生命力，无法传达我想要的动态美感。'
                      )}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">{t('Static Design', '静态设计')}</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">{t('Geometric Shapes', '几何形状')}</span>
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
                    <h3 className="text-2xl font-semibold mb-3">{t('Adding Rotation Animation', '添加旋转动画')}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {t(
                        "Added rotation animation to make the rings move. But uniform speed rotation felt too mechanical, lacking natural rhythm variation. That's when I started thinking: what in nature rotates at different speeds?",
                        '为圆环添加旋转动画，让画面动起来。但统一速度的旋转显得过于机械，缺乏自然的节奏变化。这时我开始思考：自然界中有什么是以不同速度旋转的？'
                      )}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">{t('CSS Animation', 'CSS 动画')}</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">{t('Uniform Motion', '均匀运动')}</span>
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
                      <span className="px-2 py-0.5 bg-white text-black rounded-full text-[10px] font-semibold">{t('Breakthrough', '突破')}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{t('Introducing the Planetary Concept', '引入行星概念')}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {t(
                        <>Inspiration struck suddenly: <span className="text-white font-medium">the planets of the solar system</span>! They orbit the sun at different speeds, creating natural rhythmic variation. Mercury is fast, Neptune is slow — this differentiated motion was exactly the organic feel I was looking for. The avatar becomes the sun, and the surrounding decorations become planetary orbits.</>,
                        <>灵感突然闪现：<span className="text-white font-medium">太阳系的行星</span>！它们以不同速度围绕太阳旋转，形成自然的节奏差异。水星快速，海王星缓慢，这种差异化的运动正是我想要的有机感。头像就像太阳，周围的装饰变成了行星轨道。</>
                      )}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">{t('Conceptual Shift', '概念转换')}</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">{t('Differentiated Rhythm', '差异化节奏')}</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">{t('Natural Metaphor', '自然隐喻')}</span>
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
                    <h3 className="text-2xl font-semibold mb-3">{t('Refining Visual Details', '细化视觉细节')}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {t(
                        'With the planetary orbit concept established, I started polishing visual details: gradient trail lines, dynamic trailing effects, refined color schemes. Every detail reinforced the "cosmic aesthetic" theme while staying restrained, not overshadowing the main content.',
                        '确定了行星轨道的概念后，开始打磨视觉细节：渐变的轨迹线、动态的拖影效果、细腻的配色方案。每个细节都在强化"宇宙美学"的主题，同时保持克制，不喧宾夺主。'
                      )}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">{t('Visual Polish', '视觉打磨')}</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">{t('Detail Design', '细节设计')}</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/10">{t('Restrained Expression', '克制表达')}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Visual Design Deep Dive */}
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
                  {t(
                    'Every visual decision was carefully considered — from color to motion, from opacity to shadow, all telling the same story.',
                    '每一个视觉决策都经过深思熟虑，从配色到动效，从透明度到阴影，都在讲述同一个故事。'
                  )}
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
                  <h3 className="text-2xl font-semibold mb-6">{t('Color Philosophy', '配色哲学')}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {t(
                      <>Color choices are not arbitrary. Each planet has a unique hue inspired by real solar system observation data, but artistically processed for dark backgrounds. The overall palette follows a <span className="text-white font-medium">low saturation, cool-toned</span> principle, creating a tranquil and profound cosmic atmosphere.</>,
                      <>色彩的选择不是任意的。每个行星都有独特的色调，灵感来自真实的太阳系观测数据，但经过艺术化处理以适应深色背景。整体配色遵循<span className="text-white font-medium">低饱和度、冷色调</span>的原则，营造宁静而深邃的宇宙氛围。</>
                    )}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {planets.map((planet, i) => (
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
                      {t(
                        <><span className="text-white font-medium">Opacity Control</span>: Outer planets (Neptune, Uranus) have lower opacity (0.5-0.55), creating a sense of distance and mystery; inner planets (Mercury, Venus, Earth) have higher opacity (0.65-0.75), more clearly visible. This progressive opacity gradient reinforces spatial depth.</>,
                        <><span className="text-white font-medium">透明度控制</span>：外层行星（海王星、天王星）透明度更低（0.5-0.55），营造距离感和神秘感；内层行星（水星、金星、地球）透明度更高（0.65-0.75），更加清晰可见。这种渐进式的透明度变化强化了空间的纵深感。</>
                      )}
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
                  <h3 className="text-2xl font-semibold mb-6">{t('Motion Design', '动效设计')}</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-2">{t('Uniform Linear Rotation', '匀速线性旋转')}</h4>
                        <p className="text-gray-400 leading-relaxed">
                          {t(
                            <>Using the <code className="px-2 py-0.5 bg-white/10 rounded text-sm">linear</code> easing function rather than common ease curves. This is a deliberate choice — celestial motion at a macro scale is uniform, and linear animation best captures this eternal, stable quality of movement.</>,
                            <>使用 <code className="px-2 py-0.5 bg-white/10 rounded text-sm">linear</code> 缓动函数，而非常见的 ease 曲线。这是刻意的选择——天体运动在宏观尺度上是匀速的，线性动画最能体现这种永恒而稳定的运动特质。</>
                          )}
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
                        <h4 className="text-lg font-medium mb-2">{t('Gradient Trailing Effect', '渐变拖影')}</h4>
                        <p className="text-gray-400 leading-relaxed">
                          {t(
                            <>The trail uses SVG <code className="px-2 py-0.5 bg-white/10 rounded text-sm">linearGradient</code>, fading from fully transparent to 80% opacity of the planet&apos;s color. Trail length is dynamically calculated: <code className="px-2 py-0.5 bg-white/10 rounded text-sm">trailLength = baseLength × (minSpeed / currentSpeed)</code>, creating a visual speed indicator.</>,
                            <>拖影使用 SVG <code className="px-2 py-0.5 bg-white/10 rounded text-sm">linearGradient</code>，从完全透明渐变到行星本体颜色的 80% 透明度。拖影长度动态计算：<code className="px-2 py-0.5 bg-white/10 rounded text-sm">trailLength = baseLength × (minSpeed / currentSpeed)</code>，创造速度视觉化的效果。</>
                          )}
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
                        <h4 className="text-lg font-medium mb-2">{t('Orbital Halo', '轨道光晕')}</h4>
                        <p className="text-gray-400 leading-relaxed">
                          {t(
                            <>A radial gradient glow effect (<code className="px-2 py-0.5 bg-white/10 rounded text-sm">radial-gradient</code>) is added around the center avatar to simulate &quot;sunlight&quot; radiating outward. Opacity is extremely low (8%), combined with the <code className="px-2 py-0.5 bg-white/10 rounded text-sm">blur-3xl</code> filter, creating a soft glow that enhances atmosphere without stealing the spotlight.</>,
                            <>中心头像周围添加了径向渐变光晕效果（<code className="px-2 py-0.5 bg-white/10 rounded text-sm">radial-gradient</code>），模拟"太阳光"向外扩散。透明度极低（8%），配合 <code className="px-2 py-0.5 bg-white/10 rounded text-sm">blur-3xl</code> 滤镜，创造柔和的辉光，不抢镜但增强氛围。</>
                          )}
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
                  <h3 className="text-2xl font-semibold mb-6">{t('Spatial Layers', '空间层次')}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {t(
                      'The entire component creates a three-dimensional sense of space through multiple z-index levels and opacity control. Visually, you can identify at least 5 distinct depth layers:',
                      '整个组件通过多层 z-index 和透明度控制营造立体空间感。从视觉上看，可以识别出至少 5 个不同的深度层：'
                    )}
                  </p>

                  <div className="space-y-3">
                    {layers.map((item, i) => (
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
                      {t('Design Insight', '设计洞察')}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {t(
                        "The avatar's z-index (5) is deliberately set between orbits (1) and planets (10+), so planets orbit in 'front' of the avatar, while orbits are 'behind' it — creating a visual narrative where planets emerge from behind the avatar and pass in front.",
                        '头像的 z-index (5) 刻意设计在轨道 (1) 和行星 (10+) 之间，这样行星会在头像"前方"运行，而轨道在头像"后方"，创造一种行星从头像背后涌现、在前方划过的视觉叙事。'
                      )}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Key Features */}
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
                {t('Four core design highlights, each carefully refined', '四个核心设计亮点，每一个都经过精心打磨')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
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

          {/* Technical Implementation */}
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
                  {t(
                    'Technical implementation also pays attention to detail and performance — every line of code serves the final visual experience.',
                    '技术实现同样注重细节和性能，每一行代码都服务于最终的视觉体验。'
                  )}
                </p>
              </div>

              <div className="md:col-span-8 space-y-6">
                {implItems.map((item, i) => (
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

          {/* Reflection */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl -z-10"></div>

              <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-8">Reflection</h2>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                  <p className="text-2xl font-light">
                    {t('This project made me deeply realize:', '这个项目让我深刻体会到：')}
                    <span className="block mt-4 text-3xl font-medium text-white">
                      {t(
                        <>The best design often isn&apos;t planned in advance,<br />but emerges naturally through exploration.</>,
                        <>最好的设计往往不是预先规划出来的，<br />而是在探索中自然涌现的。</>
                      )}
                    </span>
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-white font-medium mb-4 text-lg">{t('Technology & Creativity', '技术与创意')}</h4>
                      <p className="text-gray-400">
                        {t(
                          'I learned how to find creative possibilities within technical constraints — SVG segmented paths, performance considerations for CSS animations, mathematical algorithms applied visually. These technical details aren\'t limitations, but creative materials.',
                          '我学到了如何在技术约束中寻找创意可能性——SVG 的分段路径、CSS 动画的性能考量、数学算法的视觉应用，这些技术细节不是限制，而是创作的素材。'
                        )}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-4 text-lg">{t('The Power of Restraint', '克制的力量')}</h4>
                      <p className="text-gray-400">
                        {t(
                          'Although more effects could be added (particles, halos, 3D transforms), I chose to keep it simple. Sometimes less is more, and negative space is also part of design. Restraint isn\'t compromise — it\'s a higher level of aesthetic choice.',
                          '尽管可以添加更多效果（粒子、光晕、3D 变换），但我选择保持简洁。有时候，少即是多，留白也是设计的一部分。克制不是妥协，而是更高级的审美选择。'
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

                  <p className="text-xl text-center italic text-gray-400">
                    {t(
                      <>&quot;This is not just an animation component, but a practice of<br /><span className="text-white font-medium">how to express poetry through code</span>.&quot;</>,
                      <>&quot;这不仅是一个动画组件，更是一次关于<br /><span className="text-white font-medium">如何用代码表达诗意</span>的实践。&quot;</>
                    )}
                  </p>

                  <p className="text-gray-400 text-center">
                    {t(
                      <>The vastness of the universe, the rhythm of motion, the passage of time —<br />these abstract concepts made visible and tangible through pixels and code.</>,
                      <>宇宙的浩瀚、运动的韵律、时间的流逝——<br />这些抽象的概念通过像素和代码变得可见、可感。</>
                    )}
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
              <span>{t('All Projects', '所有项目')}</span>
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

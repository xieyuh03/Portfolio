# 高级交互模式速查

可按需用于任何 Vibe Coding 项目的高级模式。根据项目特点选用，不要全部堆砌。

---

## 🖼️ 组件/截图卡片（白底 + 固定高度）

展示 UI 组件图片时，统一高度 + 白色背景解决不同尺寸截图的排版问题，点击可展开。

```tsx
<motion.div
  whileHover={{ y: -4 }}
  className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm
             rounded-2xl p-6 border border-white/10 hover:border-white/20
             transition-all cursor-pointer"
  onClick={() => openLightbox(item)}
>
  {/* 固定高度白底容器，object-contain 保持图片比例 */}
  <div className="h-52 rounded-lg bg-white border border-white/10 mb-4
                  flex items-center justify-center overflow-hidden">
    <Image
      src={item.img} alt={item.name}
      width={800} height={600}
      className="w-full h-full object-contain"
    />
  </div>
  <h3 className="text-lg font-semibold mb-1.5 text-white">{item.name}</h3>
  <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
</motion.div>
```

---

## 🔍 Lightbox（缩放 + 拖拽查看）

点击图片或卡片后弹出 overlay，支持滚轮缩放、拖拽平移、+/- 按钮、Reset。

```tsx
import { motion, useMotionValue } from 'framer-motion';

// 状态
const imgContainerRef = useRef<HTMLDivElement>(null);
const [lightboxItem, setLightboxItem] = useState<ItemType | null>(null);
const [imgScale, setImgScale] = useState(1);
const imgX = useMotionValue(0);
const imgY = useMotionValue(0);

const openLightbox = (item: ItemType) => {
  setImgScale(1); imgX.set(0); imgY.set(0);
  setLightboxItem(item);
};
const closeLightbox = () => {
  setImgScale(1); imgX.set(0); imgY.set(0);
  setLightboxItem(null);
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

// JSX
{lightboxItem && (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    className="fixed inset-0 z-50 flex items-center justify-center
               bg-black/80 backdrop-blur-sm p-6 cursor-zoom-out"
    onClick={closeLightbox}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative max-w-4xl w-full bg-gradient-to-br from-white/[0.10]
                 to-white/[0.04] backdrop-blur-xl rounded-2xl p-8
                 border border-white/20 shadow-2xl cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      {/* 关闭按钮 */}
      <button onClick={closeLightbox}
        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10
                   hover:bg-white/20 flex items-center justify-center z-10">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* 图片区域（固定高度 420px）*/}
      <div ref={imgContainerRef}
        className="rounded-xl bg-white overflow-hidden mb-6 relative select-none"
        style={{ height: '420px' }}
        onWheel={handleWheel}
      >
        <motion.div
          drag={imgScale > 1}
          dragConstraints={getDragConstraints()}
          dragElastic={0.05} dragMomentum={false}
          style={{ x: imgX, y: imgY, scale: imgScale, cursor: imgScale > 1 ? 'grab' : 'default' }}
          className="w-full h-full flex items-center justify-center"
        >
          <Image src={lightboxItem.img} alt={lightboxItem.name}
            width={1600} height={1200}
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </motion.div>
        {/* 缩放控件 */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1
                        bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
          <button onClick={() => handleZoom(-0.5)} className="w-7 h-7 flex items-center justify-center text-white text-lg font-light">−</button>
          <span className="text-white text-xs w-10 text-center">{Math.round(imgScale * 100)}%</span>
          <button onClick={() => handleZoom(0.5)} className="w-7 h-7 flex items-center justify-center text-white text-lg font-light">+</button>
        </div>
        {imgScale > 1 && (
          <button onClick={() => { setImgScale(1); imgX.set(0); imgY.set(0); }}
            className="absolute bottom-3 left-3 text-xs text-white/60 hover:text-white/90
                       bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
            Reset
          </button>
        )}
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-white">{lightboxItem.name}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{lightboxItem.desc}</p>
    </motion.div>
  </motion.div>
)}
```

---

## 🎠 图片轮播（拖拽平滑滑动）

关键：用 `useMotionValue` + `animate()` 替代 AnimatePresence 避免切换生硬。`dragConstraints` 必须覆盖全范围。

```tsx
import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const [currentIndex, setCurrentIndex] = useState(0);
const [slideWidth, setSlideWidth] = useState(0);
const slideX = useMotionValue(0);
const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const el = containerRef.current;
  if (!el) return;
  setSlideWidth(el.offsetWidth);
  const ro = new ResizeObserver(([entry]) => setSlideWidth(entry.contentRect.width));
  ro.observe(el);
  return () => ro.disconnect();
}, []);

const goToSlide = (index: number) => {
  const width = containerRef.current?.offsetWidth ?? slideWidth;
  animate(slideX, -index * width, { type: 'spring', stiffness: 300, damping: 35 });
  setCurrentIndex(index);
};

const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
  const width = containerRef.current?.offsetWidth ?? slideWidth;
  if (info.offset.x < -width * 0.2 && currentIndex < items.length - 1) goToSlide(currentIndex + 1);
  else if (info.offset.x > width * 0.2 && currentIndex > 0) goToSlide(currentIndex - 1);
  else goToSlide(currentIndex);
};

// JSX
<div ref={containerRef} className="relative overflow-hidden rounded-2xl">
  <motion.div
    drag="x"
    dragConstraints={{ left: -slideWidth, right: 0 }}  // ⚠️ left 必须是 -slideWidth，不能是 0
    dragElastic={0.1} dragMomentum={false}
    style={{ x: slideX }}
    onDragEnd={handleDragEnd}
    className="flex cursor-grab active:cursor-grabbing"
  >
    {items.map((item, i) => (
      <div key={i} className="flex-shrink-0 w-full">
        <Image src={item.img} alt={item.alt} width={2441} height={1528}
               className="w-full h-auto" draggable={false} />
      </div>
    ))}
  </motion.div>
</div>

{/* 指示点 */}
<div className="flex justify-center gap-2 mt-6">
  {items.map((_, i) => (
    <button key={i} onClick={() => goToSlide(i)}
      className={`rounded-full transition-all ${
        i === currentIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
      }`}
    />
  ))}
</div>
```

---

## 🚦 语义色块（问题 / 方案 / 警告）

用颜色区分信息语义，适合对比展示问题与解决方案。

```tsx
{/* 问题 ✕（红色）*/}
<div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
  <p className="text-gray-200 text-base leading-relaxed">
    问题描述，<span className="text-red-300 font-medium">关键词</span>。
  </p>
</div>

{/* 方案 ✓（绿色）*/}
<div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/15">
  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
  <p className="text-gray-200 text-base leading-relaxed">
    解决方案，<span className="text-green-300 font-medium">关键词</span>。
  </p>
</div>

{/* 核心原则（橙色）*/}
<div className="rounded-2xl p-6 border border-orange-500/20 bg-orange-500/5">
  <p className="text-sm text-orange-400 font-medium uppercase tracking-wider mb-3">🚨 Core Principle</p>
  <p className="text-white font-semibold text-base">规则内容</p>
</div>

{/* 整块约束/方案区域 */}
<div className="rounded-2xl p-7 border border-red-500/15 bg-red-500/5">
  <p className="text-sm font-medium text-red-400 uppercase tracking-wider mb-4">Constraints</p>
  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <span className="text-red-400 mt-1 flex-shrink-0">•</span>
      <p className="text-gray-200 text-base leading-relaxed">约束描述</p>
    </li>
  </ul>
</div>
```

---

## 📍 阶段时间线（左边框线版）

比圆点版更有纵深感，适合有多个 Stage 的工作流叙述。

```tsx
<div className="md:col-span-8 space-y-16 relative">
  {/* 左侧渐变竖线 */}
  <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

  {stages.map((stage, i) => (
    <motion.div key={i}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="relative group pl-8"
    >
      {/* 线上圆点 */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full
                      bg-gray-600 group-hover:bg-white group-hover:scale-150 transition-all" />
      <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Stage {i + 1}</div>
      <h3 className="text-2xl font-semibold mb-2">{stage.title}</h3>
      <p className="text-gray-300 text-base mb-6">{stage.desc}</p>
      {/* 截图（可选）*/}
      {stage.img && <Image src={stage.img} alt={stage.title} width={2589} height={1528}
        className="w-full h-auto rounded-2xl mb-6" />}
    </motion.div>
  ))}
</div>
```

---

## ↔️ Before / After 内联对比

简洁的单行 Before → After 数据或状态对比。

```tsx
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
  <div className="flex-1 text-center">
    <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Before</p>
    <p className="text-base text-gray-300 font-mono">旧状态描述</p>
  </div>
  <div className="text-gray-400 text-lg flex-shrink-0">→</div>
  <div className="flex-1 text-center">
    <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider">After</p>
    <p className="text-base text-green-300 font-mono">新状态描述</p>
  </div>
</div>
```

---

## 🎨 渐进式步骤卡（红→黄→绿）

表示流程递进：发现问题 → 优化 → 完成。

```tsx
{[
  { step: '01', title: '第一步', desc: '...', color: 'text-red-400',    border: 'border-red-500/15',    bg: 'bg-red-500/5' },
  { step: '02', title: '第二步', desc: '...', color: 'text-yellow-400', border: 'border-yellow-500/15', bg: 'bg-yellow-500/5' },
  { step: '03', title: '第三步', desc: '...', color: 'text-green-400',  border: 'border-green-500/15',  bg: 'bg-green-500/5' },
].map(({ step, title, desc, color, border, bg }) => (
  <motion.div key={step}
    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className={`rounded-2xl p-6 border ${border} ${bg}`}
  >
    <div className={`text-sm font-mono font-medium mb-3 ${color}`}>{step}</div>
    <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
))}
```

---

## ➡️ Next Step 导引块

流程末尾的「下一步」提示，引导读者/用户关注后续动作。

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
  className="flex items-start gap-5 rounded-2xl border border-white/10
             bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-7"
>
  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/8 border border-white/15
                  flex items-center justify-center">
    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </div>
  <div>
    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Next step</p>
    <p className="text-white font-semibold text-base mb-1.5">步骤标题</p>
    <p className="text-gray-400 text-sm leading-relaxed">步骤描述...</p>
  </div>
</motion.div>
```

---

## 🏗️ 层级架构图

展示多层依赖关系（如组件树、系统架构），私有层用红色标注。

```tsx
<div className="bg-gradient-to-br from-white/[0.06] to-white/[0.01] rounded-2xl p-7 border border-white/10">
  <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">Architecture</p>
  <div className="space-y-2">
    {layers.map((layer, i) => (
      <div key={layer.name}>
        <div className={`rounded-xl px-5 py-4 border
          ${layer.isPrivate ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5'}`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 uppercase tracking-wider w-20">{layer.label}</span>
              <span className={`font-mono text-base font-semibold ${layer.isPrivate ? 'text-red-300' : 'text-white'}`}>
                {layer.name}
              </span>
            </div>
            {layer.isPrivate && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                PRIVATE · BLOCKED
              </span>
            )}
          </div>
          <p className="text-gray-300 text-base ml-[92px]">{layer.detail}</p>
        </div>
        {i < layers.length - 1 && (
          <div className="flex items-center gap-2 my-2 ml-[100px]">
            <div className="w-px h-5 bg-white/20" />
            <span className="text-xs text-gray-400">uses / wraps</span>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
```

---

## 📊 结果突出数字

强调核心量化成果，大字 + 渐变色。

```tsx
<div className="mb-8">
  <p className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
    Generated pages achieve over{' '}
    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      90% accurate
    </span>{' '}
    restoration
  </p>
  <p className="text-gray-400 text-lg leading-relaxed">补充说明...</p>
</div>
```

---

## 📁 代码文件树

用纯文本模拟文件树结构，深色背景 + 等宽字体。

```tsx
<div className="bg-black/40 rounded-2xl p-6 border border-white/10 font-mono text-base">
  <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">File structure</p>
  <div className="space-y-1.5 text-gray-300">
    <div className="text-blue-400">.directory/path/</div>
    <div className="pl-4 text-gray-400">
      ├── <span className="text-white">main-file.md</span>
      <span className="text-gray-500 text-sm ml-2">— description</span>
    </div>
    <div className="pl-4 text-gray-400">├── <span className="text-white">README.md</span></div>
    <div className="pl-4 text-gray-400">└── subfolder/</div>
    <div className="pl-8 text-gray-400">└── <span className="text-gray-200">file.md</span></div>
  </div>
</div>
```

---

## 🔷 横向流程图（Input → Process → Output）

适合展示 AI 工作流、生产流程、数据管道。

```tsx
<div className="flex flex-col md:flex-row items-stretch gap-4">
  {/* 输入 */}
  <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3">
    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* icon path */}
      </svg>
    </div>
    <span className="text-sm text-gray-300 uppercase tracking-wider">Input</span>
  </div>

  <div className="flex items-center justify-center text-gray-400 text-xl flex-shrink-0">→</div>

  {/* 处理内容区 */}
  <div className="flex-1 space-y-3">
    <div className="bg-black/30 rounded-xl px-4 py-3 border border-white/10 text-center">
      <code className="text-base text-white font-mono">process.md</code>
    </div>
    {/* 错误/信息列表 */}
    <div className="bg-red-950/30 rounded-xl p-4 border border-red-500/20">
      <div className="text-sm text-red-400 font-medium mb-2 uppercase tracking-wider">Issues</div>
      <div className="space-y-2 text-base text-gray-200">
        <div className="flex items-start gap-2">
          <span className="text-red-400 mt-0.5">•</span>
          <span>问题项</span>
        </div>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center text-gray-400 text-xl flex-shrink-0">→</div>

  {/* 输出 */}
  <div className="flex-shrink-0 flex flex-col items-center justify-center text-center gap-3">
    <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <span className="text-sm text-gray-300 uppercase tracking-wider">Output</span>
  </div>
</div>

{/* 底部说明（蓝色左边框）*/}
<div className="pt-8 border-t border-white/5 flex items-start gap-3">
  <div className="w-0.5 self-stretch bg-blue-500/30 rounded-full flex-shrink-0" />
  <p className="text-gray-300 text-base leading-relaxed">补充说明...</p>
</div>
```

---

## ✅ 适用场景速查

| 模式 | 适用场景 |
|------|----------|
| 组件图片卡 | 展示多个 UI 组件截图，大小不一时 |
| Lightbox 缩放拖拽 | 需要查看细节的图片（线框图、界面截图） |
| 图片轮播 | 多张成果/演示截图 |
| 语义色块 | 对比问题与解决方案 |
| 阶段时间线（边框线） | 有明确 Stage 划分的工作流叙述 |
| Before/After 对比 | 展示量化或状态对比 |
| 渐进式步骤卡 | 迭代优化流程（红→黄→绿递进） |
| Next Step 导引块 | 流程章节末尾引导下一步 |
| 层级架构图 | 系统/组件层级依赖关系 |
| 结果突出数字 | 强调核心量化成果 |
| 代码文件树 | 展示文件/目录结构 |
| 横向流程图 | AI 工作流、生产流程可视化 |

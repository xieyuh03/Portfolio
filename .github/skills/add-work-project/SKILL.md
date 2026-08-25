---
name: add-work-project
description: 为实际工作或客户项目整理 UX 流程、商业价值与协作成果，生成作品集卡片和可选的完整 Case Study 页面。
---

# Add Work Project

你现在要执行 "添加工作项目" 任务。目标：在作品集中添加一个新的工作项目 Case Study，包含 Work 页面卡片和专属详情页。

---

## 任务目标

根据用户提供的截图和内容，**完全按照截图实现**，不自行生成内容。整个流程分两部分：
1. **Work 卡片** — 添加到 `/app/projects/page.tsx`
2. **详情页** — 创建 `/app/projects/[project-slug]/page.tsx`

---

## 阶段 0：收集基础信息

首先询问用户：

1. **项目 slug**（URL 路径名）：例如 `bank-reconciliation`
2. **封面图**：放在 `/public/images/` 里，提供文件名
3. **项目素材图**：放在 `/public/images/[project-slug]/` 里
4. **是否需要详情页**：仅卡片？还是完整 Case Study？

---

## 阶段 1：添加 Work 卡片

### 1.1 项目数组格式

编辑 `/app/projects/page.tsx`，在 `projects` 数组顶部插入新条目：

```typescript
{
  id: 10,                              // 新 id（接着已有最大 id）
  title: 'Project Name',
  description: {
    en: 'One or two sentences. [Problem] + [Solution] + [Outcome].',
    zh: '一到两句话概括问题背景、解决方案与关键成果。',
  },
  tags: [
    { en: 'UX Design', zh: 'UX 设计' },
    { en: 'Enterprise', zh: '企业级' },
    { en: 'Figma', zh: 'Figma' },
  ],
  year: '2026',
  image: `${basePath}/images/Frontimage.png`,
},
```

### 1.2 注册路由

在同文件的 `<Link href={...}>` 条件中添加新项目的路由：

```tsx
href={
  project.id === 10 ? '/projects/new-project-slug' :
  project.id === 9 ? '/projects/ai-native-design-framework' :
  project.id === 8 ? '/projects/mads-ui-simplified' :
  /* preserve the existing route branches */
  '/projects/planetary-orbit'
}
```

---

## 阶段 2：创建详情页

### 2.1 文件位置

```
/app/projects/[project-slug]/page.tsx
```

### 2.2 页面模板 — 固定头部

```typescript
'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

// Base path injected at build time for subpath deployments such as GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Animation
const fadeUp  = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const vp      = { once: true, margin: '-60px' } as const;
const ease    = { duration: 0.5, ease: 'easeOut' as const };

export default function NewProjectPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="min-h-screen bg-white pt-24">

        {/* Back Link */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-6 md:mb-8">
          <Link href="/projects" className="inline-flex items-center text-xs md:text-sm lg:text-base text-gray-500 hover:text-gray-700">
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projects
          </Link>
        </div>

        {/* ... sections below ... */}

        {/* Footer Nav */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="pt-8 border-t border-gray-200">
            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600">
              ← Back to all projects
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
```

---

## 阶段 3：标准 Section 速查

### 容器规则（最重要）

| 用途 | 类名 |
|------|------|
| 宽容器（Hero、大图） | `max-w-[90vw] 2xl:max-w-[2000px] mx-auto px-6 md:px-8 lg:px-12` |
| 窄容器（文字阅读） | `max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12` |
| 全宽灰色分隔带 | `w-full bg-gray-50 py-12 md:py-16 lg:py-20` |

Section 交替规则：**white → gray strip → white → gray strip...**

---

### Section A — Hero（宽容器）

```tsx
<div className="max-w-[90vw] 2xl:max-w-[2000px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
    {/* Left: Title + Tagline + Product Logo */}
    <motion.div variants={stagger} initial="hidden" animate="visible">
      <motion.h1 variants={fadeUp} transition={ease}
        className="text-[28px] md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
        Project Title
      </motion.h1>
      <motion.p variants={fadeUp} transition={{ ...ease, delay: 0.1 }}
        className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
        Tagline or brief description.
      </motion.p>
      <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
        <img src={`${basePath}/images/[slug]/logo.png`} alt="Product Logo" className="h-14 md:h-16 w-auto" />
      </motion.div>
    </motion.div>
    {/* Right: 1-2 stacked screenshots */}
    <div className="space-y-4">
      {['title image 01', 'title image 02'].map((name, i) => (
        <motion.div key={name} initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.15 + i * 0.13 }}
          className="rounded-lg overflow-hidden shadow-xl">
          <img src={`${basePath}/images/[slug]/${name}.png`} alt={name} className="w-full h-auto" />
        </motion.div>
      ))}
    </div>
  </div>
</div>
```

---

### Section B — Meta Strip（全宽灰色 + 窄容器）

```tsx
<div className="w-full bg-gray-50 py-8 md:py-10 lg:py-12">
  <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:gap-10 lg:gap-12">
      {/* Left: Meta cards */}
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="space-y-8">
        {[
          { icon: '📍', title: 'Product Area', content: <>Product Name<br />Category</> },
          { icon: '👤', title: 'Role',         content: <>UI/UX design<br />User research</> },
          { icon: '💻', title: 'Team',         content: <>PM x 1<br />Designer x 1<br />Engineers ~5</> },
          { icon: '📅', title: 'Timeline',     content: <>2023.4 - 2024.6</> },
        ].map(({ icon, title, content }) => (
          <motion.div key={title} variants={fadeUp} transition={ease}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg md:text-xl lg:text-2xl">{icon}</span>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-700">{title}</h3>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed pl-6 md:pl-7 lg:pl-8">{content}</p>
          </motion.div>
        ))}
      </motion.div>
      {/* Right: Results / Personal Contribution / User Feedback */}
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="space-y-8">
        {[{ title: 'Results', body: <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">...</p> }]
          .map(({ title, body }) => (
          <motion.div key={title} variants={fadeUp} transition={ease}>
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-gray-700 mb-3">{title}</h3>
            {body}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</div>
```

---

### Section C — Design Showcase（全宽灰色，3列图）

```tsx
<motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
  className="w-full px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-gray-50">
  <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {['image showcase 01', 'image showcase 02', 'image showcase 03'].map((name, i) => (
      <motion.div key={name} variants={fadeUp} transition={{ ...ease, delay: i * 0.1 }}
        className="rounded-lg overflow-hidden shadow-xl">
        <img src={`${basePath}/images/[slug]/${name}.png`} alt={name} className="w-full h-auto" />
      </motion.div>
    ))}
  </div>
</motion.div>
```

---

### Section D — H2 Section Header（白底，窄容器）

用于 "Project Overview"、"Bank statement design"、"Worksheet design"、"Usability testing"、"Growth" 等章节开头：

```tsx
<div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
  <div className="border-t border-gray-200 pt-12 md:pt-16 lg:pt-20 mb-12">
    <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={ease}
      className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12">
      Section Title
    </motion.h2>
    {/* content... */}
  </div>
</div>
```

---

### Section E — H3 子标题（带蓝色横线）

```tsx
<motion.h3 variants={fadeUp} transition={ease}
  className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700
             before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5
             mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
  Sub-section Title
</motion.h3>
```

---

### Section F — 蓝色竖线段落

用于引言、概述性文字：

```tsx
<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={ease}
  className="flex gap-4 py-4">
  <div className="w-[6px] rounded-full bg-[#077FAB] flex-shrink-0"></div>
  <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
    Introduction paragraph text...
  </p>
</motion.div>
```

---

### Section G — Persona（带 Fluent Emoji 圆形头像）

```tsx
<div className="space-y-6 pl-8 md:pl-12 lg:pl-16">
  {[
    { img: 'woman-technologist', alt: 'Treasurer', name: 'Treasurer (Primary)', items: ['...', '...'] },
    { img: 'woman-office-worker', alt: 'Manager',  name: 'Finance Manager',     items: ['...'] },
  ].map(({ img, alt, name, items }, i) => (
    <motion.div key={name} variants={fadeUp} transition={{ ...ease, delay: i * 0.12 }} className="flex gap-6">
      <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
        <img src={`${basePath}/emojis/${img}.png`} alt={alt} className="w-16 h-16" />
      </div>
      <div className="flex-1">
        <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-1.5">{name}</h4>
        <ul className="space-y-1.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5">
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      </div>
    </motion.div>
  ))}
</div>
```

**Emoji 尺寸规范：**
- Persona：容器 `w-28 h-28 shadow-lg`，emoji `w-16 h-16`
- Key findings 引用：容器 `w-20 h-20 shadow-md`，emoji `w-12 h-12`

---

### Section H — 2列对称内容（Goals / Source）

```tsx
<div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1px_1fr] gap-x-8 gap-y-6">
  <motion.div variants={fadeUp} transition={ease}>
    <h3 className="[H3 classes above]">Label</h3>
  </motion.div>
  <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
    <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-3">
      <span className="text-cyan-600">Keyword</span> rest of heading.
    </h4>
    <ul className="space-y-1.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5">
      <li>...</li>
    </ul>
  </motion.div>
  <div className="hidden md:block bg-gray-200 rounded-full" /> {/* 竖线分隔 */}
  <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
    {/* right column */}
  </motion.div>
</div>
```

---

### Section I — 设计对比（原始 vs 新设计）

```tsx
<div className="space-y-8">
  {[
    { label: 'Original design', file: 'original design cropped' },
    { label: 'New design',      file: 'new design cropped' },
  ].map(({ label, file }, i) => (
    <motion.div key={label} variants={fadeUp} transition={{ ...ease, delay: i * 0.15 }}>
      <h3 className="[H3 classes]">{label}</h3>
      <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
        <img src={`${basePath}/images/[slug]/${file}.png`} alt={label} className="w-full h-auto" />
      </div>
    </motion.div>
  ))}
</div>
```

---

### Section J — 图文交替（Interaction Logic）

```tsx
{[
  { title: '...', items: ['...'], img: 'relationship between', imgAlt: '...', reversed: false },
  { title: '...', items: ['...'], img: 'status inherit',       imgAlt: '...', reversed: true  },
].map(({ title, items, img, imgAlt, reversed }) => (
  <motion.div key={title} variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-10">
    <div className={reversed ? 'order-2' : 'order-1'}>
      <motion.h4 variants={fadeUp} transition={ease} className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-3">{title}</motion.h4>
      <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.1 }}
        className="space-y-2 text-sm md:text-base lg:text-lg text-gray-700 font-medium list-disc pl-4 md:pl-5">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </motion.ul>
    </div>
    <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}
      className={`flex justify-center ${reversed ? 'order-1' : 'order-2'}`}>
      <img src={`${basePath}/images/[slug]/${img}.png`} alt={imgAlt} className="w-full h-auto rounded-lg" />
    </motion.div>
  </motion.div>
))}
```

---

### Section K — 设计探索（N 宫格图片）

```tsx
<motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
  {[1,2,3,4,5,6].map((n) => (
    <motion.div key={n} variants={fadeUp} transition={{ ...ease, delay: ((n-1) % 3) * 0.1 }}
      className="rounded-lg overflow-hidden shadow-xl">
      <img src={`${basePath}/images/[slug]/explorations/${n}.png`} alt={`Design ${n}`} className="w-full h-auto" />
    </motion.div>
  ))}
</motion.div>
```

---

### Section L — Flowchart 横向滚动

```tsx
<div className="w-full mb-12 bg-gray-50 py-12 md:py-16 lg:py-20">
  <div className="max-w-5xl ... mx-auto px-6 ... mb-8">
    <h2 className="[H2 classes]">Flowchart</h2>
    {/* Blue bar intro */}
  </div>
  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
    transition={{ ...ease, delay: 0.15 }}
    className="overflow-x-auto scrollbar-hide px-6 md:px-8 lg:px-12 pt-4 pb-10">
    <div className="flex gap-6 pb-2">
      {[
        { file: 'Flow-original',  label: 'Flow Original Design' },
        { file: 'flow-version01', label: 'Flow Design Version 1' },
        { file: 'flow-version02', label: 'Flow Design Version 2' },
        { file: 'Flow-final',     label: 'Flow Final Design' },
      ].map(({ file, label }) => (
        <div key={file} className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] rounded-2xl overflow-hidden shadow-xl bg-white">
          <img src={`${basePath}/images/[slug]/${file}.png`} alt={label} className="w-full h-auto" />
        </div>
      ))}
    </div>
  </motion.div>
</div>
```

---

### Section M — User Quotes（带 Emoji 圆形头像）

```tsx
{/* Single centered quote */}
<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={ease}
  className="flex gap-4 mb-8">
  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
    <img src={`${basePath}/emojis/man-office-worker.png`} alt="User" className="w-12 h-12" />
  </div>
  <div className="flex-1 bg-gray-50 p-4 rounded-lg">
    <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed">"..."</p>
  </div>
</motion.div>

{/* 2-column quotes grid */}
<motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
  className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[{ quote: '"..."', attr: '-- Title / Role', emoji: 'woman-office-worker' }].map(({ quote, attr, emoji }, i) => (
    <motion.div key={i} variants={fadeUp} transition={{ ...ease, delay: i * 0.12 }} className="flex gap-4">
      <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
        <img src={`${basePath}/emojis/${emoji}.png`} alt="User" className="w-12 h-12" />
      </div>
      <div className="flex-1">
        <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed mb-2">{quote}</p>
        <p className="text-sm md:text-base lg:text-lg text-gray-900 font-semibold">{attr}</p>
      </div>
    </motion.div>
  ))}
</motion.div>
```

---

### Section N — Product Impact 时间轴（错位布局）

```tsx
<div className="space-y-6 md:space-y-7 lg:space-y-8 mb-12 pl-16 md:pl-20 lg:pl-24">
  {[
    { month: 'March', year: '2024', ml: '',                         text: <>...</> },
    { month: 'April', year: '2024', ml: 'ml-28 md:ml-36 lg:ml-44', text: <>...</> },
    { month: 'May',   year: '2024', ml: 'ml-7 md:ml-[36px]',       text: <>...</> },
  ].map(({ month, year, ml, text }, i) => (
    <motion.div key={month} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={vp} transition={{ ...ease, delay: i * 0.15 }}
      className={`flex items-center gap-8 max-w-3xl lg:max-w-4xl ${ml}`}>
      <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center"
           style={{ boxShadow: '0 0 24px 8px rgba(0,0,0,0.08)' }}>
        <div className="text-center">
          <div className="font-bold text-sm md:text-base lg:text-lg text-gray-800">{month}</div>
          <div className="font-bold text-sm md:text-base lg:text-lg text-gray-800">{year}</div>
        </div>
      </div>
      <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">{text}</p>
    </motion.div>
  ))}
</div>
```

---

### Section O — Growth 编号列表

```tsx
<div className="space-y-8 md:space-y-10 lg:space-y-12">
  {[
    { num: '1', title: 'Title:', text: '...' },
    { num: '2', title: 'Title:', text: '...' },
    { num: '3', title: 'Title:', text: '...' },
  ].map(({ num, title, text }, i) => (
    <motion.div key={num} variants={fadeUp} initial="hidden" whileInView="visible"
      viewport={vp} transition={{ ...ease, delay: i * 0.12 }} className="flex gap-6">
      <div className="flex-shrink-0 text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-600">{num}</div>
      <div className="flex-1 pt-2">
        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-gray-700 mb-2">{title}</h3>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  ))}
</div>
```

---

## 阶段 4：素材文件结构

```
/public/images/[project-slug]/
  title image 01.png             # Hero 右侧图 1
  title image 02.png             # Hero 右侧图 2（可选）
  logo.png                       # 产品 logo（可选）
  image showcase 01.png          # Design Showcase 3列图
  image showcase 02.png
  image showcase 03.png
  original design cropped.png    # 原始设计截图
  new design cropped.png         # 新设计截图
  Business flow.png              # 业务流程图
  Team collaboration.png         # 团队协作图
  finding01.png                  # Usability testing 截图
  finding02.png
  relationship between.png       # Interaction Logic 图
  status inherit.png
  Flow-original.png              # Flowchart 横向滚动
  flow-version01.png
  flow-version02.png
  Flow-final.png
  /unmatched transaction/
    1.png  2.png  3.png  4.png  5.png  6.png
  /pending transaction/
    2.1.png  2.2.png  2.3.png  ...
```

**封面图** 直接放在 `/public/images/`（不在子目录），例如：
```
/public/images/Frontimage.png
```

---

## 阶段 5：导航样式说明

详情页路径 `/projects/[slug]` 会自动使用**浅色玻璃导航**（深色文字）。

逻辑在 `/components/Navigation.tsx`：
```typescript
const isLightBg = pathname.startsWith('/projects/');
// → bg-white/70, 深色文字（适合白色背景的详情页）
// Work 列表页 /projects 不带尾斜杠，不受影响，保持深色玻璃导航
```

---

## 阶段 6：字体规范快查

所有字号必须响应式，**禁止固定值**。

| 层级 | 用途 | Tailwind 类名 |
|------|------|--------------|
| **h1** | 页面主标题 | `text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900` |
| **h2** | Section 标题 | `text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800` |
| **特殊强调** | 重点段落（比 h2 小、比 h3 大） | `text-lg md:text-xl lg:text-2xl 2xl:text-[28px] font-bold text-gray-700` |
| **h3** | 子标题（配蓝色装饰条） | `text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700` |
| **内容标题** | semibold label | `text-sm md:text-base lg:text-lg font-semibold text-gray-800` |
| **正文** | 描述文字 | `text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed` |
| **标签** | 图片/卡片标签，比正文小一级 | `text-xs md:text-sm lg:text-base` |
| **大数字** | 统计强调 | `text-6xl md:text-7xl lg:text-8xl font-bold text-[#077FAB]` |

**颜色规律：**
- `text-gray-800` — h2、最重要内容
- `text-gray-700` — h3、加粗段落
- `text-gray-600` — 正文描述
- `text-gray-500` — 辅助说明
- `text-[#077FAB]` — 品牌强调色（数字、装饰条）

---

## 阶段 7：常见问题和坑

| 问题 | 解决方案 |
|------|---------|
| 详情页右侧/底部黑边 | 外层 div 加 `bg-white min-h-screen overflow-x-hidden`，检查 `globals.css` scrollbar track 是否为 `transparent` |
| Bullet point 换行不对齐 | 用 `list-disc pl-5`，不用 `list-inside` |
| 图片在 GitHub Pages 404 | 详情页用 `<img src={\`${basePath}/...\`}>`，不用 Next.js `<Image>`；Work 卡片页的 `<Image fill>` 自动处理 |
| emoji 图标太大 / 太小 | Persona: 容器 `w-28 h-28`，emoji `w-16 h-16`；Quote: 容器 `w-20 h-20 shadow-md`，emoji `w-12 h-12` |
| 颜色只想给关键词上色 | 用 `<span className="text-cyan-600">keyword</span>` 包裹，不给整个标题上色 |

---

## 快速清单

开始执行时，先完成以下确认：

- [ ] 收到项目 slug
- [ ] 确认封面图文件名和路径
- [ ] 确认素材图都已放入 `/public/images/[slug]/`
- [ ] 逐截图实现，不自行生成内容
- [ ] 添加 Work 卡片到 `projects` 数组
- [ ] 注册路由在 Link href 条件中
- [ ] 详情页外层 div 有 `min-h-screen overflow-x-hidden`
- [ ] 测试本地效果后提交

**核心原则：永远等用户提供截图，一个截图实现一个部分，不提前猜测内容。**

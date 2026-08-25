# 布局模式速查

快速参考：各种页面布局模式的代码片段和使用场景。

---

## 📐 页面结构模板

### 基础结构

```tsx
export default function ProjectPage() {
  return (
    <>
      <FluidBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* 返回按钮 */}
          <BackButton />

          {/* 章节们 */}
          <HeroSection />
          <OverviewSection />
          <ProcessSection />
          {/* ... */}
        </div>
      </main>
    </>
  );
}
```

---

## 🎯 Hero 区域变体

### 变体 1：简洁型

```tsx
<section className="mb-32">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* 小标签 */}
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
      <span className="text-sm uppercase tracking-wider text-gray-400">
        Category
      </span>
    </div>

    {/* 大标题 */}
    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
      Project Title
    </h1>

    {/* 副标题 */}
    <p className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
      项目副标题或简短介绍
    </p>

    {/* Meta 信息 */}
    <div className="flex flex-wrap gap-12 text-sm">
      <div>
        <div className="text-gray-500 mb-2 text-xs uppercase">Year</div>
        <div className="text-white text-lg">2026</div>
      </div>
      {/* 更多 meta */}
    </div>
  </motion.div>
</section>
```

### 变体 2：渐变标题

```tsx
<h1 className="text-6xl md:text-8xl font-bold mb-8">
  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400
                   bg-clip-text text-transparent">
    Project Title
  </span>
</h1>
```

### 变体 3：带视差效果

```tsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"]
});

const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

<motion.div style={{ opacity, scale }}>
  {/* Hero 内容 */}
</motion.div>
```

---

## 📄 章节布局变体

### 布局 A：侧边栏式（推荐用于长内容）

```tsx
<section className="mb-40">
  <div className="grid md:grid-cols-12 gap-12">
    {/* 左侧：标题 + 说明（可 sticky）*/}
    <div className="md:col-span-4 md:sticky md:top-32 self-start">
      <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
        Section Title
      </h2>
      <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
      <p className="text-gray-400 text-sm leading-relaxed">
        章节说明文字
      </p>
    </div>

    {/* 右侧：主要内容 */}
    <div className="md:col-span-8">
      <p className="text-2xl text-gray-300 leading-relaxed mb-8">
        主要内容段落...
      </p>
      {/* 更多内容 */}
    </div>
  </div>
</section>
```

**适用场景**：
- 设计过程
- 技术实现
- 详细分析

---

### 布局 B：居中标题 + 网格内容

```tsx
<section className="mb-40">
  {/* 居中标题 */}
  <div className="mb-16 text-center">
    <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
      Section Title
    </h2>
    <div className="h-px w-12 bg-gradient-to-r from-transparent
                    via-white/50 to-transparent mx-auto mb-8" />
    <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
      简短介绍
    </p>
  </div>

  {/* 网格内容 */}
  <div className="grid md:grid-cols-2 gap-6">
    {items.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </div>
</section>
```

**适用场景**：
- 核心亮点
- 功能展示
- 对比分析

---

### 布局 C：侧边栏 + 长文引言（适合概述/反思）

```tsx
<section className="mb-40">
  <div className="grid md:grid-cols-12 gap-12">
    <div className="md:col-span-4 md:sticky md:top-32 self-start">
      <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Overview</h2>
      <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
    </div>
    <div className="md:col-span-8">
      {/* 大引言段落 */}
      <p className="text-2xl text-gray-300 leading-relaxed mb-8">
        核心概念说明，可用{' '}
        <span className="text-white font-medium">关键词高亮</span>
        {' '}强调重点。
      </p>
      {/* 次要段落 */}
      <p className="text-xl text-gray-400 leading-relaxed">
        补充说明...
      </p>
    </div>
  </div>
</section>
```

**适用场景**：
- 项目概述（Goal/Overview）
- 收获反思
- 背景说明

---

### 布局 D：时间线式

```tsx
<section className="mb-40">
  <div className="grid md:grid-cols-12 gap-12">
    {/* 左侧标题（sticky）*/}
    <div className="md:col-span-4 md:sticky md:top-32 self-start">
      {/* 标题内容 */}
    </div>

    {/* 右侧时间线 */}
    <div className="md:col-span-8 space-y-16">
      {phases.map((phase, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* 时间线圆点 */}
          <div className="absolute -left-8 top-2 w-2 h-2 rounded-full
                          bg-gray-600 group-hover:bg-white group-hover:scale-150
                          transition-all" />

          {/* 内容 */}
          <div className="pl-8">
            <div className="text-xs text-gray-500 uppercase mb-2">
              Phase {i + 1}
            </div>
            <h3 className="text-2xl font-semibold mb-3">{phase.title}</h3>
            <p className="text-gray-400">{phase.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

**适用场景**：
- 设计过程
- 迭代历程
- 时间序列

---

### 布局 E：全宽沉浸式

```tsx
<section className="mb-40">
  <div className="relative">
    {/* 装饰性光晕 */}
    <div className="absolute inset-0 bg-gradient-to-r
                    from-blue-500/20 via-purple-500/20 to-pink-500/20
                    blur-3xl -z-10 opacity-50" />

    {/* 玻璃态容器 */}
    <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                    backdrop-blur-xl rounded-3xl p-12 md:p-20
                    border border-white/10 shadow-2xl">
      <div className="flex flex-col items-center">
        {/* 内容居中 */}
      </div>
    </div>
  </div>
</section>
```

**适用场景**：
- Live Demo
- 重要视觉元素
- 引用 / 金句

---

## 🎴 卡片组件变体

### 卡片 1：基础特征卡片

```tsx
<motion.div
  whileHover={{ y: -8 }}
  className="group bg-gradient-to-br from-white/[0.07] to-white/[0.02]
             backdrop-blur-sm rounded-2xl p-8 border border-white/10
             hover:border-white/20 transition-all cursor-default"
>
  {/* 图标 */}
  <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20
                  flex items-center justify-center mb-6 transition-colors">
    <Icon />
  </div>

  {/* 标题 */}
  <h3 className="text-xl font-semibold mb-3
                 group-hover:text-white transition-colors">
    Feature Title
  </h3>

  {/* 描述 */}
  <p className="text-gray-400 leading-relaxed">
    Feature description...
  </p>
</motion.div>
```

---

### 卡片 2：编号步骤卡片

```tsx
<div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                backdrop-blur-sm rounded-2xl p-8 border border-white/10">
  {/* 编号 + 标题 */}
  <div className="flex items-start gap-4 mb-4">
    <span className="text-3xl font-bold text-white/20">01</span>
    <h3 className="text-xl font-semibold">Step Title</h3>
  </div>

  {/* 代码块（可选）*/}
  <div className="bg-black/30 rounded-lg p-4 mb-4
                  font-mono text-sm text-gray-300">
    <pre><code>{code}</code></pre>
  </div>

  {/* 描述 */}
  <p className="text-gray-400 text-sm">Description...</p>
</div>
```

---

### 卡片 3：两栏对比卡片

```tsx
<div className="grid md:grid-cols-2 gap-8">
  {/* 左卡片 */}
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02]
               backdrop-blur-sm rounded-2xl p-8 border border-white/10"
  >
    <div className="w-12 h-12 rounded-xl bg-white/10
                    flex items-center justify-center mb-6">
      <Icon1 />
    </div>
    <h3 className="text-xl font-semibold mb-3">Before / Problem</h3>
    <p className="text-gray-400">...</p>
  </motion.div>

  {/* 右卡片 */}
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-gradient-to-br from-white/[0.07] to-white/[0.02]
               backdrop-blur-sm rounded-2xl p-8 border border-white/10"
  >
    <div className="w-12 h-12 rounded-xl bg-white/10
                    flex items-center justify-center mb-6">
      <Icon2 />
    </div>
    <h3 className="text-xl font-semibold mb-3">After / Solution</h3>
    <p className="text-gray-400">...</p>
  </motion.div>
</div>
```

---

### 卡片 4：色卡网格（适合配色展示）

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {colors.map((color, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-default"
    >
      {/* 色块 */}
      <div
        className="aspect-square rounded-2xl mb-3 border border-white/10
                   group-hover:border-white/30 transition-colors"
        style={{
          background: `linear-gradient(135deg, ${color.value} 0%,
                       rgba(0,0,0,0.3) 100%)`
        }}
      />

      {/* 名称 */}
      <div className="text-sm font-medium text-white">{color.name}</div>
      <div className="text-xs text-gray-500">{color.desc}</div>
    </motion.div>
  ))}
</div>
```

---

## 📝 文本样式

### 标题层级

```tsx
// H1 - Hero 大标题
<h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">

// 章节标签（section 顶部的小 label，所有章节统一用这个）
<h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
  Overview
</h2>
// 配合下方分隔线使用
<div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />

// 内容子标题（章节内部的大标题，如"配色哲学"）
<h3 className="text-2xl font-semibold mb-6">

// 卡片/条目标题
<h4 className="text-xl font-semibold mb-3">
// 或
<h4 className="text-lg font-semibold mb-2">
```

> ⚠️ **注意**：章节标题统一用小号 uppercase label 风格（`text-sm uppercase tracking-wider text-gray-500`），**不要用 `text-4xl font-bold`**。大号文字用于 Hero 标题或内容段落引言。

---

### 正文段落

```tsx
// 大段落（引言）
<p className="text-2xl text-gray-300 leading-relaxed mb-8">

// 标准段落
<p className="text-xl text-gray-400 leading-relaxed">

// 小段落（说明文字）
<p className="text-sm text-gray-400 leading-relaxed">

// 强调文字
<span className="text-white font-medium">重点内容</span>
```

---

### 列表

```tsx
// 带箭头的列表
<div className="space-y-2">
  <div className="flex items-start gap-2">
    <span className="text-white/40 mt-1">→</span>
    <span className="text-gray-400">列表项</span>
  </div>
</div>

// 带圆点的列表
<ul className="space-y-3 text-gray-400">
  <li className="flex items-start gap-2">
    <span className="text-blue-400 mt-1">•</span>
    <span>列表项</span>
  </li>
</ul>
```

---

## 🎨 装饰元素

### 分隔线变体

```tsx
// 标准左对齐
<div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />

// 居中渐变
<div className="h-px w-12 bg-gradient-to-r from-transparent
                via-white/50 to-transparent mx-auto" />

// 全宽淡色
<div className="h-px w-full bg-gradient-to-r from-transparent
                via-white/20 to-transparent" />

// 带动画展开
<motion.div
  className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ duration: 1.2 }}
  style={{ maxWidth: "200px" }}
/>
```

---

### 标签 / Badge

```tsx
// 基础标签
<span className="px-3 py-1 bg-white/10 rounded-full text-xs
               text-gray-500 border border-white/10">
  Tag
</span>

// 高亮标签
<span className="px-2 py-0.5 bg-white text-black rounded-full
               text-[10px] font-semibold">
  突破
</span>

// 内联代码
<code className="px-2 py-0.5 bg-white/10 rounded text-sm font-mono">
  code
</code>
```

---

### 引用 / 金句

```tsx
<p className="text-xl text-center italic text-gray-400">
  "引用文字"
  <span className="text-white font-medium">重点部分</span>
  "结尾"
</p>
```

---

## 🔧 常用工具函数

### 颜色透明度转换

```tsx
// Tailwind 透明度写法
from-white/[0.07]  // 7% 透明度
bg-white/10        // 10% 透明度
text-gray-400      // 预设灰色
```

---

### 响应式断点

```tsx
// 移动端优先
className="text-2xl md:text-4xl lg:text-6xl"

// 常用断点
sm: 640px   // 手机横屏
md: 768px   // 平板
lg: 1024px  // 桌面
xl: 1280px  // 大屏
```

---

### 间距系统

```tsx
// 推荐使用的间距
mb-2   // 8px  - 紧凑间距
mb-4   // 16px - 小间距
mb-6   // 24px - 卡片内元素
mb-8   // 32px - 段落间
mb-12  // 48px - 小节间
mb-16  // 64px - 中等章节间
mb-32  // 128px - 大章节间
mb-40  // 160px - 超大章节间
```

---

## 🎬 动画速查

```tsx
// 进入视口
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}

// Hover
whileHover={{ y: -4, scale: 1.05 }}

// 过渡时长
transition={{ duration: 0.6 }}      // 标准
transition={{ duration: 0.3 }}      // 快速
transition={{ duration: 1.2 }}      // 慢速

// 延迟
transition={{ delay: 0.2 }}         // 固定延迟
transition={{ delay: i * 0.1 }}     // 渐进延迟
```

---

## 💡 使用建议

1. **从简单开始**：先用基础布局，再添加细节
2. **保持一致**：同一页面内使用相似的模式
3. **适度动画**：不是每个元素都要动
4. **测试响应式**：确保移动端体验良好
5. **灵活组合**：这些是积木，不是固定套路

---

**记住**：这些是工具，不是束缚。根据内容选择最合适的布局方式。

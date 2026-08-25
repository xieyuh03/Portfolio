# 项目详情页设计指南

为 Vibe Coding 项目创建优雅、生动的 Case Study 页面的设计原则和风格指南。

---

## 🎨 核心设计原则

### 1. 克制而优雅

**理念**：少即是多，留白也是设计的一部分

- ✅ 统一的配色方案（以白色/灰色渐变为主）
- ✅ 精简的视觉元素（不过度装饰）
- ✅ 微妙的背景效果（光晕、渐变、模糊）
- ❌ 避免过多颜色（标题不要用五颜六色）
- ❌ 避免过度动画（每个动画都要有意义）

**配色建议**：
```
主色调：白色 (#FFFFFF) → 灰色 (#9CA3AF) 渐变
背景：透明 + 模糊 (white/[0.07] + backdrop-blur)
点缀：单一色系的渐变光晕（如紫蓝渐变）
文字：白色 (标题) / 灰色 300-500 (正文)
```

---

### 2. 层次与呼吸感

**理念**：内容需要空间，视觉需要节奏

- 章节间距：`mb-32` 或 `mb-40`（128-160px）
- 段落间距：`mb-8` 或 `mb-12`（32-48px）
- 卡片内边距：`p-8` 或 `p-12`（32-48px）
- 使用网格系统：12 列布局，灵活分配

**典型布局**：
```
md:grid-cols-12
├── 侧边栏：md:col-span-4（标题、说明）
└── 内容区：md:col-span-8（主要内容）
```

---

### 3. 微交互增强体验

**理念**：交互要微妙但有反馈

**推荐微动效**：
- Hover 上浮：`whileHover={{ y: -4 }}`
- 卡片放大：`whileHover={{ scale: 1.05 }}`
- 图标旋转/移动：`group-hover:translate-x-1`
- 渐入动画：`initial={{ opacity: 0, y: 30 }}`
- 滚动触发：`whileInView={{ opacity: 1, y: 0 }}`

**交互参数**：
```typescript
// 标准过渡
transition={{ duration: 0.6 }}

// 弹性过渡
transition={{ type: "spring", stiffness: 100 }}

// 延迟叠加
transition={{ delay: index * 0.1 }}
```

---

### 4. 内容为王

**理念**：设计服务于内容，不喧宾夺主

- 字体层级清晰（h1 > h2 > h3 > p）
- 行高舒适（`leading-relaxed` = 1.625）
- 段落宽度控制（`max-w-3xl` 避免过宽）
- 代码块突出（深色背景 + 等宽字体）

---

## 📐 布局模式库

### 模式 1：侧边栏 + 内容区

适用于：章节标题 + 详细说明

```tsx
<section className="mb-40">
  <div className="grid md:grid-cols-12 gap-12">
    {/* 侧边栏 */}
    <div className="md:col-span-4 md:sticky md:top-32">
      <h2 className="text-sm uppercase tracking-wider text-gray-500">
        Section Title
      </h2>
      <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent my-4" />
      <p className="text-gray-400 text-sm">简短说明</p>
    </div>

    {/* 内容区 */}
    <div className="md:col-span-8">
      {/* 主要内容 */}
    </div>
  </div>
</section>
```

**特点**：
- 侧边栏可 sticky 固定
- 内容区独立滚动
- 适合长内容章节

---

### 模式 2：居中式大标题 + 卡片网格

适用于：核心亮点、功能展示

```tsx
<section className="mb-40">
  {/* 居中标题 */}
  <div className="mb-16 text-center">
    <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
      Section Title
    </h2>
    <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8" />
    <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
      简短介绍
    </p>
  </div>

  {/* 卡片网格 */}
  <div className="grid md:grid-cols-2 gap-6">
    {items.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </div>
</section>
```

**特点**：
- 视觉焦点集中
- 适合并列展示
- 卡片间距均匀

---

### 模式 3：时间线式流程

适用于：设计过程、迭代历程

```tsx
<section className="mb-40">
  <div className="space-y-16">
    {phases.map((phase, i) => (
      <div key={i} className="relative group">
        {/* 时间线圆点 */}
        <div className="absolute -left-8 top-2 w-2 h-2 rounded-full
                        bg-gray-600 group-hover:bg-white transition-all" />

        {/* 内容 */}
        <div className="pl-8">
          <div className="text-xs text-gray-500 uppercase mb-2">
            Phase {i + 1}
          </div>
          <h3 className="text-2xl font-semibold mb-3">{phase.title}</h3>
          <p className="text-gray-400">{phase.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
```

**特点**：
- 线性叙事
- Hover 反馈
- 适合过程展示

---

### 模式 4：全宽沉浸式展示

适用于：Live Demo、重要视觉元素

```tsx
<section className="mb-40">
  <div className="relative">
    {/* 装饰性光晕 */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20
                    via-purple-500/20 to-pink-500/20 blur-3xl -z-10 opacity-50" />

    {/* 主容器 */}
    <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                    backdrop-blur-xl rounded-3xl p-12 md:p-20
                    border border-white/10 shadow-2xl">
      {/* 内容 */}
    </div>
  </div>
</section>
```

**特点**：
- 视觉冲击力强
- 适合重点内容
- 背景光晕增强氛围

---

## 🎭 动画效果库

### 1. 滚动视差（Hero 区域）

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

**效果**：向下滚动时，Hero 渐隐并缩小

---

### 2. 进入视口动画

```tsx
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  {/* 章节内容 */}
</motion.section>
```

**参数说明**：
- `once: true` - 只触发一次
- `margin: "-100px"` - 提前 100px 触发
- `duration: 0.8` - 0.8 秒过渡

---

### 3. 分层延迟（Stagger）

```tsx
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
  >
    {/* 卡片内容 */}
  </motion.div>
))}
```

**效果**：卡片依次出现，间隔 0.1 秒

---

### 4. Hover 交互

```tsx
<motion.div
  whileHover={{ y: -4 }}
  transition={{ duration: 0.3 }}
  className="cursor-default"
>
  {/* 卡片 */}
</motion.div>
```

**常见变体**：
- 上浮：`y: -4` 或 `y: -8`
- 放大：`scale: 1.05`
- 旋转：`rotate: 2`
- 倾斜：`rotateX: 5`

---

### 5. 渐变分隔线展开

```tsx
<motion.div
  className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ duration: 1.2, delay: 0.3 }}
  style={{ maxWidth: "200px" }}
/>
```

---

## 🧩 可复用组件片段

### 章节标题组件

```tsx
function SectionHeader({
  label,
  description
}: {
  label: string;
  description?: string;
}) {
  return (
    <div className="md:col-span-4 md:sticky md:top-32 self-start">
      <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
        {label}
      </h2>
      <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent mb-8" />
      {description && (
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
```

---

### 特征卡片组件

```tsx
function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                 backdrop-blur-sm rounded-2xl p-8 border border-white/10
                 hover:border-white/20 transition-all cursor-default"
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20
                      flex items-center justify-center mb-6 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
```

---

### 代码块组件

```tsx
function CodeBlock({
  code,
  language = "typescript"
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
      <pre><code>{code}</code></pre>
    </div>
  );
}
```

---

## 📝 内容结构建议

### 章节组合：动效 / 视觉探索类

```
1. Hero（必需）：大标题 + 副标题 + Meta 信息
2. Live Demo / 主视觉（强烈推荐）：实时组件或截图
3. Overview（必需）：背景和动机
4. Challenge（可选）：设计挑战与目标
5. Process（推荐）：迭代历程、关键转折
6. Visual Language / Implementation（灵活）：
   根据项目特点选择深度分析方向
7. Key Features（必需）：2-4 个核心亮点，网格展示
8. Reflection（推荐）：个人成长、设计哲学
9. Footer 导航（必需）：返回列表
```

### 章节组合：工具 / 工作流项目类（如 AI Agent、设计工具）

```
1. Hero（必需）：标题 + 金句副标题 + Meta + 全宽截图
2. Goal（必需）：核心目标，1-2 段大字引言
3. Outcomes（推荐）：成果卡片（可点击 Lightbox 展开）
4. Approaches / Process（必需）：
   方案对比 or 阶段时间线（边框线版）
5. Why / Background（可选）：
   架构图、约束分析（语义色块）
6. Core Deliverable（必需）：
   组件库 / 技术实现 / 系统结构（文件树）
7. Workflow（推荐）：AI 流程图、迭代步骤卡
8. Result（必需）：成果轮播 + 突出数字
9. Footer 导航（必需）：返回列表
```

> **原则**：根据项目的故事逻辑选择合适的结构，不要套用模板。两种类型可以混用章节。

---

## 🎨 视觉元素指南

### 图标使用

**推荐图标库**：
- Heroicons（已内置在示例中）
- 使用 SVG 路径
- 保持线条风格一致（strokeWidth: 1.5-2）

**图标尺寸**：
- 小图标：`w-4 h-4`（16px）
- 标准图标：`w-6 h-6`（24px）
- 大图标：`w-8 h-8`（32px）

---

### 装饰元素

**分隔线**：
```tsx
// 标准分隔线
<div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />

// 居中分隔线
<div className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />

// 全宽分隔线
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
```

**光晕效果**：
```tsx
<div className="absolute inset-0 bg-gradient-to-r
                from-blue-500/20 via-purple-500/20 to-pink-500/20
                blur-3xl -z-10 opacity-50" />
```

**玻璃态卡片**：
```tsx
<div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                backdrop-blur-sm rounded-2xl p-8
                border border-white/10" />
```

---

## 🚀 实施建议

### 每个项目应该：

1. **保留核心原则**
   - 克制的配色
   - 统一的间距系统
   - 微妙的微交互

2. **根据项目调整**
   - 章节数量和顺序
   - 重点内容的展示方式
   - 特定的技术分析

3. **突出项目特色**
   - 如果是视觉项目 → 强化配色分析
   - 如果是交互项目 → 强化动效说明
   - 如果是技术项目 → 强化算法实现

4. **避免模板化**
   - 不要每个项目都用相同的结构
   - 根据故事选择最合适的叙述方式
   - 允许实验性的布局和形式

---

## ✅ 设计检查清单

创建页面时，检查以下几点：

- [ ] 配色是否克制统一？（避免彩虹色）
- [ ] 间距是否舒适？（章节 32-40 / 段落 8-12）
- [ ] 是否有微交互？（hover 反馈）
- [ ] 滚动动画是否流畅？（whileInView）
- [ ] 移动端是否适配？（md: 断点）
- [ ] 内容是否有层次？（标题 > 正文 > 次要信息）
- [ ] 是否突出了项目特色？（而非套模板）
- [ ] 代码块是否易读？（深色背景 + 等宽字体）
- [ ] 图标风格是否一致？（strokeWidth）
- [ ] 留白是否充足？（不要塞满屏幕）

---

**记住**：这是指南，不是规则。好的设计来自于理解原则后的灵活运用，而不是机械套用模板。

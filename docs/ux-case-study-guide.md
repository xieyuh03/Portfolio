# UX Case Study 实施指南

> 适用于从 Figma 设计稿实现 UX/UI 作品集的 case study 页面

## ⚠️ 核心规则（永远遵循）

### 1. 内容第一原则 - 最重要！
- **绝对不要**自行生成或编造内容
- **完全按照截图**实现布局和内容
- **逐步实施**：用户提供一个截图，实现一个部分
- **占位符优先**：对于图片、图表等，先用占位符，等用户提供真实内容

### 2. 确认优先原则
- 看不清截图时，**必须先问用户确认**，不要猜测
- 不确定布局结构时，**描述你的理解并请求确认**
- 颜色、尺寸有疑问时，**提供选项让用户选择**

### 3. 快速参考规则
- 📏 **描述内容 = 16px** (用户强调多次)
- 📝 **Bullet points = `list-disc pl-5`** (确保换行对齐)
- 🎨 **颜色只加在关键词** (用 `<span>` 标记，不是整段)
- 🔄 **宽窄容器交替** (设计图用宽容器，文字用窄容器)

---

## 布局模式

### 宽窄容器交替模式 🎯
用于突出设计作品展示，同时优化文字阅读体验

**宽容器（max-w-[1600px]）**
- 用途：展示设计图、界面截图、视觉作品
- 优势：视觉冲击力强，设计细节清晰

**窄容器（max-w-5xl / ~1024px）**
- 用途：文字内容、描述、说明
- 优势：阅读舒适，行长度适中

### 典型结构示例

```tsx
{/* Hero Section - 宽容器 */}
<div className="max-w-[1600px] mx-auto px-8 py-12 mb-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* 左：标题描述 */}
    <div>
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Title</h1>
      <p className="text-base text-gray-700 leading-relaxed mb-8">Description</p>
    </div>
    {/* 右：2张图片上下排列 */}
    <div className="space-y-4">
      <div className="bg-gray-200 rounded-lg aspect-[16/9]">...</div>
      <div className="bg-gray-200 rounded-lg aspect-[16/9]">...</div>
    </div>
  </div>
</div>

{/* Content Section - 窄容器 */}
<div className="max-w-5xl mx-auto px-8">
  <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
    {/* 左栏：信息卡片 */}
    <div className="space-y-8">
      {/* Product Area, Role, Team, Timeline */}
    </div>
    {/* 右栏：主要内容 */}
    <div className="space-y-8">
      {/* Results, Contribution, Feedback */}
    </div>
  </div>
</div>

{/* Design Showcase - 宽容器 */}
<div className="max-w-[1600px] mx-auto px-8 py-12 mb-20">
  <div className="grid grid-cols-3 gap-6">
    {/* 3张横向UI截图 */}
    <div className="bg-gray-200 rounded-lg aspect-[16/10]">...</div>
    <div className="bg-gray-200 rounded-lg aspect-[16/10]">...</div>
    <div className="bg-gray-200 rounded-lg aspect-[16/10]">...</div>
  </div>
</div>

{/* Project Overview - 窄容器 */}
<div className="max-w-5xl mx-auto px-8">
  {/* 详细内容区域 */}
</div>
```

---

## 字体规范

### 标准字号体系
```typescript
// 页面标题
h1: text-5xl (48px) font-bold

// Section 标题
h2: text-3xl (30px) font-bold

// 子标题
h3: text-xl (20px) font-bold

// 小标题/角色名
h4: text-lg (18px) font-bold / font-semibold

// 内容标题
text-base (16px) font-semibold

// 正文/描述
text-base (16px) text-gray-600

// 辅助文字
text-sm (14px) text-gray-500
```

### ⚠️ 重要规则
1. **描述内容统一 16px**（用户强调多次）
2. **同级标题字号一致**（如 Goals 和 Source 的内容标题都是 16px）
3. **字重统一**：同类内容使用相同 font-weight（如都用 semibold）

---

## Bullet Points 规范 ✅

### 正确实现
```tsx
<ul className="space-y-2 text-base text-gray-600 list-disc pl-5">
  <li>Content that may wrap to multiple lines will align correctly</li>
  <li>Another item</li>
</ul>
```

### 关键点
- 使用 `list-disc pl-5`（**不要用** `list-inside`）
- 换行文字会和第一行文字对齐，而不是和 bullet point 对齐
- `pl-5` 提供合适的左边距（20px）

### ❌ 错误示范
```tsx
{/* 不要这样 - 换行会左对齐到 bullet */}
<ul className="list-disc list-inside">
```

---

## 多栏布局模式

### 两栏布局（信息 + 内容）
```tsx
<div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
  {/* 左栏：固定宽度信息栏 */}
  <div className="space-y-8">
    {/* Product Area, Role, Team, Timeline */}
  </div>

  {/* 右栏：主内容区 */}
  <div className="space-y-8">
    {/* Results, Contribution, Feedback */}
  </div>
</div>
```

### 三栏布局（标题 + 两列内容）
```tsx
<div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-8">
  {/* 左栏：标题（固定宽度） */}
  <div>
    <h3 className="text-xl font-bold">Goals</h3>
  </div>

  {/* 中栏：内容 1 */}
  <div>
    <h4 className="text-base font-semibold text-gray-900 mb-4">
      <span className="text-cyan-600">Enhance functional requirements</span> to meet customer needs.
    </h4>
    <ul className="space-y-2 text-base text-gray-600 list-disc pl-5">
      <li>New features include...</li>
    </ul>
  </div>

  {/* 右栏：内容 2 */}
  <div>{/* Content */}</div>
</div>
```

### 关键点
- 使用 `grid-cols-[固定值_1fr_1fr]` 精确控制列宽
- 标题列通常 200px 左右
- 内容列使用 `1fr` 平分剩余空间

---

## Fluent Emoji 集成

### 1. 资源获取
```bash
# 从 GitHub 仓库下载
# 路径格式：assets/[Emoji Name]/[Skin Tone]/3D/[filename].png
# 例如：assets/Woman office worker/Light/3D/woman_office_worker_3d_light.png

curl -L "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Woman%20office%20worker/Light/3D/woman_office_worker_3d_light.png" -o woman-office-worker.png
```

### 2. 存放位置
```
/public/emojis/
  ├── woman-office-worker.png
  └── woman-technologist.png
```

### 3. 使用方式
```tsx
{/* Persona 部分示例 */}
<div className="mb-12">
  <h3 className="text-xl font-bold text-gray-900 mb-6">Persona</h3>
  <div className="space-y-8 pl-16">
    {/* Treasurer */}
    <div className="flex gap-6">
      {/* 圆形容器：白色背景 + 阴影 */}
      <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
        <img
          src="/emojis/woman-technologist.png"
          alt="Treasurer"
          className="w-16 h-16"
        />
      </div>

      {/* 文字内容 */}
      <div className="flex-1">
        <h4 className="text-lg font-bold text-gray-900 mb-2">Treasurer (Primary)</h4>
        <ul className="space-y-2 text-base text-gray-600 list-disc pl-5">
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

### 4. 尺寸比例规则
- **容器尺寸**：w-28 h-28（112px）
- **Emoji 尺寸**：w-16 h-16（64px）
- **比例**：Emoji 约占容器的 57%（不要铺满，留白重要）

### 5. 视觉效果
- `bg-white`：白色背景
- `rounded-full`：完美圆形
- `shadow-lg`：柔和投影，浮起感
- `flex items-center justify-center`：居中对齐

---

## 颜色使用规范

### 文字颜色
```tsx
// 标题
text-gray-900          // 深黑

// 正文
text-gray-600          // 中灰

// 辅助文字
text-gray-500          // 浅灰

// 强调色（关键词）
text-cyan-600          // 青蓝色（用于特定关键词）
```

### ⚠️ 颜色应用注意事项

**错误示范：**
```tsx
{/* 整个标题都是青蓝色 - 错误 ❌ */}
<h4 className="text-cyan-600">
  Enhance functional requirements to meet customer needs.
</h4>
```

**正确示范：**
```tsx
{/* 只有关键词是青蓝色 - 正确 ✅ */}
<h4 className="text-gray-900">
  <span className="text-cyan-600">Enhance functional requirements</span> to meet customer needs.
</h4>
```

### 规则
1. **仔细查看截图**，确认颜色应用在哪个词上
2. 通常只有**关键短语**使用强调色
3. 后续描述文字保持**默认黑色**

---

## 缩进和对齐

### Persona 部分缩进示例
```tsx
<div className="mb-12">
  {/* 标题不缩进 */}
  <h3 className="text-xl font-bold">Persona</h3>

  {/* 内容区缩进 */}
  <div className="space-y-8 pl-16">
    {/* 人物卡片 */}
  </div>
</div>
```

### 规则
- **标题与其他 section 对齐**（不缩进）
- **内容区适当缩进**（pl-12 到 pl-16）
- **目的**：创建清晰的视觉层级

---

## 常见错误及修正

### ❌ 错误 1: 自行生成内容
**问题：**看到空白就自动填充内容

**正确做法：**
- 只实现用户提供截图的部分
- 使用占位符等待真实内容
- 步步为营，不要超前

### ❌ 错误 2: 误解截图布局
**问题：**看到图片就猜测是 2x2 网格

**正确做法：**
- 仔细观察截图的真实布局
- 不确定时描述你的理解：「我看到是上下两排，对吗？」
- 让用户确认后再实施

### ❌ 错误 3: 颜色应用范围错误
**问题：**整段文字应用强调色

**正确做法：**
- 使用 `<span>` 只给特定关键词上色
- 仔细查看截图中颜色的具体位置

### ❌ 错误 4: 字号不统一
**问题：**相似内容使用不同字号

**正确做法：**
- 同类内容统一字号（如所有描述都用 16px）
- 列出当前字号体系，让用户确认

### ❌ 错误 5: Bullet points 错误对齐
**问题：**使用 `list-inside` 导致换行左对齐到 bullet

**正确做法：**
- 使用 `list-disc pl-5`
- 换行文字和第一行对齐

### ❌ 错误 6: 三栏布局识别错误
**问题：**将三栏内容（标题+内容1+内容2）实现为两栏

**正确做法：**
- 使用 `grid-cols-[200px_1fr_1fr]`
- 第一列放标题，后两列平分内容

---

## 实施工作流程

### Phase 1: 初始设置
1. 创建项目路由文件
2. 添加到项目列表页
3. 搭建基础结构（Navigation + main）
4. 添加返回链接

### Phase 2: Hero Section
1. 用户提供 Hero 截图
2. 分析布局（左右两栏 / 上下排列）
3. 实现标题和描述
4. 添加图片占位符（等用户提供真实图片）
5. 使用宽容器（max-w-[1600px]）

### Phase 3: 内容区域
1. 用户提供内容截图
2. 切换到窄容器（max-w-5xl）
3. 实现两栏布局（信息栏 + 内容栏）
4. 确认字号和间距
5. 调整对齐和缩进

### Phase 4: 设计展示
1. 切换回宽容器
2. 添加设计图占位符
3. 使用 grid 布局排列图片

### Phase 5: 详细内容
1. 切换到窄容器
2. 逐步添加各个 section
3. 注意三栏布局（Goals、Source）
4. 统一字号和颜色

### Phase 6: 细节打磨
1. 调整间距
2. 统一字体粗细
3. 检查 bullet points 对齐
4. 确认颜色应用正确
5. 调整视觉层级

---

## 调试检查清单

完成后必须检查：

- [ ] 所有内容都来自用户截图，没有自行编造
- [ ] 宽窄容器交替使用正确
- [ ] 字号统一（描述 16px，标题符合层级）
- [ ] Bullet points 使用 `list-disc pl-5`
- [ ] 颜色只应用在特定关键词
- [ ] 图片占位符清晰标记
- [ ] 响应式布局（移动端考虑）
- [ ] 视觉层级清晰（缩进、间距）

---

## 与用户沟通模板

### 请求确认布局
```
根据截图，我看到这是【描述你的理解】：
- 左侧：【内容】
- 右侧：【内容】
要我现在按这个理解实现吗？
```

### 请求确认细节
```
我看到【具体问题】，有几个选项：
1. 【选项1】
2. 【选项2】
你想用哪个？
```

### 完成后总结
```
完成！✅ 已实现：
- 【具体完成项1】
- 【具体完成项2】

现在可以【下一步动作】。
```

---

## 技术栈

- **框架**: Next.js 16+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion (可选)
- **图标**: @fluentui/react-icons
- **Emoji**: Fluent Emoji (从 GitHub 下载)

---

## 参考资源

- Fluent Emoji: https://github.com/microsoft/fluentui-emoji
- Fluent Icons: @fluentui/react-icons
- Tailwind CSS: https://tailwindcss.com/docs

---

## 版本历史

- v1.0 (2026-02-11): 初始版本，基于 Bank Reconciliation 项目经验总结

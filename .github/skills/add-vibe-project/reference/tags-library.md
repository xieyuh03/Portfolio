# 标签库

Vibe Coding 项目的标签参考库和配比建议。

---

## 📊 标签配比原则

### 推荐配比

```
设计类标签：2-3 个（60-70%）
技术类标签：1-2 个（30-40%）
```

### 总标签数

- **最少**：3 个
- **推荐**：3-4 个
- **最多**：5 个

---

## 🎨 设计类标签库

### 视觉设计类

```
Visual Design          视觉设计（通用）
UI Design             界面设计
Graphic Design        平面设计
Design System         设计系统
Typography            字体排版
Color Theory          色彩理论
```

### 动效类

```
Motion Design         动效设计（核心）
Interactive Animation 交互动画
Micro-interactions    微交互
Animation             动画（通用）
Transitions           过渡动画
Kinetic Typography    动态字体
Generative Art        生成艺术
```

### 交互设计类

```
Interaction Design    交互设计（核心）
UX Design            用户体验设计
Prototyping          原型设计
User Interface        用户界面
Responsive Design     响应式设计
```

### 视觉风格类

```
Glassmorphism        玻璃拟态
Neumorphism          新拟态
Minimalism           极简主义
Brutalism            野兽派
Cyberpunk            赛博朋克
Abstract             抽象艺术
```

### 技术美学类

```
Computational Design  计算设计
Creative Coding      创意编程
Data Visualization   数据可视化
3D Design           三维设计
Spatial Design       空间设计
```

---

## ⚙️ 技术类标签库

### 前端框架

```
React
Vue
Next.js
Svelte
Angular
```

### 动画/图形库

```
Three.js            （3D）
WebGL               （底层图形）
Framer Motion       （React 动画）
GSAP                （动画库）
P5.js               （创意编程）
D3.js               （数据可视化）
Lottie              （动画格式）
```

### CSS 技术

```
CSS Animation
Tailwind CSS
Styled Components
CSS-in-JS
SCSS/Sass
```

### 设计工具

```
Figma
After Effects
Blender
Sketch
Adobe XD
Framer
Principle
```

### 其他技术

```
TypeScript
WebAssembly
Canvas API
SVG
Shader
Node.js
Python
```

---

## 🎯 标签配比示例

### 示例 1：动效探索项目

**项目**：行星轨道动画

✅ **推荐配比：**
```typescript
tags: ['Motion Design', 'Interactive Animation', 'React']
//     ↑ 设计类       ↑ 设计类                 ↑ 技术类
//     比例：67% 设计 + 33% 技术
```

❌ **避免（全技术）：**
```typescript
tags: ['React', 'TypeScript', 'Framer Motion']
// 缺乏设计视角
```

---

### 示例 2：视觉设计系统

**项目**：玻璃拟态 UI 组件库

✅ **推荐配比：**
```typescript
tags: ['Visual Design', 'Glassmorphism', 'Design System', 'Figma']
//     ↑ 设计         ↑ 风格          ↑ 设计            ↑ 工具
//     比例：75% 设计 + 25% 工具
```

✅ **备选配比：**
```typescript
tags: ['Design System', 'Glassmorphism', 'React']
//     比例：67% 设计 + 33% 技术
```

---

### 示例 3：交互原型

**项目**：呼吸感卡片交互

✅ **推荐配比：**
```typescript
tags: ['Interaction Design', 'Micro-interactions', 'Framer Motion']
//     ↑ 设计类            ↑ 设计类               ↑ 技术类
//     比例：67% 设计 + 33% 技术
```

✅ **备选配比：**
```typescript
tags: ['UX Design', 'Prototyping', 'Animation', 'Figma']
//     比例：75% 设计 + 25% 工具
```

---

### 示例 4：3D 可视化

**项目**：3D 数据可视化

✅ **推荐配比：**
```typescript
tags: ['Data Visualization', '3D Design', 'Three.js']
//     ↑ 设计类             ↑ 设计类     ↑ 技术类
//     比例：67% 设计 + 33% 技术
```

✅ **备选配比：**
```typescript
tags: ['Data Visualization', 'WebGL', 'Interactive Animation']
//     ↑ 设计类             ↑ 技术 ↑ 设计类
//     比例：67% 设计 + 33% 技术
```

---

### 示例 5：生成艺术

**项目**：算法生成图案

✅ **推荐配比：**
```typescript
tags: ['Generative Art', 'Creative Coding', 'P5.js']
//     ↑ 设计类          ↑ 设计类           ↑ 技术类
//     比例：67% 设计 + 33% 技术
```

✅ **备选配比：**
```typescript
tags: ['Generative Art', 'Abstract', 'Computational Design']
//     比例：100% 设计类（纯艺术项目可以这样）
```

---

## 🚫 常见错误

### 1. 全是技术标签

❌ **错误示例：**
```typescript
tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
// 问题：完全是工程师视角，没有体现设计思考
```

✅ **修正：**
```typescript
tags: ['Motion Design', 'Interactive Animation', 'React']
```

---

### 2. 标签过于细节

❌ **错误示例：**
```typescript
tags: ['react-spring', 'styled-components', 'axios']
// 问题：这些是具体的库名，不是核心技术
```

✅ **修正：**
```typescript
tags: ['Interaction Design', 'Animation', 'React']
```

---

### 3. 标签过于宽泛

❌ **错误示例：**
```typescript
tags: ['Web Development', 'Programming', 'Design']
// 问题：太笼统，没有辨识度
```

✅ **修正：**
```typescript
tags: ['Motion Design', 'Micro-interactions', 'React']
```

---

### 4. 标签重复或冗余

❌ **错误示例：**
```typescript
tags: ['Animation', 'Motion Design', 'Interactive Animation', 'Transitions']
// 问题：都是动画相关，过于重复
```

✅ **修正：**
```typescript
tags: ['Motion Design', 'Interactive Animation', 'React']
// 保留最核心的 2 个动画标签，加 1 个技术标签
```

---

## 💡 标签选择技巧

### 1. 优先选择核心概念

选择最能代表项目本质的标签，而不是罗列所有相关标签。

### 2. 平衡通用性和特异性

- **通用标签**：Motion Design, Visual Design（容易被搜索）
- **特异标签**：Glassmorphism, Generative Art（展示独特性）

推荐：2 个通用 + 1-2 个特异

### 3. 考虑目标受众

- **技术面试官**：可以增加技术标签比例（50/50）
- **设计总监**：保持设计标签为主（70/30）
- **创意社区**：可以更艺术化的标签（80/20）

### 4. 保持一致性

在整个作品集中，标签风格应保持一致（都用英文或都用中文）。

---

## 📋 标签选择流程

1. **确定项目类型**
   - 动效探索？→ Motion Design
   - 交互原型？→ Interaction Design
   - 视觉系统？→ Design System
   - 3D 可视化？→ Data Visualization / 3D Design

2. **添加设计风格/方法**
   - 有明显风格？→ 添加风格标签（Glassmorphism, Minimalism）
   - 有特殊技法？→ 添加技法标签（Micro-interactions, Generative Art）

3. **添加核心技术**
   - 选择 1-2 个最核心的技术
   - 优先选择知名度高的（React, Three.js）

4. **检查配比**
   - 确保设计类标签占 60-70%
   - 总标签数控制在 3-5 个

---

## 🎯 快速参考

### 动效项目常用组合

```
Motion Design + Interactive Animation + React
Motion Design + Animation + Three.js
Motion Design + Micro-interactions + GSAP
Generative Art + Creative Coding + P5.js
```

### 视觉设计项目常用组合

```
Visual Design + Design System + Figma
UI Design + Glassmorphism + React
Design System + Typography + Figma
Visual Design + Minimalism + Next.js
```

### 交互设计项目常用组合

```
Interaction Design + Prototyping + Figma
UX Design + Micro-interactions + Framer Motion
Interaction Design + Animation + React
Prototyping + Responsive Design + Figma
```

### 3D/数据可视化项目常用组合

```
Data Visualization + 3D Design + Three.js
3D Design + WebGL + Interactive Animation
Data Visualization + D3.js + React
Spatial Design + Three.js + Creative Coding
```

---

**记住**：标签是给面试官/招聘者的第一印象，要体现你的设计思维，而不仅仅是技术能力。

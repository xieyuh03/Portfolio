# 工作项目示例 — Bank Reconciliation 参考实现

## Work 卡片示例

```typescript
{
  id: 6,
  title: 'Modern Bank Reconciliation',
  description: 'A redesign of the bank reconciliation feature for Microsoft 365 Finance ERP. Reduced reconciliation time by 65% and error rate by 78% through an intelligent matching engine and optimized workflow.',
  tags: ['UX Design', 'Enterprise', 'M365 Finance'],
  year: '2025',
  image: '/images/Frontimage.png',   // 封面图放 /public/images/ 根目录
},
```

## 页面 Section 结构（本项目实际使用顺序）

```
Hero              — 宽容器，2列（标题+logo | 2张截图叠放）
Meta Strip        — 全宽灰色，左侧meta卡片 + 右侧 Results/Contribution/Feedback
Design Showcase   — 全宽灰色，3列截图
Project Overview  — 白底，H2 标题 + 以下子节：
  Persona         — 带 Fluent Emoji 圆形头像 + bullet list
  Business Flow   — 流程图图片居中
  Goals           — 2列对称内容（[200px label | content | divider | content]）
  Source          — 同 Goals 布局
  Challenge       — bullet list
  Team Collaboration — 图片居中
Bank Statement Design — 全宽灰色，H2 标题 + 以下子节：
  Main pain points — 加粗 bullet list，关键词 cyan 高亮
  Original design  — 圆角卡片图
  New design       — 圆角卡片图
  Interaction Logic and State Transitions
    关系说明       — 图文交替（文字左，图右）
    状态继承       — 图文交替（图左，文字右）reversed=true
Worksheet Design  — 白底，H2 标题 + 以下子节：
  Main pain points
  Original design / Final design
  Design Explorations
    Unmatched transactions — 3列×2行图片宫格
    Pending transaction    — 3列×2行图片宫格
Flowchart         — 全宽灰色，横向滚动（4张流程图）
Usability Testing — 白底，H2 标题 + 以下子节：
  蓝色竖线引言段落
  Key findings（H3）
  单个 User Quote（带 emoji 圆形头像 + 灰色卡片背景）
  2列 UI 截图
  2列 User Quotes
Product Impact    — 全宽灰色，错位时间轴 + SVG 折线图
Growth            — 白底，1/2/3 大号 cyan 数字列表
Footer Nav        — 返回按钮
```

## 素材文件命名约定

```
/public/images/[slug]/
  title image 01.png
  title image 02.png
  Finance logo.png
  image showcase 01.png
  image showcase 02.png
  image showcase 03.png
  original design cropped.png
  new design cropped.png
  Worksheet original design cropped.png
  worksheet final design cropped.png
  Business flow.png
  Team collaboration.png
  finding01.png
  finding02.png
  relationship between.png
  status inherit.png
  Flow-original.png
  flow-version01.png
  flow-version02.png
  Flow-final.png
  /unmatched transaction/1.png ... 6.png
  /pending transaction/2.1.png ... 2.6.png
```

## 关键技术决策

- `<img src={\`${basePath}/images/...\`}>` — 详情页所有图片（不用 Next.js Image）
- `<Image fill>` — 仅 Work 卡片列表页使用（自动处理 basePath）
- 外层 div：`bg-white min-h-screen overflow-x-hidden` — 防止黑边
- 滚动条：`globals.css` 中 scrollbar-track 用 `transparent`

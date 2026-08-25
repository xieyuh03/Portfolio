# Add Vibe Project Skill

为个人探索性编程项目（Vibe Coding）生成以设计师视角为主的作品集内容。

## 📖 简介

这个 skill 专门用于处理**个人探索项目**，而非实际工作项目：
- 强调创意探索和设计表达
- 以设计师视角为主（70%），技术视角为辅（30%）
- 灵活处理缺失的传统 UX 流程（用户研究、数据验证等）
- 适合展示：动效实验、交互探索、视觉设计、技术原型等

## 🚀 使用方法

Copilot 会从 `.github/skills/add-vibe-project/SKILL.md` 自动发现此 skill。在 Copilot Chat 或 Copilot CLI 中直接点名调用：

```text
使用 add-vibe-project skill，帮我把这个个人探索项目添加到作品集。
```

也可以直接描述任务，由 Copilot 根据 skill 的 `description` 自动匹配。

## 📁 文件结构

```
add-vibe-project/
├── SKILL.md                    # Copilot skill 主入口（frontmatter + 执行流程）
├── README.md                   # 本文件
├── reference/
│   ├── writing-guide.md        # 描述撰写指南
│   ├── tags-library.md         # 标签库
│   ├── examples.md             # 项目示例
│   ├── page-design-guide.md    # 页面设计原则 + 章节结构（探索类/工具类）
│   ├── layout-patterns.md      # 布局代码片段速查
│   └── advanced-patterns.md    # 高级交互模式（Lightbox、轮播、流程图等）
└── assets/
    └── templates/
        └── project-template.json  # 项目数据模板
```

## 🎯 工作流程

1. **收集项目信息**：灵感来源、设计亮点、技术实现
2. **分析项目**：读取代码和文档，提取关键信息
3. **生成内容**：创建项目卡片（标题、描述、标签、图片）
4. **预览确认**：展示生成的内容并询问目标位置
5. **插入代码**：将内容添加到指定位置
6. **（可选）生成详情页**：创建完整的 Case Study 页面

## 💡 适用场景

✅ **适合：**
- 个人探索性项目（side projects）
- 设计实验和原型
- 动效/交互/视觉探索
- 技术学习项目
- 创意编程作品

❌ **不适合（请使用 add-work-project）：**
- 实际工作项目
- 客户委托项目
- 需要完整 UX 流程的商业项目

## 📝 生成内容示例

```typescript
{
  id: 5,
  title: 'Planetary Orbit Animation',
  description: {
    en: 'An exploration of the visual rhythm and motion of planetary orbits.',
    zh: '探索太阳系行星轨道的视觉节奏与动态美学。',
  },
  tags: [
    { en: 'Motion Design', zh: '动效设计' },
    { en: 'Interactive Animation', zh: '交互动画' },
    { en: 'React', zh: 'React' },
  ],
  year: '2024',
  image: 'https://images.unsplash.com/photo-1...',
}
```

## 🔗 相关资源

**项目卡片生成：**
- [描述撰写指南](reference/writing-guide.md) - 如何撰写吸引人的项目描述
- [标签库](reference/tags-library.md) - 设计类和技术类标签参考
- [项目示例](reference/examples.md) - 完整的项目案例

**详情页生成：**
- [页面设计指南](reference/page-design-guide.md) - 设计原则、章节结构（探索类/工具类两套）
- [布局模式速查](reference/layout-patterns.md) - 各种布局模式的代码片段
- [高级交互模式](reference/advanced-patterns.md) - Lightbox、轮播、流程图、语义色块等

## 🛠️ 技术细节

**生成的项目对象格式：**

```typescript
type LocalizedText = {
  en: string;
  zh: string;
};

interface Project {
  id: number;                  // 唯一标识符
  title: string;               // 项目标题
  description: LocalizedText;  // 双语项目描述
  tags: LocalizedText[];       // 3-5 个双语标签
  year: string;                // 项目年份
  image: string;               // 封面图片 URL 或带 basePath 的本地路径
}
```

**标签配比建议：**
- 设计类标签：2-3 个（60-70%）
- 技术类标签：1-2 个（30-40%）

## 📮 反馈

如有问题或建议，请在项目 issue 中反馈。

---

**版本**：1.2.0
**最后更新**：2026-08-21

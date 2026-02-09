# 个人作品集网站

一个现代化、炫酷的个人作品集网站，使用 Next.js 14、React、TypeScript 和 Sanity CMS 构建。

## ✨ 特性

- 🎨 **炫酷的视觉效果**：流体粒子动画、自定义光标、平滑过渡
- ⚡ **高性能**：基于 Next.js 14 App Router，支持 SSG 和 SSR
- 📱 **响应式设计**：完美适配各种设备尺寸
- 🎭 **优雅动画**：使用 Framer Motion 实现流畅的页面动画
- 📝 **内容管理**：集成 Sanity CMS，可视化管理项目和经历
- 🚀 **易于部署**：一键部署到 Vercel

## 🛠️ 技术栈

- **前端框架**: Next.js 14 (App Router)
- **UI 库**: React 19
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **3D 效果**: Three.js
- **CMS**: Sanity
- **语言**: TypeScript
- **部署**: Vercel

## 📦 项目结构

```
portfolio-website/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页
│   ├── projects/          # 项目展示页
│   ├── about/             # 关于页面
│   └── contact/           # 联系页面
├── components/            # React 组件
│   ├── FluidBackground.tsx
│   ├── CustomCursor.tsx
│   └── Navigation.tsx
├── lib/                   # 工具函数
│   └── sanity.ts         # Sanity 配置
├── sanity/               # Sanity CMS 配置
│   └── schemas/          # 数据模型定义
├── public/               # 静态资源
└── styles/               # 全局样式
```

## 🚀 快速开始

### 1. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 2. 配置 Sanity CMS

#### 创建 Sanity 项目

1. 访问 [Sanity.io](https://www.sanity.io/) 注册账号
2. 创建新项目
3. 记下你的 **Project ID**

#### 设置环境变量

复制 \`.env.local.example\` 为 \`.env.local\`：

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

填入你的 Sanity 配置：

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=你的项目ID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=你的API令牌
\`\`\`

#### 初始化 Sanity Studio（可选）

如果你想要本地运行 Sanity Studio 后台：

\`\`\`bash
npm install -g @sanity/cli
sanity init
\`\`\`

### 3. 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 4. 管理内容

你有两种方式管理内容：

#### 方式 1：使用 Sanity Studio（推荐）

访问 [https://www.sanity.io/manage](https://www.sanity.io/manage) 在线管理你的内容。

#### 方式 2：暂时使用静态数据

在正式配置 Sanity 之前，页面会显示示例数据。你可以在以下文件中修改：
- \`app/projects/page.tsx\` - 项目列表
- \`app/about/page.tsx\` - 个人经历和技能

## 📝 内容管理

### 添加项目

在 Sanity Studio 中：
1. 点击 "项目"
2. 点击 "创建新项目"
3. 填写项目信息：
   - 项目名称
   - URL 别名
   - 简短描述
   - 封面图片
   - 技术标签
   - 项目链接
   - GitHub 链接
   - 详细内容

### 添加工作经历

1. 点击 "工作经历"
2. 点击 "创建新经历"
3. 填写：
   - 职位名称
   - 公司名称
   - 年份
   - 工作描述

## 🎨 自定义

### 修改主题颜色

编辑 \`app/globals.css\` 和 \`tailwind.config.ts\` 来自定义颜色方案。

### 修改个人信息

- **导航栏**: \`components/Navigation.tsx\`
- **首页标题**: \`app/page.tsx\`
- **联系方式**: \`app/contact/page.tsx\`

## 🚀 部署

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com)
3. 导入你的 GitHub 仓库
4. 添加环境变量（与 .env.local 相同）
5. 点击部署

Vercel 会自动：
- 构建你的项目
- 生成生产环境 URL
- 在每次推送时自动重新部署

### 绑定自定义域名

在 Vercel 项目设置中：
1. 进入 "Domains"
2. 添加你的域名
3. 按照指示配置 DNS

## 📱 页面说明

- **首页** (`/`): 炫酷的欢迎页面，带流体粒子效果
- **项目** (`/projects`): 展示所有项目，卡片式布局
- **关于** (`/about`): 个人简介、技能和工作经历时间线
- **联系** (`/contact`): 联系方式和留言表单

## 🔧 可用命令

\`\`\`bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run start    # 启动生产服务器
npm run lint     # 运行代码检查
\`\`\`

## 🐛 常见问题

### Sanity 图片不显示

确保在 \`next.config.mjs\` 中添加了 Sanity CDN 域名：

\`\`\`js
images: {
  domains: ['cdn.sanity.io'],
}
\`\`\`

### 环境变量不生效

- 确保变量名以 \`NEXT_PUBLIC_\` 开头（客户端使用）
- 修改后重启开发服务器

## 📄 License

MIT

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**Happy Coding! 🎉**

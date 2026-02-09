# ⚡ 快速开始指南

## 🎯 你现在可以做什么

你的作品集网站已经搭建完成！现在有两个选择：

### 选项 1：先预览，后配置 CMS（推荐新手）

\`\`\`bash
# 项目已经在运行了！
# 打开浏览器访问：http://localhost:3000
\`\`\`

目前网站显示的是**示例数据**，你可以：
- 查看所有页面效果
- 测试动画和交互
- 感受整体设计风格

**修改示例数据**：
- 项目：编辑 [app/projects/page.tsx](app/projects/page.tsx:11-55)
- 关于：编辑 [app/about/page.tsx](app/about/page.tsx:10-28)
- 联系：编辑 [app/contact/page.tsx](app/contact/page.tsx:103-146)

### 选项 2：配置 Sanity CMS，使用后台管理（推荐）

配置完成后，你可以在可视化界面管理内容。

**步骤**：
1. 访问 [https://www.sanity.io/](https://www.sanity.io/) 注册
2. 创建新项目，获取 Project ID
3. 创建 `.env.local` 文件，填入配置
4. 重启开发服务器

详细步骤见 [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📂 项目结构一览

\`\`\`
portfolio-website/
├── app/
│   ├── page.tsx           ← 首页（流体粒子效果）
│   ├── projects/          ← 项目展示页
│   ├── about/             ← 关于页（经历+技能）
│   └── contact/           ← 联系页
├── components/
│   ├── FluidBackground.tsx  ← 流体动画背景
│   ├── CustomCursor.tsx     ← 自定义光标
│   └── Navigation.tsx       ← 导航栏
└── sanity/
    └── schemas/             ← CMS 数据模型
\`\`\`

---

## 🎨 快速自定义

### 修改个人信息

1. **网站标题**：[app/layout.tsx](app/layout.tsx:5-8)
2. **首页标题**：[app/page.tsx](app/page.tsx:19-27)
3. **导航栏品牌**：[components/Navigation.tsx](components/Navigation.tsx:23-25)
4. **联系方式**：[app/contact/page.tsx](app/contact/page.tsx:103-146)

### 修改配色方案

编辑 [app/globals.css](app/globals.css:41-47) 中的渐变色：

\`\`\`css
.gradient-text {
  background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #4facfe);
}
\`\`\`

### 修改动画效果

- **流体粒子颜色**：[components/FluidBackground.tsx](components/FluidBackground.tsx:25-36)
- **页面过渡动画**：各个页面组件中的 `motion` 配置

---

## 🚀 准备部署？

### 简单 3 步部署到 Vercel：

\`\`\`bash
# 1. 推送到 GitHub
git init
git add .
git commit -m "My awesome portfolio"
git remote add origin https://github.com/你的用户名/portfolio.git
git push -u origin main

# 2. 访问 vercel.com，导入 GitHub 仓库

# 3. 点击 Deploy，完成！
\`\`\`

详细部署教程见 [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📝 常用命令

\`\`\`bash
npm run dev      # 启动开发服务器（已在运行）
npm run build    # 构建生产版本
npm run start    # 启动生产服务器
npm run lint     # 代码检查
\`\`\`

---

## 💡 页面预览

访问以下页面查看效果：

- **首页**: [http://localhost:3000](http://localhost:3000)
- **项目**: [http://localhost:3000/projects](http://localhost:3000/projects)
- **关于**: [http://localhost:3000/about](http://localhost:3000/about)
- **联系**: [http://localhost:3000/contact](http://localhost:3000/contact)

---

## 🎯 下一步建议

### 立即可做：
- ✅ 修改首页标题和个人简介
- ✅ 更新联系方式（邮箱、GitHub、LinkedIn）
- ✅ 自定义项目和经历数据

### 稍后配置：
- 📝 配置 Sanity CMS（可视化管理内容）
- 🌐 部署到 Vercel（免费）
- 🎨 绑定自定义域名（可选）

---

## 🆘 遇到问题？

### 开发服务器启动失败
\`\`\`bash
# 清理缓存重试
rm -rf .next
npm run dev
\`\`\`

### 页面显示空白
- 检查浏览器控制台错误
- 确保所有依赖已安装：`npm install`

### 动画效果不显示
- 确保 JavaScript 已启用
- 尝试清除浏览器缓存

---

**享受构建你的作品集网站吧！🎉**

需要更多帮助？查看 [README.md](README.md) 或 [DEPLOYMENT.md](DEPLOYMENT.md)

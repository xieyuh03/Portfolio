# 🚀 部署指南

## 📋 部署前准备清单

在部署之前，请确保完成以下步骤：

### 1. 配置 Sanity CMS

#### 创建 Sanity 账号和项目

1. 访问 [https://www.sanity.io/](https://www.sanity.io/)
2. 点击 "Get started" 注册账号
3. 创建新项目：
   - 项目名称：`portfolio-cms`（或你喜欢的名字）
   - 选择数据集：`production`
   - 记下你的 **Project ID**（类似 `abc123xyz`）

#### 配置项目

1. 在 Sanity 控制台中：
   - 进入 **API** 设置
   - 在 **CORS Origins** 中添加：
     - `http://localhost:3000`（本地开发）
     - `https://你的用户名.github.io`（GitHub Pages；Origin 不包含仓库路径）
     - `https://your-domain.com`（自定义域名，部署后填入）

当前网站只读取公开数据集，不需要 API Token。仅当后续增加写入或受保护数据读取功能时，再创建最小权限 token；不要把 token 暴露为 `NEXT_PUBLIC_` 变量。

#### 设置本地环境变量

创建 `.env.local` 文件：

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

填入配置：

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=你的ProjectID
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

#### 导入 Schema 到 Sanity

方式 1：使用 Sanity Studio（推荐）

\`\`\`bash
# 安装 Sanity CLI
npm install -g @sanity/cli

# 在项目根目录运行
sanity init

# 选择：
# - Use existing project
# - 选择你刚创建的项目
# - Default dataset: production
# - Output path: sanity-studio
\`\`\`

然后在 sanity-studio 中配置 schema：

\`\`\`bash
cd sanity-studio
# 将 ../sanity/schemas 中的文件复制到 schemas 目录
cp -r ../sanity/schemas/* schemas/

# 启动 Studio
npm run dev
\`\`\`

方式 2：使用在线 Studio（更简单）

1. 访问 [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. 选择你的项目
3. 点击 "Content" → "Vision"
4. 手动创建内容（无需配置 schema）

### 2. 测试本地运行

\`\`\`bash
# 安装依赖（如果还没安装）
npm install

# 启动开发服务器
npm run dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000) 确保一切正常。

---

## 🌐 部署到 GitHub Pages

### 步骤 1：推送代码到 GitHub

\`\`\`bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: Portfolio website"

# 在 GitHub 创建新仓库，然后关联
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送代码
git branch -M main
git push -u origin main
\`\`\`

### 步骤 2：启用 GitHub Pages

1. 打开 GitHub 仓库页面
2. 进入 **Settings** → **Pages**
3. 在 **Build and deployment** 中选择 **GitHub Actions**

仓库已包含 `.github/workflows/deploy.yml`，推送到 `main` 后会自动运行构建并发布 `out/`。

### 步骤 3：添加环境变量

在 GitHub Actions 仓库配置中：

1. 进入 **Settings** → **Secrets and variables** → **Actions** → **Variables**
2. 添加以下 Repository variables：

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=你的ProjectID
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

工作流会在 `Build with Next.js` 步骤中将这两个 Repository variables 显式映射到构建环境。当前静态站点构建不使用 Sanity Editor token，因此不要添加 `SANITY_API_TOKEN`。

### 步骤 4：部署

1. 推送到 `main`
2. 等待 GitHub Actions 构建完成（约 1-2 分钟）
3. 部署成功后会得到一个 URL，例如：
   - `https://你的用户名.github.io/你的仓库名/`

### 步骤 5：更新 Sanity CORS

回到 Sanity 控制台，在 CORS Origins 中添加你的生产 URL：

\`\`\`
https://你的用户名.github.io
\`\`\`

浏览器的 `Origin` 只包含 scheme、host 和 port，不包含 `/你的仓库名/` 路径。

GitHub Actions 会根据实际、区分大小写的仓库名动态设置 `NEXT_PUBLIC_BASE_PATH=/你的仓库名`。如果仓库本身是 `你的用户名.github.io` 用户站点，工作流会使用空 base path。

---

## ☁️ 部署到 Cloudflare Workers

项目已包含 `wrangler.jsonc`，会将 Next.js 静态导出的 `out/` 目录作为 Workers 静态资源部署。

\`\`\`bash
npm run build
npx wrangler deploy
\`\`\`

Cloudflare 根路径部署通常不需要设置 `NEXT_PUBLIC_BASE_PATH`。如果部署到子路径，可按实际路径设置该环境变量后再构建。

---

## 🎨 自定义域名（可选）

### 购买域名

推荐平台：
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [阿里云](https://wanwang.aliyun.com)

### 绑定自定义域名

1. 在 GitHub Pages 或 Cloudflare 中添加你的域名（例如 `yourname.com`）
2. 按平台提示配置 DNS 记录
3. 等待 DNS 生效（可能需要 24-48 小时）

---

## 📝 添加内容

### 方式 1：使用 Sanity Studio

访问：`https://www.sanity.io/manage/personal/project/你的ProjectID`

或本地运行 Studio：

\`\`\`bash
cd sanity-studio
npm run dev
# 访问 http://localhost:3333
\`\`\`

### 方式 2：暂时使用静态数据

在 Sanity 正式配置完成前，页面会显示示例数据。你可以直接修改：

- **项目**: [app/projects/page.tsx](app/projects/page.tsx:11)
- **经历**: [app/about/page.tsx](app/about/page.tsx:10)

---

## 🔄 自动部署

每次推送代码到 GitHub main 分支时，GitHub Actions 会自动：
1. 拉取最新代码
2. 运行构建
3. 部署新版本

无需手动操作！

---

## 📊 监控和分析

### 平台分析

可使用 Cloudflare Web Analytics、GitHub Pages 外接分析服务，或自行接入 Google Analytics。

### Google Analytics（可选）

在 [app/layout.tsx](app/layout.tsx:1) 中添加 Google Analytics 代码。

---

## 🐛 常见问题

### 问题 1：部署失败

**解决方案**：
- 检查 GitHub Actions 或 Wrangler 构建日志
- 确保所有依赖都在 `package.json` 中
- 本地运行 `npm run build` 测试

### 问题 2：环境变量不生效

**解决方案**：
- 变量名必须以 `NEXT_PUBLIC_` 开头（客户端使用）
- 重新运行 GitHub Actions，或重新执行 `npx wrangler deploy`

### 问题 3：Sanity 内容不显示

**解决方案**：
- 检查 `.env.local` 配置是否正确
- 确保 Sanity CORS 设置包含你的域名
- 检查浏览器控制台错误信息

### 问题 4：图片无法加载

**解决方案**：
- 确保 `next.config.mjs` 中配置了 Sanity CDN
- 检查图片 URL 是否正确

---

## 📱 下一步优化建议

1. **SEO 优化**
   - 添加 `sitemap.xml`
   - 优化 meta 标签
   - 添加 Open Graph 图片

2. **性能优化**
   - 启用图片懒加载
   - 添加 Service Worker
   - 使用 Next.js Image 组件

3. **功能增强**
   - 添加博客功能
   - 集成评论系统
   - 添加搜索功能
   - 多语言支持

4. **监控和分析**
   - Google Analytics
   - Sentry 错误追踪
   - Lighthouse 性能测试

---

**恭喜！你的作品集网站已经成功部署了！🎉**

有任何问题欢迎查看 [README.md](README.md) 或提交 Issue。

'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import FluidBackground from '@/components/FluidBackground';
import { useLanguage } from '@/lib/LanguageContext';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// -------------------- 数据 --------------------

const skillsEN = [
  { code: '00', name: 'Orchestrator', role: 'Entry · routing · checkpoints', scope: 'Shared' },
  { code: '10', name: 'Exploring requirements', role: 'PM · turn intent into a Brief', scope: 'Shared' },
  { code: '20·21', name: 'Designing page', role: 'Designer · produce a Spec + component table', scope: 'Per product' },
  { code: '30·31', name: 'Generating code', role: 'Engineer · render Spec into TSX story', scope: 'Per product' },
  { code: '40', name: 'Reviewing page', role: 'Reviewer · 7-dimension audit + subagents', scope: 'Shared' },
  { code: '50', name: 'Modifying page', role: 'Triage · route edits back to PM / Designer / Engineer', scope: 'Shared' },
];

const skillsZH = [
  { code: '00', name: '编排 Orchestrator', role: '入口 · 路由 · 卡点', scope: '共享' },
  { code: '10', name: '需求澄清 PM', role: '把意图变成 Brief', scope: '共享' },
  { code: '20·21', name: '设计 Designer', role: '产出 Spec + 组件表', scope: '按产品' },
  { code: '30·31', name: '生成代码 Engineer', role: '把 Spec 渲染为 TSX 故事文件', scope: '按产品' },
  { code: '40', name: '审查 Reviewer', role: '七维度复审 + 子 agent', scope: '共享' },
  { code: '50', name: '修改 Triage', role: '把修改分流到 PM / Designer / Engineer', scope: '共享' },
];

const stagesEN = [
  {
    label: 'Brief',
    owner: 'PM',
    fileExample: 'docs/mads/briefs/<slug>.md',
    desc: 'Goal, scope, user, edge cases — written as a structured markdown, not a chat history.',
  },
  {
    label: 'Spec',
    owner: 'Designer',
    fileExample: 'docs/mads/specs/<slug>.md',
    desc: 'Component inventory table (Region · Component · Source path · Props) + token mapping. The next role consumes it row by row — no interpretation needed.',
  },
  {
    label: 'Code',
    owner: 'Engineer',
    fileExample: 'src/stories/Design Explorations/<slug>/<page>.stories.tsx',
    desc: 'Reads the Spec, fills in mock data, emits a self-contained Storybook story.',
  },
  {
    label: 'Review',
    owner: 'Reviewer',
    fileExample: 'docs/mads/reviews/<slug>.md',
    desc: 'Calls design-reviewer + code-quality-checker subagents. Each runs in its own context so heavy scans don\'t pollute the main thread.',
  },
];

const stagesZH = [
  {
    label: 'Brief',
    owner: 'PM',
    fileExample: 'docs/mads/briefs/<slug>.md',
    desc: '目标 / 范围 / 用户 / 边界 —— 写成结构化 markdown，不再是聊天记录。',
  },
  {
    label: 'Spec',
    owner: '设计师',
    fileExample: 'docs/mads/specs/<slug>.md',
    desc: '组件清单表（区域 · 组件 · 源路径 · Props）+ token 映射。下游角色按行消费，不靠主观理解。',
  },
  {
    label: 'Code',
    owner: '工程师',
    fileExample: 'src/stories/Design Explorations/<slug>/<page>.stories.tsx',
    desc: '读 Spec，填上 mock 数据，输出自包含的 Storybook story。',
  },
  {
    label: 'Review',
    owner: '审查',
    fileExample: 'docs/mads/reviews/<slug>.md',
    desc: '调用 design-reviewer + code-quality-checker 子 agent。每个子 agent 在独立 context 跑，重扫描不污染主线程。',
  },
];

const constraintsEN = [
  {
    title: 'Monolithic prompt',
    detail: 'A 550-line SKILL.md tried to hold PM, Designer and Engineer at once — every step inherited the prior chatter.',
  },
  {
    title: 'Implicit handoff',
    detail: 'There was no artifact between roles. What the PM "meant" lived in the chat scroll-back, not in a file the next role could trust.',
  },
  {
    title: 'Single-product lock-in',
    detail: 'Component paths, token names and library quirks were baked into the prompt. Adding a second product meant forking the whole thing.',
  },
];

const constraintsZH = [
  {
    title: '一条 prompt 装所有角色',
    detail: '550 行的 SKILL.md 把 PM / 设计 / 工程塞在一次对话里，每一步都背着前面的噪音继续。',
  },
  {
    title: '交接物隐式存在',
    detail: '角色之间没有"文件"。PM 想说什么，藏在聊天记录里，下一个角色没法直接 trust。',
  },
  {
    title: '只为单一产品而生',
    detail: '组件路径、token 名、库的小毛病都硬编码在 prompt 里。多加一个产品 = 整套复制一份。',
  },
];

// 三层骨架 —— L3 自定义 / L2 流程 / L1 底座
const layersEN = [
  {
    code: 'L3',
    name: 'Custom extensions',
    owner: 'Contributors · iterates often',
    point: 'Plug product, persona and industry knowledge into each stage.',
    body: 'Other designers drop docs (or sub-skills) into the matching stage\'s references/custom-*/ folder — no registration, the skill auto-loads. Never touch the main process, just "add recipes."',
  },
  {
    code: 'L2',
    name: 'Process framework',
    owner: 'Maintainer · stable after the process settles',
    point: 'The "how to work" methodology for each stage.',
    body: 'How to clarify intent, how to turn a brief into a spec, how to write code that stays on track, how to audit on multiple dimensions. Every stage\'s method lives here — rarely changes once it has run a few times.',
  },
  {
    code: 'L1',
    name: 'Universal foundation',
    owner: 'Maintainer · set once, rarely touched',
    point: 'All the off-the-shelf components and design standards.',
    body: 'M365 Admin page modules, the Fluent v9 wrapper library, color/type/spacing tokens. Cross-project — set up once and reused, only synced when the underlying components upgrade.',
  },
];

const layersZH = [
  {
    code: 'L3',
    name: '自定义扩展',
    owner: '同事 · 高频迭代',
    point: '把产品 / persona / 行业知识挂到每个阶段。',
    body: '其他设计师按产品需要，往对应阶段的 references/custom-*/ 加文档或挂子 skill —— 无需注册，SKILL 自动加载。不动主流程，只往里"加配方"。',
  },
  {
    code: 'L2',
    name: '流程框架',
    owner: '维护者 · 流程稳定后基本不动',
    point: '每个阶段"怎么干活"的工作方法。',
    body: '怎么聊清需求、怎么从需求出方案、怎么写代码不跑偏、怎么多维度打分检查 —— 每个阶段的工作方法都在这里。跑过几次后基本不动。',
  },
  {
    code: 'L1',
    name: '通用底座',
    owner: '维护者 · 一次搭好基本不变',
    point: '做页面要用的所有现成组件 + 设计规范。',
    body: 'M365 Admin 现成的页面模块、Fluent 自封装组件库、颜色 / 字号 / 间距规范。跨项目通用 —— 一次搭好就放着用，只有底层组件升级时才同步。',
  },
];

// 4 阶段 × 3 层 矩阵
const stagesAxisEN = [
  { key: 'pm', short: 'Requirements', sub: 'PM' },
  { key: 'design', short: 'Design', sub: 'Designer' },
  { key: 'eng', short: 'Code', sub: 'Engineer' },
  { key: 'review', short: 'Review', sub: 'Reviewer' },
] as const;

const stagesAxisZH = [
  { key: 'pm', short: '需求分析', sub: 'PM' },
  { key: 'design', short: '方案设计', sub: 'Designer' },
  { key: 'eng', short: '代码生成', sub: 'Engineer' },
  { key: 'review', short: '设计审查', sub: 'Reviewer' },
] as const;

type StageKey = 'pm' | 'design' | 'eng' | 'review';
type LayerRow = { code: string; cells: Partial<Record<StageKey, string[] | null>> };

const matrixEN: LayerRow[] = [
  {
    code: 'L3',
    cells: {
      pm: ['Industry interview templates', 'Customer personas', 'Compliance checklists'],
      design: ['Product visual rules', 'Style / Figma references', 'Design pattern library'],
      eng: ['Business page templates', 'Private component mappings', 'Data interface contracts'],
      review: ['Brand checks', 'Industry compliance rules', 'Custom scoring dimensions'],
    },
  },
  {
    code: 'L2',
    cells: {
      pm: ['Multi-round questioning to clarify intent', 'Compile into an 8-section Brief', 'User confirms before next stage'],
      design: ['5-step plan from Brief', 'Pick components + token names + reading list', 'Output 12-section Spec + component table'],
      eng: ['Implement code per Spec', 'code-quality-checker scans rules', 'Auto-rewrite on fail'],
      review: ['design-reviewer · 7 dimensions', 'screenshot-analyzer · diff snapshots', 'PASS / FAIL report + fixes'],
    },
  },
  {
    code: 'L1',
    cells: {
      pm: null,
      design: ['Pick: m365-admin → design-system → Fluent', 'Tag tokens by name in the Spec', 'Read: 9 design reference docs'],
      eng: ['Read component docs listed in Spec', 'Write strictly to documented props', 'Token names only — no raw values'],
      review: null,
    },
  },
];

const matrixZH: LayerRow[] = [
  {
    code: 'L3',
    cells: {
      pm: ['行业问询模板', '客户 persona / 画像', '合规检查清单'],
      design: ['产品视觉规范', '风格 / Figma 参考', '设计 pattern 库'],
      eng: ['业务页面模板', '私有组件映射', '数据接口规范'],
      review: ['品牌专项检查', '行业合规规则', '自定义评分维度'],
    },
  },
  {
    code: 'L2',
    cells: {
      pm: ['多轮提问澄清模糊需求', '整理成 8 段需求文档', '用户确认后进入下一阶段'],
      design: ['5 步把需求拆成可执行方案', '选组件 + 标颜色字号 + 列必读文档', '产出 12 段方案文档 + 完整组件清单'],
      eng: ['按方案实现页面代码', 'code-quality-checker 扫规范', '不通过自动重写'],
      review: ['design-reviewer 跑 7 维度', 'screenshot-analyzer 比对截图', 'PASS / FAIL 报告 + 修复建议'],
    },
  },
  {
    code: 'L1',
    cells: {
      pm: null,
      design: ['选组件: m365-admin → design-system → Fluent', '在方案里写 token 名', '查规范: 9 份设计文档'],
      eng: ['读: 方案列出的组件文档', '写: 照文档参数（不凭记忆）', '约束: 用 token 名（不写颜色/字号 数值）'],
      review: null,
    },
  },
];

const keyInsightEN = {
  label: 'Why this matters',
  title: 'Stage responsibility determines layer consumption.',
  body: 'Requirements should not pick components. Review should not rewrite code. If they did, the stages would blur. The framework only lets Design and Engineering — the two stages that actually touch a page — consume the L1 foundation. PM and Review stay in the abstract layer: one decides "the right thing," the other asks "did we do it right?" This is why we split skills by stage in the first place.',
};

const keyInsightZH = {
  label: '为什么这样切',
  title: '阶段职责决定层级消费。',
  body: '需求阶段不该挑组件，审查阶段不该改代码。如果需求阶段开始挑组件、代码阶段又回头改需求 —— 阶段就糊了。框架把 L1 底座只下放给"方案设计"和"代码生成"这两个真正动手做页面的阶段。"需求分析"和"设计审查"留在抽象层 —— 一个负责"做对的事"，一个负责"事做对了吗"。这就是按阶段拆 skill 的根本原因。',
};

// 工作流前后对比 —— 横向流程图
type FlowIcon =
  | 'word'
  | 'figma'
  | 'teams'
  | 'vscode'
  | 'github'
  | 'ai'
  | 'storybook';
type FlowNode = { role: string; title: string; note: string; icon: FlowIcon; toolLabel: string };

const beforeFlowEN: FlowNode[] = [
  { role: 'PM', title: 'Requirements doc', note: 'Separate file', icon: 'word', toolLabel: 'Word' },
  { role: 'Designer', title: 'Open new file', note: 'From scratch each project', icon: 'figma', toolLabel: 'Figma' },
  { role: 'Align', title: 'Back-and-forth', note: 'Comments · screenshots', icon: 'teams', toolLabel: 'Teams' },
  { role: 'Handoff', title: 'Figma link', note: 'Drop link to engineer', icon: 'figma', toolLabel: 'Figma → ✉' },
  { role: 'Engineer', title: 'Rewrite as code', note: 'Page rebuilt from scratch', icon: 'vscode', toolLabel: 'VS Code' },
];

const beforeFlowZH: FlowNode[] = [
  { role: 'PM', title: '需求文档', note: '单独文件', icon: 'word', toolLabel: 'Word' },
  { role: '设计师', title: '打开新文件', note: '每个项目从零开始', icon: 'figma', toolLabel: 'Figma' },
  { role: '对齐', title: '反复同步', note: '评论 · 截图', icon: 'teams', toolLabel: 'Teams' },
  { role: '交付', title: 'Figma 链接', note: '丢给工程师', icon: 'figma', toolLabel: 'Figma → ✉' },
  { role: '工程师', title: '重写代码', note: '从零再写一遍', icon: 'vscode', toolLabel: 'VS Code' },
];

const afterFlowEN: FlowNode[] = [
  { role: 'PM', title: 'Brief in repo', note: 'docs/mads/briefs/', icon: 'github', toolLabel: 'GitHub' },
  { role: 'Designer', title: 'Skills + refs', note: 'Custom skill, same repo', icon: 'vscode', toolLabel: 'VS Code · Copilot' },
  { role: 'AI', title: 'Generate + iterate', note: 'Spec → code → review', icon: 'vscode', toolLabel: 'VS Code · Copilot' },
  { role: 'Branch', title: 'Auto-deploy preview', note: 'Push → branch URL', icon: 'github', toolLabel: 'GitHub Actions' },
  { role: 'Engineer', title: 'Read or reuse', note: 'Code already exists', icon: 'vscode', toolLabel: 'VS Code' },
];

const afterFlowZH: FlowNode[] = [
  { role: 'PM', title: '仓库内 Brief', note: 'docs/mads/briefs/', icon: 'github', toolLabel: 'GitHub' },
  { role: '设计师', title: 'Skill + References', note: '同一 repo · 自定义 skill', icon: 'vscode', toolLabel: 'VS Code · Copilot' },
  { role: 'AI', title: '生成与迭代', note: 'Spec → 代码 → 审查', icon: 'vscode', toolLabel: 'VS Code · Copilot' },
  { role: '分支', title: '自动部署预览', note: 'Push → 分支 URL', icon: 'github', toolLabel: 'GitHub Actions' },
  { role: '工程师', title: '读或复用', note: '代码已经存在', icon: 'vscode', toolLabel: 'VS Code' },
];

const outcomesMetaEN = [
  {
    number: '01',
    tag: 'Adopted',
    title: 'Multi-product extensibility — one framework, multiple vocabularies',
    detail:
      'Adding a new product (Copilot, BizChat) does not require rewriting the framework. The team writes its component library, clones the Designer/Engineer skill template, points at the new paths — and the same orchestrator, PM skill and reviewer keep working.',
  },
  {
    number: '02',
    tag: 'Live',
    title: 'Auditable, role-aware handoffs',
    detail:
      'What used to be a long chat thread is now three small files: Brief, Spec, Review. Each role consumes the file the previous role wrote. Branch previews are auto-published, decisions are versioned, and a teammate can pick up the project days later without re-reading the conversation.',
  },
];

const outcomesMetaZH = [
  {
    number: '01',
    tag: '已落地',
    title: '多产品复用 —— 一套框架，多种词汇表',
    detail:
      '新接入一个产品（Copilot、BizChat）不需要重写框架。团队写组件库、复制 Designer/Engineer skill 模板、把路径指向新库 —— 同一个 orchestrator、PM skill、审查器照常工作。',
  },
  {
    number: '02',
    tag: '上线',
    title: '角色清晰、可审计的交接',
    detail:
      '过去要在一长串对话里翻找的内容，现在落到三份小文件：Brief、Spec、Review。每个角色消费上一个角色写下的文件。分支预览自动发布，决策有版本，几天后同事接手也无需回读对话。',
  },
];

// -------------------- 流程图工具图标 --------------------

function ToolIcon({ name }: { name: FlowIcon }) {
  const tile = (bg: string, content: React.ReactNode, borderColor?: string) => (
    <div
      className="w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold shrink-0 shadow-sm"
      style={{ background: bg, border: borderColor ? `1px solid ${borderColor}` : undefined }}
    >
      {content}
    </div>
  );

  switch (name) {
    case 'figma':
      // 官方 Figma 五色 logo
      return (
        <div className="w-11 h-11 rounded-lg bg-[#1A1A1A] flex items-center justify-center shrink-0 shadow-sm">
          <svg viewBox="0 0 38 57" className="w-5 h-7" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
            <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
            <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
            <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
            <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
          </svg>
        </div>
      );
    case 'word':
      return tile('#2B579A', <span className="text-base">W</span>);
    case 'teams':
      return tile('#5059C9', <span className="text-base">T</span>);
    case 'vscode':
      return tile('#0078D4', <span className="font-mono text-[11px] tracking-tight">{'</>'}</span>);
    case 'github':
      return (
        <div className="w-11 h-11 rounded-lg bg-[#0d1117] border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
          </svg>
        </div>
      );
    case 'ai':
      return (
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
          style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)' }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1l1.5 4.5L18 7l-4.5 1.5L12 13l-1.5-4.5L6 7l4.5-1.5z" />
            <path d="M19 14l.7 2.2L22 17l-2.3.8L19 20l-.7-2.2L16 17l2.3-.8z" opacity="0.85" />
            <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z" opacity="0.7" />
          </svg>
        </div>
      );
    case 'storybook':
      return (
        <div className="w-11 h-11 rounded-lg bg-[#FF4785] flex items-center justify-center shrink-0 shadow-sm">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3h13a1 1 0 0 1 1 1v17l-2.5-2L14 21l-2.5-2-2.5 2-2.5-2L4 21V4a1 1 0 0 1 1-1z" />
            <path d="M9 7h5v1.5H9z" fill="#FF4785" />
            <path d="M9 10h7v1.5H9z" fill="#FF4785" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

export default function AINativeDesignFrameworkPage() {
  const { lang, t } = useLanguage();

  const skills = lang === 'zh' ? skillsZH : skillsEN;
  const stages = lang === 'zh' ? stagesZH : stagesEN;
  const constraints = lang === 'zh' ? constraintsZH : constraintsEN;
  const outcomes = lang === 'zh' ? outcomesMetaZH : outcomesMetaEN;
  const layers = lang === 'zh' ? layersZH : layersEN;
  const stagesAxis = lang === 'zh' ? stagesAxisZH : stagesAxisEN;
  const matrix = lang === 'zh' ? matrixZH : matrixEN;
  const keyInsight = lang === 'zh' ? keyInsightZH : keyInsightEN;
  const beforeFlow = lang === 'zh' ? beforeFlowZH : beforeFlowEN;
  const afterFlow = lang === 'zh' ? afterFlowZH : afterFlowEN;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.96]);

  // Lightbox：点击图片放大查看
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <FluidBackground />
      <Navigation />

      <main ref={containerRef} className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('All Projects', '所有项目')}
            </Link>
          </motion.div>

          {/* ── Hero ─────────────────────────────────────────────── */}
          <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="mb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
                <span className="text-sm uppercase tracking-wider text-gray-400">
                  {t('Workflow Architecture · Internal Tool', '工作流架构 · 内部工具')}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
                AI-Native Design
                <br />
                <span className="text-blue-400">Framework</span>
              </h1>

              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light italic">
                {t(
                  '"Change how we work."',
                  '"重新设计我们的工作方式。"'
                )}
              </p>

              <div className="flex flex-wrap gap-12 mb-16">
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">
                    {t('Year', '年份')}
                  </div>
                  <div className="text-white text-lg">2026</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">
                    {t('Role', '角色')}
                  </div>
                  <div className="text-white text-lg">
                    {t('Architecture · Design · Engineering', '架构 · 设计 · 工程')}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 mb-2 text-sm uppercase tracking-wider">
                    {t('Stack', '技术栈')}
                  </div>
                  <div className="text-white text-lg">
                    React · Fluent UI · Storybook · GitHub Copilot · GitHub Actions
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                {t(
                  'A page-generation framework that decouples process from product. PM, Designer, Engineer, Reviewer and Modifier each live in their own skill — connected by structured files instead of a chat thread.',
                  '一个把流程与产品解耦的页面生成框架。PM、设计师、工程师、审查者、修改员各自住在独立的 skill 里，靠结构化文件而不是对话连接。'
                )}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Goal ─────────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">01</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Goal', '目标')}</h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              </div>
              <div className="md:col-span-8 space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  {t(
                    'MADS UI Agent showed that a single skill could turn a screenshot into a faithful M365 Admin Center page. That was the small win.',
                    'MADS UI Agent 证明了：一条 skill 就能把一张截图变成符合 M365 Admin Center 规范的页面。这是第一个小胜。'
                  )}
                </p>
                <p>
                  {t(
                    'The bigger problem sat one layer up. A page is the end of a workflow that runs PM → Designer → Engineer → Review. We were doing all of it inside one long chat. The team could not scale it to another product, another designer, or another week.',
                    '更大的问题在上一层。一个页面是 PM → 设计师 → 工程师 → 审查 这条流程的产出。我们当时把所有角色都塞在同一段对话里。结果就是 —— 换一个产品、换一个设计师、过一周再回来，全都接不上。'
                  )}
                </p>
                <p>
                  {t(
                    'MADS Workplace is a rebuild of that workflow. Not a smarter prompt — a framework where each role has its own skill, its own input file, its own output file, and an orchestrator that routes between them.',
                    'MADS Workplace 是对这套工作流的重构。不是写一个更聪明的 prompt，而是搭一个框架 —— 每个角色一个 skill，一份输入文件，一份输出文件，再用 orchestrator 在它们之间路由。'
                  )}
                </p>
              </div>
            </div>
          </motion.section>

          {/* ── Outcomes ─────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">02</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Outcomes', '成果')}</h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((o, i) => (
                <motion.div
                  key={o.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/25 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="text-3xl font-bold text-white/20 mb-5">{o.number}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-2.5 py-0.5 bg-blue-500/10 rounded-full text-xs text-blue-300 border border-blue-500/20">
                      {o.tag}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                    {o.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">{o.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Constraints (V0 痛点) ────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">03</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('What V0 got wrong', 'V0 错在哪里')}
                </h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
                <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                  {t(
                    'Three sharp edges from the monolithic skill — each one a hint that the right unit was a framework, not a prompt.',
                    '单体 skill 的三个痛点 —— 每一个都在提醒：正确的颗粒度不是 prompt，而是框架。'
                  )}
                </p>
              </div>
              <div className="md:col-span-8 space-y-4">
                {constraints.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="font-mono text-sm text-white/30 tabular-nums pt-1">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {c.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">{c.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── Before vs After workflow ─────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">04</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('From handoff to shared repo', '从文件交接，到同一个 repo')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              <p className="text-gray-400 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
                {t(
                  'The old workflow ran on hand-offs between tools and roles. The new one runs on the same repo — AI fills in the seams.',
                  '过去工作流靠工具之间、角色之间的交接驱动。现在所有角色在同一个 repo 工作，AI 把中间的缝隙填上。'
                )}
              </p>
            </div>

            {/* 横向流程图：上 Before / 下 After */}
            <div className="space-y-8 md:space-y-10">
              {/* Before row */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-4 flex-wrap">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      {t('Before', '之前')}
                    </span>
                    <span className="text-sm text-gray-400">
                      {t('Doc · Figma · Code', '文档 · Figma · 代码')}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    {t('Tool-to-tool handoff', '工具间交接')}
                  </span>
                </div>
                <div className="overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0">
                  <div className="flex items-stretch gap-2 min-w-[920px]">
                    {beforeFlow.map((node, i) => (
                      <div key={i} className="flex items-stretch flex-1 min-w-[160px]">
                        <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.025] p-4 md:p-5 flex flex-col">
                          <div className="flex items-center gap-3 mb-3">
                            <ToolIcon name={node.icon} />
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 leading-tight">
                                {node.role}
                              </p>
                              <p className="text-[11px] text-gray-600 leading-tight mt-0.5 truncate">
                                {node.toolLabel}
                              </p>
                            </div>
                          </div>
                          <h4 className="text-sm md:text-base font-semibold text-white leading-snug mb-1.5">
                            {node.title}
                          </h4>
                          <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mt-auto">
                            {node.note}
                          </p>
                        </div>
                        {i < beforeFlow.length - 1 && (
                          <div className="flex items-center justify-center px-2 md:px-3 text-gray-600 text-2xl select-none">
                            →
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider with VS label */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-0 h-px bg-white/10" />
                <span className="relative bg-[#0a0a0a] px-4 text-[10px] uppercase tracking-[0.25em] text-gray-500">
                  vs
                </span>
              </div>

              {/* After row */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-4 flex-wrap">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-blue-300">
                      {t('After', '现在')}
                    </span>
                    <span className="text-sm text-white">
                      {t('One repo · AI-augmented', '同一个 repo · AI 协作')}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-blue-300/70">
                    {t('Shared source of truth', '共享单一来源')}
                  </span>
                </div>
                <div className="overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0">
                  <div className="flex items-stretch gap-2 min-w-[920px]">
                    {afterFlow.map((node, i) => (
                      <div key={i} className="flex items-stretch flex-1 min-w-[160px]">
                        <div className="flex-1 rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500/[0.08] to-blue-500/[0.02] p-4 md:p-5 flex flex-col">
                          <div className="flex items-center gap-3 mb-3">
                            <ToolIcon name={node.icon} />
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] uppercase tracking-[0.18em] text-blue-300/90 leading-tight">
                                {node.role}
                              </p>
                              <p className="text-[11px] text-blue-200/70 leading-tight mt-0.5 truncate">
                                {node.toolLabel}
                              </p>
                            </div>
                          </div>
                          <h4 className="text-sm md:text-base font-semibold text-white leading-snug mb-1.5">
                            {node.title}
                          </h4>
                          <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed mt-auto">
                            {node.note}
                          </p>
                        </div>
                        {i < afterFlow.length - 1 && (
                          <div className="flex items-center justify-center px-2 md:px-3 text-blue-300/70 text-2xl select-none">
                            →
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-500 leading-relaxed max-w-3xl">
              {t(
                'Same five steps. The difference is where each artifact lives — and whether the next role can pick it up without re-doing the previous one\'s work.',
                '同样五步。差别在于每一步的产物住在哪里 —— 以及下一个角色能不能直接接手，而不是把前一步再做一遍。'
              )}
            </p>

            {/* 两张实际产物截图：Storybook + GitHub Wiki（点击放大） */}
            <div className="mt-12 grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  src: `${basePath}/images/ai-native-design-framework/storybook page.png`,
                  alt: t('Storybook deployed branch preview', 'Storybook 分支预览'),
                  kicker: t('Storybook · Live preview', 'Storybook · 在线预览'),
                  caption: t(
                    'Pages built by the agent run as live Storybook stories, with the actual component library backing them.',
                    'Agent 生成的页面以 Storybook story 形式实时运行，背后是真实组件库。'
                  ),
                },
                {
                  src: `${basePath}/images/ai-native-design-framework/github wiki.png`,
                  alt: t('GitHub Wiki auto-updated branch index', 'GitHub Wiki 自动更新的分支索引'),
                  kicker: t('GitHub Wiki · Auto index', 'GitHub Wiki · 自动索引'),
                  caption: t(
                    'Every branch push updates a Wiki index — one click to the latest preview, no hand-off message needed.',
                    '每次分支推送都会更新 Wiki 索引——一键跳到最新预览，不需要单独发消息交接。'
                  ),
                },
              ].map((shot, i) => (
                <figure
                  key={i}
                  className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/25 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: shot.src, alt: shot.alt })}
                    aria-label={t('Open full-size image', '查看大图')}
                    className="block w-full aspect-[16/10] overflow-hidden cursor-zoom-in relative"
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs uppercase tracking-[0.25em] bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                        {t('Click to zoom', '点击放大')}
                      </span>
                    </span>
                  </button>
                  <figcaption className="px-5 py-4 border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300/80 mb-1">
                      {shot.kicker}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.section>

          {/* ── After it landed (feedback + measured speed-up) ────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">05</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('After it landed', '落地之后')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              <p className="text-gray-400 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
                {t(
                  'Once the framework was in the team\'s daily flow — qualitative signals from PM and engineering, and the speed-ups we could actually measure.',
                  '框架进入团队日常之后 —— PM 与工程师的反馈，以及实际跑下来的提速。'
                )}
              </p>
            </div>

            {/* Voices from the team */}
            <div className="mb-14">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-6">
                {t('Voices from the team', '对新工作流的反馈')}
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {/* PM quote */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-7 md:p-9 hover:border-white/25 transition-colors">
                  <div className="text-blue-300/60 text-5xl leading-none mb-4 font-serif select-none">“</div>
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8">
                    {t(
                      <>Faster iteration, easier to understand, smoother communication —{' '}
                        <span className="text-blue-300 font-medium">PMs can now participate in many design decisions</span>.</>,
                      <>迭代更快，理解更容易，沟通更方便 ——{' '}
                        <span className="text-blue-300 font-medium">PM 也能参与很多设计环节</span>。</>
                    )}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 text-[11px] font-semibold tracking-wider">
                      PM
                    </div>
                    <div>
                      <p className="text-sm text-white">{t('Product Manager', '产品经理')}</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Product Manager</p>
                    </div>
                  </div>
                </div>

                {/* Engineer quote */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-7 md:p-9 hover:border-white/25 transition-colors">
                  <div className="text-emerald-300/60 text-5xl leading-none mb-4 font-serif select-none">“</div>
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8">
                    {t(
                      <>Component styles, responsive layout, interaction logic — all visible right in the live page.{' '}
                        <span className="text-emerald-300 font-medium">What you see is what you get</span>, no extra mental translation.</>,
                      <>组件样式、响应式布局、页面操作的交互逻辑，通过动态网页直接看 ——{' '}
                        <span className="text-emerald-300 font-medium">所见即所得</span>，省了很多理解上的功夫。</>
                    )}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white text-sm font-mono">
                      {'</>'}
                    </div>
                    <div>
                      <p className="text-sm text-white">{t('Engineer', '工程师')}</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Measured speed-up */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-6">
                {t('Measured speed-up', '新工作流的成果')}
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                {/* Stat 1: prototype */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-7 md:p-9 text-center hover:border-white/25 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-7">
                    {t('Time to prototype', '出设计 Prototype')}
                  </p>
                  <div className="flex items-baseline justify-center gap-3 mb-6 whitespace-nowrap">
                    <span className="text-2xl md:text-3xl text-gray-500 line-through font-light tabular-nums">
                      {t('1–2 h', '1–2 小时')}
                    </span>
                    <span className="text-gray-600 text-xl">→</span>
                    <span className="font-bold text-white tabular-nums">
                      <span className="text-4xl md:text-5xl">30</span>
                      <span className="text-2xl md:text-3xl ml-1.5">{t('min', '分钟')}</span>
                    </span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium">{t('~3× speed-up', '约 3× 提速')}</p>
                </div>

                {/* Stat 2: meeting */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-7 md:p-9 text-center hover:border-white/25 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-7">
                    {t('Per meeting', '单次 Meeting')}
                  </p>
                  <div className="flex items-baseline justify-center gap-3 mb-6 whitespace-nowrap">
                    <span className="text-2xl md:text-3xl text-gray-500 line-through font-light tabular-nums">
                      {t('30 min', '30 分钟')}
                    </span>
                    <span className="text-gray-600 text-xl">→</span>
                    <span className="font-bold text-white tabular-nums">
                      <span className="text-4xl md:text-5xl">15</span>
                      <span className="text-2xl md:text-3xl ml-1.5">{t('min', '分钟')}</span>
                    </span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium">{t('Comms ×2', '沟通效率 ×2')}</p>
                </div>

                {/* Stat 3: PM 0→1 */}
                <div className="rounded-2xl bg-blue-500/[0.05] border border-blue-400/30 p-7 md:p-9 text-center hover:border-blue-400/50 transition-colors">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-blue-200/80 mb-7">
                    {t('PM-led', 'PM 主导')}
                  </p>
                  <div className="flex items-baseline justify-center gap-3 mb-6">
                    <span className="text-4xl md:text-5xl text-gray-500 font-light tabular-nums">0</span>
                    <span className="text-gray-600 text-xl">→</span>
                    <span className="text-4xl md:text-5xl font-bold text-blue-300 tabular-nums">1</span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium">
                    {t('Argue with mockups · ship 0→1 features', '用设计图阐述观点 · 做 0→1 功能')}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Three layers, four stages (Project Vision) ─────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">06</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('Three layers, four stages', '三层骨架，四阶段流转')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              <p className="text-gray-400 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
                {t(
                  'Not a tool for making pages — a reusable design-collaboration framework. The foundation is shared, the process is fixed, the extensions are open.',
                  '它不是一个做页面的工具，而是一个可被复用的设计协作框架 —— 底座共享、流程固化、扩展开放。'
                )}
              </p>
              <p className="text-sm md:text-base text-blue-300/80 mt-4 italic">
                {t(
                  'Foundation is the shelf, process is the procedure, extensions are the recipes.',
                  '底座是货架，流程是工序，扩展是配方。'
                )}
              </p>
            </div>

            {/* 三层骨架卡片 */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-12">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`relative rounded-2xl border p-6 md:p-7 ${
                    layer.code === 'L2'
                      ? 'border-blue-400/40 bg-blue-500/[0.05]'
                      : 'border-white/10 bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-semibold tracking-[0.18em] ${
                        layer.code === 'L2' ? 'text-blue-300' : 'text-white/60'
                      }`}
                    >
                      {layer.code}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                      {layer.owner}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                    {layer.name}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-blue-200/90 mb-3 leading-snug">
                    {layer.point}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">{layer.body}</p>
                </motion.div>
              ))}
            </div>

            {/* 阶段 × 层级 矩阵 */}
            <div className="bg-white/[0.025] border border-white/10 rounded-2xl p-5 md:p-8 mb-10 overflow-x-auto">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-5">
                {t('Stage × Layer matrix', '阶段 × 层级 矩阵')}
              </p>
              <div className="min-w-[820px]">
                {/* Stage headers */}
                <div className="grid grid-cols-[80px_repeat(4,1fr)] gap-3 pb-4 mb-2 border-b border-white/10">
                  <div />
                  {stagesAxis.map((stg) => (
                    <div key={stg.key} className="text-center">
                      <div className="text-sm md:text-base font-semibold text-white">
                        {stg.short}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-gray-500 mt-1">
                        {stg.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Layer rows */}
                {matrix.map((row, rowIdx) => (
                  <div
                    key={row.code}
                    className={`grid grid-cols-[80px_repeat(4,1fr)] gap-3 py-4 ${
                      rowIdx !== matrix.length - 1 ? 'border-b border-white/[0.06]' : ''
                    } ${row.code === 'L2' ? 'bg-blue-500/[0.04] rounded-lg my-1' : ''}`}
                  >
                    <div className="flex flex-col justify-center px-2">
                      <span
                        className={`font-mono text-sm font-semibold tracking-[0.15em] ${
                          row.code === 'L2' ? 'text-blue-300' : 'text-white/50'
                        }`}
                      >
                        {row.code}
                      </span>
                    </div>
                    {stagesAxis.map((stg) => {
                      const cell = row.cells[stg.key as StageKey];
                      if (cell === null || cell === undefined) {
                        return (
                          <div
                            key={stg.key}
                            className="flex items-center justify-center text-xs text-gray-600 italic"
                          >
                            <span className="text-gray-700 mr-1.5">✗</span>
                            {t('not invoked', '不调用')}
                          </div>
                        );
                      }
                      return (
                        <ul
                          key={stg.key}
                          className="space-y-1.5 text-[12px] md:text-[13px] text-gray-300 leading-relaxed"
                        >
                          {cell.map((b, i) => (
                            <li key={i} className="flex gap-1.5">
                              <span className="text-gray-600 select-none flex-shrink-0">·</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* 关键洞察 callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-500/[0.08] to-blue-500/[0.02] border border-blue-400/30 rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-blue-300/80 mb-3">
                {keyInsight.label}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                {keyInsight.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {keyInsight.body}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Skill inventory ─────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">07</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('Skill inventory', 'Skill 清单')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              <p className="text-gray-400 mt-6 max-w-2xl text-base leading-relaxed">
                {t(
                  'Six stage skills plus two tool skills. Numbered along both axes so the orchestrator can dispatch by stage and by product without any string matching.',
                  '六个阶段 skill + 两个工具 skill。两个轴都用编号，orchestrator 不靠字符串匹配就能按阶段、按产品分发。'
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.code}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-start gap-5 bg-white/[0.025] border border-white/10 rounded-xl p-5 hover:border-white/25 transition-colors"
                >
                  <div className="font-mono text-base font-semibold text-blue-300 tabular-nums whitespace-nowrap pt-0.5">
                    {s.code}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 flex-wrap mb-1.5">
                      <h3 className="text-base md:text-lg font-semibold text-white">{s.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 border border-white/10 rounded-full px-2 py-0.5">
                        {s.scope}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{s.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-white/[0.02] border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-4">
                {t('Plus three subagents', '另有三个子 agent')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm leading-relaxed">
                <div>
                  <p className="text-white font-medium mb-1.5">screenshot-analyzer</p>
                  <p className="text-gray-400">
                    {t(
                      'Reads PNG/JPEG → structured JSON. Keeps base64 out of the main thread.',
                      '读 PNG/JPEG → 结构化 JSON。base64 不进主线程。'
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1.5">design-reviewer</p>
                  <p className="text-gray-400">
                    {t(
                      '7-dimension PASS/FAIL audit against Spec and Storybook URL.',
                      '对照 Spec 与 Storybook URL，做 7 维度 PASS/FAIL 审查。'
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1.5">code-quality-checker</p>
                  <p className="text-gray-400">
                    {t(
                      'Hardcoded color/value grep + `tsc --noEmit`. Emits JSON of violations.',
                      '硬编码颜色/值 grep + `tsc --noEmit`。输出违规 JSON。'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Workflow ─────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">08</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('Workflow in practice', '实际工作流')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
              <p className="text-gray-400 mt-6 max-w-2xl text-base leading-relaxed">
                {t(
                  'Every stage writes one file. The next stage reads that file. No global memory required.',
                  '每个阶段都只写一份文件。下一个阶段读这份文件。不依赖全局记忆。'
                )}
              </p>
            </div>

            {/* File bus tree */}
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 overflow-x-auto">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-5">
                {t('File handoff structure', '文件交接结构')}
              </p>
              <div className="font-mono text-xs md:text-sm leading-loose text-gray-300 whitespace-pre">
                <div>
                  <span className="text-blue-300">docs/mads/</span>
                </div>
                {[
                  { name: 'briefs/', note: t('PM output · read by Designer', 'PM 产出 · 设计师读取') },
                  { name: 'specs/', note: t('Designer output · read by Engineer', '设计师产出 · 工程师读取') },
                  { name: 'screenshots/', note: t('screenshot-analyzer JSON', 'screenshot-analyzer 的 JSON') },
                  { name: 'reviews/', note: t('design-reviewer report', 'design-reviewer 的报告') },
                  { name: 'quality-checks/', note: t('code-quality-checker report', 'code-quality-checker 的报告') },
                  { name: 'review-decisions/', note: t('checkpoint audit trail', '检查点决策记录') },
                ].map((row, i, arr) => (
                  <div key={row.name} className="flex flex-wrap gap-x-3">
                    <span className="text-gray-500">{i === arr.length - 1 ? '└──' : '├──'}</span>
                    <span className="text-blue-200 min-w-[150px]">{row.name}</span>
                    <span className="text-gray-500 text-[11px] md:text-xs italic">
                      ← {row.note}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mt-6">
                {t(
                  'Any stage can resume from disk — pipelines span sessions, any stage can be triggered standalone if its prerequisite file exists.',
                  '任意阶段都能从磁盘恢复 —— 流水线可以跨多次对话，只要前置文件存在，任何阶段都能独立触发。'
                )}
              </p>
            </div>

            <div className="relative">
              {/* connector line */}
              <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/40 via-white/15 to-transparent" />
              <div className="space-y-6">
                {stages.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative flex gap-6"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-blue-500/10 border border-blue-400/40 flex items-center justify-center font-mono text-xs tabular-nums text-blue-200">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-7">
                      <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white">{s.label}</h3>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {t('owner', '负责角色')}: {s.owner}
                        </span>
                      </div>
                      <code className="block text-xs text-blue-200/90 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 mb-4 font-mono break-all">
                        {s.fileExample}
                      </code>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── Branch & Deploy ──────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-40"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 md:sticky md:top-32 self-start">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">09</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('Branch & deploy', '分支与部署')}
                </h2>
                <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
                <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                  {t(
                    'Each project lives on its own branch. Every push gets a preview URL. Maintainers protect main; everyone else moves fast.',
                    '每个项目跑在自己的分支上。每次 push 都自动生成预览链接。维护者守住 main；其他人在分支里全速前进。'
                  )}
                </p>
              </div>

              <div className="md:col-span-8 space-y-5">
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-4">
                    {t('Branch model', '分支模型')}
                  </p>
                  <ul className="space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
                    <li className="flex gap-3">
                      <code className="flex-shrink-0 text-blue-200/90 font-mono text-xs bg-white/[0.04] border border-white/[0.08] rounded px-2 py-0.5 self-start">
                        main
                      </code>
                      <span>
                        {t(
                          'Maintainers only · skill framework, libs, build config, core stories.',
                          '只维护者改 · skill 框架、组件库、构建配置、核心 story。'
                        )}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <code className="flex-shrink-0 text-blue-200/90 font-mono text-xs bg-white/[0.04] border border-white/[0.08] rounded px-2 py-0.5 self-start">
                        project/&lt;alias&gt;/&lt;name&gt;
                      </code>
                      <span>
                        {t(
                          'PM / Designer playground · isolated to `src/stories/Design Explorations/<name>/`.',
                          'PM / 设计师的工作分支 · 改动限定在 `src/stories/Design Explorations/<name>/`。'
                        )}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-4">
                    {t('Push → preview', '推送 → 预览')}
                  </p>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                    {t(
                      'GitHub Actions builds Storybook, deploys to gh-pages under the branch name, posts the preview URL on the commit, and updates the Wiki index of live projects.',
                      'GitHub Actions 构建 Storybook，按分支名部署到 gh-pages，把预览 URL 评论到对应 commit 下，并更新 Wiki 里"在线项目"索引。'
                    )}
                  </p>
                  <div className="font-mono text-xs md:text-sm text-blue-200/85 bg-black/30 border border-white/[0.08] rounded-lg p-4 leading-relaxed overflow-x-auto">
                    <div className="text-gray-500">$ git push origin project/yalin/copilot-billing</div>
                    <div className="mt-2 text-gray-400">
                      → build storybook
                      <br />→ deploy → <span className="text-blue-300">gh-pages.io/project-yalin-copilot-billing/</span>
                      <br />→ comment on HEAD commit
                      <br />→ refresh Wiki index
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Outlook ──────────────────────────────────────────── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-32"
          >
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 block">10</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('Outlook', '展望')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-white/50 to-transparent" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-4">
                  {t('Now', '当前')}
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  {t(
                    'MADS is the live reference implementation. Copilot has its product axis scaffolded — waiting on the component library hand-off to activate the Designer/Engineer skills.',
                    'MADS 是上线的参考实现。Copilot 的产品轴已经搭好骨架 —— 在等组件库交接，就能激活对应的 Designer/Engineer skill。'
                  )}
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-4">
                  {t('Next', '下一步')}
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  {t(
                    'Treat the framework itself as the product: codify the Brief / Spec schemas, evolve the review subagents, and open the contributor path so other teams can add their product without touching the orchestrator.',
                    '把框架本身当成产品来迭代：固化 Brief / Spec 的 schema，演进审查类子 agent，开放贡献路径 —— 其他团队能在不动 orchestrator 的前提下接入自己的产品。'
                  )}
                </p>
              </div>
            </div>
          </motion.section>

          {/* ── Footer nav ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-6 md:justify-between md:items-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('All Projects', '所有项目')}
            </Link>
            <Link
              href="/projects/mads-ui-simplified"
              className="group inline-flex items-center gap-3 text-white"
            >
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  {t('Related case', '相关案例')}
                </div>
                <div className="text-base font-semibold group-hover:text-blue-300 transition-colors">
                  MADS UI Agent →
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label={t('Close', '关闭')}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <motion.img
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

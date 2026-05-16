'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import Threads from '@/components/effects/Threads';

type Lang = 'en' | 'zh';

type Bullet = {
  kind?: 'project' | 'collab';
  content: React.ReactNode;
};

type InternNote = {
  period: string;
  location: string;
  bullets: Bullet[];
};

type Role = {
  product?: string;
  period: string;
  title: string;
  location?: string;
  bullets: Bullet[];
  intern?: InternNote;
};

type Company = {
  company: string;
  year: string;
  span: string;
  location: string;
  roles: Role[];
};

type SchoolDegree = { title: string; major: string; note?: string };
type School = {
  year: string;
  span: string;
  school: string;
  location: string;
  degrees: SchoolDegree[];
};

type SkillGroup = { title: string; items: string[] };

type Award = {
  year: string;
  span: string;
  title: string;
  result: string;
  location: string;
  description: string;
};

// 高亮短语：仅用于每条 bullet 中最关键的 1-2 个 ownership 动词或量化数据
function Hi({ children }: { children: React.ReactNode }) {
  return <strong className="text-white font-semibold">{children}</strong>;
}

// =================== 中文数据 ===================

const experienceZH: Company[] = [
  {
    company: 'Microsoft',
    year: '2022-2026',
    span: '2022 — 至今',
    location: '上海, 中国',
    roles: [
      {
        product: 'Copilot Connector',
        period: '2025 — 至今',
        title: '产品设计',
        bullets: [
          {
            kind: 'project',
            content: (
              <>
                <Hi>推动 20+ Copilot Connectors 跨 4 个发布波次准时上线 public preview</Hi>；同期主导设计并交付 Connector Setup OAuth 2.0 简化版至 GA，把 setup 时间从数小时缩短至数分钟、<Hi>推动团队 incoming ICM 减半</Hi>；主导 Notification 设计，填补 connector status 长期可见性 gap，解决用户长期痛点。
              </>
            ),
          },
          {
            kind: 'project',
            content: (
              <>
                <Hi>主导 MADS Design Agent 的架构与落地</Hi>，基于 Claude Code 和 GitHub Copilot 框架，把团队设计工作流从 Figma manual 转向 code-first，页面生成时间从数小时缩短至数分钟；架构被多位设计师与 PM 采纳并在 repo 中自建分支，<Hi>从个人探索升级为团队 foundational framework</Hi>。
              </>
            ),
          },
          {
            kind: 'collab',
            content: (
              <>
                <Hi>推动 AI-native 设计实践跨团队扩散</Hi>，与 PM 建立 GitHub branch-based 协作 model 升级 design-engineering handoff；系统性输出 Claude Code 架构与 AI workflow 实践，赋能其他产品设计团队搭建组件库、落地 code-first 设计体系，把个人探索转化为团队 AI transformation 动能。
              </>
            ),
          },
        ],
      },
      {
        product: 'Dynamics 365 Finance',
        period: '2022 — 2025',
        title: '产品设计',
        bullets: [
          {
            kind: 'project',
            content: (
              <>
                <Hi>主导 Modern Bank Reconciliation 端到端体验设计</Hi>，从 wireframe 到高保真覆盖 Bank Statement 到 Reconciliation Worksheet 全流程；上线 preview 14 天内吸引 89 个活跃企业客户试用，推动合作伙伴优先推荐标准方案、替代既有 ISV 付费方案。后续主导设计 Bank Reconciliation Copilot，<Hi>实现 99.8% 匹配准确率</Hi>，代表团队在 Microsoft Business Application Launch Event 面向全球受众完成产品演示。
              </>
            ),
          },
          {
            kind: 'project',
            content: (
              <>
                作为核心设计师交付 D365 Finance Copilot 多场景体验，主导 Customer Summary 等核心模块设计，<Hi>推动 Copilot Summary 累计达成 242K 月活用户</Hi>；同期 <Hi>主导推动 AI 时代下 global 团队产品 home page 的整体设计更新</Hi>，独立完成两个核心 persona 的 Immersive Home Page 设计，联合上下游团队呈现 Source-to-Pay 完整故事，验证 immersive home page 范式在企业场景的商业价值，为后续 global 战略规划奠定基础。
              </>
            ),
          },
          {
            kind: 'collab',
            content: (
              <>
                <Hi>把 research-led design 系统性引入产品与工程协作</Hi>，首次为协作方完整呈现 usability testing 流程与发现，沉淀为 design brief + Figma changelog 的可追溯工作流并被团队持续复用；作为亚太代表深度参与跨欧/美/亚的大规模设计协作，产出面向 AI 时代的可复用体验组件。
              </>
            ),
          },
        ],
        intern: {
          period: '2021.7 — 2021.8',
          location: '上海, 中国',
          bullets: [
            {
              content:
                '洞察 B 端 Tax Service 的业务逻辑，结合用户画像及用户测试反馈，设计 Tax Calculation 复杂功能的引导教程，提升用户初次使用产品时的学习体验，降低学习成本。',
            },
            {
              content:
                '主导区块链金融项目的 Demo 设计，并通过可用性用户测试，验证并优化产品设计。',
            },
          ],
        },
      },
    ],
  },
  {
    company: '传音控股',
    year: '2021',
    span: '2021.5 — 2021.7',
    location: '上海, 中国',
    roles: [
      {
        period: '2021.5 — 2021.7',
        title: '交互设计',
        bullets: [
          {
            content:
              '负责 Tecno 旗舰手机的 AR 名片应用，从 Beta 到上线的交互优化及推进，与产品经理、开发、测试紧密合作；通过 A/B Test 及可用性测试，分析既有设计缺陷，结合交互、视觉、动效，独立设计完成综合优化方案，提升名片填写流程的操作体验。',
          },
          {
            content:
              '通过用户测试和设计走查，优化 Oriamo 智能手表交互设计，定义交互逻辑和视觉呈现标准；综合市场分析和产品体验测试，输出折叠屏手机竞品分析报告。',
          },
        ],
      },
    ],
  },
  {
    company: '上海爱钛技术咨询',
    year: '2020',
    span: '2020.7 — 2021.2',
    location: '上海, 中国',
    roles: [
      {
        period: '2020.7 — 2021.2',
        title: '产品设计',
        bullets: [
          {
            content:
              '通过市场分析和用户调研，归纳用户基本诉求，结合商业模式，对公司 SaaS 产品定立设计策略和设计原则。',
          },
          {
            content:
              '洞察专业用户操作习惯与业务逻辑，重点优化核心交互逻辑及数据可视化展示，并负责从 0 到 1 的设计全流程工作；制定 Web 和小程序端界面实现标准，定义视觉语言和交互设计规范，并输出 Web 端高保真设计图。',
          },
          {
            content:
              '完善设计体系化建设，优化团队工作流程，搭建 Figma 线上组件库，提升 75% 工作效率；以成本意识与目标导向，与产品经理及开发工程师紧密合作，并根据用户测试反映的诉求和倾向，快速优化产品。',
          },
        ],
      },
    ],
  },
];

const educationZH: School[] = [
  {
    year: '2019',
    span: '2019.9 — 2021.12',
    school: '美国密西根大学安娜堡分校',
    location: '安娜堡, 美国',
    degrees: [
      { title: '理学硕士', major: '信息 · 用户体验设计与研究' },
      { title: '理学硕士', major: '设计科学', note: '前 5%' },
    ],
  },
  {
    year: '2015',
    span: '2015.9 — 2019.8',
    school: '上海交通大学 · 交大密西根联合学院',
    location: '上海, 中国',
    degrees: [{ title: '理学学士', major: '机械工程 / 辅修 创业管理', note: '前 20%' }],
  },
];

const skillGroupsZH: SkillGroup[] = [
  {
    title: 'UX 技能',
    items: [
      '网页端设计',
      'App 设计',
      '交互原型设计',
      '设计规范制定与维护',
      '用户调研及需求分析',
      '可用性测试',
      '设计思维',
      '包容性设计',
      'AR/VR',
    ],
  },
  {
    title: '设计工具',
    items: ['Figma', 'Claude Code', 'GitHub Copilot', 'Photoshop', 'Illustrator'],
  },
  { title: '编程技能', items: ['Python', 'HTML+CSS', 'JavaScript', 'Arduino'] },
  { title: '3D 设计', items: ['Solidworks', 'Auto CAD', 'Unigraphic NX', 'Unity'] },
  { title: '语言', items: ['English', '中文'] },
];

const awardsZH: Award[] = [
  {
    year: '2020',
    span: '2020.9 — 10',
    title: 'Adobe 设计挑战',
    result: 'Second Prize',
    location: '安娜堡, 美国',
    description:
      '针对疫情下北美 food bank 人数激增情况，综合运用设计方法，设计线上预定领取食物 App，以消除潜在的社会歧视，优化领取食物救济的流程。',
  },
];

// =================== 英文数据 ===================

const experienceEN: Company[] = [
  {
    company: 'Microsoft',
    year: '2022-2026',
    span: '2022 — Present',
    location: 'Shanghai, China',
    roles: [
      {
        product: 'Copilot Connector',
        period: '2025 — Present',
        title: 'Product Designer',
        bullets: [
          {
            kind: 'project',
            content: (
              <>
                <Hi>Drove 20+ Copilot Connectors to public preview on schedule across 4 release waves</Hi>; led end-to-end design and delivery of the simplified Connector Setup OAuth 2.0 to GA, reducing setup time from hours to minutes and <Hi>halving the team&apos;s incoming ICMs</Hi>; led Notification design to close a long-standing visibility gap in connector status.
              </>
            ),
          },
          {
            kind: 'project',
            content: (
              <>
                <Hi>Led architecture and rollout of MADS Design Agent</Hi> — built on Claude Code and GitHub Copilot frameworks, shifting the team&apos;s design workflow from Figma manual to code-first, cutting page generation from hours to minutes; the architecture was adopted by multiple designers and PMs with their own branches in the repo, <Hi>evolving from personal exploration into a team-wide foundational framework</Hi>.
              </>
            ),
          },
          {
            kind: 'collab',
            content: (
              <>
                <Hi>Spread AI-native design practices across teams</Hi> — established a GitHub branch-based collaboration model with PMs to upgrade design-engineering handoff; systematically shared Claude Code architecture and AI workflow practices, enabling other product design teams to build component libraries and adopt a code-first design system, turning personal exploration into team-wide AI transformation momentum.
              </>
            ),
          },
        ],
      },
      {
        product: 'Dynamics 365 Finance',
        period: '2022 — 2025',
        title: 'Product Designer',
        bullets: [
          {
            kind: 'project',
            content: (
              <>
                <Hi>Led end-to-end experience design for Modern Bank Reconciliation</Hi>, from wireframes to high-fidelity covering the Bank Statement to Reconciliation Worksheet flow; attracted 89 active enterprise customers within 14 days of preview, pushing partners to recommend the standard solution over existing ISV alternatives. Subsequently led the design of Bank Reconciliation Copilot, <Hi>achieving 99.8% matching accuracy</Hi>, and represented the team in a global product demo at Microsoft Business Application Launch Event.
              </>
            ),
          },
          {
            kind: 'project',
            content: (
              <>
                As a core designer, shipped multi-scenario experiences for D365 Finance Copilot, leading the design of Customer Summary and other core modules, <Hi>driving Copilot Summary to 242K monthly active users</Hi>; concurrently <Hi>led the global team&apos;s home page redesign for the AI era</Hi>, independently designed Immersive Home Page for two key personas, partnered with upstream and downstream teams to present a complete Source-to-Pay story to leadership, validating the immersive home page paradigm&apos;s commercial value in enterprise scenarios and laying the foundation for future global strategy.
              </>
            ),
          },
          {
            kind: 'collab',
            content: (
              <>
                <Hi>Systematically introduced research-led design into product-engineering collaboration</Hi> — presented the full usability testing process and findings to partners for the first time, codifying it into a traceable workflow with design briefs and Figma changelogs that the team continues to reuse; as the APAC representative, participated deeply in large-scale design collaboration across Europe / North America / Asia, contributing reusable experience components for the AI era.
              </>
            ),
          },
        ],
        intern: {
          period: '2021.7 — 2021.8',
          location: 'Shanghai, China',
          bullets: [
            {
              content:
                'Studied the business logic of B2B Tax Service and designed an onboarding tutorial for the complex Tax Calculation feature based on user personas and usability test feedback, improving first-time learning experience and reducing learning costs.',
            },
            {
              content:
                'Led the demo design for a blockchain finance project, validating and refining the design through usability testing.',
            },
          ],
        },
      },
    ],
  },
  {
    company: 'Transsion Holdings',
    year: '2021',
    span: '2021.5 — 2021.7',
    location: 'Shanghai, China',
    roles: [
      {
        period: '2021.5 — 2021.7',
        title: 'Interaction Designer',
        bullets: [
          {
            content:
              "Owned the AR business card app for Tecno's flagship phone, driving interaction optimization from Beta to release in close collaboration with PMs, engineers, and QA; through A/B testing and usability research, analyzed design flaws and independently delivered a comprehensive optimization plan across interaction, visual, and motion design — improving the operational experience of the card-filling flow.",
          },
          {
            content:
              'Optimized interaction design for the Oriamo smartwatch through user testing and design walkthroughs, defining interaction logic and visual presentation standards; produced a competitive analysis report on foldable phones based on market research and product experience testing.',
          },
        ],
      },
    ],
  },
  {
    company: 'Shanghai Aitai Technology Consulting',
    year: '2020',
    span: '2020.7 — 2021.2',
    location: 'Shanghai, China',
    roles: [
      {
        period: '2020.7 — 2021.2',
        title: 'Product Designer',
        bullets: [
          {
            content:
              "Through market analysis and user research, distilled core user needs and aligned them with the business model to establish design strategy and principles for the company's SaaS product.",
          },
          {
            content:
              'Studied power users’ operational habits and business logic, focused on optimizing core interactions and data visualization, and led the 0-to-1 design process end-to-end; defined web and mini-program interface implementation standards, visual language and interaction guidelines, and delivered high-fidelity web designs.',
          },
          {
            content:
              'Established a systematic design framework and optimized team workflow by building a Figma online component library, lifting team efficiency by 75%; with a cost-conscious, goal-driven mindset, collaborated closely with PMs and engineers, rapidly iterating products based on user testing insights.',
          },
        ],
      },
    ],
  },
];

const educationEN: School[] = [
  {
    year: '2019',
    span: '2019.9 — 2021.12',
    school: 'University of Michigan, Ann Arbor',
    location: 'Ann Arbor, USA',
    degrees: [
      { title: 'M.S.', major: 'Information · UX Design & Research' },
      { title: 'M.S.', major: 'Design Science', note: 'Top 5%' },
    ],
  },
  {
    year: '2015',
    span: '2015.9 — 2019.8',
    school: 'Shanghai Jiao Tong University · JI',
    location: 'Shanghai, China',
    degrees: [
      {
        title: 'B.S.',
        major: 'Mechanical Engineering / Minor: Entrepreneurship',
        note: 'Top 20%',
      },
    ],
  },
];

const skillGroupsEN: SkillGroup[] = [
  {
    title: 'UX Skills',
    items: [
      'Web Design',
      'App Design',
      'Interaction Prototyping',
      'Design System',
      'User Research',
      'Usability Testing',
      'Design Thinking',
      'Inclusive Design',
      'AR/VR',
    ],
  },
  {
    title: 'Design Tools',
    items: ['Figma', 'Claude Code', 'GitHub Copilot', 'Photoshop', 'Illustrator'],
  },
  { title: 'Programming', items: ['Python', 'HTML+CSS', 'JavaScript', 'Arduino'] },
  { title: '3D Design', items: ['Solidworks', 'Auto CAD', 'Unigraphic NX', 'Unity'] },
  { title: 'Languages', items: ['English', '中文'] },
];

const awardsEN: Award[] = [
  {
    year: '2020',
    span: '2020.9 — 10',
    title: 'Adobe Design Challenge',
    result: 'Second Prize',
    location: 'Ann Arbor, USA',
    description:
      'Designed an online food reservation and pickup app for North American food banks during the pandemic surge, applying design research methods to eliminate potential social stigma and streamline the food assistance process.',
  },
];

// =================== UI 字符串 ===================

const ui = {
  zh: {
    aboutKicker: 'About',
    headline_a: '产品设计师，',
    headline_b: '目前在 ',
    intro:
      '专注于通过设计研究、交互原型与体系化的设计语言，把复杂的产品逻辑变成清晰、好用的体验。横跨 B 端工具产品与 C 端消费场景，从 0 到 1 的早期探索到成熟产品的迭代。',
    location: '上海, 中国',
    viewResume: '查看简历',
    section01: '工作经历',
    section02: '教育经历',
    section03: '能力',
    section04: '获奖经历',
    contentTbd: '内容补充中…',
    earlyIntern: '早期实习',
    chipProject: '项目',
    chipCollab: '协作',
  },
  en: {
    aboutKicker: 'About',
    headline_a: 'Product Designer,',
    headline_b: 'currently at ',
    intro:
      'Focused on translating complex product logic into clear, usable experiences through design research, interaction prototyping, and a systematic design language. Spanning B2B tools and C-side consumer products, from 0-to-1 exploration to mature product iteration.',
    location: 'Shanghai, China',
    viewResume: 'View Resume',
    section01: 'Work',
    section02: 'Education',
    section03: 'Skills',
    section04: 'Awards',
    contentTbd: 'Content coming soon…',
    earlyIntern: 'Early Internship',
    chipProject: 'Project',
    chipCollab: 'Collab',
  },
} as const;

/* ---------- 子组件 ---------- */

function LeftAxis({
  year,
  span,
  title,
  location,
}: {
  year: string;
  span: string;
  title: string;
  location: string;
}) {
  return (
    <div>
      <div className="font-mono text-5xl md:text-6xl font-bold text-white/40 leading-[0.9] mb-2 tabular-nums">
        {year}
      </div>
      <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">{span}</p>
      <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{location}</p>
    </div>
  );
}

function TwoColRow({
  left,
  children,
  index = 0,
}: {
  left: React.ReactNode;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-10 py-10 border-t border-white/10 first:border-t-0"
    >
      <div className="md:col-span-4">{left}</div>
      <div className="md:col-span-8">{children}</div>
    </motion.div>
  );
}

function SectionHeading({ id, label, title }: { id?: string; label: string; title: string }) {
  return (
    <div id={id} className="mb-10 md:mb-12">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
}

function KindChip({
  kind,
  labels,
}: {
  kind?: 'project' | 'collab';
  labels: { project: string; collab: string };
}) {
  if (!kind) return null;
  const label = kind === 'project' ? labels.project : labels.collab;
  const tone =
    kind === 'project'
      ? 'text-blue-300/80 border-blue-300/25'
      : 'text-emerald-300/80 border-emerald-300/25';
  return (
    <span
      className={`shrink-0 inline-flex items-center justify-center text-[10px] font-medium tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border ${tone}`}
    >
      {label}
    </span>
  );
}

/* ---------- 页面 ---------- */

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>('zh');
  const t = ui[lang];
  const experience = lang === 'zh' ? experienceZH : experienceEN;
  const education = lang === 'zh' ? educationZH : educationEN;
  const skillGroups = lang === 'zh' ? skillGroupsZH : skillGroupsEN;
  const awards = lang === 'zh' ? awardsZH : awardsEN;
  const chipLabels = { project: t.chipProject, collab: t.chipCollab };

  return (
    <>
      <CustomCursor />
      {/* 背景降到 8%，减少与内容竞争 */}
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none">
        <Threads color={[0.4, 0.7, 1.0]} amplitude={1.2} distance={0.3} />
      </div>
      <Navigation />

      {/* Language toggle —— 固定右上 */}
      <div className="fixed top-6 right-6 z-[60]">
        <div className="flex items-center bg-white/8 backdrop-blur-sm border border-white/15 rounded-full p-1 gap-0.5">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              lang === 'en' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('zh')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              lang === 'zh' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            中文
          </button>
        </div>
      </div>

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <motion.section
            key={`hero-${lang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-24 md:mb-32"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
              {t.aboutKicker}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05]">
              {t.headline_a}
              <br />
              {t.headline_b}
              <span className="text-blue-400">Microsoft</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
              {t.intro}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="text-gray-600">
                  ●
                </span>
                {t.location}
              </span>
              <span className="text-gray-700" aria-hidden>
                ·
              </span>
              <a
                href={lang === 'en' ? '/resume?lang=en' : '/resume'}
                className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200 transition-colors border-b border-blue-400/40 hover:border-blue-400 pb-0.5"
              >
                {t.viewResume} <span aria-hidden>↗</span>
              </a>
            </div>
          </motion.section>

          {/* 工作经历 */}
          <section className="mb-24 md:mb-32" key={`work-${lang}`}>
            <SectionHeading label="01" title={t.section01} />
            <div>
              {experience.map((c, i) => (
                <TwoColRow
                  key={c.company}
                  index={i}
                  left={
                    <LeftAxis
                      year={c.year}
                      span={c.span}
                      title={c.company}
                      location={c.location}
                    />
                  }
                >
                  <div className="space-y-14">
                    {c.roles.map((role, j) => (
                      <div key={j}>
                        {role.product && (
                          <h4 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2">
                            {role.product}
                          </h4>
                        )}
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5">
                          <span className="text-sm text-gray-300">{role.title}</span>
                          <span className="text-xs text-gray-500">·</span>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            {role.period}
                          </span>
                          {role.location && (
                            <>
                              <span className="text-xs text-gray-500">·</span>
                              <span className="text-xs text-gray-500">{role.location}</span>
                            </>
                          )}
                        </div>
                        {role.bullets.length > 0 ? (
                          <ul className="space-y-6 text-gray-400 text-sm md:text-base leading-[1.75]">
                            {role.bullets.map((b, k) => (
                              <li key={k} className="flex gap-3">
                                {b.kind ? (
                                  <KindChip kind={b.kind} labels={chipLabels} />
                                ) : (
                                  <span className="text-gray-600 select-none flex-shrink-0">
                                    —
                                  </span>
                                )}
                                <span>{b.content}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-600 italic">{t.contentTbd}</p>
                        )}

                        {role.intern && (
                          <div className="mt-8 pl-4 border-l border-white/10">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                              <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                                {t.earlyIntern}
                              </span>
                              <span className="text-xs text-gray-600">·</span>
                              <span className="text-xs text-gray-500 tabular-nums">
                                {role.intern.period}
                              </span>
                              <span className="text-xs text-gray-600">·</span>
                              <span className="text-xs text-gray-500">
                                {role.intern.location}
                              </span>
                            </div>
                            <ul className="space-y-3 text-gray-500 text-xs md:text-sm leading-relaxed">
                              {role.intern.bullets.map((b, k) => (
                                <li key={k} className="flex gap-2">
                                  <span className="text-gray-700 select-none flex-shrink-0">
                                    —
                                  </span>
                                  <span>{b.content}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TwoColRow>
              ))}
            </div>
          </section>

          {/* 教育经历 */}
          <section className="mb-24 md:mb-32" key={`edu-${lang}`}>
            <SectionHeading label="02" title={t.section02} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-white/20 hover:bg-white/[0.04] transition-colors flex flex-col"
                >
                  <div className="flex items-baseline justify-between mb-5">
                    <p className="font-mono text-sm md:text-base text-white/60 tabular-nums tracking-wider">
                      {edu.span}
                    </p>
                    <span className="text-xs text-gray-600 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-xs text-gray-500 mb-6">{edu.location}</p>
                  <div className="h-px bg-white/10 mb-5" />
                  <ul className="space-y-4">
                    {edu.degrees.map((d, j) => (
                      <li key={j}>
                        <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                          <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
                            {d.title}
                          </span>
                          {d.note && (
                            <span className="text-xs text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded-full">
                              {d.note}
                            </span>
                          )}
                        </div>
                        <p className="text-base md:text-lg font-semibold text-white leading-snug">
                          {d.major}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 能力 */}
          <section className="mb-24 md:mb-32" key={`skills-${lang}`}>
            <SectionHeading label="03" title={t.section03} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-white/20 hover:bg-white/[0.04] transition-colors ${
                    i === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {group.title}
                    </h3>
                    <span className="text-xs text-gray-600 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {group.items.map((item, j) => (
                      <span key={item}>
                        <span className="whitespace-nowrap">{item}</span>
                        {j < group.items.length - 1 && (
                          <span className="text-gray-500" aria-hidden>
                            {' · '}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 获奖 —— 紧凑内联，不再走重型两栏 */}
          <section className="mb-12" key={`awards-${lang}`}>
            <SectionHeading label="04" title={t.section04} />
            <div className="border-t border-white/10">
              {awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-6 py-6 border-b border-white/10 items-baseline"
                >
                  <span className="md:col-span-2 font-mono text-2xl md:text-3xl font-bold text-white/40 tabular-nums leading-none">
                    {award.year}
                  </span>
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {award.title}
                      </h3>
                      <span className="text-blue-400 text-sm font-medium">{award.result}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right text-xs text-gray-500 uppercase tracking-[0.15em]">
                    {award.span} · {award.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

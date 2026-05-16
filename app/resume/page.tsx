'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

// ============================================================
//  Yuheng Xie · Resume (A4 single page, ZH / EN switchable)
// ============================================================

type Lang = 'zh' | 'en';

const ACCENT = '#1c4068';
const INK = '#0c0c0c';
const MUTED = '#6b7280';
const HAIRLINE = '#d1d5db';

// — 关键 metric / 数字：mono + accent
function M({ children }: { children: React.ReactNode }) {
  return (
    <strong
      style={{
        fontFamily:
          '"JetBrains Mono", "SF Mono", "Roboto Mono", ui-monospace, monospace',
        color: ACCENT,
        fontWeight: 600,
      }}
    >
      {children}
    </strong>
  );
}

// — 中/英文加粗短语：ink black（与 mono metric 区分）
function K({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: INK, fontWeight: 600 }}>{children}</strong>;
}

// ============================================================
//  Profile (中英共用一份姓名 + email/site)
// ============================================================

const baseProfile = {
  email: 'xieyuhjack@gmail.com',
  portfolio: 'xieyuh03.github.io/Portfolio',
};

// ============================================================
//  Types
// ============================================================

type SubRole = {
  product: string;
  period: string;
  bullets: React.ReactNode[];
};

type Job = {
  company: string;
  location: string;
  span: string;
  role?: string;
  bullets?: React.ReactNode[];
  sub?: SubRole[];
};

type EducationItem = {
  school: string;
  location: string;
  span: string;
  degrees: string[];
};

type SkillRow = { label: string; items: string[] };

// ============================================================
//  中文数据
// ============================================================

const experienceZH: Job[] = [
  {
    company: 'Microsoft',
    location: '上海, 中国',
    span: '2022 — 至今',
    sub: [
      {
        product: 'Copilot Connector',
        period: '2025 — 至今',
        bullets: [
          <>
            推动 <M>20+</M> Copilot Connectors 跨 4 个发布波次准时上线公测；主导设计并交付 Connector Setup OAuth 2.0 简化版至正式发布，setup 时间从数小时缩短至数分钟、推动团队 incoming <K>ICM 减半</K>；主导 Notification 设计，填补 connector 状态长期可见性缺失。
          </>,
          <>
            主导 <K>MADS Design Agent</K> 的架构与落地，基于 Claude Code 和 GitHub Copilot 框架将团队设计工作流从 Figma 手工操作转向代码优先，页面生成时间从数小时缩短至数分钟；架构被多位设计师与产品经理采纳并自建分支，<K>从个人探索升级为团队基础框架</K>。
          </>,
          <>
            推动 AI 原生设计实践跨团队扩散：与产品经理建立 GitHub 分支协作模式升级设计到工程的交付；系统性输出 Claude Code 架构与 AI 工作流实践，赋能其他产品设计团队搭建组件库、落地代码优先设计体系。
          </>,
        ],
      },
      {
        product: 'Dynamics 365 Finance',
        period: '2022 — 2025',
        bullets: [
          <>
            主导 <K>Modern Bank Reconciliation</K> 端到端体验设计，覆盖银行对账单到对账工作表全流程；公测 14 天内吸引 <M>89</M> 个活跃企业客户试用，推动合作伙伴优先推荐标准方案、替代既有 ISV 付费方案。后续主导 Bank Reconciliation Copilot 设计，实现 <M>99.8%</M> 匹配准确率，代表团队在 Microsoft Business Application Launch Event 面向全球受众演示。
          </>,
          <>
            作为核心设计师交付 D365 Finance Copilot 多场景体验，主导 Customer Summary 等核心模块，推动 Copilot Summary 累计达成 <M>242K</M> 月活用户；主导推动 AI 时代下全球团队产品主页整体设计更新，独立完成两个核心用户画像的 Immersive Home Page 设计，联合上下游团队呈现 Source-to-Pay 完整故事，验证沉浸式主页范式在企业场景的商业价值。
          </>,
          <>
            把 <K>研究驱动设计</K>系统性引入产品与工程协作，首次为协作方完整呈现可用性测试流程与发现，沉淀为可追溯设计工作流；作为亚太代表深度参与跨欧/美/亚的大规模设计协作，产出面向 AI 时代的可复用体验组件。
          </>,
        ],
      },
    ],
  },
  {
    company: '传音控股',
    location: '上海, 中国',
    span: '2021.5 — 2021.7',
    role: '交互设计',
    bullets: [
      <>
        负责 Tecno 旗舰手机 AR 名片应用的交互优化与上线推进；通过 A/B Test 与可用性测试分析既有设计缺陷，结合交互、视觉、动效独立完成综合优化方案，提升名片填写流程操作体验。
      </>,
    ],
  },
  {
    company: '上海爱钛技术咨询',
    location: '上海, 中国',
    span: '2020.7 — 2021.2',
    role: '产品设计',
    bullets: [
      <>
        完成 SaaS 产品从 0 到 1 的设计全流程，制定 Web 与小程序界面规范、定义视觉与交互设计语言；搭建 Figma 线上组件库，<K>提升团队 <M>75%</M> 工作效率</K>。
      </>,
    ],
  },
];

const educationZH: EducationItem[] = [
  {
    school: '美国密西根大学安娜堡分校',
    location: '安娜堡, 美国',
    span: '2019.9 — 2021.12',
    degrees: ['理学硕士 · 信息（用户体验设计与研究）', '理学硕士 · 设计科学'],
  },
  {
    school: '上海交通大学 · 交大密西根联合学院',
    location: '上海, 中国',
    span: '2015.9 — 2019.8',
    degrees: ['理学学士 · 机械工程 / 辅修 创业管理'],
  },
];

const skillsZH: SkillRow[] = [
  {
    label: 'UX',
    items: [
      '网页 / App',
      '交互原型',
      '设计规范',
      '用户调研',
      '可用性测试',
      '设计思维',
      '包容性设计',
      'AR / VR',
    ],
  },
  {
    label: '工具',
    items: ['Claude Code', 'GitHub Copilot', 'Figma', 'Photoshop', 'Illustrator'],
  },
  { label: '编程', items: ['Python', 'HTML+CSS', 'JavaScript', 'Arduino'] },
  { label: '3D', items: ['Solidworks', 'Auto CAD', 'Unigraphic NX', 'Unity'] },
  { label: '语言', items: ['English', '中文'] },
];

// ============================================================
//  英文数据
// ============================================================

const experienceEN: Job[] = [
  {
    company: 'Microsoft',
    location: 'Shanghai, China',
    span: '2022 — Present',
    sub: [
      {
        product: 'Copilot Connector',
        period: '2025 — Present',
        bullets: [
          <>
            Drove <M>20+</M> Copilot Connectors to public preview on schedule across 4 release waves; led end-to-end design and delivery of the simplified Connector Setup OAuth 2.0 to GA, cutting setup time from hours to minutes and <K>halving the team&apos;s incoming ICMs</K>; led Notification design to close a long-standing connector status visibility gap.
          </>,
          <>
            Led architecture and rollout of <K>MADS Design Agent</K> — built on Claude Code and GitHub Copilot, shifting the team&apos;s workflow from Figma manual to code-first, with page generation reduced from hours to minutes; the architecture was adopted by multiple designers and PMs with their own branches, <K>evolving from personal exploration into a team-wide foundational framework</K>.
          </>,
          <>
            Spread AI-native design practices across teams: established a GitHub branch-based collaboration model with PMs to upgrade design-to-engineering handoff; systematically shared Claude Code architecture and AI workflow practices, enabling other product design teams to build component libraries and adopt code-first design systems.
          </>,
        ],
      },
      {
        product: 'Dynamics 365 Finance',
        period: '2022 — 2025',
        bullets: [
          <>
            Led end-to-end experience design for <K>Modern Bank Reconciliation</K>, covering the Bank Statement to Reconciliation Worksheet flow; attracted <M>89</M> active enterprise customers within 14 days of preview, pushing partners to recommend the standard solution over existing ISV alternatives. Subsequently led Bank Reconciliation Copilot design, achieving <M>99.8%</M> matching accuracy, and represented the team in a global demo at Microsoft Business Application Launch Event.
          </>,
          <>
            As a core designer, shipped multi-scenario experiences for D365 Finance Copilot, leading Customer Summary and other core modules, driving Copilot Summary to <M>242K</M> monthly active users; led the global team&apos;s home page redesign for the AI era, independently designed Immersive Home Page for two key personas, partnering with upstream and downstream teams to present a complete Source-to-Pay story to leadership and validate the paradigm&apos;s commercial value in enterprise scenarios.
          </>,
          <>
            Systematically introduced <K>research-led design</K> into product-engineering collaboration: presented the full usability testing process and findings for the first time, codifying a traceable workflow reused by the team; as the APAC representative, participated deeply in large-scale design collaboration across Europe / NA / Asia, contributing reusable experience components for the AI era.
          </>,
        ],
      },
    ],
  },
  {
    company: 'Transsion Holdings',
    location: 'Shanghai, China',
    span: '2021.5 — 2021.7',
    role: 'Interaction Designer',
    bullets: [
      <>
        Owned the AR business card app for Tecno&apos;s flagship phone, driving interaction optimization from Beta to release; through A/B testing and usability research, analyzed design flaws and independently delivered a comprehensive optimization plan across interaction, visual, and motion design.
      </>,
    ],
  },
  {
    company: 'Shanghai Aitai Consulting',
    location: 'Shanghai, China',
    span: '2020.7 — 2021.2',
    role: 'Product Designer',
    bullets: [
      <>
        Led the SaaS product&apos;s 0-to-1 design process end-to-end, defined web and mini-program interface standards, visual language and interaction guidelines; built a Figma online component library, <K>lifting team efficiency by <M>75%</M></K>.
      </>,
    ],
  },
];

const educationEN: EducationItem[] = [
  {
    school: 'University of Michigan, Ann Arbor',
    location: 'Ann Arbor, USA',
    span: '2019.9 — 2021.12',
    degrees: [
      'M.S. in Information (UX Design & Research)',
      'M.S. in Design Science',
    ],
  },
  {
    school: 'Shanghai Jiao Tong University · UM-SJTU Joint Institute',
    location: 'Shanghai, China',
    span: '2015.9 — 2019.8',
    degrees: ['B.S. in Mechanical Engineering / Minor: Entrepreneurship'],
  },
];

const skillsEN: SkillRow[] = [
  {
    label: 'UX',
    items: [
      'Web / App',
      'Prototyping',
      'Design System',
      'User Research',
      'Usability Test',
      'Design Thinking',
      'Inclusive Design',
      'AR / VR',
    ],
  },
  {
    label: 'Tools',
    items: ['Claude Code', 'GitHub Copilot', 'Figma', 'Photoshop', 'Illustrator'],
  },
  { label: 'Code', items: ['Python', 'HTML+CSS', 'JavaScript', 'Arduino'] },
  { label: '3D', items: ['Solidworks', 'Auto CAD', 'Unigraphic NX', 'Unity'] },
  { label: 'Lang', items: ['English', '中文'] },
];

// ============================================================
//  UI 字符串
// ============================================================

const ui = {
  zh: {
    name: '谢玉珩',
    subName: 'Yuheng Xie',
    headline: '产品设计',
    section01: '工作经历',
    section01EN: 'Work',
    section02: '教育经历',
    section02EN: 'Education',
    section03: '能力',
    section03EN: 'Skills',
    role: '产品设计',
    location: 'Shanghai, CN',
    backToAbout: '← 回到 About',
    download: '下载 PDF / 打印',
  },
  en: {
    name: 'Yuheng Xie',
    subName: '谢玉珩',
    headline: 'Product Designer',
    section01: 'Work',
    section01EN: '',
    section02: 'Education',
    section02EN: '',
    section03: 'Skills',
    section03EN: '',
    role: 'Product Designer',
    location: 'Shanghai, CN',
    backToAbout: '← Back to About',
    download: 'Download PDF / Print',
  },
} as const;

// ============================================================
//  组件
// ============================================================

function SectionHeader({
  no,
  label,
  en,
  compact = false,
}: {
  no: string;
  label: string;
  en: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="mb-4">
        <div className="flex items-baseline gap-2.5">
          <span
            style={{
              fontFamily: '"JetBrains Mono", "SF Mono", "Roboto Mono", monospace',
              fontSize: '8.5pt',
              color: ACCENT,
              fontWeight: 600,
              letterSpacing: '0.12em',
            }}
          >
            {no}
          </span>
          <h2
            style={{
              fontSize: '12pt',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: INK,
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </h2>
        </div>
        {en && (
          <div className="flex items-baseline gap-2" style={{ marginTop: '5px' }}>
            <span
              style={{
                fontSize: '7pt',
                fontWeight: 400,
                letterSpacing: '0.22em',
                color: MUTED,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {en}
            </span>
            <div
              style={{ flex: 1, height: '1px', backgroundColor: HAIRLINE, marginLeft: '4px' }}
            />
          </div>
        )}
        {!en && (
          <div
            style={{ height: '1px', backgroundColor: HAIRLINE, marginTop: '5px' }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-3 mb-4">
      <span
        style={{
          fontFamily: '"JetBrains Mono", "SF Mono", "Roboto Mono", monospace',
          fontSize: '8.5pt',
          color: ACCENT,
          fontWeight: 600,
          letterSpacing: '0.12em',
        }}
      >
        {no}
      </span>
      <h2
        style={{
          fontSize: '12pt',
          fontWeight: 700,
          letterSpacing: '0.04em',
          color: INK,
        }}
      >
        {label}
        {en && (
          <span
            style={{
              marginLeft: '10px',
              fontSize: '7.5pt',
              fontWeight: 400,
              letterSpacing: '0.22em',
              color: MUTED,
              textTransform: 'uppercase',
            }}
          >
            {en}
          </span>
        )}
      </h2>
      <div
        style={{ flex: 1, height: '1px', backgroundColor: HAIRLINE, marginLeft: '8px' }}
      />
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="flex gap-3"
      style={{ fontSize: '9.5pt', lineHeight: 1.6, color: '#1f2937' }}
    >
      <span style={{ color: ACCENT, flexShrink: 0, fontWeight: 600 }}>·</span>
      <span>{children}</span>
    </li>
  );
}

// ============================================================
//  页面
// ============================================================

export default function ResumePage() {
  const [lang, setLang] = useState<Lang>('zh');

  // 通过 URL ?lang=en 切换初始语言（让 About EN 页可链接到 EN resume）
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'en') setLang('en');
  }, []);

  const handlePrint = useCallback(() => window.print(), []);

  const t = ui[lang];
  const experience = lang === 'zh' ? experienceZH : experienceEN;
  const education = lang === 'zh' ? educationZH : educationEN;
  const skills = lang === 'zh' ? skillsZH : skillsEN;

  return (
    <>
      <div className="resume-shell min-h-screen bg-neutral-200 print:bg-white py-8 print:py-0 px-4 print:px-0">
        {/* 顶部控制条 —— 屏幕显示 */}
        <div className="max-w-[210mm] mx-auto mb-4 flex justify-between items-center gap-4 print:hidden">
          <Link
            href={lang === 'en' ? '/about?lang=en' : '/about'}
            className="text-sm text-gray-600 hover:text-black underline underline-offset-2"
          >
            {t.backToAbout}
          </Link>
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center bg-white border border-gray-300 rounded-full p-1 gap-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  lang === 'en'
                    ? 'bg-black text-white'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('zh')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  lang === 'zh'
                    ? 'bg-black text-white'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                中文
              </button>
            </div>
            <button
              onClick={handlePrint}
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              {t.download}
            </button>
          </div>
        </div>

        {/* A4 纸 */}
        <article
          className="resume-page mx-auto bg-white shadow-xl print:shadow-none"
          style={{
            width: '210mm',
            padding: '12mm 12mm 10mm 12mm',
            color: INK,
            fontFamily:
              '"Inter", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontFeatureSettings: '"ss01", "cv11"',
          }}
        >
          {/* ===== Header ===== */}
          <header style={{ marginBottom: '8mm' }}>
            <div
              style={{ height: '1px', backgroundColor: ACCENT, marginBottom: '3mm' }}
            />

            <div className="grid grid-cols-12 gap-4 items-end">
              {/* 左：姓名 + tagline */}
              <div className="col-span-7">
                <h1
                  style={{
                    fontSize: '26pt',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: INK,
                  }}
                >
                  {t.name}
                </h1>
                <div
                  style={{
                    fontSize: '10pt',
                    color: MUTED,
                    marginTop: '3px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {t.subName}
                  <span style={{ color: HAIRLINE, margin: '0 5px' }}>/</span>
                  {t.headline}
                </div>
              </div>

              {/* 右：联系 —— 每行整体右对齐 */}
              <div
                className="col-span-5"
                style={{
                  textAlign: 'right',
                  fontFamily: '"JetBrains Mono", "SF Mono", monospace',
                  fontSize: '8.5pt',
                  lineHeight: 1.5,
                  color: '#374151',
                }}
              >
                <div>
                  <span style={{ color: MUTED }}>email </span>
                  <span>{baseProfile.email}</span>
                </div>
                <div>
                  <span style={{ color: MUTED }}>site </span>
                  <span>{baseProfile.portfolio}</span>
                </div>
                <div>
                  <span style={{ color: MUTED }}>loc </span>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          </header>

          {/* ===== 主区 (左 9) ＋ 能力侧栏 (右 1) ===== */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
            <div style={{ flex: '9 1 0', minWidth: 0 }}>
              {/* ===== 01 / Work Experience ===== */}
              <section style={{ marginBottom: '9mm' }}>
                <SectionHeader no="01" label={t.section01} en={t.section01EN} />

                <div className="space-y-4">
                  {experience.map((job, i) => (
                    <div key={i}>
                      {/* 公司行 */}
                      <div className="flex items-baseline justify-between mb-1.5">
                        <h3
                          style={{
                            fontSize: '11pt',
                            fontWeight: 700,
                            letterSpacing: '0.01em',
                          }}
                        >
                          {job.company}
                          <span
                            style={{
                              fontSize: '8pt',
                              fontWeight: 400,
                              color: MUTED,
                              marginLeft: '10px',
                            }}
                          >
                            · {job.location}
                          </span>
                        </h3>
                        <span
                          style={{
                            fontFamily: '"JetBrains Mono", "SF Mono", monospace',
                            fontSize: '8.5pt',
                            color: ACCENT,
                            fontWeight: 500,
                          }}
                        >
                          {job.span}
                        </span>
                      </div>

                      {/* 多产品线 */}
                      {job.sub ? (
                        <div className="space-y-3 mt-2">
                          {job.sub.map((s, j) => (
                            <div key={j}>
                              <div
                                className="flex items-baseline justify-between"
                                style={{ marginBottom: '3px' }}
                              >
                                <div>
                                  <span
                                    style={{
                                      fontSize: '9.5pt',
                                      fontWeight: 600,
                                      color: ACCENT,
                                    }}
                                  >
                                    {s.product}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: '8pt',
                                      color: MUTED,
                                      marginLeft: '8px',
                                    }}
                                  >
                                    {t.role}
                                  </span>
                                  <span
                                    style={{
                                      fontFamily: '"JetBrains Mono", "SF Mono", monospace',
                                      fontSize: '8pt',
                                      color: MUTED,
                                      marginLeft: '8px',
                                    }}
                                  >
                                    · {s.period}
                                  </span>
                                </div>
                              </div>
                              <ul className="space-y-1.5">
                                {s.bullets.map((b, k) => (
                                  <Bullet key={k}>{b}</Bullet>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          {job.role && (
                            <p
                              style={{
                                fontSize: '9pt',
                                color: ACCENT,
                                fontWeight: 500,
                                marginBottom: '3px',
                              }}
                            >
                              {job.role}
                            </p>
                          )}
                          <ul className="space-y-1.5">
                            {(job.bullets ?? []).map((b, k) => (
                              <Bullet key={k}>{b}</Bullet>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ===== 02 / Education —— 左列内 ===== */}
              <section>
                <SectionHeader no="02" label={t.section02} en={t.section02EN} />
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <div
                        className="flex items-baseline justify-between"
                        style={{ marginBottom: '3px' }}
                      >
                        <h3
                          style={{
                            fontSize: '10pt',
                            fontWeight: 700,
                            letterSpacing: '0.01em',
                          }}
                        >
                          {edu.school}
                        </h3>
                        <span
                          style={{
                            fontFamily: '"JetBrains Mono", "SF Mono", monospace',
                            fontSize: '8pt',
                            color: ACCENT,
                            flexShrink: 0,
                            marginLeft: '12px',
                          }}
                        >
                          {edu.span}
                        </span>
                      </div>
                      <ul
                        style={{
                          fontSize: '9pt',
                          lineHeight: 1.45,
                          color: '#1f2937',
                        }}
                        className="space-y-0"
                      >
                        {edu.degrees.map((d, j) => (
                          <li key={j} className="flex gap-2">
                            <span style={{ color: ACCENT, flexShrink: 0 }}>·</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ===== 右侧栏 03 / Skills ===== */}
            <aside style={{ flex: '1 1 0', minWidth: 0 }}>
              <section>
                <SectionHeader no="03" label={t.section03} en={t.section03EN} compact />
                <div className="space-y-3">
                  {skills.map((s, i) => (
                    <div key={i}>
                      <p
                        style={{
                          fontFamily: '"JetBrains Mono", "SF Mono", monospace',
                          fontSize: '7pt',
                          color: ACCENT,
                          fontWeight: 600,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          marginBottom: '4px',
                        }}
                      >
                        {s.label}
                      </p>
                      <ul
                        style={{
                          fontSize: '8pt',
                          lineHeight: 1.55,
                          color: '#1f2937',
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          wordBreak: 'keep-all',
                        }}
                      >
                        {s.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </article>
      </div>
    </>
  );
}

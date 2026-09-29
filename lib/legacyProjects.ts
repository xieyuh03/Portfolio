export type LocalizedText = {
  en: string;
  zh: string;
};

export type LegacyProject = {
  slug: string;
  title: string;
  eyebrow: LocalizedText;
  summary: LocalizedText;
  year: string;
  role: LocalizedText;
  discipline: LocalizedText;
  duration: LocalizedText;
  sourceUrl: string;
};

export const legacyProjects: LegacyProject[] = [
  {
    slug: 'microsoft-internship-2021',
    title: 'Microsoft D365 Internship',
    eyebrow: {
      en: 'Enterprise UX · Internship Archive',
      zh: '企业 UX · 实习项目归档',
    },
    summary: {
      en: 'UI refinement and onboarding for Dynamics 365 Tax Calculation Service, plus an early blockchain-based cash-management concept.',
      zh: '面向 Dynamics 365 Tax Calculation Service 的界面优化与新手引导，以及区块链现金管理概念探索。',
    },
    year: '2021',
    role: {
      en: 'User Experience Design Intern',
      zh: '用户体验设计实习生',
    },
    discipline: {
      en: 'ERP product design · Usability testing · Fluent UI',
      zh: 'ERP 产品设计 · 可用性测试 · Fluent UI',
    },
    duration: {
      en: 'July – September 2021',
      zh: '2021 年 7 月 – 9 月',
    },
    sourceUrl: 'https://www.yuheng.me/post/microsoft',
  },
  {
    slug: 'transsion-product-design',
    title: 'Transsion Product Design',
    eyebrow: {
      en: 'Interaction Design · Internship Archive',
      zh: '交互设计 · 实习项目归档',
    },
    summary: {
      en: 'Interaction design and usability evaluation for an AR business-card app, Oraimo smartwatch, and foldable-screen interaction research.',
      zh: 'AR 名片应用的交互设计与可用性评估，以及 Oraimo 智能手表和折叠屏交互研究。',
    },
    year: '2021',
    role: {
      en: 'Interaction Design Intern',
      zh: '交互设计实习生',
    },
    discipline: {
      en: 'Interaction design · User testing · Competitive analysis',
      zh: '交互设计 · 用户测试 · 竞品分析',
    },
    duration: {
      en: 'May – July 2021',
      zh: '2021 年 5 月 – 7 月',
    },
    sourceUrl: 'https://www.yuheng.me/post/transsion-1',
  },
  {
    slug: 'maxval-saas-product-design',
    title: 'MAXVAL SaaS Product Design',
    eyebrow: {
      en: 'SaaS Product Design · Archive',
      zh: 'SaaS 产品设计 · 归档',
    },
    summary: {
      en: 'A B2B SaaS redesign spanning product strategy, interviews, design principles, analytics, task management, and mobile workflows.',
      zh: '覆盖产品战略、访谈、设计原则、数据分析、任务管理和移动工作流的 B2B SaaS 重设计。',
    },
    year: '2020',
    role: {
      en: 'Product Designer',
      zh: '产品设计师',
    },
    discipline: {
      en: 'SaaS · UX strategy · Web application design',
      zh: 'SaaS · UX 战略 · Web 应用设计',
    },
    duration: {
      en: 'July – December 2020',
      zh: '2020 年 7 月 – 12 月',
    },
    sourceUrl: 'https://www.yuheng.me/maxval-eng',
  },
  {
    slug: 'neighborhood-app-design',
    title: 'Neighborhood App Design',
    eyebrow: {
      en: 'Mobile Product Design · Archive',
      zh: '移动产品设计 · 归档',
    },
    summary: {
      en: 'A social-context mobile product designed through user research, competitive analysis, personas, wireframes, and high-fidelity UI.',
      zh: '通过用户研究、竞品分析、Persona、线框图和高保真界面完成的社交场景移动产品。',
    },
    year: '2020',
    role: {
      en: 'Product Designer',
      zh: '产品设计师',
    },
    discipline: {
      en: 'Mobile UX · Social product · Visual design',
      zh: '移动 UX · 社交产品 · 视觉设计',
    },
    duration: {
      en: 'September – December 2020',
      zh: '2020 年 9 月 – 12 月',
    },
    sourceUrl: 'https://www.yuheng.me/neighbourhood-eng',
  },
  {
    slug: 'mitools-user-research',
    title: 'MiTools User Research',
    eyebrow: {
      en: 'UX Research · University of Michigan',
      zh: 'UX 研究 · 密歇根大学',
    },
    summary: {
      en: 'A seven-stage needs assessment and usability evaluation of the School of Dentistry Time Away Request system.',
      zh: '针对牙科学院请假系统开展的七阶段需求评估与可用性研究。',
    },
    year: '2020',
    role: {
      en: 'UX Researcher & Designer',
      zh: 'UX 研究员与设计师',
    },
    discipline: {
      en: 'Interviews · Survey · Competitive analysis · Usability',
      zh: '访谈 · 问卷 · 竞品分析 · 可用性评估',
    },
    duration: {
      en: 'January – April 2020',
      zh: '2020 年 1 月 – 4 月',
    },
    sourceUrl: 'https://www.yuheng.me/users-study-for-mitools',
  },
];

export const legacyProjectMap = Object.fromEntries(
  legacyProjects.map((project) => [project.slug, project]),
) as Record<string, LegacyProject>;

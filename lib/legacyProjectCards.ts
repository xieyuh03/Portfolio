export type LegacyProjectCard = {
  id: number;
  title: string;
  description: { en: string; zh: string };
  tags: Array<{ en: string; zh: string }>;
  year: string;
  image: string;
  href: string;
  group: 'professional' | 'graduate' | 'undergraduate';
};

export const legacyProjectCards: LegacyProjectCard[] = [
  {
    id: 15,
    title: 'Microsoft D365 Internship',
    description: {
      en: 'Enterprise product design work for Dynamics 365 Finance, including onboarding, Fluent UI, usability testing, and an innovation concept.',
      zh: '面向 Dynamics 365 Finance 的企业产品设计，包括新手引导、Fluent UI、可用性测试与创新概念。',
    },
    tags: [
      { en: 'Enterprise UX', zh: '企业 UX' },
      { en: 'ERP', zh: 'ERP' },
    ],
    year: '2021',
    image: '/images/legacy-source/covers/microsoft.jpg',
    href: '/projects/archive/microsoft-internship-2021',
    group: 'professional',
  },
  {
    id: 16,
    title: 'Transsion Product Design',
    description: {
      en: 'Interaction design and usability evaluation for AR Card, Oraimo smartwatch, and foldable-screen product research.',
      zh: 'AR 名片、Oraimo 智能手表与折叠屏产品研究的交互设计和可用性评估。',
    },
    tags: [
      { en: 'Interaction Design', zh: '交互设计' },
      { en: 'User Testing', zh: '用户测试' },
    ],
    year: '2021',
    image: '/images/legacy-source/covers/transsion.jpg',
    href: '/projects/archive/transsion-product-design',
    group: 'professional',
  },
  {
    id: 17,
    title: 'MAXVAL SaaS Product Design',
    description: {
      en: 'A B2B SaaS redesign spanning interviews, strategy, analytics, task management, and responsive workflows.',
      zh: '覆盖访谈、战略、数据分析、任务管理与响应式工作流的 B2B SaaS 重设计。',
    },
    tags: [
      { en: 'SaaS', zh: 'SaaS' },
      { en: 'Product Strategy', zh: '产品战略' },
    ],
    year: '2020',
    image: '/images/legacy-source/covers/maxval.png',
    href: '/projects/archive/maxval-saas-product-design',
    group: 'professional',
  },
  {
    id: 18,
    title: 'Neighborhood App Design',
    description: {
      en: 'A social-context mobile product developed through research, personas, wireframes, and high-fidelity UI.',
      zh: '通过研究、Persona、线框图和高保真 UI 完成的社交场景移动产品。',
    },
    tags: [
      { en: 'Mobile UX', zh: '移动 UX' },
      { en: 'Social Product', zh: '社交产品' },
    ],
    year: '2020',
    image: '/images/legacy-source/covers/neighborhood.png',
    href: '/projects/archive/neighborhood-app-design',
    group: 'graduate',
  },
  {
    id: 19,
    title: 'MiTools User Research',
    description: {
      en: 'A seven-stage needs assessment and usability evaluation of a university Time Away Request system.',
      zh: '针对大学请假系统开展的七阶段需求评估与可用性研究。',
    },
    tags: [
      { en: 'UX Research', zh: 'UX 研究' },
      { en: 'Usability', zh: '可用性' },
    ],
    year: '2020',
    image: '/images/legacy-source/covers/mitools.png',
    href: '/projects/archive/mitools-user-research',
    group: 'graduate',
  },
  {
    id: 20,
    title: 'Dribbble Daily UI Archive',
    description: {
      en: 'Seventeen visual and interaction-design explorations preserved from the original Dribbble profile.',
      zh: '从原 Dribbble 主页完整保留的 17 个视觉与交互设计练习。',
    },
    tags: [
      { en: 'Daily UI', zh: 'Daily UI' },
      { en: 'Visual Design', zh: '视觉设计' },
    ],
    year: '2020–2022',
    image: '/images/dribbble-archive/shot-01.webp',
    href: '/projects/dribbble-archive',
    group: 'undergraduate',
  },
  {
    id: 21,
    title: 'Central Park Visual Identity',
    description: {
      en: 'A 47-page Paula Scher-inspired branding, typography, and visual-identity exploration.',
      zh: '一套 47 页、受 Paula Scher 启发的品牌、字体与视觉识别探索。',
    },
    tags: [
      { en: 'Branding', zh: '品牌设计' },
      { en: 'Typography', zh: '字体设计' },
    ],
    year: '2020',
    image: '/images/legacy-pdf/cover.png',
    href: '/projects/visual-design-portfolio',
    group: 'graduate',
  },
  {
    id: 22,
    title: 'Google Design Exercise 2021',
    description: {
      en: 'A complete Google design exercise preserved from the original visual case-study sequence.',
      zh: '完整保留旧站视觉叙事的 Google Design Exercise 2021。',
    },
    tags: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Design Exercise', zh: '设计练习' },
    ],
    year: '2021',
    image: '/images/legacy-additional/google-design-exercise/cover-source.webp',
    href: '/projects/archive/google-design-exercise',
    group: 'graduate',
  },
  {
    id: 23,
    title: 'Doggo Safety Seat',
    description: {
      en: 'A four-month design-thinking project for a dog safety seat in cars, from research to prototyping and business planning.',
      zh: '一个为期四个月的车载宠物安全座椅项目，覆盖研究、原型和商业规划。',
    },
    tags: [
      { en: 'Design Thinking', zh: '设计思维' },
      { en: 'Physical Product', zh: '实体产品' },
    ],
    year: '2019',
    image: '/images/legacy-additional/doggo/cover-source.webp?v=20260930-work',
    href: '/projects/archive/doggo',
    group: 'graduate',
  },
  {
    id: 24,
    title: 'Personal Branding',
    description: {
      en: 'A personal logo and identity exploration developed through rapid graphic-design iteration.',
      zh: '通过快速图形设计迭代完成的个人 Logo 与品牌识别探索。',
    },
    tags: [
      { en: 'Branding', zh: '品牌设计' },
      { en: 'Logo Design', zh: 'Logo 设计' },
    ],
    year: '2020',
    image: '/images/legacy-additional/personal-brand/cover-source.webp',
    href: '/projects/archive/personal-brand',
    group: 'graduate',
  },
  {
    id: 25,
    title: 'NetEase Design Challenge',
    description: {
      en: 'A NetEase design challenge responding to user needs during the pandemic through a targeted product concept.',
      zh: '以网易严选为载体，针对疫情期间用户需求提出产品设计方案。',
    },
    tags: [
      { en: 'Design Challenge', zh: '设计挑战' },
      { en: 'Product Concept', zh: '产品概念' },
    ],
    year: '2020',
    image: '/images/legacy-additional/netease-design/cover-source.webp?v=20260930-work',
    href: '/projects/archive/netease-design',
    group: 'undergraduate',
  },
  {
    id: 26,
    title: 'ArtCenter Graphic Studies',
    description: {
      en: 'A collection of university ArtCenter graphic studies and visual explorations.',
      zh: '大学 ArtCenter 阶段的图形设计练习与视觉探索合集。',
    },
    tags: [
      { en: 'Visual Research', zh: '视觉研究' },
      { en: 'Inspiration', zh: '灵感收集' },
    ],
    year: '2020',
    image: '/images/legacy-additional/design-inspiration/cover-source.webp?v=20260930-work',
    href: '/projects/archive/design-inspiration',
    group: 'undergraduate',
  },
  {
    id: 28,
    title: 'Restaurant Booking Interface',
    description: {
      en: 'A human-factors course project applying visual hierarchy, information processing, and goal-driven behavior to booking.',
      zh: '将视觉层级、信息处理和目标驱动行为应用于预订体验的人因工程课程项目。',
    },
    tags: [
      { en: 'Human Factors', zh: '人因工程' },
      { en: 'Web Interface', zh: 'Web 界面' },
    ],
    year: '2020',
    image: '/images/legacy-additional/restaurant-booking/cover-source.webp',
    href: '/projects/archive/restaurant-booking',
    group: 'graduate',
  },
  {
    id: 29,
    title: 'Transformable Wheel',
    description: {
      en: 'An Arduino-controlled wheel structure enabling a vehicle to transform and climb stairs.',
      zh: '一个由 Arduino 控制、可让车辆变形并完成爬楼任务的轮组结构。',
    },
    tags: [
      { en: 'Physical Computing', zh: '物理计算' },
      { en: 'Arduino', zh: 'Arduino' },
    ],
    year: '2020',
    image: '/images/legacy-additional/transformable-wheel/cover-source.webp?v=20260930-work',
    href: '/projects/archive/transformable-wheel',
    group: 'undergraduate',
  },
  {
    id: 31,
    title: 'Garbage Interaction System',
    description: {
      en: 'A startup consulting project for a recyclable-waste business, combining market research, service design, and product interaction.',
      zh: '面向垃圾分类回收创业公司的咨询项目，结合市场研究、服务设计与产品交互。',
    },
    tags: [
      { en: 'Service Design', zh: '服务设计' },
      { en: 'Interaction', zh: '交互设计' },
    ],
    year: '2019',
    image: '/images/legacy-additional/garbage-interaction/cover-source.webp?v=20260930-work',
    href: '/projects/archive/garbage-interaction',
    group: 'undergraduate',
  },
  {
    id: 32,
    title: 'FoodYards',
    description: {
      en: 'A food-related product and interface concept preserved from the original case-study page.',
      zh: '从旧站案例中完整保留的餐饮产品与界面概念。',
    },
    tags: [
      { en: 'Product Design', zh: '产品设计' },
      { en: 'Food Tech', zh: '餐饮科技' },
    ],
    year: '2020',
    image: '/images/legacy-additional/foodyards/cover-source.webp',
    href: '/projects/archive/foodyards',
    group: 'graduate',
  },
  {
    id: 33,
    title: 'Digesta',
    description: {
      en: 'A three-week UI and identity design project developed for a client through logo and interface exploration.',
      zh: '一个为客户完成的三周 UI 与品牌识别项目，涵盖 Logo 和界面探索。',
    },
    tags: [
      { en: 'UI Design', zh: 'UI 设计' },
      { en: 'Identity', zh: '视觉识别' },
    ],
    year: '2020',
    image: '/images/legacy-additional/digesta/cover-source.webp?v=20260930-work',
    href: '/projects/archive/digesta',
    group: 'graduate',
  },
  {
    id: 34,
    title: 'Hotel Booking Interface',
    description: {
      en: 'A human-factors interface study applying goal-driven behavior and emotional processing to hotel booking.',
      zh: '将目标驱动行为与情绪处理应用于酒店预订的人因工程界面研究。',
    },
    tags: [
      { en: 'Human Factors', zh: '人因工程' },
      { en: 'Booking UX', zh: '预订体验' },
    ],
    year: '2020',
    image: '/images/legacy-additional/hotel-booking/cover-source.webp?v=20260930-work',
    href: '/projects/archive/hotel-booking',
    group: 'graduate',
  },
];

'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import Navigation from "@/components/Navigation";
import {
  Chapter,
  EditorialCard,
  MetaGrid,
  NumberBadge,
  ReadingProgress,
  Reveal,
  SectionHeading,
  StatementBand,
} from "@/components/case-study/PresentationCaseStudy";
import { useLanguage } from "@/lib/LanguageContext";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Localized = { en: string; zh: string };
type CapabilityState =
  | "Available"
  | "Enabled"
  | "Needs user sign-in"
  | "Preview";
type Capability = {
  name: Localized;
  value: Localized;
  state: CapabilityState;
  action: Localized;
  dependency: Localized;
};
type Scenario = {
  name: Localized;
  type: Localized;
  purpose: Localized;
  capabilities: Capability[];
};

const meta = [
  {
    label: { en: "Role", zh: "角色" },
    value: { en: "Product Designer", zh: "产品设计师" },
  },
  {
    label: { en: "Scope", zh: "范围" },
    value: {
      en: "0→1 product model · end-to-end experience",
      zh: "0→1 产品模型 · 端到端体验",
    },
  },
  {
    label: { en: "Touchpoints", zh: "触点" },
    value: {
      en: "Discovery · comparison · setup · lifecycle management",
      zh: "发现 · 比较 · 设置 · 生命周期管理",
    },
  },
  {
    label: { en: "Status", zh: "状态" },
    value: {
      en: "Core direction aligned; labels under validation",
      zh: "核心方向已对齐；标签仍在验证",
    },
  },
];

const whyChain = [
  { en: "Capabilities increase", zh: "能力增加" },
  { en: "One source creates multiple entries", zh: "同一来源出现多个入口" },
  { en: "Technology names compete with value", zh: "技术名称抢占价值理解" },
  { en: "Setup and management paths split", zh: "设置与管理路径分散" },
  { en: "Administrator cost grows", zh: "管理员成本上升" },
];

const beforeEntries = [
  { en: "Search connector", zh: "检索连接器" },
  { en: "Records sync", zh: "记录同步" },
  { en: "User sync", zh: "用户同步" },
  { en: "Workflow skill", zh: "工作流技能" },
  { en: "Entity: account", zh: "实体：账户" },
  { en: "Entity: contact", zh: "实体：联系人" },
];

const problemLayers = [
  {
    title: { en: "Discovery", zh: "发现" },
    body: {
      en: "The same business data source appeared as multiple cards, so administrators had to decode internal categories before choosing a path.",
      zh: "同一个业务数据源出现为多张卡片，管理员必须先理解内部分类才能选择路径。",
    },
  },
  {
    title: { en: "Understanding", zh: "理解" },
    body: {
      en: "Technology labels appeared before user value, while similar names and states made capabilities hard to compare.",
      zh: "技术标签先于用户价值出现，相似名称和状态让能力之间难以比较。",
    },
  },
  {
    title: { en: "Lifecycle", zh: "生命周期" },
    body: {
      en: "Discovery, authentication, rollout, and ongoing management lived in separate places with weak continuity.",
      zh: "发现、身份验证、发布范围和持续管理分散在不同位置，连续性不足。",
    },
  },
];

const evidence = [
  {
    label: { en: "User evidence", zh: "用户证据" },
    title: {
      en: "Administrators think in data sources.",
      zh: "管理员以数据源思考。",
    },
    body: {
      en: "They enter the catalog with a target source in mind. The first question is “What can this source do?” rather than “Which connection technology is behind it?”",
      zh: "他们带着明确数据源目标进入目录，首先想知道“这个来源能做什么”，而不是“背后是哪种连接技术”。",
    },
  },
  {
    label: { en: "Product evidence", zh: "产品证据" },
    title: {
      en: "Capability combinations are uneven.",
      zh: "能力组合并不均衡。",
    },
    body: {
      en: "Sources do not share the same capability set, and the product direction keeps evolving. A fixed template would create empty states and exceptions.",
      zh: "不同来源并不拥有相同能力组合，产品方向也会继续变化。固定模板会制造空状态和例外。",
    },
  },
  {
    label: { en: "Technical evidence", zh: "技术证据" },
    title: {
      en: "Some differences change the work.",
      zh: "有些差异会改变操作。",
    },
    body: {
      en: "Deployment model, ownership level, authentication, and lifecycle rules are real differences that should appear when they affect the next action.",
      zh: "部署模型、责任层级、身份验证和生命周期规则都是真实差异，应在影响下一步操作时出现。",
    },
  },
];

const principles = [
  {
    title: { en: "Data source first", zh: "数据源优先" },
    body: {
      en: "Start with the stable object administrators recognize.",
      zh: "优先使用管理员熟悉且稳定的对象。",
    },
  },
  {
    title: { en: "Value before technology", zh: "价值先于技术" },
    body: {
      en: "Explain what a capability enables before naming its type.",
      zh: "先说明能力带来的价值，再说明它的类型。",
    },
  },
  {
    title: { en: "Progressive disclosure", zh: "渐进披露" },
    body: {
      en: "Catalog for scanning, panel for comparing, setup for complex tasks.",
      zh: "目录用于扫描，面板用于比较，设置页用于复杂任务。",
    },
  },
  {
    title: { en: "Separate responsibilities", zh: "职责分离" },
    body: {
      en: "Discovery and management share context but carry different density.",
      zh: "发现与管理共享上下文，但信息密度不同。",
    },
  },
  {
    title: { en: "Consistent, not rigid", zh: "一致但不僵化" },
    body: {
      en: "Use shared states and structure without forcing every source to look identical.",
      zh: "共享状态与结构，但不强迫所有来源完全相同。",
    },
  },
  {
    title: { en: "Design for transition", zh: "为过渡而设计" },
    body: {
      en: "Let near-term delivery and long-term direction use the same foundation.",
      zh: "让近期落地和长期方向共用同一基础模型。",
    },
  },
];

const decisions = [
  {
    code: "A",
    title: { en: "Redefine the top-level object", zh: "重新定义顶层对象" },
    observation: {
      en: "A source identity remains stable while capability packaging changes.",
      zh: "数据源身份相对稳定，而能力包装方式会变化。",
    },
    explored: [
      {
        en: "Keep one card per connector type",
        zh: "继续为每种连接器类型保留卡片",
      },
      {
        en: "Organize the catalog by capability tabs",
        zh: "按能力标签组织目录",
      },
      { en: "Use one entry per data source", zh: "每个数据源只保留一个入口" },
    ],
    decision: {
      en: "One data source / one entry point. Capabilities expand only after the source is selected.",
      zh: "一个数据源 / 一个入口。选择数据源后再展开能力。",
    },
  },
  {
    code: "B",
    title: { en: "Make capabilities modular", zh: "让能力成为模块" },
    observation: {
      en: "Different sources support different combinations; fixed pages would create empty or misleading areas.",
      zh: "不同来源支持不同组合；固定页面会产生空区域或误导。",
    },
    explored: [
      {
        en: "Create a unique page for each combination",
        zh: "为每种组合创建独立页面",
      },
      { en: "Always show the same tabs", zh: "始终显示相同标签页" },
      { en: "Render only supported capability rows", zh: "只显示已支持能力行" },
    ],
    decision: {
      en: "Each capability row uses a shared anatomy: value, state, dependency, and next action.",
      zh: "每条能力行使用共享结构：价值、状态、依赖和下一步操作。",
    },
  },
  {
    code: "C",
    title: {
      en: "Separate discovery from lifecycle management",
      zh: "分离发现与生命周期管理",
    },
    observation: {
      en: "The catalog was taking on discovery, configuration, permissions, and lifecycle controls at once.",
      zh: "目录同时承担发现、配置、权限和生命周期控制，信息密度失控。",
    },
    explored: [
      { en: "Complete every task in the catalog", zh: "在目录中完成所有任务" },
      {
        en: "Route to unrelated legacy surfaces",
        zh: "跳转到彼此割裂的旧页面",
      },
      {
        en: "Connect focused surfaces with shared language",
        zh: "用一致语言连接专注页面",
      },
    ],
    decision: {
      en: "The catalog starts; setup completes; management owns real connection instances.",
      zh: "目录负责启动；设置负责完成；管理页负责真实连接实例。",
    },
  },
];

const journey = [
  {
    step: "01",
    title: { en: "Connector library", zh: "连接器库" },
    task: { en: "Find the data source", zh: "找到数据源" },
    density: { en: "Low density", zh: "低信息密度" },
    detail: {
      en: "Source name, value summary, capability overview, primary action.",
      zh: "数据源名称、价值摘要、能力概览、主操作。",
    },
  },
  {
    step: "02",
    title: { en: "Capability panel", zh: "能力面板" },
    task: { en: "Compare what is supported", zh: "比较支持的能力" },
    density: { en: "Medium density", zh: "中信息密度" },
    detail: {
      en: "Capability value, state, dependency, and action remain in source context.",
      zh: "能力价值、状态、依赖和操作保留在数据源上下文中。",
    },
  },
  {
    step: "03",
    title: { en: "Setup", zh: "设置" },
    task: { en: "Configure content and access", zh: "配置内容与访问" },
    density: { en: "High density", zh: "高信息密度" },
    detail: {
      en: "Authentication, content selection, and rollout appear only inside a clear task.",
      zh: "身份验证、内容选择与发布范围只在明确任务中展开。",
    },
  },
  {
    step: "04",
    title: { en: "Connection management", zh: "连接管理" },
    task: { en: "Manage live instances", zh: "管理真实实例" },
    density: { en: "High density", zh: "高信息密度" },
    detail: {
      en: "Display name, capability, state, scope, and actions use the same vocabulary.",
      zh: "显示名称、能力、状态、范围和操作使用同一套语言。",
    },
  },
];

const capabilityLibrary = {
  realtime: {
    name: { en: "Real-time retrieval", zh: "实时检索" },
    value: {
      en: "Answer with source data at request time.",
      zh: "在请求时使用源数据回答。",
    },
  },
  index: {
    name: { en: "Background indexing", zh: "后台索引" },
    value: {
      en: "Prepare organization content for broad discovery.",
      zh: "为组织范围检索预先准备内容。",
    },
  },
  user: {
    name: { en: "User-level sync", zh: "用户级同步" },
    value: {
      en: "Let each user connect data under their own account.",
      zh: "让每位用户用自己的账户连接数据。",
    },
  },
  org: {
    name: { en: "Organization sync", zh: "组织级同步" },
    value: {
      en: "Admin-managed connection for a governed audience.",
      zh: "由管理员管理并发布给受控范围。",
    },
  },
  skill: {
    name: { en: "Guided skill", zh: "引导式技能" },
    value: {
      en: "Turn source capability into a repeatable workflow.",
      zh: "将来源能力转化为可复用工作流。",
    },
  },
};

const scenarios: Scenario[] = [
  {
    name: { en: "Customer records", zh: "客户记录" },
    type: { en: "Multi-capability cloud source", zh: "多能力云端来源" },
    purpose: {
      en: "Proves the full hybrid capability story.",
      zh: "验证完整混合能力故事。",
    },
    capabilities: [
      {
        ...capabilityLibrary.realtime,
        state: "Enabled",
        action: { en: "Manage", zh: "管理" },
        dependency: { en: "User account required", zh: "需要用户账户" },
      },
      {
        ...capabilityLibrary.index,
        state: "Available",
        action: { en: "Start setup", zh: "开始设置" },
        dependency: { en: "Admin consent", zh: "管理员授权" },
      },
      {
        ...capabilityLibrary.skill,
        state: "Preview",
        action: { en: "Review scope", zh: "查看范围" },
        dependency: { en: "Uses connected source", zh: "依赖已连接来源" },
      },
    ],
  },
  {
    name: { en: "Knowledge base", zh: "知识库" },
    type: { en: "Dual ownership model", zh: "双责任模型" },
    purpose: {
      en: "Separates organization and user-level responsibilities.",
      zh: "区分组织级与用户级责任。",
    },
    capabilities: [
      {
        ...capabilityLibrary.org,
        state: "Enabled",
        action: { en: "Edit rollout", zh: "编辑发布范围" },
        dependency: { en: "Admin-owned", zh: "管理员负责" },
      },
      {
        ...capabilityLibrary.user,
        state: "Needs user sign-in",
        action: { en: "Show instructions", zh: "查看说明" },
        dependency: { en: "User-owned", zh: "用户负责" },
      },
    ],
  },
  {
    name: { en: "Self-hosted repository", zh: "自托管资料库" },
    type: { en: "Deployment boundary", zh: "部署边界" },
    purpose: {
      en: "Keeps infrastructure constraints visible when they affect setup.",
      zh: "基础设施影响设置时保持可见。",
    },
    capabilities: [
      {
        ...capabilityLibrary.index,
        state: "Available",
        action: { en: "Configure gateway", zh: "配置网关" },
        dependency: { en: "Network gateway", zh: "网络网关" },
      },
    ],
  },
  {
    name: { en: "Work tracker", zh: "工作追踪器" },
    type: { en: "Minimum capability source", zh: "最小能力来源" },
    purpose: {
      en: "Shows the model does not manufacture empty sections.",
      zh: "证明模型不会制造空模块。",
    },
    capabilities: [
      {
        ...capabilityLibrary.realtime,
        state: "Available",
        action: { en: "Connect", zh: "连接" },
        dependency: { en: "User account required", zh: "需要用户账户" },
      },
    ],
  },
];

const statusGroups = [
  {
    title: { en: "Validated / aligned", zh: "已验证 / 已对齐" },
    items: [
      {
        en: "Data-source-level entry as the scalable catalog direction.",
        zh: "数据源级入口成为可扩展目录方向。",
      },
      {
        en: "Flexible panel structure for uneven capability combinations.",
        zh: "灵活面板结构适配不均衡能力组合。",
      },
      {
        en: "Clear boundaries between catalog, setup, and management.",
        zh: "目录、设置与管理边界清晰。",
      },
      {
        en: "Display name and first-level information hierarchy direction.",
        zh: "显示名称优先与第一层信息层级方向收敛。",
      },
    ],
  },
  {
    title: { en: "Delivered artifacts", zh: "已形成产物" },
    items: [
      {
        en: "End-to-end journey from discovery to lifecycle management.",
        zh: "从发现到生命周期管理的端到端旅程。",
      },
      {
        en: "Decision logic, principles, and scenario coverage model.",
        zh: "决策逻辑、设计原则与场景覆盖模型。",
      },
      {
        en: "Reusable terminology, state, and component anatomy.",
        zh: "可复用的术语、状态和组件结构。",
      },
    ],
  },
  {
    title: { en: "Open / under validation", zh: "开放项 / 待验证" },
    items: [
      {
        en: "Final presentation of technical type labels.",
        zh: "技术类型标签的最终表现。",
      },
      {
        en: "Boundary between current catalog and long-term architecture.",
        zh: "当前目录与长期架构的边界。",
      },
      {
        en: "Detailed authentication and deployment constraints.",
        zh: "身份验证与部署约束的细节影响。",
      },
      {
        en: "No public production efficiency metric is claimed.",
        zh: "不声明尚无公开依据的生产效率指标。",
      },
    ],
  },
];


function useLocalized() {
  const { lang, t } = useLanguage();
  return { lang, t, pick: (value: Localized) => value[lang] };
}

function BackToProjects() {
  const { t } = useLanguage();
  return (
    <Reveal className="mb-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#626872] transition-colors hover:text-[#1267d6] motion-reduce:transition-none"
      >
        <span aria-hidden="true">←</span>
        {t("All Projects", "所有项目")}
      </Link>
    </Reveal>
  );
}

function StatusBadge({ state, dark = false }: { state: CapabilityState; dark?: boolean }) {
  const { lang } = useLanguage();
  const label: Record<CapabilityState, Localized> = {
    Available: { en: "Available", zh: "可用" },
    Enabled: { en: "Enabled", zh: "已启用" },
    "Needs user sign-in": { en: "Needs user sign-in", zh: "需要用户登录" },
    Preview: { en: "Preview", zh: "预览" },
  };
  const palette: Record<CapabilityState, string> = {
    Available: dark
      ? "border-[#70a9f5]/40 bg-[#1267d6]/20 text-[#d8e9ff]"
      : "border-[#1267d6]/22 bg-[#edf4ff] text-[#1267d6]",
    Enabled: dark
      ? "border-emerald-300/30 bg-emerald-300/12 text-emerald-100"
      : "border-emerald-600/18 bg-emerald-50 text-emerald-700",
    "Needs user sign-in": dark
      ? "border-amber-300/35 bg-amber-300/12 text-amber-100"
      : "border-amber-600/20 bg-amber-50 text-amber-700",
    Preview: dark
      ? "border-violet-300/35 bg-violet-300/12 text-violet-100"
      : "border-violet-600/18 bg-violet-50 text-violet-700",
  };

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${palette[state]}`}>
      {label[state][lang]}
    </span>
  );
}

function CapabilityPill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${
        dark
          ? "border-white/14 bg-white/[0.06] text-white/72"
          : "border-[#c9cdd4] bg-white text-[#626872]"
      }`}
    >
      {children}
    </span>
  );
}

function SourceGlyph({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <div
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border font-mono text-xs font-semibold ${
        dark
          ? "border-white/12 bg-white/[0.07] text-white"
          : "border-[#dfe2e7] bg-[#f7f8fa] text-[#1267d6]"
      }`}
      aria-hidden="true"
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

function ConnectorCard({ name, dense = false, dark = false }: { name: string; dense?: boolean; dark?: boolean }) {
  const { t } = useLanguage();
  return (
    <div
      className={`rounded-[20px] border p-4 ${
        dark
          ? "border-white/12 bg-white/[0.055]"
          : "border-[#dfe2e7] bg-white shadow-[0_12px_30px_rgba(17,19,24,0.04)]"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <SourceGlyph name={name} dark={dark} />
        <div>
          <h3 className={`text-sm font-semibold ${dark ? "text-white" : "text-[#111318]"}`}>{name}</h3>
          <p className={`text-xs ${dark ? "text-white/45" : "text-[#8e949e]"}`}>
            {dense ? t("Technical connector", "技术连接器") : t("Data source", "数据源")}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <CapabilityPill dark={dark}>{t("Search", "检索")}</CapabilityPill>
        {!dense && <CapabilityPill dark={dark}>{t("Sync", "同步")}</CapabilityPill>}
        {!dense && <CapabilityPill dark={dark}>{t("Skill", "技能")}</CapabilityPill>}
      </div>
    </div>
  );
}

function CapabilityRows({ dark = false }: { dark?: boolean }) {
  const { lang, t } = useLanguage();
  const rows = [
    {
      title: capabilityLibrary.realtime.name,
      value: capabilityLibrary.realtime.value,
      state: "Enabled" as CapabilityState,
      dependency: { en: "User account required", zh: "需要用户账户" },
      action: { en: "Manage", zh: "管理" },
    },
    {
      title: capabilityLibrary.index.name,
      value: capabilityLibrary.index.value,
      state: "Available" as CapabilityState,
      dependency: { en: "Admin consent", zh: "管理员授权" },
      action: { en: "Start setup", zh: "开始设置" },
    },
    {
      title: capabilityLibrary.skill.name,
      value: capabilityLibrary.skill.value,
      state: "Preview" as CapabilityState,
      dependency: { en: "Uses connected source", zh: "依赖已连接来源" },
      action: { en: "Review scope", zh: "查看范围" },
    },
  ];

  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div
          key={row.title.en}
          className={`rounded-[18px] border p-4 ${
            dark ? "border-white/12 bg-[#171a21]" : "border-[#dfe2e7] bg-[#f7f8fa]"
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h4 className={`font-semibold ${dark ? "text-white" : "text-[#111318]"}`}>{row.title[lang]}</h4>
              <p className={`mt-1 text-sm leading-6 ${dark ? "text-white/56" : "text-[#626872]"}`}>{row.value[lang]}</p>
            </div>
            <StatusBadge state={row.state} dark={dark} />
          </div>
          <div className={`mt-4 grid gap-3 text-sm sm:grid-cols-2 ${dark ? "text-white/70" : "text-[#626872]"}`}>
            <div className={`rounded-2xl border p-3 ${dark ? "border-white/10 bg-white/[0.045]" : "border-[#dfe2e7] bg-white"}`}>
              <span className={`block font-mono text-[10px] uppercase tracking-[0.16em] ${dark ? "text-white/38" : "text-[#8e949e]"}`}>
                {t("Dependency", "依赖")}
              </span>
              <span>{row.dependency[lang]}</span>
            </div>
            <div className={`rounded-2xl border p-3 ${dark ? "border-white/10 bg-white/[0.045]" : "border-[#dfe2e7] bg-white"}`}>
              <span className={`block font-mono text-[10px] uppercase tracking-[0.16em] ${dark ? "text-white/38" : "text-[#8e949e]"}`}>
                {t("Next action", "下一步操作")}
              </span>
              <span>{row.action[lang]}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroVisual({ thumbnailSrc }: { thumbnailSrc: string }) {
  const { t } = useLanguage();
  return (
    <Reveal delay={0.08}>
      <div className="rounded-[28px] border border-[#dfe2e7] bg-white p-4 shadow-[0_30px_80px_rgba(17,19,24,0.10)] md:p-5">
        <Image
          src={thumbnailSrc}
          alt={t(
            "Editorial diagram showing fragmented connectors converging into one source object and modular capabilities",
            "碎片连接器汇聚为一个数据源对象和模块化能力的编辑式示意图",
          )}
          width={1600}
          height={1100}
          className="w-full rounded-[22px] border border-[#dfe2e7] bg-[#f7f8fa]"
          priority
        />
        <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#626872] sm:gap-3">
          <div className="rounded-2xl border border-[#dfe2e7] bg-[#f7f8fa] p-3">{t("Converge", "汇聚")}</div>
          <div className="rounded-2xl border border-[#dfe2e7] bg-[#f7f8fa] p-3">{t("Object", "对象")}</div>
          <div className="rounded-2xl border border-[#dfe2e7] bg-[#f7f8fa] p-3">{t("Modules", "模块")}</div>
        </div>
      </div>
    </Reveal>
  );
}

function ConvergenceModel() {
  const { lang, t } = useLanguage();
  return (
    <Reveal>
      <div className="rounded-[28px] border border-[#dfe2e7] bg-white p-5 shadow-[0_18px_46px_rgba(17,19,24,0.055)] md:p-7">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8e949e]">
            {t("Convergence model", "汇聚模型")}
          </p>
          <p className="text-sm text-[#626872]">
            {t("connector entries → source object → capability modules", "连接器入口 → 来源对象 → 能力模块")}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_90px_1fr_90px_1.15fr] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {beforeEntries.slice(0, 4).map((entry) => (
              <div key={entry.en} className="rounded-2xl border border-[#dfe2e7] bg-[#f7f8fa] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8e949e]">{t("Fragment", "碎片")}</p>
                <p className="mt-2 font-semibold text-[#111318]">{entry[lang]}</p>
              </div>
            ))}
          </div>
          <div className="relative hidden h-px bg-[#c9cdd4] lg:block" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#171a21] text-white">→</span>
          </div>
          <div className="rounded-[24px] border border-[#1267d6]/30 bg-[#edf4ff] p-5">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
              {t("Stable object", "稳定对象")}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <SourceGlyph name={t("Customer Records", "客户记录")} />
              <div>
                <h3 className="text-2xl font-[720] tracking-[-0.035em] text-[#111318]">
                  {t("Customer Records", "客户记录")}
                </h3>
                <p className="mt-1 text-sm text-[#626872]">{t("One source-level entry", "一个数据源级入口")}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <CapabilityPill>{t("Search", "检索")}</CapabilityPill>
              <CapabilityPill>{t("Sync", "同步")}</CapabilityPill>
              <CapabilityPill>{t("Skill", "技能")}</CapabilityPill>
            </div>
          </div>
          <div className="relative hidden h-px bg-[#c9cdd4] lg:block" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#1267d6] text-white">→</span>
          </div>
          <div className="rounded-[24px] border border-[#dfe2e7] bg-[#f7f8fa] p-4">
            <CapabilityRows />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function BeforeAfter() {
  const { lang, t } = useLanguage();
  return (
    <Reveal>
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <EditorialCard className="bg-[#f7f8fa] shadow-none">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">{t("Before", "改版前")}</p>
              <h3 className="mt-2 text-2xl font-[720] tracking-[-0.035em] text-[#111318]">
                {t("Fragmented entries", "碎片化入口")}
              </h3>
            </div>
            <NumberBadge>01</NumberBadge>
          </div>
          <p className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">
            {t(
              "Problem: one source appears as many unrelated starting points. Text labels accompany color cues for accessibility.",
              "问题：一个来源变成多个看似无关的起点。颜色提示同时配合文字标签，便于无障碍理解。",
            )}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {beforeEntries.map((entry) => (
              <ConnectorCard key={entry.en} name={entry[lang]} dense />
            ))}
          </div>
        </EditorialCard>

        <EditorialCard>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">{t("After", "改版后")}</p>
              <h3 className="mt-2 text-2xl font-[720] tracking-[-0.035em] text-[#111318]">
                {t("Unified source model", "统一数据源模型")}
              </h3>
            </div>
            <NumberBadge>02</NumberBadge>
          </div>
          <div className="rounded-[24px] border border-[#1267d6]/24 bg-[#edf4ff] p-5">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
              {t("Data source", "数据源")}
            </p>
            <ConnectorCard name={t("Customer Records", "客户记录")} />
            <p className="mt-5 text-sm leading-6 text-[#626872]">
              {t(
                "The catalog represents the stable object first; tags summarize capability availability without splitting the entry.",
                "目录优先呈现稳定对象；标签只概览能力可用性，不再拆分入口。",
              )}
            </p>
          </div>
          <div className="mt-4 rounded-[24px] border border-[#dfe2e7] bg-[#f7f8fa] p-4">
            <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">
              {t("Capability panel", "能力面板")}
            </p>
            <CapabilityRows />
          </div>
        </EditorialCard>
      </div>
    </Reveal>
  );
}

function ProblemLayers() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {problemLayers.map((p, index) => (
        <Reveal key={p.title.en} delay={index * 0.04}>
          <EditorialCard className="h-full">
            <NumberBadge>0{index + 1}</NumberBadge>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#111318]">{pick(p.title)}</h3>
            <p className="mt-3 text-sm leading-7 text-[#626872]">{pick(p.body)}</p>
          </EditorialCard>
        </Reveal>
      ))}
    </div>
  );
}

function EvidenceGrid() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {evidence.map((item, index) => (
        <Reveal key={item.label.en} delay={index * 0.04}>
          <EditorialCard className="h-full bg-[#f7f8fa] shadow-none">
            <div className="mb-6 flex items-start justify-between gap-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">{pick(item.label)}</p>
              <NumberBadge>0{index + 1}</NumberBadge>
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111318]">{pick(item.title)}</h3>
            <p className="mt-4 text-sm leading-7 text-[#626872]">{pick(item.body)}</p>
          </EditorialCard>
        </Reveal>
      ))}
    </div>
  );
}

function PrinciplesGrid() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {principles.map((principle, index) => (
        <Reveal key={principle.title.en} delay={index * 0.03}>
          <EditorialCard className="h-full">
            <div className="mb-7 flex items-center justify-between gap-4">
              <NumberBadge>0{index + 1}</NumberBadge>
              <span className="h-px flex-1 bg-[#dfe2e7]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111318]">{pick(principle.title)}</h3>
            <p className="mt-3 text-sm leading-7 text-[#626872]">{pick(principle.body)}</p>
          </EditorialCard>
        </Reveal>
      ))}
    </div>
  );
}

function DecisionCard({ decision, index }: { decision: (typeof decisions)[number]; index: number }) {
  const { t, pick } = useLocalized();
  return (
    <Reveal delay={index * 0.05}>
      <EditorialCard dark className="h-full">
        <div className="mb-7 flex flex-wrap items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1267d6] font-mono text-sm font-semibold text-white">
            {decision.code}
          </span>
          <h3 className="text-2xl font-[720] leading-tight tracking-[-0.035em] text-white">{pick(decision.title)}</h3>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[20px] border border-white/10 bg-[#111318] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              {t("Observation", "观察")}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/68">{pick(decision.observation)}</p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[#111318] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              {t("Explored options", "探索方案")}
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-white/68">
              {decision.explored.map((option, optionIndex) => (
                <li key={option.en} className="flex gap-3">
                  <span className="font-mono text-white/32">{optionIndex + 1}</span>
                  <span>{pick(option)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-[20px] border border-[#70a9f5]/24 bg-[#1267d6]/16 p-5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#70a9f5]">
            {t("Decision", "决策")}
          </p>
          <p className="mt-3 text-base leading-7 text-white">{pick(decision.decision)}</p>
        </div>
      </EditorialCard>
    </Reveal>
  );
}

function JourneyMap() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {journey.map((item, index) => (
        <Reveal key={item.step} delay={index * 0.04}>
          <EditorialCard className="relative h-full bg-white">
            {index < journey.length - 1 && (
              <div className="absolute -right-2 top-10 hidden h-px w-4 bg-[#c9cdd4] lg:block" aria-hidden="true" />
            )}
            <div className="mb-8 flex items-center justify-between gap-3">
              <NumberBadge>{item.step}</NumberBadge>
              <span className="rounded-full border border-[#dfe2e7] bg-[#f7f8fa] px-3 py-1 text-xs text-[#626872]">
                {pick(item.density)}
              </span>
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111318]">{pick(item.title)}</h3>
            <p className="mt-2 font-semibold text-[#1267d6]">{pick(item.task)}</p>
            <p className="mt-4 text-sm leading-7 text-[#626872]">{pick(item.detail)}</p>
          </EditorialCard>
        </Reveal>
      ))}
    </div>
  );
}

function LoopDiagram() {
  const { t } = useLanguage();
  const steps = [
    { label: t("Source", "来源"), value: t("What am I connecting?", "我在连接什么？") },
    { label: t("Capabilities", "能力"), value: t("What can it do?", "它能做什么？") },
    { label: t("State", "状态"), value: t("What is ready now?", "当前什么可用？") },
    { label: t("Action", "行动"), value: t("What should I do next?", "下一步做什么？") },
  ];

  return (
    <Reveal>
      <div className="rounded-[28px] border border-[#dfe2e7] bg-white p-5 md:p-7">
        <div className="grid gap-0 overflow-hidden rounded-[24px] border border-[#dfe2e7] md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.label} className="relative border-b border-[#dfe2e7] bg-[#f7f8fa] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              {index < steps.length - 1 && (
                <span className="absolute -right-3 top-8 z-10 hidden h-6 w-6 place-items-center rounded-full bg-[#171a21] text-xs text-white md:grid" aria-hidden="true">
                  →
                </span>
              )}
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8e949e]">{step.label}</p>
              <p className="mt-8 text-lg font-semibold leading-6 tracking-[-0.02em] text-[#111318]">{step.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4 text-sm text-[#626872]">
          <span className="h-px flex-1 bg-[#c9cdd4]" aria-hidden="true" />
          <span>{t("shared language carries context across surfaces", "共享语言让上下文跨页面延续")}</span>
          <span className="text-xl text-[#1267d6]" aria-hidden="true">↩</span>
        </div>
      </div>
    </Reveal>
  );
}

function SystemMatrix() {
  const { lang, t, pick } = useLocalized();
  const [selected, setSelected] = useState(0);
  const scenario = scenarios[selected];

  return (
    <Reveal>
      <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <EditorialCard className="bg-[#f7f8fa] shadow-none">
          <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">
            {t("Scenario matrix", "场景矩阵")}
          </p>
          <div className="space-y-2" role="group" aria-label={t("System scenario selector", "系统场景选择")}>
            {scenarios.map((item, index) => (
              <button
                key={item.name.en}
                type="button"
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
                className={`w-full rounded-[18px] border p-4 text-left transition-colors motion-reduce:transition-none ${
                  selected === index
                    ? "border-[#1267d6]/36 bg-white text-[#111318] shadow-[0_10px_26px_rgba(18,103,214,0.08)]"
                    : "border-[#dfe2e7] bg-white/60 text-[#626872] hover:bg-white"
                }`}
              >
                <span className="block text-sm font-semibold">{pick(item.name)}</span>
                <span className="mt-1 block text-xs text-[#8e949e]">{pick(item.type)}</span>
                <span className="mt-3 block text-xs leading-5 text-[#1267d6]">{pick(item.purpose)}</span>
              </button>
            ))}
          </div>
        </EditorialCard>

        <div className="rounded-[28px] border border-[#dfe2e7] bg-white p-5 shadow-[0_18px_46px_rgba(17,19,24,0.055)] md:p-6">
          <div className="mb-5 rounded-[22px] border border-[#dfe2e7] bg-[#f7f8fa] p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">{pick(scenario.type)}</p>
            <h3 className="mt-2 text-3xl font-[720] tracking-[-0.04em] text-[#111318]">{pick(scenario.name)}</h3>
            <p className="mt-2 text-sm leading-6 text-[#626872]">{pick(scenario.purpose)}</p>
          </div>
          <div className="space-y-3">
            {scenario.capabilities.map((capability) => (
              <div key={capability.name.en} className="rounded-[20px] border border-[#dfe2e7] bg-white p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-[#111318]">{capability.name[lang]}</h4>
                    <p className="mt-1 text-sm leading-6 text-[#626872]">{capability.value[lang]}</p>
                  </div>
                  <StatusBadge state={capability.state} />
                </div>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#dfe2e7] bg-[#f7f8fa] p-3">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8e949e]">
                      {t("Dependency", "依赖")}
                    </span>
                    <span className="text-[#626872]">{pick(capability.dependency)}</span>
                  </div>
                  <div className="rounded-2xl border border-[#dfe2e7] bg-[#f7f8fa] p-3">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8e949e]">
                      {t("Next action", "下一步操作")}
                    </span>
                    <span className="text-[#626872]">{pick(capability.action)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function StatusColumns({ focus = "all" }: { focus?: "all" | "open" }) {
  const { pick } = useLocalized();
  const groups = focus === "open" ? statusGroups.slice(2) : statusGroups;
  return (
    <div className={`grid gap-5 ${focus === "open" ? "lg:grid-cols-1" : "lg:grid-cols-3"}`}>
      {groups.map((group, groupIndex) => (
        <Reveal key={group.title.en} delay={groupIndex * 0.04}>
          <EditorialCard className="h-full">
            <h3 className="mb-5 text-xl font-semibold tracking-[-0.02em] text-[#111318]">{pick(group.title)}</h3>
            <ul className="space-y-3 text-sm leading-7 text-[#626872]">
              {group.items.map((item) => (
                <li key={item.en} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1267d6]" aria-hidden="true" />
                  <span>{pick(item)}</span>
                </li>
              ))}
            </ul>
          </EditorialCard>
        </Reveal>
      ))}
    </div>
  );
}

export default function UnifiedConnectorExperiencePage() {
  const { t } = useLanguage();
  const { pick } = useLocalized();
  const thumbnailSrc = `${basePath}/images/unified-connector-experience/thumbnail.svg`;

  return (
    <>
      <ReadingProgress label={t("Reading progress", "阅读进度")} />
      <Navigation />
      <main className="min-h-screen bg-[#f7f8fa] text-[#111318]">
        <Chapter id="top" tone="surface" className="pt-36 md:pt-44 lg:pt-48">
          <BackToProjects />
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e949e]">
                <span className="h-px w-10 bg-[#c9cdd4]" aria-hidden="true" />
                <span>{t("Systems Design · Enterprise AI", "系统设计 · 企业 AI")}</span>
              </div>
              <h1 className="max-w-4xl text-[clamp(3.3rem,7.4vw,6.9rem)] font-[720] leading-[0.92] tracking-[-0.07em] text-[#111318]">
                Unified Enterprise <span className="text-[#1267d6]">Connector</span> Experience
              </h1>
              <p className="mt-8 max-w-2xl text-[clamp(1.45rem,2.5vw,2.05rem)] font-medium leading-[1.22] tracking-[-0.035em] text-[#171a21]">
                {t("One data source. One entry point. Multiple capabilities.", "一个数据源，一个入口，多种能力。")}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#626872] md:text-lg">
                {t(
                  "I redesigned how enterprise administrators discover, compare, configure, and manage multiple connection capabilities under the same data source—without hiding differences that change their actions.",
                  "我重新设计了企业管理员发现、比较、配置并持续管理同一数据源下多种连接能力的方式，同时保留会改变操作的真实差异。",
                )}
              </p>
            </Reveal>
            <HeroVisual thumbnailSrc={thumbnailSrc} />
          </div>
          <Reveal className="mt-12">
            <MetaGrid items={meta.map((item) => ({ label: pick(item.label), value: pick(item.value) }))} />
          </Reveal>
        </Chapter>

        <Chapter id="bottleneck" tone="paper">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
            <SectionHeading
              index="01"
              eyebrow={t("Bottleneck", "瓶颈")}
              title={t(
                "More capabilities created more entry points—but not more clarity.",
                "更多能力带来了更多入口，却没有带来更清晰的体验。",
              )}
              body={t(
                "The work was not a visual clean-up. It was a product-model problem caused by growth.",
                "这不是一次视觉整理，而是能力增长引发的产品模型问题。",
              )}
            />
            <div>
              <Reveal>
                <p className="mb-8 text-lg leading-8 text-[#626872]">
                  {t(
                    "As enterprise AI platforms added new ways to connect business data, a single source could support live retrieval, background indexing, user-owned sync, organization-owned sync, and guided workflows. The existing model turned each technical capability into a separate connector entry.",
                    "随着企业 AI 平台增加更多连接业务数据的方式，同一个来源可能同时支持实时检索、后台索引、用户级同步、组织级同步和引导式工作流。原有模型把每种技术能力都表现为独立连接器入口。",
                  )}
                </p>
              </Reveal>
              <div className="grid gap-3 md:grid-cols-5">
                {whyChain.map((item, index) => (
                  <Reveal key={item.en} delay={index * 0.03}>
                    <div className="relative h-full rounded-[20px] border border-[#dfe2e7] bg-white p-4">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">0{index + 1}</p>
                      <p className="mt-8 text-sm font-semibold leading-6 text-[#111318]">{pick(item)}</p>
                      {index < whyChain.length - 1 && (
                        <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[#c9cdd4] md:block" aria-hidden="true" />
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14">
            <SectionHeading
              index="01A"
              eyebrow={t("Before / After", "改版前 / 改版后")}
              title={t("The object changed from connectors to data sources.", "顶层对象从连接器变成数据源。")}
              body={t(
                "The abstract UI below uses sanitized examples only. It shows the structural shift, not unreleased product screens.",
                "下方为脱敏抽象界面，只展示结构变化，不使用未发布产品截图。",
              )}
            />
            <div className="mt-10">
              <BeforeAfter />
            </div>
          </div>
        </Chapter>

        <Chapter id="gap" tone="surface">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <SectionHeading
              index="02"
              eyebrow={t("Gap", "断点")}
              title={t("The visible issue was duplicate cards. The real gap was decision continuity.", "表面问题是卡片重复，真实断点是决策连续性。")}
              body={t(
                "Discovery, understanding, and lifecycle work were split, so administrators had to reconstruct context before taking the next action.",
                "发现、理解和生命周期工作被拆开，管理员必须在下一步行动前重新拼接上下文。",
              )}
            />
            <ProblemLayers />
          </div>
          <div className="mt-14">
            <SectionHeading
              index="02A"
              eyebrow={t("Evidence", "证据")}
              title={t("Three evidence streams shaped the model.", "三类证据共同塑造模型。")}
              body={t(
                "Raw internal inputs are translated into public insights: user behavior, product scalability, and technical constraints.",
                "内部原始材料被转译为可公开洞察：用户行为、产品扩展性与技术约束。",
              )}
            />
            <div className="mt-10">
              <EvidenceGrid />
            </div>
          </div>
          <Reveal className="mt-14">
            <StatementBand label={t("Problem redefinition", "问题重定义")}>
              {t(
                "Not “How do we reduce cards?” How might we make multiple connection capabilities feel like one coherent, scalable, and manageable system—without hiding technical differences that change the work?",
                "不是“如何减少卡片？”而是：如何在不掩盖真实技术差异的前提下，让多种连接能力在管理员眼中形成一个统一、可扩展、可管理的系统？",
              )}
            </StatementBand>
          </Reveal>
        </Chapter>

        <Chapter id="loop" tone="paper">
          <SectionHeading
            index="03"
            eyebrow={t("Loop", "闭环")}
            title={t("A shared language carries the source across discovery, setup, and management.", "用共享语言让数据源贯穿发现、设置与管理。")}
            body={t(
              "Before drawing detailed screens, I made the evaluation criteria explicit so “unified” would not become a vague visual goal.",
              "在绘制细节页面前，我先明确评估标准，避免“统一”变成模糊的视觉目标。",
            )}
          />
          <div className="mt-10">
            <PrinciplesGrid />
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <SectionHeading
              index="03A"
              eyebrow={t("Journey", "旅程")}
              title={t("Four surfaces, one mental model.", "四步旅程，一个心智模型。")}
              body={t(
                "The final model connects a low-density discovery moment with high-density setup and lifecycle management.",
                "最终模型将低密度发现时刻与高密度设置和生命周期管理连接起来。",
              )}
            />
            <LoopDiagram />
          </div>
          <div className="mt-10">
            <JourneyMap />
          </div>
        </Chapter>

        <Chapter id="decision" tone="dark">
          <SectionHeading
            index="04"
            eyebrow={t("Decision", "决策")}
            title={t("Three decisions changed the product direction.", "三组决策改变产品方向。")}
            body={t(
              "The detailed decision set is grouped into three public narratives: object model, capability model, and lifecycle model.",
              "细节决策在公开页面中收敛为三条主线：对象模型、能力模型和生命周期模型。",
            )}
            dark
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {decisions.map((decision, index) => (
              <DecisionCard key={decision.code} decision={decision} index={index} />
            ))}
          </div>
          <div className="mt-12">
            <ConvergenceModel />
          </div>
        </Chapter>

        <Chapter id="proof" tone="surface">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <SectionHeading
              index="05"
              eyebrow={t("Proof", "验证")}
              title={t("The structure flexes by scenario instead of multiplying screens.", "结构按场景伸缩，而不是不断复制页面。")}
              body={t(
                "Four sanitized scenarios stress-test full, dual, constrained, and minimum capability combinations.",
                "四类脱敏场景验证完整、双责任、受约束和最小能力组合。",
              )}
            />
            <SystemMatrix />
          </div>
          <div className="mt-14">
            <SectionHeading
              index="05A"
              eyebrow={t("Validation & status", "验证与状态")}
              title={t("Clear outcomes, clear boundaries.", "结果清楚，边界也清楚。")}
              body={t(
                "The work aligned a data-source-level experience model and produced a complete review-ready journey. It intentionally avoids claiming production efficiency gains that were not publicly validated.",
                "这项工作对齐了数据源级体验模型，并形成可进入详细评审的完整旅程。页面刻意不声明尚未公开验证的生产效率提升。",
              )}
            />
            <div className="mt-10">
              <StatusColumns />
            </div>
          </div>
        </Chapter>

        <Chapter id="next" tone="paper">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
            <SectionHeading
              index="06"
              eyebrow={t("Next", "下一步")}
              title={t("A unified experience is not one that makes everything look the same.", "统一体验不是让所有连接器看起来相同。")}
              body={t(
                "It gives administrators a stable mental model—and reveals technical complexity only when it changes the next action.",
                "它建立稳定的用户心智模型，并只在技术差异会改变下一步操作时让复杂度出现。",
              )}
            />
            <div className="space-y-6">
              <StatusColumns focus="open" />
              <Reveal>
                <EditorialCard>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                    {t("Reflection", "反思")}
                  </p>
                  <blockquote className="mt-5 text-[clamp(1.6rem,3vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.045em] text-[#111318]">
                    {t(
                      "The most valuable artifact was not a set of screens. It was a product system that keeps answering: what am I connecting, what can it do, what state is it in, and what should I do next?",
                      "最有价值的产物不是几张页面，而是一套持续回答这些问题的产品系统：我正在连接什么、它能做什么、当前处于什么状态、下一步该做什么？",
                    )}
                  </blockquote>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 rounded-full border border-[#c9cdd4] px-5 py-3 text-sm font-semibold text-[#626872] transition-colors hover:border-[#1267d6] hover:text-[#1267d6] motion-reduce:transition-none"
                    >
                      <span aria-hidden="true">←</span>
                      {t("Back to projects", "返回项目")}
                    </Link>
                    <Link
                      href="/projects/connector-health-center"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1267d6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f56b6] motion-reduce:transition-none"
                    >
                      {t("View Connector Health Center", "查看连接器健康中心")}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </EditorialCard>
              </Reveal>
            </div>
          </div>
        </Chapter>
      </main>
    </>
  );
}

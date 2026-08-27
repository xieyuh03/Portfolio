'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import Navigation from "@/components/Navigation";
import FluidBackground from "@/components/FluidBackground";
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

function Fade({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  index,
  eyebrow,
  title,
  body,
}: {
  index: string;
  eyebrow: Localized;
  title: Localized;
  body?: Localized;
}) {
  const { pick } = useLocalized();
  return (
    <div className="md:col-span-4 md:sticky md:top-32 self-start">
      <span className="text-xs uppercase tracking-[0.24em] text-cyan-300/70 mb-3 block">
        {index}
      </span>
      <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
        {pick(eyebrow)}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
        {pick(title)}
      </h2>
      <div className="h-px w-14 bg-gradient-to-r from-cyan-300/70 to-transparent" />
      {body && (
        <p className="mt-6 text-gray-400 leading-relaxed text-base">
          {pick(body)}
        </p>
      )}
    </div>
  );
}

function Shell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-cyan-950/20 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.03]">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
}

function CapabilityPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
      {children}
    </span>
  );
}

function StatusBadge({ state }: { state: CapabilityState }) {
  const { lang } = useLanguage();
  const className = {
    Available: "border-blue-300/30 bg-blue-400/10 text-blue-100",
    Enabled: "border-emerald-300/30 bg-emerald-400/10 text-emerald-100",
    "Needs user sign-in": "border-amber-300/30 bg-amber-400/10 text-amber-100",
    Preview: "border-violet-300/30 bg-violet-400/10 text-violet-100",
  }[state];
  const label: Record<CapabilityState, Localized> = {
    Available: { en: "Available", zh: "可用" },
    Enabled: { en: "Enabled", zh: "已启用" },
    "Needs user sign-in": { en: "Needs user sign-in", zh: "需要用户登录" },
    Preview: { en: "Preview", zh: "预览" },
  };
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${className}`}
    >
      {label[state][lang]}
    </span>
  );
}

function ConnectorCard({
  name,
  dense = false,
}: {
  name: string;
  dense?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/30 to-blue-500/20 text-xs font-bold text-white">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{name}</h3>
          <p className="text-xs text-gray-500">
            {dense
              ? t("Technical connector", "技术连接器")
              : t("Data source", "数据源")}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <CapabilityPill>{t("Search", "检索")}</CapabilityPill>
        {!dense && <CapabilityPill>{t("Sync", "同步")}</CapabilityPill>}
        {!dense && <CapabilityPill>{t("Skill", "技能")}</CapabilityPill>}
      </div>
    </div>
  );
}

function HeroVisual({ thumbnailSrc }: { thumbnailSrc: string }) {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900/80 to-blue-500/10 p-4 md:p-6">
      <div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl"
        aria-hidden="true"
      />
      <Image
        src={thumbnailSrc}
        alt={t(
          "Abstract interface showing one data source entry with multiple capability rows",
          "一个数据源入口承载多项能力的抽象界面",
        )}
        width={1600}
        height={1100}
        className="relative w-full rounded-[1.4rem] border border-white/10 bg-slate-950/60"
        priority
      />
      <div className="relative mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-300">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          {t("Discover", "发现")}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          {t("Compare", "比较")}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          {t("Manage", "管理")}
        </div>
      </div>
    </div>
  );
}

function BeforeAfter() {
  const { lang, t } = useLanguage();
  const [mode, setMode] = useState<"before" | "after">("before");
  const isBefore = mode === "before";
  return (
    <div className="space-y-5">
      <div
        className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1"
        role="group"
        aria-label={t("Before and after view selector", "前后对比视图选择")}
      >
        {(["before", "after"] as const).map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={mode === item}
            onClick={() => setMode(item)}
            className={`rounded-full px-5 py-2 text-sm transition-colors motion-reduce:transition-none ${mode === item ? "bg-cyan-300 text-slate-950" : "text-gray-300 hover:text-white"}`}
          >
            {item === "before" ? t("Before", "改版前") : t("After", "改版后")}
          </button>
        ))}
      </div>
      <Shell
        title={
          isBefore
            ? t("Fragmented entries", "碎片化入口")
            : t("Unified source model", "统一数据源模型")
        }
      >
        <div className="min-h-[420px] p-5 md:p-7">
          {isBefore ? (
            <div>
              <div className="mb-5 rounded-2xl border border-red-300/20 bg-red-400/10 p-4">
                <p className="text-sm font-semibold text-red-100">
                  {t(
                    "Problem: one source appears as many unrelated starting points.",
                    "问题：一个来源变成多个看似无关的起点。",
                  )}
                </p>
                <p className="mt-1 text-xs text-red-100/70">
                  {t(
                    "Text labels accompany color cues for accessibility.",
                    "颜色提示同时配合文字标签，便于无障碍理解。",
                  )}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {beforeEntries.map((entry) => (
                  <ConnectorCard key={entry.en} name={entry[lang]} dense />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.25fr]">
              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-100/70">
                  {t("Data source", "数据源")}
                </p>
                <ConnectorCard name={t("Customer Records", "客户记录")} />
                <p className="mt-5 text-sm leading-relaxed text-cyan-50/80">
                  {t(
                    "The catalog now represents the stable object first; tags summarize capability availability without splitting the entry.",
                    "目录优先呈现稳定对象；标签只概览能力可用性，不再拆分入口。",
                  )}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                  {t("Capability panel", "能力面板")}
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: { en: "Real-time retrieval", zh: "实时检索" },
                      state: "Enabled" as CapabilityState,
                    },
                    {
                      title: { en: "Background indexing", zh: "后台索引" },
                      state: "Available" as CapabilityState,
                    },
                    {
                      title: { en: "Guided skill", zh: "引导式技能" },
                      state: "Preview" as CapabilityState,
                    },
                  ].map((row) => (
                    <div
                      key={row.title.en}
                      className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="font-semibold text-white">
                          {row.title[lang]}
                        </h4>
                        <StatusBadge state={row.state} />
                      </div>
                      <p className="mt-2 text-sm text-gray-400">
                        {t(
                          "Value, dependency, and next action are readable before setup begins.",
                          "在开始设置前即可理解价值、依赖和下一步操作。",
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Shell>
    </div>
  );
}

function DecisionCard({ decision }: { decision: (typeof decisions)[number] }) {
  const { t, pick } = useLocalized();
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300 font-bold text-slate-950">
          {decision.code}
        </span>
        <h3 className="text-2xl font-bold text-white">
          {pick(decision.title)}
        </h3>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-500">
            {t("Observation", "观察")}
          </p>
          <p className="leading-relaxed text-gray-300">
            {pick(decision.observation)}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-gray-500">
            {t("Explored options", "探索方案")}
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            {decision.explored.map((option, i) => (
              <li key={option.en} className="flex gap-3">
                <span className="text-gray-500">{i + 1}</span>
                <span>{pick(option)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5">
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-emerald-100/70">
          {t("Decision", "决策")}
        </p>
        <p className="leading-relaxed text-emerald-50">
          {pick(decision.decision)}
        </p>
      </div>
    </div>
  );
}

function JourneyMap() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {journey.map((item, index) => (
        <div
          key={item.step}
          className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-5"
        >
          {index < journey.length - 1 && (
            <div
              className="absolute -right-2 top-12 hidden h-px w-4 bg-cyan-300/40 lg:block"
              aria-hidden="true"
            />
          )}
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="text-3xl font-bold text-white/20">
              {item.step}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
              {pick(item.density)}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            {pick(item.title)}
          </h3>
          <p className="mb-3 text-cyan-100">{pick(item.task)}</p>
          <p className="text-sm leading-relaxed text-gray-400">
            {pick(item.detail)}
          </p>
        </div>
      ))}
    </div>
  );
}

function SystemMatrix() {
  const { lang, t, pick } = useLocalized();
  const [selected, setSelected] = useState(0);
  const scenario = scenarios[selected];
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.2fr]">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4">
        <p className="px-3 pb-3 text-xs uppercase tracking-[0.18em] text-gray-500">
          {t("Scenario matrix", "场景矩阵")}
        </p>
        <div
          className="space-y-2"
          role="tablist"
          aria-label={t("System scenario selector", "系统场景选择")}
        >
          {scenarios.map((item, index) => (
            <button
              key={item.name.en}
              type="button"
              role="tab"
              aria-selected={selected === index}
              onClick={() => setSelected(index)}
              className={`w-full rounded-2xl border p-4 text-left transition-colors motion-reduce:transition-none ${selected === index ? "border-cyan-300/40 bg-cyan-300/10" : "border-white/10 bg-slate-950/35 hover:bg-white/[0.06]"}`}
            >
              <span className="block text-sm font-semibold text-white">
                {pick(item.name)}
              </span>
              <span className="mt-1 block text-xs text-gray-400">
                {pick(item.type)}
              </span>
              <span className="mt-3 block text-xs text-cyan-100/80">
                {pick(item.purpose)}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Shell title={pick(scenario.name)}>
        <div className="p-5 md:p-6">
          <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              {pick(scenario.type)}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              {pick(scenario.name)}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {pick(scenario.purpose)}
            </p>
          </div>
          <div className="space-y-3">
            {scenario.capabilities.map((capability) => (
              <div
                key={capability.name.en}
                className="rounded-2xl border border-white/10 bg-slate-950/55 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-white">
                      {capability.name[lang]}
                    </h4>
                    <p className="mt-1 text-sm text-gray-400">
                      {capability.value[lang]}
                    </p>
                  </div>
                  <StatusBadge state={capability.state} />
                </div>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <span className="block text-xs text-gray-500">
                      {t("Dependency", "依赖")}
                    </span>
                    <span className="text-gray-200">
                      {pick(capability.dependency)}
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <span className="block text-xs text-gray-500">
                      {t("Next action", "下一步操作")}
                    </span>
                    <span className="text-gray-200">
                      {pick(capability.action)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Shell>
    </div>
  );
}

function StatusColumns() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {statusGroups.map((group) => (
        <div
          key={group.title.en}
          className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
        >
          <h3 className="mb-5 text-xl font-semibold text-white">
            {pick(group.title)}
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {group.items.map((item) => (
              <li key={item.en} className="flex gap-3 leading-relaxed">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                  aria-hidden="true"
                />
                <span>{pick(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function UnifiedConnectorExperiencePage() {
  const { lang, t } = useLanguage();
  const pick = (value: Localized) => value[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, reduceMotion ? 1 : 0],
  );
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, reduceMotion ? 1 : 0.97],
  );
  const thumbnailSrc = `${basePath}/images/unified-connector-experience/thumbnail.svg`;

  return (
    <>
      <FluidBackground />
      <Navigation />
      <main
        ref={containerRef}
        className="relative z-10 min-h-screen px-6 pb-24 pt-32 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white motion-reduce:transition-none"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t("All Projects", "所有项目")}
            </Link>
          </motion.div>

          <motion.section
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="mb-36"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
              >
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-cyan-300/80 to-transparent" />
                  <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
                    {t("Systems Design · Enterprise AI", "系统设计 · 企业 AI")}
                  </span>
                </div>
                <h1 className="mb-7 text-5xl font-bold leading-[0.94] tracking-tight md:text-7xl">
                  Unified Enterprise
                  <br />
                  <span className="text-cyan-300">Connector Experience</span>
                </h1>
                <p className="mb-8 max-w-3xl text-2xl font-light italic leading-relaxed text-gray-200 md:text-3xl">
                  {t(
                    "One data source. One entry point. Multiple capabilities.",
                    "一个数据源，一个入口，多种能力。",
                  )}
                </p>
                <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
                  {t(
                    "I redesigned how enterprise administrators discover, compare, configure, and manage multiple connection capabilities under the same data source—without hiding differences that change their actions.",
                    "我重新设计了企业管理员发现、比较、配置并持续管理同一数据源下多种连接能力的方式，同时保留会改变操作的真实差异。",
                  )}
                </p>
              </motion.div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 }}
              >
                <HeroVisual thumbnailSrc={thumbnailSrc} />
              </motion.div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-500">
                    {pick(item.label)}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-200">
                    {pick(item.value)}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <Fade className="mb-36 grid gap-12 md:grid-cols-12">
            <SectionHeader
              index="01"
              eyebrow={{ en: "Why now", zh: "为什么现在" }}
              title={{
                en: "More capabilities created more entry points—but not more clarity.",
                zh: "更多能力带来了更多入口，却没有带来更清晰的体验。",
              }}
              body={{
                en: "The work was not a visual clean-up. It was a product-model problem caused by growth.",
                zh: "这不是一次视觉整理，而是能力增长引发的产品模型问题。",
              }}
            />
            <div className="md:col-span-8">
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                {t(
                  "As enterprise AI platforms added new ways to connect business data, a single source could support live retrieval, background indexing, user-owned sync, organization-owned sync, and guided workflows. The existing model turned each technical capability into a separate connector entry.",
                  "随着企业 AI 平台增加更多连接业务数据的方式，同一个来源可能同时支持实时检索、后台索引、用户级同步、组织级同步和引导式工作流。原有模型把每种技术能力都表现为独立连接器入口。",
                )}
              </p>
              <div className="grid gap-3 md:grid-cols-5">
                {whyChain.map((item, index) => (
                  <div
                    key={item.en}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                  >
                    <span className="mb-4 block text-2xl font-bold text-white/20">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-200">
                      {pick(item)}
                    </p>
                    {index < whyChain.length - 1 && (
                      <span
                        className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-300/40 md:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade className="mb-36 grid gap-12 md:grid-cols-12">
            <SectionHeader
              index="02"
              eyebrow={{ en: "Before / After", zh: "改版前 / 改版后" }}
              title={{
                en: "The object changed from connectors to data sources.",
                zh: "顶层对象从连接器变成数据源。",
              }}
              body={{
                en: "The abstract UI below uses sanitized examples only. It shows the structural shift, not unreleased product screens.",
                zh: "下方为脱敏抽象界面，只展示结构变化，不使用未发布产品截图。",
              }}
            />
            <div className="md:col-span-8">
              <BeforeAfter />
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {problemLayers.map((p) => (
                  <div
                    key={p.title.en}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <h3 className="mb-2 font-semibold text-white">
                      {pick(p.title)}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {pick(p.body)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade className="mb-36">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs uppercase tracking-[0.24em] text-cyan-300/70">
                03
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                {t("Evidence and constraints", "证据与约束")}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-400">
                {t(
                  "Raw internal inputs are translated into public insights: user behavior, product scalability, and technical constraints.",
                  "内部原始材料被转译为可公开洞察：用户行为、产品扩展性与技术约束。",
                )}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {evidence.map((item, index) => (
                <div
                  key={item.label.en}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-7"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.18em] text-cyan-200/70">
                      {pick(item.label)}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-sm text-white/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {pick(item.title)}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {pick(item.body)}
                  </p>
                </div>
              ))}
            </div>
          </Fade>

          <Fade className="mb-36 grid gap-12 md:grid-cols-12">
            <SectionHeader
              index="04"
              eyebrow={{ en: "Reframe", zh: "问题重定义" }}
              title={{
                en: "Not “How do we reduce cards?”",
                zh: "不是“如何减少卡片？”",
              }}
              body={{
                en: "Reducing entries could hide complexity. The design problem had to preserve complexity only when it changed administrator decisions.",
                zh: "减少入口可能只是隐藏复杂度。真正的问题是只在复杂度会改变管理员决策时呈现它。",
              }}
            />
            <div className="md:col-span-8">
              <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-blue-500/10 p-7 md:p-10">
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-100/70">
                  {t("Design proposition", "设计命题")}
                </p>
                <blockquote className="text-2xl font-light leading-relaxed text-white md:text-4xl">
                  {t(
                    "How might we make multiple connection capabilities feel like one coherent, scalable, and manageable system—without hiding technical differences that change the work?",
                    "如何在不掩盖真实技术差异的前提下，让多种连接能力在管理员眼中形成一个统一、可扩展、可管理的系统？",
                  )}
                </blockquote>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {[
                  {
                    en: "One stable entry per data source.",
                    zh: "同一数据源拥有一个稳定入口。",
                  },
                  {
                    en: "Capability value is understandable before technical type.",
                    zh: "先理解能力价值，再理解技术类型。",
                  },
                  {
                    en: "Uneven capability sets do not break the IA.",
                    zh: "不均衡能力组合不打破信息架构。",
                  },
                  {
                    en: "Discovery, setup, and management stay connected.",
                    zh: "发现、设置与管理保持连续。",
                  },
                ].map((i) => (
                  <div
                    key={i.en}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-gray-300"
                  >
                    {pick(i)}
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade className="mb-36">
            <div className="mb-10 grid gap-8 md:grid-cols-12">
              <SectionHeader
                index="05"
                eyebrow={{ en: "Principles", zh: "设计原则" }}
                title={{
                  en: "A rubric for judging every option.",
                  zh: "用一套标准判断每个方案。",
                }}
              />
              <p className="text-lg leading-relaxed text-gray-300 md:col-span-8">
                {t(
                  "Before drawing detailed screens, I made the evaluation criteria explicit so “unified” would not become a vague visual goal.",
                  "在绘制细节页面前，我先明确评估标准，避免“统一”变成模糊的视觉目标。",
                )}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((p, index) => (
                <div
                  key={p.title.en}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <span className="mb-5 block text-2xl font-bold text-white/20">
                    0{index + 1}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {pick(p.title)}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {pick(p.body)}
                  </p>
                </div>
              ))}
            </div>
          </Fade>

          <Fade className="mb-36 grid gap-12 md:grid-cols-12">
            <SectionHeader
              index="06"
              eyebrow={{ en: "Key decisions", zh: "关键决策" }}
              title={{
                en: "Three decisions that changed the product direction.",
                zh: "三组真正改变产品方向的决策。",
              }}
              body={{
                en: "The detailed decision set is grouped into three public narratives: object model, capability model, and lifecycle model.",
                zh: "细节决策在公开页面中收敛为三条主线：对象模型、能力模型和生命周期模型。",
              }}
            />
            <div className="space-y-5 md:col-span-8">
              {decisions.map((d) => (
                <DecisionCard key={d.code} decision={d} />
              ))}
            </div>
          </Fade>

          <Fade className="mb-36">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs uppercase tracking-[0.24em] text-cyan-300/70">
                07
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                {t("End-to-end experience", "端到端体验")}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-400">
                {t(
                  "The final model connects a low-density discovery moment with high-density setup and lifecycle management.",
                  "最终模型将低密度发现时刻与高密度设置和生命周期管理连接起来。",
                )}
              </p>
            </div>
            <JourneyMap />
          </Fade>

          <Fade className="mb-36 grid gap-12 md:grid-cols-12">
            <SectionHeader
              index="08"
              eyebrow={{ en: "System model", zh: "系统模型" }}
              title={{
                en: "The structure flexes by scenario instead of multiplying screens.",
                zh: "结构按场景伸缩，而不是不断复制页面。",
              }}
              body={{
                en: "Four sanitized scenarios stress-test full, dual, constrained, and minimum capability combinations.",
                zh: "四类脱敏场景验证完整、双责任、受约束和最小能力组合。",
              }}
            />
            <div className="md:col-span-8">
              <SystemMatrix />
            </div>
          </Fade>

          <Fade className="mb-36">
            <div className="mb-10 grid gap-8 md:grid-cols-12">
              <SectionHeader
                index="09"
                eyebrow={{ en: "Validation & status", zh: "验证与状态" }}
                title={{
                  en: "Clear outcomes, clear boundaries.",
                  zh: "结果清楚，边界也清楚。",
                }}
              />
              <p className="text-lg leading-relaxed text-gray-300 md:col-span-8">
                {t(
                  "The work aligned a data-source-level experience model and produced a complete review-ready journey. It intentionally avoids claiming production efficiency gains that were not publicly validated.",
                  "这项工作对齐了数据源级体验模型，并形成可进入详细评审的完整旅程。页面刻意不声明尚未公开验证的生产效率提升。",
                )}
              </p>
            </div>
            <StatusColumns />
          </Fade>

          <Fade className="mb-24">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-cyan-300/10 p-7 md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-cyan-300/70">
                10 · {t("Reflection", "反思")}
              </p>
              <blockquote className="max-w-4xl text-2xl font-light leading-relaxed text-white md:text-4xl">
                {t(
                  "A unified experience is not one that makes everything look the same. It gives administrators a stable mental model—and reveals technical complexity only when it changes the next action.",
                  "统一体验不是让所有连接器看起来相同，而是建立稳定的用户心智模型，并只在技术差异会改变下一步操作时让复杂度出现。",
                )}
              </blockquote>
              <p className="mt-7 max-w-3xl leading-relaxed text-gray-400">
                {t(
                  "The most valuable artifact was not a set of screens. It was a product system that keeps answering: what am I connecting, what can it do, what state is it in, and what should I do next?",
                  "最有价值的产物不是几张页面，而是一套持续回答这些问题的产品系统：我正在连接什么、它能做什么、当前处于什么状态、下一步该做什么？",
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-gray-200 transition-colors hover:border-cyan-300/50 hover:text-white motion-reduce:transition-none"
                >
                  <span aria-hidden="true">←</span>
                  {t("Back to projects", "返回项目")}
                </Link>
                <Link
                  href="/projects/connector-health-center"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 motion-reduce:transition-none"
                >
                  {t("View Connector Health Center", "查看连接器健康中心")}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </main>
    </>
  );
}

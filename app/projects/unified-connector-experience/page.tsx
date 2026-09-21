'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import {
  Chapter,
  EditorialCard,
  MetaGrid,
  NumberBadge,
  ReadingProgress,
  Reveal,
  SectionHeading,
  StatementBand,
} from '@/components/case-study/PresentationCaseStudy';
import { useLanguage, type Lang } from '@/lib/LanguageContext';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const screenshotRevision = '20260921-github-comparison';
const screenshotPath = (file: string) =>
  `${basePath}/images/unified-connector-experience/${file}?v=${screenshotRevision}`;

type Localized = { en: string; zh: string };
type MediaItem = {
  src: string;
  alt: Localized;
  label: Localized;
  caption: Localized;
};

const meta = [
  {
    label: { en: 'Role', zh: '角色' },
    value: { en: 'Product Designer', zh: '产品设计师' },
  },
  {
    label: { en: 'Design challenge', zh: '设计挑战' },
    value: {
      en: 'Make a changing technical system feel stable',
      zh: '让持续变化的技术系统保持稳定心智',
    },
  },
  {
    label: { en: 'Core skills', zh: '核心能力' },
    value: {
      en: 'Strategy · systems thinking · interaction design',
      zh: '产品战略 · 系统思维 · 交互设计',
    },
  },
  {
    label: { en: 'Evidence', zh: '设计证据' },
    value: {
      en: 'Coded concepts · scenario tests · E2E review',
      zh: '代码原型 · 场景验证 · 端到端评审',
    },
  },
];

const currentProblemMedia = [
  {
    src: screenshotPath('current-gallery-scale.png'),
    alt: {
      en: 'Current connector Gallery with a rapidly growing number of cards',
      zh: '当前连接器 Gallery 中快速增长的大量卡片',
    },
    label: { en: 'Current Gallery · scale', zh: '当前 Gallery · 规模问题' },
    caption: {
      en: 'The catalog kept scaling by adding cards. Browsing became inventory scanning rather than source discovery.',
      zh: '目录通过不断增加卡片来扩展，浏览逐渐变成库存扫描，而不是数据源发现。',
    },
  },
  {
    src: screenshotPath('current-gallery-fragmentation.png'),
    alt: {
      en: 'Current Gallery showing one app split into multiple connector cards',
      zh: '当前 Gallery 中同一个 App 被拆分为多个连接器卡片',
    },
    label: {
      en: 'Current Gallery · one app, many connectors',
      zh: '当前 Gallery · 一个 App，多个 Connector',
    },
    caption: {
      en: 'GitHub Cloud and Server capabilities appear as separate Issues, Knowledge, and Pull Requests entries, forcing admins to reconstruct the app relationship.',
      zh: 'GitHub Cloud 与 Server 的 Issues、Knowledge、Pull Requests 分别成为独立入口，管理员必须自己重新拼接它们与 App 的关系。',
    },
  },
] satisfies MediaItem[];

const strategyStages = [
  {
    number: '01',
    title: { en: 'Indexed search', zh: '索引式搜索' },
    body: {
      en: 'The original connector model assumed that admins configured a crawl and AI searched a prepared index.',
      zh: '原有连接器模型假设管理员配置抓取范围，AI 再从预先建立的索引中搜索。',
    },
  },
  {
    number: '02',
    title: { en: 'Mixed data access', zh: '混合数据访问' },
    body: {
      en: 'MCP, User Sync, and Skills introduced live retrieval, user-owned access, and task-specific actions.',
      zh: 'MCP、User Sync 与 Skills 带来了实时检索、用户级访问和面向任务的操作。',
    },
  },
  {
    number: '03',
    title: { en: 'Design implication', zh: '设计启示' },
    body: {
      en: 'The interface could no longer be organized around connector technology. It needed a stable object that could absorb change.',
      zh: '界面不能再围绕连接技术组织，而需要一个能够持续吸收变化的稳定对象。',
    },
  },
];

const competitorSignals = [
  {
    name: 'OpenAI',
    finding: {
      en: 'Separates live app access from administrator-managed sync.',
      zh: '区分实时应用访问与管理员管理的同步。',
    },
    implication: {
      en: 'One provider can carry multiple data-access contracts.',
      zh: '同一服务可以承载多种不同的数据访问契约。',
    },
  },
  {
    name: 'Glean',
    finding: {
      en: 'Distinguishes indexed Connectors from live Tools and can combine both.',
      zh: '区分索引型 Connector 与实时 Tool，并允许两者组合。',
    },
    implication: {
      en: 'Hybrid is a capability composition, not merely a badge.',
      zh: 'Hybrid 是能力组合，而不只是一个标签。',
    },
  },
  {
    name: 'Design response',
    finding: {
      en: 'Unify the inventory, not the underlying behavior.',
      zh: '统一入口，但不抹平底层行为。',
    },
    implication: {
      en: 'Keep ownership, permissions, freshness, and next actions explicit.',
      zh: '明确表达责任归属、权限、新鲜度与下一步操作。',
    },
  },
];

const sourceLinks = [
  {
    label: 'OpenAI · Apps',
    href: 'https://help.openai.com/en/articles/11487775-apps-in-chatgpt',
  },
  {
    label: 'OpenAI · Apps with sync',
    href: 'https://help.openai.com/en/articles/10847137-administrator-managed-apps-with-sync-in-chatgpt',
  },
  {
    label: 'Glean · Connectors',
    href: 'https://docs.glean.com/connectors/about',
  },
  {
    label: 'Glean · Tools',
    href: 'https://docs.glean.com/administration/tools',
  },
];

const decisions = [
  {
    code: '01',
    skill: { en: 'Systems thinking', zh: '系统思维' },
    title: {
      en: 'Choose the right unit of organization.',
      zh: '选择正确的组织单位。',
    },
    question: {
      en: 'Should GitHub be organized by capability, vendor, or deployment?',
      zh: 'GitHub 应该按能力、供应商，还是部署边界组织？',
    },
    tension: {
      en: 'GitHub Cloud and Server each exposed separate Issues, Knowledge, and Pull Requests cards. Six technical entries described the implementation, not the source an administrator intended to connect.',
      zh: 'GitHub Cloud 与 Server 分别暴露 Issues、Knowledge、Pull Requests 卡片。六个技术入口描述的是实现方式，而不是管理员真正想连接的数据源。',
    },
    alternatives: [
      { en: 'One card per technical connector', zh: '每个技术连接器一张卡片' },
      { en: 'One card per vendor', zh: '每个供应商一张卡片' },
      {
        en: 'One card per database / deployment boundary',
        zh: '每个数据库 / 部署边界一张卡片',
      },
    ],
    decision: {
      en: 'Keep two Gallery entries: GitHub Cloud and GitHub Server. Issues, Knowledge, Pull Requests, Sync, and MCP become capabilities beneath the appropriate deployment.',
      zh: 'Gallery 只保留 GitHub Cloud 与 GitHub Server 两个入口；Issues、Knowledge、Pull Requests、Sync 与 MCP 成为对应部署入口下的能力。',
    },
    why: {
      en: 'Cloud and Server still require meaningfully different setup decisions, while capability changes no longer create more top-level cards.',
      zh: 'Cloud 与 Server 仍对应不同的设置决策，但后续能力变化不再继续制造顶层卡片。',
    },
    media: [
      {
        src: screenshotPath('current-gallery-fragmentation.png'),
        alt: {
          en: 'Before: GitHub Cloud and Server split into six technical connector cards',
          zh: '合并前：GitHub Cloud 与 Server 被拆分为六张技术连接器卡片',
        },
        label: {
          en: 'Before · six technical entries',
          zh: '合并前 · 六个技术入口',
        },
        caption: {
          en: 'Issues, Knowledge, and Pull Requests each became separate cards for GitHub Cloud and GitHub Server.',
          zh: 'Issues、Knowledge、Pull Requests 在 GitHub Cloud 与 GitHub Server 下分别成为独立卡片。',
        },
      },
      {
        src: screenshotPath('exploration-scheme-b.png'),
        alt: {
          en: 'After: global Gallery with unified GitHub Cloud and GitHub Server cards',
          zh: '合并后：全局 Gallery 中统一后的 GitHub Cloud 与 GitHub Server 卡片',
        },
        label: {
          en: 'After · two deployment entries',
          zh: '合并后 · 两个部署入口',
        },
        caption: {
          en: 'The global Gallery keeps GitHub Cloud and GitHub Server distinct while grouping their capabilities beneath each source.',
          zh: '全局 Gallery 只保留 GitHub Cloud 与 GitHub Server 两个来源入口，各项能力收纳在对应卡片之下。',
        },
      },
    ] satisfies MediaItem[],
  },
  {
    code: '02',
    skill: { en: 'Information architecture', zh: '信息架构' },
    title: {
      en: 'Reveal complexity only when it helps a decision.',
      zh: '只在帮助决策时披露复杂度。',
    },
    question: {
      en: 'How much should an admin understand before choosing a source?',
      zh: '管理员在选择数据源前，需要理解多少内容？',
    },
    tension: {
      en: 'Showing Sync, MCP, User Sync, Skills, status, and availability on every gallery card made comparison harder. Hiding everything made the cards vague.',
      zh: '在每张目录卡片上展示 Sync、MCP、User Sync、Skills、状态和可用性会增加比较成本；全部隐藏又会让卡片失去信息。',
    },
    alternatives: [
      { en: 'Expose every capability in Gallery', zh: '在 Gallery 展示全部能力' },
      { en: 'Expand options inside each card', zh: '在每张卡片内展开选项' },
      {
        en: 'Progressively disclose source → capability → setup',
        zh: '渐进披露：来源 → 能力 → 设置',
      },
    ],
    decision: {
      en: 'Gallery answers “What source is this?” The detail panel answers “What can it do?” Setup appears only after the admin chooses a capability.',
      zh: 'Gallery 回答“这是什么来源”；详情面板回答“它能做什么”；只有管理员选择能力后才进入设置。',
    },
    why: {
      en: 'Each surface carries one level of decision density, reducing cognitive load without hiding important differences.',
      zh: '每个页面只承担一层决策密度，在降低认知负担的同时保留关键差异。',
    },
    media: [
      {
        src: screenshotPath('journey-02-capabilities.png'),
        alt: {
          en: 'Salesforce Connector and Skills capability panel',
          zh: 'Salesforce Connector 与 Skills 能力面板',
        },
        label: { en: 'Capability comparison', zh: '能力比较' },
        caption: {
          en: 'A shared Connector / Skills structure explains an uneven capability set without duplicating the source.',
          zh: '共享的 Connector / Skills 结构解释不均衡能力组合，而无需复制数据源入口。',
        },
      },
    ] satisfies MediaItem[],
  },
  {
    code: '03',
    skill: { en: 'Interaction & service design', zh: '交互与服务设计' },
    title: {
      en: 'Route actions by ownership, not technology.',
      zh: '按责任归属设计路径，而不是按技术分类。',
    },
    question: {
      en: 'Where should each capability be configured and managed?',
      zh: '每种能力应该在哪里设置和管理？',
    },
    tension: {
      en: 'Similar “Add” and “Configured” states led to different destinations. Admins could not predict what would happen next or where to return.',
      zh: '相似的“添加”和“已配置”状态却通向不同位置，管理员无法预期下一步，也不知道应该返回哪里。',
    },
    alternatives: [
      { en: 'Configure everything in Gallery', zh: '在 Gallery 中配置全部能力' },
      { en: 'Preserve every legacy destination', zh: '保留所有旧有目的地' },
      {
        en: 'Route by admin-owned vs. user-owned responsibility',
        zh: '按管理员负责与用户负责进行路由',
      },
    ],
    decision: {
      en: 'Tenant Sync enters an admin-owned Add flow. MCP and User Sync move to Your Connections, where real instances, states, and lifecycle actions live.',
      zh: 'Tenant Sync 进入管理员负责的 Add Flow；MCP 与 User Sync 进入 Your Connections，由该页面承载实例、状态和生命周期操作。',
    },
    why: {
      en: 'The navigation now follows responsibility and task stage—the concepts administrators use to act—not internal protocol names.',
      zh: '导航遵循管理员真正用于行动的责任归属和任务阶段，而不是内部协议名称。',
    },
    media: [
      {
        src: screenshotPath('journey-03-setup.png'),
        alt: {
          en: 'Salesforce tenant Sync setup flow',
          zh: 'Salesforce Tenant Sync 设置流程',
        },
        label: { en: 'Admin-owned setup', zh: '管理员负责的设置' },
        caption: {
          en: 'Authentication, content, permissions, and rollout stay inside a focused setup task.',
          zh: '身份验证、内容、权限和发布范围集中在专注的设置任务中。',
        },
      },
      {
        src: screenshotPath('journey-04-management.png'),
        alt: {
          en: 'Your Connections grouped lifecycle view',
          zh: 'Your Connections 聚合生命周期视图',
        },
        label: { en: 'Lifecycle ownership', zh: '生命周期归属' },
        caption: {
          en: 'Configured capabilities return as grouped instances with shared state and action language.',
          zh: '已配置能力以聚合实例呈现，并共享一致的状态与操作语言。',
        },
      },
    ] satisfies MediaItem[],
  },
];

const journey = [
  {
    title: 'Gallery',
    question: { en: 'What source is this?', zh: '这是什么来源？' },
    role: { en: 'Recognition', zh: '识别' },
    rationale: {
      en: 'Show the source identity and value first. Capability details stay out of the scanning layer.',
      zh: '先呈现数据源身份与价值，能力细节不进入用于快速浏览的第一层。',
    },
    media: {
      src: screenshotPath('journey-01-gallery.png'),
      alt: {
        en: 'Global Gallery with Salesforce CRM among a varied set of sources',
        zh: '全局 Gallery 中 Salesforce CRM 与多种数据源共同展示',
      },
      label: { en: 'Step 01 · Gallery', zh: '步骤 01 · Gallery' },
      caption: {
        en: 'The Gallery lets an administrator recognize Salesforce CRM as one source before comparing its capabilities.',
        zh: '管理员先在 Gallery 中把 Salesforce CRM 识别为一个来源，再进入能力比较。',
      },
    },
  },
  {
    title: 'Connector detail',
    question: { en: 'What can it do?', zh: '它能做什么？' },
    role: { en: 'Comparison', zh: '比较' },
    rationale: {
      en: 'Compare only the capabilities this source supports, including ownership, status, and the next action.',
      zh: '只比较该来源真实支持的能力，并明确责任归属、当前状态与下一步。',
    },
    media: {
      src: screenshotPath('journey-02-capabilities.png'),
      alt: {
        en: 'Salesforce CRM connector capability panel',
        zh: 'Salesforce CRM Connector 能力面板',
      },
      label: { en: 'Step 02 · Connector detail', zh: '步骤 02 · Connector Detail' },
      caption: {
        en: 'MCP, User Sync, Tenant Sync, and Skills remain grouped under the Salesforce CRM source.',
        zh: 'MCP、User Sync、Tenant Sync 与 Skills 保持聚合在 Salesforce CRM 来源之下。',
      },
    },
  },
  {
    title: 'Add flow',
    question: { en: 'What must I configure?', zh: '我需要配置什么？' },
    role: { en: 'Execution', zh: '执行' },
    rationale: {
      en: 'Open a focused task only for admin-owned setup: authentication, content scope, permissions, and rollout.',
      zh: '只有管理员负责的设置才进入专注任务：身份验证、内容范围、权限与发布范围。',
    },
    media: {
      src: screenshotPath('journey-03-setup.png'),
      alt: {
        en: 'Salesforce CRM tenant Sync setup',
        zh: 'Salesforce CRM Tenant Sync 设置',
      },
      label: { en: 'Step 03 · Add flow', zh: '步骤 03 · Add Flow' },
      caption: {
        en: 'The setup surface carries configuration density without making the Gallery harder to scan.',
        zh: '设置页面承载高密度配置，而不会让 Gallery 变得更难浏览。',
      },
    },
  },
  {
    title: 'Your Connections',
    question: { en: 'What state is it in?', zh: '它现在是什么状态？' },
    role: { en: 'Operations', zh: '运营' },
    rationale: {
      en: 'Bring configured capabilities back together as real instances with shared state and lifecycle actions.',
      zh: '把已配置能力重新聚合为真实实例，并统一展示状态与生命周期操作。',
    },
    media: {
      src: screenshotPath('journey-04-management.png'),
      alt: {
        en: 'Your Connections grouped lifecycle management',
        zh: 'Your Connections 聚合生命周期管理',
      },
      label: { en: 'Step 04 · Your Connections', zh: '步骤 04 · Your Connections' },
      caption: {
        en: 'Source groups preserve context while child rows expose the capabilities that administrators operate.',
        zh: '父级来源保留上下文，子行展示管理员实际运营的各项能力。',
      },
    },
  },
] satisfies Array<{
  title: string;
  question: Localized;
  role: Localized;
  rationale: Localized;
  media: MediaItem;
}>;

const stressCases = [
  {
    name: 'Salesforce CRM',
    model: { en: 'Full hybrid', zh: '完整 Hybrid' },
    proves: {
      en: 'Live retrieval + tenant indexing + Skills',
      zh: '实时检索 + 租户索引 + Skills',
    },
    media: {
      src: screenshotPath('validation-salesforce-filtered.png'),
      alt: {
        en: 'Salesforce CRM full hybrid capability case',
        zh: 'Salesforce CRM 完整 Hybrid 能力场景',
      },
      label: { en: 'Full hybrid case', zh: '完整 Hybrid 场景' },
      caption: {
        en: 'Salesforce CRM combines MCP, User Sync, Tenant Sync, and Skills under one source.',
        zh: 'Salesforce CRM 在同一来源下组合 MCP、User Sync、Tenant Sync 与 Skills。',
      },
    },
  },
  {
    name: 'Jira Cloud',
    model: { en: 'Dual ownership', zh: '双责任模型' },
    proves: {
      en: 'Tenant Sync + User Sync',
      zh: 'Tenant Sync + User Sync',
    },
    media: {
      src: screenshotPath('edge-jira-cloud.png'),
      alt: {
        en: 'Jira Cloud dual-ownership capability case',
        zh: 'Jira Cloud 双责任能力场景',
      },
      label: { en: 'Dual-ownership case', zh: '双责任场景' },
      caption: {
        en: 'Jira Cloud keeps Microsoft-enabled MCP and User Sync beside admin-owned Tenant Sync.',
        zh: 'Jira Cloud 同时呈现 Microsoft 启用的 MCP、User Sync 与管理员负责的 Tenant Sync。',
      },
    },
  },
  {
    name: 'Jira Data Center',
    model: { en: 'Deployment boundary', zh: '部署边界' },
    proves: {
      en: 'Tenant Sync only',
      zh: '仅 Tenant Sync',
    },
    media: {
      src: screenshotPath('edge-jira-data-center.png'),
      alt: {
        en: 'Jira Data Center tenant-Sync-only case',
        zh: 'Jira Data Center 仅 Tenant Sync 场景',
      },
      label: { en: 'Deployment-boundary case', zh: '部署边界场景' },
      caption: {
        en: 'Jira Data Center exposes only the supported admin-managed Sync path without empty capability sections.',
        zh: 'Jira Data Center 只展示受支持的管理员 Sync 路径，不制造空能力区域。',
      },
    },
  },
  {
    name: 'Linear / FCC',
    model: { en: 'Minimum capability', zh: '最小能力组合' },
    proves: {
      en: 'MCP only',
      zh: '仅 MCP',
    },
    media: {
      src: screenshotPath('edge-linear.png'),
      alt: {
        en: 'Linear MCP-only capability case',
        zh: 'Linear 仅 MCP 能力场景',
      },
      label: { en: 'Minimum-capability case', zh: '最小能力场景' },
      caption: {
        en: 'Linear proves the shared model remains useful even when MCP is the only capability.',
        zh: 'Linear 证明即使 MCP 是唯一能力，共享模型仍然成立。',
      },
    },
  },
] satisfies Array<{
  name: string;
  model: Localized;
  proves: Localized;
  media: MediaItem;
}>;

const validationChanges = [
  {
    test: {
      en: 'Can one structure represent every capability combination?',
      zh: '同一套结构能否表达所有能力组合？',
    },
    finding: {
      en: 'A fixed layout created irrelevant or empty sections for Tenant-Sync-only and MCP-only sources.',
      zh: '固定布局会在仅 Tenant Sync 与仅 MCP 的来源中制造无关内容或空区域。',
    },
    change: {
      en: 'Render only supported capability rows while preserving one shared information anatomy.',
      zh: '只渲染真实支持的能力行，同时保持统一的信息结构。',
    },
  },
  {
    test: {
      en: 'Can an admin predict where each action will go?',
      zh: '管理员能否预期每个操作会去哪里？',
    },
    finding: {
      en: 'Tenant Sync opened Add flow, but MCP and User Sync used inconsistent destinations and return paths.',
      zh: 'Tenant Sync 会打开 Add Flow，但 MCP 与 User Sync 的目的地和返回路径不一致。',
    },
    change: {
      en: 'Route admin-owned setup to Add flow and configured or user-owned capabilities to Your Connections.',
      zh: '管理员负责的设置进入 Add Flow；已配置或用户负责的能力进入 Your Connections。',
    },
  },
  {
    test: {
      en: 'Can the first management level support the next action?',
      zh: '管理页第一层能否支持下一步操作？',
    },
    finding: {
      en: 'Admins had to open a detail panel to understand ownership, permissions, rollout, and basic lifecycle actions.',
      zh: '管理员必须进入详情面板，才能理解责任、权限、发布范围和基础生命周期操作。',
    },
    change: {
      en: 'Expose capability type, state, ownership, and essential actions at the grouped connection level.',
      zh: '在聚合连接层直接展示能力类型、状态、责任归属与必要操作。',
    },
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
        className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#626872] transition-colors hover:text-[#1267d6]"
      >
        <span aria-hidden="true">←</span>
        {t('All Projects', '所有项目')}
      </Link>
    </Reveal>
  );
}

function MediaFrame({
  item,
  lang,
  onOpen,
  dark = false,
  priority = false,
}: {
  item: MediaItem;
  lang: Lang;
  onOpen: (item: MediaItem) => void;
  dark?: boolean;
  priority?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[24px] border ${
        dark
          ? 'border-white/12 bg-white/[0.055]'
          : 'border-[#dfe2e7] bg-white shadow-[0_18px_50px_rgba(17,19,24,0.07)]'
      }`}
    >
      <div
        className={`flex items-center justify-between gap-4 border-b px-4 py-3 ${
          dark ? 'border-white/10' : 'border-[#dfe2e7]'
        }`}
      >
        <span
          className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${
            dark ? 'text-white/48' : 'text-[#8e949e]'
          }`}
        >
          {item.label[lang]}
        </span>
        <span className={`text-xs ${dark ? 'text-white/38' : 'text-[#8e949e]'}`}>
          {lang === 'zh' ? '点击放大' : 'Click to expand'}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="group block aspect-[3/2] w-full overflow-hidden bg-[#eef1f5] text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1267d6]"
        aria-label={
          lang === 'zh'
            ? `放大查看：${item.alt.zh}`
            : `Expand image: ${item.alt.en}`
        }
      >
        <img
          src={item.src}
          alt={item.alt[lang]}
          width={2160}
          height={1440}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
        />
      </button>
      <figcaption
        className={`border-t px-4 py-3 text-sm leading-6 ${
          dark ? 'border-white/10 text-white/58' : 'border-[#dfe2e7] text-[#626872]'
        }`}
      >
        {item.caption[lang]}
      </figcaption>
    </figure>
  );
}

function Lightbox({
  item,
  lang,
  onClose,
}: {
  item: MediaItem | null;
  lang: Lang;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt[lang]}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-3 backdrop-blur-sm md:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') onClose();
      }}
    >
      <div className="relative max-h-[95vh] max-w-[96vw]">
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-xl text-white transition hover:bg-black"
          aria-label={lang === 'zh' ? '关闭大图' : 'Close image'}
        >
          ×
        </button>
        <img
          src={item.src}
          alt={item.alt[lang]}
          width={2160}
          height={1440}
          className="h-auto w-auto max-h-[88vh] max-w-[94vw] rounded-2xl object-contain shadow-2xl"
        />
        <div className="mx-auto mt-3 max-w-4xl text-center text-sm text-white/70">
          {item.caption[lang]}
        </div>
      </div>
    </div>
  );
}

function StrategicShift() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {strategyStages.map((stage, index) => (
        <Reveal key={stage.number} delay={index * 0.04}>
          <EditorialCard className="relative h-full">
            {index < strategyStages.length - 1 && (
              <span
                className="absolute -right-3 top-8 z-10 hidden h-6 w-6 place-items-center rounded-full bg-[#171a21] text-xs text-white lg:grid"
                aria-hidden="true"
              >
                →
              </span>
            )}
            <NumberBadge>{stage.number}</NumberBadge>
            <h3 className="mt-7 text-2xl font-[720] tracking-[-0.035em] text-[#111318]">
              {pick(stage.title)}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#626872]">
              {pick(stage.body)}
            </p>
          </EditorialCard>
        </Reveal>
      ))}
    </div>
  );
}

function CompetitiveSignal() {
  const { t, pick } = useLocalized();
  return (
    <Reveal>
      <div className="overflow-hidden rounded-[28px] border border-[#dfe2e7] bg-white">
        <div className="grid gap-px bg-[#dfe2e7] md:grid-cols-3">
          {competitorSignals.map((signal, index) => (
            <div
              key={signal.name}
              className={index === 2 ? 'bg-[#edf4ff] p-6' : 'bg-white p-6'}
            >
              <p
                className={`font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  index === 2 ? 'text-[#1267d6]' : 'text-[#8e949e]'
                }`}
              >
                {signal.name}
              </p>
              <p className="mt-5 text-lg font-semibold leading-7 text-[#111318]">
                {pick(signal.finding)}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#626872]">
                {pick(signal.implication)}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-[#dfe2e7] bg-[#f7f8fa] p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8e949e]">
              {t('Sources', '资料来源')}
            </span>
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#c9cdd4] bg-white px-3 py-1.5 text-xs font-semibold text-[#626872] transition-colors hover:border-[#1267d6] hover:text-[#1267d6]"
              >
                {source.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProblemEvidence({
  lang,
  onOpen,
}: {
  lang: Lang;
  onOpen: (item: MediaItem) => void;
}) {
  const { t } = useLanguage();
  const findings = [
    {
      number: '01',
      title: { en: 'More cards, less discoverability', zh: '卡片越多，越难发现' },
      body: {
        en: 'Categories and search could help navigate the inventory, but they did not solve the underlying growth model.',
        zh: '分类和搜索可以帮助浏览，却没有解决目录以卡片数量持续扩张的根本问题。',
      },
    },
    {
      number: '02',
      title: { en: 'One app lost its identity', zh: '同一个 App 失去了整体身份' },
      body: {
        en: 'Every technical capability became a separate starting point, so admins saw implementation fragments before understanding the source.',
        zh: '每种技术能力都成为独立起点，管理员在理解数据源之前，先看到了一组实现碎片。',
      },
    },
  ];

  return (
    <div>
      <div className="grid gap-6">
        {currentProblemMedia.map((item, index) => (
          <Reveal key={item.src} delay={index * 0.05}>
            <MediaFrame item={item} lang={lang} onOpen={onOpen} priority />
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-2">
        {findings.map((finding) => (
          <div key={finding.number} className="bg-white p-6">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1267d6]">
              {finding.number} · {t('Design problem', '设计问题')}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-[#111318]">
              {finding.title[lang]}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#626872]">
              {finding.body[lang]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReframeModel() {
  const { lang, t } = useLanguage();
  const questions = [
    { en: 'What am I connecting?', zh: '我正在连接什么？' },
    { en: 'What can it do for AI?', zh: '它能为 AI 做什么？' },
    { en: 'Who sets it up and where?', zh: '由谁设置，在哪里管理？' },
  ];
  const principles = [
    {
      title: { en: 'Source first', zh: '数据源优先' },
      body: {
        en: 'Start with the object administrators recognize.',
        zh: '从管理员能够识别的对象开始。',
      },
    },
    {
      title: { en: 'Complexity on demand', zh: '按需披露复杂度' },
      body: {
        en: 'Reveal technology only when it changes a decision.',
        zh: '只有技术差异会改变决策时才进行披露。',
      },
    },
    {
      title: { en: 'Ownership drives action', zh: '责任归属驱动操作' },
      body: {
        en: 'Route by who configures and manages the capability.',
        zh: '根据能力的设置与管理责任设计路径。',
      },
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <EditorialCard className="h-full bg-[#f7f8fa] shadow-none">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">
            {t('Original request', '原始问题')}
          </p>
          <p className="mt-4 text-xl font-semibold text-[#626872]">
            {t(
              'How might we reduce duplicated connector cards?',
              '如何减少重复的 Connector 卡片？',
            )}
          </p>
          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#c9cdd4]" />
            <span className="font-mono text-xs text-[#1267d6]">REFRAME ↓</span>
            <span className="h-px flex-1 bg-[#c9cdd4]" />
          </div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
            {t('Design question', '重新定义后的设计问题')}
          </p>
          <p className="mt-4 text-[clamp(1.55rem,3vw,2.5rem)] font-[720] leading-[1.12] tracking-[-0.04em] text-[#111318]">
            {t(
              'What should the product be organized around when one source supports many ways for AI to use its data?',
              '当同一个数据源支持多种 AI 数据访问方式时，产品应该围绕什么来组织？',
            )}
          </p>
        </EditorialCard>
      </Reveal>

      <div>
        <div className="grid gap-3 sm:grid-cols-3">
          {questions.map((question, index) => (
            <Reveal key={question.en} delay={index * 0.04}>
              <EditorialCard className="h-full p-5">
                <NumberBadge>0{index + 1}</NumberBadge>
                <p className="mt-5 text-base font-semibold leading-6 text-[#111318]">
                  {question[lang]}
                </p>
              </EditorialCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title.en} className="bg-white p-5">
              <h3 className="text-sm font-semibold text-[#1267d6]">
                {principle.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#626872]">
                {principle.body[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExplorationStory({
  lang,
  onOpen,
}: {
  lang: Lang;
  onOpen: (item: MediaItem) => void;
}) {
  const { t, pick } = useLocalized();
  const decision = decisions[0];
  const boundaries = [
    {
      label: { en: 'Before', zh: '合并前' },
      value: { en: '6 capability cards', zh: '6 张能力卡片' },
      risk: {
        en: 'Issues, Knowledge, and Pull Requests × Cloud and Server.',
        zh: 'Issues、Knowledge、Pull Requests × Cloud 与 Server。',
      },
    },
    {
      label: { en: 'Rejected extreme', zh: '未采用的极端' },
      value: { en: '1 GitHub card', zh: '1 张 GitHub 卡片' },
      risk: {
        en: 'Cloud and Server setup consequences would disappear.',
        zh: 'Cloud 与 Server 的设置差异会被隐藏。',
      },
    },
    {
      label: { en: 'After · selected', zh: '合并后 · 最终方案' },
      value: { en: '2 deployment cards', zh: '2 张部署卡片' },
      risk: {
        en: 'GitHub Cloud + GitHub Server; capabilities live beneath them.',
        zh: 'GitHub Cloud + GitHub Server；具体能力收纳在其下。',
      },
    },
  ];

  return (
    <div>
      <div className="grid gap-6">
        {decision.media.map((item) => (
          <MediaFrame
            key={item.src}
            item={item}
            lang={lang}
            onOpen={onOpen}
            dark
          />
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {boundaries.map((boundary, index) => (
          <div
            key={boundary.label.en}
            className={`rounded-[20px] border p-5 ${
              index === 2
                ? 'border-[#70a9f5]/50 bg-[#1267d6]/18'
                : 'border-white/12 bg-white/[0.055]'
            }`}
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#70a9f5]">
              0{index + 1} · {pick(boundary.label)}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {pick(boundary.value)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/58">
              {pick(boundary.risk)}
            </p>
          </div>
        ))}
      </div>
      <Reveal className="mt-6">
        <div className="rounded-[24px] border border-[#70a9f5]/30 bg-[#1267d6]/15 p-6 md:p-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#70a9f5]">
            {t('My decision', '我的决策')}
          </p>
          <p className="mt-4 text-[clamp(1.35rem,2.7vw,2.25rem)] font-medium leading-[1.25] text-white">
            {pick(decision.decision)}
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/58">
            {pick(decision.why)}
          </p>
        </div>
      </Reveal>
    </div>
  );
}

function ExperienceLogic({
  lang,
  onOpen,
}: {
  lang: Lang;
  onOpen: (item: MediaItem) => void;
}) {
  const { pick } = useLocalized();

  return (
    <div>
      <SystemModel />
      <div className="mt-12 space-y-16">
        {journey.map((step, index) => (
          <Reveal key={step.title}>
            <div>
              <div className="mb-6 grid gap-5 lg:grid-cols-[0.28fr_0.72fr] lg:items-end">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                    0{index + 1} · {pick(step.role)}
                  </p>
                  <h3 className="mt-3 text-3xl font-[720] tracking-[-0.04em] text-[#111318]">
                    {step.title}
                  </h3>
                </div>
                <div className="border-l-2 border-[#1267d6] pl-5">
                  <p className="text-lg font-semibold text-[#111318]">
                    {pick(step.question)}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#626872]">
                    {pick(step.rationale)}
                  </p>
                </div>
              </div>
              <MediaFrame
                item={step.media}
                lang={lang}
                onOpen={onOpen}
                priority={index === 0}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

const demoCanvas = {
  width: 2160,
  height: 1440,
};

function LiveDemo({ lang }: { lang: Lang }) {
  const [revision, setRevision] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const storyId =
    'design-explorations-hybrid-connectors-salesforce-demo--skills-in-gallery';
  const demoUrl = `${basePath}/hybrid-connector-live-demo/iframe.html?id=${storyId}&viewMode=story`;
  const scale = viewportWidth / demoCanvas.width;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => setViewportWidth(viewport.clientWidth);
    const observer = new ResizeObserver(updateWidth);

    updateWidth();
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  return (
    <Reveal>
      <div className="relative left-1/2 w-[min(1440px,calc(100vw-32px))] -translate-x-1/2">
        <div className="overflow-hidden rounded-[28px] border border-[#dfe2e7] bg-white shadow-[0_24px_70px_rgba(17,19,24,0.10)]">
          <div className="flex flex-col justify-between gap-4 border-b border-[#dfe2e7] px-5 py-4 sm:flex-row sm:items-center md:px-6">
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                {lang === 'zh' ? '可交互代码原型' : 'Interactive coded prototype'}
              </div>
              <div className="mt-1 text-sm text-[#626872]">
                {lang === 'zh'
                  ? 'Gallery → 数据源能力 → Add Flow → Your Connections'
                  : 'Gallery → source capabilities → Add flow → Your Connections'}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setRevision((value) => value + 1)}
                className="rounded-full border border-[#c9cdd4] px-4 py-2 text-xs font-semibold text-[#626872] transition hover:border-[#1267d6] hover:text-[#1267d6]"
              >
                {lang === 'zh' ? '重置 Demo' : 'Reset demo'}
              </button>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1267d6] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0f56b6]"
              >
                {lang === 'zh' ? '新窗口打开 ↗' : 'Open full demo ↗'}
              </a>
            </div>
          </div>
          <div
            ref={viewportRef}
            className="relative aspect-[3/2] overflow-hidden bg-white"
          >
            <div
              className="absolute left-0 top-0"
              style={{
                width: demoCanvas.width,
                height: demoCanvas.height,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                visibility: viewportWidth > 0 ? 'visible' : 'hidden',
              }}
            >
              <iframe
                key={revision}
                src={`${demoUrl}&revision=${revision}`}
                title={
                  lang === 'zh'
                    ? 'Unified Connector 可交互设计原型'
                    : 'Unified Connector interactive design prototype'
                }
                loading="lazy"
                className="h-full w-full border-0 bg-white"
                allow="clipboard-write"
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function SystemModel() {
  const { pick } = useLocalized();
  return (
    <div className="grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-4">
      {journey.map((step, index) => (
        <div key={step.title} className="relative bg-white p-5">
          {index < journey.length - 1 && (
            <span
              className="absolute -right-3 top-8 z-10 hidden h-6 w-6 place-items-center rounded-full bg-[#171a21] text-xs text-white md:grid"
              aria-hidden="true"
            >
              →
            </span>
          )}
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1267d6]">
            0{index + 1} · {pick(step.role)}
          </p>
          <h3 className="mt-5 text-lg font-semibold text-[#111318]">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#626872]">
            {pick(step.question)}
          </p>
        </div>
      ))}
    </div>
  );
}

function StressTest({
  lang,
  onOpen,
}: {
  lang: Lang;
  onOpen: (item: MediaItem) => void;
}) {
  const { t, pick } = useLocalized();
  const [selected, setSelected] = useState(0);
  const activeCase = stressCases[selected];

  return (
    <div>
      <EditorialCard className="bg-[#f7f8fa] shadow-none">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
              {t('Scalability test', '扩展性验证')}
            </p>
            <h3 className="mt-3 text-2xl font-[720] tracking-[-0.035em] text-[#111318]">
              {t(
                'One model, four very different capability combinations.',
                '同一模型，适配四种完全不同的能力组合。',
              )}
            </h3>
          </div>
          <span className="text-sm text-[#626872]">
            {t('Select a case to inspect the real screen.', '选择场景查看对应真实界面。')}
          </span>
        </div>
        <div
          className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4"
          role="group"
          aria-label={t('Edge case selector', '边界场景选择')}
        >
          {stressCases.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`rounded-[18px] border p-4 text-left transition-colors ${
                selected === index
                  ? 'border-[#1267d6]/40 bg-white shadow-[0_10px_26px_rgba(18,103,214,0.08)]'
                  : 'border-[#dfe2e7] bg-white/60 hover:bg-white'
              }`}
            >
              <p className="text-sm font-semibold text-[#111318]">{item.name}</p>
              <p className="mt-1 text-xs text-[#8e949e]">{pick(item.model)}</p>
              <p className="mt-5 text-sm leading-6 text-[#1267d6]">
                {pick(item.proves)}
              </p>
            </button>
          ))}
        </div>
      </EditorialCard>
      <div className="mt-5">
        <MediaFrame
          key={activeCase.name}
          item={activeCase.media}
          lang={lang}
          onOpen={onOpen}
          priority
        />
      </div>
    </div>
  );
}

function ValidationStory() {
  const { t, pick } = useLocalized();
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {validationChanges.map((change, index) => (
        <Reveal key={change.test.en} delay={index * 0.04}>
          <EditorialCard className="h-full">
            <NumberBadge>0{index + 1}</NumberBadge>
            <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8e949e]">
              {t('What I tested', '测试问题')}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-7 text-[#111318]">
              {pick(change.test)}
            </h3>
            <div className="my-5 h-px bg-[#dfe2e7]" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8e949e]">
              {t('What failed', '发现的问题')}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#626872]">
              {pick(change.finding)}
            </p>
            <div className="my-5 h-px bg-[#dfe2e7]" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1267d6]">
              {t('Design change', '设计变化')}
            </p>
            <p className="mt-2 text-sm font-medium leading-7 text-[#111318]">
              {pick(change.change)}
            </p>
          </EditorialCard>
        </Reveal>
      ))}
    </div>
  );
}

export default function UnifiedConnectorExperiencePage() {
  const { lang, t } = useLanguage();
  const { pick } = useLocalized();
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  const heroMedia: MediaItem = {
    src: screenshotPath('journey-01-gallery.png'),
    alt: {
      en: 'Selected unified connector design in the global Gallery',
      zh: '全局 Gallery 中最终选择的统一连接器设计',
    },
    label: { en: 'Selected product direction', zh: '最终产品方向' },
    caption: {
      en: 'The global Gallery stays rich and scannable; each card represents one database or deployment boundary.',
      zh: '全局 Gallery 保持丰富且易于浏览，每张卡片代表一个数据库或部署边界。',
    },
  };

  return (
    <>
      <ReadingProgress label={t('Reading progress', '阅读进度')} />
      <Navigation />
      <main className="min-h-screen bg-[#f7f8fa] text-[#111318]">
        <Chapter id="top" tone="surface" className="pt-36 md:pt-44 lg:pt-48">
          <BackToProjects />
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e949e]">
                <span className="h-px w-10 bg-[#c9cdd4]" aria-hidden="true" />
                <span>{t('Systems Design · Enterprise AI', '系统设计 · 企业 AI')}</span>
              </div>
              <h1 className="max-w-4xl text-[clamp(3.3rem,7.4vw,6.9rem)] font-[720] leading-[0.92] tracking-[-0.07em] text-[#111318]">
                Unified Enterprise{' '}
                <span className="text-[#1267d6]">Connector</span> Experience
              </h1>
              <p className="mt-8 max-w-2xl text-[clamp(1.45rem,2.5vw,2.05rem)] font-medium leading-[1.22] tracking-[-0.035em] text-[#171a21]">
                {t(
                  'I turned a fast-changing data-access ecosystem into a stable mental model for administrators.',
                  '我把快速变化的数据访问生态，转化为管理员可以稳定理解的产品模型。',
                )}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#626872] md:text-lg">
                {t(
                  'The design challenge was not to fit more connector types into the UI. It was to decide what should remain stable as AI moved from indexed search to live retrieval and agentic actions.',
                  '设计挑战不是在界面里塞进更多连接器类型，而是当 AI 从索引式搜索走向实时检索与 Agent 行动时，判断什么应该保持稳定。',
                )}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <MediaFrame
                item={heroMedia}
                lang={lang}
                onOpen={setLightboxItem}
                priority
              />
            </Reveal>
          </div>
          <Reveal className="mt-12">
            <MetaGrid
              items={meta.map((item) => ({
                label: pick(item.label),
                value: pick(item.value),
              }))}
            />
          </Reveal>
        </Chapter>

        <Chapter id="problem" tone="paper">
          <SectionHeading
            index="01"
            eyebrow={t('Problem analysis', '问题分析')}
            title={t(
              'The Gallery kept growing, but its unit of organization never changed.',
              'Gallery 不断增长，但它的组织单位从未改变。',
            )}
            body={t(
              'Every new connector became another card. When one app supported multiple connector capabilities, it appeared as several unrelated starting points and pushed the burden of understanding the system onto administrators.',
              '每增加一种 Connector，Gallery 就增加一张卡片；当同一个 App 支持多种 Connector 能力时，它又会变成多个彼此割裂的入口，把理解系统的成本转嫁给管理员。',
            )}
          />
          <div className="mt-10">
            <ProblemEvidence lang={lang} onOpen={setLightboxItem} />
          </div>
          <div className="mt-14">
            <SectionHeading
              index="01A"
              eyebrow={t('Why the problem accelerated', '为什么问题正在加速')}
              title={t(
                'AI changed faster than the connector model.',
                'AI 的演进速度超过了原有连接器模型。',
              )}
              body={t(
                'The original structure was built for indexed search. Live retrieval, user-owned access, and agent actions kept adding new technical entry points to a model that was already difficult to scan.',
                '原有结构面向索引式搜索；实时检索、用户级访问和 Agent 操作又不断增加新的技术入口，让原本难以浏览的模型进一步复杂化。',
              )}
            />
          </div>
          <div className="mt-10">
            <StrategicShift />
          </div>
          <div className="mt-8">
            <CompetitiveSignal />
          </div>
        </Chapter>

        <Chapter id="reframe" tone="surface">
          <SectionHeading
            index="02"
            eyebrow={t('Problem redefinition', '问题重定义')}
            title={t(
              'Duplicate cards were the symptom. The missing piece was a stable mental model.',
              '重复卡片只是症状，真正缺失的是一套稳定的用户心智。',
            )}
            body={t(
              'Instead of asking how to fit more connectors into the Gallery, I asked what the product should be organized around when one source supports many ways for AI to use its data.',
              '我不再追问如何把更多 Connector 塞进 Gallery，而是重新思考：当同一来源支持多种 AI 数据访问方式时，产品应该围绕什么来组织？',
            )}
          />
          <div className="mt-10">
            <ReframeModel />
          </div>
          <Reveal className="mt-12">
            <StatementBand label={t('Design thesis', '设计命题')}>
              {t(
                'Keep the source and administrator job stable. Let connection technologies evolve underneath as explicit capabilities.',
                '保持数据源与管理员任务稳定，让连接技术在其下以明确能力持续演进。',
              )}
            </StatementBand>
          </Reveal>
        </Chapter>

        <Chapter id="exploration" tone="dark">
          <SectionHeading
            index="03"
            eyebrow={t('Defining the Gallery card boundary', '定义 Gallery 卡片边界')}
            title={t(
              'From six GitHub connector cards to two source entries.',
              '从 6 张 GitHub 技术卡片，合并为 2 个来源入口。',
            )}
            body={t(
              'Before, Issues, Knowledge, and Pull Requests produced separate cards for GitHub Cloud and GitHub Server. After, the Gallery keeps only two deployment entries and reveals those connector technologies as capabilities after selection.',
              '合并前，Issues、Knowledge、Pull Requests 在 GitHub Cloud 与 GitHub Server 下分别生成独立卡片；合并后，Gallery 只保留两个部署入口，并在选择后再披露具体连接能力。',
            )}
            dark
          />
          <div className="mt-10">
            <ExplorationStory lang={lang} onOpen={setLightboxItem} />
          </div>
        </Chapter>

        <Chapter id="experience" tone="surface">
          <SectionHeading
            index="04"
            eyebrow={t('From model to experience', '从模型到体验')}
            title={t(
              'One object, revealed at the right level across the journey.',
              '同一个对象，在用户旅程中逐层展开。',
            )}
            body={t(
              'The object model becomes useful only when Gallery, capability comparison, setup, and lifecycle management each carry the right decision density and preserve the same language.',
              '只有当 Gallery、能力比较、设置和生命周期管理分别承载正确的决策密度，并保持同一套语言时，产品模型才真正成立。',
            )}
          />
          <div className="mt-10">
            <ExperienceLogic lang={lang} onOpen={setLightboxItem} />
          </div>
          <div className="mt-16">
            <SectionHeading
              index="04A"
              eyebrow={t('Interactive prototype', '可交互原型')}
              title={t(
                'Experience the complete model as a working flow.',
                '直接体验这套模型如何在完整流程中工作。',
              )}
              body={t(
                'The coded prototype keeps the design review focused on real behavior, information density, routing, and state—not isolated static screens.',
                '代码原型让设计评审聚焦于真实行为、信息密度、页面路由与状态，而不是彼此割裂的静态界面。',
              )}
            />
          </div>
          <div className="mt-10">
            <LiveDemo lang={lang} />
          </div>
        </Chapter>

        <Chapter id="validation" tone="soft">
          <SectionHeading
            index="05"
            eyebrow={t('Validation changed the design', '验证改变了设计')}
            title={t(
              'The model had to survive exceptions—not just the ideal case.',
              '模型必须经得住例外，而不只是最理想的场景。',
            )}
            body={t(
              'Four very different capability combinations and an end-to-end audit exposed where the model broke. The value of validation was the design changes it produced.',
              '四种差异明显的能力组合与端到端审查共同暴露模型断点。验证的价值，在于它真正改变了设计。',
            )}
          />
          <div className="mt-10">
            <StressTest lang={lang} onOpen={setLightboxItem} />
          </div>
          <div className="mt-10">
            <ValidationStory />
          </div>
        </Chapter>

        <Chapter id="outcome" tone="paper">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
            <SectionHeading
              index="06"
              eyebrow={t('Outcome & reflection', '结果与反思')}
              title={t(
                'A connector model designed to evolve with AI.',
                '一套能够随 AI 持续演进的连接器模型。',
              )}
              body={t(
                'The outcome was not simply a cleaner Gallery. It was a shared product language that connects source discovery, capability decisions, setup ownership, and lifecycle management.',
                '结果不只是一个更干净的 Gallery，而是一套贯穿数据源发现、能力选择、设置责任和生命周期管理的共享产品语言。',
              )}
            />
            <div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  {
                    label: t('Product', '产品'),
                    value: t(
                      'From technical entries to a stable source model.',
                      '从技术入口转向稳定的数据源模型。',
                    ),
                  },
                  {
                    label: t('Experience', '体验'),
                    value: t(
                      'One language across discovery, setup, and management.',
                      '发现、设置与管理使用同一套语言。',
                    ),
                  },
                  {
                    label: t('Team', '团队'),
                    value: t(
                      'Coded alternatives made architecture reviewable.',
                      '可运行方案让抽象架构变得可评审。',
                    ),
                  },
                ].map((outcome) => (
                  <EditorialCard key={outcome.label} className="h-full p-5">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1267d6]">
                      {outcome.label}
                    </p>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#111318]">
                      {outcome.value}
                    </p>
                  </EditorialCard>
                ))}
              </div>
              <Reveal className="mt-5">
                <EditorialCard>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                    {t('Reflection', '反思')}
                  </p>
                  <blockquote className="mt-5 text-[clamp(1.6rem,3vw,2.7rem)] font-medium leading-[1.12] tracking-[-0.045em] text-[#111318]">
                    {t(
                      'A durable enterprise experience is not organized around today’s protocol. It gives people a stable way to decide while the technology keeps moving.',
                      '可持续的企业体验不应围绕今天的协议来组织，而应在技术持续变化时，仍为用户提供稳定的决策方式。',
                    )}
                  </blockquote>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 rounded-full border border-[#c9cdd4] px-5 py-3 text-sm font-semibold text-[#626872] transition-colors hover:border-[#1267d6] hover:text-[#1267d6]"
                    >
                      <span aria-hidden="true">←</span>
                      {t('Back to projects', '返回项目')}
                    </Link>
                    <Link
                      href="/projects/connector-health-center"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1267d6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f56b6]"
                    >
                      {t('Next case study', '下一个案例')}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </EditorialCard>
              </Reveal>
            </div>
          </div>
        </Chapter>
      </main>

      <Lightbox
        item={lightboxItem}
        lang={lang}
        onClose={() => setLightboxItem(null)}
      />
    </>
  );
}

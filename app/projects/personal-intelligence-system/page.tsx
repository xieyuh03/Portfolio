'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
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
const commandCenterMedia = (file: string) =>
  `${basePath}/images/personal-command-center/${file}`;
const worldLedgerMedia = (file: string) =>
  `${basePath}/images/global-market-intelligence/${file}`;

type Localized = { en: string; zh: string };
type MediaItem = {
  src: string;
  alt: Localized;
  label: Localized;
  caption: Localized;
  tone?: 'light' | 'dark';
};

const media = {
  dashboard: {
    src: commandCenterMedia('dashboard.png'),
    alt: {
      en: 'Personal Command Center daily briefing and continuation dashboard',
      zh: 'Personal Command Center 每日简报与继续处理工作台',
    },
    label: { en: 'Private work layer', zh: '私人工作层' },
    caption: {
      en: 'Verified changes arrive as a briefing; the same surface returns me to the exact project, note, creation, or Agent task that needs attention.',
      zh: '核验过的变化先汇成简报；同一界面再把我送回真正需要继续的项目、笔记、创作或 Agent 任务。',
    },
  },
  globalOverview: {
    src: worldLedgerMedia('global-overview.png'),
    alt: {
      en: 'World Ledger global market evidence map',
      zh: 'World Ledger 全球市场证据地图',
    },
    label: { en: 'Public evidence layer', zh: '公开证据层' },
    caption: {
      en: 'World Ledger places capital, markets, resources, routes, and events onto one geographic decision frame while exposing evidence quality.',
      zh: 'World Ledger 把资金、市场、资源、航运与事件放回同一张地理决策框架，并展示证据质量。',
    },
    tone: 'dark',
  },
  projectAtlas: {
    src: commandCenterMedia('project-atlas.png'),
    alt: {
      en: 'Project Atlas showing managed and independently deployed projects',
      zh: '展示内部项目与独立发布作品的项目地图',
    },
    label: { en: 'Ownership before automation', zh: '先明确责任，再谈自动化' },
    caption: {
      en: 'Goals and next actions are coordinated in one atlas, but source code and deployment remain owned by each product.',
      zh: '目标与下一步在一张地图里协调，但源码与部署仍由各产品独立拥有。',
    },
  },
  agent: {
    src: commandCenterMedia('context-agent-channel.png'),
    alt: {
      en: 'Persistent Agent task with visible project context and decision boundary',
      zh: '展示项目上下文与决策边界的持续 Agent 任务',
    },
    label: { en: 'Context becomes executable', zh: '让上下文可以执行' },
    caption: {
      en: 'The project, evidence boundary, model, permission mode, and reasoning stay visible inside one persistent task.',
      zh: '项目、证据边界、模型、权限方式与推理结果都保留在同一个持续任务中。',
    },
  },
  automation: {
    src: commandCenterMedia('automation-builder.png'),
    alt: {
      en: 'Inspectable project review and public data refresh automations',
      zh: '可检查的项目巡检与公开数据刷新自动化',
    },
    label: { en: 'Continuity without invisibility', zh: '持续运行，但不隐形' },
    caption: {
      en: 'Recurring work has an explicit task channel, model, cadence, destination, and last result rather than disappearing into a background job.',
      zh: '重复工作拥有明确的任务频道、模型、频率、去向与上次结果，而不是消失在后台任务里。',
    },
  },
  nativeResearch: {
    src: commandCenterMedia('native-world-ledger.png'),
    alt: {
      en: 'World Ledger ETF evidence consumed inside Personal Command Center',
      zh: 'Personal Command Center 原生消费 World Ledger ETF 证据',
    },
    label: { en: 'One public data contract', zh: '一套公开数据契约' },
    caption: {
      en: 'The public research product and the private workspace share a versioned public snapshot—not a private account database.',
      zh: '公开研究产品与私人工作空间共享的是版本化公开快照，而不是私人账户数据库。',
    },
  },
  encryptedSync: {
    src: commandCenterMedia('encrypted-data-sync.png'),
    alt: {
      en: 'Encrypted recovery flow for private workspace state',
      zh: '私人工作状态的加密恢复流程',
    },
    label: { en: 'Private state stays private', zh: '私人状态留在私人边界内' },
    caption: {
      en: 'Private context moves only as an authenticated encrypted snapshot with in-memory key handling, staged restore, and local backup.',
      zh: '私人上下文只以认证加密快照移动，并通过内存密钥、暂存恢复与本地备份保护。',
    },
  },
  deviation: {
    src: worldLedgerMedia('deviation-analysis.png'),
    alt: {
      en: 'Linked market index and historical deviation evidence',
      zh: '联动展示市场指数与历史偏离度证据',
    },
    label: { en: 'Location, not prediction', zh: '位置，而不是预测' },
    caption: {
      en: 'The research interface separates present location from future prediction and states that historical frequency is not a guarantee.',
      zh: '研究界面把当前位置与未来预测分开，并明确历史频率不等于未来保证。',
    },
    tone: 'dark',
  },
} satisfies Record<string, MediaItem>;

const losses = [
  {
    title: { en: 'Signals had no destination.', zh: '信号没有去向。' },
    body: {
      en: 'Articles, market changes, and ideas could be collected, but they rarely arrived inside the project that needed them.',
      zh: '资讯、市场变化与想法可以被收集，却很少自然进入真正需要它们的项目。',
    },
  },
  {
    title: { en: 'AI had no durable memory.', zh: 'AI 没有持续记忆。' },
    body: {
      en: 'Each new chat knew the latest prompt but not the decision, evidence, ownership, or next action behind the work.',
      zh: '每条新对话只知道最新 prompt，却不知道工作背后的决策、证据、责任与下一步。',
    },
  },
  {
    title: { en: 'Automation hid responsibility.', zh: '自动化隐藏了责任。' },
    body: {
      en: 'A scheduled job could run, but it was hard to see which context it inherited, where it wrote, or what failed.',
      zh: '定时任务可以运行，但很难看见它继承了什么上下文、写回哪里、又为何失败。',
    },
  },
];

const loop = [
  {
    code: '01',
    title: { en: 'Signal', zh: '信号' },
    body: { en: 'What changed?', zh: '发生了什么变化？' },
  },
  {
    code: '02',
    title: { en: 'Evidence', zh: '证据' },
    body: { en: 'What can the data support?', zh: '数据能支持什么？' },
  },
  {
    code: '03',
    title: { en: 'Decision', zh: '决策' },
    body: { en: 'What matters now?', zh: '现在什么最重要？' },
  },
  {
    code: '04',
    title: { en: 'Action', zh: '行动' },
    body: { en: 'Which project moves next?', zh: '哪个项目下一步要动？' },
  },
  {
    code: '05',
    title: { en: 'Memory', zh: '记忆' },
    body: { en: 'What must survive the session?', zh: '什么必须跨会话保留？' },
  },
];

const evolution = [
  {
    year: '01',
    title: { en: 'Feishu assistant', zh: '飞书助手' },
    body: {
      en: 'A convenient conversational entry, but work context still lived outside the conversation.',
      zh: '它提供了方便的对话入口，但工作上下文仍然存在于对话之外。',
    },
  },
  {
    year: '02',
    title: { en: 'Personal Command Center', zh: 'Personal Command Center' },
    body: {
      en: 'Projects and content became durable objects that could open an Agent with context already attached.',
      zh: '项目与内容变成持久对象，可以直接唤起已经绑定上下文的 Agent。',
    },
  },
  {
    year: '03',
    title: { en: 'World Ledger', zh: 'World Ledger' },
    body: {
      en: 'Public market research gained an independent evidence model, data contract, and deployment.',
      zh: '公开市场研究获得了独立的证据模型、数据契约与发布流程。',
    },
  },
  {
    year: '04',
    title: { en: 'One intelligence loop', zh: '一条完整智能闭环' },
    body: {
      en: 'Public evidence can now enter private work without merging their ownership or data boundaries.',
      zh: '公开证据现在可以进入私人工作，同时不合并两者的责任与数据边界。',
    },
  },
];

function MediaFrame({
  item,
  lang,
  onOpen,
  priority = false,
}: {
  item: MediaItem;
  lang: Lang;
  onOpen: (item: MediaItem) => void;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-white shadow-[0_18px_50px_rgba(17,19,24,0.07)]">
      <div className="flex items-center justify-between gap-4 border-b border-[#dfe2e7] px-4 py-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">
          {item.label[lang]}
        </span>
        <span className="text-xs text-[#8e949e]">
          {lang === 'zh' ? '点击放大' : 'Click to expand'}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onOpen(item)}
        className={`group block w-full overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1267d6] ${
          item.tone === 'dark' ? 'bg-[#080b0c]' : 'bg-[#eef1f5]'
        }`}
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
          className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.005] motion-reduce:transition-none"
        />
      </button>
      <figcaption className="border-t border-[#dfe2e7] px-4 py-3 text-sm leading-6 text-[#626872]">
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
  useEffect(() => {
    if (!item) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [item, onClose]);

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
        <p className="mx-auto mt-3 max-w-4xl text-center text-sm text-white/70">
          {item.caption[lang]}
        </p>
      </div>
    </div>
  );
}

export default function PersonalIntelligenceSystemPage() {
  const { lang, t } = useLanguage();
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const pick = (value: Localized) => value[lang];

  return (
    <>
      <ReadingProgress label={t('Reading progress', '阅读进度')} />
      <Navigation />
      <main className="min-h-screen bg-[#f7f8fa] text-[#111318]">
        <Chapter id="top" tone="surface" className="pt-36 md:pt-44 lg:pt-48">
          <Reveal className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#626872] transition-colors hover:text-[#1267d6]"
            >
              <span aria-hidden="true">←</span>
              {t('All Projects', '所有项目')}
            </Link>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e949e]">
                <span className="h-px w-10 bg-[#c9cdd4]" aria-hidden="true" />
                <span>{t('One product · Two surfaces', '一个产品 · 两个界面')}</span>
              </div>
              <h1 className="max-w-4xl text-[clamp(3.2rem,6.8vw,6.4rem)] font-[720] leading-[0.9] tracking-[-0.072em] text-[#111318]">
                Personal <span className="text-[#1267d6]">Intelligence</span> System
              </h1>
              <p className="mt-8 max-w-2xl text-[clamp(1.4rem,2.35vw,2rem)] font-medium leading-[1.24] tracking-[-0.035em] text-[#171a21]">
                {t(
                  'A system that turns public signals into evidence, evidence into action, and action into durable memory.',
                  '一套把公开信号变成证据、把证据变成行动、再把行动沉淀为长期记忆的系统。',
                )}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#626872] md:text-lg">
                {t(
                  'World Ledger is the public evidence layer. Personal Command Center is the private work layer. I designed them as one loop because research without action becomes noise, while AI action without evidence becomes guesswork.',
                  'World Ledger 是公开证据层，Personal Command Center 是私人工作层。我把它们设计成一条闭环，因为没有行动的研究只会变成噪音，没有证据的 AI 行动则只是猜测。',
                )}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <MediaFrame
                item={media.dashboard}
                lang={lang}
                onOpen={setLightboxItem}
                priority
              />
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <MetaGrid
              items={[
                {
                  label: t('My role', '我的角色'),
                  value: t('Product strategy · UX · Research · Build', '产品策略 · UX · 研究 · 实现'),
                },
                {
                  label: t('System', '系统'),
                  value: 'World Ledger + Personal Command Center',
                },
                {
                  label: t('Core loop', '核心闭环'),
                  value: t('Signal → Evidence → Action → Memory', '信号 → 证据 → 行动 → 记忆'),
                },
                {
                  label: t('Trust model', '信任模型'),
                  value: t('Public evidence · Private state', '公开证据 · 私人状态'),
                },
              ]}
            />
          </Reveal>
        </Chapter>

        <Chapter id="problem" tone="paper">
          <SectionHeading
            index="01"
            eyebrow={t('The real problem', '真正的问题')}
            title={t(
              'AI made individual moments faster. My work still kept starting over.',
              'AI 让单次任务变快了，但我的工作仍然在不断重新开始。',
            )}
            body={t(
              'The bottleneck was not model intelligence. It was the loss between moments: a market signal that never reached a project, a decision trapped in chat history, or an automation whose context and ownership were invisible.',
              '瓶颈不是模型不够聪明，而是工作时刻之间的损耗：没有进入项目的市场信号、困在聊天记录里的决策，以及上下文与责任不可见的自动化。',
            )}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {losses.map((item, index) => (
              <Reveal key={item.title.en} delay={index * 0.04}>
                <EditorialCard className="h-full">
                  <NumberBadge>0{index + 1}</NumberBadge>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em]">
                    {pick(item.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#626872]">
                    {pick(item.body)}
                  </p>
                </EditorialCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <StatementBand label={t('First-principles question', '第一性原理问题')}>
              {t(
                'What information must survive—from the first signal to the next action—so intelligence can compound instead of reset?',
                '从第一个信号到下一步行动，哪些信息必须持续存在，才能让智能不断复利，而不是反复归零？',
              )}
            </StatementBand>
          </Reveal>
        </Chapter>

        <Chapter id="loop" tone="surface">
          <SectionHeading
            index="02"
            eyebrow={t('Product thesis', '产品命题')}
            title={t(
              'Design the information flow first. Let interfaces follow responsibility.',
              '先设计信息流，再让界面跟随责任边界。',
            )}
            body={t(
              'I stopped treating “an AI app” as a chat window. The product became a five-step intelligence loop, with each step preserving a different kind of truth.',
              '我不再把“AI 产品”理解成一个聊天窗口。产品变成了一条五阶段智能闭环，每一阶段保留不同类型的真实信息。',
            )}
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] sm:grid-cols-2 lg:grid-cols-5">
            {loop.map((item) => (
              <div key={item.code} className="bg-white p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                  {item.code}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{pick(item.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-[#626872]">
                  {pick(item.body)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[28px] border border-[#dfe2e7] bg-white p-7 shadow-[0_16px_40px_rgba(17,19,24,0.045)] md:p-9">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b87824]">
                  {t('Surface 01 · Public evidence', '界面 01 · 公开证据')}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">World Ledger</h3>
                <p className="mt-4 text-base leading-8 text-[#626872]">
                  {t(
                    'Observe public markets, separate evidence from proxy and inference, and make uncertainty inspectable.',
                    '观察公开市场，区分证据、代理与推断，让不确定性可以被检查。',
                  )}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full rounded-[28px] border border-[#dfe2e7] bg-white p-7 shadow-[0_16px_40px_rgba(17,19,24,0.045)] md:p-9">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                  {t('Surface 02 · Private work', '界面 02 · 私人工作')}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Personal Command Center</h3>
                <p className="mt-4 text-base leading-8 text-[#626872]">
                  {t(
                    'Carry evidence into projects, persistent Agent tasks, automation, and recoverable local memory.',
                    '把证据带入项目、持续 Agent 任务、自动化与可恢复的本地记忆。',
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </Chapter>

        <Chapter id="evidence" tone="dark">
          <SectionHeading
            index="03"
            eyebrow={t('Act I · Turn signals into evidence', '第一幕 · 把信号变成证据')}
            title={t(
              'Before asking AI what to do, make the evidence chain visible.',
              '在问 AI 应该做什么之前，先让证据链可见。',
            )}
            body={t(
              'World Ledger begins with a country and a decision question. It then separates common factors, relative preference, disclosed primary-market flows, historical location, and macro context—without pretending they have equal confidence.',
              'World Ledger 从国家与决策问题出发，再区分共同因子、相对偏好、披露的一级市场申赎、历史位置与宏观背景，而不是假装它们具有相同可信度。',
            )}
            dark
          />
          <div className="mt-10 grid gap-6">
            <MediaFrame
              item={media.globalOverview}
              lang={lang}
              onOpen={setLightboxItem}
            />
            <MediaFrame
              item={media.deviation}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-white/12 bg-white/12 md:grid-cols-3">
            {[
              {
                label: t('Thought', '思考'),
                body: t(
                  'More indicators do not create direction; they create more opportunities to confuse correlation with explanation.',
                  '更多指标不会自动产生方向，只会增加把相关性误认为解释的机会。',
                ),
              },
              {
                label: t('Decision', '决策'),
                body: t(
                  'Every view states what is observed, what is a proxy, what is inferred, and what could invalidate the story.',
                  '每个视图都说明什么是观察、什么是代理、什么是推断，以及什么会推翻当前故事。',
                ),
              },
              {
                label: t('Result', '结果'),
                body: t(
                  'Five connected public research views now share one evidence language and one versioned data contract.',
                  '五个相互连接的公开研究视图现在共享同一种证据语言与版本化数据契约。',
                ),
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#171a21] p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9a85e]">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
              </div>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              href="/projects/global-market-intelligence"
              className="group flex items-center justify-between gap-6 rounded-[24px] border border-white/14 bg-white/[0.055] p-6 text-white transition hover:border-[#d9a85e]/55 hover:bg-white/[0.08]"
            >
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9a85e]">
                  {t('Deep dive · Subcase 02', '深挖 · 子案例 02')}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  World Ledger · {t('Evidence model & research decisions', '证据模型与研究决策')}
                </h3>
              </div>
              <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </Chapter>

        <Chapter id="action" tone="paper">
          <SectionHeading
            index="04"
            eyebrow={t('Act II · Turn evidence into action', '第二幕 · 把证据变成行动')}
            title={t(
              'The work object opens the Agent. The Agent does not replace the work object.',
              '由工作对象唤起 Agent，而不是让 Agent 取代工作对象。',
            )}
            body={t(
              'Personal Command Center gives projects, notes, references, creations, and Agent tasks durable identities. Context enters AI from the object where work begins, then stays attached across models and sessions.',
              'Personal Command Center 让项目、笔记、参考资料、创作与 Agent 任务拥有持久身份。上下文从工作发起对象进入 AI，并跨模型与会话持续保留。',
            )}
          />
          <div className="mt-10 grid gap-6">
            <MediaFrame
              item={media.dashboard}
              lang={lang}
              onOpen={setLightboxItem}
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <MediaFrame
                item={media.projectAtlas}
                lang={lang}
                onOpen={setLightboxItem}
              />
              <MediaFrame
                item={media.agent}
                lang={lang}
                onOpen={setLightboxItem}
              />
            </div>
            <MediaFrame
              item={media.automation}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                label: t('Thought', '思考'),
                body: t(
                  'A chat remembers turns. A product must remember ownership, state, evidence, and the next action.',
                  '聊天记住的是对话轮次，产品必须记住责任、状态、证据与下一步。',
                ),
              },
              {
                label: t('Decision', '决策'),
                body: t(
                  'Projects remain the source of truth; Agent tasks and automations inherit context from them.',
                  '项目仍然是真实来源；Agent 任务与自动化从项目继承上下文。',
                ),
              },
              {
                label: t('Result', '结果'),
                body: t(
                  'Eight work areas, persistent multi-model tasks, and background checks now share one context spine.',
                  '八个工作领域、持续多模型任务与后台巡检现在共享同一条上下文主线。',
                ),
              },
            ].map((item) => (
              <EditorialCard key={item.label} className="h-full">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                  {item.label}
                </p>
                <p className="mt-4 text-sm font-semibold leading-7">{item.body}</p>
              </EditorialCard>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              href="/projects/personal-command-center"
              className="group flex items-center justify-between gap-6 rounded-[24px] border border-[#dfe2e7] bg-white p-6 text-[#111318] shadow-[0_16px_40px_rgba(17,19,24,0.045)] transition hover:border-[#1267d6]/45"
            >
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                  {t('Deep dive · Subcase 01', '深挖 · 子案例 01')}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  Personal Command Center · {t('Context & continuity decisions', '上下文与连续性决策')}
                </h3>
              </div>
              <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </Chapter>

        <Chapter id="boundary" tone="surface">
          <SectionHeading
            index="05"
            eyebrow={t('The trust boundary', '信任边界')}
            title={t(
              'Connect the products through a contract—not by merging their data.',
              '通过数据契约连接产品，而不是合并它们的数据。',
            )}
            body={t(
              'This was the architectural decision that made the two surfaces one product without turning the system into one risky monolith.',
              '这是让两个界面成为同一产品、同时又不把系统变成高风险单体的关键架构决策。',
            )}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <MediaFrame
              item={media.nativeResearch}
              lang={lang}
              onOpen={setLightboxItem}
            />
            <MediaFrame
              item={media.encryptedSync}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-3">
            {[
              {
                title: t('Public contract', '公开契约'),
                body: t(
                  'Versioned snapshots, sources, model outputs, and freshness can move between products.',
                  '版本化快照、来源、模型输出与新鲜度可以在产品之间流动。',
                ),
              },
              {
                title: t('Private state', '私人状态'),
                body: t(
                  'Accounts, holdings, transactions, local notes, and workspace history never enter the public product.',
                  '账户、持仓、成交、本地笔记与工作历史永远不进入公开产品。',
                ),
              },
              {
                title: t('Recoverability', '可恢复性'),
                body: t(
                  'Private state moves only through authenticated encryption, staged restore, and automatic backup.',
                  '私人状态只通过认证加密、暂存恢复与自动备份移动。',
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#626872]">{item.body}</p>
              </div>
            ))}
          </div>
        </Chapter>

        <Chapter id="evolution" tone="soft">
          <SectionHeading
            index="06"
            eyebrow={t('Product evolution', '产品演进')}
            title={t(
              'The system emerged by repeatedly moving context closer to the work.',
              '这套系统是在一次次把上下文推近真实工作中逐渐形成的。',
            )}
            body={t(
              'I did not begin with a grand platform plan. Each iteration solved the next visible break in continuity, then exposed a deeper system problem.',
              '我并不是从一个宏大的平台规划开始。每次迭代先修复一个可见的连续性断点，再暴露更深一层的系统问题。',
            )}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {evolution.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.035}>
                <EditorialCard className="h-full">
                  <NumberBadge>{item.year}</NumberBadge>
                  <h3 className="mt-5 text-xl font-semibold">{pick(item.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#626872]">
                    {pick(item.body)}
                  </p>
                </EditorialCard>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter id="outcome" tone="dark">
          <SectionHeading
            index="07"
            eyebrow={t('Outcome & reflection', '成果与复盘')}
            title={t(
              'I was not building two tools. I was building one accountable intelligence loop.',
              '我不是在做两个工具，而是在构建一条可追责的智能闭环。',
            )}
            body={t(
              'The system now preserves the chain from public evidence to private action while keeping ownership, uncertainty, and data boundaries visible. The next milestone is not more features—it is measuring whether daily decisions actually become faster, more consistent, and easier to revisit.',
              '这套系统现在保留了从公开证据到私人行动的完整链条，同时让责任、不确定性与数据边界始终可见。下一阶段不是继续堆功能，而是衡量日常决策是否真的更快、更一致、也更容易回看。',
            )}
            dark
          />
          <div className="mt-10">
            <MetaGrid
              dark
              items={[
                {
                  label: t('Product surfaces', '产品界面'),
                  value: t('2 surfaces · 1 intelligence loop', '2 个界面 · 1 条智能闭环'),
                },
                {
                  label: t('Public research', '公开研究'),
                  value: t('5 connected evidence views', '5 个相互连接的证据视图'),
                },
                {
                  label: t('Private work', '私人工作'),
                  value: t('8 work areas · persistent Agents', '8 个工作领域 · 持续 Agent'),
                },
                {
                  label: t('Continuity', '连续性'),
                  value: t('Scheduled work · encrypted recovery', '定时工作 · 加密恢复'),
                },
              ]}
            />
          </div>
          <Reveal className="mt-10">
            <StatementBand label={t('Design principle', '设计原则')}>
              {t(
                'Make evidence inspectable. Make context portable. Make automation accountable. Keep ownership visible.',
                '让证据可以检查，让上下文可以流动，让自动化可以追责，让责任始终可见。',
              )}
            </StatementBand>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link
              href="/projects/personal-command-center"
              className="group rounded-[24px] border border-white/14 bg-white/[0.055] p-6 text-white transition hover:border-[#70a9f5]/60 hover:bg-white/[0.08]"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#70a9f5]">
                {t('Subcase 01 · Private work', '子案例 01 · 私人工作')}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Personal Command Center</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                {t(
                  'How context, Agent tasks, automation, and encrypted continuity were designed.',
                  '上下文、Agent 任务、自动化与加密连续性是如何被设计出来的。',
                )}
              </p>
              <span className="mt-5 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link
              href="/projects/global-market-intelligence"
              className="group rounded-[24px] border border-white/14 bg-white/[0.055] p-6 text-white transition hover:border-[#d9a85e]/60 hover:bg-white/[0.08]"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9a85e]">
                {t('Subcase 02 · Public evidence', '子案例 02 · 公开证据')}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">World Ledger</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                {t(
                  'How observation, proxy, inference, and research boundaries became a product.',
                  '观察、代理、推断与研究边界是如何被产品化的。',
                )}
              </p>
              <span className="mt-5 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
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

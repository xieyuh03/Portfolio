'use client';

import Link from 'next/link';
import { useState } from 'react';
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
const mediaPath = (file: string) =>
  `${basePath}/images/personal-command-center/${file}`;

type Localized = { en: string; zh: string };
type MediaItem = {
  src: string;
  alt: Localized;
  label: Localized;
  caption: Localized;
};

const media = {
  dashboard: {
    src: mediaPath('dashboard.png'),
    alt: {
      en: 'Personal Command Center dashboard',
      zh: 'Personal Command Center 工作台',
    },
    label: { en: 'Unified home', zh: '统一工作台' },
    caption: {
      en: 'A calm overview keeps information, saved items, notes, and creation visible without merging their workflows.',
      zh: '统一首页汇总资讯、收藏、笔记与创作，但不合并各模块自己的工作方式。',
    },
  },
  projects: {
    src: mediaPath('project-atlas.png'),
    alt: {
      en: 'Project Atlas with managed and portfolio projects',
      zh: '同时展示内部项目与独立作品项目的 Project Atlas',
    },
    label: { en: 'Project Atlas', zh: '项目地图' },
    caption: {
      en: 'The command center manages direction, status, and next actions while source code and deployment remain independently owned.',
      zh: '中枢管理方向、状态与下一步，源码和部署仍由独立项目自己拥有。',
    },
  },
  agent: {
    src: mediaPath('context-agent-channel.png'),
    alt: {
      en: 'Persistent Agent task channel linked to Personal Command Center',
      zh: '绑定 Personal Command Center 项目上下文的持续 Agent 任务频道',
    },
    label: { en: 'Context-bound Agent', zh: '上下文绑定 Agent' },
    caption: {
      en: 'Opening Agent from a project creates a persistent task with project context already attached and a model that can change each turn.',
      zh: '从项目进入 Agent 会创建持续任务，自动绑定项目上下文，并允许每一轮切换模型。',
    },
  },
  automation: {
    src: mediaPath('automation-builder.png'),
    alt: {
      en: 'Automation builder for information collection and scheduled Agent work',
      zh: '用于资讯采集与定时 Agent 工作的自动化配置器',
    },
    label: { en: 'Background automation', zh: '后台自动化' },
    caption: {
      en: 'Four templates turn recurring work into explicit schedules, models, destinations, and limits.',
      zh: '四种模板把重复工作转化为明确的计划、模型、结果去向与执行上限。',
    },
  },
} satisfies Record<string, MediaItem>;

const challengeCards = [
  {
    number: '01',
    title: {
      en: 'Work was distributed.',
      zh: '工作分散在不同位置。',
    },
    body: {
      en: 'Projects, articles, notes, creative assets, investments, and conversations each had a different home.',
      zh: '项目、资讯、笔记、创作素材、投资和对话各自存在于不同位置。',
    },
  },
  {
    number: '02',
    title: {
      en: 'AI context kept resetting.',
      zh: 'AI 上下文不断重置。',
    },
    body: {
      en: 'A generic chat knew the latest prompt, but not which project, article, or decision the work belonged to.',
      zh: '通用聊天知道当前 prompt，却不知道工作属于哪个项目、文章或决策。',
    },
  },
  {
    number: '03',
    title: {
      en: 'Automation stopped with the interface.',
      zh: '自动化随着界面退出而停止。',
    },
    body: {
      en: 'Recurring collection and review needed a durable schedule, not another button that only worked while the app was open.',
      zh: '周期性的采集与巡检需要持久计划，而不是只能在 App 打开时运行的按钮。',
    },
  },
];

const modules = [
  {
    eyebrow: { en: 'Knowledge', zh: '知识' },
    title: { en: 'Information · Notes · Creation', zh: '资讯 · 笔记 · 创作' },
    body: {
      en: 'Independent tools for collecting, reading, writing, and turning references into creative work.',
      zh: '分别承担采集、阅读、写作，以及把参考内容转化为创作的独立工具。',
    },
  },
  {
    eyebrow: { en: 'Work', zh: '工作' },
    title: { en: 'Projects · Investment · World', zh: '项目 · 投资 · 全球态势' },
    body: {
      en: 'Domain modules preserve their own data and workflows while sharing one navigation and status language.',
      zh: '领域模块保留自己的数据与流程，同时共享统一导航和状态语言。',
    },
  },
  {
    eyebrow: { en: 'Intelligence', zh: '智能' },
    title: { en: 'Agent tasks · Automations', zh: 'Agent 任务 · 自动化' },
    body: {
      en: 'Persistent task channels and scheduled work consume context from the object where the task begins.',
      zh: '持续任务频道与定时工作直接消费任务发起对象的上下文。',
    },
  },
];

const automationTemplates = [
  {
    title: { en: 'Information collection', zh: '资讯采集' },
    body: {
      en: 'Research online, preserve sources, and write structured items into a chosen directory.',
      zh: '联网检索、保留来源，并把结构化内容写入指定资讯目录。',
    },
  },
  {
    title: { en: 'Scheduled analysis', zh: '定时分析' },
    body: {
      en: 'Resume an existing task with its saved context and conversation.',
      zh: '基于既有任务保存的上下文与对话继续分析。',
    },
  },
  {
    title: { en: 'Project review', zh: '项目巡检' },
    body: {
      en: 'Check progress, unresolved work, risk, and the next action on a schedule.',
      zh: '按计划检查项目进展、未完成事项、风险与下一步。',
    },
  },
  {
    title: { en: 'Custom automation', zh: '自定义自动化' },
    body: {
      en: 'Run a reusable Agent instruction with an explicit model and destination.',
      zh: '使用明确的模型与结果去向，运行可复用的 Agent 指令。',
    },
  },
];

const reviewItems = [
  {
    label: { en: 'Keep', zh: '保留' },
    title: {
      en: 'Explicit boundaries',
      zh: '明确的边界',
    },
    body: {
      en: 'Modules remain understandable, projects keep ownership of their source, and unavailable native capabilities are stated rather than silently simulated.',
      zh: '模块保持可理解，项目继续拥有自己的源码；不可用的原生能力会被明确说明，而不是静默模拟。',
    },
  },
  {
    label: { en: 'Refine', zh: '需要优化' },
    title: {
      en: 'A dashboard for active work',
      zh: '面向当前工作的首页',
    },
    body: {
      en: 'The home screen should prioritize active projects, Agent tasks, and upcoming automations—not only content counts.',
      zh: '首页应该优先呈现进行中的项目、Agent 任务与即将执行的自动化，而不只是内容数量。',
    },
  },
  {
    label: { en: 'Validate next', zh: '下一步验证' },
    title: {
      en: 'Context confidence',
      zh: '上下文可信度',
    },
    body: {
      en: 'Users should be able to inspect what context an Agent inherited, what changed, and what an automation wrote back.',
      zh: '用户需要能检查 Agent 继承了什么上下文、发生了什么变化，以及自动化写回了什么。',
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
        <p className="mx-auto mt-3 max-w-4xl text-center text-sm text-white/70">
          {item.caption[lang]}
        </p>
      </div>
    </div>
  );
}

export default function PersonalCommandCenterPage() {
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
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e949e]">
                <span className="h-px w-10 bg-[#c9cdd4]" aria-hidden="true" />
                <span>{t('Personal system · Local-first AI', '个人系统 · 本地优先 AI')}</span>
              </div>
              <h1 className="max-w-4xl text-[clamp(3.4rem,7.2vw,6.8rem)] font-[720] leading-[0.92] tracking-[-0.07em] text-[#111318]">
                Personal <span className="text-[#1267d6]">Command Center</span>
              </h1>
              <p className="mt-8 max-w-2xl text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-[1.24] tracking-[-0.035em] text-[#171a21]">
                {t(
                  'A local-first workspace where content, projects, and Agents share context—not one giant chat.',
                  '一个让内容、项目与 Agent 共享上下文，而不是堆进同一条聊天的本地优先工作中枢。',
                )}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#626872] md:text-lg">
                {t(
                  'What began as a Feishu assistant evolved into a macOS desktop system for managing knowledge, creative work, investments, persistent Agent tasks, and automations without surrendering data ownership.',
                  '它从飞书助手演进为 macOS 桌面系统，用来管理知识、创作、投资、持续 Agent 任务与自动化，同时保留对数据和项目边界的控制。',
                )}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <MediaFrame
                item={media.projects}
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
                  label: t('Role', '角色'),
                  value: t('Product designer & builder', '产品设计与全栈实现'),
                },
                {
                  label: t('Platform', '平台'),
                  value: t('macOS desktop · Feishu entry', 'macOS 桌面端 · 飞书入口'),
                },
                {
                  label: t('Core stack', '核心技术'),
                  value: 'Tauri · React · SQLite',
                },
                {
                  label: t('AI runtime', 'AI 运行时'),
                  value: 'GitHub Copilot · Ollama · LM Studio',
                },
              ]}
            />
          </Reveal>
        </Chapter>

        <Chapter id="challenge" tone="paper">
          <SectionHeading
            index="01"
            eyebrow={t('Product challenge', '产品挑战')}
            title={t(
              'The hard part was continuity, not another place to store things.',
              '真正的问题不是再做一个存储工具，而是让工作保持连续。',
            )}
            body={t(
              'A personal system spans multiple domains and tools. The design challenge was to preserve each domain’s structure while letting context move into AI work without repeated explanation.',
              '个人系统横跨多个领域与工具。设计挑战是在保留各领域结构的同时，让上下文自然进入 AI 工作，而不必反复解释。',
            )}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {challengeCards.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.04}>
                <EditorialCard className="h-full">
                  <NumberBadge>{item.number}</NumberBadge>
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
            <StatementBand label={t('Product thesis', '产品命题')}>
              {t(
                'AI should be a capability inside the workspace. The object being worked on—not the chat window—should provide the context.',
                'AI 应该是工作空间里的能力。提供上下文的应该是正在处理的对象，而不是聊天窗口。',
              )}
            </StatementBand>
          </Reveal>
        </Chapter>

        <Chapter id="model" tone="surface">
          <SectionHeading
            index="02"
            eyebrow={t('Product model', '产品模型')}
            title={t(
              'Independent modules, connected by one context spine.',
              '模块保持独立，由同一条上下文主线连接。',
            )}
            body={t(
              'Instead of forcing every workflow into one universal surface, the system keeps domain tools focused and uses shared project, content, and task identities to connect them.',
              '系统没有把所有工作强塞进一个万能界面，而是让领域工具保持专注，再通过共享的项目、内容和任务身份建立连接。',
            )}
          />
          <div className="mt-10">
            <MediaFrame
              item={media.dashboard}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-3">
            {modules.map((item) => (
              <div key={item.eyebrow.en} className="bg-white p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                  {pick(item.eyebrow)}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em]">
                  {pick(item.title)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#626872]">
                  {pick(item.body)}
                </p>
              </div>
            ))}
          </div>
        </Chapter>

        <Chapter id="context" tone="soft">
          <SectionHeading
            index="03"
            eyebrow={t('Context-aware workflow', '上下文工作流')}
            title={t(
              'The work object opens the Agent—not the other way around.',
              '由工作对象唤起 Agent，而不是先打开一条空白聊天。',
            )}
            body={t(
              'Projects keep a goal, status, next action, source path, and ownership boundary. Entering Agent from that project creates a durable task channel with the relevant context already attached.',
              '项目保存目标、状态、下一步、源码路径和责任边界。从项目进入 Agent 时，会创建一个已经绑定相关上下文的持续任务频道。',
            )}
          />
          <div className="mt-10 grid gap-6">
            <MediaFrame
              item={media.projects}
              lang={lang}
              onOpen={setLightboxItem}
            />
            <MediaFrame
              item={media.agent}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <Reveal className="mt-8">
            <div className="grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-4">
              {[
                {
                  label: t('Start', '起点'),
                  value: t('Project or content object', '项目或内容对象'),
                },
                {
                  label: t('Context', '上下文'),
                  value: t('Snapshot attached once', '一次绑定背景快照'),
                },
                {
                  label: t('Execution', '执行'),
                  value: t('Copilot or local model', 'Copilot 或本地模型'),
                },
                {
                  label: t('Continuity', '连续性'),
                  value: t('Persistent task history', '持续保存任务历史'),
                },
              ].map((item) => (
                <div key={item.label} className="bg-white p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8e949e]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Chapter>

        <Chapter id="automation" tone="surface">
          <SectionHeading
            index="04"
            eyebrow={t('Durable automation', '持久自动化')}
            title={t(
              'Recurring work should continue after the window closes.',
              '重复工作不应该随着窗口关闭而停止。',
            )}
            body={t(
              'The macOS app registers a background worker that checks due work every fifteen minutes. Each automation makes its task, model, cadence, destination, and limits explicit.',
              'macOS App 会注册后台 Worker，每十五分钟检查到期任务。每个自动化都明确任务、模型、频率、结果去向与执行上限。',
            )}
          />
          <div className="mt-10">
            <MediaFrame
              item={media.automation}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {automationTemplates.map((item, index) => (
              <Reveal key={item.title.en} delay={index * 0.035}>
                <EditorialCard className="h-full">
                  <NumberBadge>0{index + 1}</NumberBadge>
                  <h3 className="mt-5 text-lg font-semibold">{pick(item.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#626872]">
                    {pick(item.body)}
                  </p>
                </EditorialCard>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter id="architecture" tone="dark">
          <SectionHeading
            index="05"
            eyebrow={t('System architecture', '系统架构')}
            title={t(
              'Local data by default. Cloud intelligence by choice.',
              '默认本地保存，按需使用云端智能。',
            )}
            body={t(
              'The desktop shell uses Tauri and React, persists structured work in SQLite, and exposes native file access. Agent tasks can use GitHub Copilot or local Ollama and LM Studio models; Feishu remains a second entry into the broader assistant platform.',
              '桌面壳使用 Tauri 与 React，以 SQLite 保存结构化工作并提供原生文件访问。Agent 任务可以使用 GitHub Copilot，也可以切换到 Ollama 与 LM Studio；飞书则继续作为更广泛助手平台的第二入口。',
            )}
            dark
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-white/12 bg-white/12 md:grid-cols-4">
            {[
              {
                code: '01',
                title: t('Entry points', '入口'),
                body: t('Desktop workspace · Feishu', '桌面工作台 · 飞书'),
              },
              {
                code: '02',
                title: t('Product modules', '产品模块'),
                body: t('Projects · knowledge · creation · investment', '项目 · 知识 · 创作 · 投资'),
              },
              {
                code: '03',
                title: t('Agent runtime', 'Agent 运行时'),
                body: t('Copilot SDK · Ollama · LM Studio', 'Copilot SDK · Ollama · LM Studio'),
              },
              {
                code: '04',
                title: t('Local foundation', '本地底座'),
                body: t('Tauri · SQLite · LaunchAgent', 'Tauri · SQLite · LaunchAgent'),
              },
            ].map((item) => (
              <div key={item.code} className="bg-[#171a21] p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#70a9f5]">
                  {item.code}
                </p>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.body}</p>
              </div>
            ))}
          </div>
        </Chapter>

        <Chapter id="review" tone="paper">
          <SectionHeading
            index="06"
            eyebrow={t('Product review', '产品复盘')}
            title={t(
              'The foundation is coherent. The next iteration should make that coherence easier to see.',
              '系统底层已经连通，下一步要让这种连通更容易被用户看见。',
            )}
            body={t(
              'The current prototype is strongest when moving from a concrete object into Agent work. The largest opportunity is helping the home screen explain active work, inherited context, and background activity at a glance.',
              '当前原型最强的体验，是从具体对象自然进入 Agent 工作。最大的机会，是让首页能够一眼解释当前工作、继承的上下文与后台活动。',
            )}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviewItems.map((item, index) => (
              <Reveal key={item.label.en} delay={index * 0.04}>
                <EditorialCard className="h-full">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                    {pick(item.label)}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em]">
                    {pick(item.title)}
                  </h3>
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
            eyebrow={t('Current outcome', '当前成果')}
            title={t(
              'A working personal operating layer—not a collection of disconnected AI features.',
              '一套正在运行的个人工作层，而不是彼此割裂的 AI 功能集合。',
            )}
            body={t(
              'The prototype now provides one local-first shell for structured work, context-aware Agent execution, recoverable data, and durable automation. Its next milestone is proving that continuity through daily use.',
              '当前原型已经用一个本地优先的桌面壳连接结构化工作、上下文 Agent、可恢复数据与持久自动化。下一阶段，是通过日常使用继续验证这种连续性。',
            )}
            dark
          />
          <Reveal className="mt-10">
            <StatementBand label={t('Design principle', '设计原则')}>
              {t(
                'Keep domains independent. Make context portable. Let automation continue—but keep ownership visible.',
                '让领域保持独立，让上下文可以流动，让自动化持续运行，同时让责任始终可见。',
              )}
            </StatementBand>
          </Reveal>
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

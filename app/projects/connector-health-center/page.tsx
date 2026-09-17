'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
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
const screenshotPath = (file: string) => `${basePath}/images/connector-health-center/${file}`;

type LocalizedText = { en: string; zh: string };
type MediaItem = {
  src: string;
  alt: LocalizedText;
  label: LocalizedText;
  caption: LocalizedText;
};

const versions = [
  {
    number: '01',
    date: '2026-08-04',
    title: { en: 'Health dashboard', zh: '健康仪表盘' },
    stage: { en: 'Foundation', zh: '基础模型' },
    image: 'v1-health-dashboard.png',
    changed: {
      en: 'Created the first health dashboard with status cards, notifications, Gallery, and Your Connections.',
      zh: '建立第一版健康仪表盘，将状态卡、通知、Gallery 和 Your Connections 放进同一体验。',
    },
    why: {
      en: 'Establish the baseline information model for monitoring health and moving into setup.',
      zh: '先建立监控连接健康并进入设置流程的基础信息模型。',
    },
  },
  {
    number: '02',
    date: '2026-08-18',
    title: { en: 'Notification triage', zh: '通知分诊' },
    stage: { en: 'Actionable diagnosis', zh: '可行动诊断' },
    image: 'v3-health-overview.png',
    changed: {
      en: 'Combined the responsibility split from V2 with a denser triage surface and remediation-focused details.',
      zh: '把 V2 的职责拆分与更紧凑的分诊界面、面向修复的详情结构整合起来。',
    },
    why: {
      en: 'Help administrators understand a signal quickly, while keeping corrective configuration in Your Connections.',
      zh: '帮助管理员快速理解信号，同时把真正的配置修复保留在 Your Connections。',
    },
  },
  {
    number: '03',
    date: '2026-08-25',
    title: { en: 'Operational system', zh: '运营系统' },
    stage: { en: 'Current · Interactive', zh: '当前版本 · 可交互' },
    image: 'current-overview.png',
    changed: {
      en: 'Folded useful War Room concepts into the dashboard: adoption signals, limited-rollout status, diagnostic history, and an AI-assisted repair POC.',
      zh: '把 War Room 中有价值的业务信息融入 Dashboard：采用信号、有限发布状态、诊断历史和 AI 辅助修复概念验证。',
    },
    why: {
      en: 'Keep the IA stable while expanding the operational value of the same interactive prototype.',
      zh: '保持信息架构稳定，同时在同一交互原型中扩展实际运营价值。',
    },
  },
] satisfies Array<{
  number: string;
  date: string;
  title: LocalizedText;
  stage: LocalizedText;
  image: string;
  changed: LocalizedText;
  why: LocalizedText;
}>;

const validationChanges = [
  {
    evidence: {
      en: 'False positives made the whole health view feel unreliable.',
      zh: '误报会让整个健康视图失去可信度。',
    },
    decision: {
      en: 'Treat telemetry accuracy and freshness as experience requirements.',
      zh: '把遥测准确性和数据新鲜度视为体验要求。',
    },
  },
  {
    evidence: {
      en: '“Needs attention” and open notifications did not tell one coherent story.',
      zh: '“需要关注”和未处理通知没有形成一致的故事。',
    },
    decision: {
      en: 'Define metric hierarchy and count relationships before adding more cards.',
      zh: '在增加更多卡片前，先定义指标层级和计数关系。',
    },
  },
  {
    evidence: {
      en: 'An error description alone did not help administrators recover.',
      zh: '单独的错误描述无法帮助管理员完成恢复。',
    },
    decision: {
      en: 'Make impact, sync context, next steps, and repair destination part of the notification.',
      zh: '让影响、同步上下文、下一步和修复目的地成为通知本身的一部分。',
    },
  },
] satisfies Array<{ evidence: LocalizedText; decision: LocalizedText }>;

function ScreenshotFrame({
  item,
  lang,
  onOpen,
  priority = false,
  className = '',
}: {
  item: MediaItem;
  lang: Lang;
  onOpen: (item: MediaItem) => void;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-white shadow-[0_18px_50px_rgba(17,19,24,0.07)] ${className}`}>
      <div className="flex items-center justify-between gap-4 border-b border-[#dfe2e7] px-4 py-3 md:px-5">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8e949e]">
          {item.label[lang]}
        </span>
        <span className="text-xs text-[#8e949e]">{lang === 'zh' ? '点击放大' : 'Click to expand'}</span>
      </div>
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="group block w-full overflow-hidden bg-[#eef1f5] text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1267d6]"
        aria-label={lang === 'zh' ? `放大查看：${item.alt.zh}` : `Expand image: ${item.alt.en}`}
      >
        <img
          src={item.src}
          alt={item.alt[lang]}
          width={2160}
          height={1440}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
        />
      </button>
      <figcaption className="border-t border-[#dfe2e7] px-4 py-3 text-sm leading-6 text-[#626872] md:px-5">
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
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!item) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.alt[lang]}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-3 backdrop-blur-sm md:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            className="relative max-h-[95vh] max-w-[96vw]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-xl text-white backdrop-blur transition hover:bg-black"
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
            <div className="mx-auto mt-3 max-w-4xl text-center text-sm text-white/70">{item.caption[lang]}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function VersionExplorer({
  lang,
  onOpen,
}: {
  lang: Lang;
  onOpen: (item: MediaItem) => void;
}) {
  const [selectedVersion, setSelectedVersion] = useState(2);
  const selected = versions[selectedVersion];
  const media: MediaItem = {
    src: screenshotPath(selected.image),
    alt: {
      en: `${selected.title.en} design iteration`,
      zh: `${selected.title.zh}设计迭代`,
    },
    label: selected.stage,
    caption: selected.changed,
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
      <div className="space-y-2" role="group" aria-label={lang === 'zh' ? 'Health Center 版本选择' : 'Health Center version selector'}>
        {versions.map((version, index) => {
          const selectedItem = index === selectedVersion;
          return (
            <button
              key={version.number}
              type="button"
              aria-pressed={selectedItem}
              onClick={() => setSelectedVersion(index)}
              className={`w-full rounded-[20px] border p-4 text-left transition ${
                selectedItem
                  ? 'border-[#1267d6]/35 bg-white shadow-[0_12px_30px_rgba(18,103,214,0.08)]'
                  : 'border-[#dfe2e7] bg-white/55 hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <NumberBadge>{version.number}</NumberBadge>
                <div className="min-w-0">
                  <div className={`font-semibold ${selectedItem ? 'text-[#111318]' : 'text-[#626872]'}`}>
                    {version.title[lang]}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8e949e]">
                    {version.date} · {version.stage[lang]}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div>
        <ScreenshotFrame item={media} lang={lang} onOpen={onOpen} />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <EditorialCard>
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
              {lang === 'zh' ? '我改变了什么' : 'What I changed'}
            </div>
            <p className="mt-4 text-base leading-7 text-[#111318]">{selected.changed[lang]}</p>
          </EditorialCard>
          <EditorialCard className="bg-[#edf4ff] shadow-none">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
              {lang === 'zh' ? '为什么这样改' : 'Why this decision'}
            </div>
            <p className="mt-4 text-base leading-7 text-[#111318]">{selected.why[lang]}</p>
          </EditorialCard>
        </div>
      </div>
    </div>
  );
}

function LiveDemo({ lang }: { lang: Lang }) {
  const [revision, setRevision] = useState(0);
  const demoUrl = `${basePath}/health-center-live-demo/index.html`;

  return (
    <Reveal>
      <div className="overflow-hidden rounded-[28px] border border-white/14 bg-[#111318] shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center md:px-6">
          <div>
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#70a9f5]">
              {lang === 'zh' ? '可交互代码原型' : 'Interactive coded prototype'}
            </div>
            <div className="mt-1 text-sm text-white/60">
              {lang === 'zh'
                ? 'Overview → 通知详情 → Your Connections → Cowork 修复'
                : 'Overview → notification detail → Your Connections → Cowork repair'}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setRevision((value) => value + 1)}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/75 transition hover:border-white/35 hover:text-white"
            >
              {lang === 'zh' ? '重置 Demo' : 'Reset demo'}
            </button>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1267d6] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2b78dc]"
            >
              {lang === 'zh' ? '新窗口打开 ↗' : 'Open full demo ↗'}
            </a>
          </div>
        </div>
        <iframe
          key={revision}
          src={`${demoUrl}?revision=${revision}`}
          title={lang === 'zh' ? 'Health Center 可交互设计原型' : 'Health Center interactive design prototype'}
          loading="lazy"
          className="h-[660px] w-full border-0 bg-white md:h-[760px] lg:h-[820px]"
          allow="clipboard-write"
        />
      </div>
    </Reveal>
  );
}

export default function ConnectorHealthCenterPage() {
  const { lang, t } = useLanguage();
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  const currentOverview: MediaItem = {
    src: screenshotPath('current-overview.png'),
    alt: {
      en: 'Current Health Center overview with connection status, adoption, and notifications',
      zh: '当前 Health Center 总览，包含连接状态、采用情况和通知',
    },
    label: { en: 'Current design · Overview', zh: '当前设计 · Overview' },
    caption: {
      en: 'One operating surface connects connection status, adoption signals, and actionable notifications.',
      zh: '一个运营入口将连接状态、采用信号和可行动通知连接起来。',
    },
  };

  const notificationDetail: MediaItem = {
    src: screenshotPath('notification-detail-panel.png'),
    alt: {
      en: 'Notification diagnostic panel with sync context and next steps',
      zh: '包含同步上下文和下一步的通知诊断面板',
    },
    label: { en: 'Current design · Diagnosis', zh: '当前设计 · 诊断' },
    caption: {
      en: 'The latest panel explains what happened, sync context, next steps, recent activity, and the error log.',
      zh: '最新版面板解释发生了什么、同步上下文、下一步、近期活动和错误日志。',
    },
  };

  const adoptionDetail: MediaItem = {
    src: screenshotPath('adoption-detail-panel.png'),
    alt: {
      en: 'Detailed adoption panel with summary and active-user trend',
      zh: '包含摘要和活跃用户趋势的详细采用面板',
    },
    label: { en: 'Current design · Adoption drilldown', zh: '当前设计 · 采用情况详情' },
    caption: {
      en: 'Admin-facing metrics stay understandable at a glance, then reveal trend and scope on demand.',
      zh: '面向管理员的指标先保持易读，再按需展开趋势和范围。',
    },
  };

  const handoffDetail: MediaItem = {
    src: screenshotPath('repair-handoff-your-connections.png'),
    alt: {
      en: 'Failed connection detail in Your Connections with fix actions',
      zh: 'Your Connections 中带修复操作的失败连接详情',
    },
    label: { en: 'Design output · Repair handoff', zh: '设计产出 · 修复交接' },
    caption: {
      en: 'The notification carries the administrator into the failed connection detail without losing context.',
      zh: '通知将管理员带入失败连接详情，同时保留问题上下文。',
    },
  };

  const repairFlow: MediaItem[] = [
    {
      src: screenshotPath('repair-handoff-your-connections.png'),
      alt: {
        en: 'Failed connection detail with Fix now and Fix with Cowork actions',
        zh: '包含立即修复和使用 Cowork 修复的失败连接详情',
      },
      label: { en: '01 · Choose a repair path', zh: '01 · 选择修复路径' },
      caption: {
        en: 'The failed connection is the source of truth; diagnosis arrives with it.',
        zh: '失败连接是修复任务的事实来源，诊断上下文随之到达。',
      },
    },
    {
      src: screenshotPath('cowork-repair-poc.png'),
      alt: {
        en: 'Cowork proposes a credential repair action for administrator approval',
        zh: 'Cowork 提出凭据修复操作并等待管理员批准',
      },
      label: { en: '02 · Review before execution', zh: '02 · 执行前审核' },
      caption: {
        en: 'The agent verifies the connection, explains the action, and requires explicit approval.',
        zh: 'Agent 验证连接、解释操作，并要求管理员明确批准。',
      },
    },
    {
      src: screenshotPath('cowork-repair-approved.png'),
      alt: {
        en: 'Cowork confirms the repaired connection after approval',
        zh: 'Cowork 在批准后确认连接修复成功',
      },
      label: { en: '03 · Confirm recovery', zh: '03 · 确认恢复' },
      caption: {
        en: 'The flow ends with a verified outcome, not a generic success message.',
        zh: '流程以经过验证的恢复结果结束，而不是泛化的成功提示。',
      },
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-[#111318]">
      <ReadingProgress label={t('Case study reading progress', '案例阅读进度')} />
      <Navigation />

      <main>
        <Chapter tone="surface" className="pt-36 md:pt-44 lg:pt-48">
          <Link
            href="/projects"
            className="mb-16 inline-flex items-center gap-2 text-sm font-medium text-[#626872] transition hover:text-[#1267d6]"
          >
            <span aria-hidden="true">←</span>
            {t('All projects', '全部项目')}
          </Link>

          <Reveal>
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1267d6]">
              {t('Product design · AI-native coded prototype · Current in review', '产品设计 · AI 原生代码原型 · 当前评审中')}
            </div>
            <h1 className={`mt-8 max-w-5xl font-[720] leading-[0.94] tracking-[-0.065em] text-[#111318] ${lang === 'zh' ? 'text-[clamp(2.8rem,6.5vw,5.7rem)]' : 'text-[clamp(3.35rem,7.2vw,6.5rem)]'}`}>
              {t(
                'Designing the path from connector health signal to recovery.',
                '设计一条从连接健康信号到完成修复的路径。'
              )}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#626872] md:text-[21px]">
              {t(
                'I turned passive notifications into an operational experience that helps administrators see risk, diagnose failures, and move into repair without rebuilding context.',
                '我把被动通知重构为一套运营体验，让管理员能够发现风险、诊断故障，并在无需重建上下文的情况下进入修复。'
              )}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <MetaGrid
              items={[
                { label: t('Role', '角色'), value: t('Product designer', '产品设计师') },
                { label: t('Owned', '负责内容'), value: t('Framing · IA · interaction · prototyping', '问题定义 · 信息架构 · 交互 · 原型') },
                { label: t('Designed', '设计产出'), value: t('Overview · diagnostics · repair handoff', '总览 · 诊断 · 修复交接') },
                { label: t('Method', '方法'), value: t('Coded exploration + admin validation', '代码化探索 + 管理员验证') },
              ]}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.24fr_0.76fr]">
            <ScreenshotFrame item={currentOverview} lang={lang} onOpen={setLightboxItem} priority />
            <div className="grid gap-5">
              <ScreenshotFrame item={notificationDetail} lang={lang} onOpen={setLightboxItem} />
              <ScreenshotFrame item={adoptionDetail} lang={lang} onOpen={setLightboxItem} />
            </div>
          </div>

          <Reveal className="mt-10">
            <div className="grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-4">
              {[
                {
                  label: t('I framed', '我定义'),
                  value: t('Notification → health-to-recovery loop', '从通知功能到健康—修复闭环'),
                },
                {
                  label: t('I designed', '我设计'),
                  value: t('Overview, triage, diagnostics, handoff', '总览、分诊、诊断与交接'),
                },
                {
                  label: t('I prototyped', '我原型验证'),
                  value: t('Interactive code branches + AI-assisted repair', '可交互代码分支 + AI 辅助修复'),
                },
                {
                  label: t('I prioritized', '我推动优先级'),
                  value: t('Accuracy and actionability before breadth', '先准确、可行动，再扩展功能'),
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#f7f8fa] p-5">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1267d6]">{item.label}</div>
                  <div className="mt-4 text-sm font-semibold leading-6 text-[#111318]">{item.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Chapter>

        <Chapter tone="paper">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
            <div>
              <SectionHeading
                index="01"
                eyebrow={t('The operational gap', '运营断点')}
                title={t(
                  'The brief was not “design a dashboard.”',
                  '任务并不是“设计一个仪表盘”。'
                )}
                body={t(
                  'Administrators were manually checking large connection estates and often learned about failures after users were affected.',
                  '管理员需要人工检查大量连接，并且往往在用户受到影响后才知道故障发生。'
                )}
              />
              <Reveal className="mt-8">
                <StatementBand label={t('My reframe', '我的问题重定义')}>
                  {t(
                    'A health experience must help an administrator move from signal to decision—not simply deliver another notification.',
                    '健康体验必须帮助管理员从信号走向决策，而不只是再发送一条通知。'
                  )}
                </StatementBand>
              </Reveal>
            </div>
            <ScreenshotFrame
              item={currentOverview}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
        </Chapter>

        <Chapter tone="soft">
          <SectionHeading
            index="02"
            eyebrow={t('Three decision-led milestones', '三个决策里程碑')}
            title={t(
              'I kept only the iterations that changed the product model.',
              '我只保留真正改变产品模型的迭代。'
            )}
            body={t(
              'Smaller business additions stayed inside the dashboard; these three milestones changed how administrators understand and act on health.',
              '较小的业务扩展被吸收到 Dashboard 中；这三个里程碑真正改变了管理员理解并处理健康问题的方式。'
            )}
          />
          <div className="mt-12">
            <VersionExplorer lang={lang} onOpen={setLightboxItem} />
          </div>
        </Chapter>

        <Chapter tone="dark">
          <SectionHeading
            index="03"
            eyebrow={t('AI-native design process', 'AI 原生设计过程')}
            title={t(
              'The prototype became the design artifact—not a handoff after the design.',
              '原型本身就是设计产物，而不是设计完成后的交接物。'
            )}
            body={t(
              'I used structured briefs, reusable product components, and AI-assisted code generation to keep every meaningful hypothesis executable. That let reviews focus on behavior, states, and operational consequences—not just static frames.',
              '我用结构化 Brief、可复用产品组件和 AI 辅助代码生成，让每个有意义的假设都保持可运行。评审因此能够聚焦行为、状态和运营后果，而不只是静态画面。'
            )}
            dark
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: t('Evidence became a brief', '证据变成 Brief'),
                body: t(
                  'Operational needs and product constraints were translated into explicit acceptance checks.',
                  '运营需求与产品约束被转化为明确的验收条件。'
                ),
              },
              {
                number: '02',
                title: t('A branch became a hypothesis', '一个分支就是一个假设'),
                body: t(
                  'I could fork the model, change the information architecture, and compare working states without redrawing the product shell.',
                  '我可以分叉方案、改变信息架构并比较真实状态，而不必重复绘制产品外壳。'
                ),
              },
              {
                number: '03',
                title: t('Feedback changed behavior', '反馈直接改变行为'),
                body: t(
                  'Filters, panels, handoffs, and repair approval were reviewed as interactions and revised in code.',
                  '筛选、面板、交接和修复批准都以真实交互接受评审，并直接在代码中迭代。'
                ),
              },
            ].map((item) => (
              <EditorialCard key={item.number} dark className="h-full">
                <NumberBadge dark>{item.number}</NumberBadge>
                <h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.body}</p>
              </EditorialCard>
            ))}
          </div>

          <div className="mt-12">
            <LiveDemo lang={lang} />
          </div>
          <p className="mt-5 text-sm leading-7 text-white/48">
            {t(
              'Try it: open an error notification, inspect the diagnostic context, continue to Your Connections, then choose Fix with Cowork and approve the proposed action.',
              '可以直接操作：打开错误通知、查看诊断上下文、进入 Your Connections，再选择 Fix with Cowork 并批准建议操作。'
            )}
          </p>
        </Chapter>

        <Chapter tone="surface">
          <SectionHeading
            index="04"
            eyebrow={t('Decision · Operational home', '决策 · 运营入口')}
            title={t(
              'I moved notifications into Overview instead of building another inbox.',
              '我把通知放进 Overview，而不是再做一个独立收件箱。'
            )}
            body={t(
              'Status, adoption, and notifications are different signals, but the administrator needs to judge them together before choosing an action.',
              '状态、采用情况和通知是不同信号，但管理员需要把它们放在一起判断，再决定下一步。'
            )}
          />
          <div className="mt-10">
            <ScreenshotFrame item={currentOverview} lang={lang} onOpen={setLightboxItem} />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                number: '01',
                title: t('Connection status', '连接状态'),
                body: t('Shows what is healthy, incomplete, failed, or constrained.', '展示健康、未完成、失败或受限的连接。'),
              },
              {
                number: '02',
                title: t('Detailed adoption', '详细采用情况'),
                body: t('Turns product usage into administrator-facing operating context.', '把产品使用情况转化为管理员可理解的运营上下文。'),
              },
              {
                number: '03',
                title: t('Notifications', '通知'),
                body: t('Connects the signal to its severity, source, context, and next action.', '把信号连接到严重程度、来源、上下文和下一步。'),
              },
            ].map((item) => (
              <EditorialCard key={item.number} className="bg-[#f7f8fa] shadow-none">
                <NumberBadge>{item.number}</NumberBadge>
                <h3 className="mt-6 text-xl font-semibold text-[#111318]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#626872]">{item.body}</p>
              </EditorialCard>
            ))}
          </div>
        </Chapter>

        <Chapter tone="paper">
          <SectionHeading
            index="05"
            eyebrow={t('Decision · Actionable diagnosis', '决策 · 可行动诊断')}
            title={t(
              'A notification became a diagnostic object, not a message.',
              '通知变成了诊断对象，而不只是一条消息。'
            )}
            body={t(
              'I reorganized the panel around the questions an administrator asks during an incident: what happened, what was affected, what changed, and what should I do next?',
              '我按照管理员处理故障时真正会问的问题重组面板：发生了什么、影响了什么、哪里发生变化、下一步该做什么？'
            )}
          />
          <div className="mt-10">
            <ScreenshotFrame item={notificationDetail} lang={lang} onOpen={setLightboxItem} />
          </div>
          <div className="mt-5 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-4">
            {[
              t('What happened?', '发生了什么？'),
              t('Sync context', '同步上下文'),
              t('Next steps', '下一步'),
              t('Recent activity + error log', '近期活动 + 错误日志'),
            ].map((label, index) => (
              <div key={label} className="bg-white p-5">
                <div className="font-mono text-[10px] text-[#1267d6]">0{index + 1}</div>
                <div className="mt-4 font-semibold text-[#111318]">{label}</div>
              </div>
            ))}
          </div>
        </Chapter>

        <Chapter tone="surface">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <SectionHeading
              index="06"
              eyebrow={t('Decision · Responsibility split', '决策 · 职责拆分')}
              title={t(
                'Overview diagnoses. Your Connections repairs.',
                'Overview 负责诊断，Your Connections 负责修复。'
              )}
              body={t(
                'Putting every corrective control into Overview would turn it into another complex admin surface. I kept the diagnosis close to the signal, then handed off to the connection that owns the configuration.',
                '如果把所有修复控件都塞进 Overview，它会变成另一个复杂后台。我让诊断靠近信号，再把任务交给真正拥有配置的连接详情。'
              )}
            />
            <ScreenshotFrame item={handoffDetail} lang={lang} onOpen={setLightboxItem} />
          </div>
          <Reveal className="mt-10">
            <div className="grid gap-0 overflow-hidden rounded-[24px] border border-[#dfe2e7] md:grid-cols-3">
              {[
                {
                  label: t('Overview', 'Overview'),
                  value: t('See and prioritize the signal', '看见并判断信号优先级'),
                },
                {
                  label: t('Diagnostic panel', '诊断面板'),
                  value: t('Understand impact and next step', '理解影响和下一步'),
                },
                {
                  label: t('Connection detail', '连接详情'),
                  value: t('Own configuration and repair', '承载配置和修复'),
                },
              ].map((step, index) => (
                <div key={step.label} className="relative border-b border-[#dfe2e7] bg-[#f7f8fa] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                  {index < 2 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-[#171a21] text-xs text-white md:grid" aria-hidden="true">
                      →
                    </span>
                  )}
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8e949e]">{step.label}</div>
                  <div className="mt-6 text-lg font-semibold text-[#111318]">{step.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Chapter>

        <Chapter tone="dark">
          <SectionHeading
            index="07"
            eyebrow={t('POC · Closing the loop', '概念验证 · 闭合链路')}
            title={t(
              'I explored an AI-assisted repair path with human approval.',
              '我探索了一个带人工批准的 AI 辅助修复路径。'
            )}
            body={t(
              'The agent does not silently change production configuration. It verifies context, proposes a specific action, waits for approval, and confirms the recovered state.',
              'Agent 不会静默修改生产配置。它先验证上下文、提出具体操作、等待批准，再确认恢复状态。'
            )}
            dark
          />
          <div className="mt-12 grid gap-5">
            {repairFlow.map((item, index) => (
              <Reveal key={item.src} delay={index * 0.05}>
                <ScreenshotFrame item={item} lang={lang} onOpen={setLightboxItem} />
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter tone="soft">
          <SectionHeading
            index="08"
            eyebrow={t('Validation changed the design', '验证改变了设计')}
            title={t(
              'Customer feedback changed what I prioritized—not just what I polished.',
              '客户反馈改变了我优先解决什么，而不只是优化哪些细节。'
            )}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {validationChanges.map((item, index) => (
              <EditorialCard key={item.evidence.en} className="h-full">
                <NumberBadge>0{index + 1}</NumberBadge>
                <div className="mt-7 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8e949e]">
                  {t('What I heard', '我听到的')}
                </div>
                <p className="mt-3 text-base font-medium leading-7 text-[#111318]">{item.evidence[lang]}</p>
                <div className="my-6 h-px bg-[#dfe2e7]" />
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1267d6]">
                  {t('What I changed', '我改变的方向')}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#626872]">{item.decision[lang]}</p>
              </EditorialCard>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                label: t('Delivered foundation', '已交付基础'),
                items: [
                  t('Proactive notification foundation', '主动通知基础'),
                  t('Health and connection-status model', '健康与连接状态模型'),
                  t('Notification diagnostic pattern', '通知诊断模式'),
                ],
              },
              {
                label: t('Validated direction', '已验证方向'),
                items: [
                  t('Overview as the operating surface', 'Overview 作为运营入口'),
                  t('Signal → diagnosis → repair handoff', '信号 → 诊断 → 修复交接'),
                  t('Accuracy and actionability first', '准确性与可行动优先'),
                ],
              },
              {
                label: t('Still open', '仍待验证'),
                items: [
                  t('Final customer-facing metrics', '最终客户指标'),
                  t('Telemetry coverage and false positives', '遥测覆盖与误报'),
                  t('Routing and recipient model', '路由与接收者模型'),
                ],
              },
            ].map((group, index) => (
              <EditorialCard key={group.label} className={index === 1 ? 'border-[#b9d1f3] bg-[#edf4ff]' : ''}>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1267d6]">{group.label}</div>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#626872]">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#1267d6]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </EditorialCard>
            ))}
          </div>
        </Chapter>

        <section className="relative overflow-hidden border-t border-black/10 bg-[#171a21] px-6 py-28 text-white md:py-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,103,214,0.16),transparent_52%)]" />
          <Reveal className="relative mx-auto max-w-[1000px] text-center">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#70a9f5]">
              {t('Reflection', '反思')}
            </div>
            <blockquote className="mt-8 text-[clamp(2.25rem,5vw,4.3rem)] font-[680] leading-[1.03] tracking-[-0.052em]">
              {t(
                'The design was not the dashboard. It was the decision path from an uncertain signal to a verified recovery.',
                '真正的设计不是仪表盘，而是一条从不确定信号走向已验证恢复结果的决策路径。'
              )}
            </blockquote>
          </Reveal>
        </section>

        <footer className="border-t border-white/10 bg-[#171a21] px-6 py-10 text-white">
          <div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white">
              <span aria-hidden="true">←</span>
              {t('Back to all projects', '返回全部项目')}
            </Link>
            <Link
              href="/projects/unified-connector-experience"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#70a9f5] transition hover:text-white"
            >
              {t('Next: Unified connector experience', '下一个：统一连接器体验')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </footer>
      </main>

      <Lightbox item={lightboxItem} lang={lang} onClose={() => setLightboxItem(null)} />
    </div>
  );
}

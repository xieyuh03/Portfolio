'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, type ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import { useLanguage, type Lang } from '@/lib/LanguageContext';

type LocalizedText = { en: string; zh: string };

const operationalGaps = [
  {
    number: '01',
    title: { en: 'Manual monitoring', zh: '依赖人工巡检' },
    body: {
      en: 'Administrators had to piece together connector status across separate surfaces instead of starting from one reliable operational view.',
      zh: '管理员需要在多个分散界面中拼接连接状态，而不是从一个可信的运维视图开始。',
    },
  },
  {
    number: '02',
    title: { en: 'Late awareness', zh: '问题发现太晚' },
    body: {
      en: 'A failure often became visible only after it affected downstream experiences, turning monitoring into reactive investigation.',
      zh: '故障往往在影响下游体验后才被发现，健康监控因此变成被动排查。',
    },
  },
  {
    number: '03',
    title: { en: 'Broken handoff', zh: '诊断与修复脱节' },
    body: {
      en: 'An alert could describe an event, but it rarely preserved enough context to explain impact, probable cause, and the next action.',
      zh: '告警可以描述事件，却很少保留足够上下文来说明影响、可能原因和下一步行动。',
    },
  },
] satisfies Array<{ number: string; title: LocalizedText; body: LocalizedText }>;

const evolution = [
  {
    step: '01',
    title: { en: 'Email notification', zh: '邮件告警' },
    label: { en: 'Surface the event', zh: '让事件被看见' },
    body: {
      en: 'Start with proactive alerts for a small set of high-value operational failures and subscription controls.',
      zh: '从少量高价值运营故障的主动提醒与订阅控制开始。',
    },
  },
  {
    step: '02',
    title: { en: 'Notification system', zh: '通知系统' },
    label: { en: 'Organize the signals', zh: '组织健康信号' },
    body: {
      en: 'Add history, lifecycle events, in-product visibility, and a consistent model for managing notifications.',
      zh: '加入历史记录、生命周期事件、产品内可见性和一致的通知管理模型。',
    },
  },
  {
    step: '03',
    title: { en: 'Health center', zh: '健康中心' },
    label: { en: 'Close the action loop', zh: '闭合行动链路' },
    body: {
      en: 'Connect monitoring, alerting, diagnosis, and remediation so an administrator can move from signal to resolution.',
      zh: '连接监控、告警、诊断与修复，让管理员能够从信号直接走向问题解决。',
    },
  },
] satisfies Array<{ step: string; title: LocalizedText; label: LocalizedText; body: LocalizedText }>;

const evidence = [
  {
    label: { en: 'Operational evidence', zh: '运营证据' },
    title: { en: 'The work was repetitive and reactive', zh: '工作重复且被动' },
    body: {
      en: 'Administrators described repeatedly checking large connector estates and manually reconstructing what changed.',
      zh: '管理员需要反复检查大量连接，并手动还原系统中发生了什么变化。',
    },
  },
  {
    label: { en: 'Product evidence', zh: '产品证据' },
    title: { en: 'The roadmap was already outgrowing email', zh: '产品范围早已超出邮件' },
    body: {
      en: 'History, health metrics, in-product signals, and remediation guidance pointed to a broader operating model.',
      zh: '历史事件、健康指标、产品内信号和修复指导共同指向一个更完整的运维模型。',
    },
  },
  {
    label: { en: 'Validation evidence', zh: '验证证据' },
    title: { en: 'Trust and action mattered more than volume', zh: '可信与可行动比数量更重要' },
    body: {
      en: 'Administrator reviews consistently prioritized signal accuracy, clear metric semantics, historical context, and actionable guidance.',
      zh: '管理员验证持续将信号准确性、清晰的指标语义、历史上下文和可执行指导放在首位。',
    },
  },
] satisfies Array<{ label: LocalizedText; title: LocalizedText; body: LocalizedText }>;

const loopSteps = [
  {
    number: '01',
    title: { en: 'Monitor', zh: '监控' },
    body: { en: 'Understand overall health and freshness.', zh: '理解整体健康状态与数据新鲜度。' },
  },
  {
    number: '02',
    title: { en: 'Alert', zh: '告警' },
    body: { en: 'Surface the right signal to the right owner.', zh: '把正确的信号传递给正确的负责人。' },
  },
  {
    number: '03',
    title: { en: 'Diagnose', zh: '诊断' },
    body: { en: 'Explain impact, history, and probable cause.', zh: '解释影响范围、历史与可能原因。' },
  },
  {
    number: '04',
    title: { en: 'Fix', zh: '修复' },
    body: { en: 'Hand off context to the relevant action surface.', zh: '携带上下文进入对应的修复入口。' },
  },
] satisfies Array<{ number: string; title: LocalizedText; body: LocalizedText }>;

const principles = [
  {
    title: { en: 'Trust before breadth', zh: '可信优先于功能广度' },
    body: { en: 'A smaller set of dependable signals is more useful than a noisy dashboard.', zh: '少量可靠信号，比充满噪声的仪表盘更有价值。' },
  },
  {
    title: { en: 'Action over awareness', zh: '行动优先于告知' },
    body: { en: 'Every event should help an administrator decide, not simply announce a failure.', zh: '每个事件都应帮助管理员做决定，而不只是宣布故障。' },
  },
  {
    title: { en: 'Overview before drilldown', zh: '先总览，再深入' },
    body: { en: 'Start with operational posture, then reveal detail only when it changes the next step.', zh: '先建立运营态势，只在细节会改变下一步时逐步展开。' },
  },
  {
    title: { en: 'Preserve context', zh: '保留操作上下文' },
    body: { en: 'Connector, scope, history, and severity should survive the handoff into remediation.', zh: '连接对象、影响范围、历史与严重程度应被带入修复流程。' },
  },
] satisfies Array<{ title: LocalizedText; body: LocalizedText }>;

const decisions = [
  {
    number: '01',
    title: { en: 'Make Overview the operating surface', zh: '让 Overview 成为运维入口' },
    before: { en: 'A dedicated notification destination', zh: '独立的通知目的地' },
    after: { en: 'Health, events, and actions in one overview', zh: '健康状态、事件与行动汇聚在同一总览' },
    body: {
      en: 'A separate inbox split “what happened” from “is the system healthy?” Integrating signals into Overview made notification part of the operating model rather than another place to check.',
      zh: '独立收件箱把“发生了什么”和“系统是否健康”割裂开。将信号整合进 Overview，让通知成为运维模型的一部分，而不是另一个需要巡检的位置。',
    },
  },
  {
    number: '02',
    title: { en: 'Diagnose in context, remediate in place', zh: '在上下文中诊断，在正确位置修复' },
    before: { en: 'Open a disconnected detail page', zh: '打开割裂的详情页面' },
    after: { en: 'Use a side panel, then hand off with context', zh: '用侧边栏解释，再携带上下文完成交接' },
    body: {
      en: 'The detail panel keeps the administrator anchored in the health overview while explaining impact and next steps. Complex remediation remains in the management surface built for it.',
      zh: '详情侧边栏让管理员停留在健康总览中理解影响和下一步；复杂修复仍由最适合承载它的管理界面完成。',
    },
  },
  {
    number: '03',
    title: { en: 'Turn events into decisions', zh: '把事件变成决策信息' },
    before: { en: 'Informational error text', zh: '只提供错误描述' },
    after: { en: 'Issue, impact, context, guidance, destination', zh: '问题、影响、上下文、指导与目的地' },
    body: {
      en: 'The content model was expanded so every health event can answer what happened, who is affected, what is known, and where the administrator can act.',
      zh: '事件内容模型被扩展为能够回答：发生了什么、影响谁、目前已知什么，以及管理员应该去哪里行动。',
    },
  },
  {
    number: '04',
    title: { en: 'Treat accuracy as experience quality', zh: '把准确性视为体验质量' },
    before: { en: 'Add more metrics and scenarios', zh: '继续增加指标与场景' },
    after: { en: 'Clarify freshness, coverage, and confidence first', zh: '先明确新鲜度、覆盖范围与可信程度' },
    body: {
      en: 'Validation showed that false positives can erode trust faster than missing features. Telemetry semantics and data freshness therefore became product-design requirements.',
      zh: '验证表明，误报破坏信任的速度可能快于功能缺失。因此，遥测语义和数据新鲜度也成为产品设计要求。',
    },
  },
] satisfies Array<{
  number: string;
  title: LocalizedText;
  before: LocalizedText;
  after: LocalizedText;
  body: LocalizedText;
}>;

const validationInsights = [
  {
    heard: { en: 'False positives make the entire view feel unreliable.', zh: '误报会让整个健康视图失去可信度。' },
    learned: { en: 'Accuracy is a launch-critical experience requirement.', zh: '准确性是影响发布的体验要求。' },
    response: { en: 'Expose freshness and coverage before expanding the metric set.', zh: '在扩展指标前，先表达数据新鲜度与覆盖范围。' },
  },
  {
    heard: { en: '“Needs attention” and open events did not tell one coherent story.', zh: '“需要关注”和未处理事件没有形成一致语义。' },
    learned: { en: 'Counts need an explicit hierarchy and relationship.', zh: '计数需要明确的信息层级和对应关系。' },
    response: { en: 'Define metric semantics before polishing dashboard visuals.', zh: '先定义指标语义，再完善仪表盘视觉。' },
  },
  {
    heard: { en: 'An error description alone does not help resolve the issue.', zh: '只有错误描述无法帮助管理员解决问题。' },
    learned: { en: 'Actionability is part of the event, not an optional add-on.', zh: '可执行性是事件模型的一部分，而不是附加能力。' },
    response: { en: 'Add diagnostic context, guidance, and a clear remediation handoff.', zh: '补充诊断上下文、指导和明确的修复交接。' },
  },
  {
    heard: { en: 'History, partial failures, and routing matter in real operations.', zh: '历史、部分失败和告警路由对真实运维很重要。' },
    learned: { en: 'A current-state snapshot cannot explain operational risk by itself.', zh: '单一当前状态无法独立解释运营风险。' },
    response: { en: 'Keep history and routing visible as validated next problems—not shipped claims.', zh: '将历史与路由明确为已验证的后续问题，而不是包装成已交付能力。' },
  },
] satisfies Array<{ heard: LocalizedText; learned: LocalizedText; response: LocalizedText }>;

const demoEvents = [
  {
    severity: 'critical' as const,
    title: { en: 'Search index freshness delayed', zh: '搜索索引更新延迟' },
    source: { en: 'Knowledge workspace', zh: '知识工作区' },
    time: { en: '12 min ago', zh: '12 分钟前' },
    impact: { en: 'New content may not appear in search results.', zh: '最新内容可能暂时不会出现在搜索结果中。' },
    context: { en: 'The latest scheduled crawl completed only part of the configured scope.', zh: '最近一次计划抓取仅完成了配置范围的一部分。' },
    guidance: { en: 'Review the partial crawl, then retry after confirming source access.', zh: '检查部分抓取记录，确认源访问权限后重试。' },
  },
  {
    severity: 'warning' as const,
    title: { en: 'Authentication expires soon', zh: '身份验证即将到期' },
    source: { en: 'Support portal', zh: '支持门户' },
    time: { en: '2 hr ago', zh: '2 小时前' },
    impact: { en: 'Future synchronization may stop if access is not renewed.', zh: '如果不续期访问权限，后续同步可能停止。' },
    context: { en: 'The current credential remains valid for a limited period.', zh: '当前凭据仍然有效，但剩余时间有限。' },
    guidance: { en: 'Notify the connection owner and renew access before expiration.', zh: '通知连接负责人，并在到期前续期访问权限。' },
  },
  {
    severity: 'resolved' as const,
    title: { en: 'Crawl volume returned to baseline', zh: '抓取量已恢复到基线' },
    source: { en: 'Sales workspace', zh: '销售工作区' },
    time: { en: 'Yesterday', zh: '昨天' },
    impact: { en: 'No current user impact.', zh: '当前没有用户影响。' },
    context: { en: 'A temporary source-side limit reduced throughput for one cycle.', zh: '数据源的临时限制曾导致一个周期的吞吐量下降。' },
    guidance: { en: 'No action required. Keep the event for historical context.', zh: '无需操作，保留该事件用于历史上下文。' },
  },
];

const severityStyle = {
  critical: {
    dot: 'bg-rose-400',
    badge: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
    label: { en: 'Needs action', zh: '需要处理' },
  },
  warning: {
    dot: 'bg-amber-300',
    badge: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
    label: { en: 'Plan action', zh: '计划处理' },
  },
  resolved: {
    dot: 'bg-emerald-300',
    badge: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100',
    label: { en: 'Resolved', zh: '已恢复' },
  },
} as const;

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        <span className="h-px w-8 bg-cyan-300/70" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">{body}</p>}
    </Reveal>
  );
}

function HealthDashboardMock({ lang }: { lang: Lang }) {
  const bars = ['38%', '52%', '47%', '70%', '58%', '82%', '76%', '68%', '88%', '79%', '91%', '84%'];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#08131f] shadow-[0_36px_100px_rgba(0,0,0,0.45)]">
      <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.035] px-5">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
          {lang === 'zh' ? '抽象界面 · 示例数据' : 'Abstract interface · Illustrative data'}
        </span>
      </div>

      <div className="grid min-h-[470px] grid-cols-[52px_1fr] md:grid-cols-[72px_1fr]">
        <div className="border-r border-white/10 bg-white/[0.02] px-3 py-5">
          <div className="mx-auto mb-8 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300 text-xs font-black text-[#06111d]">
            H
          </div>
          <div className="space-y-4">
            {[true, false, false, false].map((active, index) => (
              <div
                key={index}
                className={`mx-auto h-8 w-8 rounded-lg border ${active ? 'border-cyan-300/40 bg-cyan-300/15' : 'border-white/5 bg-white/[0.025]'}`}
              />
            ))}
          </div>
        </div>

        <div className="min-w-0 p-4 md:p-6">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs text-slate-500">{lang === 'zh' ? '企业连接' : 'Enterprise connections'}</p>
              <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">
                {lang === 'zh' ? '连接健康总览' : 'Connection health overview'}
              </h3>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {lang === 'zh' ? '数据更新于 4 分钟前' : 'Updated 4 minutes ago'}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {[
              { value: '12', label: lang === 'zh' ? '健康' : 'Healthy', tone: 'text-emerald-200' },
              { value: '2', label: lang === 'zh' ? '需关注' : 'Attention', tone: 'text-amber-100' },
              { value: '1', label: lang === 'zh' ? '需处理' : 'Action', tone: 'text-rose-200' },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-3 md:p-4">
                <div className={`text-2xl font-semibold md:text-3xl ${metric.tone}`}>{metric.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-500 md:text-xs">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">{lang === 'zh' ? '健康信号趋势' : 'Health signal trend'}</span>
                <span className="text-[10px] text-slate-600">{lang === 'zh' ? '最近 12 个周期' : 'Last 12 cycles'}</span>
              </div>
              <div className="flex h-24 items-end gap-1.5 border-b border-white/10">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-sm ${index === 8 ? 'bg-amber-300/70' : index === 9 ? 'bg-rose-300/70' : 'bg-cyan-300/45'}`}
                    style={{ height }}
                  />
                ))}
              </div>
              <div className="mt-4 space-y-2.5">
                {demoEvents.slice(0, 2).map((event) => {
                  const style = severityStyle[event.severity];
                  return (
                    <div key={event.title.en} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2.5">
                      <span className={`h-2 w-2 flex-none rounded-full ${style.dot}`} />
                      <span className="min-w-0 flex-1 truncate text-xs text-slate-300">{event.title[lang]}</span>
                      <span className="text-[10px] text-slate-600">{event.time[lang]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.045] p-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                {lang === 'zh' ? '推荐行动' : 'Recommended action'}
              </span>
              <h4 className="mt-3 text-sm font-semibold text-white">
                {lang === 'zh' ? '检查部分抓取范围' : 'Review partial crawl scope'}
              </h4>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                {lang === 'zh'
                  ? '确认数据源访问权限后，再重新运行受影响的同步。'
                  : 'Confirm source access before retrying the affected synchronization.'}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-cyan-200">
                {lang === 'zh' ? '查看诊断上下文' : 'View diagnostic context'}
                <span aria-hidden="true">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceDemo({ lang }: { lang: Lang }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = demoEvents[selectedIndex];
  const selectedStyle = severityStyle[selected.severity];

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/15 bg-[#08131f] shadow-[0_32px_90px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
        <div>
          <p className="text-xs text-slate-500">{lang === 'zh' ? '抽象交互原型' : 'Abstract interaction prototype'}</p>
          <h3 className="mt-1 text-base font-semibold text-white">{lang === 'zh' ? '健康事件与诊断详情' : 'Health events and diagnostic detail'}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">
          {lang === 'zh' ? '示例数据' : 'Illustrative data'}
        </span>
      </div>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-white/10 p-4 md:p-6 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              {lang === 'zh' ? '最近事件' : 'Recent events'}
            </span>
            <span className="text-xs text-slate-600">3</span>
          </div>
          <div className="space-y-2">
            {demoEvents.map((event, index) => {
              const style = severityStyle[event.severity];
              const selectedEvent = selectedIndex === index;
              return (
                <button
                  key={event.title.en}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={selectedEvent}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    selectedEvent
                      ? 'border-cyan-300/35 bg-cyan-300/[0.07]'
                      : 'border-white/10 bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.045]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-1.5 h-2.5 w-2.5 flex-none rounded-full ${style.dot}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-white">{event.title[lang]}</span>
                      <span className="mt-1 block text-xs text-slate-500">{event.source[lang]} · {event.time[lang]}</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${selectedStyle.badge}`}>
              {selectedStyle.label[lang]}
            </span>
            <span className="text-xs text-slate-600">{selected.time[lang]}</span>
          </div>
          <h4 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white">{selected.title[lang]}</h4>
          <p className="mt-2 text-sm text-slate-500">{selected.source[lang]}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">{lang === 'zh' ? '影响' : 'Impact'}</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">{selected.impact[lang]}</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">{lang === 'zh' ? '诊断上下文' : 'Diagnostic context'}</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">{selected.context[lang]}</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">{lang === 'zh' ? '建议操作' : 'Resolution guidance'}</div>
            <p className="mt-2 text-sm leading-6 text-slate-200">{selected.guidance[lang]}</p>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-[#06111d]">
            {lang === 'zh' ? '打开连接设置' : 'Open connection settings'}
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConnectorHealthCenterPage() {
  const { lang, t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050b12] text-white">
      <Navigation />

      <main>
        <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 md:pb-32 md:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[4%] top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute right-[-8%] top-[28%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[140px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
          </div>

          <div className="mx-auto max-w-7xl">
            <Link
              href="/projects"
              className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              {t('All projects', '全部项目')}
            </Link>

            <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  <span>{t('Product design', '产品设计')}</span>
                  <span className="h-1 w-1 rounded-full bg-cyan-300/50" />
                  <span>{t('Enterprise operations', '企业运维')}</span>
                  <span className="h-1 w-1 rounded-full bg-cyan-300/50" />
                  <span>2026</span>
                </div>
                <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl lg:text-[82px]">
                  {t('From alerts to action.', '从收到告警，到真正解决问题。')}
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
                  {t(
                    'I helped evolve connector notifications into a proactive health-management loop where administrators can monitor status, understand failures, and move directly toward resolution.',
                    '我推动连接器通知从单向提醒演进为主动健康管理闭环，让管理员能够监控状态、理解故障，并直接进入修复路径。'
                  )}
                </p>

                <div className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                  {[
                    { label: t('Role', '角色'), value: t('Product designer', '产品设计师') },
                    { label: t('Scope', '范围'), value: t('Definition to validation', '从产品定义到验证') },
                    { label: t('Focus', '重点'), value: t('Trust + actionability', '可信与可行动') },
                    { label: t('Status', '状态'), value: t('Validated direction', '已验证方向') },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#07101a] p-4 md:p-5">
                      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-600">{item.label}</div>
                      <div className="mt-2 text-sm font-medium text-slate-200">{item.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97, y: reduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <HealthDashboardMock lang={lang} />
              </motion.div>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10" aria-hidden="true">i</span>
              {t(
                'Public case study. Interfaces, names, and data are intentionally abstracted.',
                '公开案例版本。界面、名称与数据均经过抽象化处理。'
              )}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('01 · Operational reality', '01 · 运营现实')}
              title={t(
                'A notification can say something broke. It cannot solve the operational problem.',
                '通知可以告诉你故障发生了，却无法独立解决运维问题。'
              )}
              body={t(
                'Without a shared health view, administrators were left to discover risk late, reconstruct context, and search for the right place to act.',
                '缺少统一健康视图时，管理员只能较晚发现风险、重新拼接上下文，再寻找正确的操作入口。'
              )}
            />

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {operationalGaps.map((gap, index) => (
                <Reveal key={gap.number} delay={index * 0.08} className="rounded-2xl border border-white/10 bg-[#07111c] p-6 md:p-7">
                  <div className="text-xs font-semibold text-cyan-300/70">{gap.number}</div>
                  <h3 className="mt-8 text-xl font-semibold text-white">{gap.title[lang]}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-400">{gap.body[lang]}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('02 · Product evolution', '02 · 产品演进')}
              title={t('The scope changed when the user task became clearer.', '当用户任务变清晰，产品范围也随之改变。')}
              body={t(
                'The work did not jump directly to a dashboard. It expanded step by step—from surfacing critical events to organizing signals, and finally to closing the operational loop.',
                '项目并不是直接跳到一个仪表盘，而是从暴露关键事件、组织健康信号，逐步演进到闭合完整运维链路。'
              )}
            />

            <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
              <div className="absolute left-[16.7%] right-[16.7%] top-7 hidden h-px bg-gradient-to-r from-cyan-300/15 via-cyan-300/60 to-cyan-300/15 lg:block" />
              {evolution.map((stage, index) => (
                <Reveal key={stage.step} delay={index * 0.1} className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/35 bg-[#07141f] text-sm font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                    {stage.step}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">{stage.label[lang]}</span>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{stage.title[lang]}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-400">{stage.body[lang]}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-7 md:p-9">
              <p className="max-w-4xl text-xl font-medium leading-9 text-slate-100 md:text-2xl">
                {t(
                  'The problem was not “we need more notifications.” It was “administrators need a continuous path from risk to resolution.”',
                  '真正的问题不是“我们需要更多通知”，而是“管理员需要一条从发现风险到完成修复的连续路径”。'
                )}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07101a] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('03 · Evidence', '03 · 证据')}
              title={t('The direction came from converging evidence—not a dashboard trend.', '方向来自多层证据，而不是对仪表盘形式的偏好。')}
            />

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
              {evidence.map((item, index) => (
                <Reveal key={item.label.en} delay={index * 0.08} className="bg-[#08131f] p-7 md:p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">{item.label[lang]}</span>
                  <h3 className="mt-5 text-xl font-semibold leading-7 text-white">{item.title[lang]}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-400">{item.body[lang]}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 md:py-36">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[130px]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                {t('The reframed question', '重新定义后的设计问题')}
              </div>
              <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                {t(
                  'How might we help administrators detect risk early, understand why it happened, and move into resolution without rebuilding context?',
                  '我们如何帮助管理员更早发现风险、理解问题为何发生，并在无需重建上下文的情况下进入修复？'
                )}
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {loopSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08} className="group relative rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-300/70">{step.number}</span>
                    {index < loopSteps.length - 1 && <span className="text-cyan-300/50" aria-hidden="true">→</span>}
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-white">{step.title[lang]}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.body[lang]}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('04 · Design principles', '04 · 设计原则')}
              title={t('The dashboard was not the product. Trust was.', '仪表盘不是产品本身，信任才是。')}
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {principles.map((principle, index) => (
                <Reveal key={principle.title.en} delay={(index % 2) * 0.08} className="flex gap-5 rounded-2xl border border-white/10 bg-[#07111c] p-6 md:p-7">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.06] text-xs font-semibold text-cyan-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{principle.title[lang]}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-400">{principle.body[lang]}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('05 · Key decisions', '05 · 关键决策')}
              title={t('Four decisions changed the shape—and the priority—of the product.', '四项决策改变了产品的形态，也改变了优先级。')}
              body={t(
                'Each decision connected an observed problem to a product-model change. The interface followed the decision, not the other way around.',
                '每项决策都把观察到的问题连接到产品模型的变化。界面跟随决策，而不是反过来。'
              )}
            />

            <div className="mt-16 space-y-6">
              {decisions.map((decision, index) => (
                <Reveal key={decision.number} className="grid overflow-hidden rounded-[24px] border border-white/10 bg-[#07111c] lg:grid-cols-[0.7fr_1.3fr]">
                  <div className="border-b border-white/10 p-7 md:p-9 lg:border-b-0 lg:border-r">
                    <div className="text-xs font-semibold text-cyan-300/70">{decision.number}</div>
                    <h3 className="mt-8 text-2xl font-semibold leading-tight text-white md:text-3xl">{decision.title[lang]}</h3>
                    <p className="mt-5 text-base leading-7 text-slate-400">{decision.body[lang]}</p>
                  </div>
                  <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                    <div className="bg-[#08131f] p-7 md:p-9">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">{t('Earlier direction', '原方向')}</span>
                      <p className="mt-5 text-lg font-medium leading-7 text-slate-400">{decision.before[lang]}</p>
                    </div>
                    <div className="relative bg-cyan-300/[0.045] p-7 md:p-9">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">{t('Design decision', '设计决策')}</span>
                      <p className="mt-5 text-lg font-medium leading-7 text-white">{decision.after[lang]}</p>
                      <span className="absolute bottom-6 right-7 text-cyan-300/30" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07101a] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('06 · Experience model', '06 · 体验模型')}
              title={t('Overview for posture. Detail for diagnosis. Management for action.', '总览用于判断态势，详情用于诊断，管理界面用于行动。')}
              body={t(
                'This abstract prototype shows the intended handoff. Select an event to see how operational context stays intact before remediation.',
                '这个抽象原型展示了预期的交接方式。选择一个事件，查看运维上下文如何在进入修复前保持完整。'
              )}
            />
            <Reveal className="mt-14">
              <ExperienceDemo lang={lang} />
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('07 · Customer validation', '07 · 客户验证')}
              title={t('Validation did more than confirm the design. It changed what came first.', '验证不只是确认方案，它改变了什么应该优先。')}
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {validationInsights.map((insight, index) => (
                <Reveal key={insight.heard.en} delay={(index % 2) * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
                  <div className="grid gap-6 sm:grid-cols-[0.88fr_1.12fr]">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">{t('What we heard', '我们听到的')}</span>
                      <p className="mt-3 text-base font-medium leading-7 text-slate-200">{insight.heard[lang]}</p>
                    </div>
                    <div className="border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">{t('What it changed', '它改变了什么')}</span>
                      <p className="mt-3 text-sm font-medium leading-6 text-white">{insight.learned[lang]}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{insight.response[lang]}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={t('08 · Current state', '08 · 当前状态')}
              title={t('A credible case study separates foundation, validated direction, and open work.', '可信的案例需要区分基础能力、已验证方向和开放问题。')}
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                {
                  label: t('Foundation established', '已建立基础'),
                  tone: 'border-emerald-300/20 bg-emerald-300/[0.045]',
                  dot: 'bg-emerald-300',
                  items: [
                    t('Proactive alert path for priority events', '优先级事件的主动告警路径'),
                    t('Subscription and notification foundations', '订阅与通知基础能力'),
                    t('A continuous roadmap into health management', '向健康管理演进的连续路线'),
                  ],
                },
                {
                  label: t('Validated direction', '已验证方向'),
                  tone: 'border-cyan-300/20 bg-cyan-300/[0.045]',
                  dot: 'bg-cyan-300',
                  items: [
                    t('Overview-centered information architecture', '以 Overview 为中心的信息架构'),
                    t('Monitor → Alert → Diagnose → Fix framework', '监控 → 告警 → 诊断 → 修复框架'),
                    t('Actionable detail and remediation handoff', '可执行详情与修复交接'),
                  ],
                },
                {
                  label: t('Open questions', '开放问题'),
                  tone: 'border-amber-300/20 bg-amber-300/[0.035]',
                  dot: 'bg-amber-300',
                  items: [
                    t('Customer-facing metric semantics', '面向客户的指标语义'),
                    t('Telemetry accuracy and coverage', '遥测准确性与覆盖范围'),
                    t('Routing, recipient, and surface boundaries', '路由、接收者与界面边界'),
                  ],
                },
              ].map((group, index) => (
                <Reveal key={group.label} delay={index * 0.08} className={`rounded-2xl border p-6 md:p-7 ${group.tone}`}>
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${group.dot}`} />
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{group.label}</h3>
                  </div>
                  <ul className="mt-7 space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-white/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-28 md:py-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_52%)]" />
          <Reveal className="relative mx-auto max-w-5xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{t('Reflection', '反思')}</div>
            <blockquote className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl">
              {t(
                'The core of an enterprise health experience is not the dashboard. It is whether administrators trust the signal, understand the impact, and know what to do next.',
                '企业健康体验的核心不是仪表盘，而是管理员是否相信信号、理解影响，并知道下一步该做什么。'
              )}
            </blockquote>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              {t(
                'Telemetry semantics, historical context, and the remediation handoff are not implementation details around the experience—they are the experience.',
                '遥测语义、历史上下文和修复交接并不是体验外围的实现细节，它们共同构成了体验本身。'
              )}
            </p>
          </Reveal>
        </section>

        <footer className="border-t border-white/10 px-6 py-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
              <span aria-hidden="true">←</span>
              {t('Back to all projects', '返回全部项目')}
            </Link>
            <Link
              href="/projects/unified-connector-experience"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
            >
              {t('Next: Unified connector experience', '下一个：统一连接器体验')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

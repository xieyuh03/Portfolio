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
const mediaPath = (file: string) =>
  `${basePath}/images/global-market-intelligence/${file}`;

type Localized = { en: string; zh: string };
type MediaItem = {
  src: string;
  alt: Localized;
  label: Localized;
  caption: Localized;
};

const media = {
  overview: {
    src: mediaPath('global-overview.png'),
    alt: {
      en: 'World Ledger global situation dashboard',
      zh: 'World Ledger 全球态势仪表盘',
    },
    label: { en: 'Framework 01 · Global situation', zh: '框架 01 · 全球态势' },
    caption: {
      en: 'Seven evidence lenses place capital, markets, resources, routes, and events back onto one geographic decision surface.',
      zh: '七个证据视角把资金、市场、资源、航运与事件重新放回同一张地理决策界面。',
    },
  },
  etfFlow: {
    src: mediaPath('etf-flow.png'),
    alt: {
      en: 'ETF primary-market flow analysis',
      zh: 'ETF 一级市场申赎分析',
    },
    label: { en: 'Primary-market proxy', zh: '一级市场代理' },
    caption: {
      en: 'Share changes multiplied by the closing price estimate daily subscriptions and redemptions, with categories, ranges, overlays, and contribution rankings.',
      zh: '以份额变化乘当日收盘价估算日度申赎，并提供分类、区间、指数叠加与贡献榜。',
    },
  },
  deviation: {
    src: mediaPath('deviation-analysis.png'),
    alt: {
      en: 'Linked index and moving-average log-deviation charts',
      zh: '指数与均线对数偏离度联动图',
    },
    label: { en: 'Historical location, not prediction', zh: '历史位置，而非预测' },
    caption: {
      en: 'Linked price and log-deviation charts expose 60/200-day location, fixed thresholds, historical percentiles, and the limits of probability.',
      zh: '指数与偏离度上下联动，呈现 60/200 日位置、固定阈值、历史分位与概率边界。',
    },
  },
  hkLeading: {
    src: mediaPath('hk-leading.png'),
    alt: {
      en: 'Four-factor Hang Seng leading indicator',
      zh: '恒生指数四因子领航指标',
    },
    label: { en: 'Four-factor macro composite', zh: '四因子宏观合成' },
    caption: {
      en: 'Hong Kong M2, mainland PPI, retail sales, and credit impulse remain true monthly observations and are aligned by release month.',
      zh: '香港 M2、内地 PPI、社零与信用脉冲保留真实月频，并按发布月对齐。',
    },
  },
} satisfies Record<string, MediaItem>;

const problemCards = [
  {
    title: { en: 'More data did not create direction.', zh: '更多数据并不自动产生方向。' },
    body: {
      en: 'Prices, flows, macro releases, resources, and events lived in separate tools with no shared decision question.',
      zh: '价格、资金、宏观数据、资源与事件分散在不同工具里，没有共同的决策问题。',
    },
  },
  {
    title: { en: 'Unlike units were compared as equals.', zh: '不同口径被当成同一种证据。' },
    body: {
      en: 'An ETF price proxy, a disclosed primary-market flow, and a macro series do not carry the same meaning or confidence.',
      zh: 'ETF 价格代理、披露的一级市场申赎与宏观序列并不具有相同含义和可信度。',
    },
  },
  {
    title: { en: 'A score could hide uncertainty.', zh: '一个分数可能掩盖不确定性。' },
    body: {
      en: 'Compressing evidence too early made it difficult to inspect the transmission path, source, freshness, and falsification condition.',
      zh: '过早把证据压成单一分数，会让传导路径、来源、新鲜度与证伪条件难以检查。',
    },
  },
];

const evidenceLayers = [
  {
    code: '01',
    title: { en: 'Observe', zh: '观察' },
    body: {
      en: 'What changed in price, volume, disclosed shares, and macro releases?',
      zh: '价格、成交量、披露份额与宏观数据发生了什么变化？',
    },
  },
  {
    code: '02',
    title: { en: 'Compare', zh: '比较' },
    body: {
      en: 'Is the move global, regional, country-specific, or only a proxy artifact?',
      zh: '变化来自全球、区域、国家，还是仅仅来自代理指标本身？',
    },
  },
  {
    code: '03',
    title: { en: 'Infer', zh: '推断' },
    body: {
      en: 'What transmission story fits—and what future evidence would invalidate it?',
      zh: '哪条传导逻辑最合理？未来什么证据会推翻它？',
    },
  },
];

const hkFactors = [
  {
    title: { en: 'Hong Kong M2', zh: '香港 M2' },
    body: { en: 'Local monetary and deposit liquidity.', zh: '本地货币与存款流动性。' },
  },
  {
    title: { en: 'Mainland PPI', zh: '内地 PPI' },
    body: { en: 'Corporate profit and nominal-growth environment.', zh: '企业利润与名义增长环境。' },
  },
  {
    title: { en: 'Retail sales', zh: '内地社零' },
    body: { en: 'Domestic demand and consumption momentum.', zh: '内需与消费景气。' },
  },
  {
    title: { en: 'Credit impulse proxy', zh: '信用脉冲代理' },
    body: { en: 'Six-month new financing relative to nominal GDP.', zh: '六个月新增社融相对名义 GDP。' },
  },
];

const outcomes = [
  {
    label: { en: 'Shipped', zh: '已交付' },
    value: { en: '5 connected public research views', zh: '5 个相互连接的公开研究视图' },
  },
  {
    label: { en: 'Reused', zh: '已复用' },
    value: { en: 'One dataset contract for web and desktop', zh: '网页与桌面端共用一套数据契约' },
  },
  {
    label: { en: 'Protected', zh: '已保护' },
    value: { en: 'Private accounts excluded from publication', zh: '私人账户数据不进入发布链路' },
  },
  {
    label: { en: 'Automated', zh: '已自动化' },
    value: { en: 'Scheduled research and static deployment', zh: '定时研究与静态站点发布' },
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
        className="group block w-full overflow-hidden bg-[#080b0c] text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1267d6]"
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

export default function GlobalMarketIntelligencePage() {
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
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#626872] transition-colors hover:text-[#1267d6]"
              >
                <span aria-hidden="true">←</span>
                {t('All Projects', '所有项目')}
              </Link>
              <Link
                href="/projects/personal-intelligence-system"
                className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b87824] transition hover:text-[#805015]"
              >
                {t('Part 02 of Personal Intelligence System', 'Personal Intelligence System · 子案例 02')}
              </Link>
            </div>
          </Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e949e]">
                <span className="h-px w-10 bg-[#c9cdd4]" aria-hidden="true" />
                <span>{t('Public evidence layer · Research system', '公开证据层 · 研究系统')}</span>
              </div>
              <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6.5rem)] font-[720] leading-[0.92] tracking-[-0.07em] text-[#111318]">
                World <span className="text-[#b87824]">Ledger</span>
              </h1>
              <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#626872]">
                Global Market Intelligence
              </p>
              <p className="mt-8 max-w-2xl text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-[1.25] tracking-[-0.035em] text-[#171a21]">
                {t(
                  'A decision instrument that separates what the market did, what the data can support, and what remains an inference.',
                  '一套明确区分“市场发生了什么、数据能证明什么、哪些仍是推断”的决策工具。',
                )}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#626872] md:text-lg">
                {t(
                  'I designed and built it to turn fragmented public evidence into an inspectable research path—not to produce another opaque buy/sell score.',
                  '我设计并实现它，是为了把分散的公开证据组织成可检查的研究路径，而不是再生成一个不透明的买卖分数。',
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://xieyuh03.github.io/Global-market-intelligence/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#171a21] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1267d6]"
                >
                  {t('Open live product ↗', '打开线上产品 ↗')}
                </a>
                <a
                  href="https://github.com/xieyuh03/Global-market-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#c9cdd4] bg-white px-5 py-3 text-sm font-semibold text-[#171a21] transition hover:border-[#1267d6] hover:text-[#1267d6]"
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <MediaFrame
                item={media.overview}
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
                  value: t('Product strategy · Research · Build', '产品策略 · 研究 · 实现'),
                },
                {
                  label: t('Scope', '范围'),
                  value: t('Public market evidence only', '仅使用公开市场证据'),
                },
                {
                  label: t('Stack', '技术'),
                  value: 'Next.js · TypeScript · Recharts',
                },
                {
                  label: t('Delivery', '交付'),
                  value: t('Web · Desktop module · Data pipeline', '网页 · 桌面模块 · 数据管线'),
                },
              ]}
            />
          </Reveal>
        </Chapter>

        <Chapter id="problem" tone="paper">
          <SectionHeading
            index="01"
            eyebrow={t('First-principles problem', '第一性原理问题')}
            title={t(
              'The scarce resource was not market data. It was trustworthy orientation.',
              '真正稀缺的不是市场数据，而是可信的方向感。',
            )}
            body={t(
              'A useful research product must answer three questions in order: what changed, what evidence supports the explanation, and what would prove the explanation wrong.',
              '一个有用的研究产品必须依次回答三个问题：发生了什么变化、什么证据支持解释、什么会证明解释是错的。',
            )}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {problemCards.map((item, index) => (
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
            <StatementBand label={t('Product thesis', '产品命题')}>
              {t(
                'Do not hide uncertainty inside one score. Make the evidence chain, proxy status, and falsification condition visible.',
                '不要把不确定性藏进一个分数。把证据链、代理指标身份与证伪条件直接展示出来。',
              )}
            </StatementBand>
          </Reveal>
        </Chapter>

        <Chapter id="framework" tone="surface">
          <SectionHeading
            index="02"
            eyebrow={t('Decision architecture', '决策架构')}
            title={t(
              'Geography provides the frame. Evidence layers provide the discipline.',
              '地理关系提供框架，证据分层提供纪律。',
            )}
            body={t(
              'The global view starts with a country and a question, then moves through common factors, relative preference, and higher-confidence ledgers. Each layer states what it measures and what it cannot prove.',
              '全球视图从国家与问题出发，再进入共同因子、相对偏好与更高可信度的真实账本。每一层都说明它测量什么、又不能证明什么。',
            )}
          />
          <div className="mt-10">
            <MediaFrame
              item={media.overview}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] md:grid-cols-3">
            {evidenceLayers.map((item) => (
              <div key={item.code} className="bg-white p-6">
                <NumberBadge>{item.code}</NumberBadge>
                <h3 className="mt-5 text-xl font-semibold">{pick(item.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-[#626872]">
                  {pick(item.body)}
                </p>
              </div>
            ))}
          </div>
        </Chapter>

        <Chapter id="etf-flow" tone="soft">
          <SectionHeading
            index="03"
            eyebrow={t('Latest capability · ETF flow', '最新能力 · ETF 申赎')}
            title={t(
              'Turn disclosed share changes into a transparent primary-market estimate.',
              '把披露的份额变化转化为透明的一级市场估算。',
            )}
            body={t(
              'Daily subscriptions and redemptions are estimated from exchange-disclosed share changes and closing prices. The interface keeps the latest complete trading date visible, separates asset families, and allows cumulative flow to be compared with the corresponding index.',
              '日度申赎由交易所披露的份额变化与收盘价估算。界面明确显示最新完整交易日，区分资产类别，并允许把累计申赎与对应指数叠加比较。',
            )}
          />
          <div className="mt-10">
            <MediaFrame
              item={media.etfFlow}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: t('Decision', '决策'),
                body: t(
                  'Use disclosed shares—not volume—to estimate primary-market activity.',
                  '使用披露份额而非成交量估算一级市场活动。',
                ),
              },
              {
                title: t('Guardrail', '护栏'),
                body: t(
                  'Never manufacture an incomplete intraday value as a finished day.',
                  '绝不把盘中不完整数据伪装成完整交易日。',
                ),
              },
              {
                title: t('Result', '结果'),
                body: t(
                  'One surface now compares categories, periods, contribution, and index confirmation.',
                  '一个界面即可比较分类、区间、贡献与指数确认。',
                ),
              },
            ].map((item) => (
              <EditorialCard key={item.title} className="h-full">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm font-semibold leading-7">{item.body}</p>
              </EditorialCard>
            ))}
          </div>
        </Chapter>

        <Chapter id="deviation" tone="surface">
          <SectionHeading
            index="04"
            eyebrow={t('Latest capability · Historical location', '最新能力 · 历史位置')}
            title={t(
              'Separate “where we are” from “where we go next.”',
              '把“现在在哪里”和“接下来往哪里”分开。',
            )}
            body={t(
              'Moving-average log deviation answers a location question. Linked 60/200-day views, fixed ±8% bands, and historical percentiles make that location inspectable; probability tables remain explicitly descriptive rather than predictive.',
              '均线对数偏离度回答的是位置问题。60/200 日联动视图、固定 ±8% 区间与历史分位让位置可被检查；概率表则被明确限定为历史描述，而不是预测。',
            )}
          />
          <div className="mt-10">
            <MediaFrame
              item={media.deviation}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <Reveal className="mt-8">
            <StatementBand label={t('Research boundary', '研究边界')}>
              {t(
                'Historical frequency can describe risk location. It cannot guarantee the next path—and the interface should say so.',
                '历史频率可以描述风险位置，但不能保证下一段路径；界面必须把这件事说清楚。',
              )}
            </StatementBand>
          </Reveal>
        </Chapter>

        <Chapter id="hk-leading" tone="paper">
          <SectionHeading
            index="05"
            eyebrow={t('Latest capability · Hang Seng model', '最新能力 · 恒指模型')}
            title={t(
              'Preserve the economic clock instead of inventing daily precision.',
              '保留真实经济时钟，而不是制造虚假的日频精度。',
            )}
            body={t(
              'The four-factor composite keeps every macro input at its real monthly frequency, aligns observations by release month, and standardizes them over a rolling window. Equal weights make the model legible before making it clever.',
              '四因子合成保留每个宏观输入的真实月频，按发布月对齐，并在滚动窗口内标准化。先用等权让模型可解释，再谈更复杂的优化。',
            )}
          />
          <div className="mt-10">
            <MediaFrame
              item={media.hkLeading}
              lang={lang}
              onOpen={setLightboxItem}
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hkFactors.map((factor, index) => (
              <Reveal key={factor.title.en} delay={index * 0.035}>
                <EditorialCard className="h-full">
                  <NumberBadge>25%</NumberBadge>
                  <h3 className="mt-5 text-lg font-semibold">{pick(factor.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#626872]">
                    {pick(factor.body)}
                  </p>
                </EditorialCard>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter id="system" tone="dark">
          <SectionHeading
            index="06"
            eyebrow={t('System & ownership', '系统与责任边界')}
            title={t(
              'Independent enough to publish. Connected enough to compound.',
              '独立到可以发布，连接到能够持续复利。',
            )}
            body={t(
              'World Ledger owns its source, public data contract, research scripts, and deployment. Personal Command Center manages its direction and also consumes the same published snapshots in native research views.',
              'World Ledger 自己拥有源码、公开数据契约、研究脚本与发布流程；Personal Command Center 管理它的方向，并在原生研究视图中消费同一套公开快照。',
            )}
            dark
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-white/12 bg-white/12 md:grid-cols-4">
            {[
              {
                code: '01',
                title: t('Collect', '采集'),
                body: t('Public market and macro sources', '公开市场与宏观来源'),
              },
              {
                code: '02',
                title: t('Model', '建模'),
                body: t('Versioned research scripts and tests', '版本化研究脚本与测试'),
              },
              {
                code: '03',
                title: t('Publish', '发布'),
                body: t('Static public snapshots and downloads', '静态公开快照与下载'),
              },
              {
                code: '04',
                title: t('Consume', '消费'),
                body: t('Web product and desktop module', '网页产品与桌面模块'),
              },
            ].map((item) => (
              <div key={item.code} className="bg-[#171a21] p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d9a85e]">
                  {item.code}
                </p>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.body}</p>
              </div>
            ))}
          </div>
          <Reveal className="mt-8">
            <div className="rounded-[24px] border border-[#d9a85e]/35 bg-[#d9a85e]/8 p-6 text-sm leading-7 text-white/72">
              <strong className="text-white">
                {t('Publication rule: ', '发布原则：')}
              </strong>
              {t(
                'public datasets and model outputs may ship; holdings, transactions, account snapshots, credentials, and local workspace state may not.',
                '公开数据集与模型输出可以发布；持仓、成交、账户快照、凭证与本地工作状态绝不进入发布链路。',
              )}
            </div>
          </Reveal>
        </Chapter>

        <Chapter id="outcome" tone="surface">
          <SectionHeading
            index="07"
            eyebrow={t('Outcome & reflection', '成果与复盘')}
            title={t(
              'The result is a research system with visible reasoning—not just a polished dashboard.',
              '最终得到的是一套推理过程可见的研究系统，而不只是一个漂亮仪表盘。',
            )}
            body={t(
              'The product now connects global orientation, market confirmation, primary-market flow, historical location, and a macro composite while keeping each evidence type inspectable and appropriately bounded.',
              '产品现在连接了全球方向、市场确认、一级市场申赎、历史位置与宏观合成，同时让每种证据都可检查、且边界清晰。',
            )}
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-[#dfe2e7] sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.label.en} className="bg-white p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b87824]">
                  {pick(item.label)}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7">{pick(item.value)}</p>
              </div>
            ))}
          </div>
          <Reveal className="mt-10">
            <StatementBand label={t('What I learned', '我的复盘')}>
              {t(
                'The next useful feature is rarely another indicator. It is clearer provenance, stronger comparison, or a better way to expose what would change the decision.',
                '下一个真正有用的功能往往不是再加一个指标，而是更清楚的来源、更有纪律的比较，或更明确地展示什么会改变当前判断。',
              )}
            </StatementBand>
          </Reveal>
          <Reveal className="mt-8">
            <Link
              href="/projects/personal-command-center"
              className="group flex items-center justify-between gap-6 rounded-[24px] border border-[#dfe2e7] bg-white p-6 text-[#111318] shadow-[0_16px_40px_rgba(17,19,24,0.045)] transition hover:border-[#1267d6]/45"
            >
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1267d6]">
                  {t('Return to subcase 01', '返回子案例 01')}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  Personal Command Center · {t('Private work layer', '私人工作层')}
                </h3>
              </div>
              <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
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

'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const deckPath = `${basePath}/decks/information-flow-consistency-ai-workflows/index.html`;

export default function InformationFlowConsistencyPage() {
  const { lang, t } = useLanguage();
  const deckUrl = `${deckPath}?lang=${lang}`;

  return (
    <main className="h-screen overflow-hidden bg-[#171a21] text-white">
      <header className="flex h-16 items-center gap-4 border-b border-white/10 bg-[#171a21] px-4 sm:px-6">
        <Link
          href="/projects"
          className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white/35 hover:text-white"
        >
          {t('← Projects', '← 返回项目')}
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">
            Information Flow &amp; Consistency in AI Workflows
          </p>
          <p className="hidden truncate text-xs text-white/45 sm:block">
            {t('Interactive presentation · 8 chapters', '交互演示 · 8 个章节')}
          </p>
        </div>
        <a
          href={deckUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#171a21] transition hover:bg-[#edf4ff]"
        >
          {t('Open full screen ↗', '全屏打开 ↗')}
        </a>
      </header>
      <iframe
        key={lang}
        src={deckUrl}
        title={t(
          'Information Flow & Consistency in AI Workflows presentation',
          'AI 工作流中的信息流转与一致性演示',
        )}
        className="h-[calc(100vh-4rem)] w-full border-0 bg-[#f7f8fa]"
        allow="fullscreen"
      />
    </main>
  );
}

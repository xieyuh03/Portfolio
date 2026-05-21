'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';

const HIDDEN_ON = ['/resume'];
const LIGHT_BG_PATHS = ['/projects/bank-reconciliation', '/projects/vendor-invoice-center'];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) return null;

  const isLightBg = LIGHT_BG_PATHS.some((p) => pathname.startsWith(p));

  const wrapper = isLightBg
    ? 'flex items-center bg-white/85 backdrop-blur border border-gray-200/80 rounded-full p-1 gap-0.5 shadow-sm'
    : 'flex items-center bg-white/8 backdrop-blur-sm border border-white/15 rounded-full p-1 gap-0.5';
  const activeCls = isLightBg ? 'bg-black text-white' : 'bg-white text-black';
  const inactiveCls = isLightBg ? 'text-gray-500 hover:text-black' : 'text-gray-400 hover:text-white';

  return (
    <div className="fixed top-6 right-6 z-[60] print:hidden">
      <div className={wrapper}>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${lang === 'en' ? activeCls : inactiveCls}`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLang('zh')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${lang === 'zh' ? activeCls : inactiveCls}`}
          aria-label="切换为中文"
        >
          中文
        </button>
      </div>
    </div>
  );
}

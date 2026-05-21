'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassSurface from '@/components/effects/GlassSurface';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { t } = useLanguage();

  const navItems = [
    { name: t('Home', '首页'), path: '/', isIcon: true },
    { name: t('Work', '作品'), path: '/projects' },
    { name: t('Gallery', '画廊'), path: '/gallery' },
    { name: t('About', '关于'), path: '/about' },
  ];

  const lightBgPages = ['/projects/bank-reconciliation', '/projects/vendor-invoice-center'];
  const isLightBg = lightBgPages.some(p => pathname.startsWith(p));

  const textBase   = isLightBg ? 'text-gray-400 hover:text-gray-900' : 'text-white/70 hover:text-white';
  const textActive = isLightBg ? 'text-gray-900' : 'text-white';
  const iconColor  = isLightBg ? 'text-gray-700' : 'text-white';
  const underline  = isLightBg ? 'bg-gray-800'   : 'bg-white';

  const navContent = (
    <ul className="flex items-center gap-16">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        const isHovered = hoveredPath === item.path;

        return (
          <li key={item.path}>
            <Link
              href={item.path}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative block"
            >
              {item.isIcon ? (
                <div className={`w-5 h-5 transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={iconColor}
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
              ) : (
                <div className="relative py-1">
                  <span className={`text-sm font-light tracking-wide transition-all duration-300 ${
                    isActive ? textActive : textBase
                  }`}>
                    {item.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] ${underline} transition-all ease-out ${
                      isActive
                        ? 'w-full opacity-100'
                        : isHovered
                          ? 'w-full opacity-80'
                          : 'w-0 opacity-0'
                    }`}
                    style={{
                      transitionDuration: '0.6s',
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  />
                </div>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {isLightBg ? (
          <nav className="backdrop-blur-xl rounded-full border border-gray-200/60 bg-white/70 shadow-lg px-16 py-4">
            {navContent}
          </nav>
        ) : (
          <GlassSurface
            borderRadius={50}
            backgroundOpacity={0.1}
            saturation={1}
            borderWidth={0.07}
            brightness={50}
            opacity={0.93}
            blur={11}
            displace={0.5}
            distortionScale={-180}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            style={{ padding: '1rem 4rem' }}
          >
            {navContent}
          </GlassSurface>
        )}
      </motion.div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import CircularGallery from '@/components/effects/CircularGallery';
import { useLanguage } from '@/lib/LanguageContext';

// GitHub Pages 部署用 basePath="/Portfolio"，本地 dev 时为空
const BASE = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

type DeckId = 'wumiao' | 'shici';

type LocalizedText = { en: string; zh: string };

type Deck = {
  id: DeckId;
  title: LocalizedText;
  subtitle: LocalizedText;
  cover: string;
  files: string[];
};

const decks: Deck[] = [
  {
    id: 'wumiao',
    title: { en: 'Wumiao', zh: '武庙' },
    subtitle: { en: 'Ten Sages of War · Legendary Generals', zh: '武庙十哲 · 千古名将' },
    cover: '姜子牙-candidate-2.PNG',
    files: [
      '姜子牙-candidate-2.PNG',
      '孙武-candidate-1.PNG',
      '吴起-candidate-2.PNG',
      '田穰苴-candidate-1.PNG',
      '白起-candidate-2.PNG',
      '乐毅-candidate-2.PNG',
      '张良-candidate-2.PNG',
      '韩信-candidate-2.PNG',
      '诸葛亮-candidate-2.PNG',
      '李靖-candidate-4.PNG',
      '李勣-candidate-1.PNG',
    ],
  },
  {
    id: 'shici',
    title: { en: 'Tang Poets', zh: '诗词' },
    subtitle: { en: 'Masters of Tang Poetry · Enduring Spirit', zh: '唐诗大家 · 风骨流芳' },
    cover: '李白-03-长卷狂草.PNG',
    files: [
      '李白-03-长卷狂草.PNG',
      '杜甫-candidate-1.PNG',
      '王维-candidate-1.PNG',
      '孟浩然-candidate-2.PNG',
      '王昌龄-candidate-2.PNG',
      '白居易-candidate-1.PNG',
      '刘禹锡-candidate-2.PNG',
      '杜牧-candidate-2.PNG',
      '李商隐-candidate-1.PNG',
    ],
  },
];

const buildUrl = (file: string) => `${BASE}/images/ai-gallery/${encodeURIComponent(file)}`;

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<DeckId | null>(null);
  const selectedDeck = decks.find(d => d.id === selectedId);

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="relative min-h-screen bg-black">
        {!selectedDeck ? (
          <DeckSelection onSelect={setSelectedId} />
        ) : (
          <DeckGallery deck={selectedDeck} onBack={() => setSelectedId(null)} />
        )}
      </main>
    </>
  );
}

function DeckSelection({ onSelect }: { onSelect: (id: DeckId) => void }) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-32 pb-24">
      <div className="flex flex-col items-center max-w-3xl mb-20">
        <div className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6">AI image</div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-[0.15em] text-center">
          {t('Likeness, Reimagined', '还像于人')}
        </h1>
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 text-center font-medium">
          {t(
            'AI image generation is, at its core, a redistribution of the right to create likeness.',
            'AI 生图，本质上是一次"造像权"的再分配。'
          )}
        </p>
        <div className="text-white/55 text-sm md:text-base leading-loose space-y-4 text-left">
          <p>
            {t(
              'Turning the picture in your head into one on the page used to demand a heavy price — craft, materials, sanctioned subjects, or enough money to hire someone. That threshold filtered out the visual expression of almost everyone.',
              '过去把"脑中的画"变成"眼前的图"，要付出沉重的代价——技艺、材料、被允许的题材，或者得有钱请人画。这道门槛筛掉了绝大多数人的视觉表达。'
            )}
          </p>
          <p>
            {t(
              'AI pushes that cost close to zero — being able to imagine almost equals being able to create a likeness. The bottleneck is no longer "can it be made", but "what do you actually want to see".',
              'AI 把这个成本压到接近于零——"能想"几乎就等于"能造像"。瓶颈不再是"做不做得出"，而是"你到底想看什么"。'
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center xl:flex-row gap-32 xl:gap-96">
        {decks.map(deck => (
          <DeckStack key={deck.id} deck={deck} onSelect={() => onSelect(deck.id)} />
        ))}
      </div>
    </div>
  );
}

// 首尾两端展开：idx 0 在右端、idx N-1 在左端，中间均匀分布
const HALF_FAN_DEG = 40; // 单侧最大角度，总扇形 80°
const HALF_REST_DEG = 1.5; // 默认堆叠时的微小展开

function DeckStack({ deck, onSelect }: { deck: Deck; onSelect: () => void }) {
  const { lang, t } = useLanguage();
  const [hover, setHover] = useState(false);
  const covers = deck.files;
  const n = covers.length;

  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex flex-col items-center gap-20"
    >
      <div className="relative w-48 h-72 md:w-56 md:h-80">
        {covers.map((file, idx) => {
          // t: 0 → 1, idx 0 = +1 (右端), idx N-1 = -1 (左端)
          const pos = n > 1 ? 1 - (2 * idx) / (n - 1) : 0;
          const rot = pos * (hover ? HALF_FAN_DEG : HALF_REST_DEG);
          return (
            <div
              key={file}
              className="absolute inset-0 rounded-xl overflow-hidden border border-white/20 shadow-lg shadow-black/50 transition-transform duration-700 ease-out"
              style={{
                transform: `rotate(${rot}deg)`,
                transformOrigin: '50% 100%',
                zIndex: n - idx,
              }}
            >
              <img
                src={buildUrl(file)}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <div className="text-white text-2xl md:text-3xl font-bold tracking-[0.3em]">{deck.title[lang]}</div>
        <div className="text-white/50 text-xs md:text-sm mt-2 tracking-wider">{deck.subtitle[lang]}</div>
        <div className="text-white/30 text-xs mt-1">{t(`${n} pieces`, `${n} 张`)}</div>
      </div>
    </button>
  );
}

function DeckGallery({ deck, onBack }: { deck: Deck; onBack: () => void }) {
  const { t } = useLanguage();
  const items = deck.files.map(file => ({ image: buildUrl(file), text: '' }));
  return (
    <>
      <button
        onClick={onBack}
        className="fixed top-24 left-6 z-40 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm border border-white/20 hover:bg-white/20 transition"
      >
        {t('← Back', '← 返回')}
      </button>
      <div className="fixed inset-0 w-screen h-screen">
        <CircularGallery
          items={items}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 24px Inter, sans-serif"
          scrollSpeed={1}
          scrollEase={0.05}
          planeWidth={600}
          planeHeight={900}
        />
      </div>
    </>
  );
}

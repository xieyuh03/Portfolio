'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { legacyAdditional } from '@/lib/legacyAdditional.generated';
import { legacyCodeContent } from '@/lib/legacyCodeContent.generated';
import { legacyMedia } from '@/lib/legacyMedia.generated';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type CodeCollection =
  | typeof legacyCodeContent.microsoftEn
  | typeof legacyCodeContent.transsionEn
  | typeof legacyCodeContent.transsionZh
  | typeof legacyCodeContent.mitoolsEn;

function TextItem({
  tag,
  text,
  accent,
}: {
  tag: string;
  text: string;
  accent: string;
}) {
  if (tag === 'h1') {
    return (
      <h1 className="mb-6 mt-12 text-3xl font-bold leading-tight first:mt-0 md:text-4xl">
        {text}
      </h1>
    );
  }

  if (tag === 'h2') {
    return (
      <h2
        className="mb-5 mt-16 border-t border-white/20 pt-8 text-2xl font-bold md:text-3xl"
        style={{ color: accent }}
      >
        {text}
      </h2>
    );
  }

  if (tag === 'h3') {
    return <h3 className="mb-3 mt-10 text-xl font-semibold">{text}</h3>;
  }

  if (tag === 'h4' || tag === 'h5' || tag === 'h6') {
    return <h4 className="mb-3 mt-7 text-base font-semibold">{text}</h4>;
  }

  if (tag === 'li') {
    return (
      <li className="ml-5 list-disc text-sm leading-7 text-white/72 md:text-base">
        {text}
      </li>
    );
  }

  return (
    <p className="mb-4 text-sm leading-7 text-white/72 md:text-base md:leading-8">
      {text}
    </p>
  );
}

function CodeCase({
  items,
  background,
  accent,
}: {
  items: CodeCollection;
  background: string;
  accent: string;
}) {
  return (
    <>
      <Navigation />
      <main
        className="min-h-screen px-5 pb-24 pt-36 text-white md:px-8 md:pt-40"
        style={{ backgroundColor: background }}
      >
        <article className="mx-auto max-w-[900px]">
          {items.map((item, index) => {
            if (item.kind === 'image') {
              return (
                <figure
                  key={`${item.src}-${index}`}
                  className="my-8 overflow-hidden rounded-xl bg-black/20"
                >
                  <img
                    src={`${basePath}${item.src}`}
                    alt={item.alt}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    className="h-auto w-full"
                  />
                </figure>
              );
            }

            if (item.kind === 'video') {
              return (
                <video
                  key={`${item.src}-${index}`}
                  controls
                  preload="metadata"
                  className="my-8 aspect-video w-full rounded-xl bg-black object-contain"
                >
                  <source src={`${basePath}${item.src}`} type="video/mp4" />
                </video>
              );
            }

            return (
              <TextItem
                key={`${item.y}-${item.text}-${index}`}
                tag={item.tag}
                text={item.text}
                accent={accent}
              />
            );
          })}
        </article>
      </main>
    </>
  );
}

function ImageSequence({
  images,
  background,
  videos = [],
  postImages = [],
  documents = [],
}: {
  images: readonly string[];
  background: string;
  videos?: readonly string[];
  postImages?: readonly string[];
  documents?: readonly { label: string; src: string }[];
}) {
  return (
    <>
      <Navigation />
      <main
        className="min-h-screen pb-20 pt-28 md:pt-32"
        style={{ backgroundColor: background }}
      >
        <div className="mx-auto max-w-[1440px]">
          {images.map((src, index) => (
            <img
              key={src}
              src={`${basePath}${src}`}
              alt={`Original case study page ${index + 1}`}
              loading={index < 3 ? 'eager' : 'lazy'}
              className="block h-auto w-full"
            />
          ))}
          {videos.map((src) => (
            <video
              key={src}
              controls
              preload="metadata"
              className="aspect-video w-full bg-black object-contain"
            >
              <source src={`${basePath}${src}`} type="video/mp4" />
            </video>
          ))}
          {postImages.map((src, index) => (
            <img
              key={src}
              src={`${basePath}${src}`}
              alt={`Original case study page after video ${index + 1}`}
              loading="lazy"
              className="block h-auto w-full"
            />
          ))}
          {documents.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 px-5 py-10">
              {documents.map((document) => (
                <a
                  key={document.src}
                  href={
                    document.src.startsWith('http')
                      ? document.src
                      : `${basePath}${document.src}`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#1267d6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f56b6]"
                >
                  {document.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

function ArtCenterGraphics({ lang }: { lang: 'en' | 'zh' }) {
  const [selected, setSelected] = useState<'graphic' | 'inspiration'>(
    'inspiration',
  );
  const options = [
    {
      id: 'graphic' as const,
      label: lang === 'zh' ? 'Graphic Design' : 'Graphic Design',
      card: '/images/legacy-source/artcenter/graphic-card.png',
      images:
        lang === 'zh'
          ? legacyAdditional['graphic-design'].zh
          : legacyAdditional['graphic-design'].en,
    },
    {
      id: 'inspiration' as const,
      label: lang === 'zh' ? 'Design Inspiration' : 'Design Inspiration',
      card: '/images/legacy-source/artcenter/inspiration-card.png',
      images: ['/images/legacy-source/artcenter/inspiration-content.webp'],
    },
  ];
  const active = options.find((option) => option.id === selected)!;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f7f8fa] pb-20 pt-28 text-[#111318] md:pt-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8">
          <h1 className="py-10 text-center text-5xl font-[720] tracking-[0.2em] md:text-7xl">
            Graphics
          </h1>

          <div
            className="grid gap-6 md:grid-cols-2"
            role="group"
            aria-label={lang === 'zh' ? '图形项目切换' : 'Graphic project switcher'}
          >
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected === option.id}
                onClick={() => setSelected(option.id)}
                className="group text-left"
              >
                <div
                  className={`overflow-hidden rounded-[28px] border-4 transition-colors ${
                    selected === option.id
                      ? 'border-[#171318]'
                      : 'border-transparent group-hover:border-black/20'
                  }`}
                >
                  <img
                    src={`${basePath}${option.card}`}
                    alt={option.label}
                    width={3300}
                    height={2074}
                    className="aspect-[1.59/1] h-auto w-full object-cover"
                  />
                </div>
                <div
                  className={`mx-auto mt-5 h-3 w-[92%] transition-colors ${
                    selected === option.id ? 'bg-[#1d191b]' : 'bg-transparent'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="mt-14" key={active.id}>
            {active.images.map((src, index) => (
              <img
                key={src}
                src={`${basePath}${src}`}
                alt={`${active.label} ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="block h-auto w-full"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default function LegacyProjectRenderer({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const additional =
    legacyAdditional[slug as keyof typeof legacyAdditional];

  if (slug === 'design-inspiration') {
    return <ArtCenterGraphics lang={lang} />;
  }

  if (additional) {
    const images = lang === 'zh' ? additional.zh : additional.en;
    const videos =
      slug === 'garbage-interaction'
          ? ['/videos/legacy-additional/garbage-interaction.mp4']
          : slug === 'doggo'
            ? [
                '/videos/legacy-additional/doggo-prototype-1.mp4',
                '/videos/legacy-additional/doggo-prototype-2.mp4',
              ]
          : [];
    const documents =
      slug === 'doggo'
        ? [
            {
              label: 'Final report',
              src: '/legacy-archive/additional/doggo-final-report.pdf',
            },
            {
              label: 'Business plan',
              src: '/legacy-archive/additional/doggo-business-plan.pdf',
            },
          ]
        : slug === 'restaurant-booking'
          ? [
              {
                label: 'Read full report',
                src: '/legacy-archive/additional/restaurant-booking-report.pdf',
              },
            ]
          : slug === 'hotel-booking'
            ? [
                {
                  label: 'Read full report',
                  src: '/legacy-archive/additional/hotel-booking-report.pdf',
                },
              ]
            : slug === 'foodyards'
              ? [
                  {
                    label: 'Open Adobe XD prototype',
                    src: 'https://xd.adobe.com/view/8f88ac50-269c-4714-a0b3-f9d645768097-dadb/screen/1636e6ba-9b72-4b1e-b0f5-a0f1c0d8fd16',
                  },
                ]
            : [];

    return (
      <ImageSequence
        images={images}
        background="#f7f8fa"
        videos={videos}
        documents={documents}
      />
    );
  }

  if (slug === 'microsoft-internship-2021') {
    return (
      <CodeCase
        items={legacyCodeContent.microsoftEn}
        background="#000000"
        accent="#ffffff"
      />
    );
  }

  if (slug === 'transsion-product-design') {
    return (
      <CodeCase
        items={
          lang === 'zh'
            ? legacyCodeContent.transsionZh
            : legacyCodeContent.transsionEn
        }
        background="#000000"
        accent="#42a5ff"
      />
    );
  }

  if (slug === 'maxval-saas-product-design') {
    return (
      <ImageSequence
        images={lang === 'zh' ? legacyMedia.maxvalZh : legacyMedia.maxvalEn}
        background="#121212"
      />
    );
  }

  if (slug === 'neighborhood-app-design') {
    return (
      <ImageSequence
        images={
          lang === 'zh'
            ? legacyMedia.neighborhoodZh
            : legacyMedia.neighborhoodEn
        }
        background="#f6faf8"
      />
    );
  }

  return (
    <ImageSequence
      images={[
        '/images/legacy-source/mitools-split/before-01.webp',
        '/images/legacy-source/mitools-split/before-02.webp',
        '/images/legacy-source/mitools-split/before-03.webp',
      ]}
      videos={['/videos/mitools/improvement-summary.mp4']}
      postImages={['/images/legacy-source/mitools-split/after-01.webp']}
      background="#0b345e"
    />
  );
}

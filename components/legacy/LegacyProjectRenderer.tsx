'use client';

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
  notice,
}: {
  items: CodeCollection;
  background: string;
  accent: string;
  notice?: string;
}) {
  return (
    <>
      <Navigation />
      <main
        className="min-h-screen px-5 pb-24 pt-36 text-white md:px-8 md:pt-40"
        style={{ backgroundColor: background }}
      >
        <article className="mx-auto max-w-[900px]">
          {notice && (
            <div className="mb-8 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white/60">
              {notice}
            </div>
          )}

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
  documents = [],
}: {
  images: readonly string[];
  background: string;
  videos?: readonly string[];
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
          {documents.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 px-5 py-10">
              {documents.map((document) => (
                <a
                  key={document.src}
                  href={`${basePath}${document.src}`}
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

export default function LegacyProjectRenderer({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const additional =
    legacyAdditional[slug as keyof typeof legacyAdditional];

  if (additional) {
    const videos =
      slug === 'daily-ui'
        ? ['/videos/legacy-additional/daily-ui.mp4']
        : slug === 'garbage-interaction'
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
            : [];

    return (
      <ImageSequence
        images={lang === 'zh' ? additional.zh : additional.en}
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
        notice={
          lang === 'zh'
            ? '旧站仅提供英文版本；以下内容按原文完整保留。'
            : undefined
        }
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
        '/images/legacy-source/mitools-content-1.png',
        '/images/legacy-source/mitools-content-2.png',
        '/images/legacy-source/mitools-content-3.png',
      ]}
      background="#0b345e"
    />
  );
}

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import {
  Chapter,
  MetaGrid,
  ReadingProgress,
  Reveal,
  SectionHeading,
} from '@/components/case-study/PresentationCaseStudy';
import { dribbbleShots } from '@/lib/dribbbleShots.generated';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const cleanTitle = (title: string) => {
  const cleaned = title.replace(/^View\s+/i, '').trim();
  return cleaned === 'Shot Link' ? 'Social share' : cleaned;
};

export default function DribbbleArchivePage() {
  return (
    <>
      <ReadingProgress label="Reading progress" />
      <Navigation />
      <main className="min-h-screen bg-[#f7f8fa] text-[#111318]">
        <Chapter tone="surface" className="pt-36 md:pt-44 lg:pt-48">
          <Reveal className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#626872] transition-colors hover:text-[#1267d6]"
            >
              <span aria-hidden="true">←</span>
              All projects
            </Link>
          </Reveal>

          <div className="grid items-end gap-12 lg:grid-cols-[0.62fr_0.38fr]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e949e]">
                <span className="h-px w-10 bg-[#c9cdd4]" aria-hidden="true" />
                <span>Visual Design · Daily UI Archive</span>
              </div>
              <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-[720] leading-[0.92] tracking-[-0.07em]">
                Dribbble
                <br />
                <span className="text-[#ea4c89]">Archive</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#626872] md:text-xl">
                Seventeen interface and visual-design explorations preserved
                from the original portfolio and Dribbble profile.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href="https://dribbble.com/xieyuh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ea4c89] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d9437d]"
              >
                View original profile ↗
              </a>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <MetaGrid
              items={[
                { label: 'Collection', value: '17 shots' },
                { label: 'Focus', value: 'Mobile UI · Visual design' },
                { label: 'Series', value: 'Daily UI 001–017' },
                { label: 'Archive', value: 'Local media + source links' },
              ]}
            />
          </Reveal>
        </Chapter>

        <Chapter tone="paper">
          <SectionHeading
            index="01"
            eyebrow="Complete collection"
            title="Every shot from the original Dribbble profile."
            body="Each piece is stored locally for the portfolio and links back to its original Dribbble page."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dribbbleShots.map((shot, index) => (
              <Reveal key={shot.sourceUrl} delay={(index % 6) * 0.03}>
                <a
                  href={shot.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-[24px] border border-[#dfe2e7] bg-white shadow-[0_14px_36px_rgba(17,19,24,0.05)] transition-transform hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#eef1f5]">
                    <img
                      src={`${basePath}${shot.image}`}
                      alt={cleanTitle(shot.title)}
                      width={1000}
                      height={750}
                      loading={index < 6 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ea4c89]">
                      Daily UI · {String(index + 1).padStart(3, '0')}
                    </div>
                    <h2 className="mt-3 text-lg font-semibold capitalize text-[#111318]">
                      {cleanTitle(shot.title)}
                    </h2>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Chapter>
      </main>
    </>
  );
}

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import {
  Chapter,
  MetaGrid,
  ReadingProgress,
  Reveal,
  SectionHeading,
} from '@/components/case-study/PresentationCaseStudy';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const pdfPath = `${basePath}/legacy-archive/visual-design-portfolio.pdf`;

export default function VisualDesignPortfolioPage() {
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

          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8e949e]">
                <span className="h-px w-10 bg-[#c9cdd4]" aria-hidden="true" />
                <span>Branding · Visual Design Archive</span>
              </div>
              <h1 className="text-[clamp(3.3rem,7vw,6.4rem)] font-[720] leading-[0.94] tracking-[-0.065em]">
                Central Park
                <br />
                Visual Identity
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#626872] md:text-xl">
                A 47-page Paula Scher-inspired visual identity exploration for
                Central Park, preserved as the original presentation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1267d6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f56b6]"
                >
                  Open PDF ↗
                </a>
                <a
                  href={pdfPath}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[#c9cdd4] px-5 py-3 text-sm font-semibold text-[#626872] transition-colors hover:border-[#1267d6] hover:text-[#1267d6]"
                >
                  Download PDF
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="aspect-video overflow-hidden rounded-[28px] border border-[#dfe2e7] bg-white shadow-[0_24px_70px_rgba(17,19,24,0.10)]">
                <img
                  src={`${basePath}/images/legacy-pdf/cover.png`}
                  alt="Central Park visual identity portfolio cover"
                  width={1920}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <MetaGrid
              items={[
                { label: 'Format', value: '47-page presentation' },
                { label: 'Discipline', value: 'Branding · Typography · Identity' },
                { label: 'Inspiration', value: 'Paula Scher' },
                { label: 'Archive', value: 'Original PDF preserved' },
              ]}
            />
          </Reveal>
        </Chapter>

        <Chapter tone="paper">
          <SectionHeading
            index="01"
            eyebrow="Original presentation"
            title="Read the complete 47-page design process."
            body="The embedded document preserves every page, from concept and visual research to logo explorations, typography, color, applications, and final iterations."
          />

          <Reveal className="mt-10">
            <div className="relative left-1/2 w-[min(1440px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-[28px] border border-[#dfe2e7] bg-white shadow-[0_24px_70px_rgba(17,19,24,0.08)]">
              <iframe
                src={`${pdfPath}#view=FitH`}
                title="Central Park visual identity portfolio PDF"
                className="h-[78vh] min-h-[680px] w-full border-0"
              />
            </div>
          </Reveal>
        </Chapter>
      </main>
    </>
  );
}

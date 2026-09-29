import { notFound } from 'next/navigation';
import LegacyProjectRenderer from '@/components/legacy/LegacyProjectRenderer';
import {
  legacyProjectMap,
  legacyProjects,
} from '@/lib/legacyProjects';
import { legacyProjectCards } from '@/lib/legacyProjectCards';

export function generateStaticParams() {
  return [
    ...legacyProjects.map((project) => ({ slug: project.slug })),
    ...legacyProjectCards
      .filter((project) => project.id >= 22)
      .map((project) => ({
        slug: project.href.split('/').filter(Boolean).at(-1)!,
      })),
  ];
}

export default async function LegacyArchiveProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const isAdditional = legacyProjectCards.some(
    (project) => project.href === `/projects/archive/${slug}`,
  );

  if (!legacyProjectMap[slug] && !isAdditional) {
    notFound();
  }

  return <LegacyProjectRenderer slug={slug} />;
}

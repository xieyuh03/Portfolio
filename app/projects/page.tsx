'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SoftAurora from '@/components/effects/SoftAurora';
import FluidBackground from '@/components/FluidBackground';
import TiltWrapper from '@/components/effects/TiltWrapper';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

// Featured project data
const projects = [
  {
    id: 8,
    title: 'MADS UI Agent',
    description: 'Built to close the gap between design specs and production code in M365 Admin Center. Replaced the token-heavy Figma MCP approach with a code-based component library and AI restoration skill — reducing UI rebuild time from 1 hour to under 3 minutes.',
    tags: ['Design System', 'AI Workflow', 'Fluent UI', 'React'],
    year: '2026',
    image: `${basePath}/images/MADS agent/Playground - Yuheng.png`,
    imageSize: '105%',
  },
  {
    id: 5,
    title: 'Planetary Orbit',
    description: 'A design exploration that evolved from avatar decoration into a solar system orbital visualization. Segmented gradient trails and varied motion rhythms create a sense of spatial depth, with dynamic trailing effects that change with speed. Click to reverse the rotation direction.',
    tags: ['Motion Design', 'Interactive Animation', 'React'],
    year: '2026',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80',
  },
  {
    id: 6,
    title: 'Modern Bank Reconciliation',
    description: 'A redesign of the bank reconciliation feature for Microsoft 365 Finance ERP. Reduced reconciliation time by 65% and error rate by 78% through an intelligent matching engine and optimized workflow.',
    tags: ['UX Design', 'Enterprise', 'M365 Finance'],
    year: '2025',
    image: `${basePath}/images/Frontimage.png`,
    imageSize: '105%',
  },
  {
    id: 7,
    title: 'Vendor Invoice Center',
    description: 'A workspace redesign for Microsoft Dynamics 365 Finance that visualizes and streamlines vendor invoice processing steps. Achieved 100% positive customer feedback by making invoice workflows more intuitive and actionable for AP teams.',
    tags: ['UX Design', 'Enterprise', 'D365 Finance'],
    year: '2023',
    image: `${basePath}/images/vendor-invoice-center/Front page.png`,
  },
];

// Earlier work (student-era projects)
const earlierProjects = [
  {
    slug: 'digesta',
    title: 'Digesta',
    description: 'A mobile app concept for managing and discovering recipes through intuitive interaction design.',
    tags: ['UX Design', 'Mobile', 'iOS'],
    year: '2022',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  },
  {
    slug: 'foodyards',
    title: 'FoodYards',
    description: 'A local food discovery and ordering platform designed to connect communities with nearby restaurants.',
    tags: ['UX Design', 'Food Tech'],
    year: '2022',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  },
  {
    slug: 'maxval',
    title: 'MaxVal',
    description: 'A portfolio and project management tool redesign focused on clarity and efficiency for creative teams.',
    tags: ['UX Design', 'Productivity'],
    year: '2021',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    slug: 'neighbourhood',
    title: 'Neighbourhood',
    description: 'A community engagement platform helping residents discover local events and connect with neighbors.',
    tags: ['UX Design', 'Community'],
    year: '2021',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
  },
  {
    slug: 'hotel-booking-interface',
    title: 'Hotel Booking Interface',
    description: 'A streamlined hotel booking experience redesign with focus on reducing friction in the reservation flow.',
    tags: ['UX Design', 'Travel'],
    year: '2021',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    slug: 'wangyi',
    title: '网易云音乐重设计',
    description: 'A redesign exploration of NetEase Cloud Music, improving discovery and social listening experiences.',
    tags: ['UX Design', 'Music', 'iOS'],
    year: '2021',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&q=80',
  },
  {
    slug: 'garbage-interaction',
    title: 'Garbage Interaction',
    description: 'An interactive installation concept exploring human interaction with waste sorting through playful design.',
    tags: ['Interaction Design', 'Installation'],
    year: '2020',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80',
  },
  {
    slug: 'transformable-wheel',
    title: 'Transformable Wheel',
    description: 'A physical-digital interaction concept exploring adaptive interfaces through tangible computing.',
    tags: ['Interaction Design', 'Physical Computing'],
    year: '2020',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    slug: 'doggo',
    title: 'Doggo',
    description: 'A pet care and social app connecting dog owners in the same neighborhood for walks and playdates.',
    tags: ['UX Design', 'Mobile', 'Social'],
    year: '2020',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-[#0a0a0a] pointer-events-none">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={0.6}
          color1="#f7f7f7"
          color2="#cc00ff"
          noiseFrequency={2}
          noiseAmplitude={1.5}
          bandHeight={0.2}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction={false}
        />
      </div>
      <FluidBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-white"></div>
              <span className="text-sm uppercase tracking-wider text-gray-400">
                Selected Work
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Projects & Case Studies
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              A collection of work spanning product design, development, and creative experiments.
            </p>
          </motion.div>

          {/* Vertical Full-Width Layout */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <TiltWrapper key={project.id} className="group relative" rotateAmplitude={1.5} scaleOnHover={1.02}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <Link
                    href={
                      project.id === 8 ? '/projects/mads-ui-simplified' :
                      project.id === 7 ? '/projects/vendor-invoice-center' :
                      project.id === 6 ? '/projects/bank-reconciliation' :
                      '/projects/planetary-orbit'
                    }
                    className="block relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Image Section */}
                    <div
                      className="relative h-[400px] md:h-[500px] overflow-hidden rounded-t-3xl transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundColor: '#0a0a0a',
                        backgroundImage: `url(${encodeURI(project.image)})`,
                        backgroundSize: project.imageSize ?? 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/30 via-blue-500/20 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-6 right-6">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    {/* Content Section */}
                    <div className="relative p-8 md:p-12">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-4 py-1.5 text-xs bg-white/10 rounded-full border border-white/20 group-hover:border-white/40 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-400 mb-8 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-medium rounded-lg group-hover:bg-gray-100 transition-all duration-300">
                        <span>View Case</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </TiltWrapper>
            ))}
          </div>

          {/* Earlier Work Section —— 暂时隐藏 */}
          {false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-32"
          >
            <div className="flex items-center gap-4 mb-16">
              <div className="flex-1 h-px bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-sm uppercase tracking-wider text-gray-500">Earlier Work</span>
                <div className="w-8 h-px bg-white/30" />
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-3 gap-5">
              {earlierProjects.map((p, i) => {
                const isWide = i === 0 || i === 6 || i === 8;
                return (
                  <motion.div
                    key={p.slug}
                    className={`h-full ${isWide ? 'col-span-2' : 'col-span-1'}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  >
                    <TiltWrapper className="group h-full" rotateAmplitude={3} scaleOnHover={1.02}>
                      <Link href={`/projects/${p.slug}`} className="block h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500">
                        <div className="relative overflow-hidden h-52">
                          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <span className="absolute top-3 right-3 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs border border-white/20">{p.year}</span>
                        </div>
                        <div className="p-4">
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {p.tags.map(t => <span key={t} className="px-2.5 py-1 text-xs bg-white/8 rounded-full border border-white/15 group-hover:border-white/30 transition-colors">{t}</span>)}
                          </div>
                          <h3 className="text-base font-bold mb-1 group-hover:text-white transition-colors">{p.title}</h3>
                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{p.description}</p>
                        </div>
                      </Link>
                    </TiltWrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          )}

        </div>
      </main>
    </>
  );
}

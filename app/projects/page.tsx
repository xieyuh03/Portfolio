'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FluidBackground from '@/components/FluidBackground';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

// Project data
const projects = [
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

export default function ProjectsPage() {
  return (
    <>
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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <Link
                  href={
                    project.id === 7 ? '/projects/vendor-invoice-center' :
                    project.id === 6 ? '/projects/bank-reconciliation' :
                    '/projects/planetary-orbit'
                  }
                  className="block relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    {/* Cover Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Gradient Glow (Bottom Right) */}
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/30 via-blue-500/20 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Year Badge (Top Right) */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-8 md:p-12">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 text-xs bg-white/10 rounded-full border border-white/20 group-hover:border-white/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-medium rounded-lg group-hover:bg-gray-100 transition-all duration-300">
                      <span>View Case</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-400 mb-6">
              Interested in working together?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}

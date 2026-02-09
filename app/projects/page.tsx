'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import FluidBackground from '@/components/FluidBackground';

// 临时项目数据（之后会从 Sanity CMS 获取）
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: '现代化电商解决方案，提供无缝结账体验和实时库存管理系统',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: '团队协作工具，支持实时同步和任务分配管理',
    tags: ['React', 'Firebase'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: '智能聊天助手，具备上下文理解和自然语言处理能力',
    tags: ['OpenAI', 'Node.js'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: '交互式数据分析平台，实时数据流和可定制图表系统',
    tags: ['D3.js', 'React', 'WebSocket'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
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
                <a
                  href={`/projects/${project.id}`}
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
                </a>
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
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}

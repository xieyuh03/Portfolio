'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';

// 临时经历数据（之后会从 Sanity CMS 获取）
const experiences = [
  {
    year: '2024',
    title: '高级前端工程师',
    company: '科技公司 A',
    description: '负责大型 Web 应用的架构设计和开发，使用 React 和 Next.js 构建高性能应用。',
  },
  {
    year: '2023',
    title: '前端工程师',
    company: '互联网公司 B',
    description: '开发和维护多个企业级应用，优化性能并提升用户体验。',
  },
  {
    year: '2022',
    title: '初级前端开发',
    company: '创业公司 C',
    description: '参与产品从 0 到 1 的开发过程，积累全栈开发经验。',
  },
];

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 80 },
  { name: 'Three.js', level: 75 },
];

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* 个人简介 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              关于我
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              我是一名充满热情的全栈开发者，专注于创建美观、高效的 Web 应用。
              我热爱学习新技术，享受将创意转化为现实的过程。
            </p>
          </motion.div>

          {/* 技能展示 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">技能专长</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 工作经历时间线 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">工作经历</h2>
            <div className="max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="relative pl-8 pb-12 border-l-2 border-purple-500/30 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full -translate-x-[9px] ring-4 ring-black" />

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">让我们一起合作</h2>
            <p className="text-gray-400 mb-8">
              如果你有项目想要合作，或者只是想打个招呼，欢迎联系我！
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg shadow-purple-500/50"
            >
              联系我
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}

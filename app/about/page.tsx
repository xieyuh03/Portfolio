'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import Threads from '@/components/effects/Threads';

type Role = {
  period: string;
  title: string;
  location?: string;
  bullets: string[];
};

type Company = {
  company: string;
  year: string; // 左轴显示的醒目起始年
  span: string; // 总跨度
  location: string;
  roles: Role[];
};

const experience: Company[] = [
  {
    company: 'Microsoft',
    year: '2022',
    span: '2022 — 至今',
    location: '上海, 中国',
    roles: [
      {
        period: '2022 — 至今',
        title: '产品设计',
        bullets: [
          '在微软参与产品体验设计与设计系统建设，与产品、工程团队协作推进核心功能的设计落地。',
        ],
      },
      {
        period: '2021.7 — 2021.8',
        title: '实习',
        location: '上海, 中国',
        bullets: [
          '洞察 B 端 Tax Service 的业务逻辑，结合用户画像及用户测试反馈，设计 Tax Calculation 复杂功能的引导教程，提升用户初次使用产品时的学习体验，降低学习成本。',
          '主导区块链金融项目的 Demo 设计，并通过可用性用户测试，验证并优化产品设计。',
        ],
      },
    ],
  },
  {
    company: '传音控股',
    year: '2021',
    span: '2021.5 — 2021.7',
    location: '上海, 中国',
    roles: [
      {
        period: '2021.5 — 2021.7',
        title: '交互设计',
        bullets: [
          '负责 Tecno 旗舰手机的 AR 名片应用，从 Beta 到上线的交互优化及推进，与产品经理、开发、测试紧密合作；通过 A/B Test 及可用性测试，分析既有设计缺陷，结合交互、视觉、动效，独立设计完成综合优化方案，提升名片填写流程的操作体验。',
          '通过用户测试和设计走查，优化 Oriamo 智能手表交互设计，定义交互逻辑和视觉呈现标准；综合市场分析和产品体验测试，输出折叠屏手机竞品分析报告。',
        ],
      },
    ],
  },
  {
    company: '上海爱钛技术咨询',
    year: '2020',
    span: '2020.7 — 2021.2',
    location: '上海, 中国',
    roles: [
      {
        period: '2020.7 — 2021.2',
        title: '产品设计',
        bullets: [
          '通过市场分析和用户调研，归纳用户基本诉求，结合商业模式，对公司 SaaS 产品定立设计策略和设计原则。',
          '洞察专业用户操作习惯与业务逻辑，重点优化核心交互逻辑及数据可视化展示，并负责从 0 到 1 的设计全流程工作；制定 Web 和小程序端界面实现标准，定义视觉语言和交互设计规范，并输出 Web 端高保真设计图。',
          '完善设计体系化建设，优化团队工作流程，搭建 Figma 线上组件库，提升 75% 工作效率；以成本意识与目标导向，与产品经理及开发工程师紧密合作，并根据用户测试反映的诉求和倾向，快速优化产品。',
        ],
      },
    ],
  },
];

type SchoolDegree = { title: string; major: string; note?: string };
type School = {
  year: string;
  span: string;
  school: string;
  location: string;
  degrees: SchoolDegree[];
};

const education: School[] = [
  {
    year: '2019',
    span: '2019.9 — 2021.12',
    school: '美国密西根大学安娜堡分校',
    location: '安娜堡, 美国',
    degrees: [
      { title: '理学硕士', major: '信息 · 用户体验设计与研究' },
      { title: '理学硕士', major: '设计科学', note: '前 5%' },
    ],
  },
  {
    year: '2015',
    span: '2015.9 — 2019.8',
    school: '上海交通大学 · 交大密西根联合学院',
    location: '上海, 中国',
    degrees: [
      { title: '理学学士', major: '机械工程 / 辅修 创业管理', note: '前 20%' },
    ],
  },
];

const skillGroups = [
  {
    title: 'UX 技能',
    items: [
      '网页端设计',
      'App 设计',
      '交互原型设计',
      '设计规范制定与维护',
      '用户调研及需求分析',
      '可用性测试',
      '设计思维',
      '包容性设计',
      'AR/VR',
    ],
  },
  {
    title: '设计工具',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Origami', 'Invision'],
  },
  {
    title: '编程技能',
    items: ['Python', 'HTML+CSS', 'JavaScript', 'Arduino', 'Matlab'],
  },
  {
    title: '3D 设计',
    items: ['Solidworks', 'Auto CAD', 'Unigraphic NX', 'Unity'],
  },
  {
    title: '语言',
    items: ['English', '中文'],
  },
];

const awards = [
  {
    year: '2020',
    span: '2020.9 — 10',
    title: 'Adobe 设计挑战',
    result: 'Second Prize',
    location: '安娜堡, 美国',
    description:
      '针对疫情下北美 food bank 人数激增情况，综合运用设计方法，设计线上预定领取食物 App，以消除潜在的社会歧视，优化领取食物救济的流程。',
  },
];

/* ---------- 子组件 ---------- */

function LeftAxis({
  year,
  span,
  title,
  location,
}: {
  year: string;
  span: string;
  title: string;
  location: string;
}) {
  return (
    <div>
      <div className="font-mono text-5xl md:text-6xl font-bold text-white/40 leading-[0.9] mb-2 tabular-nums">
        {year}
      </div>
      <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">{span}</p>
      <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{location}</p>
    </div>
  );
}

function TwoColRow({
  left,
  children,
  index = 0,
}: {
  left: React.ReactNode;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-10 py-10 border-t border-white/10 first:border-t-0"
    >
      <div className="md:col-span-4">{left}</div>
      <div className="md:col-span-8">{children}</div>
    </motion.div>
  );
}

function SectionHeading({ id, label, title }: { id?: string; label: string; title: string }) {
  return (
    <div id={id} className="mb-10 md:mb-12">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      {/* 背景降到 8%，减少与内容竞争 */}
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none">
        <Threads color={[0.4, 0.7, 1.0]} amplitude={1.2} distance={0.3} />
      </div>
      <Navigation />

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-24 md:mb-32"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">About</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05]">
              用户体验设计师，
              <br />
              目前在 <span className="text-blue-400">Microsoft</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
              专注于通过设计研究、交互原型与体系化的设计语言，把复杂的产品逻辑变成清晰、好用的体验。
              横跨 B 端工具产品与 C 端消费场景，从 0 到 1 的早期探索到成熟产品的迭代。
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="text-gray-600">●</span>
                上海, 中国
              </span>
              <span className="text-gray-700" aria-hidden>·</span>
              <a
                href="/contact"
                className="inline-flex items-center gap-1 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5"
              >
                联系我 <span aria-hidden>→</span>
              </a>
            </div>
          </motion.section>

          {/* 工作经历 */}
          <section className="mb-24 md:mb-32">
            <SectionHeading label="01" title="工作经历" />
            <div>
              {experience.map((c, i) => (
                <TwoColRow
                  key={c.company}
                  index={i}
                  left={
                    <LeftAxis
                      year={c.year}
                      span={c.span}
                      title={c.company}
                      location={c.location}
                    />
                  }
                >
                  <div className="space-y-8">
                    {c.roles.map((role, j) => (
                      <div key={j}>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                          <h4 className="text-lg font-semibold text-white">{role.title}</h4>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            {role.period}
                          </span>
                          {role.location && (
                            <span className="text-xs text-gray-500">· {role.location}</span>
                          )}
                        </div>
                        <ul className="space-y-2 text-gray-400 text-sm md:text-base leading-relaxed">
                          {role.bullets.map((b, k) => (
                            <li key={k} className="flex gap-3">
                              <span className="text-gray-600 select-none flex-shrink-0">—</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TwoColRow>
              ))}
            </div>
          </section>

          {/* 教育经历 */}
          <section className="mb-24 md:mb-32">
            <SectionHeading label="02" title="教育经历" />
            <div>
              {education.map((edu, i) => (
                <TwoColRow
                  key={edu.school}
                  index={i}
                  left={
                    <LeftAxis
                      year={edu.year}
                      span={edu.span}
                      title={edu.school}
                      location={edu.location}
                    />
                  }
                >
                  <ul className="space-y-4 text-sm md:text-base">
                    {edu.degrees.map((d, j) => (
                      <li key={j}>
                        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-1">
                          {d.title}
                          {d.note && (
                            <span className="ml-3 text-blue-400 normal-case tracking-normal">
                              · {d.note}
                            </span>
                          )}
                        </p>
                        <p className="text-base md:text-lg font-semibold text-white leading-snug">
                          {d.major}
                        </p>
                      </li>
                    ))}
                  </ul>
                </TwoColRow>
              ))}
            </div>
          </section>

          {/* 能力 */}
          <section className="mb-24 md:mb-32">
            <SectionHeading label="03" title="能力" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-white/20 hover:bg-white/[0.04] transition-colors ${
                    i === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {group.title}
                    </h3>
                    <span className="text-xs text-gray-600 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {group.items.map((item, j) => (
                      <span key={item}>
                        <span className="whitespace-nowrap">{item}</span>
                        {j < group.items.length - 1 && (
                          <span className="mx-2.5 text-gray-500" aria-hidden>·</span>
                        )}
                      </span>
                    ))}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 获奖 —— 紧凑内联，不再走重型两栏 */}
          <section className="mb-12">
            <SectionHeading label="04" title="获奖经历" />
            <div className="border-t border-white/10">
              {awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-6 py-6 border-b border-white/10 items-baseline"
                >
                  <span className="md:col-span-2 font-mono text-2xl md:text-3xl font-bold text-white/40 tabular-nums leading-none">
                    {award.year}
                  </span>
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {award.title}
                      </h3>
                      <span className="text-blue-400 text-sm font-medium">{award.result}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right text-xs text-gray-500 uppercase tracking-[0.15em]">
                    {award.span} · {award.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

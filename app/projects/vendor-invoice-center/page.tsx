'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
const img = (path: string) => `${basePath}/images/vendor-invoice-center/${path}`;

const fadeUp  = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const vp      = { once: true, margin: '-60px' } as const;
const ease    = { duration: 0.5, ease: 'easeOut' as const };

export default function VendorInvoiceCenterPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="min-h-screen bg-white pt-24">

        {/* Back Link */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-6 md:mb-8">
          <Link href="/projects" className="inline-flex items-center text-xs md:text-sm lg:text-base text-gray-500 hover:text-gray-700">
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <div className="max-w-[90vw] 2xl:max-w-[2000px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 2xl:gap-20 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.h1 variants={fadeUp} transition={ease}
                className="text-[28px] md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">
                Vendor Invoice Center
              </motion.h1>
              <motion.p variants={fadeUp} transition={{ ...ease, delay: 0.1 }}
                className="text-sm md:text-base lg:text-lg 2xl:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                Improving the productivity of Accounts Payable specialists and managers by visualizing
                and streamlining the vendor invoice processing steps and associated actions through
                innovative designs on the workspace homepage.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
                <img src={`${basePath}/images/modern-bank-reconciliation/Finance logo.png`}
                  alt="Dynamics 365 Finance" className="h-14 md:h-16 lg:h-18 w-auto" />
              </motion.div>
            </motion.div>

            {/* Right: single hero screenshot */}
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ ...ease, delay: 0.15 }}
              className="rounded-lg overflow-hidden shadow-xl">
              <img src={img('screenshot/Workspace - status term expanded.png')} alt="Workspace status term expanded" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>

        {/* ── Meta Strip ── */}
        <div className="w-full bg-gray-50 py-8 md:py-10 lg:py-12">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] 2xl:grid-cols-[400px_1fr] gap-8 md:gap-10 lg:gap-12 2xl:gap-16">

              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="space-y-8">
                {[
                  { icon: '📍', title: 'Product Area', content: <>Dynamic 365 Finance<br />ERP</> },
                  { icon: '👤', title: 'Role',         content: <>UI/UX design<br />User research</> },
                  { icon: '💻', title: 'Team',         content: <>PM x 1<br />Designer x 1<br />Engineer team ~5</> },
                  { icon: '📅', title: 'Timeline',     content: <>2023.2 - 2023.8</> },
                ].map(({ icon, title, content }) => (
                  <motion.div key={title} variants={fadeUp} transition={ease}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg md:text-xl lg:text-2xl">{icon}</span>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-700">{title}</h3>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed pl-6 md:pl-7 lg:pl-8">{content}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="space-y-8">
                {[
                  {
                    title: 'Results',
                    body: (
                      <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Finalized the design of the Vendor Invoice Center, showcasing a visual representation
                        of the invoice processing steps and associated actions. Achieved{' '}
                        <span className="font-semibold">100% positive feedback</span> from customers
                        regarding the design strategy.
                      </p>
                    ),
                  },
                  {
                    title: 'Personal Contribution',
                    body: (
                      <div className="space-y-4">
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                          Led the design of the Vendor Invoice Center, improving its visual aesthetics while
                          aligning workflows with the overall vendor invoice process to enhance efficiency.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                          Collaborated effectively with the project manager and engineering team to perform
                          comprehensive technical evaluations, successfully delivering new design components
                          implemented in the workspace.
                        </p>
                      </div>
                    ),
                  },
                  {
                    title: 'User Feedback',
                    body: (
                      <div className="space-y-4">
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                          "The new design definitely provides more visibility and control for AP to understand
                          where the invoice is in the AP automation process."
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                          "I really like the list view that shows all statuses at one time, and allows for
                          quick workflow approval. That would be a time saver for my clients."
                        </p>
                      </div>
                    ),
                  },
                ].map(({ title, body }) => (
                  <motion.div key={title} variants={fadeUp} transition={ease}>
                    <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 mb-3 md:mb-4 lg:mb-5">{title}</h3>
                    {body}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Design Showcase (3-col) ── */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="w-full px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 bg-gray-50">
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
            {[
              { file: 'screenshot/8.4.png',                  alt: 'Workspace final design' },
              { file: 'screenshot/All pending invoices.png',  alt: 'All pending invoices' },
              { file: 'screenshot/In workflow.png',           alt: 'In workflow list view' },
            ].map(({ file, alt }, i) => (
              <motion.div key={file} variants={fadeUp} transition={{ ...ease, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden shadow-xl relative h-[420px]">
                <img src={img(file)} alt={alt} className="absolute inset-0 w-full h-full object-cover object-top" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Project Overview ── */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="border-t border-gray-200 pt-12 md:pt-16 lg:pt-20 mb-12 md:mb-14 lg:mb-16">

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12">
              Project Overview
            </motion.h2>

            {/* Persona */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-8 md:mb-10 lg:mb-12">
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
                Persona
              </motion.h3>
              <div className="space-y-6 md:space-y-7 lg:space-y-8 pl-8 md:pl-12 lg:pl-16">
                {[
                  {
                    img: 'woman-technologist', alt: 'AP Specialist',
                    name: 'Accounts Payable Specialist (Primary)',
                    items: [
                      'Determine which invoices to prioritize, resolve data errors, and monitor progress through approvals.',
                      'Process vendor or supplier invoices by matching them to purchase orders, posting them, and verifying payments.',
                      'Correct invoice or payment details by fixing data errors and addressing discrepancies with vendors.',
                    ],
                  },
                  {
                    img: 'woman-office-worker', alt: 'AP Manager',
                    name: 'Accounts Payable Manager',
                    items: [
                      'Locate vendor invoices by identifying requested or past invoices and collaborating with the correct individuals or departments.',
                      'Obtain payment authorization by updating vendors on payment status changes, ensuring invoices are approved, and confirming payment arrangements are executed.',
                    ],
                  },
                ].map(({ img: emoji, alt, name, items }, i) => (
                  <motion.div key={name} variants={fadeUp} transition={{ ...ease, delay: i * 0.12 }} className="flex gap-6">
                    <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <img src={`${basePath}/emojis/${emoji}.png`} alt={alt} className="w-16 h-16" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-1.5 md:mb-2 lg:mb-2.5">{name}</h4>
                      <ul className="space-y-1.5 md:space-y-2 lg:space-y-2.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5 lg:pl-6">
                        {items.map((item, j) => <li key={j}>{item}</li>)}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business flow */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-12">
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
                Business flow
              </motion.h3>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="flex justify-center py-6">
                <img src={img('business logic.png')} alt="Business flow diagram" className="w-full h-auto rounded-lg" />
              </motion.div>
            </motion.div>

            {/* Goals */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-12">
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
                Goals
              </motion.h3>
              <motion.p variants={fadeUp} transition={{ ...ease, delay: 0.1 }}
                className="text-lg md:text-xl lg:text-2xl 2xl:text-[28px] font-bold text-gray-700 leading-relaxed">
                Enhance the visualization and optimize the invoice workflow to facilitate easier access to actionable insights and improve invoice processing efficiency.
              </motion.p>
            </motion.div>

            {/* Challenge */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-12">
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
                Challenge
              </motion.h3>
              <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.1 }}
                className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-medium list-disc pl-4 md:pl-5 lg:pl-6">
                <li>Grasp the complete product logic and invoice processing steps, along with the different error statuses and the appropriate actions to take.</li>
                <li>Create a design that simplifies and illustrates the process and its intermediate steps.</li>
                <li>Achieve a balance between UI interaction and feasibility, considering the limited frontend design component library while negotiating customization needs.</li>
              </motion.ul>
            </motion.div>

            {/* Team Collaboration */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-8 md:mb-10 lg:mb-12">
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
                Team Collaboration
              </motion.h3>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="flex justify-center py-10">
                <img src={`${basePath}/images/modern-bank-reconciliation/Team collaboration.png`} alt="Team Collaboration Diagram" className="w-2/5 h-auto" />
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* ── Workspace Design ── */}
        <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12">
              Workspace design
            </motion.h2>

            {/* Main pain points */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-8 md:mb-10 lg:mb-12">
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
                Main pain points
              </motion.h3>
              <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.05 }}
                className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-semibold list-disc pl-4 md:pl-5 lg:pl-6 mb-8">
                <li>Two workspaces make customers confused about <span className="text-cyan-600">which is for what</span>.</li>
                <li>Tile names are <span className="text-cyan-600">confusing and repeated</span>.</li>
                <li>The design of tiles does not show <span className="text-cyan-600">clear instruction</span> on what actions to take.</li>
              </motion.ul>
              {/* Pain point annotated images */}
              <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-4 md:gap-5 lg:gap-6 mb-6 items-start">
                {['painpoint01.png', 'painpoint02.png'].map((file, i) => (
                  <motion.div key={file} variants={fadeUp} transition={{ ...ease, delay: 0.1 + i * 0.08 }}
                    className="rounded-2xl overflow-hidden">
                    <img src={img(file)} alt={`Pain point ${i + 1}`} className="w-full h-auto" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Design Explorations */}
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={ease}
              className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
              Design explorations
            </motion.h3>

            {/* 1st round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease}
                className="w-fit bg-blue-100/60 text-gray-700 rounded-lg px-3 py-1 text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4">
                <span className="text-[#077FAB]">1st</span> round — Tiles iteration
              </motion.h4>
              <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.05 }}
                className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                <li>Too many tiles — users do not know the relation between each tile and cannot understand which tiles require them to take actions.</li>
              </motion.ul>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                <div className="w-1/2 rounded-lg overflow-hidden shadow-md bg-white">
                  <img src={img('screenshot/Workspace - status term.png')} alt="Workspace status term" className="w-full h-auto" />
                </div>
              </motion.div>
            </motion.div>

            {/* 2nd round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease}
                className="w-fit bg-blue-100/60 text-gray-700 rounded-lg px-3 py-1 text-base md:text-lg lg:text-xl font-bold mb-6 md:mb-7">
                <span className="text-[#077FAB]">2nd</span> round — Workflow tiles vs. informational cards
              </motion.h4>

              {/* Sub: Workflow tiles */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.05 }} className="mb-8">
                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-1">Explorations on workflow tiles</p>
                <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-500 mb-3">
                  <li>Forms a linear process, however, the information is still presented in pieces, not so intuitive.</li>
                </ul>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-start">
                  {['screenshot/1.png', 'screenshot/2.1.png', 'screenshot/3.1.png', 'screenshot/2.2.png'].map((file, i) => (
                    <div key={file} className="rounded-lg overflow-hidden shadow-md bg-white">
                      <img src={img(file)} alt={`Workflow tile ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Sub: Informational cards */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-1">Explorations on informational cards</p>
                <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-500 mb-3">
                  <li>Condense information in one card with clearer process steps.</li>
                </ul>
                <div className="grid grid-cols-4 gap-3 md:gap-4 items-start">
                  {['screenshot/4.1.png', 'screenshot/4.2.png', 'screenshot/4.3.png'].map((file, i) => (
                    <div key={file} className="rounded-lg overflow-hidden shadow-md bg-white">
                      <img src={img(file)} alt={`Informational card ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* 3rd round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease}
                className="w-fit bg-blue-100/60 text-gray-700 rounded-lg px-3 py-1 text-base md:text-lg lg:text-xl font-bold mb-6 md:mb-7">
                <span className="text-[#077FAB]">3rd</span> round — Layouts on informational cards
              </motion.h4>

              {/* Side by side */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="mb-8">
                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-600 mb-1">Side by side view</p>
                <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-500 mb-3 space-y-1">
                  <li>Repeated information on error messages may make users confused.</li>
                  <li>Occupies large area of spaces.</li>
                </ul>
                <div className="grid grid-cols-4 gap-3 md:gap-4 items-start">
                  {['screenshot/5.1.png', 'screenshot/5.2.png', 'screenshot/5.3.png', 'screenshot/5.4.png'].map((file, i) => (
                    <div key={file} className="rounded-lg overflow-hidden shadow-md bg-white">
                      <img src={img(file)} alt={`Side by side ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Vertical */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.15 }} className="mb-8">
                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-600 mb-1">Vertical view</p>
                <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-500 mb-3">
                  <li>Occupies large area of spaces with many blank areas.</li>
                </ul>
                <div className="grid grid-cols-4 gap-3 md:gap-4 items-start">
                  {['screenshot/6.1.png', 'screenshot/6.2.png', 'screenshot/6.3.png'].map((file, i) => (
                    <div key={file} className="rounded-lg overflow-hidden shadow-md bg-white">
                      <img src={img(file)} alt={`Vertical ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Horizontal */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
                <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-600 mb-1">Horizontal view</p>
                <ul className="list-disc pl-5 text-sm md:text-base lg:text-lg text-gray-500 mb-3 space-y-1">
                  <li>The information is condensed.</li>
                  <li>However, the pattern for informational cards is not unified.</li>
                </ul>
                <div className="grid grid-cols-4 gap-3 md:gap-4 items-start">
                  {['screenshot/7.1.png', 'screenshot/7.2.png'].map((file, i) => (
                    <div key={file} className="rounded-lg overflow-hidden shadow-md bg-white">
                      <img src={img(file)} alt={`Horizontal ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* 4th round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease}
                className="w-fit bg-blue-100/60 text-gray-700 rounded-lg px-3 py-1 text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-5">
                <span className="text-[#077FAB]">4th</span> round — Modification on horizontal view
              </motion.h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-start">
                {['screenshot/8.1.png', 'screenshot/8.2.png', 'screenshot/8.3.png', 'screenshot/8.4.png'].map((file, i) => (
                  <motion.div key={file} variants={fadeUp} transition={{ ...ease, delay: i * 0.08 }}
                    className="rounded-lg overflow-hidden shadow-md bg-white">
                    <img src={img(file)} alt={`4th round modification ${i + 1}`} className="w-full h-auto" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 5th round — card iteration */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease}
                className="w-fit bg-blue-100/60 text-gray-700 rounded-lg px-3 py-1 text-base md:text-lg lg:text-xl font-bold mb-4 md:mb-5">
                <span className="text-[#077FAB]">5th</span> round — Information card iteration
              </motion.h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { label: 'Divider line',   n: '1', chosen: false },
                  { label: 'Dash line',      n: '2', chosen: false },
                  { label: 'Indicator',      n: '3', chosen: false },
                  { label: 'Line indicator', n: '4', chosen: false },
                  { label: 'Dot indicator',  n: '5', chosen: true  },
                ].map(({ label, n, chosen }, i) => (
                  <motion.div key={label} variants={fadeUp} transition={{ ...ease, delay: i * 0.08 }}>
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-700">{label}</p>
                      {chosen && <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">✓</span>}
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <img src={img(`carddesign/In automation ${n}.1.png`)} alt={`${label} auto 1`} className="w-full h-auto rounded-lg" />
                        <img src={img(`carddesign/In workflow ${n}.1.png`)} alt={`${label} wf 1`} className="w-full h-auto rounded-lg" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <img src={img(`carddesign/In automation ${n}.2.png`)} alt={`${label} auto 2`} className="w-full h-auto rounded-lg" />
                        <img src={img(`carddesign/In workflow ${n}.2.png`)} alt={`${label} wf 2`} className="w-full h-auto rounded-lg" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Final design */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">
                Final design
              </motion.h3>

              {/* Collapsed + Expanded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mb-8">
                {[
                  { file: 'screenshot/Workspace - collapsed.png', label: 'Collapsed view' },
                  { file: 'screenshot/Workspace - expand.png',    label: 'Expanded view' },
                ].map(({ file, label }, i) => (
                  <motion.div key={file} variants={fadeUp} transition={{ ...ease, delay: i * 0.1 }}>
                    <p className="text-sm md:text-base text-gray-700 font-semibold mb-3">{label}</p>
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                      <img src={img(file)} alt={label} className="w-full h-auto" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Lists */}
              <motion.p variants={fadeUp} transition={{ ...ease, delay: 0.2 }}
                className="text-sm md:text-base font-semibold text-gray-700 mb-4">Lists</motion.p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { file: 'screenshot/All pending invoices.png', label: 'All pending invoices' },
                  { file: 'screenshot/Manually pending.png',     label: 'Manually pending' },
                ].map(({ file, label }, i) => (
                  <motion.div key={file} variants={fadeUp} transition={{ ...ease, delay: 0.2 + i * 0.08 }}>
                    <div className="rounded-xl overflow-hidden shadow-md bg-white mb-2">
                      <img src={img(file)} alt={label} className="w-full h-auto" />
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 text-center">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── User Research ── */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="border-t border-gray-200 pt-12 md:pt-16 lg:pt-20 mb-12">

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12">
              User Research
            </motion.h2>

            {/* Intro */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
              transition={{ ...ease, delay: 0.1 }} className="mb-8 md:mb-10 lg:mb-12 flex gap-4 py-4">
              <div className="w-[6px] rounded-full bg-[#077FAB] flex-shrink-0"></div>
              <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                To enhance communication and gather feedback on our design, I worked closely with the Project
                Manager to produce a demo video, which we shared on Yammer to engage stakeholders and highlight
                the features. We also conducted a survey for additional insights. These efforts led to a positive
                reception, with favorable feedback from both Yammer and the survey.
              </p>
            </motion.div>

            {/* 3 user quotes — staggered */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
              className="space-y-8 mb-12 md:mb-14 lg:mb-16 pl-8 md:pl-16 lg:pl-24">
              {[
                { quote: '"I really like the list view that shows all statuses at one time, and allows for quick workflow approval. That would be a time saver for my clients."', emoji: 'woman-office-worker', indent: 'ml-0' },
                { quote: '"The new design definitely provides more visibility and control for AP to understand where the invoice is in the AP automation process."', emoji: 'man-technologist', indent: 'ml-24 md:ml-40' },
                { quote: '"A great new Workspace and I\'m really looking forward to it."', emoji: 'woman-technologist', indent: 'ml-48 md:ml-80' },
              ].map(({ quote, emoji, indent }, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ ...ease, delay: i * 0.1 }}
                  className={`flex gap-5 items-start ${indent}`}>
                  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
                    <img src={`${basePath}/emojis/${emoji}.png`} alt="User" className="w-12 h-12" />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed pt-3 max-w-xl">{quote}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Survey Results */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="space-y-8">

              {/* Heading */}
              <motion.h3 variants={fadeUp} transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5">
                Survey Results
              </motion.h3>

              {/* 100% inline */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.05 }}>
                <div className="w-4/5 mx-auto flex items-center gap-6 md:gap-8">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#077FAB] leading-none flex-shrink-0">100%</div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    participants think the new workspace is{' '}
                    <span className="font-semibold">better than the old version</span> of the workspace.
                  </p>
                </div>
              </motion.div>

              {/* Participants perspectives */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                <div className="w-4/5 mx-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#077FAB] flex-shrink-0"></div>
                    <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">Participants perspectives on different area of the design</p>
                  </div>
                  <img src={img('survey result01.png')} alt="Survey result - participants perspectives" className="w-full h-auto" />
                </div>
              </motion.div>

              {/* Overall rate */}
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.15 }}>
                <div className="w-4/5 mx-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#077FAB] flex-shrink-0"></div>
                    <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-800">Overall rate of the design</p>
                  </div>
                  <img src={img('survey result02.png')} alt="Survey result - overall rate" className="w-full h-auto" />
                </div>
              </motion.div>

              {/* Survey Questions */}
              <motion.h3 variants={fadeUp} transition={{ ...ease, delay: 0.2 }}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 pt-4">
                Survey Questions
              </motion.h3>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.25 }} className="w-4/5 mx-auto">
                <img src={img('survey questions.png')} alt="Survey questions" className="w-full h-auto" />
              </motion.div>

            </motion.div>

          </div>
        </div>

        {/* ── Growth ── */}
        <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12">
              Growth
            </motion.h2>

            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {[
                { num: '1', title: 'Be Accountable for the Experience:', text: "Although there may be constraints from design components or technical implementation, designers should always think boldly from the user's perspective and strive to create the best possible solution." },
                { num: '2', title: 'Iterate for Better Design:',         text: 'Design requires continuous exploration — trying multiple directions, refining details, and iterating repeatedly to achieve the optimal solution.' },
                { num: '3', title: 'Value User Feedback:',               text: "Designers should not rely on users to define the direction, but user feedback plays a crucial role in validating whether the current design direction is effective and aligned with user needs." },
              ].map(({ num, title, text }, i) => (
                <motion.div key={num} variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={vp} transition={{ ...ease, delay: i * 0.12 }} className="flex gap-6">
                  <div className="flex-shrink-0 text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-600">{num}</div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 mb-2 md:mb-3">{title}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Footer Nav ── */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="pt-8 border-t border-gray-200">
            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600">
              ← Back to all projects
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}

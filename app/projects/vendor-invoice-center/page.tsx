'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

const fadeUp  = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const vp      = { once: true, margin: '-60px' } as const;
const ease    = { duration: 0.5, ease: 'easeOut' as const };

const Placeholder = ({ label, className = '' }: { label: string; className?: string }) => (
  <div className={`w-full bg-gray-100 rounded-xl flex items-center justify-center border border-dashed border-gray-300 ${className}`}>
    <span className="text-gray-400 text-sm py-16 px-4 text-center">[ {label} ]</span>
  </div>
);

export default function VendorInvoiceCenterPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="min-h-screen bg-white pt-24">

        {/* Back Link */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-6 md:mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs md:text-sm lg:text-base text-gray-500 hover:text-gray-700"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <div className="max-w-[90vw] 2xl:max-w-[2000px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 2xl:gap-20 items-center">

            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.h1
                variants={fadeUp}
                transition={ease}
                className="text-[28px] md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8"
              >
                Vendor Invoice Center
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={{ ...ease, delay: 0.1 }}
                className="text-sm md:text-base lg:text-lg 2xl:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8"
              >
                Improving the productivity of Accounts Payable specialists and managers by visualizing
                and streamlining the vendor invoice processing steps and associated actions through
                innovative designs on the workspace homepage.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/Finance logo.png`}
                  alt="Dynamics 365 Finance"
                  className="h-14 md:h-16 lg:h-18 w-auto"
                />
              </motion.div>
            </motion.div>

            {/* Right: screenshots */}
            <div className="space-y-4">
              {['Hero screenshot 1', 'Hero screenshot 2'].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...ease, delay: 0.15 + i * 0.13 }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <Placeholder label={label} className="aspect-video" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Meta Strip ── */}
        <div className="w-full bg-gray-50 py-8 md:py-10 lg:py-12">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] 2xl:grid-cols-[400px_1fr] gap-8 md:gap-10 lg:gap-12 2xl:gap-16">

              {/* Left: meta cards */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="space-y-8"
              >
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
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed pl-6 md:pl-7 lg:pl-8">
                      {content}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: results */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="space-y-8"
              >
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
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="w-full px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 bg-gray-50"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
            {['Design showcase 1', 'Design showcase 2', 'Design showcase 3'].map((label, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                transition={{ ...ease, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <Placeholder label={label} className="aspect-video" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Project Overview ── */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="border-t border-gray-200 pt-12 md:pt-16 lg:pt-20 mb-12 md:mb-14 lg:mb-16">

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12"
            >
              Project Overview
            </motion.h2>

            {/* Persona */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-8 md:mb-10 lg:mb-12">
              <motion.h3
                variants={fadeUp}
                transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
              >
                Persona
              </motion.h3>
              <div className="space-y-6 md:space-y-7 lg:space-y-8 pl-8 md:pl-12 lg:pl-16">
                {[
                  {
                    img: 'woman-technologist', alt: 'AP Specialist', name: 'Accounts Payable Specialist (Primary)',
                    items: [
                      'Determine which invoices to prioritize, resolve data errors, and monitor progress through approvals.',
                      'Process vendor or supplier invoices by matching them to purchase orders, posting them, and verifying payments.',
                      'Correct invoice or payment details by fixing data errors and addressing discrepancies with vendors.',
                    ],
                  },
                  {
                    img: 'woman-office-worker', alt: 'AP Manager', name: 'Accounts Payable Manager',
                    items: [
                      'Locate vendor invoices by identifying requested or past invoices and collaborating with the correct individuals or departments.',
                      'Obtain payment authorization by updating vendors on payment status changes, ensuring invoices are approved, and confirming payment arrangements are executed.',
                    ],
                  },
                ].map(({ img, alt, name, items }, i) => (
                  <motion.div key={name} variants={fadeUp} transition={{ ...ease, delay: i * 0.12 }} className="flex gap-6">
                    <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <img src={`${basePath}/emojis/${img}.png`} alt={alt} className="w-16 h-16" />
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
              <motion.h3
                variants={fadeUp}
                transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
              >
                Business flow
              </motion.h3>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="flex justify-center py-10">
                <div className="w-4/5">
                  <Placeholder label="Business flow diagram" className="aspect-[3/1]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Goals */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-8 gap-y-6">
                <motion.div variants={fadeUp} transition={ease}>
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mb-6 md:mb-7 lg:mb-8">Goals</h3>
                </motion.div>
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-700">Enhance the visualization and optimize the invoice workflow</span>{' '}
                    to facilitate easier access to actionable insights and improve invoice processing efficiency.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Challenge */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-12">
              <motion.h3
                variants={fadeUp}
                transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
              >
                Challenge
              </motion.h3>
              <motion.ul
                variants={fadeUp}
                transition={{ ...ease, delay: 0.1 }}
                className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-medium list-disc pl-4 md:pl-5 lg:pl-6"
              >
                <li>Grasp the complete product logic and invoice processing steps, along with the different error statuses and the appropriate actions to take.</li>
                <li>Create a design that simplifies and illustrates the process and its intermediate steps.</li>
                <li>Achieve a balance between UI interaction and feasibility, considering the limited frontend design component library while negotiating customization needs.</li>
              </motion.ul>
            </motion.div>

            {/* Team Collaboration */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-8 md:mb-10 lg:mb-12">
              <motion.h3
                variants={fadeUp}
                transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
              >
                Team Collaboration
              </motion.h3>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="flex justify-center py-10">
                <div className="w-2/5">
                  <Placeholder label="Team collaboration diagram" className="aspect-square" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* ── Workspace Design ── */}
        <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12"
            >
              Workspace design
            </motion.h2>

            {/* Main pain points */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-8 md:mb-10 lg:mb-12">
              <motion.h3
                variants={fadeUp}
                transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
              >
                Main pain points
              </motion.h3>
              <motion.ul
                variants={fadeUp}
                transition={{ ...ease, delay: 0.1 }}
                className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-semibold list-disc pl-4 md:pl-5 lg:pl-6"
              >
                <li>Two workspaces make customers confused about <span className="text-cyan-600">which is for what</span>.</li>
                <li>Tile names are <span className="text-cyan-600">confusing and repeated</span>.</li>
                <li>The design of tiles does not show <span className="text-cyan-600">clear instruction</span> on what actions to take.</li>
              </motion.ul>
            </motion.div>

            {/* Design explorations */}
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
            >
              Design explorations
            </motion.h3>

            {/* 1st round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease} className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-3 md:mb-4">
                1st round — Tiles iteration
              </motion.h4>
              <motion.p variants={fadeUp} transition={{ ...ease, delay: 0.05 }} className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                Too many tiles — users do not know the relation between each tile and cannot understand which tiles require them to take actions.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                <Placeholder label="1st round — Tiles iteration design" className="aspect-video" />
              </motion.div>
            </motion.div>

            {/* 2nd round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease} className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-6 md:mb-7">
                2nd round — Workflow tiles vs. informational cards
              </motion.h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                  <h5 className="text-base font-semibold text-gray-700 mb-2">Explorations on workflow tiles</h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                    Forms a linear process, however, the information is still presented in pieces — not so intuitive.
                  </p>
                  <Placeholder label="Workflow tiles exploration" className="aspect-video" />
                </motion.div>
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
                  <h5 className="text-base font-semibold text-gray-700 mb-2">Explorations on informational cards</h5>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                    Condense information in one card with clearer process steps.
                  </p>
                  <Placeholder label="Informational cards exploration" className="aspect-video" />
                </motion.div>
              </div>
            </motion.div>

            {/* 3rd round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease} className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-6 md:mb-7">
                3rd round — Layouts on informational cards
              </motion.h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    label: 'Side by side view',
                    cons: ['Repeated information on error messages may make users confused.', 'Occupies large area of spaces.'],
                    verdict: 'bad',
                  },
                  {
                    label: 'Vertical view',
                    cons: ['Occupies large area of spaces with many blank areas.'],
                    verdict: 'bad',
                  },
                  {
                    label: 'Horizontal view',
                    cons: ['The information is condensed.', 'However, the pattern for informational cards is not unified.'],
                    verdict: 'good',
                  },
                ].map(({ label, cons, verdict }, i) => (
                  <motion.div key={label} variants={fadeUp} transition={{ ...ease, delay: i * 0.1 }}>
                    <div className={`rounded-lg overflow-hidden mb-3 shadow-sm border-2 ${verdict === 'good' ? 'border-cyan-400' : 'border-gray-200'}`}>
                      <Placeholder label={label} className="aspect-video" />
                    </div>
                    <h5 className={`text-base font-semibold mb-2 ${verdict === 'good' ? 'text-cyan-600' : 'text-gray-700'}`}>{label}</h5>
                    <ul className="space-y-1 text-sm text-gray-600 list-disc pl-4">
                      {cons.map((c, j) => <li key={j}>{c}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 4th round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease} className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-4 md:mb-5">
                4th round — Modification on horizontal view
              </motion.h4>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                <Placeholder label="4th round — Modified horizontal view" className="aspect-video" />
              </motion.div>
            </motion.div>

            {/* 5th round */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-10 md:mb-12 lg:mb-14">
              <motion.h4 variants={fadeUp} transition={ease} className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-4 md:mb-5">
                5th round — Information card iteration
              </motion.h4>
              <div className="overflow-x-auto scrollbar-hide pb-4">
                <div className="flex gap-4 min-w-max">
                  {['Divider line', 'Dash line', 'Line indicator', 'Indicator', 'Dot indicator'].map((variant, i) => (
                    <motion.div
                      key={variant}
                      variants={fadeUp}
                      transition={{ ...ease, delay: i * 0.08 }}
                      className="w-48 flex-shrink-0"
                    >
                      <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 mb-2">
                        <Placeholder label={variant} className="aspect-square" />
                      </div>
                      <p className="text-sm text-gray-600 text-center">{variant}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Final design */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger} className="mb-4">
              <motion.h3
                variants={fadeUp}
                transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
              >
                Final design
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {['Expanded view', 'Collapsed view', 'Lists'].map((label, i) => (
                  <motion.div key={label} variants={fadeUp} transition={{ ...ease, delay: i * 0.1 }}>
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-white mb-3">
                      <Placeholder label={label} className="aspect-video" />
                    </div>
                    <p className="text-sm md:text-base text-gray-700 font-semibold text-center">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── User Research ── */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="border-t border-gray-200 pt-12 md:pt-16 lg:pt-20 mb-12">

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12"
            >
              User Research
            </motion.h2>

            {/* Intro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ ...ease, delay: 0.1 }}
              className="mb-8 md:mb-10 lg:mb-12 flex gap-4 py-4"
            >
              <div className="w-[6px] rounded-full bg-[#077FAB] flex-shrink-0"></div>
              <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                To enhance communication and gather feedback on our design, I worked closely with the Project
                Manager to produce a demo video, which we shared on Yammer to engage stakeholders and highlight
                the features. We also conducted a survey for additional insights. These efforts led to a positive
                reception, with favorable feedback from both Yammer and the survey.
              </p>
            </motion.div>

            {/* 3 user quotes */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="space-y-6 mb-12 md:mb-14 lg:mb-16"
            >
              {[
                { quote: '"I really like the list view that shows all statuses at one time, and allows for quick workflow approval. That would be a time saver for my clients."', attr: '-- AP Specialist', emoji: 'woman-technologist' },
                { quote: '"The new design definitely provides more visibility and control for AP to understand where the invoice is in the AP automation process."', attr: '-- Business Consultant', emoji: 'man-technologist' },
                { quote: '"A great new Workspace and I\'m really looking forward to it."', attr: '-- AP Manager', emoji: 'woman-office-worker' },
              ].map(({ quote, attr, emoji }, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ ...ease, delay: i * 0.1 }} className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
                    <img src={`${basePath}/emojis/${emoji}.png`} alt="User" className="w-12 h-12" />
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed mb-2">{quote}</p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-900 font-semibold">{attr}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 100% stat */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="max-w-2xl mx-auto text-center mb-12 md:mb-14 lg:mb-16"
            >
              <div className="text-8xl md:text-9xl font-bold text-[#077FAB] mb-4">100%</div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                participants think the new workspace is{' '}
                <span className="font-semibold">better than the old version</span> of the workspace.
              </p>
            </motion.div>

            {/* Survey chart */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ ...ease, delay: 0.1 }}
              className="max-w-2xl mx-auto bg-white rounded-2xl px-8 pt-8 pb-6 md:px-10 md:pt-10 md:pb-7 lg:px-12 lg:pt-12 lg:pb-8 shadow-sm border border-gray-100"
            >
              <p className="text-base md:text-lg font-semibold text-gray-800 mb-6 text-center">
                Participants perspectives on different areas of the design
              </p>
              <svg viewBox="0 0 460 220" className="w-full" aria-label="Survey results chart">
                {/* Y-axis labels */}
                {['5', '4', '3', '2', '1'].map((v, i) => (
                  <text key={v} x="28" y={36 + i * 36} textAnchor="middle" fill="#9ca3af" fontSize="12">{v}</text>
                ))}
                {/* Grid lines */}
                {[0,1,2,3,4].map(i => (
                  <line key={i} x1="44" y1={24 + i * 36} x2="440" y2={24 + i * 36} stroke="#f3f4f6" strokeWidth="1" />
                ))}
                {/* Bars */}
                {[
                  { label: 'Visualization', score: 4.8, color: '#077FAB' },
                  { label: 'Workflow',      score: 4.6, color: '#38bdf8' },
                  { label: 'Usability',     score: 4.7, color: '#077FAB' },
                  { label: 'Overall',       score: 4.9, color: '#0e7490' },
                ].map(({ label, score, color }, i) => {
                  const barH = ((score - 1) / 4) * 144;
                  const x = 70 + i * 96;
                  return (
                    <g key={label}>
                      <rect x={x} y={168 - barH} width="48" height={barH} fill={color} rx="4" opacity="0.85" />
                      <text x={x + 24} y={168 - barH - 6} textAnchor="middle" fill={color} fontWeight="bold" fontSize="13">{score}</text>
                      <text x={x + 24} y="188" textAnchor="middle" fill="#6b7280" fontSize="11">{label}</text>
                    </g>
                  );
                })}
                {/* Baseline */}
                <line x1="44" y1="168" x2="440" y2="168" stroke="#d1d5db" strokeWidth="1.5" />
              </svg>
              <p className="text-center text-xs text-gray-400 mt-2">Scale: 1–5</p>
            </motion.div>

          </div>
        </div>

        {/* ── Growth ── */}
        <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12"
            >
              Growth
            </motion.h2>

            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {[
                {
                  num: '1',
                  title: 'Be Accountable for the Experience:',
                  text: 'Although there may be constraints from design components or technical implementation, designers should always think boldly from the user\'s perspective and strive to create the best possible solution.',
                },
                {
                  num: '2',
                  title: 'Iterate for Better Design:',
                  text: 'Design requires continuous exploration — trying multiple directions, refining details, and iterating repeatedly to achieve the optimal solution.',
                },
                {
                  num: '3',
                  title: 'Value User Feedback:',
                  text: 'Designers should not rely on users to define the direction, but user feedback plays a crucial role in validating whether the current design direction is effective and aligned with user needs.',
                },
              ].map(({ num, title, text }, i) => (
                <motion.div
                  key={num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  transition={{ ...ease, delay: i * 0.12 }}
                  className="flex gap-6"
                >
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
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}

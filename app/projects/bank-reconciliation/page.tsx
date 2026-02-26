'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

// Helper to handle basePath for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

// Animation variants
const fadeUp  = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const vp      = { once: true, margin: '-60px' } as const;
const ease    = { duration: 0.5, ease: 'easeOut' as const };

export default function BankReconciliationPage() {
  return (
    <div className="bg-white">
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

        {/* Hero Section */}
        <div className="max-w-[90vw] 2xl:max-w-[2000px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 2xl:gap-20 items-center">

            {/* Left: Title and Description */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={fadeUp}
                transition={{ ...ease }}
                className="text-[28px] md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8"
              >
                Modern Bank Reconciliation
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ ...ease, delay: 0.1 }}
                className="text-sm md:text-base lg:text-lg 2xl:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8"
              >
                Enhance the efficiency of business users in completing bank transactions and reconciling
                company accounts by integrating advanced functionalities and optimizing the user experience.
              </motion.p>

              {/* Dynamics 365 Finance Logo */}
              <motion.div
                variants={fadeUp}
                transition={{ ...ease, delay: 0.2 }}
              >
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/Finance logo.png`}
                  alt="Dynamics 365 Finance"
                  className="h-14 md:h-16 lg:h-18 w-auto"
                />
              </motion.div>
            </motion.div>

            {/* Right: 2 images stacked vertically */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.15 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/title image 01.png`}
                  alt="Bank Reconciliation UI Screenshot 1"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.28 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/title image 02.png`}
                  alt="Bank Reconciliation UI Screenshot 2"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Content Section */}
        <div className="w-full bg-gray-50 py-8 md:py-10 lg:py-12">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] 2xl:grid-cols-[400px_1fr] gap-8 md:gap-10 lg:gap-12 2xl:gap-16">

            {/* Left Column - Info Cards */}
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
                { icon: '📅', title: 'Timeline',     content: <>2023.4 - 2024.6</> },
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

            {/* Right Column - Content */}
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
                      We have successfully launched the latest version of the Bank Statement and Reconciliation
                      Worksheet to the public, ensuring a seamless data migration process. Received positive feedback
                      from our customers.
                    </p>
                  ),
                },
                {
                  title: 'Personal Contribution',
                  body: (
                    <div className="space-y-4">
                      <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Took in charge of the design for the bank statement and reconciliation worksheet, enhancing both
                        its visual appeal and ensuring that interactions align with the overall business process to boost
                        efficiency.
                      </p>
                      <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Worked closely with the project manager and engineering team to conduct thorough technical
                        evaluations, successfully addressing limitations to deliver the product to the market.
                      </p>
                    </div>
                  ),
                },
                {
                  title: 'User Feedback',
                  body: (
                    <div className="space-y-4">
                      <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Support shared very positive sentimental feedback from customer for the feature,
                        customers are chasing the GA for availability in product environment.
                      </p>
                      <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        Partner feedback: "It is so good that Microsoft is doing these new bank functionalities so
                        we can recommend standard instead of an ISV".
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

        {/* Design Showcase - full width */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          className="w-full px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 2xl:mb-24 bg-gray-50"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
            {['image showcase 01', 'image showcase 02', 'image showcase 03'].map((name, i) => (
              <motion.div
                key={name}
                variants={fadeUp}
                transition={{ ...ease, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img src={`${basePath}/images/modern-bank-reconciliation/${name}.png`} alt={`Design Showcase ${i + 1}`} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Overview Section */}
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="mb-8 md:mb-10 lg:mb-12"
            >
              <motion.h3 variants={fadeUp} transition={ease} className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Persona</motion.h3>
              <div className="space-y-6 md:space-y-7 lg:space-y-8 pl-8 md:pl-12 lg:pl-16">
                {[
                  {
                    img: 'woman-technologist', alt: 'Treasurer', name: 'Treasurer (Primary)',
                    items: [
                      'Handle all incoming and outgoing banking transactions on behalf of the company',
                      'Complete bank reconciliation and reports on a regular basis',
                      "Submit periodic reports detailing the company's financial situation and forecasting",
                    ],
                  },
                  {
                    img: 'woman-office-worker', alt: 'Finance Manager', name: 'Finance Manager',
                    items: [
                      'Manage the progress of banking reports.',
                      'Regularly monitor the status of bank reconciliation to maintain a clear understanding of the company\'s cash health.',
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="mb-12"
            >
              <motion.h3 variants={fadeUp} transition={ease} className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Business flow</motion.h3>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="flex justify-center py-10">
                <img src={`${basePath}/images/modern-bank-reconciliation/Business flow.png`} alt="Business Flow Diagram" className="w-4/5 h-auto" />
              </motion.div>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1px_1fr] gap-x-8 gap-y-6">
                <motion.div variants={fadeUp} transition={ease}>
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mb-6 md:mb-7 lg:mb-8">Goals</h3>
                </motion.div>
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                  <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-3 md:mb-4 lg:mb-5">
                    <span className="text-cyan-600">Enhance functional requirements</span> to meet customer usage needs.
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2 lg:space-y-2.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5 lg:pl-6">
                    <li>New features include: generate payment, generate voucher.</li>
                    <li>Add automatic matching rule functionality.</li>
                  </ul>
                </motion.div>
                <div className="hidden md:block bg-gray-200 rounded-full" />
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
                  <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-3 md:mb-4 lg:mb-5">
                    <span className="text-cyan-600">Optimize product design</span> to improve user experience and increase efficiency.
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2 lg:space-y-2.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5 lg:pl-6">
                    <li>Optimize page layout and structure.</li>
                    <li>Reconstruct navigation and interaction.</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Source */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1px_1fr] gap-x-8 gap-y-6">
                <motion.div variants={fadeUp} transition={ease}>
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mb-6 md:mb-7 lg:mb-8">Source</h3>
                </motion.div>
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }}>
                  <h4 className="text-base font-semibold text-gray-700 mb-2">Customer feedback:</h4>
                  <p className="text-base text-gray-600 mb-4">Idea Portal, Yammer Group, Customer meetings.</p>
                  <h4 className="text-base font-semibold text-gray-700 mb-2">MS Internal:</h4>
                  <p className="text-base text-gray-600">Function planning.</p>
                </motion.div>
                <div className="hidden md:block bg-gray-200 rounded-full" />
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }}>
                  <h4 className="text-base font-semibold text-gray-700 mb-2">Customer feedback:</h4>
                  <p className="text-base text-gray-600 mb-4">Customer meetings, Satisfaction rate.</p>
                  <h4 className="text-base font-semibold text-gray-700 mb-2">MS Internal:</h4>
                  <p className="text-base text-gray-600">Design experience review.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="mb-12"
            >
              <motion.h3 variants={fadeUp} transition={ease} className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Challenge</motion.h3>
              <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-medium list-disc pl-4 md:pl-5 lg:pl-6">
                <li>Complex product logic and a massive amount of data migration, involving tens of thousands to hundreds of thousands of records.</li>
                <li>Consistency between backend data processing logic and frontend interactions, including the reading and handling of thousands of transactions.</li>
                <li>Limited frontend design component library and customization requirements.</li>
              </motion.ul>
            </motion.div>

            {/* Team Collaboration */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="mb-8 md:mb-10 lg:mb-12"
            >
              <motion.h3 variants={fadeUp} transition={ease} className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Team Collaboration</motion.h3>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="flex justify-center py-10">
                <img src={`${basePath}/images/modern-bank-reconciliation/Team collaboration.png`} alt="Team Collaboration Diagram" className="w-2/5 h-auto" />
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Bank statement design */}
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
              Bank statement design
            </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                variants={stagger}
                className="mb-8"
              >
                <motion.h3 variants={fadeUp} transition={ease} className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Main pain points</motion.h3>
                <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-semibold list-disc pl-4 md:pl-5 lg:pl-6">
                  <li>The <span className="text-cyan-600">information hierarchy</span> lacks clarity.</li>
                  <li>The <span className="text-cyan-600">relationship</span> between the bank statement and the worksheet is not clearly illustrated.</li>
                  <li>The <span className="text-cyan-600">status</span> of transactions and statements is confusing.</li>
                </motion.ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                variants={stagger}
                className="space-y-8"
              >
                <motion.div variants={fadeUp} transition={ease}>
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Original design</h3>
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                    <img src={`${basePath}/images/modern-bank-reconciliation/original design cropped.png`} alt="Original design" className="w-full h-auto" />
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.15 }}>
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">New design</h3>
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                    <img src={`${basePath}/images/modern-bank-reconciliation/new design cropped.png`} alt="New design" className="w-full h-auto" />
                  </div>
                </motion.div>
              </motion.div>

            {/* Interaction Logic and State Transitions - H3 under Bank statement design */}
            <div className="mt-10 md:mt-12 lg:mt-14 mb-12 md:mb-14 lg:mb-16">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                transition={ease}
                className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
              >
                Interaction Logic and State Transitions
              </motion.h3>

              {[
                {
                  title: 'The relationship between the bank statement and the worksheet',
                  items: [
                    'A single reconciliation worksheet may include transactions from various bank statements.',
                    'Transactions from one bank statement can be organized into multiple worksheets for the reconciliation process.',
                  ],
                  img: 'relationship between', imgAlt: 'Relationship Between Bank Statement and Worksheet',
                },
                {
                  title: 'Status inherit',
                  items: [
                    'The transaction status and bank statement status are distinct elements in financial reporting.',
                    'A bank statement status is marked as reconciled when all associated transactions have been confirmed as reconciled.',
                  ],
                  img: 'status inherit', imgAlt: 'Status Inherit Diagram', reversed: true,
                },
              ].map(({ title, items, img, imgAlt, reversed }) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                  variants={stagger}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-10 md:mb-12 lg:mb-14"
                >
                  {/* Text */}
                  <div className={reversed ? 'order-2' : 'order-1'}>
                    <motion.h4 variants={fadeUp} transition={ease} className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-3 md:mb-4 lg:mb-5">{title}</motion.h4>
                    <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-medium list-disc pl-4 md:pl-5 lg:pl-6">
                      {items.map((item, i) => <li key={i}>{item}</li>)}
                    </motion.ul>
                  </div>
                  {/* Image */}
                  <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.2 }} className={`flex justify-center ${reversed ? 'order-1' : 'order-2'}`}>
                    <img src={`${basePath}/images/modern-bank-reconciliation/${img}.png`} alt={imgAlt} className="w-full h-auto rounded-lg" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Worksheet design */}
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
              Worksheet design
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="mb-8"
            >
              <motion.h3 variants={fadeUp} transition={ease} className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Main pain points</motion.h3>
              <motion.ul variants={fadeUp} transition={{ ...ease, delay: 0.1 }} className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-700 font-semibold list-disc pl-4 md:pl-5 lg:pl-6">
                <li><span className="text-cyan-600">Navigation and interactions</span> are not user-friendly, making it hard for users to find what they need.</li>
                <li>The <span className="text-cyan-600">selection, comparison and confirmation</span> process is disorganized, causing confusion.</li>
              </motion.ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              variants={stagger}
              className="space-y-8 mb-10 md:mb-12 lg:mb-14"
            >
              <motion.div variants={fadeUp} transition={ease}>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Original design</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                  <img src={`${basePath}/images/modern-bank-reconciliation/Worksheet original design cropped.png`} alt="Worksheet original design" className="w-full h-auto" />
                </div>
              </motion.div>
              <motion.div variants={fadeUp} transition={{ ...ease, delay: 0.15 }}>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8">Final design</h3>
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                  <img src={`${basePath}/images/modern-bank-reconciliation/worksheet final design cropped.png`} alt="Worksheet final design" className="w-full h-auto" />
                </div>
              </motion.div>
            </motion.div>

            {/* Design explorations - H3 under Worksheet design */}
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

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="mb-8 md:mb-10 lg:mb-12 flex gap-4 py-4"
            >
              <div className="w-[6px] rounded-full bg-[#077FAB] flex-shrink-0"></div>
              <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                Design is an iterative process that demands careful refinement. We have examined several layout options, including card view, grouped list view, and side-by-side list view. Our evaluation focused on information presentation, interaction processes, and usability effectiveness. We decided that the side-by-side view is the best option and continued refining it to finalize the design.
              </p>
            </motion.div>

            {/* Unmatched transactions - H4 */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <motion.h4
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                transition={ease}
                className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-4 md:mb-5 lg:mb-6"
              >
                Unmatched transactions
              </motion.h4>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
              >
                {[1,2,3,4,5,6].map((n) => (
                  <motion.div key={n} variants={fadeUp} transition={{ ...ease, delay: ((n-1) % 3) * 0.1 }} className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={`${basePath}/images/modern-bank-reconciliation/unmatched transaction/${n}.png`}
                      alt={`Unmatched transactions design ${n}`}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Pending transaction - H4 */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <motion.h4
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                transition={ease}
                className="text-base md:text-lg lg:text-xl font-bold text-gray-700 mb-4 md:mb-5 lg:mb-6"
              >
                Pending transaction
              </motion.h4>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
              >
                {['2.1','2.2','2.3','2.4','2.5','2.6'].map((n, i) => (
                  <motion.div key={n} variants={fadeUp} transition={{ ...ease, delay: (i % 3) * 0.1 }} className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={`${basePath}/images/modern-bank-reconciliation/pending transaction/${n}.png`}
                      alt={`Pending transaction design ${n}`}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Flowchart - full width */}
        <div className="w-full mb-12 md:mb-16 lg:mb-20 bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-8 md:mb-10 lg:mb-12">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-8 md:mb-10 lg:mb-12"
            >
              Flowchart
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={{ ...ease, delay: 0.1 }}
              className="flex gap-4 py-4"
            >
              <div className="w-[6px] rounded-full bg-[#077FAB] flex-shrink-0"></div>
              <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                Product design and execution often present challenges. As the project scope evolves, designer involvement shifts, necessitating deeper research into the product. This leads to ongoing design iterations and functionality assessments, culminating in final decisions made collaboratively with the product manager and engineering team.
              </p>
            </motion.div>
          </div>

          {/* Flow Images - Horizontal Scroll */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            transition={{ ...ease, delay: 0.15 }}
            className="overflow-x-auto scrollbar-hide px-6 md:px-8 lg:px-12 pt-4 pb-10"
          >
            <div className="flex gap-6 pb-2">
              {[
                { file: 'Flow-original',  label: 'Flow Original Design' },
                { file: 'flow-version01', label: 'Flow Design Version 1' },
                { file: 'flow-version02', label: 'Flow Design Version 2' },
                { file: 'Flow-final',     label: 'Flow Final Design' },
              ].map(({ file, label }) => (
                <div key={file} className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] rounded-2xl overflow-hidden shadow-xl bg-white">
                  <img src={`${basePath}/images/modern-bank-reconciliation/${file}.png`} alt={label} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Usability testing */}
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
              Usability testing
            </motion.h2>

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
                Before the product launch, we conducted usability testing to evaluate our design. We recruited four finance professionals from usertesting.com to assess the process, from importing bank statements to completing reconciliations. The feedback was overwhelmingly positive, with a <span className="font-semibold">100% task completion rate</span>. Insights on design specifics were well-received and have informed our subsequent improvements.
              </p>
            </motion.div>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-700 before:block before:w-10 before:h-[4px] before:bg-[#077FAB] before:rounded-full before:mb-1.5 mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-7 lg:mb-8"
            >
              Key findings
            </motion.h3>

            {/* First user quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={ease}
              className="flex gap-4 mb-8 md:mb-10 lg:mb-12"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
                <img src={`${basePath}/emojis/man-office-worker.png`} alt="User" className="w-12 h-12" />
              </div>
              <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed">
                  "I could see this tool helping me with doing this monthly checks and balances, for sure. If there's way you can extract a report, too, then it would help, absolutely. I'm interested in seeing when will this go live so that I can actually use it? I'll definitely check it out. I can see it... helping me with things my current tools (SAP and Salesforce) are not doing."
                </p>
              </div>
            </motion.div>

            {/* Two UI Screenshots */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-10 lg:mb-12"
            >
              {['finding01', 'finding02'].map((name, i) => (
                <motion.div key={name} variants={fadeUp} transition={{ ...ease, delay: i * 0.12 }} className="rounded-lg overflow-hidden">
                  <img src={`${basePath}/images/modern-bank-reconciliation/${name}.png`} alt={`Key Finding ${i + 1}`} className="w-full h-auto" />
                </motion.div>
              ))}
            </motion.div>

            {/* Two user quotes */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { quote: '"There\'s some debit and credit transactions in and out - I like how that\'s set up how the debits and credits are in separate areas - looks like a reconciliation."', attr: '-- Senior Manager / Accountant', emoji: 'woman-office-worker' },
                { quote: '"It looks like the system has performed some analysis on the statement. We have received a bank statement and want to check these against what we expect. I need to manually go and see what do they align to."', attr: '-- Business Consultant', emoji: 'man-technologist' },
              ].map(({ quote, attr, emoji }, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ ...ease, delay: i * 0.12 }} className="flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
                    <img src={`${basePath}/emojis/${emoji}.png`} alt="User" className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed mb-2">{quote}</p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-900 font-semibold">{attr}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Product Impact */}
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
              Product Impact
            </motion.h2>

            {/* Timeline with staggered circles */}
            <div className="space-y-6 md:space-y-7 lg:space-y-8 mb-12 md:mb-14 lg:mb-16 pl-16 md:pl-20 lg:pl-24">
              {[
                {
                  month: 'March', year: '2024', ml: '',
                  text: <>GA feature has been demonstrated with customers Germany Red Cross and Bavaria Red Cross. <span className="text-[#077FAB]">Users are satisfied with these features</span> and believe Modern bank reconciliation can significantly reduce their manual work.</>,
                },
                {
                  month: 'April', year: '2024', ml: 'ml-28 md:ml-36 lg:ml-44',
                  text: <>Support shared very positive sentimental feedback from customer for the feature, <span className="text-[#077FAB]">customers are chasing the GA for availability</span> in product environment.</>,
                },
                {
                  month: 'May', year: '2024', ml: 'ml-7 md:ml-[36px] lg:ml-[44px]',
                  text: <>A partner education session was completed in April, more than 60 participants from 16 different partners in Denmark and Germany. Partner feedback: <span className="text-[#077FAB]">"It is so good that Microsoft is doing these new bank functionalities</span> so we can recommend standard instead of an ISV".</>,
                },
              ].map(({ month, year, ml, text }, i) => (
                <motion.div
                  key={month}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ ...ease, delay: i * 0.15 }}
                  className={`flex items-center gap-8 md:gap-10 lg:gap-12 max-w-3xl lg:max-w-4xl ${ml}`}
                >
                  <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center" style={{ boxShadow: '0 0 24px 8px rgba(0,0,0,0.08)' }}>
                    <div className="text-center">
                      <div className="font-bold text-sm md:text-base lg:text-lg text-gray-800">{month}</div>
                      <div className="font-bold text-sm md:text-base lg:text-lg text-gray-800">{year}</div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Line Chart */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
              transition={ease}
              className="max-w-2xl mx-auto bg-white rounded-2xl px-8 pt-8 pb-6 md:px-10 md:pt-10 md:pb-7 lg:px-12 lg:pt-12 lg:pb-8 shadow-sm border border-gray-100"
            >
              <svg viewBox="0 0 500 200" className="w-full" aria-label="Active preview customers chart">
                <line x1="250" y1="60" x2="250" y2="168" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5,4" />
                <line x1="430" y1="40" x2="430" y2="168" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5,4" />
                <polyline points="70,115 250,60 430,40" fill="none" stroke="#5b9dc8" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                <circle cx="70"  cy="115" r="5" fill="#5b9dc8" />
                <circle cx="250" cy="60"  r="5" fill="#5b9dc8" />
                <circle cx="430" cy="40"  r="5" fill="#5b9dc8" />
                <text x="70"  y="100" textAnchor="middle" fill="#5b9dc8" fontWeight="bold" fontSize="15">40</text>
                <text x="250" y="45"  textAnchor="middle" fill="#5b9dc8" fontWeight="bold" fontSize="15">89</text>
                <text x="430" y="25"  textAnchor="middle" fill="#5b9dc8" fontWeight="bold" fontSize="15">108</text>
                <text x="70"  y="187" textAnchor="middle" fill="#9ca3af" fontSize="13">4.1</text>
                <text x="250" y="187" textAnchor="middle" fill="#9ca3af" fontSize="13">5.1</text>
                <text x="430" y="187" textAnchor="middle" fill="#9ca3af" fontSize="13">6.1</text>
              </svg>
              <p className="text-center text-sm md:text-base lg:text-lg text-gray-700 mt-2 font-semibold">
                Active preview customers within last 14 days
              </p>
            </motion.div>
          </div>
        </div>

        {/* Growth */}
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
              Growth
            </motion.h2>

            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {[
                {
                  num: '1', title: 'Comprehensive Design:',
                  text: 'The design philosophy should be rooted in actual business processes, optimizing the overall user experience pathway rather than merely focusing on page improvements.',
                },
                {
                  num: '2', title: 'Bold Innovation:',
                  text: 'In design brainstorming sessions, it is crucial to embrace bold innovation, striving for an exceptional user experience while establishing clear ideas and development directions, and assessing feasibility appropriately.',
                },
                {
                  num: '3', title: 'Prudent Implementation:',
                  text: 'During project execution, it is essential to balance efficiency and user experience among stakeholders. A gradual innovation strategy should be adopted, allocating resources wisely to achieve optimal results while formulating input-output metrics and intermediate products based on real circumstances.',
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

        {/* Footer Nav */}
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

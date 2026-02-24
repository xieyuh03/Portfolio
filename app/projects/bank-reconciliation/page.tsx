'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

// Helper to handle basePath for GitHub Pages
const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

export default function BankReconciliationPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white pt-24">

        {/* Back Link - 窄容器 */}
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

        {/* Hero Section - 宽容器 */}
        <div className="max-w-[90vw] 2xl:max-w-[2000px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 2xl:gap-20 items-center">

            {/* Left: Title and Description */}
            <div>
              <h1 className="text-[28px] md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">
                Modern Bank Reconciliation
              </h1>

              <p className="text-sm md:text-base lg:text-lg 2xl:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                Enhance the efficiency of business users in completing bank transactions and reconciling
                company accounts by integrating advanced functionalities and optimizing the user experience.
              </p>

              {/* Dynamics 365 Finance Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dynamics 365</div>
                  <div className="text-sm text-gray-600">Finance</div>
                </div>
              </div>
            </div>

            {/* Right: 2 images stacked vertically */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/title image 01.png`}
                  alt="Bank Reconciliation UI Screenshot 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/title image 02.png`}
                  alt="Bank Reconciliation UI Screenshot 2"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Content Section - 窄容器 */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

          <div className="border-t border-gray-200 mb-8 md:mb-10 lg:mb-12"></div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] 2xl:grid-cols-[400px_1fr] gap-8 md:gap-10 lg:gap-12 2xl:gap-16 mb-12 md:mb-14 lg:mb-16 2xl:mb-20">

            {/* Left Column - Info Cards */}
            <div className="space-y-8">

              {/* Product Area */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg md:text-xl lg:text-2xl">📍</span>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">Product Area</h3>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed pl-6 md:pl-7 lg:pl-8">
                  Dynamic 365 Finance<br />ERP
                </p>
              </div>

              {/* Role */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg md:text-xl lg:text-2xl">👤</span>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">Role</h3>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed pl-6 md:pl-7 lg:pl-8">
                  UI/UX design<br />
                  User research
                </p>
              </div>

              {/* Team */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💻</span>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">Team</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed pl-7">
                  PM x 1<br />
                  Designer x 1<br />
                  Engineer team ~5
                </p>
              </div>

              {/* Timeline */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📅</span>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">Timeline</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed pl-7">
                  2023.4 - 2024.6
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">

              {/* Results */}
              <div>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">Results</h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                  We have successfully launched the latest version of the Bank Statement and Reconciliation
                  Worksheet to the public, ensuring a seamless data migration process. Received positive feedback
                  from our customers.
                </p>
              </div>

              {/* Personal Contribution */}
              <div>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">Personal Contribution</h3>
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
              </div>

              {/* User Feedback */}
              <div>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">User Feedback</h3>
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
              </div>
            </div>
          </div>

        </div>
        {/* End of Second Content Section */}

        {/* Design Showcase - 全屏宽度 */}
        <div className="w-full px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={`${basePath}/images/modern-bank-reconciliation/image showcase 01.png`}
                alt="Design Showcase 1"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={`${basePath}/images/modern-bank-reconciliation/image showcase 02.png`}
                alt="Design Showcase 2"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={`${basePath}/images/modern-bank-reconciliation/image showcase 03.png`}
                alt="Design Showcase 3"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Project Overview Section - 窄容器 */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mt-12 md:mt-16 lg:mt-20 mb-12 md:mb-14 lg:mb-16">
            {/* Section Title */}
            <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-8 md:mb-10 lg:mb-12">Project Overview</h2>

            {/* Persona */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6">Persona</h3>
              <div className="space-y-6 md:space-y-7 lg:space-y-8 pl-8 md:pl-12 lg:pl-16">
                {/* Treasurer */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <img
                      src={`${basePath}/emojis/woman-technologist.png`}
                      alt="Treasurer"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 md:mb-2 lg:mb-2.5">Treasurer (Primary)</h4>
                    <ul className="space-y-1.5 md:space-y-2 lg:space-y-2.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5 lg:pl-6">
                      <li>Handle all incoming and outgoing banking transactions on behalf of the company</li>
                      <li>Complete bank reconciliation and reports on a regular basis</li>
                      <li>Submit periodic reports detailing the company's financial situation and forecasting</li>
                    </ul>
                  </div>
                </div>

                {/* Finance Manager */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <img
                      src={`${basePath}/emojis/woman-office-worker.png`}
                      alt="Finance Manager"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 md:mb-2 lg:mb-2.5">Finance Manager</h4>
                    <ul className="space-y-1.5 md:space-y-2 lg:space-y-2.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5 lg:pl-6">
                      <li>Manage the progress of banking reports.</li>
                      <li>Regularly monitor the status of bank reconciliation to maintain a clear understanding of the company's cash health.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Business flow */}
            <div className="mb-12">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6">Business flow</h3>
              <div className="flex justify-center py-10">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/Business flow.png`}
                  alt="Business Flow Diagram"
                  className="w-4/5 h-auto"
                />
              </div>
            </div>

            {/* Goals - Three Column */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-8">
                {/* Left: Title */}
                <div>
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900">Goals</h3>
                </div>

                {/* Middle Column */}
                <div>
                  <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-5">
                    <span className="text-cyan-600">Enhance functional requirements</span> to meet customer usage needs.
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2 lg:space-y-2.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5 lg:pl-6">
                    <li>New features include: generate payment, generate voucher.</li>
                    <li>Add automatic matching rule functionality.</li>
                  </ul>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-5">
                    <span className="text-cyan-600">Optimize product design</span> to improve user experience and increase efficiency.
                  </h4>
                  <ul className="space-y-1.5 md:space-y-2 lg:space-y-2.5 text-sm md:text-base lg:text-lg text-gray-600 list-disc pl-4 md:pl-5 lg:pl-6">
                    <li>Optimize page layout and structure.</li>
                    <li>Reconstruct navigation and interaction.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Source - Three Column */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-8">
                {/* Left: Title */}
                <div>
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900">Source</h3>
                </div>

                {/* Middle Column */}
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Customer feedback:</h4>
                  <p className="text-base text-gray-600 mb-4">Idea Portal, Yammer Group, Customer meetings.</p>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">MS Internal:</h4>
                  <p className="text-base text-gray-600">Function planning.</p>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Customer feedback:</h4>
                  <p className="text-base text-gray-600 mb-4">Customer meetings, Satisfaction rate.</p>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">MS Internal:</h4>
                  <p className="text-base text-gray-600">Design experience review.</p>
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6">Challenge</h3>
              <ul className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-900 font-semibold list-disc pl-4 md:pl-5 lg:pl-6">
                <li>Complex product logic and a massive amount of data migration, involving tens of thousands to hundreds of thousands of records.</li>
                <li>Consistency between backend data processing logic and frontend interactions, including the reading and handling of thousands of transactions.</li>
                <li>Limited frontend design component library and customization requirements.</li>
              </ul>
            </div>

            {/* Team Collaboration */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6">Team Collaboration</h3>
              <div className="flex justify-center py-10">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/Team collaboration.png`}
                  alt="Team Collaboration Diagram"
                  className="w-2/5 h-auto"
                />
              </div>
            </div>

            {/* Bank statement design */}
            <div className="mb-12">
              <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6 md:mb-7 lg:mb-8">Bank statement design</h2>

              <div className="mb-8">
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">Main pain points</h3>
                <ul className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-900 font-semibold list-disc pl-4 md:pl-5 lg:pl-6">
                  <li>
                    The <span className="text-cyan-600">information hierarchy</span> lacks clarity.
                  </li>
                  <li>
                    The <span className="text-cyan-600">relationship</span> between the bank statement and the worksheet is not clearly illustrated.
                  </li>
                  <li>
                    The <span className="text-cyan-600">status</span> of transactions and statements is confusing.
                  </li>
                </ul>
              </div>

              {/* Design Comparison */}
              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}/images/modern-bank-reconciliation/original design.png`}
                    alt="Original Design"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={`${basePath}/images/modern-bank-reconciliation/new design.png`}
                    alt="New Design"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Interaction Logic and State Transitions */}
            <div className="mb-12 md:mb-14 lg:mb-16">
              <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6 md:mb-7 lg:mb-8">
                Interaction Logic and State Transitions
              </h2>

              {/* The relationship between the bank statement and the worksheet */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">
                  The relationship between the bank statement and the worksheet
                </h3>
                <ul className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-900 font-semibold list-disc pl-4 md:pl-5 lg:pl-6 mb-6 md:mb-7 lg:mb-8">
                  <li>A single reconciliation worksheet may include transactions from various bank statements.</li>
                  <li>Transactions from one bank statement can be organized into multiple worksheets for the reconciliation process.</li>
                </ul>
                {/* Relationship Diagram */}
                <div className="flex justify-center py-10">
                  <img
                    src={`${basePath}/images/modern-bank-reconciliation/relationship between.png`}
                    alt="Relationship Between Bank Statement and Worksheet"
                    className="w-4/5 h-auto"
                  />
                </div>
              </div>

              {/* Status inherit */}
              <div className="mb-8 md:mb-10 lg:mb-12">
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">
                  Status inherit
                </h3>
                <ul className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-900 font-semibold list-disc pl-4 md:pl-5 lg:pl-6 mb-6 md:mb-7 lg:mb-8">
                  <li>The transaction status and bank statement status are distinct elements in financial reporting.</li>
                  <li>A bank statement status is marked as reconciled when all associated transactions have been confirmed as reconciled.</li>
                </ul>
                {/* Status Flow Diagram */}
                <div className="flex justify-center py-10">
                  <img
                    src={`${basePath}/images/modern-bank-reconciliation/status inherit.png`}
                    alt="Status Inherit Diagram"
                    className="w-4/5 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Project Overview Section */}

        {/* Worksheet design - 窄容器 */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="mb-12">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6 md:mb-7 lg:mb-8">Worksheet design</h2>

            <div className="mb-8">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">Main pain points</h3>
              <ul className="space-y-2 md:space-y-2.5 lg:space-y-3 text-sm md:text-base lg:text-lg text-gray-900 font-semibold list-disc pl-4 md:pl-5 lg:pl-6">
                <li>
                  <span className="text-cyan-600">Navigation and interactions</span> are not user-friendly, making it hard for users to find what they need.
                </li>
                <li>
                  The <span className="text-cyan-600">selection, comparison and confirmation</span> process is disorganized, causing confusion.
                </li>
              </ul>
            </div>

            {/* Design Images */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/Worksheet original design.png`}
                  alt="Worksheet Original Design"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/worksheet final design.png`}
                  alt="Worksheet Final Design"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design explorations - 窄容器 */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="mb-12">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6 md:mb-7 lg:mb-8">Design explorations</h2>

            {/* Quote with left border */}
            <div className="mb-8 md:mb-10 lg:mb-12 border-l-4 border-cyan-600 pl-4 md:pl-5 lg:pl-6 bg-gray-50 py-4">
              <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                Design is an iterative process that demands careful refinement. We have examined several layout options, including card view, grouped list view, and side-by-side list view. Our evaluation focused on information presentation, interaction processes, and usability effectiveness. We decided that the side-by-side view is the best option and continued refining it to finalize the design.
              </p>
            </div>

            {/* Unmatched transactions */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6">Unmatched transactions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                {[1,2,3,4,5,6].map((n) => (
                  <div key={n} className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={`${basePath}/images/modern-bank-reconciliation/unmatched transaction/${n}.png`}
                      alt={`Unmatched transactions design ${n}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Pending transaction */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-4 md:mb-5 lg:mb-6">Pending transaction</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                {['2.1','2.2','2.3','2.4','2.5','2.6'].map((n) => (
                  <div key={n} className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={`${basePath}/images/modern-bank-reconciliation/pending transaction/${n}.png`}
                      alt={`Pending transaction design ${n}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flowchart - 全屏宽度 */}
        <div className="w-full mb-12 md:mb-16 lg:mb-20">
          {/* Title and Quote in narrow container */}
          <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6 md:mb-7 lg:mb-8">Flowchart</h2>

            {/* Quote with left border */}
            <div className="border-l-4 border-cyan-600 pl-4 md:pl-5 lg:pl-6 bg-gray-50 py-4">
              <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                Product design and execution often present challenges. As the project scope evolves, designer involvement shifts, necessitating deeper research into the product. This leads to ongoing design iterations and functionality assessments, culminating in final decisions made collaboratively with the product manager and engineering team.
              </p>
            </div>
          </div>

          {/* Flow Images - Horizontal Scroll - Full Width */}
          <div className="overflow-x-auto scrollbar-hide px-6 md:px-8 lg:px-12">
            <div className="flex gap-6 pb-2">
              <div className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/Flow-original.png`}
                  alt="Flow Original Design"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/flow-version01.png`}
                  alt="Flow Design Version 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/flow-version02.png`}
                  alt="Flow Design Version 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/Flow-final.png`}
                  alt="Flow Final Design"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Usability testing - 窄容器 */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="mb-12">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-6 md:mb-7 lg:mb-8">Usability testing</h2>

            {/* Quote with left border */}
            <div className="mb-8 md:mb-10 lg:mb-12 border-l-4 border-cyan-600 pl-4 md:pl-5 lg:pl-6 bg-gray-50 py-4">
              <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                Before the product launch, we conducted usability testing to evaluate our design. We recruited four finance professionals from usertesting.com to assess the process, from importing bank statements to completing reconciliations. The feedback was overwhelmingly positive, with a <span className="font-semibold">100% task completion rate</span>. Insights on design specifics were well-received and have informed our subsequent improvements.
              </p>
            </div>

            {/* Key findings */}
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-6 md:mb-7 lg:mb-8">Key findings</h3>

            {/* First user quote */}
            <div className="flex gap-4 mb-8 md:mb-10 lg:mb-12">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed">
                  "I could see this tool helping me with doing this monthly checks and balances, for sure. If there's way you can extract a report, too, then it would help, absolutely. I'm interested in seeing when will this go live so that I can actually use it? I'll definitely check it out. I can see it... helping me with things my current tools (SAP and Salesforce) are not doing."
                </p>
              </div>
            </div>

            {/* Two UI Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-10 lg:mb-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/finding01.png`}
                  alt="Key Finding 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={`${basePath}/images/modern-bank-reconciliation/finding02.png`}
                  alt="Key Finding 2"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Two user quotes below screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed mb-2">
                    "There's some debit and credit transactions in and out - I like how that's set up how the debits and credits are in separate areas - looks like a reconciliation."
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-gray-900 font-semibold">-- Senior Manager / Accountant</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 italic leading-relaxed mb-2">
                    "It looks like the system has performed some analysis on the statement. We have received a bank statement and want to check these against what we expect. I need to manually go and see what do they align to."
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-gray-900 font-semibold">-- Business Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Impact - 窄容器 */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="mb-12">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-8 md:mb-10 lg:mb-12">Product Impact</h2>

            {/* Timeline with circles */}
            <div className="relative pl-16 md:pl-20 lg:pl-24 mb-12 md:mb-14 lg:mb-16">
              {/* Vertical line connecting circles */}
              <div className="absolute left-16 md:left-20 lg:left-24 top-0 bottom-0 w-0.5 bg-gray-300" style={{transform: 'translateX(-50%)'}}></div>

              {/* March 2024 */}
              <div className="relative mb-12 md:mb-16 lg:mb-20">
                <div className="absolute left-0 top-0 w-16 md:w-20 lg:w-24 flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="font-bold text-sm md:text-base lg:text-lg">March</div>
                      <div className="font-bold text-sm md:text-base lg:text-lg">2024</div>
                    </div>
                  </div>
                </div>
                <div className="ml-16 md:ml-20 lg:ml-24 bg-gray-50 p-4 md:p-5 lg:p-6 rounded-lg">
                  <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                    GA feature has been demonstrated with customers Germany Red Cross and Bavaria Red Cross. <span className="text-cyan-600">Users are satisfied with these features</span> and believe Modern bank reconciliation can significantly reduce their manual work.
                  </p>
                </div>
              </div>

              {/* April 2024 */}
              <div className="relative mb-12 md:mb-16 lg:mb-20">
                <div className="absolute left-0 top-0 w-16 md:w-20 lg:w-24 flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="font-bold text-sm md:text-base lg:text-lg">April</div>
                      <div className="font-bold text-sm md:text-base lg:text-lg">2024</div>
                    </div>
                  </div>
                </div>
                <div className="ml-16 md:ml-20 lg:ml-24 bg-gray-50 p-4 md:p-5 lg:p-6 rounded-lg">
                  <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                    Support shared very positive sentimental feedback from customer for the feature, <span className="text-cyan-600">customers are chasing the GA for availability</span> in product environment.
                  </p>
                </div>
              </div>

              {/* May 2024 */}
              <div className="relative mb-12 md:mb-14 lg:mb-16">
                <div className="absolute left-0 top-0 w-16 md:w-20 lg:w-24 flex flex-col items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="font-bold text-sm md:text-base lg:text-lg">May</div>
                      <div className="font-bold text-sm md:text-base lg:text-lg">2024</div>
                    </div>
                  </div>
                </div>
                <div className="ml-16 md:ml-20 lg:ml-24 bg-gray-50 p-4 md:p-5 lg:p-6 rounded-lg">
                  <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed">
                    A partner education session was completed in April, more than 60 participants from 16 different partners in Denmark and Germany. Partner feedback: <span className="text-cyan-600">"It is so good that Microsoft is doing these new bank functionalities</span> so we can recommend standard instead of an ISV".
                  </p>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white rounded-2xl px-8 pt-8 pb-6 md:px-10 md:pt-10 md:pb-7 lg:px-12 lg:pt-12 lg:pb-8 shadow-sm border border-gray-100">
              <svg viewBox="0 0 500 200" className="w-full" aria-label="Active preview customers chart">
                {/* Dashed vertical lines for 5.1 and 6.1 */}
                <line x1="250" y1="60" x2="250" y2="168" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5,4" />
                <line x1="430" y1="40" x2="430" y2="168" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5,4" />

                {/* Connecting line */}
                <polyline
                  points="70,115 250,60 430,40"
                  fill="none"
                  stroke="#5b9dc8"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Data point dots */}
                <circle cx="70"  cy="115" r="5" fill="#5b9dc8" />
                <circle cx="250" cy="60"  r="5" fill="#5b9dc8" />
                <circle cx="430" cy="40"  r="5" fill="#5b9dc8" />

                {/* Value labels above dots */}
                <text x="70"  y="100" textAnchor="middle" fill="#5b9dc8" fontWeight="bold" fontSize="15">40</text>
                <text x="250" y="45"  textAnchor="middle" fill="#5b9dc8" fontWeight="bold" fontSize="15">89</text>
                <text x="430" y="25"  textAnchor="middle" fill="#5b9dc8" fontWeight="bold" fontSize="15">108</text>

                {/* X-axis labels */}
                <text x="70"  y="187" textAnchor="middle" fill="#9ca3af" fontSize="13">4.1</text>
                <text x="250" y="187" textAnchor="middle" fill="#9ca3af" fontSize="13">5.1</text>
                <text x="430" y="187" textAnchor="middle" fill="#9ca3af" fontSize="13">6.1</text>
              </svg>
              <p className="text-center text-sm md:text-base lg:text-lg text-gray-700 mt-2 font-semibold">
                Active preview customers within last 14 days
              </p>
            </div>
          </div>
        </div>

        {/* Growth - 窄容器 */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12 md:mb-16 lg:mb-20">
          <div className="mb-12">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-8 md:mb-10 lg:mb-12">Growth</h2>

            {/* Three numbered points */}
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {/* 1. Comprehensive Design */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-600">1</div>
                <div className="flex-1 pt-2">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-2 md:mb-3">Comprehensive Design:</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    The design philosophy should be rooted in actual business processes, optimizing the overall user experience pathway rather than merely focusing on page improvements.
                  </p>
                </div>
              </div>

              {/* 2. Bold Innovation */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-600">2</div>
                <div className="flex-1 pt-2">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-2 md:mb-3">Bold Innovation:</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    In design brainstorming sessions, it is crucial to embrace bold innovation, striving for an exceptional user experience while establishing clear ideas and development directions, and assessing feasibility appropriately.
                  </p>
                </div>
              </div>

              {/* 3. Prudent Implementation */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-600">3</div>
                <div className="flex-1 pt-2">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-gray-900 mb-2 md:mb-3">Prudent Implementation:</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    During project execution, it is essential to balance efficiency and user experience among stakeholders. A gradual innovation strategy should be adopted, allocating resources wisely to achieve optimal results while formulating input-output metrics and intermediate products based on real circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Nav - 窄容器 */}
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
    </>
  );
}

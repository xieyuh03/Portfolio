'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function BankReconciliationPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white pt-24">

        {/* Back Link - 窄容器 */}
        <div className="max-w-7xl mx-auto px-8 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Projects
          </Link>
        </div>

        {/* Hero Section - 宽容器 */}
        <div className="max-w-[1600px] mx-auto px-8 py-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Title and Description */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Modern Bank Reconciliation
              </h1>

              <p className="text-base text-gray-700 leading-relaxed mb-8">
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
                  src="/images/modern bank reconciliation/title image 01.png"
                  alt="Bank Reconciliation UI Screenshot 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/modern bank reconciliation/title image 02.png"
                  alt="Bank Reconciliation UI Screenshot 2"
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Content Section - 窄容器 */}
        <div className="max-w-5xl mx-auto px-8">

          <div className="border-t border-gray-200 mb-12"></div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 mb-16">

            {/* Left Column - Info Cards */}
            <div className="space-y-8">

              {/* Product Area */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📍</span>
                  <h3 className="text-lg font-bold text-gray-900">Product Area</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed pl-7">
                  Dynamic 365 Finance<br />ERP
                </p>
              </div>

              {/* Role */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">👤</span>
                  <h3 className="text-lg font-bold text-gray-900">Role</h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed pl-7">
                  UI/UX design<br />
                  User research
                </p>
              </div>

              {/* Team */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💻</span>
                  <h3 className="text-lg font-bold text-gray-900">Team</h3>
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
                  <h3 className="text-lg font-bold text-gray-900">Timeline</h3>
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
                <h2 className="text-lg font-bold text-gray-900 mb-4">Results</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  We have successfully launched the latest version of the Bank Statement and Reconciliation
                  Worksheet to the public, ensuring a seamless data migration process. Received positive feedback
                  from our customers.
                </p>
              </div>

              {/* Personal Contribution */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Personal Contribution</h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-600 leading-relaxed">
                    Took in charge of the design for the bank statement and reconciliation worksheet, enhancing both
                    its visual appeal and ensuring that interactions align with the overall business process to boost
                    efficiency.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Worked closely with the project manager and engineering team to conduct thorough technical
                    evaluations, successfully addressing limitations to deliver the product to the market.
                  </p>
                </div>
              </div>

              {/* User Feedback */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">User Feedback</h2>
                <div className="space-y-4">
                  <p className="text-base text-gray-600 leading-relaxed">
                    Support shared very positive sentimental feedback from customer for the feature,
                    customers are chasing the GA for availability in product environment.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
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
        <div className="w-full px-8 py-12 mb-20">
          <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/modern bank reconciliation/image showcase 01.png"
                alt="Design Showcase 1"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/modern bank reconciliation/image showcase 02.png"
                alt="Design Showcase 2"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/modern bank reconciliation/image showcase 03.png"
                alt="Design Showcase 3"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Project Overview Section - 窄容器 */}
        <div className="max-w-5xl mx-auto px-8">
          <div className="mt-20 mb-16">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Project Overview</h2>

            {/* Persona */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Persona</h3>
              <div className="space-y-8 pl-16">
                {/* Treasurer */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <img
                      src="/emojis/woman-technologist.png"
                      alt="Treasurer"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Treasurer (Primary)</h4>
                    <ul className="space-y-2 text-base text-gray-600 list-disc pl-5">
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
                      src="/emojis/woman-office-worker.png"
                      alt="Finance Manager"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Finance Manager</h4>
                    <ul className="space-y-2 text-base text-gray-600 list-disc pl-5">
                      <li>Manage the progress of banking reports.</li>
                      <li>Regularly monitor the status of bank reconciliation to maintain a clear understanding of the company's cash health.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Business flow */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Business flow</h3>
              <div className="rounded-lg overflow-hidden shadow-xl py-10">
                <img
                  src="/images/modern bank reconciliation/Business flow.png"
                  alt="Business Flow Diagram"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Goals - Three Column */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-8">
                {/* Left: Title */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Goals</h3>
                </div>

                {/* Middle Column */}
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-4">
                    <span className="text-cyan-600">Enhance functional requirements</span> to meet customer usage needs.
                  </h4>
                  <ul className="space-y-2 text-base text-gray-600 list-disc pl-5">
                    <li>New features include: generate payment, generate voucher.</li>
                    <li>Add automatic matching rule functionality.</li>
                  </ul>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-4">
                    <span className="text-cyan-600">Optimize product design</span> to improve user experience and increase efficiency.
                  </h4>
                  <ul className="space-y-2 text-base text-gray-600 list-disc pl-5">
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
                  <h3 className="text-xl font-bold text-gray-900">Source</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Challenge</h3>
              <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                <li>Complex product logic and a massive amount of data migration, involving tens of thousands to hundreds of thousands of records.</li>
                <li>Consistency between backend data processing logic and frontend interactions, including the reading and handling of thousands of transactions.</li>
                <li>Limited frontend design component library and customization requirements.</li>
              </ul>
            </div>

            {/* Team Collaboration */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Team Collaboration</h3>
              <div className="bg-gray-50 rounded-lg p-16 py-20">
                <div className="max-w-3xl mx-auto relative">
                  {/* Product Manager - Top Center */}
                  <div className="flex flex-col items-center mb-24">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3">
                      <img
                        src="/emojis/man-office-worker.png"
                        alt="Product Manager"
                        className="w-14 h-14"
                      />
                    </div>
                    <div className="text-base font-semibold text-gray-900">Product Manager</div>
                  </div>

                  {/* Bottom Row - Designer and Engineer Team */}
                  <div className="grid grid-cols-2 gap-32 relative">
                    {/* Designer - Left */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3">
                        <img
                          src="/emojis/man-artist.png"
                          alt="Designer"
                          className="w-14 h-14"
                        />
                      </div>
                      <div className="text-base font-semibold text-gray-900">Designer</div>
                    </div>

                    {/* Engineer Team - Right */}
                    <div className="flex flex-col items-center">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <img
                            src="/emojis/woman-technologist.png"
                            alt="Engineer"
                            className="w-14 h-14"
                          />
                        </div>
                        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <img
                            src="/emojis/man-technologist.png"
                            alt="Engineer"
                            className="w-14 h-14"
                          />
                        </div>
                        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <img
                            src="/emojis/woman-technologist-3.png"
                            alt="Engineer"
                            className="w-14 h-14"
                          />
                        </div>
                        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <img
                            src="/emojis/man-technologist-2.png"
                            alt="Engineer"
                            className="w-14 h-14"
                          />
                        </div>
                      </div>
                      <div className="text-base font-semibold text-gray-900">Engineer Team</div>
                    </div>
                  </div>

                  {/* SVG for arrows */}
                  <svg className="absolute w-full h-full top-0 left-0 pointer-events-none" style={{ zIndex: 1 }}>
                    <defs>
                      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#374151" />
                      </marker>
                    </defs>

                    {/* PM to Designer arrow */}
                    <line
                      x1="50%"
                      y1="22%"
                      x2="28%"
                      y2="58%"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />

                    {/* PM to Engineer Team arrow */}
                    <line
                      x1="50%"
                      y1="22%"
                      x2="72%"
                      y2="58%"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />

                    {/* Designer to Engineer Team arrow */}
                    <line
                      x1="36%"
                      y1="72%"
                      x2="64%"
                      y2="72%"
                      stroke="#374151"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bank statement design */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Bank statement design</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Main pain points</h3>
                <ul className="space-y-3 text-base text-gray-900 list-disc pl-5">
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
            </div>
          </div>
        </div>
        {/* End of Project Overview Section */}

        {/* Footer Nav - 窄容器 */}
        <div className="max-w-5xl mx-auto px-8 mb-20">
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

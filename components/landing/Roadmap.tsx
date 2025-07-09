import React from "react";

export const metadata = {
  title: 'NFC Livestock Tags - Project Roadmap',
  description: 'Development roadmap for the open-source NFC livestock recordkeeping system supporting sustainable animal welfare.',
};

export const Roadmap = () => {
  return (
    <div className="py-14 sm:py-16 px-4 sm:px-6 lg:px-0">
      {/* Hero Section */}
      <div className="text-center mb-10 sm:mb-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Project Roadmap & Impact
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Technical milestones, research and education objectives, to validate NFC ear tags.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-16">
        {/* Stage Navigation Table */}
        <div className="lg:col-span-2 mb-8 sm:mb-16 lg:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-12 text-sm bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <a href="#phase-1" className="col-span-1 sm:col-span-12 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center py-3 sm:py-4 px-4 sm:px-6 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <div className="hidden sm:block w-1/6 text-primary-500 font-mono">Now</div>
              <div className="w-full sm:w-3/6 font-medium text-gray-800 dark:text-white">Phase 1: NFC App & Cloud Infrastructure</div>
              <div className="w-full sm:w-2/6 text-right sm:text-right text-gray-600 dark:text-gray-300 sm:ml-auto">In Progress</div>
              <div className="w-full sm:w-1/6 text-right text-primary-500">↓</div>
            </a>
            <a href="#phase-2" className="col-span-1 sm:col-span-12 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center py-3 sm:py-4 px-4 sm:px-6 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <div className="hidden sm:block w-1/6 text-primary-500 font-mono">Next</div>
              <div className="w-full sm:w-3/6 font-medium text-gray-800 dark:text-white">Phase 2: Field Validation</div>
              <div className="w-full sm:w-2/6 text-right sm:text-right text-gray-600 dark:text-gray-300 sm:ml-auto">Starting 2026</div>
              <div className="w-full sm:w-1/6 text-right text-primary-500">↓</div>
            </a>
            <a href="#phase-3" className="col-span-1 sm:col-span-12 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center py-3 sm:py-4 px-4 sm:px-6 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <div className="hidden sm:block w-1/6"></div>
              <div className="w-full sm:w-3/6 font-medium text-gray-800 dark:text-white">Phase 3: Outreach & Ecosystem</div>
              <div className="w-full sm:w-2/6 text-right sm:text-right text-gray-400 dark:text-gray-500 sm:ml-auto">Planned</div>
              <div className="w-full sm:w-1/6 text-right text-primary-500">↓</div>
            </a>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="lg:col-span-1 mb-16 lg:mb-0">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">Why It Matters</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
            Small-scale producers face real barriers: limited infrastructure, time pressure, and fragmented worksites. We're researching a tool to reduce labor costs and improve welfare.
          </p>
        </div>
      </div>

      {/* Roadmap Phases Section */}
      <section className="space-y-12">
        {/* Phase 1 */}
        <div id="phase-1" className="p-6 sm:p-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
            Phase 1: NFC App & Cloud Infrastructure <span className="text-primary-500 text-sm font-normal">(Current)</span>
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
            <li>React Native iOS app with NFC scanning and local record caching</li>
            <li>Supabase backend for secure storage and multi-device syncing</li>
            <li>Offline-first architecture with background sync</li>
            <li>Basic user account and flock management system</li>
          </ul>
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">Research Objectives</h3>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Prototype</strong> NFC ear tag scanning mobile application and data management.<br />
              <span className="text-xs text-gray-500">Duration: Months 1–6</span>
            </li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div id="phase-2" className="p-6 sm:p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Phase 2: Field Validation & Iteration <span className="text-gray-500 text-sm font-normal">(Spring 2026)</span>
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
            <li>Deploy on multiple flocks (100+ animals)</li>
            <li>Evaluate scan reliability and tag durability in real-world use</li>
            <li>Incorporate producer feedback into app improvements</li>
            <li>Launch public issue tracker and changelog</li>
          </ul>
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">Research Objectives</h3>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Field-test</strong> the durability and scanability of NFC ear tags across diverse ranch environments.<br />
              <span className="text-xs text-gray-500">Duration: Months 1–6</span>
            </li>
            <li>
              <strong>Quantify labor savings and handling impact</strong> by comparing time and contact events before/after adoption.<br />
              <span className="text-xs text-gray-500">Duration: Months 3–12</span>
            </li>
            <li>
              <strong>Assess compatibility and usability</strong> across devices and user contexts using surveys and feedback loops.<br />
              <span className="text-xs text-gray-500">Duration: Months 6–18</span>
            </li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div id="phase-3" className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Phase 3: Outreach & Ecosystem Building <span className="text-gray-500 text-sm font-normal">(2026+)</span>
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
            <li>Field demo days and regional webinars</li>
            <li>Media kits with instructional content</li>
            <li>Documentation for third-party integration</li>
            <li>Contributor guides for open collaboration</li>
          </ul>
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">Education Objectives</h3>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Publish documentation, schematics, and code contribution guidelines</strong> under a permissive open-source license.<br />
              <span className="text-xs text-gray-500">Duration: Months 6–12</span>
            </li>
            <li>
              <strong>Conduct two outreach events</strong> including a field demo and an online webinar.<br />
              <span className="text-xs text-gray-500">Duration: Year 2–3</span>
            </li>
            <li>
              <strong>Release tutorial content</strong> including videos, guides, and NFC templates via farm networks.<br />
              <span className="text-xs text-gray-500">Duration: Year 2</span>
            </li>
            <li>
              <strong>Collect and analyze feedback</strong> using surveys and interviews to inform future iterations.<br />
              <span className="text-xs text-gray-500">Duration: Years 2–3</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

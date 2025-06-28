import { Container } from "@/components/layout/Container";

export const metadata = {
  title: 'NFC Livestock Tags - Project Roadmap',
  description: 'Development roadmap for the open-source NFC livestock recordkeeping system supporting sustainable animal welfare.',
};

export default function RoadmapPage() {
  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Empowering Producers, Advancing Animal Welfare
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            An open-source, right-to-repair application for managing livestock records using NFC-enabled ear tags and mobile phones.
          </p>
        </div>

        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">About the project</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>PedigreeSync</strong> is a farmer-led, open-source initiative to make livestock recordkeeping radically more accessible, affordable, and resilient. Our near-term goal is to test the viability of using NFC enabled eartags scanned by iPhones as an alternative to proprietary RFID readers. In collaboration with sheep producers and extension advisors, we're seeking a USDA WSARE grant for field testing ear tags starting in Spring 2026.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Why It Matters</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Small-scale producers face real barriers: limited infrastructure, time pressure, and rough terrain. Our system reduces handling stress, saves labor, and ensures compliance—without needing expensive readers or desktop tools.
            </p>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mb-24">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Key Principles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Open-source hardware & software</h4>
              <p className="text-gray-700 dark:text-gray-300">All designs and code are freely available, supporting right-to-repair and local innovation.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Offline-first, cloud-connected</h4>
              <p className="text-gray-700 dark:text-gray-300">Scan and update records in the field; sync automatically when connectivity returns.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Built for real-world conditions</h4>
              <p className="text-gray-700 dark:text-gray-300">Co-designed with producers and validated by UC ANR and SARE partners.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-primary-600 mb-2">Inclusive outreach</h4>
              <p className="text-gray-700 dark:text-gray-300">Hands-on demos, video tutorials, and documentation tailored for underserved farmers.</p>
            </div>
          </div>
        </div>

        {/* SMART Objectives */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-12">🎯 SMART Project Objectives</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-4">Research Objectives</h3>
              <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
                <li><strong>Field-test</strong> the durability and scanability of NFC ear tags across diverse ranch environments.<br /><span className="text-xs text-gray-500">Timeline: Months 1–6</span></li>
                <li><strong>Quantify labor savings and handling impact</strong> by comparing time and contact events before/after adoption.<br /><span className="text-xs text-gray-500">Timeline: Months 3–12</span></li>
                <li><strong>Assess compatibility and usability</strong> across devices and user contexts using surveys and feedback loops.<br /><span className="text-xs text-gray-500">Timeline: Months 6–18</span></li>
                <li><strong>Analyze cost-efficiency and replicability</strong> versus commercial RFID systems.<br /><span className="text-xs text-gray-500">Timeline: Year 2–3</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-4">Education Objectives</h3>
              <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
                <li><strong>Publish documentation, schematics, and code</strong> under a permissive open-source license.<br /><span className="text-xs text-gray-500">Timeline: Months 6–12</span></li>
                <li><strong>Conduct two outreach events</strong> including a field demo and an online webinar.<br /><span className="text-xs text-gray-500">Timeline: Year 2–3</span></li>
                <li><strong>Release tutorial content</strong> including videos, guides, and NFC templates via farm networks.<br /><span className="text-xs text-gray-500">Timeline: Year 2</span></li>
                <li><strong>Collect and analyze feedback</strong> using surveys and interviews to inform future iterations.<br /><span className="text-xs text-gray-500">Timeline: Years 2–3</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <section className="space-y-16">
          {/* Phase 1 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded"></div>
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Phase 1: NFC App & Cloud Infrastructure <span className="text-primary-500 text-sm font-normal">(Current)</span>
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>React Native iOS app with NFC scanning and local record caching</li>
                <li>Supabase backend for secure storage and multi-device syncing</li>
                <li>Offline-first architecture with background sync</li>
                <li>Basic user account and flock management system</li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-gray-900"></div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Phase 2: Field Validation & Iteration <span className="text-gray-500 text-sm font-normal">(Fall 2025)</span>
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>Deploy on multiple flocks (100+ animals)</li>
                <li>Evaluate scan reliability and tag durability in real-world use</li>
                <li>Incorporate producer feedback into app improvements</li>
                <li>Launch public issue tracker and changelog</li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-gray-900"></div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Phase 3: Outreach & Ecosystem Building <span className="text-gray-500 text-sm font-normal">(2026+)</span>
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>Field demo days and regional webinars</li>
                <li>Media kits with instructional content</li>
                <li>Documentation for third-party integration</li>
                <li>Contributor guides for open collaboration</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

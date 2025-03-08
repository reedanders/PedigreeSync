import { Container } from "@/components/layout/Container";

export const metadata = {
  title: 'PedigreeSync - Development Roadmap',
  description: 'Future development plans for the PedigreeSync sheep pedigree management platform',
};

export default function RoadmapPage() {
  return (
    <Container>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">PedigreeSync Development Roadmap</h1>
        
        <p className="text-lg mb-10 text-gray-600 dark:text-gray-300">
          PedigreeSync is an unofficial web implementation of the Windows-based PedigreeMaster software. 
          Our mission is to modernize livestock data recording and provide a more accessible platform for 
          sheep breeders participating in the National Sheep Improvement Program (NSIP).
        </p>

        <div className="space-y-16">
          {/* Current Phase */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded"></div>
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Phase 1: Flock Data Recording <span className="text-primary-500 text-sm font-normal">(Current)</span>
              </h2>
              <div className="prose dark:prose-invert">
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>Upload farm records in any format</li>
                  <li>Automatic conversion to PedigreeMaster XLS format using AI assistance</li>
                  <li>Save and manage flock data in the PedigreeSync database</li>
                  <li>View and browse uploaded records in a user-friendly interface</li>
                  <li>Basic user authentication and farm profile management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-gray-900"></div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Phase 2: Edit and Export Records <span className="text-gray-500 text-sm font-normal">(Coming Q2 2025)</span>
              </h2>
              <div className="prose dark:prose-invert">
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>In-app editing of animal records and flock data</li>
                  <li>Batch operations for multiple records</li>
                  <li>Export data in NSIP-compatible format</li>
                  <li>Data validation to ensure NSIP compliance</li>
                  <li>Record submission tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-gray-900"></div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Phase 3: Data Analysis and Visualization <span className="text-gray-500 text-sm font-normal">(Coming Q4 2025)</span>
              </h2>
              <div className="prose dark:prose-invert">
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>Import analyzed data received from NSIP (Estimated Breeding Values)</li>
                  <li>Interactive data visualizations and charts</li>
                  <li>Breeding recommendation engine</li>
                  <li>Performance tracking over time</li>
                  <li>Custom report generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-gray-900"></div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Future Vision <span className="text-gray-500 text-sm font-normal">(2026 and beyond)</span>
              </h2>
              <div className="prose dark:prose-invert">
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>Mobile application for field data collection</li>
                  <li>Integration with electronic ID systems and scales</li>
                  <li>Advanced genetic analysis tools</li>
                  <li>Flock management beyond genetic data (health records, lambing data, etc.)</li>
                  <li>Community features for comparing data across flocks (with privacy controls)</li>
                  <li>Direct NSIP submission integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Help Shape Our Roadmap</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            PedigreeSync is being built for the sheep breeding community. We welcome your input on features
            that would make the platform more valuable to your operation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://github.com/reedanders/PedigreeSync/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-gray-700"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Submit Feature Ideas
            </a>
            <a 
              href="mailto:contact@pedigreesync.com" 
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
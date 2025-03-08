import { Container } from "@/components/layout/Container";

export const metadata = {
  title: 'About Estimated Breeding Values (EBVs) | PedigreeSync',
  description: 'Learn about Estimated Breeding Values in sheep breeding, their benefits, calculation methods, and how PedigreeSync simplifies EBV data management.',
};

export default function AboutEBVsPage() {
  return (
    <Container>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Understanding Estimated Breeding Values</h1>
        
        <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg mb-10">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Estimated Breeding Values (EBVs) are the most powerful tools available to sheep producers 
            for genetic improvement. They help identify superior genetics and make data-driven 
            breeding decisions that improve flock productivity and profitability.
          </p>
        </div>

        {/* What are EBVs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">What Are Estimated Breeding Values?</h2>
          
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            An Estimated Breeding Value (EBV) is a prediction of an animal&apos;s genetic merit for a specific trait. 
            Unlike raw measurements, EBVs:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Separate genetic factors from environmental influences</li>
            <li>Account for differences in management and feeding</li>
            <li>Allow meaningful comparisons between animals raised in different environments</li>
            <li>Predict the expected performance of an animal&apos;s offspring</li>
            <li>Are expressed as deviations from a breed average</li>
          </ul>
          
          <div className="flex items-center p-4 mb-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="mr-4 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Example:</strong> A ram with an EBV of +2.0 for weaning weight is expected to produce lambs that are, on average, 
              1.0 lb heavier at weaning than lambs sired by a ram with an EBV of 0 (the breed average).
            </p>
          </div>
        </section>

        {/* Benefits of Using EBVs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Benefits of Using EBVs</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Accelerated Genetic Improvement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make faster progress in traits that matter to your operation by selecting for specific genetic merit rather 
                than visual appraisal alone.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Better Breeding Decisions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Match rams and ewes based on complementary traits to address specific weaknesses in your flock.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Economic Benefits</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Increase productivity and efficiency by selecting for economically important traits like growth rate, 
                maternal ability, and parasite resistance.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Objective Comparison</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare animals across different farms, years, and management systems with a standardized measurement system.
              </p>
            </div>
          </div>
        </section>

        {/* How EBVs Are Calculated */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">How EBVs Are Calculated</h2>
          
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            EBVs are calculated using a sophisticated statistical model called BLUP (Best Linear Unbiased Prediction).
            The National Sheep Improvement Program (NSIP) uses this model to analyze:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>The animal&apos;s own performance records</li>
            <li>Records from all known relatives</li>
            <li>The heritability of each trait</li>
            <li>Genetic correlations between traits</li>
            <li>Environmental effects (management group, birth type, age of dam, etc.)</li>
          </ul>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg mb-6">
            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Common Sheep EBV Traits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-primary-600 dark:text-primary-400">Production Traits</h4>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Weaning Weight (WW)</li>
                  <li>Post-Weaning Weight (PWW)</li>
                  <li>Fat Depth (PFAT)</li>
                  <li>Eye Muscle Depth (PEMD)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary-600 dark:text-primary-400">Maternal Traits</h4>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Number of Lambs Born (NLB)</li>
                  <li>Number of Lambs Weaned (NLW)</li>
                  <li>Maternal Milk (MWWT)</li>
                  <li>Maternal Behavior Score (MBS)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300">
            The accuracy of an EBV depends on the amount of information available. As more data is collected 
            on an animal and its relatives, the accuracy of its EBVs increases.
          </p>
        </section>

        {/* Pain Points & PedigreeSync Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Challenges in EBV Data Management</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">Current Pain Points</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Complex Data Entry</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Traditional PedigreeMaster software requires specific formatting and complex data entry procedures 
                  that are time-consuming and error-prone.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Windows-Only Software</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  The current NSIP software tools are limited to Windows computers, creating barriers for 
                  Mac/mobile users and limiting access in field conditions.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Difficult Data Management</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Managing backups, version control, and synchronizing data between multiple devices is challenging 
                  with traditional desktop software.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-red-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Limited Data Visualization</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Existing tools provide limited options for visualizing genetic trends and making comparative 
                  breeding decisions based on EBV data.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">How PedigreeSync Simplifies EBV Management</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-primary-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Modern Web Interface</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Access your flock data from any device with an internet connection - no software installation required.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-primary-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Flexible Data Import</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Import data in multiple formats and let PedigreeSync automatically convert it to the correct 
                  format for NSIP submission.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-primary-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Cloud-Based Storage</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Never worry about losing your data with automatic backups and secure cloud storage that&apos;s 
                  accessible from anywhere.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-primary-500">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Data Visualization Tools</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily interpret EBV data with intuitive charts and graphs that help you make better 
                  breeding decisions faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Ready to Streamline Your EBV Data Management?</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Join PedigreeSync today and experience a modern approach to sheep genetic improvement.
          </p>
          <div className="flex justify-center">
            <a 
              href="/signup" 
              className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Get Started
            </a>
            <a 
              href="/login" 
              className="px-6 py-3 ml-4 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
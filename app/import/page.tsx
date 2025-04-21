"use client";

import { useState } from 'react';
import { processFileWithAI } from '@/lib/actions/file-processing';
import { Container } from "@/components/layout/Container";
import { UploadRecordsForm } from "@/components/animals/Import/UploadRecordsForm";

export default function ImportPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{success?: boolean; count?: number; error?: string} | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsProcessing(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      const result = await processFileWithAI(formData);
      setResult(result);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <Container>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Import Animal Data</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 dark:bg-blue-900/30 dark:border-blue-400">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Coming Soon!</strong> The AI-powered data import feature is currently in development. We expect to launch this feature in the next update. Please check back soon or contact us on GitHub.
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Upload your animal records in any format. Our AI will analyze your data and 
          convert it to a structured format compatible with the National Sheep Improvement Program.
        </p>

        <UploadRecordsForm onSubmit={handleSubmit} isComingSoon={true} />

        {/* How it works section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">How It Will Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <div className="text-primary-500 text-2xl font-bold mb-2">1</div>
              <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Upload Your Data</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload your existing animal records in almost any format.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <div className="text-primary-500 text-2xl font-bold mb-2">2</div>
              <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">AI Processing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI analyzes and transforms your data into a structured format.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
              <div className="text-primary-500 text-2xl font-bold mb-2">3</div>
              <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Ready to Use</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data is now in PedigreeSync, ready for management and NSIP submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
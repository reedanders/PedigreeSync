'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  // GitHub repository URL to redirect to
  const githubUrl = 'https://github.com/reedanders/PedigreeSync/issues';
  const [secondsLeft, setSecondsLeft] = useState(3);
  
  useEffect(() => {
    // Set up countdown timer
    const countdownInterval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Navigate when countdown ends
          window.location.href = githubUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <Container>
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Page Not Found</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 max-w-xl">
          <svg className="w-16 h-16 mx-auto mb-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            We couldn't find the page you're looking for.
          </p>
          
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
            <p className="text-blue-800 dark:text-blue-200">
              Redirecting you to our GitHub issue page in <span className="font-bold">{secondsLeft}</span> second{secondsLeft !== 1 ? 's' : ''}...
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/"
              className="px-6 py-3 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Return Home
            </a>
            <a 
              href={githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Go to GitHub Now
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
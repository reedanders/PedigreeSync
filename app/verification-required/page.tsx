'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/Container'

export default function VerificationRequiredPage() {
  return (
    <Container>
      <div className="py-12 px-4 max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Email Verification Required
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Please check your inbox and verify your email address to continue.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Next steps:
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Open the email from PedigreeSync</li>
              <li>Click the verification link in that email</li>
              <li>Once verified, you can log in to your account</li>
            </ol>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Didn't receive an email? Check your spam folder or try these steps:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>Make sure you entered the correct email</li>
                <li>Check your spam/junk folder</li>
                <li>Try signing up again with the same email</li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="/login"
                  className="inline-block px-5 py-2.5 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
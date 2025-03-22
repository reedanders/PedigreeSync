'use client'

import Link from 'next/link'

export default function VerificationMessage() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          Verification Email Sent
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We&apos;ve sent a verification link to your email address.
          Please check your inbox to verify your account.
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-medium text-gray-800 dark:text-white">Next steps:</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Open the email from PedigreeSync</li>
          <li>Click the verification link</li>
          <li>Once verified, you can log in to your account</li>
        </ol>
        
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Didn&apos;t receive an email? Check your spam folder or try again.
          </p>
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
  );
}
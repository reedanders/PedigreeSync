'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signup } from '@/lib/actions/signup'
import { Container } from '@/components/layout/Container'

export default function SignupPage() {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const email = searchParams.get('email')
  const error = searchParams.get('error')
  
  return (
    <Container>
      <div className="py-12 px-4 max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          {success ? 'Check Your Email' : 'Create an Account'}
        </h1>
        
        {success ? (
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
                We've sent a verification link to <span className="font-medium">{decodeURIComponent(email || '')}</span>
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
                  Didn't receive an email? Check your spam folder or try again.
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
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}
            
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  formAction={signup}
                  className="px-6 py-3 text-lg font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Create Account
                </button>
                <Link
                  href="/login"
                  className="px-6 py-3 text-lg font-medium text-center text-primary-600 bg-transparent border border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        )}
        
        {!success && (
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm">
              By creating an account, you agree to our <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { signup } from '@/lib/actions/signup'

export default function SignupPage() {
  const [error, setError] = useState('')
  
  // Form submission handler using server action
  async function handleSignup(formData: FormData) {
    setError('') // Clear previous errors

    // Call the server action
    const result = await signup(formData)

    // If there's an error, display it
    if (result?.error) {
      setError(result.error)
    }
    // No need to handle success - the server action will redirect
  }
  
  return (
    <Container>
      <div className="py-12 px-4 max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Create an Account
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}
          
          <form action={handleSignup} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
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
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>

            <hr className="my-2 border-gray-200 dark:border-gray-700" />

            <div className="flex flex-col gap-2">
              <label htmlFor="invite" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                Invite Code
                <span className="ml-2 px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 text-xs font-semibold tracking-wide">
                  Early Access
                </span>
              </label>
              <input
                id="invite"
                name="invite"
                type="text"
                required
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-400 dark:border-yellow-600 text-gray-900 dark:text-yellow-100 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                autoComplete="off"
              />
              <span className="text-xs mt-1 text-yellow-700 dark:text-yellow-300">
                Contact the project team for your invite code to sign up.
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <button
                type="submit"
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
        
        <div className="text-center text-gray-500 dark:text-gray-400 mt-6">
          <p className="text-sm">
            By creating an account, you agree to our <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </Container>
  );
}
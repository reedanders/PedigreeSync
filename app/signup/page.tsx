'use client'

import Link from 'next/link'
import { signup } from '@/lib/actions/signup'
import { Container } from '@/components/layout/Container'

export default function SignupPage() {
  return (
    <Container>
      <div className="py-12 px-4 max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Create an Account
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
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
        
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">
            By creating an account, you agree to our <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </Container>
  );
}
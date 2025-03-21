'use client'

import Link from 'next/link'
import { signup } from '@/lib/actions/signup'

interface SignupFormProps {
  error: string;
}

export default function SignupForm({ error }: SignupFormProps) {
  return (
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
  );
}
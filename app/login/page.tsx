'use client'

import Link from 'next/link'
import { login } from '@/lib/actions/login'

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <section className="flex flex-col w-full max-w-2xl">
        <h1 className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
          Login
        </h1>
        <form className="flex flex-col gap-4 py-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-500 dark:text-gray-300">
              Email:
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required
              className="px-4 py-2 bg-white/10 dark:bg-white/5 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-500 dark:text-gray-300">
              Password:
            </label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required
              className="px-4 py-2 bg-white/10 dark:bg-white/5 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              formAction={login}
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Login
            </button>
            <Link
              href="/signup"
              className="px-8 py-4 text-lg font-medium text-center text-indigo-600 bg-transparent border border-indigo-600 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
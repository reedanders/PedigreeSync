'use client'

import Link from 'next/link'
import { login } from './actions'

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      <section className="flex flex-col gap-4">
        <h1>Login</h1>
        <form className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email:
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required
              className="input w-full bg-white/10 text-white" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm">
              Password:
            </label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required
              className="input w-full bg-white/10 text-white"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button 
              formAction={login}
              className="btn-primary flex-1"
            >
              Log in
            </button>
            <Link
              href="/signup"
              className="flex-1 px-4 py-2 text-blue-600 bg-transparent font-medium hover:bg-blue-50 hover:text-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-center inline-flex items-center justify-center"
            >
              Sign up
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
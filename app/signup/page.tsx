'use client'

import { signup } from './actions'

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-8 sm:gap-16">
      <section className="flex flex-col gap-4">
        <h1>Sign Up</h1>
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
                formAction={signup}
                className="btn-primary flex-1"
            >
                Sign up
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
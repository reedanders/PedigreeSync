'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { requestPasswordReset } from '@/lib/actions/password'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; error?: string } | null>(null)
  
  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus(null)
    
    try {
      const result = await requestPasswordReset(formData)
      if (result.error) {
        setFormStatus({ error: result.error })
      } else {
        setFormStatus({ success: true })
        setEmail('')  // Clear the form
      }
    } catch (error) {
      setFormStatus({ error: 'An unexpected error occurred' })
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <Container>
      <div className="py-12 px-4 max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Forgot Your Password?
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          {formStatus?.success ? (
            <div className="text-center py-6">
              <div className="text-green-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Check Your Email</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
              </p>
              <Link 
                href="/login" 
                className="px-6 py-3 text-lg font-medium text-center text-primary-600 bg-transparent border border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Return to Login
              </Link>
            </div>
          ) : (
            <form action={handleSubmit} className="flex flex-col gap-4">
              {formStatus?.error && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                  {formStatus.error}
                </div>
              )}
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Enter your email address below and we'll send you a link to reset your password.
              </p>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-600 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-lg font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors disabled:bg-primary-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                </button>
                <Link
                  href="/login"
                  className="px-6 py-3 text-lg font-medium text-center text-primary-600 bg-transparent border border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
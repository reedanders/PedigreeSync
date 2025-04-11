'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { resetPassword } from '@/lib/actions/password'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; error?: string } | null>(null)
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setFormStatus({ error: 'Passwords do not match' })
      return
    }
    
    // Validate password strength
    if (password.length < 8) {
      setFormStatus({ error: 'Password must be at least 8 characters long' })
      return
    }
    
    setIsSubmitting(true)
    setFormStatus(null)
    
    try {
      const formData = new FormData()
      formData.append('password', password)
      
      const result = await resetPassword(formData)
      
      if (result.error) {
        setFormStatus({ error: result.error })
      } else {
        setFormStatus({ success: true })
        setPassword('')
        setConfirmPassword('')
        
        // Redirect to login after a brief delay
        setTimeout(() => {
          router.push('/login')
        }, 3000)
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
          Reset Your Password
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          {formStatus?.success ? (
            <div className="text-center py-6">
              <div className="text-green-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Password Updated</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your password has been reset successfully. You will be redirected to the login page shortly.
              </p>
              <Link 
                href="/login" 
                className="px-6 py-3 text-lg font-medium text-center text-primary-600 bg-transparent border border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Go to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {formStatus?.error && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                  {formStatus.error}
                </div>
              )}
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Enter your new password below.
              </p>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  New Password
                </label>
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confirm Password
                </label>
                <input 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-lg font-medium text-center text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors disabled:bg-primary-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Updating...' : 'Reset Password'}
                </button>
                <Link
                  href="/login"
                  className="px-6 py-3 text-lg font-medium text-center text-primary-600 bg-transparent border border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}
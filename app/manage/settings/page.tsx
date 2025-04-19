'use client'

import { useState } from 'react'
import { resetPassword } from '@/lib/actions/password'

export default function SettingsPage() {
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
      }
    } catch (error) {
      setFormStatus({ error: 'An unexpected error occurred' })
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Settings</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Configure your account preferences and farm settings.
      </p>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Change Password</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          {formStatus?.success ? (
            <div className="text-center py-6">
              <div className="text-green-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Password Updated</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your password has been changed successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {formStatus?.error && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                  {formStatus.error}
                </div>
              )}
              
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
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
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
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors disabled:bg-primary-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Updating...' : 'Change Password'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
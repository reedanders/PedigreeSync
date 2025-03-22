'use client'

import { useSearchParams } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import SignupForm from '@/components/auth/SignupForm'
import VerificationMessage from '@/components/auth/VerificationMessage'

export default function SignupPage() {
  const searchParams = useSearchParams()
  const success = searchParams.get('success') === 'true'
  const error = searchParams.get('error')
  
  return (
    <Container>
      <div className="py-12 px-4 max-w-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          {success ? 'Check Your Email' : 'Create an Account'}
        </h1>
        
        {success ? (
          <VerificationMessage />
        ) : (
          <>
            <SignupForm error={error || ''} />
            
            <div className="text-center text-gray-500 dark:text-gray-400 mt-6">
              <p className="text-sm">
                By creating an account, you agree to our <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
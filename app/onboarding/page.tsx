'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { createFarm } from '@/lib/actions/farm';
import { useAuth } from '@/lib/contexts/AuthContext';

export default function OnboardingPage() {
  const router = useRouter();
  const { user, refreshSession } = useAuth();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [farmName, setFarmName] = useState('');
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('farm_name', farmName);
      
      const result = await createFarm(formData);
      
      if (result.success) {
        await refreshSession();
        setStep(2);
      } else {
        setError(result.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to create farm');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  function renderStep1() {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Create Your Farm
        </h2>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="farm_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Farm Name *
            </label>
            <input
              id="farm_name"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              type="text"
              required
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter your farm name"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Creating...' : 'Create Farm'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  function renderStep2() {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Farm Created Successfully!
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Your farm has been set up and you're ready to start managing your sheep records.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/manage')}
            className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Go to Management Dashboard
          </button>
          <button
            onClick={() => router.push('/manage/animals/new')}
            className="px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-600"
          >
            Add First Animal
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <Container>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to PedigreeSync
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let&apos;s set up your farm to get started with tracking your sheep records.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <div className={`flex-1 flex flex-col items-center ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary-600 bg-primary-100 dark:bg-primary-900/30' : 'border-gray-300'}`}>
                  1
                </div>
                <span className="mt-2 text-sm">Farm Setup</span>
              </div>
              <div className={`flex-1 border-t-2 ${step >= 2 ? 'border-primary-600' : 'border-gray-300'}`}></div>
              <div className={`flex-1 flex flex-col items-center ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary-600 bg-primary-100 dark:bg-primary-900/30' : 'border-gray-300'}`}>
                  2
                </div>
                <span className="mt-2 text-sm">Ready to Go</span>
              </div>
            </div>
          </div>
        </div>
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            What happens next?
          </h3>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>
              After setting up your farm, you&apos;ll be able to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Add animal records with comprehensive trait data</li>
              <li>Track pedigree information for your flock</li>
              <li>Record measurements from birth through adult stages</li>
              <li>Prepare your data for genetic evaluation</li>
              <li>Generate reports and track genetic progress</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
'use client';

import { FormEvent } from 'react';

interface UploadRecordsFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  isComingSoon?: boolean;
}

export function UploadRecordsForm({ onSubmit, isComingSoon = true }: UploadRecordsFormProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Upload Records</h2>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block mb-2 text-gray-700 dark:text-gray-300">Select File</label>
          <input 
            type="file" 
            name="file" 
            className={`border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded p-2 w-full text-gray-700 dark:text-gray-300 ${isComingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
            required 
            disabled={isComingSoon}
          />
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Accepted formats: Excel, CSV, or text files
          </p>
        </div>
        <button 
          type="submit"
          disabled={isComingSoon}
          className={`px-6 py-3 ${isComingSoon ? 'bg-gray-400 text-white cursor-not-allowed opacity-50' : 'bg-primary-600 text-white hover:bg-primary-700'} rounded-md`}
        >
          {isComingSoon ? 'Feature Coming Soon' : 'Upload and Process'}
        </button>
      </form>
    </div>
  );
}
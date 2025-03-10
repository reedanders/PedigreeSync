"use client";

import { useState } from 'react';
import { processFileWithAI } from '@/lib/actions/file-processing';

export default function ImportPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{success?: boolean; count?: number; error?: string} | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsProcessing(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      const result = await processFileWithAI(formData);
      setResult(result);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Import Animal Data</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Upload File</label>
          <input 
            type="file" 
            name="file" 
            className="border p-2 w-full" 
            required 
          />
        </div>
        <button 
          type="submit"
          disabled={isProcessing}
          className="px-4 py-2 bg-primary-600 text-white rounded disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : 'Process File'}
        </button>
      </form>
      
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          {result.success ? (
            <p className="text-green-600">Successfully processed {result.count} records!</p>
          ) : (
            <p className="text-red-600">Error: {result.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
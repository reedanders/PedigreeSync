'use client';

import { useState, useEffect } from 'react';
import { getFarmDetails } from '@/lib/actions/farm';

export default function DashboardPage() {
  const [farm, setFarm] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function loadFarm() {
      setIsLoading(true);
      try {
        const farmData = await getFarmDetails();
        setFarm(farmData);
      } catch (error) {
        console.error('Error loading farm details:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadFarm();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
        {/* Skeleton for title */}
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4 animate-pulse"></div>
        
        {/* Skeleton for welcome text */}
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse"></div>
        
        {/* Skeleton for farm info box */}
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded w-1/4 mb-3 animate-pulse"></div>
          <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded w-3/4 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300">Welcome to your dashboard overview.</p>
      
      <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-lg">
        <h2 className="font-semibold text-primary-800 dark:text-primary-400">Farm Information</h2>
        <p className="mt-1 text-primary-700 dark:text-primary-300">
          You are currently managing <span className="font-bold">{farm?.name || 'Unknown Farm'}</span>.
        </p>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { getFarmDetails } from '@/lib/actions/farm';

export default function DashboardPage() {
  const [farm, setFarm] = useState<{ name: string } | null>(null);
  
  useEffect(() => {
    async function loadFarm() {
      try {
        const farmData = await getFarmDetails();
        setFarm(farmData);
      } catch (error) {
        console.error('Error loading farm details:', error);
      }
    }
    loadFarm();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300">Welcome to your dashboard overview.</p>
      
      <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-lg">
        <h2 className="font-semibold text-primary-800 dark:text-primary-400">Farm Information</h2>
        <p className="mt-1 text-primary-700 dark:text-primary-300">
          You are currently managing <span className="font-bold">{farm?.name}</span>.
        </p>
      </div>
    </div>
  );
}
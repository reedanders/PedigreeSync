import React from 'react';

type DashboardLandingProps = {
  farmName?: string | null;
};

export function DashboardLanding({ farmName }: DashboardLandingProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full mb-4">      
      <div className="p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-lg">
        <h2 className="font-semibold text-primary-800 dark:text-primary-400">Farm Information</h2>
        <p className="mt-1 text-primary-700 dark:text-primary-300">
          You are currently managing <span className="font-bold">{farmName || 'Unknown Farm'}</span>.
        </p>
      </div>
    </div>
  );
}

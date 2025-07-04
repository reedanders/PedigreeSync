import React from 'react';

export function DashboardLandingSkeleton() {
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

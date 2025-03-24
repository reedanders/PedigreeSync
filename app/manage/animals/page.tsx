'use client';

export default function AnimalsPage() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Animals</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Manage your flock and animal records.</p>
      
      <div className="mt-2 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
        <h2 className="font-semibold text-blue-800 dark:text-blue-400">Getting Started</h2>
        <p className="mt-1 text-blue-700 dark:text-blue-300">
          This page will allow you to view, add, and edit animals in your flock.
        </p>
      </div>
      
      {/* Placeholder for animal management UI */}
      <div className="mt-6 grid grid-cols-1 gap-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="text-center py-8">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-600 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No animals yet</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Get started by adding animals to your flock
            </p>
            <button className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors">
              Add Animal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
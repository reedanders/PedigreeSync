import Link from 'next/link';

export function EmptyState() {
  return (
    <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
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
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Get started by adding animals to your flock
        </p>
        <Link 
          href="/manage/animals/new"
          className="mt-4 inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors"
        >
          Add Animal
        </Link>
      </div>
    </div>
  );
}

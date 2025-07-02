import Link from 'next/link';

export function PageHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Animals</h1>
        <p className="text-gray-600 dark:text-gray-300">Manage your flock and animal records.</p>
      </div>
      <Link 
        href="/manage/animals/new"
        className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md font-medium transition-colors flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add New Animal
      </Link>
    </div>
  );
}

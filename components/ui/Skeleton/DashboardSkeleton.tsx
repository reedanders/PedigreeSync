export default function DashboardSkeleton() {
  return (
    <div className="container mx-auto pt-4 pb-12">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Skeleton Sidebar */}
        <aside className="w-full md:w-64 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4 flex flex-col h-full justify-between">
            <div>
              {/* Skeleton Farm name */}
              <div className="px-2 pt-2 pb-4">
                <div className="h-7 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-36"></div>
              </div>

              {/* Skeleton Navigation */}
              <nav className="mt-6">
                {[...Array(6)].map((_, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 w-full rounded-lg mb-1"
                  >
                    <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md mr-3"></div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-20"></div>
                  </div>
                ))}
              </nav>
            </div>

            {/* Skeleton Settings */}
            <div className="flex items-center p-3 w-full rounded-lg">
              <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md mr-3"></div>
              <div className="h-5 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-16"></div>
            </div>
          </div>
        </aside>

        {/* Skeleton Main Content */}
        <main className="flex-1 p-6">
          {/* Skeleton Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="h-9 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-40"></div>
          </div>
          
          {/* Skeleton Content Panel */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md w-1/2"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
'use client'

export default function DashboardPage() {
  return (
    <main className="p-4 bg-gray-50 dark:bg-gray-900">
      <section className="h-full">
        <div className="grid grid-cols-1 gap-4">
            {/* Header Section */}
            <div className="bg-blue-300 dark:bg-blue-900 p-4 rounded text-gray-900 dark:text-gray-100">
              Header
            </div>

            {/* Main Form Section */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md dark:shadow-gray-900">
              <div className="grid grid-cols-3 gap-4">
                {/* Left Section */}
                <div className="bg-green-200 dark:bg-green-900/30 p-4 rounded text-gray-900 dark:text-gray-100">
                  Left Panel
                </div>

                {/* Center Section */}
                <div className="bg-yellow-200 dark:bg-yellow-900/30 p-4 rounded col-span-2 text-gray-900 dark:text-gray-100">
                  Center Panel
                </div>
              </div>

              {/* Lower Section */}
              <div className="mt-4 bg-red-200 dark:bg-red-900/30 p-4 rounded text-gray-900 dark:text-gray-100">
                Lower Panel
              </div>
            </div>

            {/* Footer Section */}
            <div className="bg-purple-300 dark:bg-purple-900 p-4 rounded text-gray-900 dark:text-gray-100">
              Footer
            </div>
        </div>
      </section>
    </main>
  );
}
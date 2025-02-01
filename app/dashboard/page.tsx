'use client'

export default function DashboardPage() {
  return (
    <main className="p-4 bg-gray-50 dark:bg-gray-900">
      <section className="h-full">
        <div className="grid grid-cols-1 gap-4">
            {/* Header Section */}
            <div className="bg-blue-300 dark:bg-blue-900 p-4 rounded text-gray-900 dark:text-gray-100">
              Database Filters
            </div>

            {/* Main Form Section */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md dark:shadow-gray-900">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Animal Identification Section */}
                <div className="order-1 lg:order-none bg-green-200 dark:bg-green-900/30 p-4 rounded lg:col-span-2 text-gray-900 dark:text-gray-100">
                  Animal Identification 
                </div>

                {/* Conception, Parturition Section */}
                <div className="order-2 lg:order-none bg-yellow-200 dark:bg-yellow-900/30 p-4 rounded text-gray-900 dark:text-gray-100">
                  Conception, Parturition
                </div>
              </div>

              {/* Group, Comments, Status Section */}
              <div className="order-3 lg:order-none mt-4 bg-red-200 dark:bg-red-900/30 p-4 rounded text-gray-900 dark:text-gray-100">
                Group, Comments, Status
              </div>

              {/* Grid Input Section */}
              <div className="order-4 lg:order-none mt-4 bg-purple-200 dark:bg-purple-900/30 p-4 rounded text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md transition-shadow">
                Grid Input Section
              </div>
            </div>

            {/* Footer Section */}
            <div className="order-last bg-purple-300 dark:bg-purple-900 p-4 rounded text-gray-900 dark:text-gray-100">
              Footer
            </div>
        </div>
      </section>
    </main>
  );
}
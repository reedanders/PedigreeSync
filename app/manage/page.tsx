'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getFarmDetails } from '@/lib/actions/farm';
import DashboardSkeleton from '@/components/ui/Skeleton/DashboardSkeleton';

export default function ManageDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [farm, setFarm] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch farm data when component mounts
  useEffect(() => {
    async function loadFarm() {
      try {
        setIsLoading(true);
        const farmData = await getFarmDetails();
        setFarm(farmData);
      } catch (error) {
        console.error('Error loading farm:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadFarm();
  }, []);

  // Don't render the page until we have farm data
  if (isLoading) {
    return <DashboardSkeleton />;
  }

  // Farm data is essential - redirect if missing
  if (!farm?.name) {
    // Redirect to onboarding page
    router.push('/onboarding');
    return null;
  }

  const menuItems = [
    { 
      name: 'Dashboard', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ) 
    },
    { 
      name: 'Animals', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ) 
    },
    { 
      name: 'Records', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ) 
    },
    { 
      name: 'Import/Export', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ) ,
    },
    { 
      name: 'Analysis', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      beta: true
    },
  ];

  // Function to render different content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome to your dashboard overview.</p>
            
            <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-lg">
              <h2 className="font-semibold text-primary-800 dark:text-primary-400">Farm Information</h2>
              <p className="mt-1 text-primary-700 dark:text-primary-300">
                You are currently managing <span className="font-bold">{farm.name}</span>.
              </p>
            </div>
          </div>
        );
      case 'Animals':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Animals</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your flock and animal records.</p>
          </div>
        );
      case 'Records':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Records</h1>
            <p className="text-gray-600 dark:text-gray-300">View and manage your measurement records.</p>
          </div>
        );
      case 'Import/Export':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Import/Export</h1>
            <p className="text-gray-600 dark:text-gray-300">Transfer data to and from NSIP.</p>
          </div>
        );
      case 'Analysis':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Analysis</h1>
            <p className="text-gray-600 dark:text-gray-300">View reports and analyze your flock data.</p>
          </div>
        );
      default:
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Select a tab</h1>
            <p className="text-gray-600 dark:text-gray-300">Choose a section from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto pt-4 pb-12">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4 flex flex-col h-full justify-between">
            <div>
              {/* Farm name */}
              <div className="px-2 pt-2 pb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                    {farm.name}
                  </h2>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-6">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    className={`flex items-center p-3 w-full rounded-lg text-left ${
                      activeTab === item.name ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveTab(item.name)}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span className="flex items-center">
                      {item.name}
                      {item.beta && (
                        <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                          Future
                        </span>
                      )}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Settings */}
            <button className="flex items-center p-3 w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg> 
              Settings
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">        
          {/* Dashboard content */}
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

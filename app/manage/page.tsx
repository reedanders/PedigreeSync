'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getFarmDetails } from '@/lib/actions/farm';
import DashboardSkeleton from '@/components/ui/Skeleton/DashboardSkeleton';
import { 
  DashboardIcon, 
  AnimalsIcon, 
  RecordsIcon, 
  ImportExportIcon, 
  AnalysisIcon,
  SettingsIcon
} from '@/components/ui/Icon';

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
      icon: <DashboardIcon /> 
    },
    { 
      name: 'Animals', 
      icon: <AnimalsIcon />
    },
    { 
      name: 'Records', 
      icon: <RecordsIcon />
    },
    { 
      name: 'Import/Export', 
      icon: <ImportExportIcon />
    },
    { 
      name: 'Analysis', 
      icon: <AnalysisIcon />,
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
              <span className="mr-3"><SettingsIcon /></span>
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

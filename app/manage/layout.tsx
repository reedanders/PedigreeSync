'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
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

export default function ManageLayout({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [farm, setFarm] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Determine active tab from URL
  const getActiveTabFromPath = () => {
    if (pathname === '/manage') return 'Dashboard';
    if (pathname.startsWith('/manage/animals')) return 'Animals';
    if (pathname.startsWith('/manage/records')) return 'Records';
    if (pathname.startsWith('/manage/import-export')) return 'Import/Export'; 
    if (pathname.startsWith('/manage/analysis')) return 'Analysis';
    if (pathname.startsWith('/manage/settings')) return 'Settings';
    return 'Dashboard';
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());
  
  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(getActiveTabFromPath());
  }, [pathname]);

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

  // Get the route for a tab
  const getRouteForTab = (tabName: string): string => {
    const routeMap: Record<string, string> = {
      'Dashboard': '/manage',
      'Animals': '/manage/animals',
      'Records': '/manage/records',
      'Import/Export': '/manage/import-export',
      'Analysis': '/manage/analysis',
      'Settings': '/manage/settings',
    };
    
    return routeMap[tabName] || '/manage';
  };

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
    {
      name: 'Settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <div className="container mx-auto pt-4 pb-12">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4 flex flex-col h-full">
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
                  <Link
                    key={item.name}
                    href={getRouteForTab(item.name)}
                    className={`flex items-center p-3 w-full rounded-lg text-left ${
                      activeTab === item.name ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
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
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
import { DashboardLayout } from '@/components/animals/layout/DashboardLayout';

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

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/manage' },
    { name: 'Animals', icon: <AnimalsIcon />, path: '/manage/animals' },
    { name: 'Records', icon: <RecordsIcon />, path: '/manage/records' },
    { name: 'Import/Export', icon: <ImportExportIcon />, path: '/manage/import-export' },
    { name: 'Analysis', icon: <AnalysisIcon />, path: '/manage/analysis', beta: true },
    { name: 'Settings', icon: <SettingsIcon />, path: '/manage/settings' }
  ];

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

  return (
    <DashboardLayout
      farmName={farm.name}
      activeTab={activeTab}
      menuItems={menuItems}
    >
      {children}
    </DashboardLayout>
  );
}
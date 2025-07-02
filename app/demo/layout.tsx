'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
  const [farm, setFarm] = useState<{ name: string }>({name: 'Demo Farm'});
  const pathname = usePathname();
  
  // Determine active tab from URL
  const getActiveTabFromPath = () => {
    if (pathname === '/demo') return 'Dashboard';
    if (pathname.startsWith('/demo/animals')) return 'Animals';
    if (pathname.startsWith('/demo/records')) return 'Records';
    if (pathname.startsWith('/demo/import-export')) return 'Import/Export'; 
    if (pathname.startsWith('/demo/analysis')) return 'Analysis';
    if (pathname.startsWith('/demo/settings')) return 'Settings';
    return 'Dashboard';
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());
  
  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(getActiveTabFromPath());
  }, [pathname]);

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/demo' },
    { name: 'Animals', icon: <AnimalsIcon />, path: '/demo/animals' },
    { name: 'Records', icon: <RecordsIcon />, path: '/demo/records' },
    { name: 'Import/Export', icon: <ImportExportIcon />, path: '/demo/import-export' },
    { name: 'Analysis', icon: <AnalysisIcon />, path: '/demo/analysis', beta: true },
    { name: 'Settings', icon: <SettingsIcon />, path: '/demo/settings' }
  ];

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
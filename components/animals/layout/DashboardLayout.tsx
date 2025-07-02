import React from 'react';
import Link from 'next/link';
import {
  DashboardIcon,
  AnimalsIcon,
  RecordsIcon,
  ImportExportIcon,
  AnalysisIcon,
  SettingsIcon
} from '@/components/ui/Icon';

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
  beta?: boolean;
};

type DashboardLayoutProps = {
  children: React.ReactNode;
  farmName: string;
  activeTab: string;
  menuItems: MenuItem[];
};

export function DashboardLayout({
  children,
  farmName,
  activeTab,
  menuItems
}: DashboardLayoutProps) {
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
                    {farmName}
                  </h2>
                </div>
              </div>
              {/* Navigation */}
              <nav className="mt-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`flex items-center p-3 w-full rounded-lg text-left ${
                      activeTab === item.name
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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

// Optionally export icons for menuItems construction
export const DashboardLayoutIcons = {
  Dashboard: <DashboardIcon />,
  Animals: <AnimalsIcon />,
  Records: <RecordsIcon />,
  'Import/Export': <ImportExportIcon />,
  Analysis: <AnalysisIcon />,
  Settings: <SettingsIcon />
};

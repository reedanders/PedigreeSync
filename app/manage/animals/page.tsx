'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAnimalsByFarm } from '@/lib/actions/animals';
import { SexType, BirthRearType } from '@/lib/types/form';
import TableSkeleton from '@/components/ui/Skeleton/TableSkeleton';

// Add typescript pass-through for the response
interface AnimalResponse {
  data?: any[];
  error?: string;
}

// Helper components for cleaner main component
const EmptyState = () => (
  <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
    <div className="text-center py-8">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-600 mb-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
        />
      </svg>
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No animals yet</h3>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Get started by adding animals to your flock
      </p>
      <Link 
        href="/manage/animals/new"
        className="mt-4 inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors"
      >
        Add Animal
      </Link>
    </div>
  </div>
);

const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
    {message}
  </div>
);

const StatusBadge = ({ status }: { status: any }) => {
  const getStatusText = (status: any) => {
    if (typeof status === 'string') return status;
    
    switch (status) {
      case 0: return 'Current';
      case 1: return 'Culled';
      case 2: return 'Dead';
      case 3: return 'Missing';
      case 4: return 'Reference';
      case 5: return 'Sold';
      default: return 'Unknown';
    }
  };

  const getStatusColor = (status: any) => {
    const statusValue = typeof status === 'string' 
      ? status.toLowerCase() 
      : getStatusText(status).toLowerCase();
    
    switch (statusValue) {
      case 'current':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'culled':
      case 'sold':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'dead':
      case 'missing':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'reference':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(status)}`}>
      {getStatusText(status || 0)}
    </span>
  );
};

// Animal table component
const AnimalsTable = ({ animals }: { animals: any[] }) => {
  // Helper function to convert sex number to text
  const getSexText = (sex: SexType) => {
    switch (sex) {
      case 1: return 'Male';
      case 2: return 'Female';
      default: return 'Unknown';
    }
  };
  
  // Helper function for birth type
  const getBirthTypeText = (bt: BirthRearType) => {
    switch (bt) {
      case 1: return 'Single';
      case 2: return 'Twin';
      case 3: return 'Triplet';
      default: return 'Unknown';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Sire</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Dam</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Sex</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Birth Type</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {animals.map(animal => (
            <tr 
              key={animal.id} 
              className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
              <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                {animal.animal_identification[0]?.animal_ident || 'Unknown'}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">
                {animal.animal_identification[0]?.sire || '-'}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">
                {animal.animal_identification[0]?.dam || '-'}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">
                {getSexText(animal.animal_identification[0]?.sex)}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300">
                {getBirthTypeText(animal.animal_identification[0]?.bt)}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <StatusBadge status={animal.animal_identification[0]?.status} />
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-right font-medium">
                <Link
                  href={`/manage/animals/${animal.id}`}
                  className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Page header component
const PageHeader = () => (
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

// Main page component
export default function AnimalsPage() {
  const [animals, setAnimals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Table columns definition for the skeleton loader
  const tableColumns = [
    { header: 'ID', width: 'w-20' },
    { header: 'Sire', width: 'w-16' },
    { header: 'Dam', width: 'w-16' },
    { header: 'Sex', width: 'w-12' },
    { header: 'Birth Type', width: 'w-14' },
    { header: 'Status', width: 'w-16' },
    { header: 'Actions', width: 'w-10', align: 'right' as const }
  ];
  
  useEffect(() => {
    async function loadAnimals() {
      try {
        setIsLoading(true);
        const result: AnimalResponse | null = await getAnimalsByFarm();
        
        if (result.error) {
          setError(result.error);
        } else {
          setAnimals(result.data || []);
        }
      } catch (err) {
        setError('Failed to load animals');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadAnimals();
  }, []);

  // Render content based on state
  const renderContent = () => {
    if (isLoading) return <TableSkeleton columns={tableColumns} rowCount={5} />;
    if (error) return <ErrorDisplay message={error} />;
    if (animals.length === 0) return <EmptyState />;
    return <AnimalsTable animals={animals} />;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <PageHeader />
      {renderContent()}
    </div>
  );
}
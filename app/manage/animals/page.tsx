'use client';

import { useState, useEffect } from 'react';
import { getAnimalsByFarm } from '@/lib/actions/animals';
import TableSkeleton from '@/components/ui/Skeleton/TableSkeleton';
import { EmptyState } from '@/components/animals/animalsList/EmptyState';
import { ErrorDisplay } from '@/components/animals/animalsList/ErrorDisplay';
import { AnimalsTable } from '@/components/animals/animalsList/AnimalsTable';
import { PageHeader } from '@/components/animals/animalsList/PageHeader';

export default function AnimalsPage() {
  const [animals, setAnimals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        const result = await getAnimalsByFarm();
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
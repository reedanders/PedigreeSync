'use client';

import { useState, useEffect } from 'react';
import { getFarmDetails } from '@/lib/actions/farm';
import { DashboardLanding } from '@/components/animals/layout/DashboardLanding';
import { DashboardLandingSkeleton } from '@/components/ui/Skeleton/DashboardLandingSkeleton';

export default function DashboardLandingPage() {
  const [farm, setFarm] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFarm() {
      setIsLoading(true);
      try {
        const farmData = await getFarmDetails();
        setFarm(farmData);
      } catch (error) {
        console.error('Error loading farm details:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadFarm();
  }, []);

  if (isLoading) {
    return <DashboardLandingSkeleton />;
  }

  return <DashboardLanding farmName={farm?.name} />;
}
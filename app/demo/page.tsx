'use client';

import { useState, useEffect } from 'react';
import { DashboardLanding } from '@/components/animals/layout/DashboardLanding';
import BCSLineChart from '@/components/charts/line/BCSLine';

export default function DashboardLandingPage() {
  const [farm, setFarm] = useState<{ name: string }>({name: 'Demo Farm'});

  return (
    <div>
      <DashboardLanding farmName={farm?.name} />
      <BCSLineChart />
    </div>
  );
}
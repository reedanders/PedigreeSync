'use client';

import { useState, useEffect } from 'react';
import { DashboardLanding } from '@/components/animals/layout/DashboardLanding';

export default function DashboardLandingPage() {
  const [farm, setFarm] = useState<{ name: string }>({name: 'Demo Farm'});

  return <DashboardLanding farmName={farm?.name} />;
}
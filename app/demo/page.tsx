'use client';

import { useState } from 'react';
import { DashboardLanding } from '@/components/animals/layout/DashboardLanding';
import BCSLineChart from '@/components/charts/line/BCSLine';
import { bcsMeasurements, xDates, toSeriesInput } from '@/components/demo/data/BodyConditionHelpers';

export default function DashboardLandingPage() {
  const [farm, _] = useState<{ name: string }>({ name: 'Demo Farm (Read-Only)' });

  // Prepare the seriesData for the chart
  const seriesData = toSeriesInput(bcsMeasurements, xDates);
  
  const targetRangeLastDate = xDates[xDates.length - 1];
  const seriesNameLastDate = xDates[xDates.length - 2];

  

  return (
    <div>
      <DashboardLanding farmName={farm?.name} />
      <BCSLineChart seriesData={seriesData} />
    </div>
  );
}
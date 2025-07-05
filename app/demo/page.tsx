'use client';

import { useState } from 'react';
import { DashboardLanding } from '@/components/animals/layout/DashboardLanding';
import BCSLineChart from '@/components/charts/line/BCSLine';
import BCSMetricsCard from '@/components/charts/metrics/BCSMetricsCard';
import BCSHeatmap from '@/components/charts/metrics/BCSHeatmap';
import { bcsMeasurements, xDates, toSeriesInput } from '@/components/demo/data/BodyConditionHelpers';

export default function DashboardLandingPage() {
  const [farm, _] = useState<{ name: string }>({ name: 'Demo Farm (Read-Only)' });

  // Prepare the seriesData for the chart
  const seriesData = toSeriesInput(bcsMeasurements, xDates);

  return (
    <div className="space-y-6">
      <DashboardLanding farmName={farm?.name} />
      <div className="flex flex-row gap-6">
        <BCSMetricsCard
          title="Critically Low Condition"
          subtitle="Ewes unlikely to regain body condition before breeding"
          value={2}
          color="red"
        />
        <BCSMetricsCard 
          title="Moderately High Condition" 
          subtitle="Ewes slighly above body condition before breeding"
          value={8} 
          color="green" 
        />
      </div>
      <BCSLineChart seriesData={seriesData} />
      <BCSHeatmap seriesData={seriesData} />
    </div>
  );
}
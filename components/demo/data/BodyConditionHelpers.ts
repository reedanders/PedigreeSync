// Demo data and helpers for BCSLineChart

import { BCSMeasurement, bcsMeasurements } from "./BodyConditionData";

export type SeriesInput = { name: string; data: number[] };

// Derive xDates from bcsMeasurements
export const xDates = Array.from(
  new Set(bcsMeasurements.map(m => m.date))
).sort();

// Helper to convert long table to chart series
export function toSeriesInput(
  measurements: BCSMeasurement[],
  xDates: string[]
): SeriesInput[] {
  const seriesNames = Array.from(new Set(measurements.map(m => m.seriesName)));
  return seriesNames.map(name => {
    const data = xDates.map(date => {
      const found = measurements.find(m => m.seriesName === name && m.date === date);
      return found ? found.value : NaN;
    });
    return { name, data };
  });
}

export { bcsMeasurements };
export type { BCSMeasurement };
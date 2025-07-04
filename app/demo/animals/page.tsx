"use client";

import { useState } from "react";
import { AnimalsTable } from "@/components/animals/animalsList/AnimalsTable";
import { PageHeader } from "@/components/animals/animalsList/PageHeader";
import { bcsMeasurements } from "@/components/demo/data/BodyConditionData";

// Extract unique animal IDs (excluding "Target Range")
const DEMO_ANIMALS = Array.from(
  new Set(
    bcsMeasurements
      .filter((m) => m.seriesName !== "Target Range")
      .map((m) => m.seriesName)
  )
).map((id) => ({ id }));

// Extract unique dates from the BCS data (excluding "Target Range")
const DATES = Array.from(
  new Set(
    bcsMeasurements
      .filter((m) => m.seriesName !== "Target Range")
      .map((m) => m.date)
  )
).sort();

export default function AnimalsPage() {
  const [animals] = useState<any[]>(DEMO_ANIMALS);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <PageHeader isDisabled={true} />
      <AnimalsTable animals={animals} bcsMeasurements={bcsMeasurements} dates={DATES} />
    </div>
  );
}
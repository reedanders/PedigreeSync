"use client";

import { useState } from "react";
import { AnimalsTable } from "@/components/animals/animalsList/AnimalsTable";
import { PageHeader } from "@/components/animals/animalsList/PageHeader";
import { bcsMeasurements } from "@/components/demo/data/BodyConditionData";

// Dynamically extract unique animal IDs from demo BCS data (excluding "Target Range")
const DEMO_ANIMALS = Array.from(
  new Set(
    bcsMeasurements
      .filter((m) => m.seriesName !== "Target Range")
      .map((m) => m.seriesName)
  )
).map((id) => ({ id }));

export default function AnimalsPage() {
  const [animals, _] = useState<any[]>(DEMO_ANIMALS);

  const renderContent = () => {
    return <AnimalsTable animals={animals} />;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <PageHeader isDisabled={true} />
      {renderContent()}
    </div>
  );
}
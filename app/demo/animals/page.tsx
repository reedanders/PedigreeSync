"use client";

import { useState } from "react";
import { AnimalsTable } from "@/components/animals/animalsList/AnimalsTable";
import { PageHeader } from "@/components/animals/animalsList/PageHeader";

// Only include fields used by AnimalsTable (id)
const DEMO_ANIMALS = [
  { id: "840003123456789" },
  { id: "840003987654321" },
  { id: "840003555555555" },
];

export default function AnimalsPage({ isDisabled = true }: { isDisabled?: any } = {}) {
  const [animals, _] = useState<any[]>(DEMO_ANIMALS);

  const renderContent = () => {
    return <AnimalsTable animals={animals} />;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <PageHeader isDisabled={isDisabled} />
      {renderContent()}
    </div>
  );
}
"use client";

import { UploadRecordsForm } from "@/components/animals/Import/UploadRecordsForm";

export default function ImportExportPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Import/Export</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
      Upload your animal records in any format. Our AI will analyze your data and convert it to a structured format compatible with the National Sheep Improvement Program.
      </p>
      
      <UploadRecordsForm onSubmit={handleSubmit} isComingSoon={true} />
    </div>
  );
}
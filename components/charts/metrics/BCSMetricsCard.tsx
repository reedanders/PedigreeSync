import React from "react";

type BCSMetricsCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: "green" | "red";
};

export default function BCSMetricsCard({ title, value, subtitle, color = "green" }: BCSMetricsCardProps) {
  const valueColor =
    color === "green"
      ? "text-green-600 dark:text-green-400"
      : "text-red-600 dark:text-red-400";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full sm:w-1/2 max-w-2xl">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">
        {title}
      </h3>
      {subtitle && (
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {subtitle}
        </div>
      )}
      <div className={`text-4xl font-bold mb-1 ${valueColor}`}>
        {value}
      </div>
    </div>
  );
}
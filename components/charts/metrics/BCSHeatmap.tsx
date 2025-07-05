import React from "react";
import { SeriesInput, xDates } from "@/components/demo/data/BodyConditionHelpers";

function getColor(value: number) {
  // Simple color scale: red (low), yellow (mid), green (high)
  if (isNaN(value)) return "#f3f4f6"; // gray-100 for missing
  if (value <= 1.5) return "#f87171"; // red-400
  if (value <= 2.0) return "#fbbf24"; // yellow-400
  if (value <= 2.5) return "#fde68a"; // yellow-200
  if (value <= 3.0) return "#bbf7d0"; // green-200
  return "#4ade80"; // green-400
}

export default function BCSHeatmap({ seriesData }: { seriesData: SeriesInput[] }) {
  // Filter out "Target Range" if present
  const sheepSeries = seriesData.filter(s => s.name !== "Target Range");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 w-full mb-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Individual Body Condition 
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border bg-gray-50 text-left">Sheep</th>
              {xDates.map(date => (
                <th key={date} className="p-2 border bg-gray-50 text-center">{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sheepSeries.map(sheep => (
              <tr key={sheep.name}>
                <td className="p-2 border font-mono">{sheep.name}</td>
                {sheep.data.map((value, idx) => (
                  <td
                    key={xDates[idx]}
                    className="p-2 border text-center"
                    style={{ background: getColor(value) }}
                  >
                    {isNaN(value) ? "-" : value.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

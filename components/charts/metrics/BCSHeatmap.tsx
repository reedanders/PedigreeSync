import React from "react";
import { usePathname } from "next/navigation";
import { SeriesInput, xDates } from "@/components/demo/data/BodyConditionHelpers";

// Helper to get the target value for a date
function getTargetForDate(seriesData: SeriesInput[], dateIdx: number): number | undefined {
  const targetSeries = seriesData.find(s => s.name === "Target Range");
  if (!targetSeries) return undefined;
  return targetSeries.data[dateIdx];
}

// Color scale based on distance from target in 0.25 increments
function getColor(value: number, target: number | undefined) {
  if (isNaN(value) || target === undefined) return "#f3f4f6"; // gray-100 for missing
  const diff = Math.abs(value - target);
  if (diff < 0.125) return "#4ade80"; // green-400 (on target)
  if (diff < 0.375) return "#bbf7d0"; // green-200 (within 0.25)
  if (diff < 0.625) return "#fde68a"; // yellow-200 (within 0.5)
  if (diff < 0.875) return "#fbbf24"; // yellow-400 (within 0.75)
  if (diff < 1.125) return "#fdba74"; // orange-300 (within 1.0)
  if (diff < 1.375) return "#fca5a5"; // red-300 (within 1.25)
  if (diff < 1.625) return "#f87171"; // red-400 (within 1.5)
  return "#ef4444"; // red-500 (more than 1.5 away)
}

export default function BCSHeatmap({ seriesData }: { seriesData: SeriesInput[] }) {
  const sheepSeries = seriesData.filter(s => s.name !== "Target Range");
  const pathname = usePathname();
  const node = pathname.split('/')[1] || 'manage';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 w-full mb-4 font-sans">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white font-sans">
        Individual Body Condition
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse font-sans text-sm">
          <thead>
            <tr>
              <th className="p-2 border bg-gray-50 dark:bg-gray-900 text-left font-semibold text-gray-700 dark:text-gray-200 font-sans">
                Sheep
              </th>
              {xDates.map(date => (
                <th
                  key={date}
                  className="p-2 border bg-gray-50 dark:bg-gray-900 text-center font-semibold text-gray-700 dark:text-gray-200 font-sans"
                >
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sheepSeries.map(sheep => (
              <tr key={sheep.name} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <td
                  className="p-2 border font-mono hover:underline cursor-pointer font-medium"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(`/${node}/animals/${encodeURIComponent(sheep.name)}`, "_blank");
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  title={`View ${sheep.name}`}
                >
                  {sheep.name}
                </td>
                {sheep.data.map((value, idx) => {
                  const target = getTargetForDate(seriesData, idx);
                  return (
                    <td
                      key={xDates[idx]}
                      className="p-2 border text-center font-sans"
                      style={{ background: getColor(value, target) }}
                    >
                      {isNaN(value) ? (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      ) : (
                        value.toFixed(2)
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

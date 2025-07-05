import React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { SeriesInput, xDates } from "@/components/demo/data/BodyConditionHelpers";

// Helper to get the target value for a date
function getTargetForDate(seriesData: SeriesInput[], dateIdx: number): number | undefined {
  const targetSeries = seriesData.find(s => s.name === "Target Range");
  if (!targetSeries) return undefined;
  return targetSeries.data[dateIdx];
}

// Color scale based on distance from target in 0.25 increments, with low-key dark mode support
function getColor(value: number, target: number | undefined, isDark: boolean) {
  if (isNaN(value) || target === undefined) return isDark ? "#262b36" : "#f3f4f6"; // darker gray for dark mode
  const diff = Math.abs(value - target);
  if (diff < 0.125) return isDark ? "#166534" : "#4ade80"; // dark: green-800, light: green-400
  if (diff < 0.375) return isDark ? "#14532d" : "#bbf7d0"; // dark: green-900, light: green-200
  if (diff < 0.625) return isDark ? "#44403c" : "#fde68a"; // dark: stone-700, light: yellow-200
  if (diff < 0.875) return isDark ? "#a16207" : "#fbbf24"; // dark: yellow-800, light: yellow-400
  if (diff < 1.125) return isDark ? "#78350f" : "#fdba74"; // dark: orange-900, light: orange-300
  if (diff < 1.375) return isDark ? "#7f1d1d" : "#fca5a5"; // dark: red-900, light: red-300
  if (diff < 1.625) return isDark ? "#991b1b" : "#f87171"; // dark: red-800, light: red-400
  return isDark ? "#1e293b" : "#ef4444"; // dark: slate-800, light: red-500
}

export default function BCSHeatmap({ seriesData }: { seriesData: SeriesInput[] }) {
  const sheepSeries = seriesData.filter(s => s.name !== "Target Range");
  const pathname = usePathname();
  const node = pathname.split('/')[1] || 'manage';

  // Use next-themes for dark mode detection
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full mb-6 font-sans">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white font-sans">
        Individual Body Condition
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse font-sans text-sm">
          <thead>
            <tr>
              <th className="p-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-left font-semibold text-gray-700 dark:text-gray-200 font-sans">
                Sheep
              </th>
              {xDates.map(date => (
                <th
                  key={date}
                  className="p-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-center font-semibold text-gray-700 dark:text-gray-200 font-sans"
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
                  className="p-3 border border-gray-200 dark:border-gray-700 font-mono hover:underline cursor-pointer font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(`/${node}/animals/${encodeURIComponent(sheep.name)}`, "_blank");
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  title={`View ${sheep.name}`}
                >
                  <span className="text-gray-900 dark:text-gray-100 font-mono">{sheep.name}</span>
                </td>
                {sheep.data.map((value, idx) => {
                  const target = getTargetForDate(seriesData, idx);
                  return (
                    <td
                      key={xDates[idx]}
                      className="p-3 border border-gray-200 dark:border-gray-700 text-center font-sans"
                      style={{ background: getColor(value, target, isDark) }}
                    >
                      {isNaN(value) ? (
                        <span className="text-gray-400 dark:text-gray-500">-</span>
                      ) : (
                        <span className="text-gray-800 dark:text-gray-100">{value.toFixed(2)}</span>
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

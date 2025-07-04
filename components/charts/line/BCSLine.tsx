"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { usePathname } from "next/navigation";


type SeriesInput = { name: string; data: number[] };

type BCSMeasurement = {
  seriesName: string;
  date: string;
  value: number;
};

const bcsMeasurements: BCSMeasurement[] = [
  // Target Range
  { seriesName: "Target Range", date: "2024-06-01", value: 2.25 },
  { seriesName: "Target Range", date: "2024-10-02", value: 3.25 },
  { seriesName: "Target Range", date: "2024-11-18", value: 2.5 },
  { seriesName: "Target Range", date: "2025-02-28", value: 3 },
  { seriesName: "Target Range", date: "2025-06-02", value: 2.25 },
  { seriesName: "Target Range", date: "2025-10-06", value: 3.25 },
  // Sheep A
  { seriesName: "Sheep A", date: "2024-06-01", value: 2.4 },
  { seriesName: "Sheep A", date: "2024-10-02", value: 3.6 },
  { seriesName: "Sheep A", date: "2024-11-18", value: 3.1 },
  { seriesName: "Sheep A", date: "2025-02-28", value: 4.1 },
  { seriesName: "Sheep A", date: "2025-06-02", value: 2.4 },
  // Sheep B
  { seriesName: "Sheep B", date: "2024-06-01", value: 3.1 },
  { seriesName: "Sheep B", date: "2024-10-02", value: 3.9 },
  { seriesName: "Sheep B", date: "2024-11-18", value: 2.4 },
  { seriesName: "Sheep B", date: "2025-02-28", value: 3.6 },
  { seriesName: "Sheep B", date: "2025-06-02", value: 2.4 },
];

// Derive xDates from bcsMeasurements
const xDates = Array.from(
  new Set(bcsMeasurements.map(m => m.date))
).sort();

// Helper to convert long table to chart series
function toSeriesInput(
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

const defaultSeries: SeriesInput[] = toSeriesInput(bcsMeasurements, xDates);

export default function BCSLineChart({ seriesData = defaultSeries }: { seriesData?: SeriesInput[] } = {}) {
  const pathname = usePathname();
  const node = pathname.split('/')[1] || 'manage';

  const series = seriesData.map((s, idx) => {
    if (s.name === "Target Range") {
      return {
        name: s.name,
        data: s.data,
        type: "line",
        lineStyle: { opacity: 0 },
        symbol: (value: any, params: any) => (params.dataIndex === s.data.length - 1 ? "circle" : "none"),
        symbolSize: 7,
        itemStyle: {
          color: (params: { dataIndex: number }) =>
            params.dataIndex === s.data.length - 1 ? "#6B7280" : "rgba(0,0,0,0)",
        },
        areaStyle: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        smooth: 0.5,
        tooltip: { show: true },
      };
    }
    return {
      name: s.name,
      data: s.data,
      type: "line",
      smooth: 0.3,
      tooltip: { show: true },
    };
  });

  const option = {
    tooltip: {
      show: true,
      formatter: function (params: any) {
        if (Array.isArray(params)) {
          return params.map((p: any) => p.seriesName).join('<br/>');
        }
        return params.seriesName;
      },
    },
    xAxis: {
      type: "category",
      data: xDates,
      boundaryGap: false,
      axisLabel: {
        formatter: function (value: string) {
          switch (value) {
            case "2024-06-01":
              return "Weaning\nJun 1, 2024";
            case "2024-10-02":
              return "Breeding\nOct 2, 2024";
            case "2024-11-18":
              return "Mid-Gestation\nNov 18, 2024";
            case "2025-02-28":
              return "Lambing\nFeb 28, 2025";
            case "2025-06-02":
              return "Weaning\nJun 2, 2025";
            case "2025-10-06":
              return "Breeding\nOct 6, 2025";
            default:
              return value;
          }
        },
      },
      splitLine: { show: false },
    },
    yAxis: {
      type: "value",
      min: 1.5,
      max: 4.5,
      name: "Condition Score",
      nameLocation: "middle",
      nameGap: 40,
    },
    series,
  };

  // Navigate to /demo/animals/[seriesName] on data point click, but only for actual sheep series
  const onEvents = {
    click: (params: any) => {
      if (
        params &&
        params.seriesName &&
        params.seriesName !== "Target Range"
      ) {
        if (typeof window !== "undefined") {
          window.open(`/${node}/animals/${encodeURIComponent(params.seriesName)}`, "_blank");
        }
      }
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 w-full mb-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Flock Body Condition Score (BCS)
      </h2>
      <ReactECharts
        option={option}
        style={{ height: 400, width: "100%" }}
        notMerge={true}
        lazyUpdate={true}
        onEvents={onEvents}
      />
    </div>
  );
}
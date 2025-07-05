"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { usePathname } from "next/navigation";
//TODO: Remove during manage/ implementation
import {
  xDates,
  SeriesInput,
} from "../../demo/data/BodyConditionHelpers";

export default function BCSLineChart({ seriesData }: { seriesData: SeriesInput[] }) {
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
      min: 0,
      max: 5,
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
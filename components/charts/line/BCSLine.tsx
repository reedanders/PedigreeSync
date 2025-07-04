"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

// Dates for x-axis
// June 1, 2024; October 2, 2024; November 18, 2024; Feb 28, 2025; June 2, 2025; October 6, 2025
const xDates = [
  "2024-06-01",
  "2024-10-02",
  "2024-11-18",
  "2025-02-28",
  "2025-06-02",
  "2025-10-06",
];

export default function BCSLineChart() {
  const option = {
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
    series: [
      {
        name: "Target Range",
        data: [
          2.25, // Weaning 2024-06-01
          3.25, // Breeding 2024-10-02
          2.5,  // Midgestation 2024-11-18
          3,    // Lambing 2025-02-28
          2.25, // Weaning 2025-06-02
          3.25, // Breeding 2025-10-06
        ],
        type: "line",
        lineStyle: { opacity: 0 },
        symbol: "none",
        areaStyle: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        smooth: 0.5,
        tooltip: {
          show: true,
        },
      },
      {
        name: "Sheep A",
        data: [
          2.4,
          3.6,
          3.1,
          4.1,
          2.4,
        ],
        type: "line",
        smooth: 0.3,
        tooltip: {
          show: false,
        },
      },
      {
        name: "Sheep B",
        data: [
          3.1,
          3.9,
          2.4,
          3.6,
          2.4,
        ],
        type: "line",
        smooth: 0.3,
        tooltip: {
          show: false,
        },
      },
      // ...add more series as needed
    ]
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
      />
    </div>
  );
}
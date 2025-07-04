"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

export default function BCSLineChart() {
  const option = {
    xAxis: {
      type: "value",
      min: 0,
      max: 40,
      interval: 5,
      name: "Ewe Reproduction Cycle",
      nameLocation: "middle",
      nameGap: 30,
      axisLabel: {
        formatter: function (value: number) {
          switch (value) {
            case 0:
              return "Weaning";
            case 5:
              return "Breeding";
            case 15:
              return "Mid-Gestation";
            case 25:
              return "Lambing";
            case 40:
              return "Weaning";
            default:
              return "";
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
          [0, 2.25],
          [5, 3.25],
          [15, 2.5],
          [25, 3],
          [40, 2.25],
        ],
        type: "line",
        lineStyle: { opacity: 0 },
        symbol: "none",
        areaStyle: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        smooth: true,
        tooltip: {
          show: true,
        },
      },
      {
        name: "Flock A",
        data: [
          [0, 2.4],
          [5, 3.6],
          [15, 3.1],
          [25, 4.1],
          [40, 2.4],
        ],
        type: "line",
        smooth: true,
        tooltip: {
          show: false,
        },
      },
      {
        name: "Flock B",
        data: [
          [0, 3.1],
          [5, 3.9],
          [15, 2.4],
          [25, 3.6],
          [40, 2.4],
        ],
        type: "line",
        smooth: true,
        tooltip: {
          show: false,
        },
      },
      // ...add more series as needed
    ],
    tooltip: {
      trigger: "axis",
      show: true,
      axisPointer: {
        type: "line",
      },
      valueFormatter: (value: number) => value.toFixed(2),
      showContent: true,
      formatter: function (params: any) {
        // Only show series name and value, not x axis value
        return params
          .filter((p: any) => p.seriesName)
          .map(
            (p: any) =>
              `<span style="color:grey;">${p.seriesName}</span>: ${p.data[1].toFixed(2)}`
          )
          .join("<br/>");
      },
    },
    legend: {
      show: false,
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
      />
    </div>
  );
}
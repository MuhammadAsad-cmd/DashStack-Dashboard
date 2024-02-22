import dynamic from "next/dynamic";
import React from "react";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SimpleDonutChart() {
  const series = [20, 40];
  const options = {
    chart: {
      type: "donut",
      width: "100%",
    },
    labels: [],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ["#1CCAB8", "#e1e4e8"],
  };

  return (
    <div style={{ width: "200px", maxWidth: "200px" }}>
      <ReactApexChart options={options} series={series} width={200} height={200} type="donut" />
    </div>
  );
}

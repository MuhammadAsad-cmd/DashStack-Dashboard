import dynamic from "next/dynamic";
import React from "react";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SimpleDonutChart4() {
  const series = [20, 10,40.30];
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
    colors: ["#1CCAB8", "#FF8743","#4393FF","#ffd56d"],
  };

  return (
    <div style={{ width: "200px", maxWidth: "200px" }}>
      <ReactApexChart options={options} series={series} width={200} height={200} type="donut" />
    </div>
  );
}

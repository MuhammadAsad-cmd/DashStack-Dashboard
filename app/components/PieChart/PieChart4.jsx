import React from "react";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });



export default function SimplePieChart4() {
  const series = [40, 60];
  const options = {
    chart: {
      type: "pie",
      width: "100%",
    },
    labels: ["10", "20"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ["#4393FF", "#E9EFFC"],
  };

  return (
    <div style={{ width: "200px", maxWidth: "200px" }}>
      <ReactApexChart options={options} series={series} width={200} height={200} type="pie" />
    </div>
  );
}

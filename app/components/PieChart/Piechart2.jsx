import dynamic from "next/dynamic";
import React from "react";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });



export default function SimplePieChart2() {
  const series = [50, 40];
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
    colors: ["#E9EFFC", "#B140FFC3"],
  };

  return (
    <div style={{ width: "200px", maxWidth: "200px" }}>
      <ReactApexChart options={options} series={series} width={200} height={200} type="pie" />
    </div>
  );
}

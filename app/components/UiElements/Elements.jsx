"use client";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import "apexcharts/dist/apexcharts.css";
import UIFilters from "./Filters";
import Donut from "../DonutChart/Donut";
import PieChart from "../PieChart/PieChart";
import ColumnChart from "../ColumnChart/ColumnChart";

const Elements = () => {
  const currentTheme = useSelector(selectTheme);

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-4 justify-between  leading-10 p-1 mb-3 md:p-3">
        <h1 style={favStyles} className="font-bold text-[32px] leading-10">
          UI Elements
        </h1>
        <UIFilters/>
      </div>
      <div className="space-y-4">
        <ColumnChart />
        <PieChart />
        <Donut />
      </div>
    </>
  );
};

export default Elements;

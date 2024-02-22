"use client";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import SimplePieChart from "./Piechart1";
import SimplePieChart2 from "./Piechart2";
import SimplePieChart3 from "./PieChart3";
import SimplePieChart4 from "./PieChart4";


const PieChart = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
  };

  return (
    <>
      <div style={darkModeStyles} className=" mt-10 p-6 rounded-xl">
        <h1 className="font-bold text-2xl leading-8 mb-[60px]">Pie Chart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 px-3">
          <SimplePieChart />
          <SimplePieChart2 />
          <SimplePieChart3 />
          <SimplePieChart4 />
        </div>
      </div>
    </>
  );
};

export default PieChart;

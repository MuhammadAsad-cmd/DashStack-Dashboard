"use client";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";

const ColumnChart = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
  };

  return (
    <>
    <div style={darkModeStyles} className="mt-10 p-6 rounded-xl">
        <h1 className="font-bold text-2xl leading-8 mb-8 md:mb-12">Bar Chart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <Image width={100} height={100} className="" src="/images/Bar 1.svg" alt="" />
          <Image width={100} height={100} className="" src="/images/Bar 2.svg" alt="" />
          <Image width={100} height={100} className="" src="/images/Bar 3.svg" alt="" />
          <Image width={100} height={100} className="" src="/images/Bar 4.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ColumnChart;

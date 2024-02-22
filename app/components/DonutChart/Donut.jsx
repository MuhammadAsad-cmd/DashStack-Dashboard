'use client'
import React from 'react';
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import SimpleDonutChart from './Dount1';
import SimpleDonutChart1 from './Dount2';
import SimpleDonutChart3 from './Dount3';
import SimpleDonutChart4 from './Donut4';

const Donut = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
  };

  return (
    <div style={darkModeStyles} className="mt-10 p-6 rounded-xl">
      <h1 className="font-bold text-2xl leading-8 mb-6">Donut Chart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 px-3">
        <SimpleDonutChart />
        <SimpleDonutChart1 />
        <SimpleDonutChart3 />
        <SimpleDonutChart4 />
      </div>
    </div>
  );
};

export default Donut;

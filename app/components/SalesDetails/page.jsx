'use client'
import React from "react";
import Graph from "../Chart/page";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const SalesDetails = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };
  
  return (
    <>
      <div style={darkModeStyles} className="bg-[#FFFFFF] mt-10 p-4 rounded-xl">
        <h1 className="font-bold text-3xl">Sales Details</h1>
        <Graph/>
      </div>
    </>
  );
};

export default SalesDetails;

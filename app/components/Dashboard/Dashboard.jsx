'use client'
import Deals from "@/app/components/DealsDetails/Deals";
import MainComponent from "@/app/components/MainComponent/page";
import SalesDetails from "@/app/components/SalesDetails/page";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const currentTheme = useSelector(selectTheme);

  const textStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  return (
    <div className="w-full">
      <h1 style={textStyles} className="text-[32px] leading-10 p-4">
        Dashboard
      </h1>
      <MainComponent />
      <SalesDetails />
      <Deals />
    </div>
  );
};

export default Dashboard;

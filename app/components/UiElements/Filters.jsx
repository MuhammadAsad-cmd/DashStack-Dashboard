import React from "react";
import OrderStatus from "../OrderStatus/OrderStatus";
import { GrFilter } from "react-icons/gr";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const UIFilters = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };
 
  return (
    <>
      <div
        style={darkModeStyles}
        className={`flex items-center px-2 w-[260px] md:w-[336px] h-[70px] ${
          currentTheme !== "dark" ? "border" : ""
        } rounded-2xl space-x-3`}
      >
        <GrFilter className="text-2xl ml-4" />
        <div className="h-[70px] w-[1px] bg-[#979797] opacity-50"></div>
        <p className="">Filter By</p>
        <div className="h-[70px] w-[1px] bg-[#979797] opacity-50"></div>
        <OrderStatus />
      </div>
    </>
  );
};

export default UIFilters;

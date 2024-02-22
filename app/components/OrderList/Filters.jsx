'use client'
import React from "react";
import DateDropdown from "../DateDropdown/DateDropdown";
import OrderTypeDropdown from "../Ordertype/OrderType";
import OrderStatus from "../OrderStatus/OrderStatus";
import { IoMdRefresh } from "react-icons/io";
import { GrFilter } from "react-icons/gr";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const Filters = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };
  const ResetStyles = {
    color: currentTheme === "dark" ? "#FF8743" : "#EA0234",
  };

  return (
    <>
      <div
        style={darkModeStyles}
        className={`flex items-center w-[852px] h-[70px] ${
          currentTheme !== "dark" ? "border" : ""
        } rounded-xl space-x-6`}
      >
        <GrFilter className="text-2xl ml-4" />
        <div className="h-[70px] w-[1px] bg-[#979797] opacity-50"></div>
        <p className="ml-3">Filter By</p>
        <div className="h-[70px] w-[1px] bg-[#979797] opacity-50"></div>
        <DateDropdown />
        <div className="h-[70px] w-[1px] bg-[#979797] opacity-50"></div>
        <OrderTypeDropdown />
        <div className="h-[70px] w-[1px] bg-[#979797] opacity-50"></div>
        <OrderStatus />
        <div className="h-[70px] w-[1px] bg-[#979797] opacity-50"></div>
        <div
          style={ResetStyles}
          className="flex items-center text-sm leading-5 ml-3 cursor-pointer"
        >
          <IoMdRefresh className="mr-1" />
          <p>Reset Filter</p>
        </div>
      </div>
    </>
  );
};

export default Filters;

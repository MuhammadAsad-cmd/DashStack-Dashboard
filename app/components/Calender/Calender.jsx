'use client'
import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import CalenderSidebar from "./CalenderSidebar";

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentTheme = useSelector(selectTheme);

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const DarkStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };

  const tableiconStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#FAFBFD",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };

  const MonthStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#F1F4F9",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const getCalendarDays = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start, end });

    return days;
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <>
      <div className="p-2">
        <h1 style={favStyles} className="font-bold text-[32px] leading-10">
          Calendar
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-5 mb-2">
        <CalenderSidebar />

        <div
          style={DarkStyles}
          className="flex-grow md:col-span-2 border rounded-xl"
        >
          <div className="flex justify-between items-center mb-4 px-6 my-8">
            <div>
              <p className="hidden lg:block text-sm leading-5 opacity-70">Today</p>
            </div>
            <div className="flex items-center">
              <button
                className="text-lg font-bold w-[22px] h-[22px] flex items-center justify-center text-center rounded-md"
                onClick={goToPrevMonth}
              >
                <FaChevronLeft />
              </button>
              <h2 className="text-2xl leading-5 font-bold">
                {format(currentMonth, "MMMM yyyy")}
              </h2>
              <button
                className="text-lg font-bold  w-[22px] h-[22px] flex items-center justify-center text-center rounded-md"
                onClick={goToNextMonth}
              >
                <FaChevronRight />
              </button>
            </div>
            <div
              style={tableiconStyles}
              className="hidden lg:flex items-center px-4 border text-center justify-between rounded-xl
              w-[188px] h-10"
            >
              <p>Day</p>
              <div className="w-[1px] h-10 bg-[#979797] opacity-35"></div>
              <p>Week</p>
              <div className="w-[1px] h-10 bg-[#979797] opacity-35"></div>
              <p>Month</p>
            </div>
          </div>
          <div className="py-4 h-full">
            <div
              style={MonthStyles}
              className="grid grid-cols-7 gap-y-1.5 gap-2 md:gap-x-[32px] h-[48px] items-center"
            >
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <div key={day} className="text-center font-bold text-sm">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {getCalendarDays().map((day) => (
                <div
                  key={day}
                  className={`text-center py-2 w-[50px] lg:w-[100px] h-[70px] md:h-[121px] cursor-pointer border-r border-b ${
                    isToday(day) ? "" : ""
                  }`}
                >
                  {format(day, "d")}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;

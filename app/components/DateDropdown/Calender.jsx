'use client'
import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday
} from "date-fns";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const MonthlyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentTheme = useSelector(selectTheme);

  const arrowStyles = {
    backgroundColor: currentTheme === "dark" ? "#475365" : "#E7E9EE",
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
    <div className="mx-auto mt-8">
      <div className="flex justify-between items-center mb-4 mx-8">
        <div>
          <h2 className="text-base leading-5 font-bold">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
        </div>

        <div className="flex space-x-3">
          <button style={arrowStyles} className="text-lg font-bold w-[22px] h-[22px] flex items-center justify-center text-center rounded-md" onClick={goToPrevMonth}>
          <FaAngleLeft />
          </button>
          <button style={arrowStyles} className="text-lg font-bold  w-[22px] h-[22px] flex items-center justify-center text-center rounded-md" onClick={goToNextMonth}>
          <FaAngleRight />
          </button>
        </div>
      </div>
      <hr className="mt-6 mb-5 w-[387px] h-[1px] opacity-45 bg-[#979797]"/>

      <div className="grid grid-cols-7 gap-y-1.5 gap-x-[32px] px-[30px]">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="text-center font-bold text-sm">
            {day}
          </div>
        ))}
        {getCalendarDays().map((day) => (
          <div
            key={day}
            className={`text-center py-2 cursor-pointer ${
              isToday(day) ? 'bg-[#6085FF] w-10 h-10 m-auto text-white rounded-md' : ''
            }`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyCalendar;

"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import MonthlyCalendar from "./Calender";

const DateDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const DropdownStyles = {
    backgroundColor: currentTheme === "dark" ? "#313D4F" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="font-semibold rounded-lg leading-5 text-sm px-2 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          <div className="flex gap-3 items-center text-center">
            <div>
              <p className="text-base font-bold">Date</p>
            </div>
            <FaChevronDown className="" />
          </div>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            style={DropdownStyles}
            id="dropdown"
            className="z-10 absolute rounded-lg shadow w-[387px] pb-5"
          >
            <MonthlyCalendar />
            <hr className="mt-4 mb-3 w-[387px] h-[1px] opacity-45 bg-[#979797]" />

            <p className="text-sm mt-4 px-6">
              *You can choose multiple Order Status
            </p>
            <div className="flex items-center text-center justify-center mt-6">
              <button className="w-[129px] text-white rounded-lg text-xs font-bold flex items-center text-center justify-center bg-[#4880FF] h-[34px]">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DateDropdown;

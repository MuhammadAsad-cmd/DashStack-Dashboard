"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import { useSelector } from "react-redux";
import DealsTable from "../DealsTable/DealsTable";

const Deals = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const DropdownStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  return (
    <>
      <div style={darkModeStyles} className="mt-10 p-6 rounded-xl">
        <div className="flex md:flex-row flex-col gap-4 justify-between  leading-10 p-3">
          <h2 className="text-2xl font-bold leading-5">
            Deals Details
          </h2>
          {/* Dropdown */}
          <div className="relative">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="font-semibold rounded-lg leading-5 text-[#646464] text-sm px-2 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              <div style={DropdownStyles} className="flex gap-3 border w-[104px] h-[28px] text-center justify-center items-center rounded-lg p-3">
                <div>
                  <p className="text-xs leading-3">October</p>
                </div>
                <FaChevronDown className="w-[10px] h-[10px]" />
              </div>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div
                id="dropdown" style={DropdownStyles}
                className="z-10 absolute  divide-y divide-gray-100 rounded-lg shadow w-44 h-44 overflow-auto -right-3 left-auto"
              >
                <ul
                  className="py-2 text-sm"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      January
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      Feburary
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      March
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      April
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      May
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      June
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      July
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      August
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      September
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      October
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      November
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 ">
                      December
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <DealsTable />
      </div>
    </>
  );
};

export default Deals;

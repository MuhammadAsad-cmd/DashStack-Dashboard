"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const GenderDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);

  const DropdownStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    searchBarInputBackground: currentTheme === "dark" ? "#323D4E" : "#FFFFFF",
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
        <div className="relative w-[177px]">
          <label
            htmlFor="gender"
            className="block text-sm text-start font-medium"
          >
            Gender
          </label>
          <input
            type="text"
            id="gender"
            className="border border-gray-300 text-sm rounded-lg block w-[177px] h-[52px] p-2.5"
            placeholder="Select Gender"
            list="gender-list"
            style={{
              backgroundColor: DropdownStyles.searchBarInputBackground,
            }}
          />
          <datalist id="gender-list">
            <option value="Male" />
            <option value="Female" />
            <option value="Other" />
          </datalist>
          <FaChevronDown className="absolute top-1/2 right-2 flex py-2.5 transform -translate-y-1/2" />
        </div>

     
      </div>
    </>
  );
};

export default GenderDropdown;

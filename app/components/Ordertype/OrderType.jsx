"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const OrderTypeDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const currentTheme = useSelector(selectTheme);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
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
  const handleItemClick = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const dropdownItems = [
    { id: 1, text: "Health & Medicine" },
    { id: 2, text: "Book & Stationary" },
    { id: 3, text: "Services & Industry" },
    { id: 4, text: "Fashion & Beauty" },
    { id: 5, text: "Home & Living" },
    { id: 6, text: "Electronics" },
    { id: 7, text: "Mobile & Phone" },
    { id: 8, text: "Accessories" },
  ];

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
          <div className="flex gap-3 items-center">
            <div>
              <p className="text-base font-bold">Order Type</p>
            </div>
            <FaChevronDown className="" />
          </div>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            style={DropdownStyles}
            id="dropdown"
            className="z-10 absolute rounded-xl shadow-2xl  w-[521px] h-[358px] bg-white"
          >
            <div>
              <h1 style={favStyles} className="text-lg leading-10 px-4 mt-2">
                Select Order Type
              </h1>
            </div>
            <div className="flex flex-wrap space-x-4 space-y-4 px-3">
              {dropdownItems.map((item) => (
                <p
                  key={item.id}
                  className={`w-[147px] h-[34px] mt-4 text-sm flex items-center cursor-pointer text-center justify-center border rounded-full ${
                    selectedItems.includes(item.id)
                      ? "bg-[#4880FF] text-white border-none"
                      : "border"
                  }`}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.text}
                </p>
              ))}
            </div>
            <div className="w-[521px] h-[1px] bg-[#979797] mt-6 opacity-45"></div>

            <p className="text-sm mt-4 px-6">
              *You can choose multiple Order type
            </p>
            <div className="flex items-center text-center justify-center mt-8">
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

export default OrderTypeDropdown;

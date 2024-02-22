"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const LanguageDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const DropdownStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
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
      <div className="relative lg:block hidden" ref={dropdownRef}>
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="font-semibold rounded-lg leading-5 text-sm px-2 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-md w-[40px] h-[27px]"
              src="/images/UK Flag.svg"
              width={40}
              height={27}
              alt=""
            />
            <div>
              <p className="text-base font-bold">English</p>
            </div>
            <FaChevronDown className="" />
          </div>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            style={DropdownStyles}
            id="dropdown"
            className="z-10 absolute divide-y divide-gray-100 rounded-lg shadow w-[254px]"
          >
            <ul
              className="py-2 text-sm "
              aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
              <li>
                <a href="#" className="flex w-full px-2 py-3  ">
                    <Image
                      className="rounded-md w-[40px] h-[27px]"
                      src="/images/UK Flag.svg"
                      width={40}
                      height={27}
                      alt=""
                    />
                  <div className="w-full ps-3">
                    <div className="text-sm mb-1.5">
                      <span className="font-semibold text-lg ">English</span>{" "}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex w-full px-2 py-3  ">
                    <Image
                      className="rounded-md w-[40px] h-[27px]"
                      src="/images/french.svg"
                      width={40}
                      height={27}
                      alt=""
                    />
                  <div className="w-full ps-3">
                    <div className=" text-sm mb-1.5">
                      <span className="font-semibold text-lg ">
                      French
                      </span>{" "}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex w-full px-2 py-3  ">
                    <Image
                      className="rounded-md w-[40px] h-[27px]"
                      src="/images/spanish.svg"
                      width={40}
                      height={27}
                      alt=""
                    />
                  <div className="w-full ps-3">
                    <div className=" text-sm mb-1.5">
                      <span className="font-semibold text-lg ">Spanish </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageDropdown;

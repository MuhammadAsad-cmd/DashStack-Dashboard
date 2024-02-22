"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsExclamationLg, BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowDropdown, IoMdSettings } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux";

const AdminDropdown = () => {
  const [isImageDropdownOpen, setIsImageDropdownOpen] = useState(false);
  const currentTheme = useSelector(selectTheme);

  const toggleImageDropdown = () => {
    setIsImageDropdownOpen(!isImageDropdownOpen);
  };

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const DropdownStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsImageDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="lg:block hidden">
        <div
          className="relative inline-block text-left"
          style={darkModeStyles}
          ref={dropdownRef}
        >
          <button
            id="dropdownAvatarNameButton"
            onClick={toggleImageDropdown}
            className="flex items-center gap-2 font-medium"
            type="button"
          >
            <Image
              className="rounded-md w-[44px] h-[44px]"
              src="/images/admin.svg"
              width={44}
              height={44}
              alt=""
            />
            <div>
              <p className="text-base font-bold">Moni</p>
              <p className="text-sm font-medium text-start">Admin</p>
            </div>
            <IoIosArrowDropdown className="text-2xl" />
          </button>

          {/* Dropdown menu */}
          {isImageDropdownOpen && (
            <div
              style={DropdownStyles}
              id="dropdownAvatarName"
              className="absolute z-10  divide-y mt-4 divide-gray-100 w-[205px] rounded-lg shadow -right-3 left-auto"
            >
              <ul
                className="py-2 px-5"
                aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
              >
                <li>
                  <a href="#" className="flex items-center w-full px-2 py-3  ">
                    <Image
                      className="rounded-md w-[18px] h-[16px]"
                      src="/images/setting2.svg"
                      width={18}
                      height={16}
                      alt=""
                    />
                    <div className="w-full ps-3">
                      <div className="text-sm mb-1.5">
                        <span className="font-semibold text-sm">
                          Manage Account
                        </span>{" "}
                      </div>
                    </div>
                  </a>
                </li>
                <hr />
                <li>
                  <a href="#" className="flex items-center w-full px-2 py-3  ">
                    <Image
                      className="rounded-md w-[18px] h-[16px]"
                      src="/images/key.svg"
                      width={18}
                      height={16}
                      alt=""
                    />
                    <div className="w-full ps-3">
                      <div className=" text-sm mb-1.5">
                        <span className="font-semibold text-sm">
                          Change Password
                        </span>{" "}
                      </div>
                    </div>
                  </a>
                </li>
                <hr />
                <li>
                  <a href="#" className="flex items-center w-full px-2 py-3  ">
                    <Image
                      className="rounded-md w-[18px] h-[16px]"
                      src="/images/refresh.svg"
                      width={18}
                      height={16}
                      alt=""
                    />
                    <div className="w-full ps-3">
                      <div className=" text-sm mb-1.5">
                        <span className="font-semibold text-sm">
                          Activity Log{" "}
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <hr />
                <li>
                  <a href="#" className="flex items-center w-full px-2 py-3  ">
                    <Image
                      className="rounded-md w-[18px] h-[16px]"
                      src="/images/logout.svg"
                      width={18}
                      height={16}
                      alt=""
                    />
                    <div className="w-full ps-3">
                      <div className=" text-sm mb-1.5">
                        <span className="font-semibold text-sm">Log out</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDropdown;

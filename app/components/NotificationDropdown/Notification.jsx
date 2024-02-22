"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsExclamationLg, BsFillPersonFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useSelector } from "react-redux";

const Notification = () => {
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
          <div
            onClick={toggleImageDropdown}
            className="flex items-center text-black hover:text-gray-700"
          >
            <p className="relative flex">
              <Image
                className="w-[29px] h-[30.5px] "
                width={29}
                height={30}
                src="/images/NotificationIcon.svg"
                alt=""
              />
              <span className="absolute right-2 left-4 -top-2 rounded-full bg-[#e02b2b] w-5 h-5 p-0 m-0 text-white text-sm text-center">
                6
              </span>
            </p>
          </div>

          {/* Dropdown menu */}
          {isImageDropdownOpen && (
            <div
              style={DropdownStyles}
              id="dropdownAvatarName"
              className="absolute z-10  divide-y mt-4 divide-gray-100 w-64 rounded-lg shadow -right-3 left-auto"
            >
              <a href="#" className="flex w-full px-4 py-2 ">
                <h1 className="text-lg font-semibold">Notification</h1>
              </a>
              <ul
                className="py-2 text-sm "
                aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
              >
                <li>
                  <a href="#" className="flex w-full px-2 py-3  ">
                    <div className="flex-shrink-0 border rounded-full m-auto p-3 setting-linear">
                      <IoMdSettings className="text-2xl text-white" />
                    </div>
                    <div className="w-full ps-3">
                      <div className="text-sm mb-1.5">
                        <span className="font-semibold text-lg ">Settings</span>{" "}
                        <p className="text-base">Update Dashboard</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full px-2 py-3  ">
                    <div className="border rounded-full p-3 m-auto calender-linear">
                      <SlCalender className="text-2xl text-white" />
                    </div>
                    <div className="w-full ps-3">
                      <div className=" text-sm mb-1.5">
                        <span className="font-semibold text-lg ">
                          Event Update
                        </span>{" "}
                        <p className="text-base">An Event date update again</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full px-2 py-3  ">
                    <div className="flex-shrink-0 border rounded-full m-auto p-3 profile-linear ">
                      <BsFillPersonFill className="text-2xl text-white" />
                    </div>
                    <div className="w-full ps-3">
                      <div className=" text-sm mb-1.5">
                        <span className="font-semibold text-lg ">Profile</span>
                        <p className="text-base">Update your profile</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full px-2 py-3  ">
                    <div className="border rounded-full p-2 m-auto application-linear ">
                      <BsExclamationLg className="text-white text-3xl" />
                    </div>
                    <div className="w-full ps-3">
                      <div className=" text-sm mb-1.5">
                        <span className="font-semibold text-lg ">
                          Application Error
                        </span>{" "}
                        <p className="text-base">
                          Check your running application
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="flex items-center text-center justify-center py-4">
                <p>see all notifications</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notification;

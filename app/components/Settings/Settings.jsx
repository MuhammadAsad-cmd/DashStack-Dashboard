"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React from "react";
import { IoMdCamera } from "react-icons/io";
import { useSelector } from "react-redux";
import GenderDropdown from "../Contact/GenderDropdown";

const Settings = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#212121",
    searchBarInputBackground: currentTheme === "dark" ? "#323D4E" : "#FFFFFF",
  };

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };
  return (
    <>
      <div className="leading-10 p-3">
        <h1 style={favStyles} className="font-bold text-2xl md:text-[32px] ">
          General Settings
        </h1>
      </div>

      <div
        style={darkModeStyles}
        className="flex flex-col items-center text-center justify-center rounded-xl py-14 px-4"
      >
        <div className="w-[80px] h-[80px] rounded-full bg-[#ECECEE] flex items-center text-center justify-center">
          <IoMdCamera className="w-[26px] h-[20px] text-[#202224]" />
        </div>
        <p className="text-[#4379EE] text-sm leading-4 mt-4">Upload Logo</p>

        <form>
          <div className="flex flex-col lg:flex-row gap-y-5 gap-x-[60px] mb-6 mt-10">
            <div className="text-start">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-sm rounded-lg  block w-full lg:w-[360px] h-[52px] p-2.5 "
                placeholder="Enter your first name"
                style={{
                  backgroundColor: darkModeStyles.searchBarInputBackground,
                }}
              />
            </div>

            <div className="text-start">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-sm rounded-lg  block w-full lg:w-[360px] h-[52px]  p-2.5 "
                placeholder="Enter your last name"
                style={{
                  backgroundColor: darkModeStyles.searchBarInputBackground,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-5 gap-x-[60px] mb-6 mt-10">
            <div className="text-start">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-sm rounded-lg  block w-full lg:w-[360px] h-[52px] p-2.5 "
                placeholder="Enter your email"
                style={{
                  backgroundColor: darkModeStyles.searchBarInputBackground,
                }}
              />
            </div>

            <div className="text-start">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Enter your email
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-sm rounded-lg  block w-full lg:w-[360px] h-[52px]  p-2.5 "
                placeholder="Enter your phone number"
                style={{
                  backgroundColor: darkModeStyles.searchBarInputBackground,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-5 gap-x-[60px] mb-6 mt-10">
            <div className="text-start ">
              <label htmlFor="first_name" className="block text-sm font-medium">
                Date of Birth
              </label>
              <input
                type="text"
                id="first_name"
                className="border border-gray-300 text-sm rounded-lg  block w-full lg:w-[360px] h-[52px]  p-2.5 "
                placeholder="11-03-1994"
                style={{
                  backgroundColor: darkModeStyles.searchBarInputBackground,
                }}
              />
            </div>
            <GenderDropdown />
          </div>

          <button className="w-[274px] h-[56px] bg-[#4880FF] rounded-xl text-white text-lg mt-[57px]">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;

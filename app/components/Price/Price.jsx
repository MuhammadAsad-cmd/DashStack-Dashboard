"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React from "react";
import { useSelector } from "react-redux";

const Price = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#212121",
  };

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  return (
    <>
      <div className="leading-10 p-3">
        <h1 style={favStyles} className="font-bold text-[32px] ">
          Pricing
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-4 space-x-5">
        <div
          style={darkModeStyles}
          className="flex flex-col items-center text-center justify-center  rounded-2xl pt-10 px-5"
        >
          <div className="space-y-2.5">
            <p className="text-[22px] leading-8">Basic</p>
            <p className="text-base leading-5">Monthly Charge</p>
            <p className="text-[46px] text-[#4880FF] font-semibold">$14.99</p>
          </div>
          <hr className="w-full h-[2px] my-10" />
          <div className="space-y-[29px]">
            <p className="text-lg leading-6">Free Setup</p>
            <p className="text-lg leading-6">Bandwidth Limit 10 GB</p>
            <p className="text-lg leading-6">20 User Connection</p>
            <p className="text-lg leading-6 opacity-30">Analytics Report</p>
            <p className="text-lg leading-6 opacity-30">Public API Access</p>

            <p className="text-lg leading-6 opacity-30">Plugins Intregation</p>
            <p className="text-lg leading-6 opacity-30">
              Custom Content Management
            </p>

            <hr className="w-full h-[2px] my-10" />
            <button className="text-[#4880FF] border-2 border-[#4880FF] m-auto w-[180px] h-[60px] rounded-full text-base flex items-center text-center justify-center">
              Get Started
            </button>
          </div>

          <p className="text-base mt-6 underline mb-14 cursor-pointer">
            Start Your 30 Day Free Trial
          </p>
        </div>
        <div
          style={darkModeStyles}
          className="flex flex-col items-center text-center justify-center  rounded-2xl pt-10 px-5"
        >
          <div className="space-y-2.5">
            <p className="text-[22px] leading-8">Standard</p>
            <p className="text-base leading-5">Monthly Charge</p>
            <p className="text-[46px] text-[#4880FF] font-semibold">$49.99</p>
          </div>
          <hr className="w-full h-[2px] my-10" />
          <div className="space-y-[29px]">
            <p className="text-lg leading-6">Free Setup</p>
            <p className="text-lg leading-6">Bandwidth Limit 10 GB</p>
            <p className="text-lg leading-6">20 User Connection</p>
            <p className="text-lg leading-6">Analytics Report</p>
            <p className="text-lg leading-6">Public API Access</p>

            <p className="text-lg leading-6 opacity-30">Plugins Intregation</p>
            <p className="text-lg leading-6 opacity-30">
              Custom Content Management
            </p>

            <hr className="w-full h-[2px] my-10" />
            <button className="text-[#4880FF] border-2 border-[#4880FF] m-auto w-[180px] h-[60px] rounded-full text-base flex items-center text-center justify-center">
              Get Started
            </button>
          </div>

          <p className="text-base mt-6 underline mb-14 cursor-pointer">
            Start Your 30 Day Free Trial
          </p>
        </div>

        <div
          style={darkModeStyles}
          className="flex flex-col items-center text-center justify-center  rounded-2xl pt-10 px-5"
        >
          <div className="space-y-2.5">
            <p className="text-[22px] leading-8">Premium</p>
            <p className="text-base leading-5">Monthly Charge</p>
            <p className="text-[46px] text-[#4880FF] font-semibold">$89.99</p>
          </div>
          <hr className="w-full h-[2px] my-10" />
          <div className="space-y-[29px]">
            <p className="text-lg leading-6">Free Setup</p>
            <p className="text-lg leading-6">Bandwidth Limit 10 GB</p>
            <p className="text-lg leading-6">20 User Connection</p>
            <p className="text-lg leading-6">Analytics Report</p>
            <p className="text-lg leading-6">Public API Access</p>
            <p className="text-lg leading-6">Plugins Intregation</p>
            <p className="text-lg leading-6">Custom Content Management</p>

            <hr className="w-full h-[2px] my-10" />
            <button className="text-[#4880FF] border-2 border-[#4880FF] m-auto w-[180px] h-[60px] rounded-full text-base flex items-center text-center justify-center">
              Get Started
            </button>
          </div>

          <p className="text-base mt-6 underline mb-14 cursor-pointer">
            Start Your 30 Day Free Trial
          </p>
        </div>
      </div>
    </>
  );
};

export default Price;

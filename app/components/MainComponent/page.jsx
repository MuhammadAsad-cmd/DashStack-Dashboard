'use client'
import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsFillBoxFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const MainComponent = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
  };

  const textStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const secondaryTextStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const opacityValue = currentTheme === "dark" ? 0.7 : 1;

  return (
    <>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        <div
          className="shadow-lg rounded-xl w-full bg-white"
          style={darkModeStyles}
        >
          <div className="p-3">
            <div className=" items-center flex justify-between">
              <div className="flex flex-col gap-4">
                <p
                  className="text-base leading-5"
                  style={{ ...textStyles, opacity: opacityValue }}
                >
                  Total User
                </p>

                <p
                  style={secondaryTextStyles}
                  className="text-[28px] leading-10"
                >
                  40,689
                </p>
              </div>

              <div className="rounded-2xl w-[60px] h-[60px] bg-blue-300 flex items-center justify-center">
                <IoPerson className="text-blue-500 text-3xl" />
              </div>
            </div>
            <div className="ml-2 w-full flex mt-8">
              <HiMiniArrowTrendingUp className="text-[#00B69B] text-[24px]" />
              <p className="flex ">
                <span className="text-[#00B69B] mr-1 text-[16px]">8.5%</span>
                <span style={secondaryTextStyles}>Up from yesterday</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="shadow-lg rounded-xl w-full bg-white "
          style={darkModeStyles}
        >
          <div className="p-3">
            <div className=" items-center flex justify-between">
              <div className="flex flex-col gap-4">
                <p
                  className="text-base leading-5"
                  style={{ ...textStyles, opacity: opacityValue }}
                >
                  Total Order
                </p>
                <p
                  style={secondaryTextStyles}
                  className="text-[28px] leading-10"
                >
                  10293
                </p>
              </div>

              <div className="rounded-2xl w-[60px] h-[60px] bg-[#fff3d6] flex items-center justify-center">
                <BsFillBoxFill className="text-[#fec53d]  text-3xl" />
              </div>
            </div>
            <div className="flex mt-8">
              <HiMiniArrowTrendingUp className="text-[#00B69B] text-[24px] " />
              <p className="flex ">
                <span className="text-[#00B69B] mr-1 text-[16px]">1.3%</span>
                <span style={secondaryTextStyles}>Up from past week</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="shadow-lg rounded-xl  bg-white w-full"
          style={darkModeStyles}
        >
          <div className="p-3">
            <div className=" items-center flex justify-between">
              <div className="flex flex-col gap-4">
                <p
                  className="text-base leading-5"
                  style={{ ...textStyles, opacity: opacityValue }}
                >
                  Total Sales
                </p>
                <p
                  style={secondaryTextStyles}
                  className="text-[28px] leading-10"
                >
                  $89,000
                </p>
              </div>

              <div className="rounded-2xl w-[60px] h-[60px] bg-[#d9f7e8] flex items-center justify-center">
                <GoGraph className="text-[#4ad991] font-font-medium text-3xl" />
              </div>
            </div>
            <div className="w-full flex mt-8">
              <HiMiniArrowTrendingUp className="text-[#F93C65] text-[24px] " />
              <p className="flex ">
                <span className="text-[#F93C65] mr-1 text-[16px]">8.5%</span>
                <span style={secondaryTextStyles}>Down from yesterday</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="shadow-lg rounded-xl bg-white w-full"
          style={darkModeStyles}
        >
          <div className="p-3">
            <div className=" items-center flex justify-between">
              <div className="flex flex-col gap-4">
                <p
                  className="text-base leading-5"
                  style={{ ...textStyles, opacity: opacityValue }}
                >
                  Total Pending
                </p>
                <p
                  style={secondaryTextStyles}
                  className="text-[28px] leading-10"
                >
                  20400
                </p>
              </div>

              <div className="rounded-2xl w-[60px] h-[60px] bg-[#ffded1] flex items-center justify-center">
                <FaClockRotateLeft className="text-[#ff9871] text-3xl" />
              </div>
            </div>
            <div className="ml-2 w-full flex mt-8">
              <HiMiniArrowTrendingUp className="text-[#00B69B] text-[24px] " />
              <p className="flex ">
                <span className="text-[#00B69B] mr-1 text-[16px]">1.8%</span>
                <span style={secondaryTextStyles}>Up from yesterday</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;

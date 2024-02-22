"use client";
import { CalenderEvents } from "@/app/Data";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const CalenderSidebar = () => {
  const currentTheme = useSelector(selectTheme);

  const DarkStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };

  const TextStyles = {
    color: currentTheme === "dark" ? "#d4d6d9" : "",
  };

  const seemoreStyles = {
    backgroundColor: currentTheme === "dark" ? "#3D4A5F" : "#E2EAF8",
    color: currentTheme === "dark" ? "#d4d6d9" : "",
  };

  return (
    <>
      <div
        style={DarkStyles}
        className="w-[290px] py-6 bg-white rounded-xl lg:block hidden"
      >
        <div className=" flex justify-center">
          <button className="w-[238px] h-[43px] text-sm font-bold bg-[#4880FF] text-white rounded-lg">
            + Add New Event
          </button>
        </div>
        <p className="text-lg leading-6 mt-6 px-6">You are going to</p>

        <hr className="h-[1px] w-full bg-[#E0E0E0] my-5" />
        <div className="flex flex-col items-center justify-center text-start">
          {CalenderEvents.map((item) => (
            <div key={item.id}>
              <div className="flex space-x-3">
                <Image
                  width={38}
                  height={38}
                  src={item.mainImg}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-sm leading-6">{item.eventName} </p>
                  <p style={TextStyles} className="text-xs  leading-6">
                    {item.date}
                  </p>
                  <p style={TextStyles} className="text-xs  leading-6">
                    {item.address}
                  </p>
                  <p style={TextStyles} className="text-xs  leading-6">
                    {item.city}
                  </p>
                  <Image
                  width={120}
                  height={6}
                    src={item.image1}
                    alt=""
                    className="h-6 w-[120px] mt-1"
                  />
                </div>
              </div>
              <hr className="h-[1px] w-full bg-[#E0E0E0] my-5" />
            </div>
          ))}
          <button
            style={seemoreStyles}
            className="w-[126px] h-[38px] text-sm font-bold leading-7 mt-4 rounded-xl"
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default CalenderSidebar;

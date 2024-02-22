"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React, { useState } from "react";
import { FaPlus, FaRegStar } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbMessageCircleCog, TbSend } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { useSelector } from "react-redux";

const InboxSideBarItem = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState("Inbox");
  const currentTheme = useSelector(selectTheme);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);

    if (typeof onItemClick === "function") {
      onItemClick(item);
    }
  };

  const checkboxStyles = {
    backgroundColor: isChecked ? "#4379EE" : currentTheme === "dark" ? "" : "",
    color: isChecked
      ? "#00B69B"
      : currentTheme === "dark"
      ? "00B69B"
      : "00B69B",
  };

  const DarkStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };


  return (
    <div style={DarkStyles} className="py-6 w-[286px] rounded-xl lg:block hidden">
      <div className="flex mx-6 mb-6">
        <button className="w-[238px] h-[43px] text-sm font-bold bg-[#4880FF] text-white rounded-lg">
          + Compose
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        <SideItem
          icon={<FiMail />}
          label="Inbox"
          onClick={() => handleItemClick("Inbox")}
          isActive={activeItem === "Inbox"}
          number="1253"
        />
        <SideItem
          icon={<FaRegStar />}
          label="Starred"
          onClick={() => handleItemClick("Starred")}
          isActive={activeItem === "Starred"}
          number="245"
        />
        <SideItem
          icon={<TbSend />}
          label="Sent"
          onClick={() => handleItemClick("Sent")}
          isActive={activeItem === "Sent"}
          number="24,532"
        />
        <SideItem
          icon={<LuPencil />}
          label="Draft"
          onClick={() => handleItemClick("Draft")}
          isActive={activeItem === "Draft"}
          number="09"
        />
        <SideItem
          icon={<IoWarningOutline />}
          label="Spam"
          onClick={() => handleItemClick("Spam")}
          isActive={activeItem === "Spam"}
          number="14"
        />
        <SideItem
          icon={<TbMessageCircleCog />}
          label="Important"
          onClick={() => handleItemClick("Important")}
          isActive={activeItem === "Important"}
          number="18"
        />
        <SideItem
          icon={<RiDeleteBin6Line />}
          label="Bin"
          onClick={() => handleItemClick("Bin")}
          isActive={activeItem === "Bin"}
          number="9"
        />
      </ul>
      <div className="px-6 mt-8">
        <h1 className="text-base font-bold">Label</h1>

        <div className="mt-6">
          <div className=" h-[43px] mx-6 flex items-center space-x-3 mt-[14px]">
            <div
              style={checkboxStyles}
              className="w-[15px] h-[15px] border-2 border-[#00B69B] rounded-sm flex items-center text-center justify-center"
              onClick={handleCheckboxClick}
            >
              {isChecked && <TiTick />}
            </div>
            <p>Primary</p>
          </div>

          <div className="w-[238px] h-[43px] mx-6 flex items-center space-x-3 mt-[14px]">
            <div
              style={checkboxStyles}
              className="w-[15px] h-[15px] border-2 border-[#3D369F] rounded-sm flex items-center text-center justify-center"
              onClick={handleCheckboxClick}
            >
              {isChecked && <TiTick />}
            </div>
            <p>Social</p>
          </div>
          <div className="w-[238px] h-[43px] mx-6 flex items-center space-x-3 mt-[14px]">
            <div
              style={checkboxStyles}
              className="w-[15px] h-[15px] border-2 border-[#D456FD] rounded-sm flex items-center text-center justify-center"
              onClick={handleCheckboxClick}
            >
              {isChecked && <TiTick />}
            </div>
            <p>Work</p>
          </div>
          <div className="w-[238px] h-[43px] mx-6 flex items-center space-x-3 mt-[14px]">
            <div
              style={checkboxStyles}
              className="w-[15px] h-[15px] border-2 border-[#F2AC34] rounded-sm flex items-center text-center justify-center"
              onClick={handleCheckboxClick}
            >
              {isChecked && <TiTick />}
            </div>
            <p>Friends</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-5">
          <FaPlus />
          <p>Create New Label</p>
        </div>
      </div>
    </div>
  );
};

const SideItem = ({ icon, label, onClick, isActive, number }) => {
  return (
    <>
      <div className="flex cursor-pointer">
        <div
          className={`flex items-center justify-between w-[238px] h-[43px] mx-6 text-center px-3 rounded-lg ${
            isActive ? "bg-[#4880FF] bg-opacity-15 text-[#4880FF]" : ""
          }`}
          onClick={() => onClick(label)}
        >
          <div className="flex items-center text-center space-x-3">
            <div className="w-[22px] text-[22px] h-[25px]">{icon}</div>
            <span className="text-sm leading-5 tracking-wide">{label}</span>
          </div>
          <div className="flex items-center">
            <p>{number}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InboxSideBarItem;

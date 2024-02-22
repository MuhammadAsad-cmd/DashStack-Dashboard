"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiArchiveBox } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import { TiTick } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from "next/image";

const Inbox = () => {
  const currentTheme = useSelector(selectTheme);
  const [checkedItems, setCheckedItems] = useState([]);
  const [starredItems, setStarredItems] = useState([]);

  const tableIconStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#FAFBFD",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    searchBarInputBackground: currentTheme === "dark" ? "#323D4E" : "#FFFFFF",
  };

  const handleCheckboxClick = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const ListStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
    borderBottom:
      currentTheme === "dark" ? "1px solid #C6C6C64D" : "1px solid #D5D5D5",
  };

  const footericonStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const checkboxStyles = (todo) => ({
    backgroundColor: checkedItems.includes(todo.id)
      ? currentTheme === "dark"
        ? "#FFFFFF"
        : "#f4f7ff"
      : "transparent",
    color: checkedItems.includes(todo.id)
      ? currentTheme === "dark"
        ? "#000000"
        : "#000000"
      : currentTheme === "dark"
      ? "#FFFFFF"
      : "#202224",
  });

  const handleStarClick = (id) => {
    if (starredItems.includes(id)) {
      setStarredItems(starredItems.filter((item) => item !== id));
    } else {
      setStarredItems([...starredItems, id]);
    }
  };

  const starIcon = (todo) => {
    if (starredItems.includes(todo.id)) {
      return (
        <Image
          width={16}
          height={16}
          src="/images/Star.svg"
          alt="Star"
          className="w-[16px] h-[16px]"
        />
      );
    } else {
      return (
        <Image
          width={16}
          height={16}
          src="/images/Starlight.svg"
          alt="Star"
          className="w-[16px] h-[16px]"
        />
      );
    }
  };

  const Todos = [
    {
      id: 1,
      name: "Jullu Jalal",
      text: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      label: "Primary",
    },
    {
      id: 2,
      name: "Jullu Jalal",
      text: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      label: "Work",
    },
    {
      id: 3,
      name: "Jullu Jalal",
      text: "Vacation Home Rental Success",
      time: "7:52 PM",
      label: "Friends",
    },
    {
      id: 4,
      name: "Jullu Jalal",
      text: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
    },
    {
      id: 5,
      name: "Jullu Jalal",
      text: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "7:52 PM",
      label: "Social",
    },

    {
      id: 6,
      name: "Jullu Jalal",
      text: "Always Look On The Bright Side Of Life",
      time: "7:52 PM",
      label: "Friends",
    },
    {
      id: 7,
      name: "Jullu Jalal",
      text: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "7:52 PM",
    },
    {
      id: 8,
      name: "Jullu Jalal",
      text: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "7:52 PM",
    },
    {
      id: 9,
      name: "Jullu Jalal",
      text: "Get Best Advertiser In Your Side Pocket",
      time: "7:52 PM",
      label: "Primary",
    },
    {
      id: 10,
      name: "Jullu Jalal",
      text: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
    },
    {
      id: 11,
      name: "Jullu Jalal",
      text: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "7:52 PM",
      label: "Work",
    },
    {
      id: 12,
      name: "Jullu Jalal",
      text: "Vacation Home Rental Success",
      time: "7:52 PM",
      label: "Friends",
    },
  ];

  return (
    <>
      <div style={ListStyles} className="w-full rounded-xl">
        <div className="flex md:flex-row flex-col gap-4 justify-between  leading-10 py-4 p-1 lg:p-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 h-[38px] w-[253px] rounded-full pl-10 text-sm outline-none border border-[#CFCFCF1D]"
              placeholder="Search product name"
              style={{
                backgroundColor: darkModeStyles.searchBarInputBackground,
              }}
            />
          </div>
          <div
            style={tableIconStyles}
            className="flex items-center px-4 border text-center justify-between rounded-xl w-[131px] h-10"
          >
            <p>
              <PiArchiveBox className="text-2xl" />
            </p>
            <div className="w-[1px] h-10 bg-[#979797]"></div>
            <p>
              <IoIosInformationCircleOutline className="text-2xl" />
            </p>
            <div className="w-[1px] h-10 bg-[#979797]"></div>
            <p>
              <MdDeleteOutline className="text-2xl" />
            </p>
          </div>
        </div>

        <div className=" w-full">
          {Todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center border-b border-[#C6C6C64D] justify-between h-[62px] px-[10px] lg:px-[30px] w-full ${
                checkedItems.includes(todo.id) && currentTheme !== "dark"
                  ? "bg-[#f4f7ff]"
                  : ""
              } ${
                currentTheme === "dark" && checkedItems.includes(todo.id)
                  ? "bg-[#323D4E]"
                  : ""
              }`}
            >
              <div className="flex gap-2 lg:gap-[24px] items-center">
                <div
                  style={checkboxStyles(todo)}
                  className="w-[16px] h-[16px] border border-[#B3B3B3] rounded-sm flex-shrink-0 flex items-center text-center justify-center"
                  onClick={() => handleCheckboxClick(todo.id)}
                >
                  {checkedItems.includes(todo.id) && <TiTick />}
                </div>

                <div
                  className="lg:block hidden"
                  onClick={() => handleStarClick(todo.id)}
                >
                  {starIcon(todo)}
                </div>

                <p className="text-base font-bold lg:block hidden">
                  {todo.name}
                </p>
                <p className="text-base font-semibold leading-7 text-ellipsis">
                  {todo.text}
                </p>
              </div>
              <div className="flex items-center gap-2 lg:gap-[32px]">
                {todo.time}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={footericonStyles}
        className="flex items-center justify-between mt-8 px-3"
      >
        <p>Showing 1-07 of 78</p>
        <div
          className="flex items-center px-4 text-center justify-between rounded-xl border
            w-24 h-8"
        >
          <FaAngleLeft className=" text-xl" />
          <div className="w-[1px] h-8 bg-[#979797]"></div>
          <FaAngleRight className="text-xl" />
        </div>
      </div>
    </>
  );
};

export default Inbox;

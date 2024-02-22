"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { IoIosStarOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

const Todo = () => {
  const currentTheme = useSelector(selectTheme);
  const [checkedItems, setCheckedItems] = useState([]);
  const [starredItems, setStarredItems] = useState([]);

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const arrowsStyles = {
    backgroundColor: currentTheme === "dark" ? "#2F3A4E" : "#fcfcfc",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const handleCheckboxClick = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const checkboxStyles = (todo) => ({
    backgroundColor: checkedItems.includes(todo.id)
      ? currentTheme === "dark"
        ? "transparent"
        : "transparent"
      : currentTheme === "dark"
      ? "transparent"
      : "transparent",
    color: checkedItems.includes(todo.id)
      ? currentTheme === "dark"
        ? "FFFFFF"
        : "#FFFFFF"
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
          width={26}
          height={26}
          src="/images/starfill.svg"
          alt="Star"
          className="w-[26px] h-[26px] text-[#B3B3B3]"
        />
      );
    } else {
      return (
        <Image
          width={26}
          height={26}
          src="/images/star3.svg"
          alt="Star"
          className="w-[26px] h-[26px] text-[#B3B3B3]"
        />
      );
    }
  };

  const ListStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };

  const Todos = [
    { id: 1, text: "Meeting with CEO" },
    { id: 2, text: "Pick up kids from school" },
    { id: 3, text: "Shopping with Brother" },
    { id: 4, text: "Review with HR" },
    { id: 5, text: "Going to Dia’s School" },
    { id: 6, text: "Check design files" },
    { id: 7, text: "Update File" },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col gap-4 justify-between  leading-10 p-1 mb-3 md:p-3">
        <h1 style={favStyles} className="font-bold text-[32px] ">
          To-Do List
        </h1>
        <button className="w-[147px] h-[48px] rounded-lg text-white bg-[#4379EE]">
          Add New Task
        </button>
      </div>
      <div className="flex flex-col space-y-3 lg:space-y-6">
        {Todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center border border-[#D5D5D5] justify-between h-[70px] lg:h-[93px] px-4 md:px-[14px] lg:px-[30px] w-full rounded-xl ${
              checkedItems.includes(todo.id) ? "bg-[#4880FF] text-white" : ""
            } ${
              currentTheme === "dark" && checkedItems.includes(todo.id)
                ? "bg-[#4880FF]"
                : ""
            }`}
            style={{
              backgroundColor: checkedItems.includes(todo.id)
                ? currentTheme === "dark"
                  ? "#4880FF"
                  : "#4880FF"
                : ListStyles.backgroundColor,
              border: checkedItems.includes(todo.id)
                ? currentTheme === "dark"
                  ? "none"
                  : "1px solid #D5D5D5"
                : ListStyles.border,
              color: checkedItems.includes(todo.id)
                ? currentTheme === "dark"
                  ? "#FFFFFF"
                  : "#FFFFFF"
                : ListStyles.color,
            }}
          >
            <div className="flex gap-2 md:gap-5 lg:gap-[32px] items-center">
              <div
                style={checkboxStyles(todo)}
                className="lg:w-[30px] w-[20px] h-[20px] lg:h-[30px] border border-[#B3B3B3] flex-shrink-0 rounded-lg flex items-center text-center justify-center"
                onClick={() => handleCheckboxClick(todo.id)}
              >
                {checkedItems.includes(todo.id) && <TiTick />}
              </div>

              <p className="text-base font-semibold leading-7 text-ellipsis">
                {todo.text}
              </p>
            </div>

            <div className="flex flex-shrink-0 items-center gap-4 lg:gap-[32px]">
              <div onClick={() => handleStarClick(todo.id)}>
                {starIcon(todo)}
              </div>
              <button
                // style={arrowsStyles}
                className="rounded-full bg-transparent m-auto p-2 w-[30px] h-[30px] border flex items-center text-center"
              >
                <RxCross2 className="text-4xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;

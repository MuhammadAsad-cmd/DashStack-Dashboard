"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiArchiveBox } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdAttachFile, MdDeleteOutline } from "react-icons/md";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import { FaAngleLeft, FaFileImage } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { AiFillAudio, AiOutlineAudio } from "react-icons/ai";
import { LuSend } from "react-icons/lu";

const Chat = () => {
  const currentTheme = useSelector(selectTheme);

  const tableIconStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#FAFBFD",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };

  const ListStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };
  const iconsStyles = {
    color: currentTheme === "dark" ? "#D9D9D9" : "#9D9D9D",
  };

  const OtherRespondStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#F5F5F5",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  return (
    <>
      <div style={ListStyles} className="w-full rounded-xl">
        <div className="flex md:flex-row flex-col gap-4 justify-between  leading-10 p-3">
          <div className="flex items-center space-x-4">
            <div
              style={tableIconStyles}
              className="w-[24px] h-[24px] border border-[#B3B3B3] rounded-lg flex items-center text-center justify-center"
            >
              <FaAngleLeft />
            </div>
            <p className="text-xl font-bold">Minerva Barnett</p>
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
        <hr className="bg-[#E0E0E0] h-[1px] w-full " />

        <div>
          <div className="flex flex-shrink-0 space-x-4 items-end px-3 lg:px-7">
            <div className="w-[40px] h-[40px] rounded-full bg-[#d8d8d8]"></div>
            <div
              style={OtherRespondStyles}
              className="w-full rounded-t-2xl p-6 mt-[40px]"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
              <div className="flex items-center text-end justify-end mt-5 space-x-4">
                <p className="text-sm  leading-4">6.30 pm</p>
                <HiDotsVertical />
              </div>
            </div>
          </div>

          <div className="flex flex-shrink-0 space-x-4 items-end text-end justify-end px-3 lg:px-7">
            <div className="w-full bg-[#4880FF] text-white rounded-t-2xl p-6 mt-[40px] text-start">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by
              injected humour
              <div className="flex items-center text-end justify-end mt-5 space-x-4">
                <p className="text-sm  leading-4">6.30 pm</p>
                <HiDotsVertical />
              </div>
            </div>
          </div>

          <div className="flex flex-shrink-0 space-x-4 items-end px-3 lg:px-7">
            <div className="w-[40px] h-[40px] rounded-full bg-[#d8d8d8]"></div>
            <div
              style={OtherRespondStyles}
              className="w-full rounded-t-2xl p-6 mt-[40px] text-start"
            >
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using  making it
              look like readable English. Many desktop publishing packages and
              web page editors now use Lorem Ipsum as their default.Contrary to
              popular belief Lorem Ipsum is not simply random text is the model
              text for your company
              <div className="flex items-center text-end justify-end mt-5 space-x-4">
                <p className="text-sm  leading-4">6.30 pm</p>
                <HiDotsVertical />
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-[#E0E0E0] h-[1px] w-full mt-[130px]" />

        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center space-x-6">
            <AiFillAudio style={iconsStyles} className="text-2xl" />
            <input
              type="text"
              id="large-input"
              className="block w-full p-4 bg-transparent outline-none"
              placeholder="Write message"
            />
          </div>

          <div className="flex items-center space-x-8">
            <MdAttachFile style={iconsStyles} className="text-2xl" />
            <FaFileImage style={iconsStyles} className="text-2xl" />
            <button className="flex rounded-lg space-x-2 items-center w-[96px] h-[36px] text-center justify-center bg-[#4880FF]">
              <p className="text-base leading-5 text-white">Send</p>
              <LuSend className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;

"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const TableTwo = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const headerStyles = {
    backgroundColor: currentTheme === "dark" ? "#313c4d" : "#FCFDFD",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const tableBodyStyles = {
    backgroundColor: currentTheme === "dark" ? "" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };
  const tableiconStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#FAFBFD",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  return (
    <>
      <div className="relative  overflow-x-auto w-full py-4">
        <table
          style={darkModeStyles}
          className="w-full h-full rounded-lg text-left"
        >
          <thead style={headerStyles} className="text-sm leading-5 rounded-lg">
            <tr className="h-[48px]">
              <th scope="col" className="px-4 py-3">
                Image
              </th>
              <th scope="col" className="px-4 py-3">
                Product Name
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Piece
              </th>
              <th scope="col" className="px-4 py-3">
                Available Color
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody style={tableBodyStyles} className="text-sm leading-5">
            <tr className=" py-3">
              <th
                scope="row"
                className="px-2 lg:px-6 py-4 flex flex-shrink-0 font-medium  whitespace-nowrap "
              >
                <Image
                  width={80}
                  height={60}
                  src="/images/tableimg1.png"
                  alt=""
                  className="w-[80px] h-[60px]  rounded-xl"
                />
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">Apple Watch Series 4</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                Digital Product
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">$690.00</td>
              <td className="px-6 py-4 text-[14px]  leading-5">63</td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                <div className="flex space-x-4">
                  <p className="w-5 h-5 bg-black rounded-full"></p>
                  <p className="w-5 h-5 bg-[#9F9F9F] rounded-full"></p>
                  <p className="w-5 h-5 bg-[#E98F8F] rounded-full"></p>
                  <p className="w-5 h-5 bg-[#12163C] rounded-full"></p>
                </div>
              </td>
              <td className="px-3 py-4 ">
                <p className=" text-xs">
                  <div
                    style={tableiconStyles}
                    className="flex items-center px-4 border text-center justify-between rounded-xl
                    w-24 h-8"
                  >
                    <FaRegEdit className=" text-xl" />
                    <div className="w-[1px] h-8 bg-[#979797]"></div>
                    <RiDeleteBin6Line className="text-xl text-[#EF3826]" />
                  </div>
                </p>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-2 lg:px-6 py-4 font-medium  whitespace-nowrap "
              >
                <Image
                  width={80}
                  height={60}
                  src="/images/tableimg2.png"
                  alt=""
                  className="w-[80px] h-[60px] rounded-xl"
                />
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">Microsoft Headsquare</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                Digital Product
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">$690.00</td>
              <td className="px-6 py-4 text-[14px]  leading-5">13</td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                <div className="flex space-x-4">
                  <p className="w-5 h-5 bg-black rounded-full"></p>
                  <p className="w-5 h-5 bg-[#9F9F9F] rounded-full"></p>
                  <p className="w-5 h-5 bg-[#E98F8F] rounded-full"></p>
                  <p className="w-5 h-5 bg-[#E9C157] rounded-full"></p>
                </div>
              </td>
              <td className="px-3 py-4 ">
                <p className=" text-xs">
                  <div
                    style={tableiconStyles}
                    className="flex items-center px-4 border text-center justify-between rounded-xl
                    w-24 h-8"
                  >
                    <FaRegEdit className=" text-xl" />
                    <div className="w-[1px] h-8 bg-[#979797]"></div>
                    <RiDeleteBin6Line className="text-xl text-[#EF3826]" />
                  </div>
                </p>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-2 lg:px-6 py-4 font-medium  whitespace-nowrap "
              >
                <Image
                  width={80}
                  height={60}
                  src="/images/tableimg3.png"
                  alt=""
                  className="w-[80px] h-[60px] rounded-xl"
                />
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">Women’s Dress</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">Fashion</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$690.00</td>
              <td className="px-6 py-4 text-[14px]  leading-5">635</td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                <div className="flex space-x-4">
                  <p className="w-5 h-5 bg-black rounded-full"></p>
                  <p className="w-5 h-5 bg-[#9F9F9F] rounded-full"></p>
                  <p className="w-5 h-5 bg-[#E98F8F] rounded-full"></p>
                </div>
              </td>
              <td className="px-3 py-4 ">
                <p className=" text-xs">
                  <div
                    style={tableiconStyles}
                    className="flex items-center px-4 text-center justify-between rounded-xl border
                    w-24 h-8"
                  >
                    <FaRegEdit className=" text-xl" />
                    <div className="w-[1px] h-8 bg-[#979797]"></div>
                    <RiDeleteBin6Line className="text-xl text-[#EF3826]" />
                  </div>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableTwo;

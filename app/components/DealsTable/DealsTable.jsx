'use client'
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import AppleWatch from "../../../public/images/AppleWatch.png"

const DealsTable = () => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  const headerStyles = {
    backgroundColor: currentTheme === "dark" ? "#313c4d" : "#f1f4f9",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };
  return (
    <>
      <div style={darkModeStyles} className="relative overflow-x-auto py-4">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead style={headerStyles} className="text-sm   rounded-xl leading-5">
            <tr className="h-[48px]">
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Date - Time
              </th>
              <th scope="col" className="px-6 py-3">
                Piece
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <Image
                    src={AppleWatch}
                    alt=""
                    className="w-[36px] h-[36px] rounded-full"
                    width={36}
                    height={36}
                  />
                  <p className="text-[14px]  leading-5">
                    Apple Watch
                  </p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                423
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                $34,295
              </td>
              <td className="px-3 py-4 ">
                <button className="w-24 h-[27px] m-auto rounded-full text-[14px] text-[#FFFFFF] bg-[#00B69B] leading-5">
                  Delivered
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DealsTable;

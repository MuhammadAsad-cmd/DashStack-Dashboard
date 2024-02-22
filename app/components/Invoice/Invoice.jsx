"use client";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React from "react";
import { IoPrintSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { useSelector } from "react-redux";

const Invoice = () => {
  const currentTheme = useSelector(selectTheme);

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const ListStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const TableheadStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#F1F4F9",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const TablebodyStyles = {
    borderBottom:
      currentTheme === "dark" ? "1px solid #E0E0E0" : "1px solid #E0E0E0",
  };

  return (
    <>
      <div className="p-3 w-full">
        <h1 style={favStyles} className="font-bold text-[32px] leading-10">
          Invoice
        </h1>
      </div>
      <div
        style={ListStyles}
        className="rounded-xl w-full border"
      >
        <div className="flex flex-col md:flex-row items-center justify-between px-5 lg:px-[155px] mt-12">
          <div className="mb-6 md:mb-0 md:mr-6">
            <p className="text-base leading-5 ">Invoice From :</p>
            <p className="text-base leading-5 mt-3 font-semibold">
              Virginia Walker
            </p>
            <p className="text-sm mt-1">9694 Krajcik Locks Suite 635</p>
          </div>
          <div className="mb-6 md:mb-0 md:mr-6">
            <p className="text-base leading-5 ">Invoice To :</p>
            <p className="text-base leading-5 mt-3">
              Austin Miller
            </p>
            <p className="text-sm mt-1">Brookview</p>
          </div>
          <div>
            <p className="text-base leading-5 ">Invoice Date : 12 Nov 2019</p>
            <p className="text-base leading-5 mt-2.5">Due Date : 25 Dec 2019</p>
          </div>
        </div>

        <div className="relative overflow-x-auto mt-14 px-8">
          <table className="w-full h-full text-left rtl:text-right">
            <thead
              style={TableheadStyles}
              className="h-12 text-center rounded-lg text-sm  leading-5"
            >
              <tr>
                <th scope="col" className="px-6 py-3">
                  Serial No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Base Cost
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Cost
                </th>
              </tr>
            </thead>
            <tbody
              style={TablebodyStyles}
              className="text-sm leading-5 text-center"
            >
              <tr className=" border-b ">
                <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                  1
                </th>
                <td className="px-6 py-4">Children Toy</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">$20</td>
                <td className="px-6 py-4">$80</td>
              </tr>
              <tr className=" border-b ">
                <th scope="row" className="px-6 py-4  whitespace-nowrap">
                  1
                </th>
                <td className="px-6 py-4">Makeup</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">$50</td>
                <td className="px-6 py-4">$100</td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="px-6 py-4  whitespace-nowrap">
                  3
                </th>
                <td className="px-6 py-4">Asus Laptop</td>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">$100</td>
                <td className="px-6 py-4">$500</td>
              </tr>
              <tr className="border-b">
                <th scope="row" className="px-6 py-4  whitespace-nowrap">
                  4
                </th>
                <td className="px-6 py-4">Iphone X</td>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">$1000</td>
                <td className="px-6 py-4">$4000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center space-x-3 text-base font-semibold px-[140px] text-end justify-end mt-5">
          <div className="flex space-x-3 items-center">
            <p>Total </p>
            <p>=</p>
          </div>
          <p>$4680</p>
        </div>

        <div className="flex items-center text-end justify-end space-x-4 my-[91px] px-10">
          <div className="border bg-[#FAFBFD] rounded-xl w-[50px] h-[54px] flex items-center text-center justify-center">
            <IoPrintSharp className="text-xl  text-[#202224]" />
          </div>
          <button className="flex rounded-xl space-x-9 items-center w-[173px] h-[54px] text-center justify-center bg-[#4880FF]">
            <p className="text-base leading-5 text-white">Send</p>
            <div className="bg-[#6E9AFF] rounded-xl w-12 h-[38px] flex items-center text-center justify-center">
              <LuSend className="text-xl" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;

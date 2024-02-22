"use client";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Filters from "./Filters";

const Orderlist = () => {
  const currentTheme = useSelector(selectTheme);

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

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

  const completedStyles = {
    backgroundColor: currentTheme === "dark" ? "#00B69B" : "#ccf0eb",
    color: currentTheme === "dark" ? "#FFFFFF" : "#00B69B",
  };
  const ProcessingStyles = {
    backgroundColor: currentTheme === "dark" ? "#6226EF" : "#e0d4fc",
    color: currentTheme === "dark" ? "#FFFFFF" : "#6226EF",
  };
  const RejectedStyles = {
    backgroundColor: currentTheme === "dark" ? "#EF3826" : "#fcd7d4",
    color: currentTheme === "dark" ? "#FFFFFF" : "#EF3826",
  };
  return (
    <>
      <div className="p-3">
        <h1 style={favStyles} className="font-bold text-[32px] leading-10">
          Order Lists
        </h1>
      </div>
      <div className="lg:block hidden">
        <Filters />
      </div>
      <div className="relative w-full overflow-x-auto py-4">
        <table
          style={darkModeStyles}
          className="w-full h-full rounded-lg text-left"
        >
          <thead style={headerStyles} className="text-sm leading-5 rounded-lg">
            <tr className="h-[48px]">
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                ADDRESS
              </th>
              <th scope="col" className="px-6 py-3">
                DATE
              </th>
              <th scope="col" className="px-6 py-3">
                TYPE
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody style={tableBodyStyles} className="text-sm leading-5">
            <tr className=" py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">00001</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">14 Feb 2019</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$34,295</td>
              <td className="px-3 py-4 ">
                <button
                  style={completedStyles}
                  className="w-24 h-8 flex items-center justify-center m-auto rounded-lg leading-5"
                >
                  <p className=" text-xs"> Completed</p>
                </button>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">00001</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">14 Feb 2019</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$34,295</td>
              <td className="px-3 py-4 ">
                <button
                  style={ProcessingStyles}
                  className="w-24 h-8 flex items-center justify-center m-auto rounded-lg leading-5"
                >
                  <p className="text-xs"> Processing</p>
                </button>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">00001</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">14 Feb 2019</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$34,295</td>
              <td className="px-3 py-4 ">
                <button
                  style={RejectedStyles}
                  className="w-24 h-8 flex items-center justify-center m-auto rounded-lg leading-5"
                >
                  <p className="text-xs"> Rejected</p>
                </button>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">00001</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">14 Feb 2019</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$34,295</td>
              <td className="px-3 py-4 ">
                <button
                  style={completedStyles}
                  className="w-24 h-8 flex items-center justify-center m-auto rounded-lg  leading-5"
                >
                  <p className=" text-xs"> Completed</p>
                </button>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">00001</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">14 Feb 2019</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$34,295</td>
              <td className="px-3 py-4 ">
                <button
                  style={RejectedStyles}
                  className="w-24 h-8 flex items-center justify-center m-auto rounded-lg  leading-5"
                >
                  <p className="text-xs"> Rejected</p>
                </button>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">00001</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">14 Feb 2019</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$34,295</td>
              <td className="px-3 py-4 ">
                <button
                  style={completedStyles}
                  className="w-24 h-8 flex items-center justify-center m-auto rounded-lg leading-5"
                >
                  <p className=" text-xs"> Completed</p>
                </button>
              </td>
            </tr>
            <tr className=" py-3">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                <div className="flex items-center gap-[16px]">
                  <p className="text-[14px]  leading-5">00001</p>
                </div>
              </th>
              <td className="px-6 py-4 text-[14px]  leading-5">
                6096 Marjolaine Landing
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">
                12.09.2019 - 12.53 PM
              </td>
              <td className="px-6 py-4 text-[14px]  leading-5">14 Feb 2019</td>
              <td className="px-6 py-4 text-[14px]  leading-5">$34,295</td>
              <td className="px-3 py-4 ">
                <button
                  style={ProcessingStyles}
                  className="w-24 h-8 flex items-center justify-center m-auto rounded-lg   leading-5"
                >
                  <p className="text-xs"> Processing</p>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orderlist;

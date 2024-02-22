"use client";

import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Calenders = () => {
  const currentTheme = useSelector(selectTheme);

  const DarkStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };

  const tableiconStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#FAFBFD",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    border: currentTheme === "dark" ? "none" : "1px solid #D5D5D5",
  };
  const CalenderStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    borderOpacity:
      currentTheme === "dark" ? "border-opacity-10" : "border-opacity-50",
  };
  const CalenderHeaderStyles = {
    backgroundColor: currentTheme === "dark" ? "#323D4E" : "#F1F4F9",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
  };

  return (
    <>
      <div
        className={`lg:flex w-full rounded-xl lg:h-full lg:flex-col ${
          currentTheme === "dark" ? "bg-gray-900" : "bg-white"
        } ${currentTheme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        <header>
          <div className="flex justify-between items-center mb-4 px-6 my-8">
            <div>
              <p className="text-sm leading-5 opacity-70">Today</p>
            </div>
            <div className="flex ">
              <button className="text-lg font-bold w-[22px] h-[22px] flex items-center justify-center text-center rounded-md">
                <FaChevronLeft />
              </button>
              <h2 className="text-2xl leading-5 font-bold">Feburary 2024</h2>
              <button className="text-lg font-bold  w-[22px] h-[22px] flex items-center justify-center text-center rounded-md">
                <FaChevronRight />
              </button>
            </div>
            <div
              style={tableiconStyles}
              className="flex items-center px-4 border text-center justify-between rounded-xl
              w-[188px] h-10"
            >
              <p>Day</p>
              <div className="w-[1px] h-10 bg-[#979797] opacity-35"></div>
              <p>Week</p>
              <div className="w-[1px] h-10 bg-[#979797] opacity-35"></div>
              <p>Month</p>
            </div>
          </div>
        </header>
        <div className="lg:flex px-6 lg:flex-auto lg:flex-col py-4">
          <div
            style={CalenderHeaderStyles}
            className={`grid grid-cols-7 text-sm rounded-t-xl text-end font-semibold leading-6 ${currentTheme === 'dark' ? 'text-white bg-gray-900' : 'text-gray-700 bg-gray-100'}`}>
            <div class="flex justify-center  py-2">
              <span>M</span>
              <span class="sr-only sm:not-sr-only">on</span>
            </div>
            <div class="flex justify-center  py-2">
              <span>T</span>
              <span class="sr-only sm:not-sr-only">ue</span>
            </div>
            <div class="flex justify-center  py-2">
              <span>W</span>
              <span class="sr-only sm:not-sr-only">ed</span>
            </div>
            <div class="flex justify-center  py-2">
              <span>T</span>
              <span class="sr-only sm:not-sr-only">hu</span>
            </div>
            <div class="flex justify-center  py-2">
              <span>F</span>
              <span class="sr-only sm:not-sr-only">ri</span>
            </div>
            <div class="flex justify-center  py-2">
              <span>S</span>
              <span class="sr-only sm:not-sr-only">at</span>
            </div>
            <div class="flex justify-center  py-2">
              <span>S</span>
              <span class="sr-only sm:not-sr-only">un</span>
            </div>
          </div>
            
            <div style={CalenderStyles} className="flex text-xs leading-6 lg:flex-auto">
            <div className="w-full grid grid-cols-7">
              <div class="relative  px-3 py-2 border-b h-[121px] border-r border-l ">
                <time datetime="2021-12-27">27</time>
              </div>
              <div class="relative px-3 py-2 border-b border-r h-[121px]">
                <time datetime="2021-12-28">28</time>
              </div>

              <div class="relative  px-3 py-2 border-b border-r h-[121px]">
                <time datetime="2021-12-29">29</time>
              </div>

              <div class="relative  px-3 py-2 border-b border-r  h-[121px]">
                <time datetime="2021-12-30">30</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  h-[121px]">
                <time datetime="2021-12-31">31</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r h-[121px] ">
                <time datetime="2022-01-01">1</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  h-[121px]">
                <time datetime="2022-01-01">2</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r   border-l h-[121px]">
                <time datetime="2022-01-03">3</time>
              </div>
              <div class="relative px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-04">4</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-05">5</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-06">6</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-07">7</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-08">8</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-09">9</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] border-l">
                <time datetime="2022-01-10">10</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-11">11</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-13">12</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-13">13</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-14">14</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-15">15</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-16">16</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] border-l h-[121px]">
                <time datetime="2022-01-17">17</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-18">18</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-19">19</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-20">20</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-21">21</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-22">22</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-23">23</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] border-l h-[121px]">
                <time datetime="2022-01-24">24</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-25">25</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-26">26</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-27">27</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-28">28</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-29">29</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-01-30">30</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] border-l h-[121px]">
                <time datetime="2022-01-31">31</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-02-01">1</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-02-02">2</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-02-03">3</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-02-04">4</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-02-05">5</time>
              </div>
              <div class="relative  px-3 py-2 border-b border-r  border-[#E0E0E0] h-[121px]">
                <time datetime="2022-02-06">6</time>
              </div>
            </div>
            <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2021-12-27" class="ml-auto">
                  27
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2021-12-28" class="ml-auto">
                  28
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2021-12-29" class="ml-auto">
                  29
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2021-12-30" class="ml-auto">
                  30
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2021-12-31" class="ml-auto">
                  31
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-01" class="ml-auto">
                  1
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-02" class="ml-auto">
                  2
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-03" class="ml-auto">
                  3
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-04" class="ml-auto">
                  4
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-05" class="ml-auto">
                  5
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-06" class="ml-auto">
                  6
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-07" class="ml-auto">
                  7
                </time>
                <span class="sr-only">1 event</span>
                <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                  <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                </span>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-08" class="ml-auto">
                  8
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-09" class="ml-auto">
                  9
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-10" class="ml-auto">
                  10
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-11" class="ml-auto">
                  11
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-12" class="ml-auto">
                  12
                </time>
                <span class="sr-only">1 event</span>
                <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                  <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                </span>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-13" class="ml-auto">
                  13
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-14" class="ml-auto">
                  14
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-15" class="ml-auto">
                  15
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-16" class="ml-auto">
                  16
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-17" class="ml-auto">
                  17
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-18" class="ml-auto">
                  18
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-19" class="ml-auto">
                  19
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-20" class="ml-auto">
                  20
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-21" class="ml-auto">
                  21
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 font-semibold text-white hover:bg-gray-100 focus:z-10"
              >
                <time
                  datetime="2022-01-22"
                  class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900"
                >
                  22
                </time>
                <span class="sr-only">2 events</span>
                <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                  <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                  <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                </span>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-23" class="ml-auto">
                  23
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-24" class="ml-auto">
                  24
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-25" class="ml-auto">
                  25
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-26" class="ml-auto">
                  26
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-27" class="ml-auto">
                  27
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-28" class="ml-auto">
                  28
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-29" class="ml-auto">
                  29
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-30" class="ml-auto">
                  30
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-01-31" class="ml-auto">
                  31
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-02-01" class="ml-auto">
                  1
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-02-02" class="ml-auto">
                  2
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-02-03" class="ml-auto">
                  3
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-02-04" class="ml-auto">
                  4
                </time>
                <span class="sr-only">1 event</span>
                <span class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                  <span class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                </span>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-02-05" class="ml-auto">
                  5
                </time>
              </button>
              <button
                type="button"
                class="flex h-14 flex-col  px-3 py-2  hover:bg-gray-100 focus:z-10"
              >
                <time datetime="2022-02-06" class="ml-auto">
                  6
                </time>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calenders;

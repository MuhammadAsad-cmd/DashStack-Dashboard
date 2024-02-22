"use client";
import { products } from "@/app/Data";
import React, { useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaRegHeart } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const Product = () => {
  const currentTheme = useSelector(selectTheme);
  const swiperRef = useRef(null);

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };
  const arrowsStyles = {
    backgroundColor: currentTheme === "dark" ? "#3B465A" : "#E2EAF8",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const textStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const buttonStyles = {
    backgroundColor: currentTheme === "dark" ? "#4B5668" : "#E2EAF8",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };
  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.init();
    }
  }, []);

  return (
    <>
      <div className="p-3">
        <h1 style={favStyles} className="font-bold text-[32px] leading-10">
          Product
        </h1>
      </div>
      <div className="lg:block hidden">
        <div className="relative">
          <div className="w-full h-[346px] bg-[#4880ff] rounded-2xl"></div>
          <div className="absolute inset-0 flex items-center">
            <button
              style={arrowsStyles}
              className="rounded-full flex-shrink-0 ml-[14px] p-3 z-20 w-[44px] h-[44px] flex items-center text-center text-[#626262]"
            >
              <FaAngleLeft />
            </button>
            <Swiper innerref={swiperRef} slidesPerView={1} spaceBetween={10}>
              <SwiperSlide>
                <div className="mx-[20px] lg:mx-[100px]">
                  <p className="text-[#FFFFFF] text-base my-2">
                    September 12-22
                  </p>
                  <div className=" my-2">
                    <p className="text-xl lg:text-[37px] leading-10 text-[#FFFFFF] font-bold">
                      Enjoy free home delivery in this summer
                    </p>
                  </div>
                  <p className="text-base my-2 leading-7 text-[#FFFFFF] ">
                    Designer Dresses - Pick from trendy Designer Dress.
                  </p>
                  <button className="w-[156px] h-[44px] mt-8 rounded-xl text-white bg-[#FF8743]">
                    Get Started
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mx-[100px]">
                  <p className="text-[#FFFFFF] text-base my-2">
                    September 12-22
                  </p>
                  <div className=" my-2">
                    <p className="text-[37px] leading-10 text-[#FFFFFF] font-bold">
                      Enjoy free home delivery in this summer
                    </p>
                  </div>
                  <p className="text-base my-2 leading-7 text-[#FFFFFF] ">
                    Designer Dresses - Pick from trendy Designer Dress.
                  </p>
                  <button className="w-[156px] h-[44px] mt-8 rounded-xl text-white bg-[#FF8743]">
                    Get Started
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mx-[100px]">
                  <p className="text-[#FFFFFF] text-base my-2">
                    September 12-22
                  </p>
                  <div className="my-2">
                    <p className="text-[37px] leading-10 text-[#FFFFFF] font-bold">
                      Enjoy free home delivery in this summer
                    </p>
                  </div>
                  <p className="text-base my-2 leading-7 text-[#FFFFFF] ">
                    Designer Dresses - Pick from trendy Designer Dress.
                  </p>
                  <button className="w-[156px] h-[44px] mt-8 rounded-xl text-white bg-[#FF8743]">
                    Get Started
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>

            <button
              style={arrowsStyles}
              className="rounded-full flex-shrink-0 ml-auto mr-[14px] z-20 p-3 w-[44px] h-[44px] flex items-center text-center text-[#626262]"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full mt-8">
        {products.map((item) => (
          <div key={item.id} className="rounded-xl" style={textStyles}>
            <div className="relative">
              <Swiper innerref={swiperRef} slidesPerView={1} spaceBetween={10}>
                <SwiperSlide>
                  {" "}
                  <img
                    src={item.imageSrc}
                    alt=""
                    className="w-full h-full rounded-t-xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src={item.Image2}
                    alt=""
                    className="w-full h-full rounded-t-xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src={item.Image2}
                    alt=""
                    className="w-full h-full rounded-t-xl"
                  />
                </SwiperSlide>
              </Swiper>

              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  style={arrowsStyles}
                  onClick={handlePrevSlide}
                  className="rounded-full ml-[14px] p-3 z-20 w-[44px] h-[44px] flex items-center text-center text-[#626262]"
                >
                  <FaAngleLeft />
                </button>
                <button
                  style={arrowsStyles}
                  onClick={handleNextSlide}
                  className="rounded-full mr-[14px] z-20 p-3 w-[44px] h-[44px] flex items-center text-center text-[#626262]"
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>
            <div className="p-2 mx-4 mt-4 mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[18px] font-bold leading-5">
                    {item.title}
                  </p>
                  <p className="text-base font-bold leading-5 text-[#4880FF] mt-2">
                    ${item.Price}
                  </p>
                </div>
                <div className="">
                  <p
                    className="bg-[#F9F9F9] flex items-center justify-center text-center
                      rounded-full  p-3 w-[44px] h-[44px] text-[#F93C65]"
                  >
                    <FaRegHeart className="" />
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 text-sm font-semibold mt-3">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <IoIosStarOutline key={index} />
                ))}
                (131)
              </div>

              <p
                style={buttonStyles}
                className="w-[126px] h-[38px] mt-5 text-sm font-bold leading-7 flex items-center text-center justify-center rounded-2xl"
              >
                Edit Product
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;

"use client";
import { products } from "@/app/Data";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React, { useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaRegHeart } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Favourites = () => {
  const currentTheme = useSelector(selectTheme);
  const swiperRef = useRef(null);

  const textStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };
  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };
  const buttonStyles = {
    backgroundColor: currentTheme === "dark" ? "#4B5668" : "#E2EAF8",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };
  const arrowsStyles = {
    backgroundColor: currentTheme === "dark" ? "#3B465A" : "#E2EAF8",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const handleNextSlide = () => {
    console.log("Next button clicked");
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    console.log("Prev button clicked");
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
      <div className="w-full">
        <h1 style={favStyles} className="font-bold text-3xl leading-10 p-3">
          Favourites
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 w-full">
          {products.map((item) => (
            <div key={item.id} className="rounded-xl w-full" style={textStyles}>
              <div className="relative">
                <Swiper
                  innerref={swiperRef}
                  slidesPerView={1}
                  spaceBetween={10}
                >
                  <SwiperSlide>
                    <img
                      src={item.imageSrc}
                      alt=""
                      className="w-full h-full rounded-t-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={item.Image2}
                      alt=""
                      className="w-full h-full rounded-t-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
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
                    <p className="text-lg font-bold leading-5">{item.title}</p>
                    <p className="text-base font-bold leading-5 text-[#4880FF] mt-2">
                      ${item.Price}
                    </p>
                  </div>
                  <div className="">
                    <p className="bg-[#F9F9F9] flex items-center justify-center text-center rounded-full p-3 w-[44px] h-[44px] text-[#F93C65]">
                      <FaRegHeart />
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
      </div>
    </>
  );
};

export default Favourites;

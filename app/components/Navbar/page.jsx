"use client";
import React, { useEffect, useState } from "react";
import { MdMenu, MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "@/app/redux/slices/darkModeSlice ";
import LanguageDropdown from "@/app/components/LanguageDropdown/LanguageDropdown";
import AdminDropdown from "@/app/components/AdminDropdown/page";
import SelectedItem from "../Sidebar/SelectedItem";
import Notification from "../NotificationDropdown/Notification";
import { RiMenu4Fill } from "react-icons/ri";
import SelectedItemTwo from "../Sidebar2/SelectedItem2";

const Navbar = ({
  selectedItem,
  handleSidebarItemClick,
  sidebarWidth,
  toggleSidebar,
  showLabels,
  selectedItemTwo,
  toggleSidebarTwo,
  handleSidebar2ItemClick,
}) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    searchBarInputBackground: currentTheme === "dark" ? "#323D4E" : "#F5F6FA",
  };

  const handleItemClick = (item) => {
    if (typeof handleSidebarItemClick === "function") {
      handleSidebarItemClick(item);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <div
      className={`w-full ${sidebarWidth === "240px" ? "overflow-hidden" : ""}`}
    >
      <header
        style={darkModeStyles}
        className="flex items-center px-4 lg:px-6 h-[70px] justify-between"
      >
        <div className="flex items-center gap-4">
          <div>
            <MdMenu
              onClick={toggleSidebar}
              className="w-[24px] h-[25px] leading-5 cursor-pointer md:block hidden"
            />
            <RiMenu4Fill onClick={toggleSidebarTwo}
              className="w-[24px] h-[25px] leading-5 cursor-pointer md:hidden block"
            />
          </div>
          <form className="lg:block hidden">
            <div className="relative">
              <div className="absolute inset-y-0 p-5 flex items-center pointer-events-none">
                <svg
                  className="w-[16px] h-[16px]"
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
                className="block w-full h-[38px] p-4 ps-12 text-sm outline-none  bg-transparent "
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-5">
          <Notification />
          <LanguageDropdown />
          <AdminDropdown />
          <button onClick={handleToggleTheme}>
            <MdOutlineDarkMode />
          </button>
        </div>
      </header>
      <main className="w-full mt-4 p-3">
        <div>
          {isSmallScreen ? (
            <SelectedItemTwo
              selectedItemTwo={selectedItemTwo}
              handleSidebar2ItemClick={handleSidebar2ItemClick}
            />
          ) : (
            <SelectedItem
              selectedItem={selectedItem}
              onItemClick={handleItemClick}
              showLabels={showLabels}
              sidebarWidth={sidebarWidth}
              isSmall={sidebarWidth === "86px"}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Navbar;

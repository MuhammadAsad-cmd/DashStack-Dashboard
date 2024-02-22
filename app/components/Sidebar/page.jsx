'use client'
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import SideBarItem from "./SidebarItem";
import Image from "next/image";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const Sidebar = ({ handleSidebarItemClick, sidebarWidth, showLabels }) => {
  const currentTheme = useSelector(selectTheme);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const shouldShowLabels = sidebarWidth !== "86px" && showLabels;

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    activeItemBackground: currentTheme === "dark" ? "#4880FF" : "",
  };

  const logoSrc =
    currentTheme === "dark"
      ? "/images/Logo  (Dark).svg"
      : "/images/LightLogo.svg";

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
    <div className="flex bg-white" style={darkModeStyles}>
      <div className="flex flex-col" style={{ width: sidebarWidth }}>
        <div className="flex flex-col pt-4 items-center w-[240px] text-center justify-center">
          {shouldShowLabels && (
            <div className="flex items-center">
              <Image
                src={logoSrc}
                className="w-[127px] h-[27px]"
                width={127}
                height={27}
                alt=""
              />
            </div>
          )}
          <div className="flex flex-col mt-6 space-y-4">
            <nav className="space-y-2">
              <SideBarItem
                onItemClick={handleSidebarItemClick}
                showLabels={showLabels}
                sidebarWidth={sidebarWidth}
                isSmall={sidebarWidth === "86px"}
                isSmallScreen={isSmallScreen}
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

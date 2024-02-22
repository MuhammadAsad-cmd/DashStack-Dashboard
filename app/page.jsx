'use client'
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar/page";
import Navbar from "./components/Navbar/page";
import { selectTheme } from "./redux/slices/darkModeSlice ";
import Sidebartwo from "./components/Sidebar2/page";
import Memo from "./components/Memo";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [selectedItemTwo, setSelectedItemTwo] = useState("Dashboard");
  const currentTheme = useSelector(selectTheme);
  const [isSmallScreen, setIsSmallScreen] = useState(false); 
  const [sidebar2Open, setSidebar2Open] = useState(false); 

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#1B2431" : "",
  };

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleSidebar2ItemClick = (item) => {
    setSelectedItemTwo(item);
  };

  const [showLabels, setShowLabels] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState("240px");

  const toggleLabels = () => {
    setShowLabels(!showLabels);
  };

  const toggleSidebar = () => {
    setSidebarWidth((prevWidth) => (prevWidth === "240px" ? "86px" : "240px"));
  };

  const toggleSidebarTwo = () => {
    setSidebar2Open(!sidebar2Open); 
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex" style={darkModeStyles}>
        {!isSmallScreen && (
          <Sidebar
            handleSidebarItemClick={handleSidebarItemClick}
            sidebarWidth={sidebarWidth}
            toggleLabels={toggleLabels}
            showLabels={showLabels}
            toggleSidebar={toggleSidebar}
          />
        )}
        {isSmallScreen && (
          <Sidebartwo
            handleSidebar2ItemClick={handleSidebar2ItemClick}
            sidebar2Open={sidebar2Open} 
          />
        )}
        <Navbar
          selectedItemTwo={selectedItemTwo}
          selectedItem={selectedItem}
          toggleSidebar={toggleSidebar}
          toggleSidebarTwo={toggleSidebarTwo}
          sidebar2Open={sidebar2Open}
        />
      </div>
      <Memo/>
    </>
  );
};

export default Home;

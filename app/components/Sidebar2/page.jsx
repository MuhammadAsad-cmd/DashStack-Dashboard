"use client";
import { useSelector } from "react-redux";
import SideBarItem from "./SidebarItem2";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const Sidebartwo = ({ handleSidebar2ItemClick,sidebar2Open  }) => {
  const currentTheme = useSelector(selectTheme);

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "",
    color: currentTheme === "dark" ? "#FFFFFF" : "",
    activeItemBackground: currentTheme === "dark" ? "#4880FF" : "",
  };

  
  return (
    <div className={`flex bg-white ${sidebar2Open ? "block" : "hidden"}`} style={darkModeStyles}>
      <div className="flex flex-col">
        <div className="flex flex-col pt-4 items-center w-[86px] text-center justify-center">
          <div className="flex flex-col mt-6 space-y-4">
            <nav className="space-y-2">
            <SideBarItem onItemClicktwo={handleSidebar2ItemClick} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebartwo;

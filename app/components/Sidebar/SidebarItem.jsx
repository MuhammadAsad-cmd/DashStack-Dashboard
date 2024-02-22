"use client";
import React, { useState } from "react";
import { BiMoney } from "react-icons/bi";
import { FaDownload, FaRegHeart } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import {
  IoPersonSharp,
  IoSettingsOutline,
} from "react-icons/io5";
import { LiaListAltSolid, LiaTableSolid } from "react-icons/lia";
import { LuMessagesSquare, LuTable } from "react-icons/lu";
import { MdOutlineTableRows } from "react-icons/md";
import { RiDashboard3Line, RiShutDownLine, RiTodoLine } from "react-icons/ri";
import { SlCalender, SlChart } from "react-icons/sl";

const SideBarItem = ({ onItemClick,showLabels ,isSmall,isSmallScreen  }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);

    if (typeof onItemClick === "function") {
      onItemClick(item);
    }
  };

  return (
    <div className="flex flex-row py-10">
      <ul className="flex flex-col gap-2">
      <SideItem
          icon={<RiDashboard3Line />}
          label="Dashboard"
          onClick={() => handleItemClick("Dashboard")}
          isActive={activeItem === "Dashboard"}
          showLabel={showLabels && !isSmall }
          isSmall={isSmall} 
        />
        <SideItem
          icon={<LuTable />}
          label="Products"
          onClick={() => handleItemClick("Products")}
          isActive={activeItem === "Products"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<FaRegHeart />}
          label="Favourites"
          onClick={() => handleItemClick("Favourites")}
          isActive={activeItem === "Favourites"}
          showLabel={showLabels && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<LuMessagesSquare />}
          label="Inbox"
          onClick={() => handleItemClick("Inbox")}
          isActive={activeItem === "Inbox"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<LiaListAltSolid />}
          label="Order Lists"
          onClick={() => handleItemClick("Order Lists")}
          isActive={activeItem === "Order Lists"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<MdOutlineTableRows />}
          label="Product Stock"
          onClick={() => handleItemClick("Product Stock")}
          isActive={activeItem === "Product Stock"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<FiGift />}
          label="Pricing"
          onClick={() => handleItemClick("Pricing")}
          isActive={activeItem === "Pricing"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<SlCalender />}
          label="Calender"
          onClick={() => handleItemClick("Calender")}
          isActive={activeItem === "Calender"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<RiTodoLine />}
          label="Todo"
          onClick={() => handleItemClick("Todo")}
          isActive={activeItem === "Todo"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall}
        />
        <SideItem
          icon={<IoMdContacts />}
          label="Contact"
          onClick={() => handleItemClick("Contact")}
          isActive={activeItem === "Contact"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall} 
        />
        <SideItem
          icon={<BiMoney />}
          label="Invoice"
          onClick={() => handleItemClick("Invoice")}
          isActive={activeItem === "Invoice"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall} 
        />
        <SideItem
          icon={<SlChart />}
          label="UI Elements"
          onClick={() => handleItemClick("UI Elements")}
          isActive={activeItem === "UI Elements"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall} 
        />
        <SideItem
          icon={<IoPersonSharp />}
          label="Team"
          onClick={() => handleItemClick("Team")}
          isActive={activeItem === "Team"}
          showLabel={showLabels && !isSmall }
          isSmall={isSmall} 
        />
        <SideItem
          icon={<LiaTableSolid />}
          label="Table"
          onClick={() => handleItemClick("Table")}
          isActive={activeItem === "Table"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall} 
        />
        <SideItem
          icon={<IoSettingsOutline />}
          label="Setting"
          onClick={() => handleItemClick("Setting")}
          isActive={activeItem === "Setting"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall} 
        />
        <SideItem
          icon={<RiShutDownLine />}
          label="Logout"
          onClick={() => handleItemClick("Logout")}
          isActive={activeItem === "Logout"}
          showLabel={showLabels  && !isSmall }
          isSmall={isSmall} 
        />
      </ul>
    </div>
  );
};

const SideItem = ({ icon, label, onClick, isActive, showLabel, isSmall }) => {
  return (
    <div className="flex gap-x-[14px] cursor-pointer">
      <div
        className={`flex items-center gap-3 pl-4 w-[192px] h-[50px] rounded-lg ${
          isActive ? (isSmall ? "text-[#4880FF]" : "bg-[#4880FF] text-white") : ""
        }`}
        onClick={() => onClick(label)}
      >
        <div className="w-[22px] text-[22px] h-[25px]">{icon}</div>
        {showLabel && <span className="text-sm leading-5 tracking-wide">{label}</span>}
        {isActive && (
          <div className="bg-[#4880FF] w-[7px] h-[50px] rounded-r-md absolute left-0"></div>
        )}
      </div>
    </div>
  );
};

export default SideBarItem;

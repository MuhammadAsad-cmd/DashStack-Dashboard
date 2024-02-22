"use client";
import React, { useState } from "react";
import { BiMoney } from "react-icons/bi";
import { FaDownload, FaRegHeart } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { IoPersonSharp, IoSettingsOutline } from "react-icons/io5";
import { LiaListAltSolid, LiaTableSolid } from "react-icons/lia";
import { LuMessagesSquare, LuTable } from "react-icons/lu";
import { MdOutlineTableRows } from "react-icons/md";
import {
  RiDashboard3Line,
  RiShutDownLine,
  RiTodoLine,
} from "react-icons/ri";
import { SlCalender, SlChart } from "react-icons/sl";

const SideBarItemTwo = ({ onItemClicktwo  }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClickTwo = (item) => {
    setActiveItem(item);
    if (typeof onItemClicktwo === "function") {
      onItemClicktwo(item);
    }
  };

  return (
    <div className="flex flex-row py-10">
      <ul className="flex flex-col gap-2">
        <SideItem
          icon={<RiDashboard3Line />}
          onClick={() => handleItemClickTwo("Dashboard")}
          isActive={activeItem === "Dashboard"}
        />
        <SideItem
          icon={<LuTable />}
          onClick={() => handleItemClickTwo("Products")}
          isActive={activeItem === "Products"}
        />
        <SideItem
          icon={<FaRegHeart />}
          onClick={() => handleItemClickTwo("Favourites")}
          isActive={activeItem === "Favourites"}
        />
        <SideItem
          icon={<LuMessagesSquare />}
          onClick={() => handleItemClickTwo("Inbox")}
          isActive={activeItem === "Inbox"}
        />
        <SideItem
          icon={<LiaListAltSolid />}
          onClick={() => handleItemClickTwo("Order Lists")}
          isActive={activeItem === "Order Lists"}
        />
        <SideItem
          icon={<MdOutlineTableRows />}
          onClick={() => handleItemClickTwo("Product Stock")}
          isActive={activeItem === "Product Stock"}
        />
        <SideItem
          icon={<FiGift />}
          onClick={() => handleItemClickTwo("Pricing")}
          isActive={activeItem === "Pricing"}
        />
        <SideItem
          icon={<SlCalender />}
          onClick={() => handleItemClickTwo("Calender")}
          isActive={activeItem === "Calender"}
        />
        <SideItem
          icon={<RiTodoLine />}
          onClick={() => handleItemClickTwo("Todo")}
          isActive={activeItem === "Todo"}
        />
        <SideItem
          icon={<IoMdContacts />}
          onClick={() => handleItemClickTwo("Contact")}
          isActive={activeItem === "Contact"}
        />
        <SideItem
          icon={<BiMoney />}
          onClick={() => handleItemClickTwo("Invoice")}
          isActive={activeItem === "Invoice"}
        />
        <SideItem
          icon={<SlChart />}
          onClick={() => handleItemClickTwo("UI Elements")}
          isActive={activeItem === "UI Elements"}
        />
        <SideItem
          icon={<IoPersonSharp />}
          onClick={() => handleItemClickTwo("Team")}
          isActive={activeItem === "Team"}
        />
        <SideItem
          icon={<LiaTableSolid />}
          onClick={() => handleItemClickTwo("Table")}
          isActive={activeItem === "Table"}
        />
        <SideItem
          icon={<IoSettingsOutline />}
          onClick={() => handleItemClickTwo("Setting")}
          isActive={activeItem === "Setting"}
        />
        <SideItem
          icon={<RiShutDownLine />}
          onClick={() => handleItemClickTwo("Logout")}
          isActive={activeItem === "Logout"}
        />
      </ul>
    </div>
  );
};

const SideItem = ({ icon, isActive, onClick }) => {
  return (
    <div className="flex gap-x-[14px] cursor-pointer">
      <div
        className={`flex items-center gap-3 pl-4 h-[50px] rounded-lg ${
          isActive ? "text-[#4880FF]" : ""
        }`}
        onClick={() => onClick(icon)}
      >
        <div className="w-[22px] text-[22px] h-[25px]">{icon}</div>
        {isActive && (
          <div className="bg-[#4880FF] w-[7px] h-[50px] rounded-r-md absolute left-0"></div>
        )}
      </div>
    </div>
  );
};

export default SideBarItemTwo;

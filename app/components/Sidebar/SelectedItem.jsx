"use client";
import Team from "@/app/components/Team/page";
import Todo from "@/app/components/Todo/Todo";
import Contact from "@/app/components/Contact/Contact";
import Invoice from "@/app/components/Invoice/Invoice";
import Table from "@/app/components/Table/Table";
import Stock from "@/app/components/ProductStock/Stock";
import Price from "@/app/components/Price/Price";
import Settings from "@/app/components/Settings/Settings";
import Elements from "@/app/components/UiElements/Elements";
import Orderlist from "@/app/components/OrderList/Orderlist";
import Product from "@/app/components/Product/Product";
import Calender from "@/app/components/Calender/Calender";
import MainInbox from "@/app/components/Inbox/Page";
import { useState } from "react";
import Dashboard from "@/app/components/Dashboard/Dashboard";
import Favourites from "@/app/components/Favourites/Favourites";

const SelectedItem = ({ selectedItem }) => {
  const [selectedInboxItem, setSelectedInboxItem] = useState("Inbox");
  const handleSidebarItemClick = (item) => {
    setSelectedInboxItem(item);
  };

  return (
    <>
      {selectedItem && (
        <div>
          {selectedItem === "Dashboard" && <Dashboard />}
          {selectedItem === "Products" && <Product />}
          {selectedItem === "Favourites" && <Favourites />}
          {selectedItem === "Team" && <Team />}
          {selectedItem === "Todo" && <Todo />}
          {selectedItem === "Contact" && <Contact />}
          {selectedItem === "Invoice" && <Invoice />}
          {selectedItem === "Table" && <Table />}
          {selectedItem === "Product Stock" && <Stock />}
          {selectedItem === "Pricing" && <Price />}
          {selectedItem === "Setting" && <Settings />}
          {selectedItem === "UI Elements" && <Elements />}
          {selectedItem === "Order Lists" && <Orderlist />}
          {selectedItem === "Calender" && <Calender />}
          {selectedItem === "Inbox" && (
            <MainInbox
              selectedInboxItem={selectedInboxItem}
              handleSidebarItemClick={handleSidebarItemClick}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SelectedItem;

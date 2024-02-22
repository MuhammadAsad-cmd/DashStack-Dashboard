import React, { useState } from "react";
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
import Favourites from "@/app/components/Favourites/Favourites";
import MainInbox from "../Inbox/Page";
import Dashboard from "../Dashboard/Dashboard";

const SelectedItemTwo = ({ selectedItemTwo }) => {
  const [selectedInboxItem, setSelectedInboxItem] = useState("Inbox");
  const handleSidebarItemClick = (item) => {
    setSelectedInboxItem(item);
  };

  return (
    <>
      {selectedItemTwo === "Dashboard" && <Dashboard />}
      {selectedItemTwo === "Products" && <Product />}
      {selectedItemTwo === "Favourites" && <Favourites />}
      {selectedItemTwo === "Team" && <Team />}
      {selectedItemTwo === "Todo" && <Todo />}
      {selectedItemTwo === "Contact" && <Contact />}
      {selectedItemTwo === "Invoice" && <Invoice />}
      {selectedItemTwo === "Table" && <Table />}
      {selectedItemTwo === "Product Stock" && <Stock />}
      {selectedItemTwo === "Pricing" && <Price />}
      {selectedItemTwo === "Setting" && <Settings />}
      {selectedItemTwo === "UI Elements" && <Elements />}
      {selectedItemTwo === "Order Lists" && <Orderlist />}
      {selectedItemTwo === "Calender" && <Calender />}
      {selectedItemTwo === "Inbox" && (
        <MainInbox
          selectedInboxItem={selectedInboxItem}
          handleSidebarItemClick={handleSidebarItemClick}
        />
      )}
    </>
  );
};

export default SelectedItemTwo;

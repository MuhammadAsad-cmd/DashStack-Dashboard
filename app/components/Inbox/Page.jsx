"use client";
import React from "react";
import InboxSideBarItem from "./InboxSidebar";
import InboxSelectedItem from "./InboxSelectedItem";

const MainInbox = ({ handleSidebarItemClick, selectedInboxItem }) => {

  const handleItemClick = (item) => {
    if (typeof handleSidebarItemClick === "function") {
      handleSidebarItemClick(item);
    }
  };

  return (
    <>
        <div className="flex flex-row space-x-1 lg:space-x-5">
          <InboxSideBarItem onItemClick={handleSidebarItemClick} />
          <InboxSelectedItem
            selectedInboxItem={selectedInboxItem}
            onItemClick={handleItemClick}
          />
        </div>
    </>
  );
};

export default MainInbox;

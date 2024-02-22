"use client";
import { Contacts } from "@/app/Data";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineMail } from "react-icons/hi";
import AddNewContact from "./AddNewContact";
import Image from "next/image";

const Contact = () => {
  const currentTheme = useSelector(selectTheme);
  const [showAddNew, setShowAddNew] = useState(false);

  const toggleAddNew = () => {
    setShowAddNew(!showAddNew);
    if (typeof onAddNew === "function") {
      onAddNew();
    }
  };

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  return (
    <>
      {!showAddNew && (
        <div className="flex lg:flex-row flex-col gap-4 justify-between  leading-10 p-1 mb-3 md:p-3">
          <h1 style={favStyles} className="font-bold text-[32px] ">
            Contact
          </h1>
          <button
            onClick={toggleAddNew}
            className="w-[147px] h-[48px] rounded-lg text-white bg-[#4379EE]"
          >
            Add New Contact
          </button>
        </div>
      )}
      {!showAddNew && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-7 w-full">
          {Contacts.map((Contact) => (
            <div style={darkModeStyles} key={Contact.id} className="rounded-xl">
              <Image
                width={100}
                height={100}
                src={Contact.imageSrc}
                alt=""
                className="rounded-t-xl w-full"
              />
              <div className="flex flex-col items-center text-center justify-center">
                <p className="mt-[16px] text-base font-bold">{Contact.name}</p>
                <p className="mt-[4px] text-sm leading-4">{Contact.email}</p>
                <div className="w-[137px] h-[40px]  my-[21px] gap-[2px] flex items-center text-center justify-center border rounded-lg">
                  <HiOutlineMail />
                  Message
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showAddNew && <AddNewContact />}
    </>
  );
};

export default Contact;

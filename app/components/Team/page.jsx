'use client';
import { useSelector } from "react-redux";
import AddNew from "./AddNew";
import { Teams } from "@/app/Data";
import { useState } from "react";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";
import Image from "next/image";

const Team = ({ onAddNew }) => {
  const currentTheme = useSelector(selectTheme);
  const [showAddNew, setShowAddNew] = useState(false);

  const toggleAddNew = () => {
    setShowAddNew(!showAddNew);
    if (typeof onAddNew === "function") {
      onAddNew();
    }
  };

  const darkModeStyles = {
    backgroundColor: currentTheme === "dark" ? "#273142" : "#FFFFFF",
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  const favStyles = {
    color: currentTheme === "dark" ? "#FFFFFF" : "#202224",
  };

  return (
    <>
      {!showAddNew && ( 
        <div className="flex lg:flex-row flex-col gap-4 justify-between leading-10 p-1 mb-3 md:p-3">
          <h1 style={favStyles} className="font-bold text-[32px] ">
            Team
          </h1>
          <button
            onClick={toggleAddNew}
            className="w-[147px] h-[48px] rounded-lg text-white bg-[#4379EE]"
          >
            Add New Member
          </button>
        </div>
      )}

      {!showAddNew && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5 lg:gap-[30px] w-full">
          {Teams.map((team) => (
            <div
              style={darkModeStyles}
              key={team.id}
              className="h-[289px] rounded-xl flex flex-col items-center text-center justify-center"
            >
              <Image
              width={110}
              height={110}
                src={team.imageSrc}
                alt=""
                className="w-[110px] h-[110px] rounded-full"
              />
              <p className="mt-[24px] text-base leading-6 font-bold">
                {team.name}
              </p>
              <p className="mt-[4px]">{team.role}</p>
              <p className="mt-[9px]">{team.email}</p>
            </div>
          ))}
        </div>
      )}

      {showAddNew && <AddNew />}
    </>
  );
};

export default Team;

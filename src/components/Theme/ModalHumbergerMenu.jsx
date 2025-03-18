import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { IoSettings } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidColor } from "react-icons/bi";
import { VscColorMode } from "react-icons/vsc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLiveHelp } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";

const ModalHumbergerMenu = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const { theme, getButtonClass, getIconTheme } = useTheme();
  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : theme === "lemonade"
      ? "bg-[#027A7D] text-white"
      : "bg-[#DCE6F8] text-[#333]";
  };

  const settings = [
    {
      id: 1,
      name: "Sistem dan Arsip",
      link: "#",
      icon: <IoDiamond />,
      symbol: <MdKeyboardArrowRight />,
    },
    {
      id: 2,
      name: "Tampilan",
      link: "#",
      icon: <BiSolidColor />,
      symbol: <MdKeyboardArrowRight />,
    },
    {
      id: 3,
      name: "Tema",
      link: "#",
      icon: <VscColorMode />,
      symbol: <MdKeyboardArrowRight />,
    },
    {
      id: 4,
      name: "Laporan Materi",
      link: "laporan",
      icon: <BsFillTelephoneFill />,
      symbol: <MdKeyboardArrowRight />,
    },
    {
      id: 5,
      name: "Bantuan",
      link: "#",
      icon: <MdLiveHelp />,
      symbol: <MdKeyboardArrowRight />,
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-5 z-50"
      onClick={handleOverlayClick}
    >
      {/* Kontainer Modal */}
      <div
        className={`p-5 rounded-lg shadow-lg  w-full relative  ${getThemeClass()}`}
      >
        {/* Header Modal */}
        <h2 className="text-xl  font-[500] mb-3">Pengaturan</h2>
        <div>
          {settings.map((item) => (
            <div
              key={item.id}
              className="flex flex-col  rounded-md hover:bg-gray-100"
            >
              <a
                href={item.link}
                className="flex items-center p-2 rounded-md hover:bg-gray-100"
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="text-[16px]">{item.name}</span>
                <span className="ml-auto text-2xl">{item.symbol}</span>
              </a>
              <hr
                className={`mb-1 mt-2 border-t-1 ${
                  theme === "dark" ? "border-white" : "border-[#7A7A7A]"
                } ${item.id === 5 ? "hidden" : ""}`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className={`mt-4 w-full font-medium p-2 rounded-xl f ${getButtonClass()}`}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default ModalHumbergerMenu;

import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalDonatur from "./ModalDonatur";
import { MdOutlineCardGiftcard } from "react-icons/md";

const ModalBonus = ({ isOpen, onClose }) => {
  const { getButtonClass, getTextTitle, theme, getIconTheme } = useTheme();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-14"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-3 rounded-xl shadow-xl w-full animate-zoomIn"
        style={{ animation: "zoomIn 0.6s ease forwards" }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-7xl ">
            <img
              src="/Treasure Chest.png"
              alt="Treasure Chest"
            />
          </div>

          <h1 className="text-[20px] font-normal text-center mx-auto mb-3">
            Hadiah Pencapaian
          </h1>

          <p className="text-base font-normal text-center mb-3">
            Telah menyelesaikan seluruh materi
          </p>
        </div>
        <div className="flex justify-center items-center w-full mb-2">
          <button
            onClick={onClose}
            className={`mt-4  text-sm justify-center items-center w-[220px] font-normal py-2 px-4 rounded-xl bg-[#FFD700] ${getTextTitle()} flex`}
          >
            <span className="mr-2">Ambil hadiah</span>
            <IoDiamond className={`mr-2 font-bold ${getIconTheme()}`} /> 100
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBonus;

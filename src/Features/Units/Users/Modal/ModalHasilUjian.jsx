import React, { useState } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiSolidErrorAlt } from "react-icons/bi";
import { HiGift } from "react-icons/hi2";

const ModalHasilUjian = ({ isOpen, onClose }) => {
  const { getButtonClass, getThemeModalCategory, theme, getIconTheme } =
    useTheme();

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
      className="fixed inset-0   z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-10 rounded-xl "
      onClick={handleOverlayClick}
    >
      <div
        className={` p-3 rounded-xl shadow-xl w-full  ${getThemeModalCategory()}`}
      >
        <div className="flex flex-col justify-center items-center ">
          <BiSolidErrorAlt className={`mb-5 text-7xl text-[#A74828]`} />

          <h1 className="text-lg font-semibold text-center mx-auto mb-3">
            Hasil Ujian Mempengaruhi Nilai Akhir
          </h1>

          <p className="text-base font-normal text-center mb-3">
            Kerjakan soal sesuai kemampuan sendiri tanpa bantuan dalam bentuk
            apapun.
          </p>
        </div>

        <div className="flex justify-center items-center w-full p-2">
          <Link to={"/page-satu"}>
            <button
              className={`mt-4 text-sm  justify-center items-center  w-[270px] font-normal py-3 px-4 rounded-xl border-none   ${getButtonClass()} flex items-center`}
            >
              Mulai Ujian
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalHasilUjian;

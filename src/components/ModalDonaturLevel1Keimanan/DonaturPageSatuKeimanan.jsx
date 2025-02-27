import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const DonaturPageSatuKeimanan = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const { theme, getButtonClass, getIconTheme } = useTheme();

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-[#EEE] text-[#333]";
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-5"
    >
      <div
        className={`p-5 rounded-lg shadow-lg w-full relative max-w-md ${getThemeClass()}`}
      >
        {/* Close Icon di pojok kanan atas */}
        <IoMdClose
          className="text-2xl cursor-pointer absolute top-3 right-3 font-bold"
          onClick={onClose}
        />

        <div className="flex flex-col">
          {/* Heart dan Title di tengah */}
          <div className="flex items-center justify-center gap-2">
            <FaHeart className={`${getIconTheme()}`} />
            <h1 className="text-lg font-semibold">Donatur</h1>
          </div>
        </div>
        {/* Judul */}
        <div className="flex flex-col mt-5">
          <h1 className="text-base font-medium">
            Donatur yang telah mendukung{" "}
            <span className="text-[#0961F5]">soal ini </span>
          </h1>
          <div className="flex gap-2 items-center mt-5">
            <img src="/iconPemula.png" alt="" />
            <h1 className="text-base font-medium">Ibrahim</h1>
            <h5 className="text-[8px] bg-[#F9C883] py-1  px-2 rounded-full">
              100
            </h5>
            <h5 className="text-[9px] bg-[#83F9B6] py-1  px-2 rounded-full">
              Lv-1
            </h5>
          </div>
          <h2 className="text-base font-semibold">Pesan</h2>
          <p>
            “Semangat belajar, terus bertahan dalam menuntut ilmu bagaimanapun
            keadaan kita karena dengan cara seperti ini sebagai jalan menuju
            surga Allah ta’ala.”
          </p>
        </div>

        <button
          onClick={onClose}
          className={`mt-5 w-full text-[15px] font-medium py-2 border-none rounded-xl focus:outline-none focus:shadow-outline ${getButtonClass()}`}
        >
          Selesai Membaca
        </button>
      </div>
    </div>
  );
};

export default DonaturPageSatuKeimanan;

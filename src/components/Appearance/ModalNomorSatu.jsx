import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { Link } from "react-router-dom";
import ModalDonatur from "./ModalDonatur";
import { AiOutlineClose } from "react-icons/ai";

const ModalNomorSatu = ({ isOpen, onClose }) => {
  const [ismodalDonaturOpen, setismodalDonaturOpen] = useState(false);
  const { getButtonClass, getThemeLoveClass, theme } = useTheme();
  const [boxClicks, setBoxClicks] = useState({ A: 0, B: 0, C: 0 }); // State untuk melacak jumlah klik

  const handleBoxClick = (box) => {
    setBoxClicks((prev) => ({
      ...prev,
      [box]: prev[box] + 1, // Tambahkan jumlah klik untuk kotak yang diklik
    }));
  };

  const getBoxClass = (box) => {
    if (boxClicks[box] === 1) {
      return "bg-green-500 text-white"; // Hijau pada klik pertama
    } else if (boxClicks[box] >= 2) {
      return "bg-yellow-500 text-white"; // Emas setelah klik kedua
    } else {
      return "bg-gray-300 border-blue-500 border-4"; // Warna default
    }
  };

 const handleDonatur = () => {
    setismodalDonaturOpen(true);
 }

  // Menutup modal saat klik di luar area modal
  const handleModalClick = (e) => {
    // Cek jika klik di luar area modal
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center p-5 rounded-xl"
      onClick={handleModalClick} // Menutup modal saat klik di luar
    >
      <div
        className="bg-white p-5 rounded-lg shadow-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close */}
        <button
          className="absolute top-3 right-3 text-black hover:text-red-500 focus:outline-none z-50"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="flex items-center justify-center mb-3 space-x-1"
        onClick={handleDonatur}
        >
          <FaHeart className={`${getThemeLoveClass()} text-xl font-bold`} />
          <h1  className="text-base ">
            Donatur
          </h1>
        </div>
        <h1 className="text-xl font-semibold items-center justify-center flex mb-2">
          Pengantar Rukun Iman
        </h1>
        <div className="flex items-center justify-center mb-6 space-x-2">
          <h1 className="text-base font-normal  mb-3">Bagian ke-2</h1>
        </div>
        <p className="text-center text-sm font-normal">
          1/3 kuis terselesaikan
        </p>
        <div className="flex gap-5 justify-center items-center p-3">
          {["A", "B", "C"].map((box) => (
            <div
              key={box}
              onClick={() => handleBoxClick(box)}
              className={`flex items-center text-xl justify-center mb-3 space-x-2 p-4 w-[50px] h-[50px] rounded-md cursor-pointer ${getBoxClass(
                box
              )}`}
            >
              {box}
            </div>
          ))}
        </div>

        <Link to={"/page-satu"}>
          <button
            onClick={onClose}
            className={` w-full text-base font-normal py-2 px-4 rounded-xl border-none ${getButtonClass()}`}
          >
            Mulai + 40 XP
          </button>
        </Link>
      </div>

      {ismodalDonaturOpen && (
        <ModalDonatur
          isOpen={ismodalDonaturOpen}
          onClose={() => setismodalDonaturOpen(false)}
        />
      )}
    </div>
  );
};

export default ModalNomorSatu;

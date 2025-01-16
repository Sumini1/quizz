import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import ModalArticle from "../Appearance/ModalArticle";
import ModalHasilUjian from "./ModalHasilUjian";
import { FiLoader } from "react-icons/fi"; // Import spinner icon
import { MdScale } from "react-icons/md";
import { AiOutlineLoading3Quarters, AiOutlineClose } from "react-icons/ai";


const ModalEvaluasi = ({ isOpen, onClose }) => {
  const {
    getButtonClass,
    getIconTheme,
    getBorderClass,
    getThemeModalCategory,
  } = useTheme();
  const [isModalArtikelOpen, setIsModalArtikelOpen] = useState(false);
  const [isModalHasilUjianOpen, setIsModalHasilUjianOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ModalArtikel = () => {
    setIsModalArtikelOpen(true);
  };
  if (!isOpen) {
    return null;
  }
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleHasilUjian = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalHasilUjianOpen(true);
    }, 2000); // Simulasi loading selama 2 detik
  };

  return (
    <div
      className="fixed top-0 z-50 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-5"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-5 rounded-lg shadow-lg w-full relative">
        {/* Tombol Close */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="flex items-center justify-center space-x-1">
          <FaHeart className={`${getIconTheme()} text-xl font-bold`} />
          <h1 className="text-base ">Donatur</h1>
        </div>
        <h1 className="text-xl font-semibold items-center justify-center flex">
          Pengantar Rukun Iman
        </h1>
        <div className="flex items-center justify-center mb-4 space-x-2">
          {/* <ImLeaf className={`${getIconTheme()}`} /> */}
          <h1 className="text-lg mb-1 ">Evaluasi</h1>
        </div>
        <p className="text-center text-base mb-4">
          Evaluasi pembelajaran untuk pemantapan materi dan persiapan ujian
          akhir.
        </p>
        <button
          onClick={ModalArtikel}
          className={`mt-4 w-full text-[16px] font-normal py-2 px-4 rounded-xl border-none focus:outline-none focus:shadow-outline ${getBorderClass()}`}
        >
          Baca Materi Artikel
        </button>
        <button
          onClick={handleHasilUjian}
          className={`mt-4 w-full text-[16px] font-normal py-2 px-4 rounded-xl border-none focus:outline-none focus:shadow-outline    ${getButtonClass()}`}
        >
          Mulai Evaluasi +40 XP
        </button>
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
              className={` p-10 rounded-xl flex flex-col items-center gap-4 ${getThemeModalCategory()}`}
            >
              <div
                className={`text-7xl p-2 font-semibold rounded-2xl h-[70px] w-[70px] flex items-center justify-center animate-spin border-none ${getIconTheme()} `}
                style={{ animation: "slow-spin 5s linear infinite" }}
              >
                <AiOutlineLoading3Quarters className="animate-spin " />
              </div>
              <h1 className="text-lg font-semibold">Proses Memuat Materi</h1>
              <p>"Ilmu adalah cahaya"</p>
            </div>
          </div>
        )}
      </div>
      <ModalArticle
        isOpen={isModalArtikelOpen}
        onClose={() => setIsModalArtikelOpen(false)}
      />
      <ModalHasilUjian
        isOpen={isModalHasilUjianOpen}
        onClose={() => setIsModalHasilUjianOpen(false)}
      />
    </div>
  );
};

export default ModalEvaluasi;
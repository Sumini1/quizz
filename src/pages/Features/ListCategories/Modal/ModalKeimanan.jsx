import React from "react";
import { useTheme } from "../../../../context/ThemeContext";

const ModalKeimanan = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const { theme, getButtonClass } = useTheme();

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-[#EEE] text-[#333]";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-5">
      <div
        className={`p-6 rounded-lg shadow-lg w-full relative max-w-md ${getThemeClass()}`}
      >
        <div className="flex flex-col ">
          <h2 className="text-lg font-[600] mb-3 ">Dasar Keimanan</h2>
          <h1 className="text-md font-[500] mb-1">
            Apa itu tingkat dasar Keimanan ?
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            Adalah Pembelajaran yang disusun untuk memperdalam pemahaman tentang
            Rukun Iman, Tauhid, dan prinsip akidah, sehingga memperkokoh
            keyakinan serta nilai-nilai keislaman dalam kehidupan.
          </p>

          <h1 className="text-md font-[500] ">Untuk siapa tingkatan ini?</h1>

          <ol className="list-decimal pl-5 text-sm leading-relaxed mb-2">
            <li>Muslim yang ingin belajar dari dasar</li>
            <li>
              Muallaf yang membutuhkan ilmu dan praktek dasar secara cepat
            </li>
            <li>Peserta diluar agama islam yang ingin belajar ilmu islam</li>
          </ol>

          <h1 className="text-md font-[500] mb-1">
            Kemampuan yang perlu disiapkan
          </h1>

          <p className="text-sm leading-relaxed">
            Cukup persiapkan diri karena materi dari dasar akan dibahas semudah
            mungkin
          </p>
        </div>

        <button
          onClick={onClose}
          className={`mt-20 w-full text-[15px] font-medium py-2 px-4 border-none rounded-xl focus:outline-none focus:shadow-outline ${getButtonClass()}`}
        >
          Selesai Membaca
        </button>
      </div>
    </div>
  );
};

export default ModalKeimanan;

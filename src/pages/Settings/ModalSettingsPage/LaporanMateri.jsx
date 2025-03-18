import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";
import { useTheme } from "../../../context/ThemeContext";
import { FaChalkboardUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LaporanMateri = () => {
  const { getTextTitle1, getButtonClass, getBorder } = useTheme();
  const [activeTab, setActiveTab] = useState("masalah-teknis"); // Menyimpan tab aktif

  return (
    <div className="flex flex-col min-h-screen">
      <Link to={"/settings"}>
        <div className="flex items-center gap-3 mt-5 px-5 text-lg">
          <FaArrowLeft />
          <h1 className="font-semibold">Saran dan Masukan</h1>
        </div>
      </Link>
      <div className={`flex gap-4 mx-5 mt-10 justify-center ${getBorder()}`}>
        <div
          onClick={() => setActiveTab("masalah-teknis")}
          className={`
      flex items-center gap-2 p-2 px-1 rounded-full transition-all duration-300
      ${
        activeTab === "masalah-teknis"
          ? `border-none ${getButtonClass()} w-1/2 px-5`
          : "bg-transparent border-gray-300 w-full"
      } cursor-pointer
    `}
        >
          <PiNotePencilBold className="w-[20px] h-[20px]" />
          <span className="whitespace-nowrap">Masalah Teknis</span>
        </div>

        <div
          onClick={() => setActiveTab("perbaikan-materi")}
          className={`
      flex items-center gap-2 p-2 px-9 rounded-full transition-all duration-300
      ${
        activeTab === "perbaikan-materi"
          ? `border-none ${getButtonClass()} w-1/2`
          : "bg-transparent border-gray-300 w-full"
      } cursor-pointer
    `}
        >
          <FaChalkboardUser
            className={`w-[20px] h-[20px] ${
              activeTab === "perbaikan-materi" && "text-white"
            }`}
          />
          <span>Masukan</span>
        </div>
      </div>
      {/* Input */}

      {/* Saran */}
      {activeTab === "masalah-teknis" && (
        <div className="flex flex-col gap-3 p-5 ">
          <p>
            Contoh kesalahan teknis seperti logout sendiri, tidak bisa posting
            jawaban.
          </p>
          <textarea
            placeholder="Tulis kritik dan saranmu disini..."
            className={`w-full h-32 p-2 rounded-md ${getBorder()}`}
          ></textarea>
          <p>Bolehkah kami menghubungi anda untuk tindakan lebih lanjut?</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Boleh</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Maaf, belum bisa</span>
            </label>
          </div>
          <button
            className={`p-3 w-full mt-24 rounded-xl border-none ${getButtonClass()}`}
          >
            Kirim
          </button>
        </div>
      )}

      {/* masukan */}
      {activeTab === "perbaikan-materi" && (
        <div className="flex flex-col gap-3 p-5 ">
          <p>
            Contoh kesalahan teknis seperti logout sendiri, tidak bisa posting
            jawaban.
          </p>
          <textarea
            placeholder="Tulis kritik dan saranmu disini..."
            className={`w-full h-32 p-2 rounded-md ${getBorder()}`}
          ></textarea>
          <p>Bolehkah kami menghubungi anda untuk tindakan lebih lanjut?</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Boleh</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Maaf, belum bisa</span>
            </label>
          </div>
          <button
            className={`p-3 w-full mt-24 rounded-xl border-none ${getButtonClass()}`}
          >
            Kirim
          </button>
        </div>
      )}
    </div>
  );
};

export default LaporanMateri;

import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Screen3 = () => {
  const navigate = useNavigate();
  const { getButtonClass, getDotClass } = useTheme();

   // Set overflow:hidden hanya saat halaman ini aktif
    useEffect(() => {
      document.body.style.overflow = "hidden";
  
      return () => {
        document.body.style.overflow = "auto"; // Pulihkan scroll saat keluar dari halaman
      };
    }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden p-5 items-center">
      {/* Gambar di Atas */}
      <img
        src="/quiz33.png"
        alt="Quiz 2"
        className="w-[300px] h-[200px] object-contain mt-10"
      />

      {/* Teks di Tengah */}
      <div className="flex flex-col flex-grow justify-center gap-y-2">
        <h2 className="text-xl font-medium">
          Belajar Islam dan Bahasa Arab Sesuai Keinginanmu
        </h2>
        <p className="text-md">
          Mau belajar dari dasar ? Ingin memperdalam berbagai cabang ilmu islam
          seperti Fiqh Syafi’i ? atau mau memilih belajar tingkat lanjut ?
        </p>
      </div>

      {/* Navigasi */}
      <div className="flex fixed bottom-20 space-x-2 items-center text-xl">
        <GoDotFill className={getDotClass(0)} />
        <GoDotFill className={getDotClass(1)} />
        <GoDotFill className={getDotClass(2)} />
      </div>

      {/* Tombol Fixed di Bawah */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-3 shadow-md">
        <button
          onClick={() => navigate("/login-register")}
          className={`w-full py-3 rounded-xl text-white border-none ${getButtonClass()}`}
        >
          Lanjut
        </button>
      </div>
    </div>
  );
};

export default Screen3;

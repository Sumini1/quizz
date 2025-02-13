import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Screen3 = () => {
  const navigate = useNavigate();
  const { getButtonClass, getDotClass } = useTheme();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Slider */}
      <div className="w-full max-w-screen-lg -mt-12 selection: ">
        <div className="flex justify-center w-full p-5">
          <img
            src="/quiz33.png"
            alt="Quiz 2"
            className="w-3/4 sm:w-1/2 md:w-1/3 object-contain "
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center p-5 -mt-5">
        <h2 className="text-xl font-medium mb-2">
          Belajar Islam dan Bahasa Arab Sesuai Keinginanmu
        </h2>
        <p className="text-md">
          Mau belajar dari dasar ? Ingin memperdalam berbagai cabang ilmu islam
          seperti Fiqh Syafi’i ? atau mau memilih belajar tingkat lanjut ?
        </p>
      </div>
      <div className="flex space-x-2 items-center mx-auto text-xl  mt-7">
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

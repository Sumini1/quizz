import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Screen3 = () => {
  const navigate = useNavigate();
  const { theme, getDotClass, getButtonClass } = useTheme();
  //  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Slider */}
      <div className="w-full max-w-screen-lg mt-6 selection: ">
        <div className="flex justify-center w-full p-5">
          {" "}
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-3/4 sm:w-1/2 md:w-1/3 object-contain "
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col justify-center items-center mx-auto p-5 ">
        <h2 className="text-xl font-semibold   mb-2">
          Belajar Islam dan Bahasa Arab Sesuai Keinginanmu
        </h2>
        <p className="text-md  ">
          Mau belajar dari dasar ? Ingin memperdalam berbagai cabang ilmu islam
          seperti Fiqh Syafi’i ? atau mau memilih belajar tingkat lanjut ?
        </p>
        <div className="flex  mt-8  mb-4 text-xl">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <div
          onClick={() => navigate("/login-register")}
          className="mt-auto w-full flex justify-center  flex-col"
        >
          <button
            className={`w-full p-3 text-center border-none rounded-xl ${getButtonClass()}`}
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen3;

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
      <div className="w-full max-w-screen-lg mt-6 selection: ">
        <div className="flex justify-center w-full p-5">
          <img
            src="/quiz33.png"
            alt="Quiz 2"
            className="w-3/4 sm:w-1/2 md:w-1/3 object-contain "
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center p-5 -mt-3">
        <h2 className="text-xl font-medium mb-2">
          Belajar Islam dan Bahasa Arab Sesuai Keinginanmu
        </h2>
        <p className="text-md">
          Mau belajar dari dasar ? Ingin memperdalam berbagai cabang ilmu islam
          seperti Fiqh Syafi’i ? atau mau memilih belajar tingkat lanjut ?
        </p>
        <div className="flex mt-14   text-xl gap-2 items-center mx-auto">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <div
          onClick={() => navigate("/login-register")}
          className="w-full mt-4  mx-auto flex flex-col"
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

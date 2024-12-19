import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link , useLocation} from "react-router-dom";
import { useTheme } from "../../context/themeContext";

const Screen3 = () => {
    const { theme } = useTheme();
     const location = useLocation();

   
  const getDotClass = (index) => {
    const currentScreen = ["/", "/screen2", "/screen3"];
    return currentScreen[index] === location.pathname
      ? theme === "dark"
        ? "text-blue-700"
        : theme === "cupcake"
        ? "text-pink-500"
        : theme === "bumblebee"
        ? "text-yellow-600"
        : "text-blue-700"
      : theme === "dark"
      ? "text-gray-200"
      : theme === "cupcake"
      ? "text-pink-200"
      : theme === "bumblebee"
      ? "text-yellow-300"
      : "text-gray-200";
  };
  return (
    <div
    >
      {/* Slider */}
      <div className="w-full h-[250px] rounded-lg p-20">
        <div>
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col justify-center items-center mx-auto p-3">
        <h1 className="text-xl font-semibold mt-16 p-3 ">
          Kamu Bisa Belajar Islam Sesuai Keinginanmu
        </h1>
        <p className="text-sm -mt-3 p-3 ">
          Mau belajar dari dasar ? Ingin memperdalam berbagai cabang ilmu islam
          seperti Fiqh Syafi’i ? atau mau memilih belajar tingkat lanjut ?
        </p>
        <div className=" flex mt-24 mb-4  gap-3 ">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <Link to={"/login-register"}>
          <button
            className={`p-2 w-[350px] rounded-md ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : theme === "cupcake"
                ? "bg-pink-500 text-white"
                : theme === "bumblebee"
                ? "bg-yellow-500 text-white"
                : "bg-blue-700 text-white"
            }`}
          >
            Lanjut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Screen3;

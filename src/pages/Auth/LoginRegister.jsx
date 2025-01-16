import React, { useState } from "react";
// import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const LoginRegister = () => {
  const { getBorder, getButtonClass, getBorderClass } = useTheme();

  return (
    <div className="p-5 h-screen">
      {/* Slider */}
      <div className="w-full h-[250px] rounded-lg p-20">
        <div className="w-full  h-[280px] flex justify-center items-center">
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col  mt-40">
        <h2 className="text-xl font-[500] mt-5 p-3 ">
          Sebelum belajar, Daftar atau Login terlebih dahulu ya
        </h2>

        <div className="flex flex-col gap-5 mt-5">
          <Link to={"/register"}>
            <button
              className={`p-3 w-full border-none rounded-xl ${getButtonClass()}`}
            >
              Daftar
            </button>
          </Link>
          <Link to={"/login"}>
            <button className={`p-3 w-full border-none   rounded-xl ${getBorderClass()}`}>
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

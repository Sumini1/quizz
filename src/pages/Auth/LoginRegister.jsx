import React, { useState } from "react";
// import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const LoginRegister = () => {
  const { getBorder, getButtonClass, getBorderClass } = useTheme();

  return (
    <div className="p-5 h-screen">
      {/* Slider */}
      <div className="w-full max-w-screen-lg h-[250px] rounded-lg ">
        <div className="w-full  p-5 mt-7 flex justify-center items-center">
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-3/4 sm:w-1/2 md:w-1/3 object-contain "
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col mt-7">
        <h2 className="text-xl font-[500] mt-5 p-3 ">
          Sebelum belajar, Daftar atau Login terlebih dahulu ya
        </h2>

        <div className="flex flex-col gap-5 mt-20">
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

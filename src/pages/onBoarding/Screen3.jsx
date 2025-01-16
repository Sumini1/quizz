import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link , useLocation} from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Screen3 = () => {
    const { theme, getDotClass, getButtonClass } = useTheme();
    //  const location = useLocation();

     

   

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Slider */}
      <div className="w-full h-[250px] rounded-lg p-20">
        <div className="flex  w-full h-[250px] justify-between items-center">
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col justify-center items-center mx-auto p-3">
        <h2 className="text-xl font-semibold mt-[90px] p-3 ">
          Belajar Islam dan Bahasa Arab Sesuai Keinginanmu
        </h2>
        <p className="text-md mb-6 p-3 -mt-3 ">
          Mau belajar dari dasar ? Ingin memperdalam berbagai cabang ilmu islam
          seperti Fiqh Syafi’i ? atau mau memilih belajar tingkat lanjut ?
        </p>
        <div className=" flex mb-2 mt-[52px]  text-xl">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <Link to={"/login-register"}>
          <button
            className={`p-3 w-[350px] border-none rounded-md ${getButtonClass()}`}
          >
            Lanjut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Screen3;

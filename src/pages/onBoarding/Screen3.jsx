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
      <div className="w-full max-w-screen-lg mt-5 selection: ">
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
        <h2 className="text-xl font-semibold  -mt-3 mb-2">
          Belajar Islam dan Bahasa Arab Sesuai Keinginanmu
        </h2>
        <p className="text-md mb-6 ">
          Mau belajar dari dasar ? Ingin memperdalam berbagai cabang ilmu islam
          seperti Fiqh Syafi’i ? atau mau memilih belajar tingkat lanjut ?
        </p>
        <div className="flex  mt-7  mb-4 text-xl">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <div className="mt-auto w-full flex justify-center ">
          <Link to={"/login-register"} className="w-full ">
            <button
              className={`w-full p-3 text-center border-none rounded-xl ${getButtonClass()}`}
            >
              Lanjut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Screen3;

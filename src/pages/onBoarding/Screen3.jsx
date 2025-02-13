import React from "react";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Screen3 = () => {
  const navigate = useNavigate();
  const { getDotClass, getButtonClass } = useTheme();

  return (
    <div className="flex flex-col min-h-screen items-center p-5">
      {/* Slider */}
      <div className="w-full max-w-screen-lg">
        <div className="flex justify-center w-full">
          <img
            src="/quiz33.png"
            alt="Quiz 3"
            className="w-3/4 sm:w-2/3 md:w-1/2 object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 justify-between w-full mt-5">
        <div className=" space-y-4 ">
          <h2 className="text-xl font-semibold">
            Belajar Islam dan Bahasa Arab Sesuai Keinginanmu
          </h2>
          <p className="text-md text-gray-600">
            Mau belajar dari dasar? Ingin memperdalam berbagai cabang ilmu Islam
            seperti Fiqh Syafi’i? atau memilih belajar tingkat lanjut?
          </p>
        </div>

        {/* Indicator */}
        <div className="flex gap-2 text-xl items-center mt-auto mb-5 mx-auto">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/login-register")}
          className={`w-full  p-3 rounded-xl border-none ${getButtonClass()}`}
        >
          Lanjut
        </button>
      </div>
    </div>
  );
};

export default Screen3;

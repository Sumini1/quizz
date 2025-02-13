import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const navigate = useNavigate();
  const { getDotClass, getButtonClass } = useTheme();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Slider */}
      <div className="w-full max-w-screen-lg mt-12 flex flex-col items-center relative">
        <img
          src="/logoquiz.png"
          alt="Logo 1"
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 object-contain"
        />
        {/* SVG tetap muncul */}
        <div className="flex gap-4 p-5">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 87 152"
            fill="none"
          >
            <circle
              cx="11"
              cy="76"
              r="75.5"
              stroke="#F9AD2B"
              strokeOpacity="0.18"
            />
          </svg>
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 87 152"
            fill="none"
          >
            <circle
              cx="11"
              cy="76"
              r="75.5"
              stroke="#F9AD2B"
              strokeOpacity="0.12"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col  max-w-md p-5">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 -mt-16">
          Mulai Perjalanan Menuntut Ilmu
        </h2>
        <p className="text-sm sm:text-md text-gray-700 mb-6">
          Komitmen kami memudahkan kaum muslimin untuk belajar agama dan bahasa
          Arab dimanapun.
        </p>

        {/* Navigasi */}
        <div className="flex space-x-2 mt-28 items-center mx-auto">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>

        {/* Tombol */}
        <div className="w-full mt-4 flex flex-col">
          <button
            onClick={() => navigate("/screen2")}
            className={`w-full py-3 rounded-xl text-white border-none ${getButtonClass()}`}
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

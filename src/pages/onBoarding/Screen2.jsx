import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Screen2 = () => {
  const { getButtonClass, getDotClass } = useTheme();

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Slider */}
      <div className="w-full h-[250px] rounded-lg p-20">
        <div className="flex justify-between items-center w-full h-[280px]">
          <img
            src="/quiz2.png"
            alt="Logo 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center mx-auto p-3">
        <div>
          <h2 className="text-xl font-[500] mt-[100px] p-3 ">
            Perjalanan akan menyenangkan
          </h2>
          <p className="text-md -mt-3 p-3 ">
            Kami menyediakan sistem belajar yang menarik agar peserta merasa
            senang
          </p>
        </div>
        <div className="flex mt-[70px] mb-2 text-xl">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <div className="mt-auto w-full flex justify-center p-4">
          <Link to={"/screen3"} className="w-full ">
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

export default Screen2;

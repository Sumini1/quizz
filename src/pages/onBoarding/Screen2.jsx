import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Screen2 = () => {
  const { getButtonClass, getDotClass } = useTheme();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Slider */}
      <div className="w-full max-w-screen-lg mt-6 selection: ">
        <div className="flex justify-center w-full p-5">
          <img
            src="/quiz2.png"
            alt="Quiz 2"
            className="w-3/4 sm:w-1/2 md:w-1/3 object-contain "
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center p-5 -mt-5">
        <h2 className="text-xl font-medium mb-2">
          Perjalanan akan menyenangkan
        </h2>
        <p className="text-md">
          Kami menyediakan sistem belajar yang menarik agar peserta merasa
          senang
        </p>
        <div className="flex mt-32 mb-4 text-xl gap-2 items-center mx-auto">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <div className="w-full  mx-auto ">
          <Link to="/screen3">
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

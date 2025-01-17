import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const { getDotClass, getButtonClass } = useTheme();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Slider */}
      <div className="w-full h-[240px] rounded-lg p-20">
        <div className="flex flex-col">
          <img
            src="/logoquiz.png"
            alt="Logo 1"
            className="w-full h-full object-cover "
          />
          <svg
            className="-mt-[200px] -ml-16 text-3xl font-bold"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 87 152"
            fill="none"
          >
            <circle
              cx="11"
              cy="76"
              r="75.5"
              stroke="#F9AD2B"
              stroke-opacity="18"
            />
          </svg>
          <svg
            className="mt-10 ml-[220px] text-3xl font-bold"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 87 152"
            fill="none"
          >
            <circle
              cx="11"
              cy="76"
              r="75.5"
              stroke="#F9AD2B"
              stroke-opacity="12"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center mx-auto p-3   ">
        <div>
          <h2 className="text-xl font-[500] mt-[90px] mb-4 p-3 ">
            Mulai Perjalanan Menuntut Ilmu
          </h2>
          <p className="text-md -mt-7 mb-6 p-3 ">
            Komitmen kami memudahkan kaum muslimin untuk belajar agama dan
            bahasa Arab dimanapun.
          </p>
        </div>
        <div className="flex mt-[90px] text-xl  mb-2  ">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <Link to={"/screen2"}>
          <button
            className={`p-3 w-[350px] border-none rounded-xl ${getButtonClass()}`}
          >
            Lanjut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/themeContext";


const Home = () => {
  const location = useLocation();
    const { theme } = useTheme();

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
    <div>
      {/* Slider */}
      <div className="w-full h-[250px] rounded-lg p-20">
        <div>
          <img
            src="/logoquiz.png"
            alt="Logo 1"
            className="w-full h-full object-cover mt-3"
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex mt-1 flex-col justify-center items-center mx-auto p-3">
        <h1 className="text-xl font-semibold mt-16 p-3 ">
          Perjalanan Menuntut Ilmu Mulai dari Sini
        </h1>
        <p className="text-sm -mt-3 p-3 ">
          Komitmen kami memudahkan kaum muslimin untuk belajar agama dan bahasa
          Arab dimanapun.
        </p>
        <div className="flex mt-28 mb-2 gap-3">
          <GoDotFill className={getDotClass(0)} />
          <GoDotFill className={getDotClass(1)} />
          <GoDotFill className={getDotClass(2)} />
        </div>
        <Link to={"/screen2"}>
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

export default Home;

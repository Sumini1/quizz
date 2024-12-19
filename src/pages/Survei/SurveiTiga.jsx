import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { GoDotFill } from "react-icons/go";

const SurveiTiga = () => {
  const { theme } = useTheme();

  const getDotClass = (index) => {
    const currentScreen = ["/survei-satu", "/survei-dua", "/survei-tiga"];
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
    <div className="flex  flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      <div className="mt-20">
        <h1 className="text-2xl font-semibold mb-2  mt-5">Motivasi Belajar</h1>
        <p className="text-sm mb-5">
          Mohon partisipasinya untuk pengembangan aplikasi
        </p>
      </div>
      <div className="absolute left-0  w-full  border-gray-300 mt-32 md:hidden"></div>
      <div className="mt-5 flex flex-col ">
        <div className="flex flex-col">
          <textarea
            name="motivasi"
            id="motivasi"
            cols="20"
            rows="5"
            placeholder="Motivasi belajar"
            className="border-2 border-gray-300 rounded-md p-5"
          ></textarea>
        </div>
      </div>
      <div className="flex mt-52 mb-2 gap-3 justify-center items-center">
        <GoDotFill className={getDotClass(0)} />
        <GoDotFill className={getDotClass(1)} />
        <GoDotFill className={getDotClass(2)} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={"/test-ilmu-islam"}>
          <button
            className={` text-white flex p-2 rounded-md  w-[350px] items-center justify-center ${
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

export default SurveiTiga;

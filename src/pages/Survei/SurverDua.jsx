import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useTheme } from "../../context/themeContext";

const SurveiDua = () => {
  const location = useLocation();
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
    <div className=" flex flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
     
      <div className="mt-16 flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-2 mt-4">
            Mengetahui Learn Quiz dari
          </h1>
          <p>Mohon partisipasinya untuk pengembangan aplikasi</p>
          <div className="flex gap-5 mt-5 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Teman/saudara</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Guru/lembaga</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Whatsapp</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Instagram</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Youtube</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Twitter</label>
          </div>
          <div className="flex gap-5 mt-3">
            <input type="checkbox" />
            <label htmlFor="">Facebook</label>
          </div>
        </div>
      </div>
      <div className="flex mt-24 mb-2 gap-3 justify-center items-center">
        <GoDotFill className={getDotClass(0)} />
        <GoDotFill className={getDotClass(1)} />
        <GoDotFill className={getDotClass(2)} />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Link to="/survei-tiga">
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

export default SurveiDua;

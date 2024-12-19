import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/themeContext";

const LoginRegister = () => {
  const { theme } = useTheme();
  const location = useLocation();

   const getBorderColor = () => {
     switch (theme) {
       case "dark":
         return "border-gray-700";
       case "cupcake":
         return "border-pink-500";
       case "bumblebee":
         return "border-yellow-500";
       default:
         return "border-blue-700";
     }
   };

 
  return (
    <div className="p-5 h-screen">
      {/* Slider */}
      <div className="w-full h-[250px] rounded-lg p-20">
        <div>
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col  mt-32">
        <h1 className="text-xl font-semibold mt-10 p-3 ">
          Sebelum belajar, Daftar atau Login terlebih dahulu ya
        </h1>

        <div className="flex flex-col gap-5 mt-8">
          <Link to={"/register"}>
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
              Daftar
            </button>
          </Link>
          <Link to={"/login"}>
            <button className={`p-2 w-[350px] border rounded-md ${getBorderColor()}`}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

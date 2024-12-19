import React, { useState } from "react";    
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/themeContext";

const Register = () => {
  const { theme } = useTheme();

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
    <div
      
    >
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
      <div className="flex flex-col justify-center items-center  p-3 mt-32">
        <h1 className="text-xl font-semibold mt-10 p-3 ">
          Sebelum belajar, Daftar atau Login terlebih dahulu ya
        </h1>

        <div className="flex flex-col gap-5 mt-10">
          <Link to={"/register-email"}>
            <button
              className={`p-2 w-[350px] rounded-lg ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : theme === "cupcake"
                  ? "bg-pink-500 text-white"
                  : theme === "bumblebee"
                  ? "bg-yellow-500 text-white"
                  : "bg-blue-700 text-white"
              }`}
            >
              Daftar dengan Email
            </button>
          </Link>
          <Link to={"/register-gmail"}>
            <button
              className={`p-2 w-[350px]  border rounded-md ${
                getBorderColor()
              }`}
            >
              Daftar dengan Googlee
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

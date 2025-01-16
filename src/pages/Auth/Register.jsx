import React, { useState } from "react";    
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Register = () => {
  const { getButtonClass, getBorderClass,  } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Slider */}
      <div className="w-full h-[250px] rounded-lg p-20">
        <div className="w-full  h-[280px] flex justify-center items-center">
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col   mt-44">
        <h2 className="text-xl font-medium mt-12 mb-7  ">
          Terdapat dua pilihan pendaftaran
        </h2>

        <div className="flex flex-col gap-3 mt-3">
          <Link to={"/register-email"}>
            <button
              className={`p-3 w-[350px] border-none rounded-xl ${getButtonClass()}`}
            >
              Daftar dengan Email
            </button>
          </Link>
          <Link to={"/register-gmail"}>
            <button
              className={`p-3 w-[350px] border-none rounded-xl ${getBorderClass()}`}
            >
              Daftar dengan Google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";    
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Register = () => {
  const { getButtonClass, getBorderClass,  } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Slider */}
      <div className="w-full max-w-screen-lg h-[250px] rounded-lg ">
        <div className="w-full  p-5 mt-7 flex justify-center items-center">
          <img
            src="/quiz33.png"
            alt="Logo 1"
            className="w-3/4 sm:w-1/2 md:w-1/3 object-contain "
          />
        </div>
      </div>

      {/* Teks informasi */}
      <div className="flex flex-col   mt-10 p-5">
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

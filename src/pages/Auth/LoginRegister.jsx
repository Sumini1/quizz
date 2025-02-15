import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const LoginRegister = () => {
  const { getButtonClass, getBorderClass } = useTheme();

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center p-5 relative">
      {/* Logo */}
      <div className="w-full max-w-md flex justify-center mt-10">
        <img
          src="/quiz33.png"
          alt="Logo 1"
          className="w-3/4 sm:w-1/2 md:w-1/3 object-contain"
        />
      </div>

      {/* Informasi */}
      <div className="flex flex-col flex-grow max-w-md w-full mt-10">
        <h2 className="text-xl font-medium ">
          Sebelum belajar, Daftar atau Login terlebih dahulu ya
        </h2>
      </div>

      {/* Tombol Daftar & Login */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-md flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full">
          <Link to="/register">
            <button
              className={`p-3 w-full rounded-xl border-none ${getButtonClass()}`}
            >
              Daftar
            </button>
          </Link>
          <Link to="/login">
            <button
              className={`p-3 w-full rounded-xl border-none ${getBorderClass()}`}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Register = () => {
  const { getButtonClass, getBorderClass } = useTheme();

  return (
    <div className="h-screen flex flex-col items-center p-5 relative">
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
          Terdapat dua pilihan pendaftaran
        </h2>
      </div>

      {/* Tombol Daftar & Login */}
      <div className="absolute bottom-0 w-full max-w-md p-5 bg-white ">
        <div className="flex flex-col gap-4 w-full">
          <Link to="/register-email">
            <button
              className={`p-3 w-full rounded-xl border-none ${getButtonClass()}`}
            >
              Daftar dengan email
            </button>
          </Link>
          <Link to="/register-gmail">
            <button
              className={`p-3 w-full rounded-xl border-none ${getBorderClass()}`}
            >
              daftar dengan google
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

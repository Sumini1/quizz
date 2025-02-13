import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaUserAlt } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";

const RegisterGmail = () => {
  const navigate = useNavigate();
  const {
    getButtonClass,
    getBorder,
    getTextTitle,
    getThemeClass,
    getIconTheme,
  } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterGmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen relative px-5">
      {/* Judul EduLearn */}
      <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

      
        {/* Welcome Section */}
        <div className="flex flex-col -mt-44 ">
          <h2 className="text-lg font-semibold mb-2">Daftar dengan Google</h2>
          <p className="text-md">
            Untuk proses lebih lanjut mohon lengkapi data berikut
          </p>
        

        {/* Login Form */}
        <form className="flex flex-col gap-5 w-full mt-16">
          {/* Name */}
          <div
            className={`flex gap-2 items-center rounded-xl p-2 ${getBorder()}`}
          >
            <FaUserAlt className="mx-2" />
            <input
              type="text"
              placeholder="Nama"
              className="flex-grow bg-transparent p-2 rounded-xl outline-none"
            />
          </div>

          {/* Email */}
          <div
            className={`flex gap-2 items-center rounded-xl p-2 ${getBorder()}`}
          >
            <MdEmail className="mx-2" />
            <input
              type="text"
              placeholder="Email"
              className="flex-grow p-2 bg-transparent rounded-xl outline-none"
            />
          </div>

          {/* Phone Number */}
          <div
            className={`flex gap-2 items-center rounded-xl p-2 ${getBorder()}`}
          >
            <MdPhone className="mx-2" />
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="flex-grow p-2 bg-transparent rounded-xl outline-none"
            />
          </div>

          <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-md flex flex-col items-center">
            {/* Submit Button */}
            <button
              onClick={handleRegisterGmail}
              disabled={isLoading}
              className={`p-4 mb-2 w-full mt-5 border-none rounded-xl ${getButtonClass()}`}
            >
              {isLoading ? (
                <FiLoader className="animate-spin inline-block mr-2 " />
              ) : (
                "Daftar"
              )}
            </button>

            {/* Login Redirect */}
            <p className="flex justify-center text-sm">
              Sudah memiliki akun?{" "}
              <span
                className="underline cursor-pointer text-[#2F80ED] mx-2"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* Modal Alert */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4">
            <HiBadgeCheck
              className={`${getIconTheme()} text-5xl border-none rounded-full`}
            />
            <p className="text-lg font-semibold">Mohon tunggu...</p>
            <p className="text-sm text-gray-500">Sedang memproses verifikasi</p>
            <FiLoader className={`text-4xl ${getIconTheme()} animate-spin`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterGmail;

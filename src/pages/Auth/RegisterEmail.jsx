import React, { useState, useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaUserAlt } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Ikon mata
import { FiLoader } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";

const RegisterEmail = () => {
  const {
    getBorder,
    getButtonClass,
    getTextTitle,
    getThemeClass,
    getIconTheme,
  } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Set overflow:hidden hanya saat halaman ini aktif
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Pulihkan scroll saat keluar dari halaman
    };
  }, []);

  const handleRegisterEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 2000); // Simulasi proses verifikasi 2 detik
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center h-screen overflow-hidden relative px-5">
      {/* Judul EduLearn */}
      <h1 className="text-xl font-bold absolute   top-5">EduLearn</h1>

      <div className="-mt-16 flex flex-col">
        <h2 className="text-lg font-semibold mb-2 ">Daftar dengan Email</h2>
        <p className="text-md mb-5">
          Untuk proses lebih lanjut mohon lengkapi data berikut
        </p>

        {/* Login Form */}
        <form className="flex flex-col gap-5 w-full -mt-2">
          {/* name */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center border-2 rounded-xl  p-2  ${getBorder()}`}
          >
            <FaUserAlt className="mx-1" />
            <input
              type="text"
              placeholder="Nama"
              className="flex-grow text-sm p-2 bg-transparent rounded-xl outline-none"
            />
          </div>

          {/* Email Input */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center border-2 rounded-xl p-2  ${getBorder()}`}
          >
            <MdEmail className="mx-1" />
            <input
              type="text"
              placeholder="Email"
              className="flex-grow p-2 text-sm bg-transparent rounded-xl outline-none"
            />
          </div>

          {/* phone number */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center border-2 rounded-xl p-2 ${getBorder()}`}
          >
            <MdPhone className="mx-2" />
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="flex-grow p-2 bg-transparent text-sm rounded-xl outline-none"
            />
          </div>

          {/* Password Input */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()}`}
          >
            <RiLockPasswordFill className="mx-1" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="flex-grow p-2 bg-transparent text-sm rounded-xl outline-none"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <FiEyeOff className="text-lg" />
              ) : (
                <FiEye className="text-lg" />
              )}
            </div>
          </div>

          {/* komfirmasi password */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()}`}
          >
            <RiLockPasswordFill className="mx-1" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Komfirmasi Password"
              className="flex-grow p-2  bg-transparent text-sm rounded-xl outline-none"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <FiEyeOff className="text-lg" />
              ) : (
                <FiEye className="text-lg" />
              )}
            </div>
          </div>

          <div className="fixed bottom-0  left-0 w-full bg-white p-5 shadow-md flex flex-col items-center">
            {/* Google Login Button */}
            <p className="flex justify-center -mt-3">
              Sudah memiliki akun ?{" "}
              <span
                className="underline cursor-pointer text-[#2F80ED] mx-2"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
            <button
              onClick={handleRegisterEmail}
              disabled={isLoading}
              className={`p-3  w-full mt-2  border-none rounded-xl ${getButtonClass()}`}
            >
              {isLoading ? (
                <FiLoader className="animate-spin inline-block mr-2" />
              ) : (
                "Daftar"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Modal alert */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4">
            <HiBadgeCheck
              className={`${getIconTheme()} text-5xl border-none rounded-full`}
            />
            <p className="text-lg font-semibold">Mohon tunggu...</p>
            <p className="text-sm text-gray-500">Sedang memproses verifikasi</p>
            <FiLoader
              style={{ animation: "spin 2s linear infinite" }}
              className={`text-4xl  ${getIconTheme()}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterEmail;

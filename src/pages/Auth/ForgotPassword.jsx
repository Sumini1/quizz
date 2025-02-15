import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";

const ForgotPassword = () => {
  const { getBorder, getButtonClass, getThemeClass, getIconTheme } = useTheme();
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

  const handleVerifikasi = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verifikasi-email");
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between">
      {/* Header */}
      <div className="flex items-center gap-3 mt-5 px-5">
        <FaArrowLeft className="text-2xl cursor-pointer" />
        <h1 className="text-lg font-semibold">Lupa Password</h1>
      </div>

      {/* Form Section */}
      <div className="flex flex-col mx-5 mt-10 text-lg flex-grow">
        <h2 className="font-semibold mb-5">
          Insya Allah, kami bantu pulihkan akun
        </h2>
        <p>Mohon tuliskan email yang terdaftar</p>
        <form className="mt-5">
          <div
            className={`flex gap-2 items-center p-2 rounded-xl border-2 ${getBorder()}`}
          >
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="flex-grow p-1 rounded-md outline-none bg-transparent"
            />
            <div onClick={togglePasswordVisibility} className="cursor-pointer">
              {showPassword ? (
                <FiEyeOff className="text-xl" />
              ) : (
                <FiEye className="text-xl" />
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-md flex flex-col items-center">
        <p className="mb-3 text-center">
          Mau mencoba login?
          <Link to="/login" className="text-blue-600 mx-2">
            Login
          </Link>
        </p>
        <button
          onClick={handleVerifikasi}
          className={`p-4 w-full border-none ${getButtonClass()}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <FiLoader className="animate-spin inline-block mr-2" />
          ) : (
            "Kirim"
          )}
        </button>
      </div>

      {/* Modal Spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4">
            <HiUserCircle
              className={`${getThemeClass()} text-5xl border-none rounded-full`}
            />
            <p className="text-lg font-semibold">Mohon tunggu...</p>
            <p className="text-sm text-gray-500">Sedang memproses verifikasi</p>
            <FiLoader
              style={{ animation: "spin 2s linear infinite" }}
              className={`text-4xl ${getIconTheme()}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

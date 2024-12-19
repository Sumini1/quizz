import React, { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ForgotPassword = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mt-5 px-5">
        <HiOutlineArrowNarrowLeft className="text-3xl cursor-pointer" />
        <h1 className="text-lg font-semibold">Lupa Password</h1>
      </div>

      {/* Form Section */}
      <div className="flex flex-col mx-5 mt-44 text-lg h-full">
        <h1 className="font-semibold mb-2">
          Insya Allah, kami bantu pulihkan akun
        </h1>
        <p>Mohon tuliskan email yang terdaftar</p>
        <form className="mt-5 ">
          <div
            className={`flex gap-2 items-center rounded-lg p-1 relative border ${getBorderColor()}`}
          >
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="flex-grow p-1 rounded-md outline-none bg-transparent"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
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
      <div className="mt-16 flex flex-col justify-center items-center">
        <Link to="/verifikasi-email">
          <button
            className={`p-2 w-[370px] mt-32 rounded-md ${
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
        <p className="mt-3  mb-2 flex items-center">
          Mau mencoba login?
          <Link to="/login">
            <span className="text-blue-600 mx-2">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

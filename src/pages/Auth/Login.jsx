import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Ikon mata

const Login = () => {
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
    <div>
      <div className="w-full max-w-sm p-5 flex flex-col items-center">
        {/* Header */}
        <div className="flex justify-between w-full mb-10">
          <Link to="/">
            <h1 className="text-lg font-bold">EduLearn</h1>
          </Link>
          {/* <Link to="/register">
            <h1 className="text-lg font-bold">Daftar</h1>
          </Link> */}
        </div>

        {/* Welcome Section */}
        <div className=" mb-10">
          <h1 className="text-xl font-semibold mb-2">Ahlan Wa Sahlan</h1>
          <p>
            Alhamdulillah bisa bertemu kembali, Login untuk melanjutkan
            pembelajaran
          </p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-4 w-full">
          {/* Email Input */}
          <div
            className={`flex gap-2 items-center rounded-lg p-2 border ${getBorderColor()}`}
          >
            <MdEmail />
            <input
              type="text"
              placeholder="Email"
              className="flex-grow p-1 rounded-md outline-none bg-transparent"
            />
          </div>

          {/* Password Input */}
          <div
            className={`flex gap-2 items-center rounded-md p-2 relative border ${getBorderColor()}`}
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

          {/* Forgot Password */}
          <Link to="/forgot-password">
            <p className="text-right text-sm">Lupa Password?</p>
          </Link>

          {/* Login Button */}
          <Link to={"/survei-satu"}>
            <button
              className={`p-2 w-full rounded-md ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : theme === "cupcake"
                  ? "bg-pink-500 text-white"
                  : theme === "bumblebee"
                  ? "bg-yellow-500 text-white"
                  : "bg-blue-700 text-white"
              }`}
            >
              Login
            </button>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            className={`p-2 w-full rounded-md ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : theme === "cupcake"
                ? "bg-pink-500 text-white"
                : theme === "bumblebee"
                ? "bg-yellow-500 text-white"
                : "bg-blue-700 text-white"
            }`}
          >
            Login with Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-5">
            Belum Punya Akun?{" "}
            <Link to="/register" className="font-semibold text-orange-600">
              Daftar Disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

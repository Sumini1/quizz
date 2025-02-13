import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const { getBorder, getButtonClass, getBorderClass } = useTheme();
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
     <div className="flex flex-col justify-center min-h-screen relative px-5">
      {/* Judul EduLearn */}
      <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

      <div className="w-full max-w-sm flex flex-col mt-10">
        {/* Welcome Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-2 tracking-wide leading-[1.6]">
            Ahlan Wa Sahlan
          </h2>
          <p>
            Alhamdulillah bisa bertemu kembali, Login untuk melanjutkan
            pembelajaran
          </p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-5 w-full  items-center">
          {/* Email Input */}
          <div
            className={`flex gap-2 items-center rounded-xl p-3 border-2 w-full ${getBorder()}`}
            style={{ backgroundColor: "transparent" }}
          >
            <MdEmail />
            <input
              type="text"
              placeholder="Email"
              className="flex-grow p-2 rounded-md outline-none bg-transparent"
            />
          </div>

          {/* Password Input */}
          <div
            className={`flex gap-2 items-center rounded-xl p-3 relative border-2 w-full ${getBorder()}`}
            style={{ backgroundColor: "transparent" }}
          >
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="flex-grow p-2 rounded-md outline-none bg-transparent"
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
            <p className="ml-[210px] text-sm">Lupa Password?</p>
          </Link>

          {/* Login Button */}
          <Link to="/survei-satu" className="w-full">
            <button
              className={`p-4 w-full border-none rounded-xl ${getButtonClass()}`}
            >
              Login dengan Email
            </button>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full">
            <hr className={`flex-grow border-[1px] ${getBorderClass()}`} />
            <span className="text-gray-500">Atau</span>
            <hr className={`flex-grow border-[1px] ${getBorderClass()}`} />
          </div>

          {/* Google Login Button */}
          <button
            className={`p-4 w-full rounded-xl border-none border-gray-300 ${getBorderClass()}`}
          >
            Login dengan Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-5">
            Belum Punya Akun?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#2F80ED] underline"
            >
              Daftar Disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

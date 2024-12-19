import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { FaUserAlt } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Ikon mata


const RegisterEmail = () => {
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
        <div className="flex justify-between w-full mb-7">
          <Link to="/">
            <h1 className="text-lg font-bold">EduLearn</h1>
          </Link>
          {/* <Link to="/login">
            <h1 className="text-lg font-bold">Login</h1>
          </Link> */}
        </div>

        {/* Welcome Section */}
        <div className=" mb-5">
          <h1 className="text-xl font-semibold mb-3">Ahlan Wa Sahlan</h1>
          <p className="mb-3">
            Alhamdulillah bisa bertemu kembali, Login dengan email untuk
            melanjutkan pembelajaran
          </p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-3 w-full">
          {/* name */}
          <div className={`flex gap-2 items-center border rounded-md p-2 ${getBorderColor()}`}>
            <FaUserAlt />
            <input
              type="text"
              placeholder="Nama"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
          </div>

          <div className={`flex gap-2 items-center border rounded-md p-2 ${getBorderColor()}`}>
            <FaUserAlt />
            <input
              type="text"
              placeholder="Nama User"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
          </div>

          {/* Email Input */}
          <div className={`flex gap-2 items-center border rounded-md p-2 ${getBorderColor()}`}>
            <MdEmail />
            <input
              type="text"
              placeholder="Email"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
          </div>

          {/* phone number */}
          <div className={`flex gap-2 items-center border rounded-md p-2 ${getBorderColor()}`}>
            <MdPhone />
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
          </div>

          {/* Password Input */}
          <div className={`flex gap-2 items-center border rounded-md p-2 relative ${getBorderColor()}`}>
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
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

          {/* komfirmasi password */}
          <div className={`flex gap-2 items-center border rounded-md p-2 relative ${getBorderColor()}`}>
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Komfirmasi Password"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
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

          {/* Google Login Button */}
          <button
            className={`p-2 w-full mt-12 rounded-md ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : theme === "cupcake"
                ? "bg-pink-500 text-white"
                : theme === "bumblebee"
                ? "bg-yellow-500 text-white"
                : "bg-blue-700 text-white"
            }`}
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterEmail;

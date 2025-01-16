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
    }, 2000); // Simulasi proses verifikasi 2 detik
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-5 flex flex-col items-center">
        {/* Header */}
        <div className="flex justify-between w-full mb-7">
          <Link to="/">
            <h1 className="text-xl font-bold mt-2">EduLearn</h1>
          </Link>
        </div>

        {/* Welcome Section */}
        <div className=" mb-7 -mt-2 ">
          <h2 className="text-lg font-semibold mb-2 ">Daftar</h2>
          <p className="text-md ">
            Untuk proses lebih lanjut mohon lengkapi data berikut
          </p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-5 w-full">
          {/* name */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2  items-center rounded-xl p-2 ${getBorder()}`}
          >
            <FaUserAlt className="mx-2" />
            <input
              type="text"
              placeholder="Nama"
              className="flex-grow bg-transparent p-2 rounded-xl outline-none"
            />
          </div>

          {/* <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center rounded-xl p-2  ${getBorder()}`}
          >
            <FaUserAlt />
            <input
              type="text"
              placeholder="Nama User"
              className="flex-grow bg-transparent p-2 rounded-xl outline-none"
            />
          </div> */}

          {/* Email Input */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center rounded-xl p-2 ${getBorder()}`}
          >
            <MdEmail className="mx-2" />
            <input
              type="text"
              placeholder="Email"
              className="flex-grow p-2 bg-transparent rounded-xl outline-none"
            />
          </div>

          {/* phone number */}
          <div
            style={{ backgroundColor: "transparent" }}
            className={`flex gap-2 items-center rounded-xl p-2 ${getBorder()}`}
          >
            <MdPhone className="mx-2" />
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="flex-grow p-2 bg-transparent rounded-xl outline-none"
            />
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleRegisterGmail}
            disabled={isLoading}
            className={`p-4 w-full mt-[150px] border-none rounded-xl ${getButtonClass()}`}
          >
            {isLoading ? (
              <FiLoader className="animate-spin inline-block mr-2" />
            ) : (
              "Daftar"
            )}
          </button>
          <p className="flex justify-center -mt-3">
            Sudah memiliki akun ?{" "}
            <span
              className="underline cursor-pointer text-[#2F80ED] mx-2"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
      {/* alert modal */}
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

export default RegisterGmail;

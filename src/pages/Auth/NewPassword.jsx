import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RiLockPasswordFill, RiCheckboxCircleFill } from "react-icons/ri"; // Import ikon untuk keberhasilan
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Ikon mata
import { HiBadgeCheck } from "react-icons/hi";

const NewPassword = () => {
  const { getBorder, getButtonClass, getThemeClass, getIconTheme } = useTheme();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleResetPassword = (event) => {
    event.preventDefault(); // Mencegah refresh halaman
    console.log("Opening modal..."); // Debugging
    setIsModalOpen(true);
  };

  const handleLogin = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center gap-3 mt-5 px-5">
        <FaArrowLeft className="text-2xl cursor-pointer" />
        <h1 className="text-lg font-semibold">Password Baru</h1>
      </div>

      <div className="flex flex-col mt-12 mx-5 text-lg h-full">
        <h2 className="font-medium text-xlx mb-5">
          Proses Pemulihan Akun Sedikit Lagi...
        </h2>
        <p className="mb-20 text-lg">Mohon tuliskan password baru</p>

        <form
          onSubmit={handleResetPassword}
          className="flex flex-col justify-center gap-5 w-full"
        >
          <div
            className={`flex gap-2 items-center rounded-xl p-2 relative ${getBorder()}`}
          >
            <RiLockPasswordFill className="ml-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password Baru"
              className="flex-grow  pr-10 p-2 bg-transparent rounded-xl outline-none"
            />
            <div
              onClick={togglePasswordVisibility}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer  `}
            >
              {showPassword ? (
                <FiEyeOff className="text-xl" />
              ) : (
                <FiEye className="text-xl" />
              )}
            </div>
          </div>

          <div
            className={`flex gap-3 items-center rounded-xl p-2 relative ${getBorder()}`}
          >
            <RiLockPasswordFill className="ml-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Komfirmasi Password Baru"
              className="flex-grow  pr-10 p-2 bg-transparent rounded-xl outline-none"
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

          <div className="mt-[170px] ">
            <button
              type="submit"
              className={`p-4 w-full border-none rounded-xl ${getButtonClass()}`}
            >
              Kirim
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-7"
          style={{ zIndex: 50 }}
        >
          <div className="bg-[#DCFFD9] p-5 rounded-xl flex flex-col items-center gap-4">
            <HiBadgeCheck
              className={`text-7xl border-none rounded-full  text-[#28A745]`}
            />
            {/* Ikon sukses */}
            <p className="text-lg font-semibold">Password Berhasil Dirubah</p>
            <div className="text-center mb-2">
              <p>Alhamdulillah pemulihan akun selesai</p>
              <p>Silahkan kembali login untuk melanjutkan pembelajaran</p>
            </div>
            <button
              onClick={handleLogin}
              className={`p-3 w-full border-none rounded-xl text-[#FFF] bg-[#28A745]`}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPassword;

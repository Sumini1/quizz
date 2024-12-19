import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiLockPasswordFill, RiCheckboxCircleFill } from "react-icons/ri"; // Import ikon untuk keberhasilan
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Ikon mata

const NewPassword = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
        <HiOutlineArrowNarrowLeft className="text-3xl cursor-pointer" />
        <h1 className="text-lg font-semibold">Password Baru</h1>
      </div>

      <div className="flex flex-col mt-12 mx-5 text-lg h-full">
        <h1 className="font-semibold text-xlx mb-5">
          Proses Pemulihan Akun Sedikit Lagi...
        </h1>
        <p className="mb-20 text-lg">Mohon tuliskan password baru</p>

        <form
          onSubmit={handleResetPassword}
          className="flex flex-col justify-center gap-4 w-full"
        >
          <div
            className={`flex gap-2 border items-center rounded-lg p-1 relative ${getBorderColor()}`}
          >
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password Baru"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
            <div
              onClick={togglePasswordVisibility}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${getBorderColor()}`}
            >
              {showPassword ? (
                <FiEyeOff className="text-xl" />
              ) : (
                <FiEye className="text-xl" />
              )}
            </div>
          </div>

          <div
            className={`flex gap-2  border items-center rounded-md p-1 relative ${getBorderColor()}`}
          >
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Komfirmasi Password Baru"
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

          <div className="mt-52 ">
            <button
              type="submit"
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
              Lanjut
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5"
          style={{ zIndex: 50 }}
        >
          <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4">
            <RiCheckboxCircleFill className="text-5xl text-green-500" />{" "}
            {/* Ikon sukses */}
            <p className="text-lg font-semibold">Password Berhasil Dirubah</p>
            <div className="text-center">
              <p>Alhamdulillah pemulihan akun selesai</p>
              <p>Silahkan kembali login untuk melanjutkan pembelajaran</p>
            </div>
            <button
              onClick={handleLogin}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPassword;

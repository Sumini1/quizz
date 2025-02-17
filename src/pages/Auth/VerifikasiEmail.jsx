import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi"; // Icon avatar
import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

const VerifikasiEmail = () => {
  const { getBorder, getButtonClass, getThemeClass, getIconTheme } = useTheme();
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
      navigate("/new-password");
    }, 2000); // Simulasi proses verifikasi 2 detik
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between">
      <div>
        <div className="flex items-center gap-2 mt-5 px-5">
          <FaArrowLeft className="text-2xl cursor-pointer" />
          <h1 className="text-lg font-semibold">Authentikasi Email</h1>
        </div>

        <div className="flex flex-col mx-5 text-lg">
          <p className="flex mt-5 mb-3">
            Mohon masukkan kode OTP yang sudah dikirimkan ke email
          </p>
          <h2 className="flex mb-10">Budi123@gmail.com</h2>

          <div className="flex gap-3 rounded-md p-1">
            <input
              style={{ backgroundColor: "transparent" }}
              type="text"
              placeholder="0"
              className={`flex-grow p-3 rounded-xl outline-none w-8 text-center ${getBorder()}`}
            />
            <input
              style={{ backgroundColor: "transparent" }}
              type="text"
              placeholder="0"
              className={`flex-grow p-3 rounded-xl outline-none w-8 text-center ${getBorder()}`}
            />
            <input
              style={{ backgroundColor: "transparent" }}
              type="text"
              placeholder="0"
              className={`flex-grow p-3 rounded-xl outline-none w-8 text-center ${getBorder()}`}
            />
            <input
              style={{ backgroundColor: "transparent" }}
              type="text"
              placeholder="0"
              className={`flex-grow p-3 rounded-xl outline-none w-8 text-center ${getBorder()}`}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-md flex flex-col items-center">
        <p className="text-sm">
          Belum menerima kode?{" "}
          <Link to="/forgot-password" className="text-blue-500">
            Kirim ulang
          </Link>
        </p>
        <button
          onClick={handleVerifikasi}
          className={`p-3 w-full mt-3 border-none rounded-xl ${getButtonClass()}`}
          disabled={isLoading}
        >
          {isLoading ? "Mohon tunggu..." : "Kirim"}
        </button>
      </div>

      {/* Alert Modal */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4 relative">
            <HiUserCircle
              className={`${getThemeClass()} text-5xl border-none rounded-full`}
            />
            <p className="text-lg font-semibold">Mohon tunggu...</p>
            <p className="text-sm text-gray-500">Sedang memproses verifikasi</p>
            <FiLoader
              className={`text-4xl animate-spin mt-4 ${getIconTheme()}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifikasiEmail;

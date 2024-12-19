import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi"; // Icon avatar
import { Link } from "react-router-dom";

const VerifikasiEmail = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifikasi = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/new-password");
    }, 2000); // Simulasi proses verifikasi 2 detik
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="flex items-center gap-2 mt-5 px-5">
        <HiOutlineArrowNarrowLeft className="text-3xl cursor-pointer" />
        <h1 className="text-lg font-semibold">Verifikasi Email</h1>
      </div>

      <div className="flex flex-col mx-5 mt-10 text-lg">
        <p className="flex mt-10">
          Mohon masukkan kode OTP yang sudah dikirimkan ke email
        </p>
        <p className="flex  mt-10">
          Masukkan Kode OTP
        </p>

        {/* <form action="" className="mt-5"></form> */}
        <div className="flex gap-2 mt-10  rounded-md p-5 ">
          <input
            type="text"
            placeholder="0"
            className="flex-grow p-2 rounded-md outline-none w-10 text-center"
          />
          <input
            type="text"
            placeholder="0"
            className="flex-grow p-2 rounded-md outline-none w-10 text-center"
          />
          <input
            type="text"
            placeholder="0"
            className="flex-grow p-2 rounded-md outline-none w-10 text-center"
          />
          <input
            type="text"
            placeholder="0"
            className="flex-grow p-2 rounded-md outline-none w-10 text-center"
          />
          <input
            type="text"
            placeholder="0"
            className="flex-grow p-2 rounded-md outline-none w-10 text-center"
          />
        </div>

        <div className="flex flex-col items-center mt-28">
          <button
            onClick={handleVerifikasi}
            className={`p-2 w-[370px] mt-20 rounded-md ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : theme === "cupcake"
                ? "bg-pink-500 text-white"
                : theme === "bumblebee"
                ? "bg-yellow-500 text-white"
                : "bg-blue-700 text-white"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Mohon tunggu..." : "Verifikasi"}
          </button>
          <p className="text-sm mt-2">
            Belum menerima kode?{" "}
            <Link to="/lupa-password" className="text-blue-500">
              Kirim ulang
            </Link>
          </p>
        </div>
      </div>

      {/* Alert Modal */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md flex flex-col items-center gap-2">
            <HiUserCircle className="text-5xl text-blue-500" />
            <p className="text-lg font-semibold">Mohon tunggu...</p>
            <p className="text-sm text-gray-500">Sedang memproses verifikasi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifikasiEmail;

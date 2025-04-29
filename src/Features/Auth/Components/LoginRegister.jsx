import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import Button from "../../../components/ListButton/Button";

const LoginRegister = () => {
  const { getButtonClass, getBorderClass, middleTheme } = useTheme();

  // Set overflow:hidden hanya saat halaman ini aktif
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Pulihkan scroll saat keluar dari halaman
    };
  }, []);

  return (
    <div className=" w-full  mx-auto h-screen overflow-hidden  md:p-0 flex flex-col">
      <div
        className={`w-full max-w-md mx-auto h-screen overflow-hidden  flex flex-col ${middleTheme()}`}
      >
        <div className="flex flex-col flex-grow items-center justify-center">
          {/* Gambar di Atas */}
          <img
            src="/quiz2.png"
            alt="Quiz 2"
            className="w-[300px] h-[200px] object-contain -mt-28 md:-mt-40"
          />

          {/* Teks di Tengah */}
          <div className="mt-36 w-full px-5">
            <h2 className="text-xl font-semibold mb-2">
              Mulai Perjalanan Menuntut Ilmu
            </h2>
            <p className="text-lg font-medium">
              Kami menyediakan sistem belajar yang menarik agar peserta merasa
              senang
            </p>
          </div>
        </div>

        {/* Tombol Fixed di Bawah */}
        <div className="fixed bottom-0 left-0 right-0 px-5 py-3  max-w-md mx-auto gap-y-5 flex flex-col">
          <Button
            to="/register-email"
            className={`${getButtonClass()} text-base font-medium`}
          >
            Daftar
          </Button>
          <Button to="/login" className={`${getBorderClass()} text-base font-medium`}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;

 
import React, { useEffect, useState } from "react";
import { FaUserCheck } from "react-icons/fa6";
import { TbAlarmFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { useTheme } from "../../context/themeContext";

const IntroTestDua = () => {
  const { theme } = useTheme();
  const [totalTime, setTotalTime] = useState(0); // State untuk total waktu pengerjaan
  const [score, setScore] = useState(0); // State untuk nilai akhir

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

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-blue-700 text-white";
  };

  useEffect(() => {
    // Ambil total waktu pengerjaan dan progres dari localStorage
    const savedTime = Number(localStorage.getItem("totalTime")) || 0;
    const progress = Number(localStorage.getItem("progress")) || 0;

    setTotalTime(savedTime);
    setScore(progress); // Skor diambil langsung dari progres
  }, []);

  
  // Fungsi untuk format waktu menjadi menit (atau desimal jika < 1 menit)
  const formatTime = (time) => {
    const minutes = time / 60; // Konversi waktu ke menit
    if (minutes < 1) {
      return `${minutes.toFixed(1)} menit`;
    }
    return `${Math.floor(minutes)} menit`;
  };

  return (
    <div className="flex flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      <div className="mt-5 flex flex-col h-4 mb-2 justify-center items-center">
        <div className="absolute left-0 w-full border-b-2 md:hidden"></div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-2 mt-2">
          Alhamdulillah Selesai
        </h1>
      </div>

      <div className="absolute left-0 w-full border-b-2 mt-28 md:hidden"></div>

      <div className="mt-5 flex justify-center items-center mx-auto">
        <p className="text-lg mt-20 flex mb-10">
          "Bersyukurlah atas segala apa yang Allah ta'ala berikan"
        </p>
      </div>

      <div className="flex gap-5 justify-center items-center mt-10">
        <div
          className={`border ${getBorderColor()} p-5 flex flex-col gap-2 items-center`}
        >
          <h1 className="text-lg font-semibold">Penilaian</h1>
          <FaUserCheck className="text-2xl text-green-600" />
          <p className="text-lg font-bold">{score} / 100</p>
        </div>
        <div
          className={`border ${getBorderColor()} p-5 flex flex-col gap-2 items-center`}
        >
          <h1 className="text-lg font-semibold">Waktu</h1>
          <TbAlarmFilled className="text-2xl text-blue-600" />
          <p className="text-lg font-bold">{formatTime(totalTime)}</p>
        </div>
      </div>

      <div className={`flex gap-3 mt-28 w-[250px]`}>
        <Link to={"/pilih-category"}>
          <button
            className={`flex p-2 rounded-md w-[300px] items-center justify-center ${getThemeClass()}`}
          >
            Lanjut
          </button>
        </Link>

        <button className="flex p-3 rounded-md w-[70px] items-center justify-center">
          <FaBook className="text-2xl -mt-1" />
        </button>
      </div>
    </div>
  );
};

export default IntroTestDua;

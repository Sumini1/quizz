import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useTheme } from "../../context/ThemeContext";
import { HiBadgeCheck } from "react-icons/hi";
import { MdFactCheck } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import { RiCoinFill } from "react-icons/ri";

const IntroTestDua = () => {
  const { theme, getIconTheme, getBorderColor } = useTheme();
  const [totalTime, setTotalTime] = useState(0);
  const [score, setScore] = useState(0);
  const [celebrationMessage, setCelebrationMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(true); // State untuk
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/pilih-category");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-[#0961F5] text-white";
  };
  const getButtonColor = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-[#F59D09] text-white";
  };

  useEffect(() => {
    const savedTime = Number(localStorage.getItem("totalTime")) || 0;
    const progress = Number(localStorage.getItem("progress")) || 0;

    setTotalTime(savedTime);
    setScore(progress);
    setCelebrationMessage(
      "🎉 Selamat! Anda telah menyelesaikan tes dengan sukses! 🎉"
    );
    setTimeout(() => setShowConfetti(false), 8000);
  }, []);

  const formatTime = (time) => {
    const minutes = time / 60;
    if (minutes < 1) {
      return `${minutes.toFixed(1)} menit`;
    }
    return `${Math.floor(minutes)} menit`;
  };

  const items = [
    {
      id: 1,
      title: "Point Diperoleh",
      icon: <MdFactCheck className="text-2xl " />,
      value: `${score} %`,
    },
    {
      id: 2,
      title: "Waktu",
      icon: <FaHourglassEnd className="text-2xl " />,
      value: formatTime(totalTime),
    },
    {
      id: 3,
      title: "Penilaian",
      icon: <RiCoinFill className="text-2xl " />,
      value: "100",
    },
  ];

  return (
    <div className="flex flex-col p-5 h-screen py-16 ">
      {showConfetti && <Confetti />} {/* Tampilkan kembang api */}
      {/* {celebrationMessage && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 text-center">
          {celebrationMessage}
        </div>
      )} */}
      <div className="mt-5 flex flex-col h-4 mb-2 justify-center items-center"></div>
      <div className="flex flex-col ">
        <h1 className="text-lg font-[500] mb-4 -mt-7 ">
          Alhamdulillah Tes Pengetahuan islam Selesai
        </h1>
      </div>
      <div className=" flex justify-center items-center mx-auto">
        <p className="text-md font-[500] flex mb-10">
          "Bersyukurlah atas segala apa yang Allah ta'ala berikan"
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-auto justify-center items-center mt-12">
        {items.map((item) => (
          <div
            key={item.id}
            className={`border ${getBorderColor()} p-4 flex flex-col justify-between items-center rounded-lg shadow-md w-[110px] h-[110px]`}
          >
            <div className="flex  items-center gap-2 mb-3">
              <span className={`text-2xl text-[#F59D09]`}>{item.icon}</span>
              <p className="text-sm font-medium text-center">{item.value}</p>
            </div>
            <h1 className="text-sm font-medium text-center">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-[155px]">
        <Link to={"/accordion"}>
          <button
            className={`flex p-3 rounded-xl w-[355px] items-center justify-center ${getButtonColor()}`}
          >
            Ulasan
          </button>
        </Link>

        <button
          onClick={handleOpenModal}
          type="submit"
          className={`flex p-3 rounded-xl w-[355px] items-center justify-center ${getThemeClass()}`}
        >
          Lanjut
        </button>
      </div>
      {/* alert modal */}
      {isModalOpen && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-7"
          style={{ zIndex: 50 }}
        >
          <div className="bg-[#DCFFD9] p-5 rounded-xl flex flex-col items-center gap-4 ">
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
              onClick={handleCloseModal}
              className={`p-3 w-full border-none rounded-xl text-[#FFF] bg-[#28A745]`}
            >
              Lanjut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroTestDua;

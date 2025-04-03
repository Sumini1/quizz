import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { useTheme } from "../../../../../../context/ThemeContext";
import { HiBadgeCheck } from "react-icons/hi";
import { MdFactCheck } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import { RiCoinFill } from "react-icons/ri";
import { MdOutlineError } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const FinalScored = () => {
  const { theme, getIconTheme, getBorderColor, getIconColorAlert } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [celebrationMessage, setCelebrationMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if state was passed from the quiz page
    if (location.state) {
      const { score, totalQuestions, timeTaken } = location.state;
      setScore(score);
      setTotalQuestions(totalQuestions);
      setTotalTime(timeTaken);

      setCelebrationMessage(
        "🎉 Selamat! Anda telah menyelesaikan tes dengan sukses! 🎉"
      );
      setTimeout(() => setShowConfetti(false), 8000);
    } else {
      // Redirect if no quiz result data
      navigate("/beranda");
    }
  }, [location.state, navigate]);

 const formatTime = (time) => {
   if (time < 60) {
     // Jika kurang dari 60 detik, tampilkan dalam detik
     return `${time} detik`;
   } else {
     // Jika 60 detik atau lebih, tampilkan dalam menit
     const minutes = Math.floor(time / 60);
     const seconds = time % 60;

     if (seconds === 0) {
       return `${minutes} menit`;
     } else {
       return `${minutes} menit ${seconds} detik`;
     }
   }
 };

  const calculatePercentage = () => {
    return ((score / totalQuestions) * 100).toFixed(0);
  };

  const items = [
    {
      id: 1,
      title: "Point Diperoleh",
      icon: <MdFactCheck className="text-xl" />,
      value: `${calculatePercentage()} %`,
    },
    {
      id: 2,
      title: "Waktu",
      icon: <FaHourglassEnd className="text-xl" />,
      value: formatTime(totalTime),
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/test/data-diri-lanjutan");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden py-12 mx-auto">
        {showConfetti && <Confetti />}
        <div className="flex flex-col p-5 bg-[#DCE6F8]">
          <div className="flex gap-2">
            <h2 className="text-base font-semibold mb-2">
              Hanya dengan Rp. 10.000
            </h2>
            <MdOutlineError className={`${getIconColorAlert()}`} />
          </div>
          <p>
            Kontribusi dalam
            <span className="text-base font-semibold ml-1">
              {" "}
              pembuatan satu soal{" "}
            </span>
            untuk
            <span className="text-base font-semibold ml-1 mr-1">
              {" "}
              mewujudkan pendidikan islam gratis{" "}
            </span>
            kaum muslimin dan umum.
          </p>
        </div>
        {/* Content */}
        <div className="flex flex-col p-5 ">
          <h1 className="text-xl font-medium mb-4 ">
            Alhamdulillah Tes Pengetahuan Islam Selesai
          </h1>
          <p className="text-md font-medium mb-10">
            "Bersyukurlah atas segala apa yang Allah ta'ala berikan"
          </p>
          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`border ${getBorderColor()} p-4 flex flex-col items-center rounded-lg shadow-md w-24 h-[110px]`}
                >
                  <div className="flex gap-2 justify-center items-center mx-auto">
                    <h1 className="text-2xl text-[#F59D09]">{item.icon}</h1>
                    <p className="text-xs font-medium text-center">
                      {item.value}
                    </p>
                  </div>
                  <h1
                    className={`text-sm font-medium text-center ${
                      item.id === 2 ? "mt-5" : item.id === 3 ? "mt-8" : "mt-3"
                    }`}
                  >
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col fixed bottom-0 p-5 justify-center items-center gap-4 mt-20 w-full mx-auto">
          <Link to="/ulasan-soal" className="w-full">
            <button className="p-3 rounded-xl w-full text-white bg-[#F59D09]">
              Ulasan
            </button>
          </Link>
          <button
            onClick={handleOpenModal}
            className="p-3 rounded-xl w-full text-white bg-[#0961F5]"
          >
            Lanjut
          </button>
        </div>
        {isModalOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-7 z-50">
            <div className="bg-[#DCFFD9] p-5 rounded-xl flex flex-col w-[350px] items-center gap-4">
              <HiBadgeCheck className="text-7xl text-[#28A745]" />
              <p className="text-lg font-semibold">Mulai Tahapan Belajar</p>
              <div className="flex flex-col">
                <p className="text-center mb-2"> Setelah ini akan memilih</p>
                <p className="flex flex-wrap justify-center text-center gap-1 items-center text-base font-medium">
                  Tingkat
                  <FaArrowRight />
                  <span>Kategory</span>
                  <FaArrowRight />
                  <span>Tema</span>
                  <FaArrowRight />
                  <span>Pelajaran</span>
                  <FaArrowRight />
                  <span>Materi</span>
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-3 w-full rounded-xl text-white bg-[#28A745]"
              >
                Lanjut
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FinalScored;

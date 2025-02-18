import React, { useState, useEffect } from "react";
import { FaBook, FaQuestion } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../../../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const PageDuaKeimanan = () => {
  const {
    theme,
    getBorder,
    getIconBookSoal,
    getButton,
    getThemeLatar,
    getTextSoal,
    getThemeTooltif,
    getThemeClassPage,
  } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isModalAnswerVisible, setIsModalAnswerVisible] = useState(false);
  const [isModalReferensiVisible, setIsModalReferensiVisible] = useState(false);

  // Set overflow:hidden hanya saat halaman ini aktif
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Pulihkan scroll saat keluar dari halaman
    };
  }, []);
  const handleModalRefensi = () => {
    setIsModalReferensiVisible(true);
  };

  const handleModalAnswer = () => {
    setIsModalAnswerVisible(true);
  };

  useEffect(() => {
    const savedProgress = Number(localStorage.getItem("progress"));
    if (savedProgress) {
      setProgress(savedProgress);
      setStartTime(Date.now());
    }
  }, []);

  const handleAnswer = (isCorrect, answerIndex) => {
    setSelectedAnswer(answerIndex);
    setIsAnswerCorrect(isCorrect);
    setIsAnswered(true);
  };

  const handleCheck = () => {
    const endTime = Date.now();
    const timeTaken = Math.round((endTime - startTime) / 1000); // Calculate time in seconds

    // Update total time in localStorage
    let totalTime = Number(localStorage.getItem("totalTime")) || 0;
    totalTime += timeTaken;
    localStorage.setItem("totalTime", totalTime);
    if (isAnswered) {
      setIsModalVisible(true); // Modal muncul setelah menjawab
      if (isAnswerCorrect) {
        const newProgress = Math.min(progress + 10, 100);
        setProgress(newProgress);
        localStorage.setItem("progress", newProgress);

        const endTime = Date.now();
        const timeTaken = Math.round((endTime - startTime) / 1000);

        let totalTime = Number(localStorage.getItem("totalTime")) || 0;
        totalTime += timeTaken;
        localStorage.setItem("totalTime", totalTime);

        console.log(`Waktu pengerjaan soal ini: ${timeTaken} detik`);
        console.log(`Total waktu pengerjaan: ${totalTime} detik`);
      }
    } else {
      alert("Silakan pilih jawaban terlebih dahulu.");
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setIsAnswered(false);
    setSelectedAnswer(null);
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalReferensiVisible(false);
    }
  };

  return (
    <div className="flex flex-col p-5 h-screen overflow-hidden md:justify-start md:items-start md:ml-10 md:py-10 ">
      {/* Progress Bar */}
      <div className="flex flex-col h-4 mb-2 mt-2 w-full">
        <div className="flex w-full h-2 ">
          <IoClose className=" -mt-3 text-3xl font-bold items-center -ml-2" />

          <div className="w-full bg-gray-200 rounded-sm max-w-[265px] mx-1 -mt-1">
            <div
              className={`h-full rounded-sm ${getThemeClassPage()}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* materi donatur */}
      <div className="flex items-center  justify-between mt-5">
        <div className="flex gap-2 items-center bg-[#FFF2DC] p-2 rounded-xl">
          <FaBook className="text-[#F59D09]" />
          <h1 className="text-base font-medium">Materi</h1>
        </div>
        <div className="flex gap-2 items-center bg-[#DCE6F8] p-2 rounded-xl">
          <FaHeart className="text-[#0961F5]" />
          <h1 className="text-base font-medium">Donatur</h1>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-10">
          <h1 className="text-lg font-medium">
            Sebutkan rukun iman yang ke-2 ?
          </h1>
        </div>
        <div className="flex flex-col  gap-5 mt-10 ">
          {[
            "Iman kepada Allah ",
            "Iman kepada rasul-rasul Allah ",
            "Iman kepada malaikat-malaikat Allah",
            "Iman kepada hari akhir",
          ].map((answer, index) => (
            <h5
              key={index}
              className={`flex border ${getBorder()} p-2 w-full text-center px-5 cursor-pointer rounded-md ${
                selectedAnswer === index
                  ? `${getThemeClassPage()} border-none`
                  : ""
              }`}
              onClick={() => handleAnswer(index === 1, index)}
              style={{
                color:
                  selectedAnswer === index
                    ? "text-white"
                    : `${getThemeClassPage()}`,
              }}
            >
              {answer}
            </h5>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-3 shadow-md flex justify-between gap-2">
        <button
          className={`p-3 w-[370px] rounded-xl border-none ${getButton()} ${
            selectedAnswer !== null ? `${getThemeClassPage()} border-none` : ""
          }`}
          onClick={handleCheck}
        >
          Cek
        </button>
        <FaBook
          onClick={handleModalRefensi}
          className={`border text-4xl mt-1 ${getIconBookSoal()}`}
        />
      </div>

      {/* ModalReferensi */}
      {isModalReferensiVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div
            className={`rounded-lg p-5 w-96 relative`}
            onClick={handleOverlayClick}
          >
            <ModalReferensi
              setIsModalReferensiVisible={setIsModalReferensiVisible}
              getThemeLatar={getThemeLatar}
              getThemeClassPage={getThemeClassPage}
              getTextSoal={getTextSoal}
            />
          </div>
        </div>
      )}

      {/* Modal Dari jawaban salah dan benar */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`rounded-xl rounded-b-none fixed bottom-0 p-6 w-96  mt-[550px] items-center justify-center  ${
              isAnswerCorrect ? "bg-[#DCFFD9]" : "bg-[#FFD9D9]"
            }`}
          >
            <div className="flex">
              <button
                className="top-2 flex text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              ></button>
              <h2
                className={`text-xl font-bold mb-4 w-full flex 
                     }`}
                style={{ color: isAnswerCorrect ? "#28A745" : "#A74828" }}
              >
                {isAnswerCorrect ? "Benar!" : "Salah!"}
              </h2>

              <div className="flex h-auto mx-2  ">
                {isAnswerCorrect ? (
                  <FaCheckCircle className="text-green-500 text-3xl " />
                ) : (
                  <span className="bg-[#A74828] w-full h-[30px] rounded-lg ">
                    <IoClose className="text-white text-3xl font-semibold  " />
                  </span>
                )}
              </div>
              <div className="mt-5">
                <p className="">
                  <MdMenuBook
                    onClick={handleModalAnswer}
                    className={`text-5xl  bg-white  w-[50px] h-[50px]  -mt-7 ml-[180px] p-2 rounded-full ${
                      isAnswerCorrect
                        ? "text-[#F59D09] "
                        : "text-[#F59D09] bg-[#FEEFB3]"
                    }`}
                  />
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <Link to={"/page-tiga-keimanan"}>
                <button
                  className={`p-3 w-[340px] rounded-xl mt-4 text-white ${
                    isAnswerCorrect ? "bg-green-500" : "bg-[#A74828]"
                  }`}
                  onClick={closeModal}
                >
                  Lanjut
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modal Answer ketika jawaban benar ketik Icon buku */}
      {isModalAnswerVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5 "
          onClick={() => setIsModalAnswerVisible(false)}
        >
          <div className="bg-[#DCFFD9] rounded-lg w-96 relative ">
            <ModalAnswer setIsModalAnswerVisible={setIsModalAnswerVisible} />
          </div>
        </div>
      )}
    </div>
  );
};

// Modal Answer Penjelasan
const ModalAnswer = ({ setIsModalAnswerVisible }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col rounded-lg bg-[#DCFFD9] p-5">
      {/* Sticky heading */}
      <h1 className="text-[20px] font-[500] mb-3 sticky top-0  z-10">
        Penjelasan{" "}
        <span className="text-[#28A745] text-[20px] font-[500]">Jawaban</span>
      </h1>

      {/* Konten scrollable */}
      <div className="text-[16px] overflow-y-scroll max-h-[400px] font-[300]">
        <p className="mb-2">
          Rukun iman ketiga adalah beriman kitab-kitabya. Beriman kepada kitab
          yang Allah ta’ala turunkan wajib diimani oleh setiap muslim bukan
          hanya Al-Qur’an namun juga kitab-kitab sebelumnya seperti zabur,
          taurat dan injil. Adapun urutan ketiga beriman kepada kitab ada di
          Hadist Jibril yang berbunyi
        </p>
        <p className="mb-2">
          Dalil yang paling jelas dan langsung tentang urutan rukun iman adalah
          Hadis Jibril:
        </p>
        <p>
          Hadis Riwayat Muslim (No. 8) Dari Umar bin Khattab radhiyallahu 'anhu,
          ia berkata: Suatu hari kami duduk bersama Rasulullah ﷺ, lalu datang
          seorang laki-laki berpakaian sangat putih dan berambut sangat hitam
          (Jibril). Ia bertanya: "Wahai Muhammad, kabarkan kepadaku tentang
          iman." Rasulullah ﷺ menjawab:
        </p>
        <p>
          "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya,
          kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman
          kepada takdir yang baik maupun yang buruk."
        </p>
        <p>
          Hadis ini secara eksplisit menyebutkan urutan rukun iman yang menjadi
          dasar keyakinan umat Islam.
        </p>
      </div>

      {/* Sticky button */}
      <button
        onClick={() => setIsModalAnswerVisible(false)}
        className={`p-2 w-full rounded-xl mt-4 sticky bottom-0 z-10 bg-[#28A745] text-[#DCFFD9]  text-[16px] font-[400]`}
      >
        Selesai Membaca
      </button>
    </div>
  );
};

// Modal Referensi
const ModalReferensi = ({
  setIsModalReferensiVisible,
  getThemeLatar,
  getTextSoal,
}) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col p-5 rounded-lg ${getThemeLatar()}`}>
      <h1 className="text-xl font-bold mb-3  z-10 sticky top-0">
        Bantuan <span className={`${getTextSoal()} mx-1`}>Soal</span>
      </h1>
      <div className="text-[16px] font-[300] mb-3">
        <p>
          Dalil yang paling jelas dan langsung tentang urutan rukun iman adalah
          Hadis Jibril:
        </p>
        <p>
          Hadis Riwayat Muslim (No. 8) Dari Umar bin Khattab radhiyallahu 'anhu,
          ia berkata: Suatu hari kami duduk bersama Rasulullah ﷺ, lalu datang
          seorang laki-laki berpakaian sangat putih dan berambut sangat hitam
          (Jibril). Ia bertanya: "Wahai Muhammad, kabarkan kepadaku tentang
          iman." Rasulullah ﷺ menjawab:
        </p>
        <p>
          "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya,
          kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman
          kepada takdir yang baik maupun yang buruk."
        </p>
        <p>
          Hadis ini secara eksplisit menyebutkan urutan rukun iman yang menjadi
          dasar keyakinan umat Islam.
        </p>
      </div>
      {/* Tombol Sticky */}
      <button
        onClick={() => setIsModalReferensiVisible(false)}
        className={`p-3 w-full rounded-xl mt-4 sticky bottom-0  z-10 bg-[#F59D09] text-[#FFF1DA]`}
      >
        Selesai Membaca
      </button>
    </div>
  );
};

export default PageDuaKeimanan;

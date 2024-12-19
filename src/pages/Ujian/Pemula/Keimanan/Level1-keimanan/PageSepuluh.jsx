import React, { useState, useEffect } from "react";
import { FaBook, FaQuestion } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../../../../../context/themeContext";
import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";

const PageSepuluh = () => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isModalAnswerVisible, setIsModalAnswerVisible] = useState(false);
  const [isModalReferensiVisible, setIsModalReferensiVisible] = useState(false);

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

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-blue-700 text-white";
  };

  return (
    <div className="flex flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      {/* Progress Bar */}
      <div className="flex flex-col h-4 mb-2 mt-3">
        <div className="flex w-[300px] h-2 ">
          <IoClose className="mr-1 -mt-2 text-xl" />

          <div className="w-full bg-gray-200 rounded-sm left-10 -mt-1">
            <div
              className={`h-full rounded-sm ${getThemeClass()}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-24">
          <h1 className="text-lg">
            Apa itu syahadat ?
          </h1>
        </div>
        <div className="flex flex-col   gap-5 mt-10 ">
          {[
            "Ucapan pujian",
            "Tantangan iman",
            "Pernyataan keimanan",
            "Zakat wajib",
          ].map((answer, index) => (
            <p
              key={index}
              className={`flex border p-2 w-full   cursor-pointer   rounded-md ${
                selectedAnswer === index ? getThemeClass() : ""
              }`}
              onClick={() => handleAnswer(index === 2, index)}
              style={{
                color: selectedAnswer === index ? "white" : getThemeClass(),
              }}
            >
              {answer}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-5 mt-36 w-full">
        <button
          className={`p-2 w-[300px] rounded-md ${getThemeClass()}`}
          onClick={handleCheck}
        >
          Cek
        </button>
        <FaBook onClick={handleModalRefensi} className="border text-3xl mt-1" />
      </div>

      {/* ModalReferensi */}
      {isModalReferensiVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 w-96 relative  ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalReferensiVisible(false)}
            >
              <IoClose className="text-2xl" />
            </button>
            <ModalReferensi
              setIsModalReferensiVisible={setIsModalReferensiVisible}
            />
          </div>
        </div>
      )}

      {/* Modal Dari jawaban salah dan benar */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 w-96  mt-[550px] items-center justify-center">
            <div className="flex ">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              ></button>
              <h2
                className={`text-xl font-bold mb-4 w-full items-center flex mx-auto ${
                  isAnswerCorrect ? "text-green-500" : "text-rose-600"
                }`}
              >
                {isAnswerCorrect
                  ? "Jawaban Anda Benar!"
                  : "Jawaban Anda Salah!"}
              </h2>
              {isAnswerCorrect ? (
                <FaCheckCircle className="text-green-500 text-4xl mr-24" />
              ) : (
                <IoClose className="text-rose-600 text-4xl mr-24 font-semibold  " />
              )}
            </div>
            <div className="flex gap-5 w-[250px] ">
              <Link to={"/intro-test-dua"}>
                <button
                  className={`p-1 w-[200px] rounded-md mt-4 text-white ${
                    isAnswerCorrect ? "bg-green-500" : "bg-rose-600"
                  }`}
                  onClick={closeModal}
                >
                  Lanjut
                </button>
              </Link>
              {/* Menampilkan FaQuestion jika jawaban salah */}
              {isAnswerCorrect ? (
                <MdMenuBook
                  onClick={handleModalAnswer}
                  className={`text-3xl mt-4 mx-auto ${
                    isAnswerCorrect ? "text-green-500" : "text-rose-600"
                  }`}
                />
              ) : (
                <FaQuestion className="text-3xl mt-4 mx-aut text-rose-600" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Answer ketika jawaban benar ketik Icon buku */}
      {isModalAnswerVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-3 w-96 relative py-5">
            <button
              className="absolute -top-3 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalAnswerVisible(false)}
            >
              <IoClose className="text-2xl mt-5" />
            </button>
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

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-blue-700 text-white";
  };
  return (
    <div className="flex flex-col p-1 ">
      <h1 className="text-xl font-bold mb-3 bg-white sticky top-0 z-10">
        Penjelasan
      </h1>
      <div className="overflow-y-auto max-h-[300px] text-lg">
        <p>
          Dalil yang paling jelas dan langsung tentang urutan rukun iman adalah
          Hadis Jibril alaihissalam pada hadis riwayat Muslim (No. 8) yang
          berbunyi :
        </p>
        <p>
          Dari Umar bin Khattab radhiyallahu 'anhu, ia berkata: Suatu hari kami
          duduk bersama Rasulullah ﷺ, lalu datang seorang laki-laki berpakaian
          sangat putih dan berambut sangat hitam (Jibril). Ia bertanya: "Wahai
          Muhammad, kabarkan kepadaku tentang iman." Rasulullah ﷺ menjawab:
        </p>
        <p>
          "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya,
          kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman
          kepada takdir yang baik maupun yang buruk." Hadis ini secara eksplisit
          menyebutkan urutan rukun iman yang menjadi dasar keyakinan umat Islam.
        </p>
      </div>
      <button
        onClick={() => setIsModalAnswerVisible(false)}
        className={`p-1 w-full rounded-md mt-4 sticky bottom-0 z-10 ${getThemeClass()}`}
      >
        Selesai Membaca
      </button>
    </div>
  );
};

// Modal Referensi
const ModalReferensi = ({ setIsModalReferensiVisible }) => {
  const { theme } = useTheme();

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-blue-700 text-white";
  };
  return (
    <div className="flex flex-col p-1 ">
      <h1 className="text-lg font-bold mb-3 bg-white sticky top-0 z-10">
        Bantuan
      </h1>
      <div className="overflow-y-auto max-h-[400px] text-lg">
        <p>
          Dalil yang paling jelas dan langsung tentang urutan rukun iman adalah
          Hadis Jibril alaihissalam pada hadis riwayat Muslim (No. 8) yang
          berbunyi :
        </p>
        <p>
          Dari Umar bin Khattab radhiyallahu 'anhu, ia berkata: Suatu hari kami
          duduk bersama Rasulullah ﷺ, lalu datang seorang laki-laki berpakaian
          sangat putih dan berambut sangat hitam (Jibril). Ia bertanya: "Wahai
          Muhammad, kabarkan kepadaku tentang iman." Rasulullah ﷺ menjawab:
        </p>
        <p>
          "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya,
          kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman
          kepada takdir yang baik maupun yang buruk." Hadis ini secara eksplisit
          menyebutkan urutan rukun iman yang menjadi dasar keyakinan umat Islam.
        </p>
      </div>
      <button
        onClick={() => setIsModalReferensiVisible(false)}
        className={`p-1 w-full rounded-md mt-4 sticky top-0 z-10  ${getThemeClass()}`}
      >
        Selesai Membaca
      </button>
    </div>
  );
};

export default PageSepuluh;

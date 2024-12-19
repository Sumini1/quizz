import React, { useState, useEffect } from "react";
import { FaBook, FaQuestion } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../../../../../context/themeContext";
import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { TbMapQuestion } from "react-icons/tb";

const PageSatu = () => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isModalAnswerVisible, setIsModalAnswerVisible] = useState(false);
  const [isModalReferensiVisible, setIsModalReferensiVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // const handleTooltipToggle = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  // };

  const handleTooltipToggle = (index) => (e) => {
    e.stopPropagation(); // Mencegah event naik ke parent
    setActiveIndex(activeIndex === index ? null : index);
  };


  const handleModalRefensi = () => {
    setIsModalReferensiVisible(true);
  };

  const handleModalAnswer = () => {
    setIsModalAnswerVisible(true);
  };

  useEffect(() => {
    const currentTime = Date.now();
    setStartTime(currentTime);
    localStorage.removeItem("progress");
    localStorage.removeItem("totalTime");
  }, []);

  const handleAnswer = (isCorrect, answerIndex) => {
    setSelectedAnswer(answerIndex);
    setIsAnswerCorrect(isCorrect);
    setIsAnswered(true);
  };

  const handleCheck = () => {
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

  return (
    <div className="flex flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10 cursor-">
      {/* Progress Bar */}
      <div className="flex flex-col h-4 mb-2 mt-2 ">
        <div className="flex w-[300px] h-2 ">
          <IoClose className="m-1 -mt-3 text-3xl font-bold" />

          <div className="w-full bg-gray-200 rounded-sm left-8 -mt-1">
            <div
              className={`h-full rounded-sm ${getThemeClass()}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-2">
            <span className="italic">
              <TbMapQuestion
                className="text-2xl font-extrabold"
                strokeWidth={2}
              />
            </span>
            <h1 className="text-xl mb-5 italic font-bold">Soal Mudah</h1>
          </div>
          <div className="mt-1">
            <p className="text-lg font-semibold">
              {[
                { word: "Ada", tooltip: null },
                {
                  word: "Berapa",
                  tooltip: null,
                },
                {
                  word: "Rukun",
                  tooltip: "Penjelasan: Menunjukkan keberadaan sesuatu",
                },
                { word: "Islam ?", tooltip: "Jumlah Rukun Islam" },
              ].map((item, index) => (
                <span
                  key={index}
                  className={`relative inline-block mx-1 ${
                    item.tooltip
                      ? "underline decoration-dotted decoration-2"
                      : ""
                  }`}
                  onClick={item.tooltip ? handleTooltipToggle(index) : null} // Kondisional
                >
                  <span>{item.word}</span>
                  {item.tooltip && activeIndex === index && (
                    <div
                      className={`absolute top-full mt-1 w-[150px] p-2 rounded-md text-sm z-10 ${getThemeClass()} shadow-md`}
                    >
                      {item.tooltip}
                    </div>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-10">
          {["Empat", "Lima", "Enam", "Tiga"].map((answer, index) => (
            <p
              key={index}
              className={`flex border ${getBorderColor()} p-2 w-24 text-center items-center justify-center cursor-pointer rounded-md ${
                selectedAnswer === index ? getThemeClass() : ""
              }`}
              onClick={() => handleAnswer(index === 1, index)} // \
              style={{
                color: selectedAnswer === index ? "white" : getThemeClass(),
              }}
            >
              {answer}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-5 mt-[310px] w-full">
        <button
          className={`p-2 w-[370px] rounded-md ${getThemeClass()}`}
          onClick={handleCheck}
        >
          Cek
        </button>
        <FaBook onClick={handleModalRefensi} className="border text-3xl mt-1" />
      </div>

      {/* Modal Referensi */}
      {isModalReferensiVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 w-96 relative  ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalReferensiVisible(false)}
            >
              <IoClose className="text-2xl" />
            </button>
            {/* Wrapper untuk teks scrollable */}
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
                  isAnswerCorrect ? "text-green-500" : "text-[#FF0000]"
                }`}
              >
                {isAnswerCorrect
                  ? "Jawaban Anda Benar!"
                  : "Jawaban Anda Salah!"}
              </h2>
              {isAnswerCorrect ? (
                <FaCheckCircle className="text-green-500 text-4xl mr-24" />
              ) : (
                <IoClose className="text-[#FF0000] text-4xl mr-24 font-semibold  " />
              )}
            </div>
            <div className="flex gap-5 w-[250px]">
              <Link to={"/page-dua"}>
                <button
                  className={`p-1 w-[200px] rounded-md mt-4 text-white ${
                    isAnswerCorrect ? "bg-green-500" : "bg-[#FF0000]"
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
                    isAnswerCorrect ? "text-green-500" : "text-[#FF0000]"
                  }`}
                />
              ) : (
                <FaQuestion className="text-3xl mt-4 mx-aut text-[#FF0000]" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Answer ketika jawaban benar ketik Icon buku */}
      {isModalAnswerVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-3 w-96 relative py-5 ">
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
    <div className="flex flex-col p-1">
      {/* Sticky heading */}
      <h1 className="text-xl font-bold mb-3 sticky top-0 bg-white z-10">
        Penjelasan
      </h1>

      {/* Konten scrollable */}
      <div className="overflow-y-auto max-h-[400px] text-lg">
        <p >
          Rukun iman ketiga adalah beriman kitab-kitabnya. Beriman kepada kitab
          yang Allah ta’ala turunkan wajib diimani oleh setiap muslim bukan
          hanya Al-Qur’an namun juga kitab-kitab sebelumnya seperti zabur,
          taurat dan injil. Adapun urutan ketiga beriman kepada kitab ada di
          Hadist Jibril yang berbunyi
        </p>
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

      {/* Sticky button */}
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
      {/* Judul Sticky */}
      <h1 className="text-xl font-bold mb-3 bg-white z-10 sticky top-0">
        Bantuan
      </h1>
      <div className="overflow-y-auto max-h-[300px] text-lg">
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
        className={`p-1 w-full rounded-md mt-4 sticky bottom-0  z-10 ${getThemeClass()}`}
      >
        Selesai Membaca
      </button>
    </div>
  );
};

export default PageSatu;






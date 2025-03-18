import React, { useState, useEffect } from "react";
import { FaBook, FaQuestion } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useTheme } from "../../../../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { TbMapQuestion } from "react-icons/tb";
import ModalTooltifWordIslam from "../../../../components/ModalPageSatu/ModalTooltifIslam";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuizQuestions } from "../../../../reducer/quizQuestionsSlice";

const PageDuaSirrah = () => {
  const dispatch = useDispatch();
  const {
    theme,
    getBorder,
    getIconTheme,
    getButton,
    getThemeClassPage,
    getThemeTooltif,
  } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data } = useSelector((state) => state.quizQuestions);
  const location = useLocation();

  // Ambil quizId dari query parameters
  const queryParams = new URLSearchParams(location.search);
  const quizId = queryParams.get("quizId");

  useEffect(() => {
    dispatch(fetchQuizQuestions());
  }, [dispatch]);

  // Filter data berdasarkan quizId
  const quizData = data.find((quiz) => quiz.id === parseInt(quizId));

  const handleAnswer = (isCorrect, answerIndex) => {
    setSelectedAnswer(answerIndex);
    setIsAnswered(isCorrect);
  };

  const handleCheck = () => {
    if (isAnswered) {
      setIsModalVisible(true);
      // Logika untuk menghitung progress dan waktu
    } else {
      alert("Silakan pilih jawaban terlebih dahulu.");
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setIsAnswered(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="flex flex-col p-5 h-screen overflow-hidden">
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

      {/* Pertanyaan */}
      <h2 className="text-lg font-bold">{quizData?.question_text}</h2>
      <p>{quizData?.paragraph_help}</p>

      {/* Opsi Jawaban */}
      <div className="flex flex-col gap-5 mt-10 w-full">
        {quizData?.answer_text.split(";").map((answer, index) => (
          <h5
            key={index}
            className={`flex border ${getBorder()} p-3 w-full  cursor-pointer rounded-md ${
              selectedAnswer === index
                ? `${getThemeClassPage()} border-none`
                : ""
            }`}
            onClick={() => handleAnswer(answer.includes("(true)"), index)}
          >
            {answer.replace(" (true)", "")}
          </h5>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-3 shadow-md flex justify-between gap-2">
        <img
          src={"/lamp.png"}
          className={`border text-4xl mt-1 ${getIconTheme()} border-none`}
        />
        <button
          className={`p-3 w-[370px] rounded-xl border-none ${getButton()} ${
            selectedAnswer !== null ? `${getThemeClassPage()} border-none` : ""
          }`}
          onClick={handleCheck}
        >
          Cek
        </button>
      </div>

      {/* Modal untuk jawaban */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`rounded-xl w-full m-0 p-6 mt-[550px] items-center justify-center fixed bottom-0 ${
              isAnswered ? "bg-[#DCFFD9]" : "bg-[#FFD9D9]"
            }`}
          >
            <div className="flex justify-between">
              <h2
                className={`text-xl font-bold mb-4 w-full flex`}
                style={{ color: isAnswered ? "#28A745" : "#A74828" }}
              >
                {isAnswered ? "Benar!" : "Salah!"}
              </h2>
              <FaCheckCircle
                className={`text-green-500 text-3xl ${
                  isAnswered ? "" : "hidden"
                }`}
              />
            </div>
            <div className="flex gap-5 ">
              <Link to={"/page-satu-sirrah?quizId=1"} className="w-full">
                <button
                  className={`p-3 w-full rounded-xl mt-4 text-white ${
                    isAnswered ? "bg-green-500" : "bg-[#A74828]"
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
    </div>
  );
};

export default PageDuaSirrah;

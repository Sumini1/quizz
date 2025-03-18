// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoClose } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizQuestions } from "../../../../reducer/quizQuestionsSlice";

// const PageSatuSirrah = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [quizId, setQuizId] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showExplanation, setShowExplanation] = useState(false);
//   const [score, setScore] = useState(0);

//   // Get quiz questions from Redux store
//   const allQuizQuestions = useSelector((state) => state.quizQuestions.data);
//   const loading = useSelector((state) => state.quizQuestions.loading);
//   const error = useSelector((state) => state.quizQuestions.error);

//   // Get query parameters from URL
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const id = params.get("quizId");
//     setQuizId(id);
//   }, [location]);

//   // Fetch quiz questions if needed
//   useEffect(() => {
//     if (quizId && (!allQuizQuestions || allQuizQuestions.length === 0)) {
//       dispatch(fetchQuizQuestions());
//     }
//   }, [quizId, dispatch, allQuizQuestions]);

//   // Filter questions for the current quiz
//   const currentQuizQuestions =
//     allQuizQuestions?.filter(
//       (question) => question.quizzes_id === parseInt(quizId)
//     ) || [];

//   // Get current question
//   const currentQuestion = currentQuizQuestions[currentQuestionIndex];

//   // Handle answer selection
//   const handleSelectAnswer = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   // Check if the selected answer is correct
//   const isCorrectAnswer = () => {
//     return selectedAnswer === currentQuestion?.question_correct;
//   };

//   // Handle submit answer
//   const handleSubmitAnswer = () => {
//     if (selectedAnswer) {
//       if (isCorrectAnswer()) {
//         setScore(score + 1);
//       }
//       setShowExplanation(true);
//     }
//   };

//   // Move to next question
//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < currentQuizQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null);
//       setShowExplanation(false);
//     } else {
//       // Quiz completed
//       alert(
//         `Quiz completed! Your score: ${score}/${currentQuizQuestions.length}`
//       );
//       navigate("/beranda"); // Navigate back to home or wherever appropriate
//     }
//   };

//   if (loading) {
//     return (
//       <div className="container mx-auto p-4 text-center">
//         <p className="text-lg">Loading quiz questions...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto p-4 text-center">
//         <p className="text-red-500">Error: {error}</p>
//         <button
//           onClick={() => dispatch(fetchQuizQuestions())}
//           className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   if (currentQuizQuestions.length === 0) {
//     return (
//       <div className="container mx-auto p-4 text-center">
//         <p className="text-lg">No questions available for this quiz.</p>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Back to Home
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4 max-w-2xl">
//       <div className="bg-white  p-6">
//         {/* Quiz progress */}
//         <div className="flex justify-between items-center mb-6 mt-5">
//           <h1 className="text-xl font-bold">Quiz</h1>
//           <span className="text-gray-600">
//             Question {currentQuestionIndex + 1} of {currentQuizQuestions.length}
//           </span>
//         </div>

//         {/* Progress bar */}

//         <div className="flex items-center mb-6">
//           <IoClose className="text-2xl font-bold mr-2" />
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div
//               className="bg-blue-600 h-2.5 rounded-full"
//               style={{
//                 width: `${
//                   ((currentQuestionIndex + 1) / currentQuizQuestions.length) *
//                   100
//                 }%`,
//               }}
//             ></div>
//           </div>
//         </div>
//         {/* Question */}
//         <div className="mb-6">
//           <h2 className="text-lg font-medium mb-3">
//             {currentQuestion?.question_text}
//           </h2>

//           {/* Help paragraph */}
//           {/* {currentQuestion?.paragraph_help && (
//             <p className="text-gray-600 text-sm italic mb-4">
//               {currentQuestion.paragraph_help}
//             </p>
//           )} */}

//           {/* Answer options */}
//           <div className="space-y-3 mt-4 ">
//             {currentQuestion?.question_answer?.map((answer, index) => (
//               <div
//                 key={index}
//                 onClick={() => !showExplanation && handleSelectAnswer(answer)}
//                 className={`p-3 flex rounded-lg border cursor-pointer transition-colors ${
//                   selectedAnswer === answer
//                     ? showExplanation
//                       ? isCorrectAnswer()
//                         ? "bg-green-100 border-green-500"
//                         : "bg-red-100 border-red-500"
//                       : "bg-blue-100 border-blue-500"
//                     : "hover:bg-gray-100 border-gray-300"
//                 } ${
//                   showExplanation && answer === currentQuestion.question_correct
//                     ? "bg-green-100 border-green-500"
//                     : ""
//                 }`}
//               >
//                 <div className="flex items-center">
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 `}
//                   >
//                     {/* {String.fromCharCode(65 + index)} */}
//                   </div>
//                   <span>{answer}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Explanation (when shown) */}
//         {showExplanation && (
//           <div
//             className={`p-4 rounded-lg mb-6 ${
//               isCorrectAnswer() ? "" : "bg-red-50"
//             }`}
//           >
//             <h3
//               className={`font-medium mb-2 ${
//                 isCorrectAnswer() ? "text-green-700" : "text-red-700"
//               }`}
//             >
//               {isCorrectAnswer() ? "Correct!" : "Incorrect"}
//             </h3>
//             <p className="text-gray-700">{currentQuestion.explain_question}</p>
//           </div>
//         )}

//         {/* Action buttons */}
//         <div className="flex justify-end">
//           {!showExplanation ? (
//             <button
//               onClick={handleSubmitAnswer}
//               disabled={!selectedAnswer}
//               className={`px-6 py-2 rounded-lg ${
//                 selectedAnswer
//                   ? "bg-blue-500 text-white hover:bg-blue-600"
//                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
//               }`}
//             >
//               Check Answer
//             </button>
//           ) : (
//             <button
//               onClick={handleNextQuestion}
//               className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
//             >
//               {currentQuestionIndex < currentQuizQuestions.length - 1
//                 ? "Next Question"
//                 : "Finish Quiz"}
//             </button>
//           )}
//         </div>

//         {/* Score display */}
//         <div className="mt-6 text-right">
//           <span className="text-gray-600">
//             Score: {score}/{currentQuizQuestions.length}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageSatuSirrah;

import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle, FaBook, FaHeart } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizQuestions } from "../../../Features/Units/Reducer/quizQuestionsSlice";

const PageSatuSirrah = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // State variables
  const [quizId, setQuizId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalReferensiVisible, setIsModalReferensiVisible] = useState(false);
  const [isModalAnswerVisible, setIsModalAnswerVisible] = useState(false);
  const [isModalMateriOpen, setIsModalMateriOpen] = useState(false);
  const [isModalDonaturOpen, setIsModalDonaturOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState(null);

  // Get quiz questions from Redux store
  const allQuizQuestions = useSelector((state) => state.quizQuestions.data);
  const loading = useSelector((state) => state.quizQuestions.loading);
  const error = useSelector((state) => state.quizQuestions.error);

  // Get query parameters from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("quizId");
    setQuizId(id);

    // Set start time for tracking
    setStartTime(Date.now());

    // Set overflow hidden for this page only
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Restore scroll when leaving page
    };
  }, [location]);

  // Fetch quiz questions if needed
  useEffect(() => {
    if (quizId && (!allQuizQuestions || allQuizQuestions.length === 0)) {
      dispatch(fetchQuizQuestions());
    }
  }, [quizId, dispatch, allQuizQuestions]);

  // Filter questions for the current quiz
  const currentQuizQuestions =
    allQuizQuestions?.filter(
      (question) => question.quizzes_id === parseInt(quizId)
    ) || [];

  // Get current question
  const currentQuestion = currentQuizQuestions[currentQuestionIndex];

  // Handle answer selection
  const handleSelectAnswer = (answer, index) => {
    setSelectedAnswer(index);
    // Check if the answer is correct based on your data structure
    const isCorrect = answer === currentQuestion?.question_correct;
    setIsAnswerCorrect(isCorrect);
  };

  // Handle answer submission
  const handleCheck = () => {
    if (selectedAnswer !== null) {
      if (isAnswerCorrect) {
        setScore(score + 1);

        // Update progress
        const newProgress = Math.min(
          ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100,
          100
        );
        setProgress(newProgress);

        // Record time taken
        const endTime = Date.now();
        const timeTaken = Math.round((endTime - startTime) / 1000);
        console.log(`Time taken for this question: ${timeTaken} seconds`);

        // You can store this in localStorage as in your example
        let totalTime = Number(localStorage.getItem("totalTime")) || 0;
        totalTime += timeTaken;
        localStorage.setItem("totalTime", totalTime);
      }

      setShowExplanation(true);
      setIsModalVisible(true);
    } else {
      alert("Please select an answer first.");
    }
  };

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsModalVisible(false);
      setStartTime(Date.now()); // Reset timer for next question
    } else {
      // Quiz completed
      alert(
        `Quiz completed! Your score: ${score}/${currentQuizQuestions.length}`
      );
      navigate("/final-scored"); // Or to results page
    }
  };

  // Modal handlers
  const handleMateri = () => {
    setIsModalMateriOpen(true);
  };

  const handleDonatur = () => {
    setIsModalDonaturOpen(true);
  };

  const handleModalRefensi = () => {
    setIsModalReferensiVisible(true);
  };

  const handleModalAnswer = () => {
    setIsModalAnswerVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Loading and error states
  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg">Loading quiz questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500">Error: {error}</p>
        <button
          onClick={() => dispatch(fetchQuizQuestions())}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!currentQuizQuestions || currentQuizQuestions.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg">No questions available for this quiz.</p>
        <button
          onClick={() => navigate("/beranda")}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-5 h-screen overflow-hidden md:justify-start md:items-start md:ml-10 md:py-10">
      {/* Progress Bar */}
      <div className="flex flex-col h-4 mb-2 mt-2 w-full">
        <div className="flex w-full h-2">
          <IoClose className="-mt-3 text-3xl font-bold items-center -ml-2" />
          <div className="w-full bg-gray-200 rounded-sm max-w-[265px] mx-1 -mt-1">
            <div
              className="h-full rounded-sm bg-blue-600"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / currentQuizQuestions.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quiz info and navigation */}
      <div className="flex items-center justify-between mt-5">
        <div
          onClick={handleMateri}
          className="flex gap-2 items-center bg-[#FFF2DC] p-2 rounded-xl cursor-pointer"
        >
          <FaBook className="text-[#F59D09]" />
          <h1 className="text-base font-medium">Materi</h1>
        </div>
        <div
          onClick={handleDonatur}
          className="flex gap-2 items-center bg-[#DCE6F8] p-2 rounded-xl cursor-pointer"
        >
          <FaHeart className="text-[#0961F5]" />
          <h1 className="text-base font-medium">Donatur</h1>
        </div>
      </div>

      {/* Question Text */}
      <div className="flex flex-col mt-7">
        <div className="text-lg font-[500]">
          <p>{currentQuestion?.question_text}</p>
        </div>
      </div>

      {/* Answer options */}
      <div className="grid grid-cols-2 gap-5 mt-10 w-full">
        {currentQuestion?.question_answer?.map((answer, index) => (
          <h5
            key={index}
            className={`flex border border-gray-300 p-3 w-full text-center items-center justify-center cursor-pointer rounded-xl ${
              selectedAnswer === index
                ? "bg-blue-500 text-white border-none"
                : ""
            }`}
            onClick={() => handleSelectAnswer(answer, index)}
          >
            {answer}
          </h5>
        ))}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-3 shadow-md flex justify-between gap-2">
        <img
          src="/lamp.png"
          onClick={handleModalRefensi}
          className="border text-4xl mt-1 border-none cursor-pointer"
          alt="Hint"
        />
        <button
          className={`p-3 w-[370px] rounded-xl border-none ${
            selectedAnswer !== null
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={handleCheck}
          disabled={selectedAnswer === null}
        >
          Cek
        </button>
      </div>

      {/* Modal for Answer Result */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`rounded-xl rounded-b-none w-full m-0 p-6 mt-[550px] items-center justify-center fixed bottom-0 ${
              isAnswerCorrect ? "bg-[#DCFFD9]" : "bg-[#FFD9D9]"
            }`}
          >
            <div className="flex justify-between">
              <div className="flex h-auto">
                <h2
                  className="text-xl font-bold mb-4 w-full flex"
                  style={{ color: isAnswerCorrect ? "#28A745" : "#A74828" }}
                >
                  {isAnswerCorrect ? "Benar!" : "Salah!"}
                </h2>
                {isAnswerCorrect ? (
                  <FaCheckCircle className="text-green-500 text-3xl" />
                ) : (
                  <span className="bg-[#A74828] w-full h-[30px] rounded-lg">
                    <IoClose className="text-white text-3xl font-semibold" />
                  </span>
                )}
              </div>
              <div className="mt-5">
                <p>
                  <MdMenuBook
                    onClick={handleModalAnswer}
                    className={`text-5xl bg-white w-[50px] h-[50px] -mt-7 ml-auto p-2 rounded-full ${
                      isAnswerCorrect
                        ? "text-[#F59D09]"
                        : "text-[#F59D09] bg-[#FEEFB3]"
                    }`}
                  />
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                className={`p-3 w-full rounded-xl mt-4 text-white ${
                  isAnswerCorrect ? "bg-green-500" : "bg-[#A74828]"
                }`}
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex < currentQuizQuestions.length - 1
                  ? "Lanjut"
                  : "Selesai"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Answer Explanation */}
      {isModalAnswerVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
          onClick={() => setIsModalAnswerVisible(false)}
        >
          <div
            className="bg-[#DCFFD9] rounded-lg w-96 relative p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <h1 className="text-[20px] font-[500] mb-3 sticky top-0 z-10">
                Penjelasan{" "}
                <span className="text-[#28A745] text-[20px] font-[500]">
                  Jawaban
                </span>
              </h1>

              <div className="text-[16px] overflow-y-scroll max-h-[400px] font-[300]">
                <p className="mb-2">{currentQuestion?.explain_question}</p>
              </div>

              <button
                onClick={() => setIsModalAnswerVisible(false)}
                className="p-2 w-full rounded-xl mt-4 sticky bottom-0 z-10 bg-[#28A745] text-white text-[16px] font-[400]"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Question Reference */}
      {isModalReferensiVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
          onClick={() => setIsModalReferensiVisible(false)}
        >
          <div
            className="bg-white rounded-lg w-96 relative p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <h1 className="text-xl font-bold mb-3 z-10 sticky top-0">
                Bantuan <span className="text-[#F59D09] mx-1">Soal</span>
              </h1>

              <div className="text-[16px] font-[300] mb-3 overflow-y-scroll max-h-[400px]">
                <p>
                  {currentQuestion?.paragraph_help ||
                    "Tidak ada bantuan untuk soal ini."}
                </p>
              </div>

              <button
                onClick={() => setIsModalReferensiVisible(false)}
                className="p-3 w-full rounded-xl mt-4 sticky bottom-0 z-10 bg-[#F59D09] text-white"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Optional Modals for Materi and Donatur */}
      {isModalMateriOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
          onClick={() => setIsModalMateriOpen(false)}
        >
          <div
            className="bg-white rounded-lg w-96 relative p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <h1 className="text-xl font-bold mb-3 z-10 sticky top-0">
                Materi <span className="text-[#F59D09] mx-1">Pembelajaran</span>
              </h1>

              <div className="text-[16px] font-[300] mb-3 overflow-y-scroll max-h-[400px]">
                <p>Konten materi pembelajaran akan ditampilkan di sini.</p>
              </div>

              <button
                onClick={() => setIsModalMateriOpen(false)}
                className="p-3 w-full rounded-xl mt-4 sticky bottom-0 z-10 bg-[#F59D09] text-white"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalDonaturOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
          onClick={() => setIsModalDonaturOpen(false)}
        >
          <div
            className="bg-white rounded-lg w-96 relative p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <h1 className="text-xl font-bold mb-3 z-10 sticky top-0">
                Donatur <span className="text-[#0961F5] mx-1">Info</span>
              </h1>

              <div className="text-[16px] font-[300] mb-3 overflow-y-scroll max-h-[400px]">
                <p>Informasi donatur akan ditampilkan di sini.</p>
              </div>

              <button
                onClick={() => setIsModalDonaturOpen(false)}
                className="p-3 w-full rounded-xl mt-4 sticky bottom-0 z-10 bg-[#0961F5] text-white"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSatuSirrah;

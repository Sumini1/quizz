import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle, FaBook, FaHeart } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizQuestions } from "../../../../../Units/Reducer/quizQuestionsSlice";
import { saveUserQuizProgress } from "../Reducer/userQuizzesSave"; // New action

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
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);

  // Get quiz questions from Redux store
  const allQuizQuestions = useSelector((state) => state.quizQuestions.data);
  const loading = useSelector((state) => state.quizQuestions.loading);
  const error = useSelector((state) => state.quizQuestions.error);
  // Determine the attempt number and current total points
  const [attempt, setAttempt] = useState(1);
  const [previousPoints, setPreviousPoints] = useState(0);
  const [accumulatedScore, setAccumulatedScore] = useState(0);

   useEffect(() => {
     // Retrieve current quiz score from localStorage
     const currentQuizScore = localStorage.getItem("quizScore");

     // Convert to number, default to 0 if not found
     const parsedScore = currentQuizScore ? parseInt(currentQuizScore, 10) : 0;
     setAccumulatedScore(parsedScore);
   }, []);

  useEffect(() => {
    // Retrieve previous quiz attempts for this specific quiz
    const quizAttemptsKey = `quiz_${quizId}_attempts`;
    const previousAttemptsString = localStorage.getItem(quizAttemptsKey);

    try {
      if (previousAttemptsString) {
        const previousAttempts = JSON.parse(previousAttemptsString);

        // Set the next attempt number
        setAttempt(previousAttempts.length + 1);

        // Calculate total previous points
        const totalPreviousPoints = previousAttempts.reduce(
          (total, attempt) => total + (attempt.point || 0),
          0
        );
        setPreviousPoints(totalPreviousPoints);
      }
    } catch (error) {
      console.error("Error parsing previous attempts:", error);
    }
  }, [quizId]);

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
      const endTime = Date.now();
      const timeTaken = Math.round((endTime - startTime) / 1000);

      if (isAnswerCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      // Update total time taken
      setTotalTimeTaken((prev) => prev + timeTaken);

      // Update progress
      const newProgress = Math.min(
        ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100,
        100
      );
      setProgress(newProgress);

      setShowExplanation(true);
      setIsModalVisible(true);
    } else {
      alert("Please select an answer first.");
    }
  };

  // Handle next question
 const handleNextQuestion = () => {
   if (currentQuestionIndex < currentQuizQuestions.length - 1) {
     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
     setSelectedAnswer(null);
     setShowExplanation(false);
     setIsModalVisible(false);
     setStartTime(Date.now()); // Reset timer for next question
   } else {
     // Explicitly retrieve user ID from localStorage
     const userId = localStorage.getItem("id");

     // If no user ID found, show an error or handle appropriately
     if (!userId) {
       alert("User ID not found. Please log in again.");
       navigate("/login"); // Redirect to login page
       return;
     }

     // Calculate new accumulated score
     const newAccumulatedScore = accumulatedScore + score;

     // Update localStorage with new accumulated score
     localStorage.setItem("quizScore", newAccumulatedScore.toString());

     // Prepare quiz progress data
     const quizProgressData = {
       attempt: 1,
       percentage_grade: Math.round(
         (score / currentQuizQuestions.length) * 100
       ),
       point: score,
       total_points: newAccumulatedScore, // Use accumulated score
       quiz_id: parseInt(quizId),
       time_duration: totalTimeTaken,
       user_id: parseInt(userId),
     };

     // Log for debugging
     console.log("Accumulated Score:", newAccumulatedScore);
     console.log("Current Quiz Score:", score);

     // Dispatch action to save quiz progress
     dispatch(saveUserQuizProgress(quizProgressData));

     // Navigate to final scored page
     navigate("/pemula/sirrah-nabawiyyah/final-scored", {
       state: {
         score,
         totalQuestions: currentQuizQuestions.length,
         timeTaken: totalTimeTaken,
         totalPoints: newAccumulatedScore,
       },
     });
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
    <div className="flex flex-col p-5 min-h-screen overflow-hidden md:justify-start md:items-start md:ml-10 md:py-10">
      {/* <div> */}
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
            className={`flex border border-gray-500 p-3 w-full text-center items-center justify-center cursor-pointer rounded-xl ${
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
      <div className="fixed bottom-0 left-0 right-0  px-5 py-3 shadow-md flex justify-between gap-2">
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
        {/* </div> */}
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

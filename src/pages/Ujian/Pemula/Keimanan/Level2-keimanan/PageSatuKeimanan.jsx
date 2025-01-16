import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startQuiz,
  endQuiz,
  updateAnswer,
  setShowResult,
  retryIncorrectAnswers,
} from "../../../../../reducer/quizSlice";

const PageSatuKeimanan = () => {
  const dispatch = useDispatch();
  const {
    quizzes,
    currentQuizIndex,
    showResult,
    score,
    progress,
    startTime,
    userAnswers,
  } = useSelector((state) => state.quiz);

  const currentQuiz = quizzes[currentQuizIndex];
  const questions = currentQuiz?.subCategory[0]?.questions || [];

  useEffect(() => {
    if (progress === 100 && !showResult) {
      dispatch(endQuiz());
    }
  }, [progress, dispatch, showResult]);

  const handleStartQuiz = () => {
    dispatch(startQuiz());
    dispatch(setShowResult(false));
  };

  const handleAnswerSelect = (questionId, answerId) => {
    dispatch(
      updateAnswer({
        quizId: currentQuiz.id,
        questionId,
        answerId,
      })
    );
  };

  const handleRetry = () => {
    dispatch(retryIncorrectAnswers());
    dispatch(setShowResult(false));
  };

  if (!startTime) {
    return (
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Quiz {currentQuiz.category}
          </h2>
          <div className="text-center">
            <p className="mb-6">
              Siap untuk memulai quiz {currentQuiz.subCategory[0].name}?
            </p>
            <button
              onClick={handleStartQuiz}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Mulai Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Hasil Quiz</h2>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                {percentage}%
              </h3>
              <p className="text-gray-600">
                Skor Anda: {score} dari {totalQuestions} pertanyaan
              </p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleStartQuiz}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Mulai Ulang
              </button>
              {userAnswers.some((ans) => !ans.isCorrect) && (
                <button
                  onClick={handleRetry}
                  className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition-colors"
                >
                  Ulangi Pertanyaan Salah
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {currentQuiz.subCategory[0].name}
        </h2>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-8">
          {questions.map((question) => (
            <div key={question.id} className="space-y-4">
              <h3 className="text-lg font-medium">{question.question}</h3>
              <div className="grid gap-3">
                {question.answers.map((answer) => (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswerSelect(question.id, answer.id)}
                    className={`w-full px-4 py-3 text-left rounded-md border-2 transition-colors
                      ${
                        question.user_answer === answer.id
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "border-gray-200 hover:border-indigo-600"
                      }`}
                  >
                    {answer.answer}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSatuKeimanan;

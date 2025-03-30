import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ModalDonatur from "./ModalDonatur";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnits } from "../../Reducer/unitsSlice";
import { fetchQuizzes } from "../../Reducer/quizzesSlice";
import { fetchQuizQuestions } from "../../Reducer/quizQuestionsSlice";

const ModalNomorSatu = React.memo(({ isOpen, onClose, unitId, quizId }) => {
  const [isModalDonaturOpen, setIsModalDonaturOpen] = useState(false);
  const { getButtonClass, getThemeLoveClass } = useTheme();
  const [boxClicks, setBoxClicks] = useState({});
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [selectedQuizQuestionsId, setSelectedQuizQuestionsId] = useState(null);
  const dispatch = useDispatch();
  const { data: units } = useSelector((state) => state.units);
  const { data: quizzes } = useSelector((state) => state.quizzes);
  const { data: quizQuestions } = useSelector((state) => state.quizQuestions);

  useEffect(() => {
    dispatch(fetchUnits());
    dispatch(fetchQuizzes());
    dispatch(fetchQuizQuestions());
  }, [dispatch]);

  useEffect(() => {
    // Ambil status klik dari localStorage saat pertama kali komponen dimuat
    const savedClicks = JSON.parse(localStorage.getItem("boxClicks")) || {};
    setBoxClicks(savedClicks);
  }, []);

  const unitQuizzes = useMemo(() => {
    if (!quizzes?.length || !unitId) return [];
    return quizzes.filter((quiz) => quiz.unit_id === parseInt(unitId));
  }, [quizzes, unitId]);

  const quizBoxes = useMemo(() => {
    if (!unitQuizzes || unitQuizzes.length === 0) return {};
    const createBoxLabel = (index) =>
      index < 26 ? String.fromCharCode(65 + index) : (index - 25).toString();
    const result = {};
    unitQuizzes.forEach((quiz, index) => {
      const boxLabel = createBoxLabel(index);
      result[boxLabel] = quiz.id;
    });
    return result;
  }, [unitQuizzes]);

  const boxLabels = useMemo(() => Object.keys(quizBoxes), [quizBoxes]);

  const handleBoxClick = useCallback(
    (box) => {
      if (quizBoxes[box]) {
        setSelectedQuizId(quizBoxes[box]);
        setBoxClicks((prev) => {
          const updatedClicks = { ...prev, [box]: (prev[box] || 0) + 1 };
          localStorage.setItem("boxClicks", JSON.stringify(updatedClicks)); // Simpan ke localStorage
          return updatedClicks;
        });
      }
    },
    [quizBoxes]
  );

  const getBoxClass = useCallback(
    (box) => {
      if (boxClicks[box] === 1) return "bg-green-500 text-white";
      if (boxClicks[box] >= 2) return "bg-yellow-500 text-white";
      return "bg-gray-300 border-blue-500 border-4";
    },
    [boxClicks]
  );

  const handleDonatur = useCallback(() => setIsModalDonaturOpen(true), []);
  const handleModalClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const unitTitle = useMemo(() => {
    if (!units?.length || !unitId) return "Pengantar Rukun Iman";
    const unit = units.find((u) => u.id === parseInt(unitId));
    return unit?.title || "Pengantar Rukun Iman";
  }, [units, unitId]);

  const completedQuizCount = 1; // Replace dengan logika sebenarnya
  const totalQuizCount = unitQuizzes.length || 15;
  const completionText = `${completedQuizCount}/${totalQuizCount} kuis terselesaikan`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center p-5"
      onClick={handleModalClick}
    >
      <div
        className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-black hover:text-red-500 focus:outline-none"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        <div
          className="flex items-center justify-center mb-3 space-x-1 cursor-pointer"
          onClick={handleDonatur}
        >
          <FaHeart className={`${getThemeLoveClass()} text-xl font-bold`} />
          <h1 className="text-base">Donatur</h1>
          <p className="hidden">{quizId}</p>
        </div>

        <h1 className="text-xl font-semibold text-center mb-2">{unitTitle}</h1>
        <p className="text-center text-sm font-normal mb-3">{completionText}</p>

        <div className="flex flex-wrap gap-3 justify-center items-center p-3">
          {boxLabels.map((box) => (
            <div
              key={box}
              onClick={() => handleBoxClick(box)}
              className={`flex items-center justify-center text-xl p-4 w-[50px] h-[50px] rounded-md cursor-pointer ${getBoxClass(
                box
              )}`}
            >
              {box}
            </div>
          ))}
        </div>

        {selectedQuizId && (
          <div className="text-center text-sm mb-3">
            <p>Selected Quiz ID: {selectedQuizId}</p>
            {selectedQuizQuestionsId && (
              <p>Selected Quiz Question ID: {selectedQuizQuestionsId}</p>
            )}
          </div>
        )}

        <Link
          to={
            selectedQuizId
              ? `/pemula/sirrah-nabawiyyah?quizId=${selectedQuizId}${
                  selectedQuizQuestionsId
                    ? `&quizQuestionsId=${selectedQuizQuestionsId}`
                    : ""
                }`
              : "/page-satu-sirrah"
          }
        >
          <button
            onClick={onClose}
            className={`w-full text-base font-normal py-2 px-4 rounded-xl border-none ${getButtonClass()}`}
            disabled={!selectedQuizId}
          >
            Mulai + 40 XP
          </button>
        </Link>
      </div>

      {isModalDonaturOpen && (
        <ModalDonatur
          isOpen={isModalDonaturOpen}
          onClose={() => setIsModalDonaturOpen(false)}
        />
      )}
    </div>
  );
});

export default ModalNomorSatu;

import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { Link } from "react-router-dom";
import ModalHasilUjian from "./ModalHasilUjian";
import { AiOutlineLoading3Quarters, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const ModalEvaluasi = ({ isOpen, onClose, unitId }) => {
  const {
    getButtonClass,
    getIconTheme,
    getBorderClass,
    getThemeModalCategory,
  } = useTheme();
  const [isModalArtikelOpen, setIsModalArtikelOpen] = useState(false);
  const [isModalHasilUjianOpen, setIsModalHasilUjianOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: units } = useSelector((state) => state.units);
  const { data: evaluations } = useSelector((state) => state.evaluations);
  const [unitData, setUnitData] = useState(null);
  const [evaluationData, setEvaluationData] = useState(null);

  // Fetch unit and evaluation data based on unitId
  useEffect(() => {
    if (unitId && units) {
      const currentUnit = units.find((unit) => unit.id === unitId);
      setUnitData(currentUnit);

      if (evaluations) {
        const unitEvaluation = evaluations.find(
          (evaluation) => evaluation.unit_id === unitId
        );
        setEvaluationData(unitEvaluation);
      }
    }
  }, [unitId, units, evaluations]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleHasilUjian = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalHasilUjianOpen(true);
    }, 2000); // Simulasi loading selama 2 detik
  };

  return (
    <div
      className="fixed top-0 z-50 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-5 "
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white 
       rounded-lg shadow-lg w-full p-5 max-w-md relative mx-auto md:p-10"
      >
        {/* Tombol Close */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="flex items-center justify-center space-x-1">
          <FaHeart className={`${getIconTheme()} text-xl font-bold`} />
          <h1 className="text-base">Donatur</h1>
        </div>

        {/* <h1 className="text-md font-md items-center justify-center flex">
          {unitData ? unitData.name : "Loading..."}
        </h1> */}

        <div className="flex items-center justify-center space-x-2"></div>

        <p className="text-center text-base mb-4">
          {evaluationData
            ? evaluationData?.name_evaluation
            : "Evaluasi pembelajaran untuk pemantapan materi dan persiapan ujian akhir."}
        </p>

        <Link to={`/readings/${unitId}`}>
          <button
            className={`mt-4 w-full text-[16px] font-normal py-2 px-4 rounded-xl border-none focus:outline-none focus:shadow-outline ${getBorderClass()}`}
          >
            Baca Materi Artikel
          </button>
        </Link>

        {/* Fix: Use route parameter instead of query parameter to match route configuration */}
        {evaluationData && (
          <Link
            to={`/pemula/evaluations-satu/${evaluationData.id}?unitId=${unitId}`}
          >
            <button
              className={`mt-4 w-full text-[16px] font-normal py-2 px-4 rounded-xl border-none focus:outline-none focus:shadow-outline ${getButtonClass()}`}
            >
              Mulai Evaluasi +40 XP
            </button>
          </Link>
        )}

        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
              className={`p-10 rounded-xl flex flex-col items-center gap-4 bg-[#D2E2FF]`}
            >
              <div
                className={`text-7xl p-2 font-semibold rounded-2xl h-[70px] w-[70px] flex items-center justify-center animate-spin border-none ${getIconTheme()}`}
                style={{ animation: "slow-spin 5s linear infinite" }}
              >
                <AiOutlineLoading3Quarters className="animate-spin" />
              </div>
              <h1 className="text-lg font-semibold">Proses Memuat Materi</h1>
              <p>"Ilmu adalah cahaya"</p>
            </div>
          </div>
        )}
      </div>

      <ModalHasilUjian
        isOpen={isModalHasilUjianOpen}
        onClose={() => setIsModalHasilUjianOpen(false)}
        unitId={unitId}
      />
    </div>
  );
};

export default ModalEvaluasi;
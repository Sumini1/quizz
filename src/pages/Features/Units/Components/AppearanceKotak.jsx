import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { FaAddressBook, FaBook } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchThemesOrLevelsById } from "../../ThemesOrLevels/Reducer/themesOrLevelsSlice";
import { fetchUnits } from "../Reducer/unitsSlice";
import ModalOverView from "../Modal/ModalOverView";
import ModalNomorSatu from "../Modal/ModalNomorSatu";
import ButtonMobileKotak from "../Modal/ButtonMobileKotak";

const AppearanceKotak = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [activeModal, setActiveModal] = useState(
    location.state?.returnToModal || null
  );
  const [activeUnitId, setActiveUnitId] = useState(null);
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.themesOrLevels);
  const { data: units, error } = useSelector((state) => state.units);
  const [loading, setLoading] = useState(true);
  const [clickedBoxes, setClickedBoxes] = useState({});
  const [activeQuizId, setActiveQuizId] = useState(null);

  // Ambil data dari localStorage saat pertama kali render
  useEffect(() => {
    const storedClickedBoxes = localStorage.getItem("clickedBoxes");
    if (storedClickedBoxes) {
      setClickedBoxes(JSON.parse(storedClickedBoxes));
    }
  }, []);

  // Simpan clickedBoxes ke localStorage setiap kali berubah
  useEffect(() => {
    if (Object.keys(clickedBoxes).length > 0) {
      localStorage.setItem("clickedBoxes", JSON.stringify(clickedBoxes));
    }
  }, [clickedBoxes]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (id) {
          await dispatch(fetchThemesOrLevelsById(id)).unwrap();
        }
        await dispatch(fetchUnits()).unwrap();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, id]);

  const closeModal = () => {
    setActiveModal(null);
    setActiveUnitId(null);
  };

  const handleBoxClick = (unitId, boxIndex, quizId = null) => {
    setClickedBoxes((prev) => {
      const newState = {
        ...prev,
        [unitId]: {
          ...prev[unitId],
          [boxIndex]: true, // Set status menjadi true saat diklik
        },
      };
      localStorage.setItem("clickedBoxes", JSON.stringify(newState)); // Simpan ke localStorage secara langsung
      return newState;
    });

    const modalMap = {
      0: "ModalOverView",
      1: "KeteranganArtikel",
      2: "ModalNomorSatu",
    };

    const modalName = modalMap[boxIndex];

    if (modalName === "KeteranganArtikel") {
      setTimeout(() => {
        navigate(`/readings/${unitId}`);
      }, 100);
    } else if (modalName) {
      setActiveModal(modalName);
      setActiveUnitId(unitId);
      if (quizId) {
        setActiveQuizId(quizId); // Simpan quiz.id
      }
    }
  };

  const getBoxBgColor = (unitId, boxIndex) => {
    return clickedBoxes[unitId]?.[boxIndex]
      ? "bg-[#28A745] text-white" // Tetap hijau jika diklik
      : "bg-[#DDDDDD]"; // Default abu-abu
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">
          <p>Error loading data: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="justify-center p-4 min-h-screen">
        <h1 className="text-xl font-semibold p-3 -mt-2 mb-7 mx-auto flex flex-col">
          {detail?.name || "Loading..."}
        </h1>
        {units && units.length > 0 ? (
          units.map((unit) => (
            <div
              key={unit.id}
              className="flex mb-10 cursor-pointer mt-4 justify-center items-center"
            >
              <div className="flex flex-col border border-[#0961F5] rounded-lg w-full h-full">
                <div className="relative">
                  <div className="flex items-center w-full">
                    <div className="flex items-center justify-center border border-[#0961F5] bg-white rounded-full px-4 py-2 -mt-4">
                      <span className="font-bold text-md">{unit.name}</span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-base font-normal">
                    {unit.description_short}
                  </p>
                  <div className="grid grid-cols-5 gap-5 gap-y-5 p-3 w-full place-items-center  rounded-md gap-x-10">
                    <span
                      onClick={() => handleBoxClick(unit.id, 0)}
                      className={`${getBoxBgColor(
                        unit.id,
                        0
                      )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                    >
                      <FaAddressBook className="text-2xl" />
                    </span>
                    <span
                      onClick={() => handleBoxClick(unit.id, 1)}
                      className={`${getBoxBgColor(
                        unit.id,
                        1
                      )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                    >
                      <FaBook className="text-2xl" />
                    </span>
                    {unit.section_quizzes.length > 0 &&
                      unit.section_quizzes.map((quiz, index) => (
                        <span
                          key={quiz.id}
                          onClick={() =>
                            handleBoxClick(unit.id, index + 2, quiz.id)
                          }
                          className={`${getBoxBgColor(
                            unit.id,
                            index + 2
                          )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                        >
                          {index + 1}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center my-10">
            <p>Tolong untuk login kembali</p>
          </div>
        )}

        {activeModal === "ModalOverView" && activeUnitId && (
          <ModalOverView
            isOpen={true}
            onClose={closeModal}
            unitId={activeUnitId}
          />
        )}

        {activeModal === "ModalNomorSatu" && activeUnitId && activeQuizId && (
          <ModalNomorSatu
            isOpen={true}
            onClose={closeModal}
            unitId={activeUnitId}
            quizId={activeQuizId} // Kirim quiz.id ke ModalNomorSatu
          />
        )}
      </div>
      <ButtonMobileKotak className="sticky bottom-0 w-full" />
    </>
  );
};

export default AppearanceKotak;

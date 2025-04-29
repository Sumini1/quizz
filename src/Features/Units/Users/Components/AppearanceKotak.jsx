// import React, { useState, useEffect } from "react";
// import { useTheme } from "../../../../context/ThemeContext";
// import { FaAddressBook, FaBook } from "react-icons/fa6";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchThemesOrLevelsById } from "../../../ThemesOrLevels/Reducer/themesOrLevelsSlice";
// import { fetchUnits } from "../../Reducer/unitsSlice";
// import ModalOverView from "../Modal/ModalOverView";
// import ModalNomorSatu from "../Modal/ModalNomorSatu";
// import ModalEvaluasi from "../Modal/ModalEvaluasi";
// import ModalUjianAkhir from "../Modal/ModalUjianAkhir";
// import ButtonMobileKotak from "../../../../components/ListButton/ButtonMobileKotak";
// import { GrHelpBook } from "react-icons/gr";
// import { fetchEvaluations } from "../../Reducer/evaluationsSlice";
// import { fetchExams } from "../../Reducer/examSlice";
// import { PiExamFill } from "react-icons/pi";

// const AppearanceKotak = () => {
//   const navigate = useNavigate();
//   const { theme, middleTheme } = useTheme();
//   const location = useLocation();
//   const { id } = useParams();
//   const [activeModal, setActiveModal] = useState(
//     location.state?.returnToModal || null
//   );
//   const [activeUnitId, setActiveUnitId] = useState(null);
//   const dispatch = useDispatch();
//   const { detail } = useSelector((state) => state.themesOrLevels);
//   const { data: allUnits, error } = useSelector((state) => state.units);
//   const [loading, setLoading] = useState(true);
//   const [clickedBoxes, setClickedBoxes] = useState({});
//   const [activeQuizId, setActiveQuizId] = useState(null);
//   // const { data: evaluations } = useSelector((state) => state.evaluations);
//   const [filteredUnits, setFilteredUnits] = useState([]);

//   // section get evaluations based on unitId
//   useEffect(() => {
//     dispatch(fetchEvaluations());
//     dispatch(fetchExams());
//   }, [dispatch]);

//   // Ambil data dari localStorage saat pertama kali render
//   useEffect(() => {
//     const storedClickedBoxes = localStorage.getItem("clickedBoxes");
//     if (storedClickedBoxes) {
//       setClickedBoxes(JSON.parse(storedClickedBoxes));
//     }
//   }, []);

//   // Simpan clickedBoxes ke localStorage setiap kali berubah
//   useEffect(() => {
//     if (Object.keys(clickedBoxes).length > 0) {
//       localStorage.setItem("clickedBoxes", JSON.stringify(clickedBoxes));
//     }
//   }, [clickedBoxes]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         if (id) {
//           await dispatch(fetchThemesOrLevelsById(id)).unwrap();
//         }
//         await dispatch(fetchUnits()).unwrap();
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [dispatch, id]);

//   // Filter units based on the current theme_or_level_id
//  useEffect(() => {
//    if (allUnits && allUnits.length > 0 && id) {
//      const numericId = parseInt(id);
//      if (numericId === 3) {
//        setFilteredUnits(allUnits);
//      } else {
//        const filtered = allUnits.filter(
//          (unit) => unit.themes_or_level_id === numericId
//        );
//        setFilteredUnits(filtered);
//      }
//    }
//  }, [allUnits, id]);



//   const closeModal = () => {
//     setActiveModal(null);
//     setActiveUnitId(null);
//   };

//   const handleBoxClick = (unitId, boxIndex, quizId = null) => {
//     setClickedBoxes((prev) => {
//       const newState = {
//         ...prev,
//         [unitId]: {
//           ...prev[unitId],
//           [boxIndex]: true, // Set status menjadi true saat diklik
//         },
//       };
//       localStorage.setItem("clickedBoxes", JSON.stringify(newState)); // Simpan ke localStorage secara langsung
//       return newState;
//     });

//     const modalMap = {
//       0: "ModalOverView",
//       1: "KeteranganArtikel",
//       2: "ModalNomorSatu",
//       3: "ModalEvaluasi",
//       4: "ModalUjianAkhir",
//     };

//     const modalName = modalMap[boxIndex];

//     if (modalName === "KeteranganArtikel") {
//       setTimeout(() => {
//         navigate(`/readings/${unitId}`);
//       }, 100);
//     } else if (modalName) {
//       setActiveModal(modalName);
//       setActiveUnitId(unitId);
//       if (quizId) {
//         setActiveQuizId(quizId);
//       }
//     }
//   };

//   // Special handler for evaluation click
//   const handleEvaluationClick = (unitId) => {
//     setClickedBoxes((prev) => {
//       const newState = {
//         ...prev,
//         [unitId]: {
//           ...prev[unitId],
//           3: true, // Evaluation is always at index 3
//         },
//       };
//       localStorage.setItem("clickedBoxes", JSON.stringify(newState));
//       return newState;
//     });

//     setActiveModal("ModalEvaluasi");
//     setActiveUnitId(unitId);
//   };

//   // handler exams
//   const handleExamsClick = (unitId) => {
//     setClickedBoxes((prev) => {
//       const newState = {
//         ...prev,
//         [unitId]: {
//           ...prev[unitId],
//           4: true,
//         },
//       };
//       localStorage.setItem("clickedBoxes", JSON.stringify(newState));
//       return newState;
//     });

//     setActiveModal("ModalUjianAkhir");
//     setActiveUnitId(unitId);
//   }
//   const getBoxBgColor = (unitId, boxIndex) => {
//     return clickedBoxes[unitId]?.[boxIndex]
//       ? "bg-[#28A745] text-white" // Tetap hijau jika diklik
//       : "bg-[#DDDDDD]"; // Default abu-abu
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="text-red-500">
//           <p>Error loading data: {error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             Refresh
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className=" w-full  mx-auto h-screen overflow-auto  md:p-0 flex flex-col">
//         <div
//           className={`w-full max-w-md mx-auto h-screen overflow-auto  flex flex-col ${middleTheme()} p-5`}
//         >
//           <h1 className="text-xl font-semibold mb-7 flex flex-col">
//             {detail?.name || "Loading..."}
//           </h1>
//           {filteredUnits && filteredUnits.length > 0 ? (
//             filteredUnits.map((unit) => (
//               <div
//                 key={unit.id}
//                 className="flex mb-10 cursor-pointer mt-4 justify-center items-center"
//               >
//                 <div className="flex flex-col border border-[#0961F5] rounded-lg w-full h-full">
//                   <div className="relative">
//                     <div className="flex items-center w-full">
//                       <div className="flex items-center justify-center border border-[#0961F5] bg-white rounded-full px-4 py-2 -mt-4">
//                         <span className="font-bold text-md">{unit.name}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-3">
//                     <p className="text-base font-normal">
//                       {unit.description_short}
//                     </p>
//                     <div className="grid grid-cols-5 gap-5 gap-y-5 p-3 w-full place-items-center rounded-md gap-x-10">
//                       {/* Overview button */}
//                       <span
//                         onClick={() => handleBoxClick(unit.id, 0)}
//                         className={`${getBoxBgColor(
//                           unit.id,
//                           0
//                         )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
//                       >
//                         <FaAddressBook className="text-2xl" />
//                       </span>

//                       {/* Reading material button */}
//                       <span
//                         onClick={() => handleBoxClick(unit.id, 1)}
//                         className={`${getBoxBgColor(
//                           unit.id,
//                           1
//                         )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
//                       >
//                         <FaBook className="text-2xl" />
//                       </span>

//                       {/* Quiz buttons */}
//                       {unit.section_quizzes.length > 0 &&
//                         unit.section_quizzes.map((quiz, index) => (
//                           <span
//                             key={quiz.id}
//                             onClick={() =>
//                               handleBoxClick(unit.id, index + 2, quiz.id)
//                             }
//                             className={`${getBoxBgColor(
//                               unit.id,
//                               index + 2
//                             )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
//                           >
//                             {index + 1}
//                           </span>
//                         ))}

//                       {/* Evaluation button */}
//                       <span
//                         onClick={() => handleEvaluationClick(unit.id)}
//                         className={`${getBoxBgColor(
//                           unit.id,
//                           3
//                         )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
//                       >
//                         <GrHelpBook className="text-2xl" />
//                       </span>

//                       {/* Exam button */}
//                       <span
//                         onClick={() => handleExamsClick(unit.id)}
//                         className={`${getBoxBgColor(
//                           unit.id,
//                           4
//                         )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
//                       >
//                         <PiExamFill className="text-2xl" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center my-10">
//               <p>Tidak ada unit ditemukan untuk tema/level ini</p>
//               <p className="mt-2">
//                 Data untuk tema/level ini mungkin belum tersedia
//               </p>
//               <button
//                 onClick={() => navigate(-1)}
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
//               >
//                 Kembali
//               </button>
//             </div>
//           )}

//           {activeModal === "ModalOverView" && activeUnitId && (
//             <ModalOverView
//               isOpen={true}
//               onClose={closeModal}
//               unitId={activeUnitId}
//             />
//           )}

//           {activeModal === "ModalNomorSatu" && activeUnitId && activeQuizId && (
//             <ModalNomorSatu
//               isOpen={true}
//               onClose={closeModal}
//               unitId={activeUnitId}
//               quizId={activeQuizId} // Kirim quiz.id ke ModalNomorSatu
//             />
//           )}

//           {activeModal === "ModalEvaluasi" && activeUnitId && (
//             <ModalEvaluasi
//               isOpen={true}
//               onClose={closeModal}
//               unitId={activeUnitId}
//             />
//           )}

//           {/* exam */}
//           {
//             activeModal === "ModalUjianAkhir" && activeUnitId && (
//               <ModalUjianAkhir
//               isOpen={true}
//               onClose={closeModal}
//               unitId={activeUnitId}
//               />
//             )
//           }
//         </div>
//         <div className="flex justify-center w-full">
//           <div className="w-full md:max-w-md">
//             <ButtonMobileKotak />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AppearanceKotak;

import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { FaAddressBook, FaBook } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchThemesOrLevelsById } from "../../../ThemesOrLevels/Reducer/themesOrLevelsSlice";
import { fetchUnits } from "../../Reducer/unitsSlice";
import ModalOverView from "../Modal/ModalOverView";
import ModalNomorSatu from "../Modal/ModalNomorSatu";
// Import modal lain jika sudah dibuat
// import ModalNomorDua from "../Modal/ModalNomorDua";
// import ModalNomorTiga from "../Modal/ModalNomorTiga";
import ModalEvaluasi from "../Modal/ModalEvaluasi";
import ModalUjianAkhir from "../Modal/ModalUjianAkhir";
import ButtonMobileKotak from "../../../../components/ListButton/ButtonMobileKotak";
import { GrHelpBook } from "react-icons/gr";
import { fetchEvaluations } from "../../Reducer/evaluationsSlice";
import { fetchExams } from "../../Reducer/examSlice";
import { PiExamFill } from "react-icons/pi";

const AppearanceKotak = () => {
  const navigate = useNavigate();
  const { theme, middleTheme } = useTheme();
  const location = useLocation();
  const { id } = useParams();
  const [activeModal, setActiveModal] = useState(
    location.state?.returnToModal || null
  );
  const [activeUnitId, setActiveUnitId] = useState(null);
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.themesOrLevels);
  const { data: allUnits, error } = useSelector((state) => state.units);
  const [loading, setLoading] = useState(true);
  const [clickedBoxes, setClickedBoxes] = useState({});
  const [activeQuizId, setActiveQuizId] = useState(null);
  const [filteredUnits, setFilteredUnits] = useState([]);

  // Pemetaan modal berdasarkan quiz ID
  // Catatan: Tambahkan modal lain saat sudah dibuat
  const QUIZ_MODALS = {
    // quizId: Component
    1: ModalNomorSatu,
    // 2: ModalNomorDua,
    // 3: ModalNomorTiga,
    // Dan seterusnya...
  };

  // Default ke ModalNomorSatu jika tidak ditemukan
  const getQuizModal = (quizId) => {
    return QUIZ_MODALS[quizId] || ModalNomorSatu;
  };

  useEffect(() => {
    dispatch(fetchEvaluations());
    dispatch(fetchExams());
  }, [dispatch]);

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

  // Filter units based on the current theme_or_level_id
  useEffect(() => {
    if (allUnits && allUnits.length > 0 && id) {
      const numericId = parseInt(id);
      if (numericId === 3) {
        setFilteredUnits(allUnits);
      } else {
        const filtered = allUnits.filter(
          (unit) => unit.themes_or_level_id === numericId
        );
        setFilteredUnits(filtered);
      }
    }
  }, [allUnits, id]);

  const closeModal = () => {
    setActiveModal(null);
    setActiveUnitId(null);
    setActiveQuizId(null);
  };

  // Updated handleBoxClick to handle different types of buttons
  const handleBoxClick = (unitId, boxType, quizId = null) => {
    // Update clicked status in localStorage
    setClickedBoxes((prev) => {
      const newState = {
        ...prev,
        [unitId]: {
          ...prev[unitId],
          [boxType]: true, // Set status menjadi true saat diklik
        },
      };
      localStorage.setItem("clickedBoxes", JSON.stringify(newState));
      return newState;
    });

    // Handle different box types
    if (boxType === "overview") {
      setActiveModal("ModalOverView");
      setActiveUnitId(unitId);
    } else if (boxType === "reading") {
      setTimeout(() => {
        navigate(`/readings/${unitId}`);
      }, 100);
    } else if (boxType === "evaluation") {
      setActiveModal("ModalEvaluasi");
      setActiveUnitId(unitId);
    } else if (boxType === "exam") {
      setActiveModal("ModalUjianAkhir");
      setActiveUnitId(unitId);
    } else if (boxType.startsWith("quiz_")) {
      // Untuk kuis, kita set modalnya ke "ModalQuiz"
      setActiveModal("ModalQuiz");
      setActiveUnitId(unitId);
      setActiveQuizId(quizId);
    }
  };

  const getBoxBgColor = (unitId, boxType) => {
    return clickedBoxes[unitId]?.[boxType]
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
      <div className="w-full mx-auto h-screen overflow-auto md:p-0 flex flex-col">
        <div
          className={`w-full max-w-md mx-auto h-screen overflow-auto flex flex-col ${middleTheme()} p-5`}
        >
          <h1 className="text-xl font-semibold mb-7 flex flex-col">
            {detail?.name || "Loading..."}
          </h1>
          {filteredUnits && filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
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
                    <div className="grid grid-cols-5 gap-5 gap-y-5 p-3 w-full place-items-center rounded-md gap-x-10">
                      {/* Overview button */}
                      <span
                        onClick={() => handleBoxClick(unit.id, "overview")}
                        className={`${getBoxBgColor(
                          unit.id,
                          "overview"
                        )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                      >
                        <FaAddressBook className="text-2xl" />
                      </span>

                      {/* Reading material button */}
                      <span
                        onClick={() => handleBoxClick(unit.id, "reading")}
                        className={`${getBoxBgColor(
                          unit.id,
                          "reading"
                        )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                      >
                        <FaBook className="text-2xl" />
                      </span>

                      {/* Dynamically render quiz buttons based on section_quizzes */}
                      {unit.section_quizzes &&
                        unit.section_quizzes.map((quiz, index) => (
                          <span
                            key={quiz.id}
                            onClick={() =>
                              handleBoxClick(
                                unit.id,
                                `quiz_${quiz.id}`,
                                quiz.id
                              )
                            }
                            className={`${getBoxBgColor(
                              unit.id,
                              `quiz_${quiz.id}`
                            )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                          >
                            {index + 1}
                          </span>
                        ))}

                      {/* Evaluation button */}
                      <span
                        onClick={() => handleBoxClick(unit.id, "evaluation")}
                        className={`${getBoxBgColor(
                          unit.id,
                          "evaluation"
                        )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                      >
                        <GrHelpBook className="text-2xl" />
                      </span>

                      {/* Exam button */}
                      <span
                        onClick={() => handleBoxClick(unit.id, "exam")}
                        className={`${getBoxBgColor(
                          unit.id,
                          "exam"
                        )} flex items-center justify-center rounded-md text-2xl font-[500] w-[60px] h-[60px] transition-colors duration-200`}
                      >
                        <PiExamFill className="text-2xl" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center my-10">
              <p>Tidak ada unit ditemukan untuk tema/level ini</p>
              <p className="mt-2">
                Data untuk tema/level ini mungkin belum tersedia
              </p>
              <button
                onClick={() => navigate(-1)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Kembali
              </button>
            </div>
          )}

          {/* Render modals conditionally */}
          {activeModal === "ModalOverView" && activeUnitId && (
            <ModalOverView
              isOpen={true}
              onClose={closeModal}
              unitId={activeUnitId}
            />
          )}

          {/* Render dynamic quiz modal */}
          {activeModal === "ModalQuiz" && activeUnitId && activeQuizId && (
            <>
              {(() => {
                const QuizModal = getQuizModal(activeQuizId);
                return (
                  <QuizModal
                    isOpen={true}
                    onClose={closeModal}
                    unitId={activeUnitId}
                    quizId={activeQuizId}
                  />
                );
              })()}
            </>
          )}

          {activeModal === "ModalEvaluasi" && activeUnitId && (
            <ModalEvaluasi
              isOpen={true}
              onClose={closeModal}
              unitId={activeUnitId}
            />
          )}

          {activeModal === "ModalUjianAkhir" && activeUnitId && (
            <ModalUjianAkhir
              isOpen={true}
              onClose={closeModal}
              unitId={activeUnitId}
            />
          )}
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full md:max-w-md">
            <ButtonMobileKotak />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppearanceKotak;
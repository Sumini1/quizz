import React, { useEffect, useState, useMemo } from "react";
import { IoDiamond, IoColorPaletteSharp } from "react-icons/io5";
import { useTheme } from "../../../context/ThemeContext";
import ButtonMobileKotak from "../../../components/ListButton/ButtonMobileKotak";
import { FaArrowRightLong } from "react-icons/fa6";
import ModalMidnight from "../../../components/ModalProgress/ModalMidnight";
import ModalSkyBlue from "../../../components/ModalProgress/ModalSkyBlue"; // Impor modal khusus SkyBlue
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchUserPointById } from "../Reducer/userPoints";
import { useDispatch, useSelector } from "react-redux";

const Coba = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    theme,
    middleTheme,
    getThemeLoveClass,
    getBorderColor,
    getLatarBeranda,
    getIconTheme,
  } = useTheme();
  const [activeModal, setActiveModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const { userPoints } = useSelector(
    (state) => state.userPoint
  );
  const [userId, setUserId] = useState("");

  // Fungsi untuk menghitung total points dari data
  const calculateTotalPoints = useMemo(() => {
    if (!userPoints?.data || !Array.isArray(userPoints.data)) {
      return 0;
    }

    return userPoints.data.reduce((total, pointItem) => {
      return total + (pointItem.points || 0);
    }, 0);
  }, [userPoints]);

  useEffect(() => {
    // Ambil userId dari localStorage dan langsung fetch data
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchUserPointById(userId));
    }
  }, [dispatch]);

  // Format tanggal ke format Indonesia
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const handleSelectMidnightTheme = (index) => {
    if (index === 1) {
      // ID 2 untuk Skyward Blue
      setSelectedTheme("Skyward Blue");
      setActiveModal(true);
    } else {
      setSelectedTheme(themesByIndex[index % themesByIndex.length]);
      setActiveModal(true);
    }
  };

  const closeModal = () => {
    setActiveModal(false);
    setSelectedTheme(null);
  };

  

  const statistik = [
    {
      id: 1,
      progress: 50,
      link: "/belajar",
      position: "Belajar berturut-turut",
      icon: <img src="/Fire.png" alt="" srcset="" />,
    },
    {
      id: 2,
      progress: 1,
      link: "/posisi-level",
      position: "Pertemanan",
      icon: <img src="/People.png" alt="" srcset="" />,
    },
    {
      id: 3,
      progress: 100,
      link: "/toko-berlian",
      position: "Total Berlian",
      icon: <img src="/Diamond.png" alt="" srcset="" />,
    },

    {
      id: 4,
      progress: "Statistik",
      link: "/progress-statistic/detail",
      position: "Selengkapnya",
      icon: <img src="/Statistics.png" alt="" srcset="" />,
    },
  ];

  

  const lencanaIndex = ["satu", "dua", "tiga", "empat", "lima"];

  return (
    <>
      <div className="flex flex-col min-h-screen w-full h-full">
        <div
          className={`py-2 flex flex-col text-xl p-5 flex-grow max-w-md mx-auto w-full bg-white `}
        >
          <h1 className="text-2xl font-semibold"> Progress</h1>

       

          {/* Daftar Tema */}
          <div className="flex flex-col mt-5">
            <h2 className="text-lg font-semibold">Statistik</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {statistik.map((item) => (
               
                <Link to={item.link} key={item.id}>
                  <div
                    key={item.id}
                    className={`flex flex-col w-full border-[3px] border-[#DCE6F8] bg-white p-2 rounded-xl ${
                      theme === "dark" && "bg-gray-800 text-white"
                    }  ${theme === "lemonade" && "border-gray-400"}`}
                  >
                    <div className="flex gap-x-1  w-full">
                      <div className={`text-2xl items-center flex w-5 h-5 `}>
                        {item.icon}
                      </div>
                      <p className="text-center text-base font-semibold">
                        {item.progress}
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-semibold">
                      {item.position}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

         
        

          {activeModal && selectedTheme === "Skyward Blue" && (
            <ModalSkyBlue isOpen={activeModal} onClose={closeModal} />
          )}

          {activeModal && selectedTheme !== "Skyward Blue" && selectedTheme && (
            <ModalMidnight isOpen={activeModal} onClose={closeModal} />
          )}
        </div>
      </div>

      {/* Sticky Button */}
      <div className="flex justify-center w-full sticky bottom-0">
        <div className="w-full md:max-w-md">
          <ButtonMobileKotak />
        </div>
      </div>
    </>
  );
};

export default Coba;

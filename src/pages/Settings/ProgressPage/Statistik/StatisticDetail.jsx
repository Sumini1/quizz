import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStarOfDavid, FaAward, FaCirclePlus } from "react-icons/fa6";
import { AiTwotoneTags } from "react-icons/ai";
import { IoDiamond, IoColorPaletteSharp } from "react-icons/io5";
import { useTheme } from "../../../../context/ThemeContext";
import ButtonMobileKotak from "../../../Features/Units/Modal/ButtonMobileKotak";
import { FaArrowRightLong } from "react-icons/fa6";
import ModalMidnight from "../../../../components/ModalProgress/ModalMidnight";
import ModalSkyBlue from "../../../../components/ModalProgress/ModalSkyBlue"; // Impor modal khusus SkyBlue
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StatisticDetail = () => {
  const navigate = useNavigate();
  const {
    theme,
    getThemeLoveClass,
    getBorderColor,
    getLatarBeranda,
    getIconTheme,
  } = useTheme();
  const [activeModal, setActiveModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const closeModal = () => {
    setActiveModal(false);
    setSelectedTheme(null);
  };

  const penghargaan = [
    {
      id: 1,
      name: "Shapire",
      level: "Level donatur",
      link: "/progress/level-donatur",
      icon: <img src="/Shapir.png" alt="" />,
    },
    {
      id: 2,
      name: "Pemula",
      level: "Pangkat",
      link: "/pangkat",
      icon: <img src="/iconPemula.png" alt="" />,
    },
    {
      id: 3,
      name: 100,
      level: "Pembuatan Soal Materi",
      link: "/progress/pembuatan-soal",
      icon: <img src="/document.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: 1000,
      level: "Posisi Level",
      link: "/progress-statistic/detail",
      icon: <img src="/Rank.png" alt="" srcset="" />,
    },

    {
      id: 5,
      name: 1,
      level: "Lencana",
      link: "/lencana-belajar",
      icon: <img src="/iconLencana.png" alt="" srcset="" />,
    },
  ];

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
      progress: 100,
      link: "/progress-statistic/detail",
      position: "Sertifikat Didapatkan",
      icon: <img src="/belajar.png" alt="" srcset="" />,
    },
    {
      id: 5,
      progress: 100,
      link: "/progress-statistic/detail",
      position: "Total Poin",
      icon: <img src="/Coins.png" alt="" srcset="" />,
    },
  ];

  const analisis = [
    {
      id: 1,
      progress: 100,
      link: "/progress-analisis",
      position: "Pembelajaran Tuntas",
      icon: <img src="/Books.png" alt="" srcset="" />,
    },
    {
      id: 2,
      progress: "100%",
      link: "/progress-analisis",
      position: "Total hari belajar",
      icon: <img src="/Calendar.png" alt="" srcset="" />,
    },
    {
      id: 3,
      progress: 100,
      link: "/progress-analisis",
      position: "Durasi belajar",
      icon: <img src="/timbangan.png" alt="" srcset="" />,
    },
    {
      id: 4,
      progress: 100,
      link: "/progress-analisis",
      position: "Soal terjawab",
      icon: <img src="/question.png" alt="" srcset="" />,
    },
    {
      id: 5,
      progress: 100,
      link: "/progress-analisis",
      position: "Jawaban benar",
      icon: <img src="/Done.png" alt="" srcset="" />,
    },
    {
      id: 6,
      progress: 100,
      link: "/progress-analisis",
      position: "Artikel dibaca",
      icon: <img src="/Books.png" alt="" srcset="" />,
    },
  ];

  return (
    <>
      <div className={`flex flex-col    p-5 `}>
        <h1 className="text-xl font-semibold"> Progress</h1>

        {/* Penghargaan */}
        <div className="flex flex-col mt-5">
          <h2 className="text-lg font-[500] ">Penghargaan</h2>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {penghargaan.map((item) => (
              <Link to={item.link} key={item.id}>
                <div
                  className={`flex flex-col w-full border-[3px] p-2 rounded-xl ${
                    Number(item.id) === 1
                      ? "border-[#0961F5] bg-[#DCE6F8]"
                      : Number(item.id) === 2
                      ? "border-[#E4C726] bg-[#FFFEF1]"
                      : "border-[#DCE6F8] bg-white"
                  } ${theme === "dark" && "bg-gray-800 text-white"} ${
                    theme === "lemonade" && "border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-x-1">
                    <div
                      className={`text-2xl w-6 h-6 flex ${getThemeLoveClass()}`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-center text-sm">{item.name}</p>
                  </div>
                  <p className="mt-3 text-xs font-[500] ">{item.level}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Daftar Tema */}
        <div className="flex flex-col mt-5">
          <h2 className="text-lg font-[500]">Statistik</h2>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {statistik.map((item) => (
              <Link to={item.link}>
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
                    <p className="text-center text-sm font-medium">
                      {item.progress}
                    </p>
                  </div>
                  <p className="mt-3 text-xs font-[500]">{item.position}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Analisis */}
        <div className="flex flex-col mt-5 mb-8">
          <h2 className="text-lg font-[500]">Analisis</h2>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {analisis.map((item) => (
              <Link to={item.link}>
                <div
                  key={item.id}
                  className={`flex flex-col w-full border-[3px] border-[#DCE6F8] bg-white p-2 rounded-xl ${
                    theme === "dark" && "bg-gray-800 text-white"
                  }  ${theme === "lemonade" && "border-gray-400"}`}
                >
                  <div className="flex gap-x-1  w-full">
                    <div className={`text-2xl items-center flex w-6 h-6 `}>
                      {item.icon}
                    </div>
                    <p className="text-center text-sm font-medium">
                      {item.progress}
                    </p>
                  </div>
                  <p className="mt-3 text-xs font-[500]">{item.position}</p>
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

      {/* Sticky Button */}
      <div className="fixed bottom-0 w-full">
        <ButtonMobileKotak className="p-0 m-0 bg-blue-500 text-white flex justify-center items-center h-12" />
      </div>
    </>
  );
};

export default StatisticDetail;

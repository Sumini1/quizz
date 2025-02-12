import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStarOfDavid, FaAward, FaCirclePlus } from "react-icons/fa6";
import { AiTwotoneTags } from "react-icons/ai";
import { IoDiamond, IoColorPaletteSharp } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import ButtonMobileKotak from "../../components/Appearance/ButtonMobileKotak";
import { FaArrowRightLong } from "react-icons/fa6";
import ModalMidnight from "../../components/ModalProgress/ModalMidnight";
import ModalSkyBlue from "../../components/ModalProgress/ModalSkyBlue"; // Impor modal khusus SkyBlue
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Progress = () => {
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
      progress: "Statistik",
      link: "/progress-statistic/detail",
      position: "Selengkapnya",
      icon: <img src="/Statistics.png" alt="" srcset="" />,
    },
  ];

  const pencapaian = [
    {
      id: 1,
      name: "Warna",
      icon: <IoDiamond />,
      type: "Midnight Breeze-Softlight",
      progress: 100,
    },
    {
      id: 2,
      name: "Warna",
      icon: <IoDiamond />,
      type: "Skyward Blue",
      progress: 100,
    },
    {
      id: 3,
      name: "Warna",
      icon: <IoDiamond />,
      type: "Midnight Breeze-Softlight",
      progress: 100,
    },
    {
      id: 4,
      name: "Warna",
      link: "#",
      icon: <IoDiamond />,
      type: "Skyward Blue",
      progress: 100,
    },

    {
      id: 5,
      name: "Pencapaian Lainnya",
      link: "#",
      icon: <FaArrowRightLong />,
    },
  ];

  const themesByIndex = ["dark", "cupcake", "lemonade", "light", "bumblebee"];

  const lencanaBelajar = [
    {
      id: 1,
      name: "Login",
      icon: <IoDiamond />,
      type: "Login 7 hari berturut-turut",
      link: "/lencana-belajar",
      progress: 100,
    },
    {
      id: 2,
      name: "Poin",
      icon: <IoDiamond />,
      type: "Mencapai 200 poin",
      link: "/lencana",
      progress: 100,
    },
    {
      id: 3,
      name: "Login",
      icon: <IoDiamond />,
      type: "Belajar 300 poin",
      link: "/lencana",
      progress: 100,
    },
    {
      id: 4,
      name: "Login",
      icon: <IoDiamond />,
      type: "Belajar 30 hari tanpa henti",
      link: "/lencana",
      progress: 100,
    },

    {
      id: 5,
      name: "Pencapaian Lainnya",
      link: "#",
      icon: <FaArrowRightLong />,
    },
  ];

  const lencanaIndex = ["satu", "dua", "tiga", "empat", "lima"];

  return (
    <>
      <div className={`flex flex-col  h-[470px]  p-5 ${getLatarBeranda()}`}>
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

        {/* Pencapaian  Warna tema*/}
        <div className="flex flex-col mt-8">
          <h2 className="text-lg font-[500] mb-1">Hadiah Pencapaian</h2>
          <h5 className="text-sm font-medium">
            Merupakan hadiah yang akan didapatkan saat posisi level dicapai.
            Hadiah dapat berupa tema, warna, lencana maupun pangkat.
          </h5>

          <div className="grid grid-cols-1 mb-10 gap-y-0">
            <div className="grid grid-cols-1 mt-5 gap-y-0">
              {pencapaian.map((item, index) => {
                const itemTheme = themesByIndex[index % themesByIndex.length];
                const isSpecialId = item.id === 5;
                const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
                const heightClass = isSpecialId
                  ? "h-[40px] justify-center"
                  : "h-[70px]";
                const themeClasses =
                  itemTheme === "dark"
                    ? `  rounded-b-none bg-[#36454F] text-[#87CEEB] border-[1px] ${getBorderColor()}`
                    : itemTheme === "cupcake"
                    ? ` rounded-t-none rounded-b-none bg-[#EDEFF2] text-[#0961F5] border-[1px]  ${getBorderColor()}`
                    : itemTheme === "lemonade"
                    ? ` rounded-t-none rounded-b-none border-[1px] bg-[#FF6A88] text-[#4B4B4B] ${getBorderColor()}`
                    : itemTheme === "light"
                    ? `bg-white text-[#4B4B4B] rounded-t-none rounded-b-none border-[1px]    ${getBorderColor()}`
                    : itemTheme === "bumblebee"
                    ? `bg-white text-[#4B4B4B] rounded-t-none  border-[1px] rounded-b-xl    ${getBorderColor()}`
                    : // : itemTheme === "emerald"
                      // ? " rounded-t-none rounded-b-none border-gray-400 "
                      ` rounded-t-none rounded-b-none border-[1px]  ${getBorderColor()}`;

                return (
                  <Link to={item.link}>
                    <div
                      key={item.id}
                      // onClick={() => handleSelectMidnightTheme(item.id - 1)}
                      className={`${commonClasses} ${heightClass} ${themeClasses}`}
                    >
                      <div className="flex items-center gap-x-2">
                        <h5
                          className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                            item.id === 1
                              ? "bg-white text-[#222]"
                              : item.id === 2
                              ? "bg-white text-[#222]"
                              : item.id === 3
                              ? "bg-white text-[#222]"
                              : item.id === 4
                              ? "bg-[#0961F5] text-white"
                              : ""
                          }
                          }`}
                        >
                          {!isSpecialId && item.id}
                        </h5>

                        <div className="flex flex-col">
                          <h5
                            className={`font-medium  ${
                              isSpecialId && "text-center flex -ml-14"
                            }`}
                          >
                            {item.name}
                          </h5>
                          <h5 className="mt-2 text-xs">{item.type}</h5>
                        </div>
                        <Link to={"/hadiah-pencapaian"} className=" ml-auto">
                          <div
                            className={` flex mx-3 gap-3 justify-center items-center font-bold ${getIconTheme()} ${
                              item.id === 5 && "text-[#4B4B4B]"
                            }`}
                          >
                            <h5
                              className={`font-medium  ${
                                isSpecialId && "text-xl -mr-2"
                              }`}
                            >
                              {item.icon}
                            </h5>
                            <h5>{item.progress}</h5>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lencana Belajar */}
        <div className="flex flex-col ">
          <h2 className="text-lg font-[500] mb-2">Lencana Belajar</h2>
          <h5 className="text-sm font-medium">
            Kumpulkan lencana sebagai bentuk penghargaan atas segala dedikasimu
            dalam belajar.
          </h5>
          <div className="grid grid-cols-1 mb-10 gap-y-0">
            <div className="grid grid-cols-1 mt-5 gap-y-0">
              {lencanaBelajar.map((item, index) => {
                const itemTheme = lencanaIndex[index % lencanaIndex.length];
                const isSpecialId = item.id === 5;
                const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
                const heightClass = isSpecialId
                  ? "h-[40px] justify-center"
                  : "h-[70px]";
                const themeClasses =
                  itemTheme === "satu"
                    ? `  rounded-b-none border-[1px] ${getBorderColor()}`
                    : itemTheme === "dua"
                    ? ` rounded-t-none rounded-b-none border-[1px]  ${getBorderColor()}`
                    : itemTheme === "tiga"
                    ? ` rounded-t-none rounded-b-none border-[1px]  ${getBorderColor()}`
                    : itemTheme === "empat"
                    ? `bg-white text-[#4B4B4B] rounded-t-none rounded-b-none border-[1px]    ${getBorderColor()}`
                    : itemTheme === "lima"
                    ? `bg-white text-[#4B4B4B] rounded-t-none  border-[1px] rounded-b-xl    ${getBorderColor()}`
                    : // : itemTheme === "emerald"
                      // ? " rounded-t-none rounded-b-none border-gray-400 "
                      ` rounded-t-none rounded-b-none border-[1px]  ${getBorderColor()}`;

                return (
                  <Link to={item.link}>
                    <div
                      key={item.id}
                      // onClick={() => handleSelectMidnightTheme(item.id - 1)}
                      className={`${commonClasses} ${heightClass} ${themeClasses}`}
                    >
                      <div className="flex items-center gap-x-2">
                        <h5
                          className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                            isSpecialId
                              ? "bg-transparent text-[#222]"
                              : "bg-blue-500 text-white"
                          }`}
                        >
                          {!isSpecialId && item.id}
                        </h5>

                        <div className="flex flex-col">
                          <h5
                            className={`font-medium  ${
                              isSpecialId && "text-center flex -ml-14"
                            }`}
                          >
                            {item.name}
                          </h5>
                          <h5 className="mt-2 text-xs">{item.type}</h5>
                        </div>
                        <div
                          className={` ml-auto flex mx-3 gap-3 justify-center items-center font-bold ${getIconTheme()} ${
                            item.id === 5 && "text-[#4B4B4B]"
                          }`}
                        >
                          <h5
                            className={`font-medium  ${
                              isSpecialId && "text-xl -mr-2"
                            }`}
                          >
                            {item.icon}
                          </h5>
                          <h5>{item.progress}</h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
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

export default Progress;

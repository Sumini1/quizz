import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStarOfDavid, FaAward, FaCirclePlus } from "react-icons/fa6";
import { AiTwotoneTags } from "react-icons/ai";
import { IoDiamond, IoColorPaletteSharp } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import { MdPointOfSale } from "react-icons/md";
import { PiListHeartFill } from "react-icons/pi";
import ButtonMobileKotak from "../../components/Appearance/ButtonMobileKotak";
import { FaArrowRightLong } from "react-icons/fa6";
import ModalMidnight from "../../components/ModalProgress/ModalMidnight";
import ModalSkyBlue from "../../components/ModalProgress/ModalSkyBlue"; // Impor modal khusus SkyBlue

const Progress = () => {
  const { theme, getThemeLoveClass, getButtonClass, getThemeClass } =
    useTheme();
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

  const statistik = [
    {
      id: 1,
      name: "Thunder Progress",
      progress: 50,
      link: "#",
      icon: <AiFillThunderbolt />,
    },
    {
      id: 2,
      name: "Star Progress",
      progress: 1,
      link: "#",
      icon: <FaStarOfDavid />,
    },
    { id: 3, name: "Lencana", progress: 1, link: "#", icon: <FaAward /> },
    { id: 4, name: "Pemula", progress: 1, link: "#", icon: <AiTwotoneTags /> },
    {
      id: 5,
      name: "Total Berlian",
      progress: 1,
      link: "#",
      icon: <IoDiamond />,
    },
    {
      id: 6,
      name: "Total Point",
      progress: 1000,
      link: "#",
      icon: <MdPointOfSale />,
    },
  ];

  const thema = [
    {
      id: 1,
      name: "Clean Grid",
      type: "Tema",
      icon: <PiListHeartFill />,
    },
    {
      id: 2,
      name: "Midnight Breeze-Softlight",
      type: "Color",
      icon: <IoColorPaletteSharp />,
    },
  ];

  const pencapaian = [
    {
      id: 1,
      name: "Tema",
      icon: <IoDiamond />,
      type: "Midnight Breeze-Softlight",
      progress: 100,
    },
    {
      id: 2,
      name: "Tema",
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
      name: "Tema",
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

  return (
    <>
      <div className="flex flex-col min-h-screen mt-5 p-5">
        <h1 className="text-xl font-semibold">Halaman Progress</h1>

        {/* Statistik */}
        <div className="flex flex-col mt-5">
          <h2 className="text-lg font-semibold">Statistik</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {statistik.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col w-full border-4 border-gray-200 p-3 rounded-xl ${
                  theme === "dark" && "bg-gray-800 text-white"
                }  ${theme === "lemonade" && "border-gray-400"}`}
              >
                <div className="flex items-center gap-x-2">
                  <div className={`text-2xl ${getThemeLoveClass()}`}>
                    {item.icon}
                  </div>
                  <p className="text-center">{item.progress}</p>
                  {item.id === 5 && (
                    <div className="flex justify-center">
                      <FaCirclePlus className="text-xl -mt-4" />
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Daftar Tema */}
        <div className="flex flex-col mt-5">
          <h2 className="text-lg font-semibold">Daftar Tema</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {thema.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col w-full border-4 border-gray-200 p-3 rounded-xl ${
                  theme === "dark" && "bg-gray-800 text-white"
                }  ${theme === "lemonade" && "border-gray-400"}`}
              >
                <div className="flex gap-x-2 w-full">
                  <div className={`text-2xl ${getThemeLoveClass()}`}>
                    {item.icon}
                  </div>
                  <p>{item.name}</p>
                </div>
                <p className="mt-3 text-sm font-medium">{item.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pencapaian */}
        <div className="flex flex-col mt-5">
          <h1 className="text-lg font-semibold mb-2">Pencapaian</h1>
          <p className="text-md">
            Merupakan hadiah yang akan didapatkan saat posisi level dicapai.
            Hadiah dapat berupa tema, warna, lencana maupun pangkat.
          </p>
          <div className="grid grid-cols-1 mt-5 gap-y-0">
            {pencapaian.map((item, index) => {
              const itemTheme = themesByIndex[index % themesByIndex.length];
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectMidnightTheme(item.id - 1)}
                  className={`flex flex-col w-full  p-3 rounded-xl ${
                    item.id === 5 ? "h-[40px] justify-center " : "h-[70px]"
                  }  ${
                    itemTheme === "dark"
                      ? "bg-[#123456] text-white rounded-b-none  border-[3px] border-y-[1px] border-gray-400"
                      : itemTheme === "cupcake"
                      ? "bg-pink-500  text-white rounded-t-none rounded-b-none border-[3px] border-y-[1px] border-gray-400"
                      : itemTheme === "lemonade"
                      ? "bg-yellow-400  text-white rounded-t-none rounded-b-none border-[3px] border-y-[1px] border-gray-400"
                      : itemTheme === "bumblebee"
                      ? "bg-green-600 text-white rounded-t-none  border-[3px] border-y-[1px] border-b-2 border-gray-400"
                      : itemTheme === "emerald"
                      ? "bg-gray-800 text-white rounded-t-none rounded-b-none border-[3px] border-y-[1px] border-gray-400"
                      : "bg-gray-400  text-white rounded-t-none rounded-b-none border-[3px] border-y-[1px] border-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-x-2">
                    <p
                      className={` ${getThemeLoveClass()} border-none p-1 w-[40px] mx-3 flex items-center justify-center text-xl h-[40px] rounded-full ${
                        item.id === 5 ? "bg-transparent" : "bg-white"
                      }`}
                    >
                      {item.id !== 5 && item.id}
                    </p>
                    <div className="flex flex-col">
                      <p
                        className={`font-medium ${
                          item.id === 5 && "text-center flex -ml-14"
                        } `}
                      >
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm">{item.type}</p>
                    </div>
                    <div className="ml-auto flex mx-3 gap-3 justify-center items-center">
                      <p
                        className={`font-medium  ${
                          item.id === 5 && "text-xl -mr-2 "
                        }`}
                      >
                        {" "}
                        {item.icon}
                      </p>
                      <p>{item.progress}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
      <div className="sticky bottom-0 w-full">
        <ButtonMobileKotak className="p-0 m-0 bg-blue-500 text-white flex justify-center items-center h-12" />
      </div>
    </>
  );
};

export default Progress;

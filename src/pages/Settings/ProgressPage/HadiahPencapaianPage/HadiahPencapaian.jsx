import React, { useState } from "react";
import { FaArrowLeft, FaGifts, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";
import { AiOutlineGift } from "react-icons/ai";
import { IoDiamond, IoColorPaletteSharp } from "react-icons/io5";
import { GrStarOutline } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";



const HadiahPencapaian = () => {
  const { getBorderColor, getButtonClass, getBorder, getIconTheme } =
    useTheme();
  const [activeTab, setActiveTab] = useState("hadiah-tersedia");
     const [isSearchActive, setIsSearchActive] = useState(false);

  

  const tabs = [
    {
      id: "hadiah-tersedia",
      icon: <FaGifts className="w-[20px] h-[20px]" />,
    },
    {
      id: "hadiah-saya",
      icon: <AiOutlineGift className="w-[20px] h-[20px]" />,
    },
  ];

  const lencanaPelopor = [
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
      name: "Lencana",
      link: "#",
      icon: <GrStarOutline />,
      type: "Awalan yang bagus",
      // progress: 100,
    },
  ];

  const penjelajahMuda = [
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
      name: "Lencana",
      link: "#",
      icon: <GrStarOutline />,
      type: "Awalan yang bagus",
      // progress: 100,
    },
  ];

  const pemula = [
    {
      id: 1,
      name: "Warna",
      icon: <FaCheck />,
      type: "Midnight Breeze-Softlight",
    },
    {
      id: 2,
      name: "Warna",
      icon: <FaCheck />,
      type: "Skyward Blue",
    },
    {
      id: 3,
      name: "Warna",
      icon: <FaCheck />,
      type: "Midnight Breeze-Softlight",
    },
    {
      id: 4,
      name: "Lencana",
      link: "#",
      icon: <GrStarOutline />,
      type: "Awalan yang bagus",
      // progress: 100,
    },
  ];
  const themesByIndex = ["dark", "cupcake", "lemonade", "light"];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center mr-20">
        <Link to={"/progress"}>
          <div className="flex items-center gap-3 mt-5 px-5 text-lg mb-8">
            <FaArrowLeft />
            <h1 className="font-semibold">Hadiah Pencapaian</h1>
          </div>
        </Link>
        <CiSearch
          className="text-2xl -mt-4 cursor-pointer"
          onClick={() => setIsSearchActive((prev) => !prev)} // Toggle input search
        />
      </div>

      <div className="flex flex-col px-5">
        <div
          className={`flex gap-3 text-sm font-normal justify-between ${getBorder()}`}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 text-sm font-medium p-2 rounded-full transition-all duration-300 w-1/2
                ${
                  activeTab === tab.id
                    ? `${getButtonClass()} border-[#DCE6F8] border-[4px] justify-center`
                    : "bg-transparent justify-center border-gray-300"
                } cursor-pointer
              `}
            >
              {tab.icon}
              <span>
                {tab.id
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start justify-between">
          {activeTab === "hadiah-tersedia" && (
            <div className="flex flex-col w-full ">
              {isSearchActive && (
                <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mb-4">
                  <input
                    type="text"
                    placeholder="Cari hadiah yang tersedia..."
                    className="bg-transparent w-full pl-10 rounded-xl outline-none"
                  />
                  <CiSearch className="absolute left-3 text-xl text-gray-500" />
                </div>
              )}
              {/* Konten Hadiah Tersedia */}
              <p className="text-sm font-normal">
                Merupakan hadiah yang akan didapatkan saat posisi level dicapai.
                Hadiah dapat berupa tema, warna, lencana maupun pangkat.
              </p>
              <div className="flex items-center gap-1 mt-5">
                <img src="/pangkat2.png" alt="" srcset="" />
                <p className="text-sm font-semibold">Pelopor (11 - 20)</p>
              </div>
              <div className="grid grid-cols-1 justify-center gap-y-0">
                <div className="grid grid-cols-1 mt-2 gap-y-0">
                  {lencanaPelopor.map((item, index) => {
                    const itemTheme =
                      themesByIndex[index % themesByIndex.length];
                    const isSpecialId = item.id === 5;
                    const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
                    const heightClass = isSpecialId
                      ? "h-[40px] justify-center"
                      : "h-[70px]";
                    const themeClasses =
                      itemTheme === "dark"
                        ? `bg-[#123456] text-[#87CEEB] rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                        : itemTheme === "cupcake"
                        ? `bg-[#DDDDDD] text-[#0961F5] rounded-t-none rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                        : itemTheme === "lemonade"
                        ? `bg-gradient-to-r from-white to-rose-500 text-[#4B4B4B] rounded-t-none rounded-b-none border-[1px] border-y-[1px]  ${getBorderColor()}`
                        : `bg-white text-[#4B4B4B] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`;

                    return (
                      <div
                        key={item.id}
                        className={`${commonClasses} ${heightClass} ${themeClasses}`}
                      >
                        <div className="flex items-center gap-x-2 justify-center">
                          <h5
                            className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                              isSpecialId
                                ? "bg-transparent text-[#222]"
                                : itemTheme === "light" ||
                                  itemTheme === "bumblebee"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-[#222]"
                            }`}
                          >
                            {!isSpecialId && item.id}
                          </h5>

                          <div className="flex flex-col">
                            <h5
                              className={`font-medium text-sm mt-1  ${
                                isSpecialId && "text-center flex -ml-14"
                              }`}
                            >
                              {item.name}
                            </h5>
                            <h5 className="mt-2 text-xs">{item.type}</h5>
                          </div>

                          <div
                            className={`ml-auto flex mx-3 gap-3 justify-center items-center font-bold ${getIconTheme()} ${
                              item.id === 5 && "text-[#4B4B4B]"
                            }`}
                          >
                            <h5
                              className={`font-medium  ${
                                isSpecialId && "text-xl -mr-2"
                              }  ${item.id === 4 && "text-3xl text-blue-500"}`}
                            >
                              {item.icon}
                            </h5>
                            <h5>{item.progress}</h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* pelopor2  penjelajah muda*/}
              <div className="flex  items-center mt-5">
                <img src="/pangkat2.png" alt="" srcset="" />
                <p className="text-sm font-semibold">
                  Penjelajah Muda (21 - 30)
                </p>
              </div>
              <div className="grid grid-cols-1 justify-center gap-y-0">
                <div className="grid grid-cols-1 mt-2 gap-y-0">
                  {penjelajahMuda.map((item, index) => {
                    const itemTheme =
                      themesByIndex[index % themesByIndex.length];
                    const isSpecialId = item.id === 5;
                    const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
                    const heightClass = isSpecialId
                      ? "h-[40px] justify-center"
                      : "h-[70px]";
                    const themeClasses =
                      itemTheme === "dark"
                        ? `bg-[#123456] text-[#87CEEB] rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                        : itemTheme === "cupcake"
                        ? `bg-[#DDDDDD] text-[#0961F5] rounded-t-none rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                        : itemTheme === "lemonade"
                        ? `bg-gradient-to-r from-white to-rose-500 text-[#4B4B4B] rounded-t-none rounded-b-none border-[1px] border-y-[1px]  ${getBorderColor()}`
                        : `bg-white text-[#4B4B4B] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`;

                    return (
                      <div
                        key={item.id}
                        className={`${commonClasses} ${heightClass} ${themeClasses}`}
                      >
                        <div className="flex items-center gap-x-2 justify-center mb-5">
                          <h5
                            className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                              isSpecialId
                                ? "bg-transparent text-[#222]"
                                : itemTheme === "light" ||
                                  itemTheme === "bumblebee"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-[#222]"
                            }`}
                          >
                            {!isSpecialId && item.id}
                          </h5>

                          <div className="flex flex-col">
                            <h5
                              className={`font-medium text-sm  mt-1  ${
                                isSpecialId && "text-center flex -ml-14"
                              }`}
                            >
                              {item.name}
                            </h5>
                            <h5 className="mt-2 text-xs">{item.type}</h5>
                          </div>

                          <div
                            className={`ml-auto flex mx-3 gap-3 justify-center items-center font-bold ${getIconTheme()} ${
                              item.id === 5 && "text-[#4B4B4B]"
                            }`}
                          >
                            <h5
                              className={`font-medium  ${
                                isSpecialId && "text-xl -mr-2"
                              }  ${item.id === 4 && "text-3xl text-blue-500"}`}
                            >
                              {item.icon}
                            </h5>
                            <h5>{item.progress}</h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === "hadiah-saya" && (
            <div className="flex flex-col w-full">
              {isSearchActive && (
                <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mb-4">
                  <input
                    type="text"
                    placeholder="Cari hadiah saya..."
                    className="bg-transparent w-full pl-10 rounded-xl outline-none"
                  />
                  <CiSearch className="absolute left-3 text-xl text-gray-500" />
                </div>
              )}

              <p className="text-sm font-normal  ">
                Merupakan hadiah yang akan didapatkan saat posisi level dicapai.
                Hadiah dapat berupa tema, warna, lencana maupun pangkat.
              </p>
              <div className="flex  items-center mt-5">
                <img src="/pangkat2.png" alt="" srcset="" />
                <p className="text-sm font-semibold">Pemula (1 - 10)</p>
              </div>
              <div className="grid grid-cols-1 justify-center gap-y-0">
                <div className="grid grid-cols-1 mt-2 gap-y-0">
                  {pemula.map((item, index) => {
                    const itemTheme =
                      themesByIndex[index % themesByIndex.length];
                    const isSpecialId = item.id === 5;
                    const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
                    const heightClass = isSpecialId
                      ? "h-[40px] justify-center"
                      : "h-[70px]";
                    const themeClasses =
                      itemTheme === "dark"
                        ? `bg-[#123456] text-[#87CEEB] rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                        : itemTheme === "cupcake"
                        ? `bg-[#DDDDDD] text-[#0961F5] rounded-t-none rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                        : itemTheme === "lemonade"
                        ? `bg-gradient-to-r from-white to-rose-500 text-[#4B4B4B] rounded-t-none rounded-b-none border-[1px] border-y-[1px]  ${getBorderColor()}`
                        : `bg-white text-[#4B4B4B] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`;

                    return (
                      <div
                        key={item.id}
                        className={`${commonClasses} ${heightClass} ${themeClasses}`}
                      >
                        <div className="flex items-center gap-x-2 justify-center ">
                          <h5
                            className={`border-none w-[30px]  mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                              isSpecialId
                                ? "bg-transparent text-[#222]"
                                : itemTheme === "light" ||
                                  itemTheme === "bumblebee"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-[#222] items-center justify-center"
                            }`}
                          >
                            {!isSpecialId && item.id}
                          </h5>

                          <div className="flex flex-col ">
                            <h5
                              className={`font-medium text-sm mt-1  ${
                                isSpecialId && "text-center flex -ml-14"
                              }`}
                            >
                              {item.name}
                            </h5>
                            <h5 className="mt-2 text-xs">{item.type}</h5>
                          </div>

                          <div
                            className={`ml-auto flex mx-3  gap-3 justify-center items-center font-bold ${getIconTheme()} ${
                              item.id === 5 && "text-[#4B4B4B]"
                            }`}
                          >
                            <h5
                              className={`font-medium text-2xl  ${
                                isSpecialId && "text-xl -mr-2"
                              }  ${item.id === 4 && "text-3xl text-blue-500"}`}
                            >
                              {item.icon}
                            </h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HadiahPencapaian;

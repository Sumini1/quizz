import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdStarBorderPurple500 } from "react-icons/md";
import { useTheme } from "../../../../context/ThemeContext";
import { BsAwardFill } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Lencana = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("belajar");
  const { getBorderColor, getButtonClass, getBorder } = useTheme();
  const [isSearchActive, setIsSearchActive] = useState(false);

  const lencanaBelajar = [
    { id: 1, name: "Umum" },
    { id: 2, name: "Donatur" },
    { id: 3, name: "Model Utama" },
    { id: 4, name: "Agenda Spesial" },
    { id: 5, name: "Tematik Pilihan" },
    { id: 5, name: "Agenda Harian" },
  ];
  const lencanaDonatur = [
    { id: 1, name: "Umum" },
    { id: 2, name: "Donatur" },
    { id: 3, name: "Model Utama" },
    { id: 4, name: "Agenda Spesial" },
    { id: 5, name: "Tematik Pilihan" },
    { id: 5, name: "Agenda Harian" },
  ];

  const level = [
    {
      id: 1,
      name: "Login Lv-4",
      day: 180,
      ket: "berturut-turut",
      point: 60,
      icon: <MdStarBorderPurple500 />,
    },
    {
      id: 2,
      name: "Login Lv-5",
      day: "Belajar 360 hari",
      ket: "berturut-turut",
      point: 360,
      icon: <MdStarBorderPurple500 />,
    },
    {
      id: 3,
      name: "Login Lv-6",
      day: "Belajar 720 hari",
      ket: "berturut-turut",
      point: 240,
      icon: <MdStarBorderPurple500 />,
    },
    {
      id: 4,
      name: "Cerdas Lv-1",
      day: "Meraih nilai 90% pada",
      ket: "100 pelajaran",
      point: 60,
      icon: <MdStarBorderPurple500 />,
    },
    {
      id: 5,
      name: "Ceerdas Lv-2",
      day: "Meraih nilai 90% pada",
      ket: "200 pelajaran",
      point: 120,
      icon: <MdStarBorderPurple500 />,
    },
    {
      id: 6,
      name: "Cerdas Lv-4",
      day: "Meraih nilai 90% pada",
      ket: "420 pelajaran",
      point: 240,
      icon: <MdStarBorderPurple500 />,
    },
  ];

  const levelDonatur = [
    {
      id: 1,
      name: "Shappire Lv-1",
      day: 180,
      ket: "berturut-turut",
      point: 60,
      icon: <img src="/ShapirTab.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Shappir Lv-2",
      day: "Belajar 360 hari",
      ket: "berturut-turut",
      point: 360,
      icon: <img src="/ShapirTab.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Shappir Lv-3",
      day: "Belajar 720 hari",
      ket: "berturut-turut",
      point: 240,
      icon: <img src="/ShapirTab.png" alt="" srcset="" />,
    },
  ];
  const lencanaKoleksi = [
    {
      icon: <img src="/papper.png" alt="" srcset="" />,
      name: "Lencana Belajar",
      symbol: <RiArrowRightSLine />,
    },
    {
      icon: <img src="/papper.png" alt="" srcset="" />,
      name: "Lencana Donatur",
      symbol: <RiArrowRightSLine />,
    },
  ];

  const levelKoleksi = [
    {
      id: 1,
      name: "Cerdas Lv-1",
      day: 180,
      ket: "berturut-turut",
      point: 60,
      icon: <MdStarBorderPurple500 />,
    },
    {
      id: 2,
      name: "Cerdas Lv-2",
      day: "Belajar 360 hari",
      ket: "berturut-turut",
      point: 360,
      icon: <MdStarBorderPurple500 />,
    },
    {
      id: 3,
      name: "Cerdas Lv-3",
      day: "Belajar 720 hari",
      ket: "berturut-turut",
      point: 240,
      icon: <MdStarBorderPurple500 />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center mr-20">
        
          <div
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 mt-5 px-5 text-lg mb-8">
            <FaArrowLeft />
            <h1 className="font-semibold">Lencana</h1>
          </div>
        
        <IoSearch
          className="text-2xl -mt-4 cursor-pointer"
          onClick={() => setIsSearchActive((prev) => !prev)} // Toggle input search
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col px-5">
        {/* fitur tab */}
        <div
          className={`flex gap-4 text-sm font-normal justify-center ${getBorder()}`}
        >
          {["belajar", "donatur", "koleksi"].map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`
              flex items-center gap-2 p-2  rounded-full transition-all duration-300
              ${
                activeTab === tab
                  ? ` ${getButtonClass()} w-[200px] border-[#DCE6F8] border-[4px] justify-center`
                  : "bg-transparent border-gray-300 w-[100px] justify-center"
              } cursor-pointer
            `}
            >
              {tab === "belajar" && (
                <BsAwardFill className="w-[20px] h-[20px]" />
              )}
              {tab === "donatur" && (
                <FaDonate
                  className={`w-[20px] h-[20px] ${
                    activeTab === tab && "text-white"
                  }`}
                />
              )}
              {tab === "koleksi" && (
                <FaUserCheck className="w-[20px] h-[20px]" />
              )}
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </div>
          ))}
        </div>

        {/* Bagian tab belajar */}
        {activeTab === "belajar" && (
          <>
            {isSearchActive && (
              <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mt-5">
                <input
                  type="text"
                  placeholder="Cari level belajar..."
                  className="bg-transparent w-full pl-10 rounded-xl outline-none"
                />
                <IoSearch className="absolute left-3 text-xl text-gray-500" />
              </div>
            )}

            {/* Name */}
            <div className="overflow-x-auto  mt-5 nowrap pb-4 flex gap-3  scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack">
              {lencanaBelajar.map((item) => (
                <div
                  key={item.id}
                  className={`bg-[#EEE] px-3 py-2 rounded-full flex-shrink-0 transition-opacity duration-700 ease-in-out ${
                    item.id == 1 && "bg-[hsl(218,93%,50%)] text-white"
                  }`}
                >
                  <h5 className="font-normal text-sm">{item.name}</h5>
                </div>
              ))}
            </div>
            {/* pendapatan lencana */}
            <div className="flex flex-col gap-3 mt-5 text-lg mb-8">
              <h1 className="font-medium text-sm flex text-[#0961F5]">
                100/300{" "}
                <span className="font-semibold text-[#333] mx-2">
                  Lencana telah didapatkan
                </span>
              </h1>
              <div className="flex gap-3 justify-between items-center mt-3">
                <p className="text-sm   font-normal flex items-center">
                  Urutkan berdasarkan:
                </p>
                <div className="border border-gray-200 rounded-xl p-2 flex items-center">
                  <select className="bg-transparent outline-none text-sm  px-2">
                    <option value="Lencana tertinggi" className="text-center">
                      Lencana tertinggi
                    </option>
                    <option value="Lencana terkecil" className="text-center">
                      Lencana terkecil
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* map level belajar */}
            <div className="grid grid-cols-3 gap-3 -mt-5">
              {level.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-3  gap-y-1 items-center ${
                    item.id === 3 && "bg-pink-200 rounded-xl"
                  }`}
                >
                  <h1
                    className={`text-7xl font-bold ${
                      item.id === 1
                        ? "text-blue-500"
                        : item.id === 2
                        ? "text-green-500"
                        : item.id === 3
                        ? "text-purple-500 "
                        : item.id === 4
                        ? "text-yellow-500"
                        : item.id === 5
                        ? "text-rose-300"
                        : item.id === 6
                        ? "text-blue-700"
                        : ""
                    }`}
                  >
                    {item.icon}
                  </h1>
                  <p className="text-xs -mt-1 font-semibold">{item.name}</p>
                  <p className="text-xs flex-grow items-center text-center">
                    {item.day}
                  </p>
                  <p className="text-xs flex-grow items-center text-center">
                    {item.ket}
                  </p>
                  <p className="text-xs flex items-center text-center">
                    <img src="/Diamond.png" alt="" srcset="" />
                    <span className="text-[#0961F5] font-semibold">
                      {item.point}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* activeTab Donatur */}
        {activeTab === "donatur" && (
          <>
            {isSearchActive && (
              <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mt-5">
                <input
                  type="text"
                  placeholder="Cari level belajar..."
                  className="bg-transparent w-full pl-10 rounded-xl outline-none"
                />
                <IoSearch className="absolute left-3 text-xl text-gray-500" />
              </div>
            )}
            {/* Name */}
            <div className="overflow-x-auto  mt-5 nowrap pb-4 flex gap-3  scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack">
              {lencanaDonatur.map((item) => (
                <div
                  key={item.id}
                  className={`bg-[#EEE] px-3 py-2 rounded-full flex-shrink-0 transition-opacity duration-700 ease-in-out ${
                    item.id == 1 && "bg-[hsl(218,93%,50%)] text-white"
                  }`}
                >
                  <h5 className="font-normal text-sm">{item.name}</h5>
                </div>
              ))}
            </div>
            {/* pendapatan lencana */}
            <div className="flex flex-col gap-3 mt-5 text-lg mb-8">
              <h1 className="font-medium text-sm flex text-[#0961F5]">
                100/300{" "}
                <span className="font-semibold text-[#333] mx-2">
                  Lencana telah didapatkan
                </span>
              </h1>
              <div className="flex gap-3 justify-between items-center mt-3">
                <p className="text-sm   font-normal flex items-center">
                  Urutkan berdasarkan:
                </p>
                <div className="border border-gray-200 rounded-xl p-2 flex items-center">
                  <select className="bg-transparent outline-none text-sm  px-2">
                    <option value="Lencana tertinggi" className="text-center">
                      Lencana tertinggi
                    </option>
                    <option value="Lencana terkecil" className="text-center">
                      Lencana terkecil
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* map donatur */}
            <div className="grid grid-cols-3 gap-3 ">
              {levelDonatur.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-3  gap-y-1 items-center `}
                >
                  <h1 className={`text-7xl font-bold `}>{item.icon}</h1>
                  <p className="text-xs mt-1 font-semibold">{item.name}</p>
                  <p className="text-xs flex-grow items-center text-center">
                    {item.day}
                  </p>
                  <p className="text-xs flex-grow items-center text-center">
                    {item.ket}
                  </p>
                  <p className="text-xs flex items-center text-center">
                    <img src="/Diamond.png" alt="" srcset="" />
                    <span className="text-[#0961F5] font-semibold">
                      {item.point}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <button className={`${getButtonClass()} p-3 border-none mt-24`}>
              Donasi sekarang
            </button>
          </>
        )}

        {/* activeTab Koleksi */}
        {activeTab === "koleksi" && (
          <div className="flex flex-col mt-5 gap-y-3">
            {isSearchActive && (
              <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 ">
                <input
                  type="text"
                  placeholder="Cari level belajar..."
                  className="bg-transparent w-full pl-10 rounded-xl outline-none"
                />
                <IoSearch className="absolute left-3 text-xl text-gray-500" />
              </div>
            )}
            {lencanaKoleksi.map((item) => (
              <div key={item.id} className="flex  justify-between gap-3 ">
                <h1 className="flex ">
                  {item.icon}{" "}
                  <span className="mt-3 text-sm font-medium">{item.name}</span>
                </h1>
                <p className="flex items-center text-2xl font-semibold">
                  {item.symbol}
                </p>
              </div>
            ))}
            <div className="flex gap-3 justify-between items-center mt-4">
              <p className="text-sm   font-normal flex items-center">
                Urutkan berdasarkan:
              </p>
              <div className="border border-gray-200 rounded-xl p-2 flex items-center">
                <select className="bg-transparent outline-none text-sm  px-2">
                  <option value="Lencana tertinggi" className="text-center">
                    Lencana tertinggi
                  </option>
                  <option value="Lencana terkecil" className="text-center">
                    Lencana terkecil
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
              {levelKoleksi.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-3  gap-y-1 items-center `}
                >
                  <h1
                    className={`text-7xl font-bold ${
                      item.id === 1
                        ? "text-blue-500"
                        : item.id === 2
                        ? "text-green-500"
                        : item.id === 3
                        ? "text-purple-500"
                        : ""
                    }`}
                  >
                    {item.icon}
                  </h1>
                  <p className="text-xs -mt-1 font-semibold">{item.name}</p>
                  <p className="text-xs flex-grow items-center text-center">
                    {item.day}
                  </p>
                  <p className="text-xs flex-grow items-center text-center">
                    {item.ket}
                  </p>
                  <p className="text-xs flex items-center text-center">
                    <img src="/Diamond.png" alt="" srcset="" />
                    <span className="text-[#0961F5] font-semibold">
                      {item.point}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lencana;

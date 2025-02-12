import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useTheme } from "../../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { BiSolidCollection } from "react-icons/bi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Warna = () => {
  const { theme, getButtonClass, getBorderColor, getIconTheme } = useTheme();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeTab, setActiveTab] = useState("beranda");

  const warnaUser = [
    {
      id: 1,
      name: "Warna",

      type: "Midnight Breeze-Softlight",
    },
    {
      id: 2,
      name: "Warna",

      type: "Skyward Blue",
    },
    {
      id: 3,
      name: "Warna",

      type: "Midnight Breeze-Softlight",
    },
    {
      id: 4,
      name: "Lencana",
      link: "#",

      type: "Awalan yang bagus",
    },
  ];
  const themesByIndex = ["dark", "cupcake", "lemonade", "light"];

  const warnaPerempuan = [
    {
      id: 1,
      name: "Warna",

      type: "Midnight Breeze-Softlight",
    },
    {
      id: 2,
      name: "Warna",

      type: "Skyward Blue",
    },
    {
      id: 3,
      name: "Warna",

      type: "Midnight Breeze-Softlight",
    },
    {
      id: 4,
      name: "Lencana",
      link: "#",

      type: "Awalan yang bagus",
    },
  ];
  const warnaByIndex = ["satu", "dua", "tiga", "empat"];

  //  Bagian Category
  const category = [
    {
      id: 1,
      name: "Baru",
      image: <img src="/temaPolos.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Favorit",
      image: <img src="/temaFavorit.png" alt="" srcset="" />,
    },
  ];

  const harmoni = [
    {
      id: 1,
      name: "Baru",
      image: <img src="/temaPolos.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Favorit",
      image: <img src="/temaFavorit.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Softlight",
      image: <img src="/temaPolos.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Pastel",
      image: <img src="/temaPolos.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Minimalis",
      image: <img src="/temaPolos.png" alt="" srcset="" />,
    },
    {
      id: 6,
      name: "Dark",
      image: <img src="/temaPolos.png" alt="" srcset="" />,
    },
  ];

  // Spesial
  const spesial = [
    {
      id: 1,
      name: "Warna",

      type: "Midnight Breeze-Softlight",
    },
    {
      id: 2,
      name: "Warna",

      type: "Skyward Blue",
    },
    {
      id: 3,
      name: "Warna",

      type: "Midnight Breeze-Softlight",
    },
    {
      id: 4,
      name: "Lencana",
      link: "#",

      type: "Awalan yang bagus",
    },
  ];
  const spesialByIndex = ["satu", "dua", "tiga", "empat"];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center mr-20">
        <Link to={"/progress"}>
          <div className="flex items-center gap-3 mt-5 px-5 text-lg mb-8">
            <FaArrowLeft />
            <h1 className="font-semibold">Warna</h1>
          </div>
        </Link>
        <IoSearch
          className="text-2xl -mt-3 cursor-pointer"
          onClick={() => setIsSearchActive((prev) => !prev)} // Toggle input search
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col px-5 -mt-3">
        {/* Tab */}
        <div
          className={`flex text-sm font-normal justify-center gap-5 items-center `}
        >
          {["beranda", "category", "spesial", "koleksi"].map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`
        flex flex-col items-center p-2 rounded-full transition-all duration-300
        ${
          activeTab === tab
            ? `underline decoration-blue-500 decoration-[4px] underline-offset-4`
            : "bg-transparent border-gray-300 w-[100px]"
        } cursor-pointer
      `}
            >
              {tab === "beranda" && (
                <MdHomeFilled className="w-[20px] h-[20px]" />
              )}
              {tab === "category" && (
                <BiSolidCategoryAlt className={`w-[20px] h-[20px]`} />
              )}
              {tab === "spesial" && <FaRegStar className="w-[20px] h-[20px]" />}
              {tab === "koleksi" && (
                <BiSolidCollection className="w-[20px] h-[20px]" />
              )}
              <span className="mt-1">
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </div>
          ))}
        </div>

        {/* TAB BERANDA */}
        {activeTab === "beranda" && (
          <div className="flex flex-col">
            {isSearchActive && (
              <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mt-5 ">
                <input
                  type="text"
                  placeholder="Cari warna belajar..."
                  className="bg-transparent w-full pl-10 rounded-xl outline-none m"
                />
                <IoSearch className="absolute left-3 text-xl text-gray-500" />
              </div>
            )}
            <div className="flex flex-col mt-3 p-1">
              <h1 className="text-lg font-medium mb-1">Sedang Populer</h1>
              <p className="text-xs font-normal mb-1">
                Warna yang sedang tren pada 2025
              </p>
            </div>

            {/* warna user */}
            <div className="grid grid-cols-1 justify-center gap-y-0">
              <div className="grid grid-cols-1 mt-2 gap-y-0">
                {warnaUser.map((item, index) => {
                  const itemTheme = themesByIndex[index % themesByIndex.length];
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
                      : `bg-[#D8F3DC] text-[#4B4B4B] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`;

                  return (
                    <div
                      key={item.id}
                      className={`${commonClasses} ${heightClass} ${themeClasses}`}
                    >
                      <div className="flex items-center gap-x-2 ">
                        <h5
                          className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                            isSpecialId
                              ? "bg-transparent text-[#222]"
                              : //   : itemTheme === "light" ||
                                //     itemTheme === "bumblebee"
                                //   ? "bg-blue-500 text-white"
                                "bg-white text-[#222]"
                          }`}
                        >
                          {!isSpecialId && item.id}
                        </h5>

                        <div className="flex flex-col  ">
                          <h5
                            className={`font-medium text-sm mt-1   ${
                              isSpecialId && "text-center flex "
                            }`}
                          >
                            {item.name}
                          </h5>
                          <h5 className="mt-2 text-xs">{item.type}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col mt-7 p-1">
              <div className="flex items-center justify-between ">
                <h1 className="text-lg font-medium mb-1">
                  Perempuan pasti suka
                </h1>
                <MdOutlineArrowForwardIos className="text-xl" />
              </div>
              <p className="text-xs font-normal  mb-3">
                Warna dengan model pastel dengan warna cerah yang menarik
                perhatian.
              </p>
            </div>
            {/* WARNA PEREMPUAN */}
            <div className="grid grid-cols-1 justify-center gap-y-0">
              <div className="grid grid-cols-1 mt-1 gap-y-0">
                {warnaPerempuan.map((item, index) => {
                  const itemTheme = warnaByIndex[index % warnaByIndex.length];
                  const isSpecialId = item.id === 5;
                  const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
                  const heightClass = isSpecialId
                    ? "h-[40px] justify-center"
                    : "h-[70px]";
                  const themeClasses =
                    itemTheme === "satu"
                      ? `bg-pink-500 text-white rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                      : itemTheme === "dua"
                      ? `bg-purple-500 text-gray-200 rounded-t-none rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                      : itemTheme === "tiga"
                      ? `bg-gradient-to-r from-white to-rose-500 text-[#4B4B4B] rounded-t-none rounded-b-none border-[1px] border-y-[1px]  ${getBorderColor()}`
                      : `bg-[#D8F3DC] text-[#4B4B4B] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`;

                  return (
                    <div
                      key={item.id}
                      className={`${commonClasses} ${heightClass} ${themeClasses}`}
                    >
                      <div className="flex items-center gap-x-2 ">
                        <h5
                          className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                            isSpecialId
                              ? "bg-transparent text-[#222]"
                              : //   : itemTheme === "light" ||
                                //     itemTheme === "bumblebee"
                                //   ? "bg-blue-500 text-white"
                                "bg-white text-[#222]"
                          }`}
                        >
                          {!isSpecialId && item.id}
                        </h5>

                        <div className="flex flex-col  ">
                          <h5
                            className={`font-medium text-sm mt-1   ${
                              isSpecialId && "text-center flex "
                            }`}
                          >
                            {item.name}
                          </h5>
                          <h5 className="mt-2 text-xs">{item.type}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB CATEGORY */}
        {activeTab === "category" && (
          <div className="flex flex-col ">
            {isSearchActive && (
              <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mt-5 ">
                <input
                  type="text"
                  placeholder="Cari warna belajar..."
                  className="bg-transparent w-full pl-10 rounded-xl outline-none m"
                />
                <IoSearch className="absolute left-3 text-xl text-gray-500" />
              </div>
            )}

            {/* Bagian warna Teratas*/}
            <div className="flex flex-col mt-5">
              <h2 className="text-lg font-medium mb-2">Teratas</h2>
              <div className="grid grid-cols-2  justify-center gap-24   items-center p-10">
                {category.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-center   "
                  >
                    <div className="flex flex-col absolute gap-5 ">
                      <p className="text-2xl w-[160px] h-[160px] m gap-3 ">
                        {item.image}
                      </p>
                      <h5
                        className={` text-xs -mt-[120px] mx-3  ${
                          item.id === 1 ? "text-[#222]" : "text-[#04FFE6]"
                        }`}
                      >
                        {item.name}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warna harmoni */}
            <div className="flex flex-col mt-7">
              <h2 className="text-lg font-medium mb-2">Harmoni</h2>
              <div className="grid grid-cols-2  justify-center gap-24   items-center p-10">
                {harmoni.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-center   "
                  >
                    <div className="flex flex-col absolute gap-5 ">
                      <p className="text-2xl w-[160px] h-[160px] m gap-3 ">
                        {item.image}
                      </p>
                      <h5
                        className={` text-xs -mt-[120px] mx-3  ${
                          item.id === 1
                            ? "text-[#222]"
                            : item.id === 3
                            ? "tetx-[##04FFE6]"
                            : ""
                        }`}
                      >
                        {item.name}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB SPESIAL */}
        {activeTab === "spesial" && (
          <div className="flex flex-col">
            {isSearchActive && (
              <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mt-5 ">
                <input
                  type="text"
                  placeholder="Cari warna belajar..."
                  className="bg-transparent w-full pl-10 rounded-xl outline-none m"
                />
                <IoSearch className="absolute left-3 text-xl text-gray-500" />
              </div>
            )}

            <div className="flex flex-col mt-5 p-1">
              <Link to={"/khusus-donatur"}>
                <div className="flex items-center justify-between ">
                  <h1 className="text-lg font-medium mb-1">
                    Khusus Donatur & Kontributor
                  </h1>
                  <MdOutlineArrowForwardIos className="text-xl" />
                </div>
              </Link>
              <p className="text-xs font-normal  mb-3">
                Apresiasi tertinggi untuk pihak yang paling berjasa dalam
                pengembangan aplikasi.
              </p>
            </div>
            {/* khusus donatur dan kontributor */}
            <div className="grid grid-cols-1 justify-center gap-y-0">
              <div className="grid grid-cols-1 mt-1 gap-y-0">
                {spesial.map((item, index) => {
                  const itemTheme =
                    spesialByIndex[index % spesialByIndex.length];
                  const isSpecialId = item.id === 5;
                  const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
                  const heightClass = isSpecialId
                    ? "h-[40px] justify-center"
                    : "h-[70px]";
                  const themeClasses =
                    itemTheme === "satu"
                      ? `bg-pink-500 text-white rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                      : itemTheme === "dua"
                      ? `bg-purple-500 text-gray-200 rounded-t-none rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                      : itemTheme === "tiga"
                      ? `bg-gradient-to-r from-white to-rose-500 text-[#4B4B4B] rounded-t-none rounded-b-none border-[1px] border-y-[1px]  ${getBorderColor()}`
                      : `bg-[#D8F3DC] text-[#4B4B4B] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`;

                  return (
                    <div
                      key={item.id}
                      className={`${commonClasses} ${heightClass} ${themeClasses}`}
                    >
                      <div className="flex items-center gap-x-2 ">
                        <h5
                          className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                            isSpecialId
                              ? "bg-transparent text-[#222]"
                              : //   : itemTheme === "light" ||
                                //     itemTheme === "bumblebee"
                                //   ? "bg-blue-500 text-white"
                                "bg-white text-[#222]"
                          }`}
                        >
                          {!isSpecialId && item.id}
                        </h5>

                        <div className="flex flex-col  ">
                          <h5
                            className={`font-medium text-sm mt-1   ${
                              isSpecialId && "text-center flex "
                            }`}
                          >
                            {item.name}
                          </h5>
                          <h5 className="mt-2 text-xs">{item.type}</h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB koleksi */}
        {activeTab === "koleksi" && (
          <div className="flex flex-col">
            {isSearchActive && (
              <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mt-5 ">
                <input
                  type="text"
                  placeholder="Cari warna belajar..."
                  className="bg-transparent w-full pl-10 rounded-xl outline-none m"
                />
                <IoSearch className="absolute left-3 text-xl text-gray-500" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Warna;

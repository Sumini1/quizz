import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const MateriTerbaru = () => {
  const { borderColor } = useTheme();
  const belajar = [
    { id: 1, name: "Semua", route: "/semua" },
    { id: 2, name: "Pengingat", route: "/pengingat" },
    { id: 3, name: "Informasi", route: "/informasi" },
    { id: 4, name: "Iklan", route: "/iklan" },
    { id: 5, name: "Umum", route: "/umum" },
  ];

  const materiTerbaru = [
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      title: "Keimanan",
      link: "/dasar-islam-keimanan",
      ket: "12 April 2025",
    },
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      link: "dasar-islam2",
      title: "Muamalah  (1)",
      ket: "12 April 2025",
    },
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      link: "dasar-islam3",
      title: "Sejarah Nabi Musa",
      ket: "12 April 2025",
    },
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      link: "dasar-islam3",
      title: "Muamalah (2)",
      ket: "12 April 2025",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen p-5">
      <Link to="/beranda">
        <div className="flex gap-2 items-center">
          <FaArrowLeft className="items-center flex text-xl" />
          <h1 className="font-semibold text-lg items-center flex">
            Materi Terbaru
          </h1>
        </div>
      </Link>

      {/* Mapping belajar */}
      <div className="overflow-x-auto whitespace-nowrap pb-4 flex gap-3  mt-8  scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack">
        {belajar.map((item) => (
          <Link
            to={item.route}
            key={item.id}
            className={`bg-[#EEE] px-3 py-2 rounded-full flex-shrink-0 transition-opacity duration-700 ease-in-out ${
              item.id === 1 && "bg-[hsl(218,93%,50%)] text-white"
            }`}
          >
            <h5 className="font-normal text-sm">{item.name}</h5>
          </Link>
        ))}
      </div>

      {/* Materi terbaru */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {materiTerbaru.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className={`flex flex-col w-full max-w-[200px] rounded-xl  shadow-gray-300 ${borderColor()}`}
          >
            <div
              key={item.id}
              className={`flex flex-col w-full max-w-[200px] rounded-xl  shadow-gray-300 ${borderColor()}`}
            >
              {/* Ganti <h5> dengan <img> */}
              <img
                src="/beranda.png"
                alt={item.name}
                className="w-full h-auto rounded-t-xl"
              />

              <div className={`flex flex-col p-3 -mt-1 ${borderColor()} border-2 rounded-b-xl border-t-0`}>
                <h1 className="text-green-600 text-sm font-semibold ">
                  {item.name}
                </h1>
                <p className="text-xs font-medium mb-2">{item.title}</p>
                <p className="text-xs text-gray-500">{item.ket}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MateriTerbaru;

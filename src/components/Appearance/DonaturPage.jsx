import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

const donaturData = [
  {
    id: 1,
    nama: "Muhammad",
    icon: "/iconPemula.png",
    poin: 100,
    level: "Lv-1",
  },
  { id: 2, nama: "Yahya", icon: "/kotak.png", poin: 100, level: "Lv-1" },
  { id: 3, nama: "Budi", icon: "/kotak.png", poin: 100, level: "Lv-1" },
];

const donaturSatuSoal = [
  {
    id: 1,
    nama: "Muhammad",
    icon: "/iconPemula.png",
    poin: 100,
    level: "Lv-1",
  },
  { id: 2, nama: "Yahya", icon: "/kotak.png", poin: 100 },


];
const donaturDuaSoal = [
  {
    id: 1,
    nama: "Muhammad",
    icon: "/iconPemula.png",
    poin: 100,
    level: "Lv-1",
  },
  { id: 2, nama: "Yahya", icon: "/kotak.png", poin: 100 },
];

const DonaturTable = ({ data }) => (
  <table className="w-full border border-collapse">
    <thead>
      <tr>
        <th className="border px-2 py-2">No.</th>
        <th className="border px-2 py-2">Nama</th>
      </tr>
    </thead>
    <tbody>
      {data.map((donatur, index) => (
        <tr key={`${donatur.id}-${index}`}>
          <td className="border px-4 py-2">{index + 1}.</td>
          <td className="border px-4 py-2 flex gap-1 items-center">
            {donatur.icon && (
              <img src={donatur.icon} alt="" className="w-6 h-6" />
            )}
            <span>{donatur.nama}</span>
            {donatur.poin && (
              <span className="bg-[#F9C883] text-[10px] rounded-xl px-2">
                {donatur.poin}
              </span>
            )}
            {donatur.level && (
              <span className="bg-[#83F9B6] text-[10px] rounded-xl px-2">
                {donatur.level}
              </span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const DonaturPage = ({ onClose }) => {
  const { getThemeLoveClass, theme } = useTheme();

  const getTextTitle = () => {
    return theme === "dark"
      ? "text-white"
      : theme === "cupcake"
      ? "text-[#3A2E6E]"
      : theme === "bumblebee"
      ? "text-yellow-500"
      : theme === "lemonade"
      ? "text-[#A7C050]"
      : "text-[#28A745]";
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg w-full relative">
      <div className="flex gap-2 items-center mb-4">
        <FaArrowLeft />
        <h1>Back</h1>
      </div>
      <div className="flex  mb-4 gap-1">
        {/* <FaHeart className={`${getThemeLoveClass()} text-xl`} /> */}
        <h1 className="text-xl font-medium">Donatur</h1>
      </div>
      <h1 className="text-base font-medium mb-1">
        Donatur yang telah mendukung
      </h1>
      <h2 className="text-md font-semibold mb-2">
        "Pengantar Rukun Iman Bagian ke-2"
      </h2>
      <h1 className={`text-md font-base mb-2 ${getTextTitle()}`}>
        Kontribusi Sistem
      </h1>
      <DonaturTable data={donaturData} />
      <h1 className={`text-md font-base mt-4 mb-2 ${getTextTitle()}`}>
        Kontribusi Satu Soal
      </h1>
      <DonaturTable data={donaturSatuSoal} />
      <h1 className={`text-md font-base mt-4 mb-2 ${getTextTitle()}`}>
        Kontribusi Dua Soal
      </h1>
      <DonaturTable data={donaturDuaSoal} />
      {/* <div className="flex flex-col   items-center mt-4">
          <h5>Jazaakumullahu Khoiron atas partisipasinya</h5>
          <h5>Semoga Kontribusi ini menjadi amal jariyah</h5>
          <h5 className="mt-2 flex">
            Ikuti Project Pembuatan Soal, <span className="underline text-blue-500">disini</span>
          </h5>
        </div> */}
    </div>
  );
};

export default DonaturPage;

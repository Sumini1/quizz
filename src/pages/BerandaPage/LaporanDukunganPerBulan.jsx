import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

const LaporanDukunganMaret = () => {
  const navigate = useNavigate();
  const { getIconTheme, getButtonClass, getBorder, getTextTitle1 } = useTheme();
  const [activeTab, setActiveTab] = useState("daftar-donatur");

  const tabs = [
    {
      id: "daftar-donatur",
      icon: <MdArrowOutward className="w-[20px] h-[20px]" />,
    },
    {
      id: "penggunaan",
      icon: <BsFillCalendar2DateFill className="w-[20px] h-[20px]" />,
    },
  ];

  const donatur = [
    {
      id: 1,
      name: "Muhammad",
      score: 100,
      soal: 50,
      image: "/iconPemula.png",
      level: "lv-1",
    },
    {
      id: 2,
      name: "Yahya",
      score: 100,
      soal: 50,
      image: "/pangkat2.png",
      level: "lv-2",
    },
    {
      id: 3,
      name: "Fatimah",
      score: 100,
      soal: 50,
      image: "/pangkat2.png",
      level: "lv-2",
    },
    {
      id: 2,
      name: "Aisyah",
      score: 100,
      soal: 50,
      image: "/pangkat2.png",
      level: "lv-2",
    },
  ];

  const dana = [
    {
      id: 1,
      name: "Pencairan ke-5",
      price: 1000000.0,
      date: "2 November 2025",
      description:
        "Digunakan untuk pembuatan soal dan materi meliputi pengembangan konten, penelitian materi dan validasi jawaban. ",
    },
    {
      id: 2,
      name: "Pencairan ke-6",
      price: 1000000.0,
      date: "2 November 2025",
      description:
        "Digunakan untuk pembuatan soal dan materi meliputi pengembangan konten, penelitian materi dan validasi jawaban. ",
    },
  ];

 const formatToIDR = (price) => {
   return new Intl.NumberFormat("id-ID", {
     style: "decimal",
     maximumFractionDigits: 0,
   }).format(price);
 };

  const getScoreColor = (score) => {
    if (score >= 100) return "bg-yellow-200";
    if (score >= 50) return "bg-pink-200";
    return "bg-gray-200";
  };

  const getLevelColor = (level) => {
    return "bg-emerald-200";
  };

  return (
    <div className="flex flex-col min-h-screen p-5">
      <div
        onClick={() => navigate(-1)}
        className="flex gap-2 items-center cursor-pointer"
      >
        <FaArrowLeft className="text-xl" />
        <h1 className="font-semibold text-lg">Laporan Dukungan</h1>
      </div>

      <div
        className={`flex gap-3 mt-7 text-sm font-normal justify-between ${getBorder()}`}
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

      {activeTab === "daftar-donatur" && (
        <div className="flex flex-col gap-2 mt-7">
          <p className="text-sm font-normal">
            Donatur yang telah mendukung perkembangan aplikasi pada{" "}
            <span className={getIconTheme()}>April 2025.</span>
          </p>
          <p className="text-sm font-normal mb-3">
            Jaazakumullah khair atas segala partisipasinya
          </p>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200 border-b">
                  <th className="px-5 py-3 text-left text-sm font-semibold text-gray-700">
                    No
                  </th>
                  <th className=" py-3 px-3 text-left text-sm font-semibold text-gray-700">
                    Nama
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Soal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {donatur.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 text-sm text-gray-700">
                      {item.id}
                    </td>
                    <td className=" py-3 px-3">
                      <div className="flex  items-center gap-2">
                        <img src={item.image} alt="" srcset="" />
                        <span className="text-xs font-normal ">
                          {item.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getScoreColor(
                            item.score
                          )}`}
                        >
                          {item.score}
                        </span>
                        <span
                          className={`text-xs mr-3 px-4 whitespace-nowrap py-1 rounded-full ${getLevelColor(
                            item.level
                          )}`}
                        >
                          {item.level}
                        </span>
                      </div>
                    </td>

                    <td className="px-8 py-3">
                      <a href="#" className="underline text-xs">
                        {item.soal}
                      </a>
                    </td>
                  </tr>
                ))}
                {/* Baris total kontribusi */}
                <tr className="bg-gray-100">
                  <td
                    colSpan="2"
                    className="px-4 py-4 text-sm text-gray-700 font-semibold"
                  >
                    Total Kontribusi
                  </td>
                  <td className="-mx-2 py-4 text-sm text-gray-700 font-semibold flex">
                    {/* Jumlah kontribusi, misalnya dari data donatur */}
                    {donatur.reduce(
                      (total, item) => total + item.score,
                      0
                    )}{" "}
                    <span className="ml-2">Soal</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col mt-3 gap-5">
            <p className="text-xs">
              *Kolom soal adalah total partisipasi peserta dalam satu bulan
            </p>
            <p className="text-sm font-normal">
              Ikut projek pembuatan soal,{" "}
              <span className={`${getIconTheme()}`}>disini</span>
            </p>
          </div>
        </div>
      )}

      {activeTab === "penggunaan" && (
        <div className="flex flex-col gap-2 mt-10">
          {dana.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="flex justify-between">
                <h1 className="text-sm font-medium flex gap-2">
                  {item.id}. <span>{item.name}</span>
                </h1>
                <p className="text-xs">{item.date}</p>
              </div>
              <div className="flex flex-col px-[18px] mb-5 mt-1">
                <h5 className={`text-sm font-medium mb-3 ${getTextTitle1()}`}>
                  {formatToIDR(item.price)}
                </h5>

                <p className="text-sm font-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LaporanDukunganMaret;

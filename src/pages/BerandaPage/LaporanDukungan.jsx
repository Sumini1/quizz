import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const LaporanDukungan = () => {
  const navigate = useNavigate();
  const { getBorderColor, getButtonClass, getBorder } = useTheme();
  const [activeTab, setActiveTab] = useState("terbaru");

  //  Terbaru
  const terbaru = [
    {
      id: 1,
      name: "Maret 24 / Dzulhijjah - Dzulqo’dah 46",
      link: "/laporan-dukungan-maret",
    },
    {
      id: 2,
      name: "April 24 / Dzulhijjah - Dzulqo’dah 46",
      link: "/laporan-dukungan-april",
    },
    {
      id: 3,
      name: "Maret 24 / Dzulhijjah - Dzulqo’dah 46",
      link: "/laporan-dukungan-maret",
    },
    {
      id: 4,
      name: "April 24 / Dzulhijjah - Dzulqo’dah 46",
      link: "/laporan-dukungan-april",
    },
  ];

  const tabs = [
    {
      id: "terbaru",
      icon: <BiSolidTimeFive className="w-[20px] h-[20px] " />,
    },
    {
      id: "tanggal",
      icon: <BsFillCalendar2DateFill className="w-[20px] h-[20px] " />,
    },
  ];

  //   Tab Tanggal
  const tanggal = [
    {
      id: 1,
      name: "Januari - Juni 2025",
    },
    {
      id: 2,
      name: "Juli - Desember 2025",
    },
    {
      id: 3,
      name: "Maret - September 2025",
    },
    {
      id: 4,
      name: "April - Oktober 2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen p-5">
      <Link to="/beranda">
        <div className="flex gap-2 items-center">
          <FaArrowLeft className="items-center flex text-xl" />
          <h1 className="font-semibold text-lg items-center flex">
            Laporan Dukungan
          </h1>
        </div>
      </Link>

      {/* Tab */}
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

      {/* Bagian tab TERBARU */}
      {activeTab === "terbaru" && (
        <div className="flex flex-col gap-2 mt-7 ">
          <p className="text-sm font-normal">
            Berikut adalah laporan pertanggungjawaban kami terhadap seluruh
            dukungan dari para pendukung aplikasi.
          </p>
          <p className="text-sm font-normal mb-3">
            Jaazakumullah khair terimakasih banyak atas segala support yang
            diberikan. Semoga aplikasi ini semakin bermanfaat.
          </p>
          <div className="flex flex-col gap-5 ">
            {terbaru.map((item) => (
              <div
                onClick={() => navigate(item.link)}
                key={item.id}
                className={`flex gap-3 space-y-5 justify-between  ${getBorderColor()}  p-3 rounded-xl`}
              >
                <h1 className="text-sm font-base">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab TANGGAL */}
      {activeTab === "tanggal" && (
        <div className="flex flex-col gap-5 mt-10">
          {tanggal.map((item) => (
            <div
              key={item.id}
              className={`flex gap-3  justify-between  ${getBorderColor()}  p-3 rounded-xl`}
            >
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LaporanDukungan;

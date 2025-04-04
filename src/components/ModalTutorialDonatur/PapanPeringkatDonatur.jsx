import React, { useState } from "react";
import { FaArrowLeft, FaGifts } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import TabelPekanIni from "../../pages/PapanPeringkatPage/TabelPekanIni";
import TabelPekanIniDonatur from "../../pages/PapanPeringkatPage/TabelPekanIniDonatur";
import ButtonMobileKotak from "../../components/ListButton/ButtonMobileKotak";
import { useSelector, useDispatch } from "react-redux";
import TutorialDonatur from "./TutorialDonatur";

const PapanPeringkatDonatur = () => {
  const { getBorderColor, getButtonClass, getBorder } = useTheme();
  const [activeTab, setActiveTab] = useState("donatur");
  const [activeTab2, setActiveTab2] = useState(1);
  const [activeTab3, setActiveTab3] = useState(1); //
  const isOpen = useSelector((state) => state.modal.isOpen);

  const tabs = [
    { id: "prestasi", icon: <FaGifts className="w-[20px] h-[20px]" /> },
    { id: "donatur", icon: <AiOutlineGift className="w-[20px] h-[20px]" /> },
  ];

  const tablePrestasi = [
    { id: 1, name: "Pekan ini" },
    { id: 2, name: "Bulan ini" },
    { id: 3, name: "Seluruhnya" },
    { id: 4, name: "Teman" },
  ];

  const tableDonatur = [
    { id: 1, name: "Pekan ini" },
    { id: 2, name: "Bulan ini" },
    { id: 3, name: "Seluruhnya" },
  ];

  return (
    <div className="flex flex-col">
      {isOpen && <TutorialDonatur />}
      {/* Header */}
      <div className="flex p-5 items-center gap-2">
        <FaArrowLeft />
        <h1 className="font-semibold text-xl tracking-wide">Papan Peringkat</h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-col px-5">
        <div
          className={`flex gap-3 text-sm font-normal justify-between ${getBorder()}`}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 text-sm font-medium p-2 rounded-full transition-all duration-300 w-1/2 cursor-pointer
                ${
                  activeTab === tab.id
                    ? `${getButtonClass()} border-[#DCE6F8] border-[4px] justify-center`
                    : "bg-transparent justify-center border-gray-300"
                }
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

        {/* Content */}
        <div className="mt-5 flex flex-col ">
          {activeTab === "prestasi" && (
            <div className="flex flex-col w-full">
              <div className="overflow-x-auto whitespace-nowrap pb-4 flex gap-3   scrollbar-thin ">
                {tablePrestasi.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab2(item.id)}
                    className={`px-2 overflow-x-auto   py-2 rounded-full flex-shrink-0 transition-opacity duration-700 ease-in-out ${
                      activeTab2 === item.id
                        ? "bg-[#222222] text-white"
                        : "bg-[#EEE] text-[#222222]"
                    }`}
                  >
                    <h5 className="font-normal text-sm px-1">{item.name}</h5>
                  </div>
                ))}
              </div>

              {/* Render Tabel Prestasi */}
              {activeTab2 === 1 && <TabelPekanIni />}
              {activeTab2 === 2 && (
                <div className="flex flex-col w-full">
                  <h1>Bulan ini</h1>
                </div>
              )}
              {activeTab2 === 3 && (
                <div className="flex flex-col w-full">
                  <h1>Seluruhnya</h1>
                </div>
              )}
              {activeTab2 === 4 && (
                <div className="flex flex-col w-full">
                  <h1>Teman</h1>
                </div>
              )}
            </div>
          )}

          {activeTab === "donatur" && (
            <div className="flex flex-col w-full">
              <div className="flex justify-start pb-4 gap-3">
                {tableDonatur.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab3(item.id)} // Menggunakan activeTab3 untuk tab Donatur
                    className={`px-3 py-2 rounded-full flex-shrink-0 transition-opacity duration-700 ease-in-out ${
                      activeTab3 === item.id
                        ? "bg-[#222222] text-white"
                        : "bg-[#EEE] text-[#222222]"
                    }`}
                  >
                    <h5 className="font-normal text-sm">{item.name}</h5>
                  </div>
                ))}
              </div>

              {/* Render Tabel Donatur */}
              {activeTab3 === 1 && <TabelPekanIniDonatur />}
              {activeTab3 === 2 && (
                <div className="flex flex-col w-full">
                  <h1>Bulan ini</h1>
                </div>
              )}
              {activeTab3 === 3 && (
                <div className="flex flex-col w-full">
                  <h1>Seluruhnya</h1>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Sticky Button */}
      <div className="fixed bottom-0 w-full">
        <ButtonMobileKotak className="p-0 m-0 bg-blue-500 text-white flex justify-center items-center h-12" />
      </div>
    </div>
  );
};

export default PapanPeringkatDonatur;

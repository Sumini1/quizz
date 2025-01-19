import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContext";
import { FaChalkboardUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const RiwayatDonasi = () => {
  const { getBorderColor, getButtonClass, getBorder } = useTheme();
  const [activeTab, setActiveTab] = useState("terbaru"); // Menyimpan tab aktif

  return (
    <div className="flex flex-col min-h-screen">
      <Link to={"/settings"}>
        <div className="flex items-center gap-3 mt-5 px-5 text-lg">
          <FaArrowLeft />
          <h1 className="font-semibold">Saran dan Masukan</h1>
        </div>
      </Link>
      <div className={`flex gap-4 mx-5 mt-10 justify-center ${getBorder()}`}>
        <div
          onClick={() => setActiveTab("terbaru")}
          className={`
      flex items-center gap-2 p-2 px-10 rounded-full transition-all duration-300
      ${
        activeTab === "terbaru"
          ? `border-none ${getButtonClass()} w-1/2`
          : "bg-transparent border-gray-300 w-[170px]"
      } cursor-pointer
    `}
        >
          <MdOutlineArrowOutward className="w-[20px] h-[20px]" />
          <span>Terbaru</span>
        </div>

        <div
          onClick={() => setActiveTab("tanggal")}
          className={`
      flex items-center gap-2 p-2 px-9 rounded-full transition-all duration-300
      ${
        activeTab === "tanggal"
          ? `border-none ${getButtonClass()} w-1/2`
          : "bg-transparent border-gray-300 w-[190px]"
      } cursor-pointer
    `}
        >
          <MdOutlineDateRange
            className={`w-[20px] h-[20px] ${
              activeTab === "tanggal" && "text-white"
            }`}
          />
          <span>Tanggal</span>
        </div>
      </div>
      {/* Input */}
      <div className="flex flex-col m-4 mt-3 gap-3 px-3  p-3 rounded-xl ">
        {activeTab === "terbaru" && (
          <div className="flex flex-col">
            <div className="flex  gap-5 justify-between bg-[#FFF] rounded-xl py-2  w-full ">
              <div className="flex flex-col gap-1">
                <h1 className="text-[#328D8B] flex gap-2 text-base font-[500]">
                  1. Level Emerald{" "}
                  <span>
                    <img src="/emerald.png" alt="" />
                  </span>
                </h1>
                <p className="text-xs font-normal">9-12-2025</p>
              </div>
              <p className="text-base font-[400]">Rp. 200.000</p>
            </div>
            <div className="flex justify-between gap-1">
              <h5 className="text-xs font-[500]">
                Peruntukan : <span>Dalam Proses</span>
              </h5>
              <h5 className="flex gap-2">
                <img src="/Diamond.png" alt="" className="w-5 h-5" />{" "}
                <span className="text-xs font-[500]">100</span>
              </h5>
            </div>

            {/* no 2 */}
            <div className="flex mt-5  gap-5 justify-between bg-[#FFF] rounded-xl py-2  w-full ">
              <div className="flex flex-col gap-1">
                <h1 className="text-[#0849B6] flex gap-2 text-base font-[500]">
                  1. Level Shappire{" "}
                  <span>
                    <img src="/Shapir.png" alt="" />
                  </span>
                </h1>
                <p className="text-xs font-normal">9-12-2025</p>
              </div>
              <p className="text-base font-[400]">Rp. 200.000</p>
            </div>
            <div className="flex justify-between gap-1">
              <h5 className="text-xs font-[500]">
                Peruntukan : <span>Dalam Proses</span>
              </h5>
              <h5 className="flex gap-2">
                <img src="/Diamond.png" alt="" className="w-5 h-5" />{" "}
                <span className="text-xs font-[500]">300</span>
              </h5>
            </div>
          </div>
          //  no2
        )}

        {/* Tanggal */}
        {activeTab === "tanggal" && (
          <div className="flex flex-col mt-1 gap-4">
            <p
              className={`text-base font-medium border rounded-xl p-4 ${getBorderColor()}`}
            >
              Januari - Juni &nbsp;&nbsp; 2005
            </p>
            <p
              className={`text-base font-medium border rounded-xl p-4 ${getBorderColor()}`}
            >
              Juli - Desember &nbsp;&nbsp; 2025
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiwayatDonasi;

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";

const Kontributor = () => {
  const { getButtonClass, getLatarBeranda} = useTheme();

  return (
    <div className={`flex flex-col flex-grow ${getLatarBeranda()} h-[280px]`}>
      <Link to={"/settings"}>
        <div className="flex items-center gap-3 mt-5 px-5 text-lg mb-5">
          <FaArrowLeft />
          <h1 className="font-semibold text-xl">Kontributor</h1>
        </div>
      </Link>
      <div
        className={`flex  flex-col m-4 gap-3 px-2 ${getButtonClass()} border-none`}
      >
        <div className="p-3">
          <h3 className="text-lg  mb-3 font-bold">Misi Projek Quiz Kami</h3>
          <h5 className="text-sm mb-5 font-medium">
            Misi kami terdepan dalam pengajaran islam dan bahasa arab dengan
            teknologi tinggi.
          </h5>
          <div className="bg-white  flex gap-2 rounded-xl p-1 w-[100px] justify-center items-center ml-52 m-2">
            <img src="/Vector.png" alt="" />
            <h5 className="text-center text-[#222] text-sm">Jelajahi</h5>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col m-4 mt-8 gap-3 px-3">
        <h2 className="text-lg font-[500]">Gabung Menjadi Kontributor</h2>
        <h5 className="text-sm font-base">
          "Kontribusi Anda adalah investasi jangka panjang untuk dakwah. Soal
          dan materi yang Anda dukung akan menjadi sarana belajar yang terus
          bermanfaat."
        </h5>
      </div>
      {/* penulis pengajar */}
      <div className="-mt-3">
        {/* Kotak 1*/}
        <div className="flex flex-col m-4 gap-3 px-4  p-5 rounded-xl border-[2px] border-[#0849B6]">
          <h1 className="text-[#0849B6] font-[500] text-base">
            Penulis dan Pengajar
          </h1>
          <div className="flex gap-3">
            <p className="font-normal text-sm">
              Gabung menjadi pengajar dengan membuat artikel maupun soal.
            </p>
            <img src="/Teacher.png" alt="" className="-mt-10" />
          </div>
          <h1 className="text-sm font-[500]">
            Dapatkan benefit khusus pengajar
          </h1>
        </div>
        {/* Kotak 2 */}
        <div className="flex flex-col m-4 gap-3 px-4  p-5 rounded-xl border-[2px] border-[#50B4B3]">
          <h1 className="text-[#50B4B3] font-[500] text-base">Tim Ahli</h1>
          <div className="flex gap-3">
            <p className="font-normal text-sm">
              Gabung menjadi tim ahli dari berbagai bidang seperti IT,
              digital marketing, desainer dan lainnya
            </p>
            <img src="/Worker.png" alt="" className="-mt-10" />
          </div>
          <h1 className="text-sm font-[500]">
            Dapatkan benefit khusus tim ahli
          </h1>
        </div>
      
      </div>

      <div className="flex justify-center items-center">
        <button
          className={`flex w-full justify-center items-center rounded-xl p-3 m-4 mt-7 mb-5 ${getButtonClass()} border-none`}
        >
          Gabung Menjadi donatur
        </button>
      </div>
    </div>
  );
};

export default Kontributor;

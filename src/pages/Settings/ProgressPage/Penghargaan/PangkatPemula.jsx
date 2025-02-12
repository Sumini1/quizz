import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PangkatPemula = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header tetap di atas */}
      <div className="p-5">
        <div className="flex items-center gap-3">
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <h1 className="font-semibold text-xl">Pangkat</h1>
        </div>
      </div>

      {/* Content di tengah layar */}
      <div className="flex flex-1 items-center justify-center gap-3 ">
        <div className="flex flex-col items-center gap-3 ">
          <img src="/pangkat2.png" alt="" className="w-28 h-28" />
          <h2 className="text-2xl font-medium">Pemula</h2>
          <p className="text-lg font-semibold">Donasi pembuatan 30 soal</p>
          <p className="flex items-center gap-2">
            <img src="/Diamond.png" alt="" className="w-7 h-7" />
            <span className="text-2xl font-semibold text-[#0961F5]">60</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PangkatPemula;

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../../../../../context/ThemeContext";
import { IoArrowForwardSharp } from "react-icons/io5";

const PencairanDanaEmpat = () => {
  const navigate = useNavigate();
  const { getIconTheme, getButtonClass, getBorder, getTextTitle1 } = useTheme();

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
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col p-5">
        <div
          onClick={() => navigate(-1)}
          className="flex gap-2 items-center cursor-pointer "
        >
          <FaArrowLeft className="text-xl" />
          <h1 className="font-semibold text-lg">Pencairan Dana Ke-4</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col mt-5 gap-y-3">
          <h1 className="text-xs font-normal text-[#333]">12 April 2025</h1>
          <p className="text-sm font-normal">
            50 % digunakan untuk pembuatan soal dan materi meliputi pengembangan
            konten, penelitian materi dan validasi jawaban.{" "}
          </p>
          <p className="text-sm font-normal">
            Pengembangan konten yaitu biaya gaji penulis/guru dan biaya
            penelitian materi serta validasi jawaban yaitu biaya pembelian
            kitab-kitab pendukung materi.
          </p>
        </div>
        {/* List */}
        <div className="flex flex-col mt-5">
          <h1 className="text-sm font-[500] mb-2">Berikut adalah hasilnya</h1>
          <div className="flex flex-col gap-y-1">
            <h5 className="text-sm flex items-center ">
              1. <span className="ml-2">3 Unit pada Dasar Islam </span>
              <IoArrowForwardSharp className="ml-2" />
              <span className="ml-2">Keimanan</span>{" "}
              <IoArrowForwardSharp className="ml-2" />
              <span className="ml-2">Level 1</span>.
            </h5>
            <h5 className="text-sm flex items-center ">
              2. <span className="ml-1">3 Unit pada Dasar Islam </span>
              <IoArrowForwardSharp className="ml-2" />
              <span className="ml-2">Keimanan</span>{" "}
              <IoArrowForwardSharp className="ml-2" />
              <span className="ml-2">Level 1</span>.
            </h5>
            <h5 className="text-sm flex items-center ">
              3. <span className="ml-1">3 Unit pada Dasar Islam </span>
              <IoArrowForwardSharp className="ml-2" />
              <span className="ml-2">Keimanan</span>{" "}
              <IoArrowForwardSharp className="ml-2" />
              <span className="ml-2">Level 1</span>.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PencairanDanaEmpat;

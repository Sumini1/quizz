import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useTheme } from "../../context/ThemeContext";
import {Link } from 'react-router-dom';

const Notifikasi = () => {
  const { getTextTitle1, getButtonClass } = useTheme();

  const information = [
    { id: 1, name: "Semua" },
    { id: 2, name: "Pengingat" },
    { id: 3, name: "Informasi" },
    { id: 4, name: "Iklan" },
    { id: 5, name: "Umum" },
    { id: 5, name: "Umum" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center gap-3 mt-5 px-5 text-lg">
        <FaArrowLeft />
        <h1 className="font-semibold">Notifikasi</h1>
      </div>

      <div className="relative m-4 flex items-center gap-3 px-5 bg-[#EEEEEE] rounded-lg">
        <input
          type="text"
          placeholder="Cari"
          className="pl-10 w-full py-2 bg-transparent outline-none"
        />
        <CiSearch className="absolute left-5 text-gray-500 text-xl" />
      </div>

      {/* Mapping name */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-3 px-4">
        {information.map((item) => (
          <div
            key={item.id}
            className={`bg-[#EEE] px-3 py-2 rounded-full flex-shrink-0 transition-opacity duration-700 ease-in-out ${
              item.id == 1 && "bg-[hsl(218,93%,50%)] text-white"
            }`}
          >
            <h5 className="font-normal text-sm">{item.name}</h5>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div className="flex flex-col mt-7">
        <div className="flex items-center gap-3 px-5">
          <h1 className={`${getTextTitle1()} text-base`}>Pengingat</h1>
          <p className="text-xs">1 jam yang lalu</p>
        </div>
        <p className="px-5 text-sm mt-2">
          Mulai 12 Agustus 2025. Quiz app akan melaksanakan program khusus
          menyambut Hari Raya Idul Adha. Bersiaplah dari sekarang...
        </p>
        <hr className="mt-3 w-[350px] flex mx-auto" />
      </div>

      <div className="flex flex-col mt-5">
        <div className="flex items-center gap-3 px-5">
          <h1 className={`${getTextTitle1()} text-base`}>Informasi</h1>
          <p className="text-xs">1 jam yang lalu</p>
        </div>
        <p className="px-5 text-sm mt-2">
          Quiz app sudah memiliki 10 materi baru pada pelajaran Aqidah Akhlak.
          Bersiaplah dari sekarang...
        </p>
        <hr className="mt-3 w-[350px] flex mx-auto" />
      </div>

      <div className="flex flex-col mt-5">
        <div className="flex items-center gap-3 px-5">
          <h1 className={`${getTextTitle1()} text-base`}>Pengingat</h1>
          <p className="text-xs">1 jam yang lalu</p>
        </div>
        <p className="px-5 text-sm mt-2">
          Mulai 12 Agustus 2025. Quiz app akan melaksanakan program khusus
          menyambut Hari Raya Idul Adha. Bersiaplah dari sekarang...
        </p>
        <hr className="mt-3 w-[350px] flex mx-auto" />
      </div>

      {/* Button */}
      <Link to={"/settings"}>
        <button
          className={`${getButtonClass()} w-[350px] p-2 self-center justify-center items-center flex border-none mt-20 mx-auto`}
        >
          Selesai
        </button>
      </Link>
    </div>
  );
};

export default Notifikasi;

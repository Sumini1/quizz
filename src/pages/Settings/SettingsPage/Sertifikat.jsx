import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useTheme } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { MdAccessTimeFilled } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

const Sertifikat = () => {
  const { getTextTitle1, getButtonClass, getIconTheme } = useTheme();

  const information = [
    { id: 1, name: "Semua" },
    { id: 2, name: "Mode Utama" },
    { id: 3, name: "Qur'an Hadits" },
    { id: 4, name: "Agenda Spesial" },
    { id: 5, name: "Tematik Pilihan" },
    { id: 5, name: "Umum" },
  ];

  const notifications = [
    {
      id: 1,
      title: "Dasar Islam",
      category: "Keimanan",
      date: "Lulus 3 Desember 2025",
      score: 80,
      image: "/pajamas_search-results.png",
    },
    {
      id: 2,
      title: "Tematik",
      category: "Keimanan",
      date: "Lulus 3 Novmeber 2025",
      score: 80,
      image: "/pajamas_search-results.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Link to={"/settings"}>
        <div className="flex items-center gap-3 mt-5 px-5 text-lg mb-9">
          <FaArrowLeft />
          <h1 className="font-semibold">Sertifikat</h1>
        </div>
      </Link>

      {/* Mapping name */}
      <div className="overflow-x-auto nowrap pb-4 flex gap-3 px-4  scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack">
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

      {/* Bagian notifikasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 mx-2 p-2">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="flex flex-col border rounded-lg w-full h-full px-4 py-3"
          >
            <div className="flex justify-between items-center">
              <Link to={"/sertifikat-dasar-islam"}>
                <h1 className={`${getTextTitle1()} text-md mb-1`}>
                  {notif.title}
                </h1>
              </Link>
              <div className="flex items-center gap-2">
                <img
                  src={notif.image}
                  alt="Certificate Icon"
                  className="w-6 h-6 object-contain"
                />
                <p className="text-sm">
                  Nilai:{" "}
                  <span className={`${getIconTheme()} text-sm font-[400]`}>
                    {notif.score}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-base mb-3">{notif.category}</p>
            <div className="flex items-center gap-2">
              <MdAccessTimeFilled />
              <p className="text-sm">{notif.date}</p>
            </div>
            <div className="flex justify-between mt-3 mb-2">
              <h5 className="text-md underline">Selengkapnya</h5>
              <FiDownload />
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link to={"/settings"}>
        <button
          className={`${getButtonClass()} w-[350px] p-2 self-center justify-center items-center flex border-none mt-[290px] mx-auto`}
        >
          Selesai
        </button>
      </Link>
    </div>
  );
};

export default Sertifikat;

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdBook } from "react-icons/io";

const SertifikatDasarIslam = () => {
  const { getTextTitle1, getButtonClass, getBorderClass } = useTheme();

  const dasarIslam = [
    {
      id: 1,
      title: "Keimanan",
      name: "Budi",
      date: "Lulus 3 Desember 2025",
      score: 80,
      image: "/pajamas_search-results.png",
      statusNilai: "Baik ( Jayyid Jiddan )",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem, adipiscing amet, consectetur adipiscing elit",
      materi:
        "Pembelajaran yang disusun untuk memperdalam pemahaman tentang Rukun Iman, Tauhid, dan prinsip akidah, sehingga memperkokoh keyakinan serta nilai-nilai keislaman dalam kehidupan.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Link to={"/settings/sertifikat"}>
        <div className="flex items-center gap-3 mt-5 px-5 text-lg ">
          <FaArrowLeft />
          <h1 className="font-semibold">Sertifikat</h1>
        </div>
      </Link>

      <div className="flex flex-col gap-3 p-5 ">
        <h1 className={`${getTextTitle1()} text-md font-[500]`}>Dasar Islam</h1>
        <h5 className="-mt-2 text-md font-[600]">keimanan</h5>
      </div>
      <div>
        {dasarIslam.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 p-5 -mt-5">
            <div className="flex items-center gap-3">
              <FaUser />
              <p className="font-[500]">{item.name}</p>
            </div>
            <div className="flex items-center gap-3">
              <MdAccessTimeFilled />
              <p className="text-sm font-[500]">{item.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaUser />
              <h1 className="text-sm font-[500]">Nilai : {item.score}</h1>
            </div>
            <div className="flex items-center gap-3">
              <img src="/pajamas_search-results.png" alt="" />
              <p className="text-sm font-[500]">
                Status Nilai : {item.statusNilai}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IoMdBook className="text-7xl -mt-20 font-bold" />

              <p className="text-sm font-[500]">Materi : {item.materi}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 p-5 mt-[150px]">
        <button className={`${getBorderClass()}  p-2 rounded-xl border-none`}>
          Download Data
        </button>
        <Link to={"/kumpulan-ujian-dasar-islam"}>
          <button className={`${getButtonClass()} w-full border-none p-2 rounded-xl`}>
            Kerjakan Ujian
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SertifikatDasarIslam;

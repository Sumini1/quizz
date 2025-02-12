import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const VisiMisi = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { borderColor, getButtonClass, getTextTitle1 } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const paragraphs = [
    "Kami sediakan berbagai macam penghargaan yaitu lencana dan berbagai macam hadiah seperti warna, tema dan icon spesial sebagai bentuk apresiasi tertinggi.",
    "Kami sediakan berbagai macam penghargaan yaitu lencana dan berbagai macam hadiah seperti warna, tema dan icon spesial sebagai bentuk apresiasi tertinggi.",
    "Kami sediakan berbagai macam penghargaan yaitu lencana dan berbagai macam hadiah seperti warna, tema dan icon spesial sebagai bentuk apresiasi tertinggi.",
    "Kami sediakan berbagai macam penghargaan yaitu lencana dan berbagai macam hadiah seperti warna, tema dan icon spesial sebagai bentuk apresiasi tertinggi.",
    "Kami sediakan berbagai macam penghargaan yaitu lencana dan berbagai macam hadiah seperti warna, tema dan icon spesial sebagai bentuk apresiasi tertinggi.",
    "Kami sediakan berbagai macam penghargaan yaitu lencana dan berbagai macam hadiah seperti warna, tema dan icon spesial sebagai bentuk apresiasi tertinggi.",
  ];

 
const latar = [
  {
    id: 1,
    name: "Latar Belakang",
    link: "/dukung-kami/latar-belakang",
    description: "Sejarah dibalik dibuatnya aplikasi",
    image: <img src="/papper.png" alt="" />,
  },
  {
    id: 2,
    name: "Tujuan",
    link: "/dukung-kami/latar-belakang/tujuan",
    description: "Visi dan misi aplikasi dibangun",
    image: <img src="/papper.png" alt="" />,
  },
];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-5">
        <div onClick={() => navigate(-1)} className="flex gap-2 items-center">
          <FaArrowLeft
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-xl font-semibold">Visi dan Misi</h1>
        </div>
        <div className="flex flex-col gap-3 mt-7">
          {(showAll ? paragraphs : paragraphs.slice(0, 3)).map(
            (text, index) => (
              <p key={index} className="text-sm font-normal">
                {text}
              </p>
            )
          )}
          {!showAll && (
            <p
              onClick={() => setShowAll(true)}
              className="text-sm font-semibold mt-3 underline cursor-pointer"
            >
              Lanjut membaca
            </p>
          )}
        </div>
      </div>
      <hr className="w-full text-[#EEEEEE] font-bold border-[6px] m-0 mb-5" />

      {/* Section */}
      <div className="flex flex-col mx-5 gap-2 gap-y-4">
        {latar.map((item) => (
          <div
            onClick={() => navigate(item.link)}
            key={item.id}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="w-12 h-12 flex">{item.image}</div>
            <div className="flex flex-col flex-grow">
              <p className="font-semibold text-sm mb-1">{item.name}</p>
              <p className="text-xs text-[#777]">{item.description}</p>
            </div>
            <MdOutlineArrowForwardIos className="text-lg" />
          </div>
        ))}
      </div>
      <button className={`${getButtonClass()} border-none p-3 m-5 mt-10 mb-5`}>
        Donasi Sekarang
      </button>
    </div>
  );
};

export default VisiMisi;


import React from "react";
import { FaFileArchive } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { LiaSchoolSolid } from "react-icons/lia";
import { AiTwotoneTags } from "react-icons/ai";
import { SiBookmyshow } from "react-icons/si";
import { FaStopwatch20 } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import ButtonMobileKotak from "../../components/Appearance/ButtonMobileKotak";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoDiamond } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { BiLoaderCircle } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";




const Beranda = () => {
  const kotak = [
    { id: 1, name: "Pilihan Qur'an Hadits", icon: <LiaSchoolSolid /> },
    { id: 2, name: "Persiapan Ramadhan", icon: <AiTwotoneTags /> },
    { id: 3, name: "Tematik Pilihan", icon: <SiBookmyshow /> },
    { id: 4, name: "Kuis Kilat 1 Menit", icon: <FaStopwatch20 /> },
    { id: 5, name: "Kuis Marathon", icon: <IoTimer /> },
    { id: 6, name: "Kuis Berhadiah", icon: <FaGift /> },
    { id: 7, name: "Tantangan Harian", icon: <FaCalendarCheck /> },
    { id: 8, name: "Tantangan Pekanan", icon: <BsFillCalendarWeekFill /> },
    { id: 9, name: "Tantangan Bulanan", icon: <BsFillCalendarMonthFill /> },
  ];

  const { getThemeLoveClass, getBorderClass, getThemeClass, getThemeBeranda, theme, getLatarBeranda, getTextTitle } =
    useTheme();

  return (
    <>
      <div className={`flex flex-col flex-grow h-[400px] ${getLatarBeranda()}`}>
        <div className={`mt-1 rounded-lg m-2  `}>
          {/* Kontainer Header */}
          <div className="flex items-center gap-4 px-2 py-3 ">
            <div className="flex items-center gap-2">
              {/* <FaFileArchive className={`${getThemeLoveClass()} text-2xl  `} /> */}
              <h1
                className={`text-xl font-semibold 
                ${getTextTitle()}
                `}
              >
                Edu Learn
              </h1>
            </div>
            <FaCircleUser
              className={`ml-auto text-2xl mx-14 mt-1 ${getTextTitle()} `}
            />
          </div>

          {/* Kontainer Utama */}
          <div
            className={`flex flex-col gap-4 px-4 py-3  rounded-2xl ${getThemeClass()} rounded-b-none border-none ${
              theme === "dark" && "m-1"
            }`}
          >
            <h1 className="text-md font-semibold">
              Assalamualaikum, Sdr. Budi
            </h1>
            <h1 className={`text-sm text-white`}>
              “ Sesungguhnya ilmu adalah rasa takut kepada Allah ta’ala “.
            </h1>
            {/* <button
            className={`flex text-sm ml-auto bg-white ${getThemeLoveClass()} p-1 border-none  rounded-xl w-[200px] `}
          >
            <FaHeart className={`flex mx-auto mt-1 items-center`} />
            <p className="mx-auto">Yuk, berlangganan</p>
          </button> */}
            <div className="flex flex-col justify-between gap-7">
              <div className="flex items-center gap-2">
                <img src="/iconPemula.png" alt="pemula" />
                <h5 className="text-xs">Pemula</h5>
              </div>
              <div className="flex items-center gap-x-40">
                <div className="flex items-center  -mt-5 gap-2">
                  <img src="/iconLencana.png" alt="lencana" />
                  <h5 className="text-xs ">22 Lencana</h5>
                </div>
                <div className="flex items-center justify-center -mt-5 bg-[#28A745] p rounded-full gap-2 p-1 w-[170px]">
                  <img
                    src="/emerald.png"
                    alt="emerald"
                    className="text-sm items-center"
                  />
                  <h5 className="text-xs">Emerald</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${getThemeBeranda()} border-none flex gap-3 rounded-2xl rounded-t-none items-center justify-center p-4 ${
              theme === "dark" && "m-1 -mt-2"
            }`}
          >
            <div className="flex flex-col gap-2 items-center">
              <div className="flex bg-white rounded-full h-[60px] w-[60px] justify-center items-center p-2">
                <img src="/Shop.png" alt="Shop" className="text-lg" />
              </div>
              <p className="text-xs text-center whitespace-nowrap">Toko</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex bg-white rounded-full h-[60px] w-[60px] justify-center items-center p-3">
                <img src="/People.png" alt="People" className="text-lg" />
              </div>
              <p className="text-xs text-center whitespace-nowrap">
                Kontributor
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex bg-white rounded-full h-[60px] w-[60px] justify-center items-center p-3">
                <img src="/Compass.png" alt="Compass" className="text-lg" />
              </div>
              <p className="text-xs text-center whitespace-nowrap">
                Jelajahi Kami
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex bg-white rounded-full h-[60px] w-[60px] justify-center items-center p-3">
                <img
                  src="/receive cash.png"
                  alt="Receive Cash"
                  className="text-lg"
                />
              </div>
              <p className="text-xs text-center whitespace-nowrap">
                Dukungan
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex bg-white rounded-full h-[60px] w-[60px] justify-center items-center p-3">
                <img src="/Info.png" alt="Info" className="text-xl" />
              </div>
              <p className="text-xs text-center whitespace-nowrap">
                Kontibusi
              </p>
            </div>
          </div>

          {/* Bagian Kotak-kotak */}
          <div
            className="flex flex-col gap-4 px-4 py-3 font-semibold text-lg mb-5 "
            // style={{
            //   backgroundColor: "var(--bg-color)",
            //   color: "var(--text-color)",
            // }}
          >
            <h1 className={`text-lg mt-10  ${getTextTitle()} `}>
              Metode Belajar
            </h1>
            <div className="grid grid-cols-3 gap-3  mt-3 text-center ">
              {kotak.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center   gap-2 "
                >
                  <div
                    className={`flex items-center justify-center p-x-5 text-3xl ${getThemeLoveClass()} p-4 border-2 rounded-lg ${getBorderClass()} w-[90px] shadow-md ${
                      theme === "dark" && "text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <p
                    className={`text-center text-sm  font-medium  w-full ${getTextTitle()}`}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Button */}
        <div className="sticky bottom-0 w-full h-full">
          <ButtonMobileKotak className="p-0 m-0 bg-blue-500 text-white flex justify-center items-center h-12" />
        </div>
      </div>
    </>
  );
};

export default Beranda;

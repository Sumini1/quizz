import React from "react";
import { FaFileArchive } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import ButtonMobileKotak from "../../components/ListButton/ButtonMobileKotak";
import { MdOutlineError } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Beranda = () => {
  const navigate = useNavigate();
  const kotak = [
    {
      id: 1,
      name: "Pilihan Qur'an Hadits",
      icon: <img src="/BookReading.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Persiapan Ramadhan",
      icon: <img src="/Quran.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Tematik Pilihan",
      icon: <img src="/Kaaba.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Kuis Kilat 1 Menit",
      icon: <img src="/MultipleChoice.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Kuis Marathon",
      icon: <img src="/Magazine.png" alt="" srcset="" />,
    },
    {
      id: 6,
      name: "Kuis Berhadiah",
      icon: <img src="/FastForward.png" alt="" srcset="" />,
    },
    {
      id: 7,
      name: "Tantangan Harian",
      icon: <img src="/Ambition.png" alt="" srcset="" />,
    },
    {
      id: 8,
      name: "Tantangan Pekanan",
      icon: <img src="/View.png" alt="" srcset="" />,
    },
  ];
  const sedangDipelajari = [
    {
      id: 1,
      name: "Dasar Islam",
      title: "Keimanan",
      ket: "3 Hari yang lalu",
      progress: 2 / 3,
    },
    {
      id: 1,
      name: "Dasar Islam",
      title: "Muamalan",
      ket: "3 Hari yang lalu",
      progress: 2 / 3,
    },
    {
      id: 1,
      name: "Dasar Islam",
      title: "Keimanan",
      ket: "3 Hari yang lalu",
      progress: 1 / 3,
    },
    {
      id: 1,
      name: "Dasar Islam",
      title: "Muamalah",
      ket: "3 Hari yang lalu",
      progress: 2 / 3,
    },
  ];

  const materiTerbaru = [
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      title: "Keimanan",
      ket: "3 Hari yang lalu",
    },
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      title: "Muamalah",
      ket: "3 Hari yang lalu",
    },
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      title: "Keimanan",
      ket: "3 Hari yang lalu",
    },
    {
      id: 1,
      image: <img src="/beranda.png" alt="" srcset="" />,
      name: "Dasar Islam",
      title: "Muamalah",
      ket: "3 Hari yang lalu",
    },
  ];

  const donate = [
    { id: 1, name: "Maret 2025", route: "/maret-2025" },
    { id: 2, name: "April 2025", route: "/april-2025" },
    { id: 3, name: "Mei 2025", route: "/mei-2025" },
    { id: 4, name: "Juni 2025", route: "/juni-2025" },
    { id: 5, name: "Juli 2025", route: "/juli-2025" },
  ];

  const category = [
    {
      id: 1,
      name: "Toko",
      link: "/toko-berlian",
      image: <img src="/Shop.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Kontributor",
      link: "/settings",
      image: <img src="/People.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Jelajahi Kami",
      link: "/jelajahi-aplikasi",
      image: <img src="/Compass.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Website",
      link: "/settings",
      image: <img src="/Globe.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Notifikasi",
      link: "/notifikasi",
      image: <img src="/Info.png" alt="" srcset="" />,
    },
  ];

  const {
    borderColor,
    getThemeClass,
    getThemeBeranda,
    theme,
    getLatarBeranda,
    getTextTitle,
    getIconColorAlert,
  } = useTheme();

  return (
    <>
      <div className="flex justify-center w-full">
        <div
          className={`flex flex-col flex-grow max-w-md w-full ${getLatarBeranda()}`}
        >
          <div className="flex flex-col">
            <div className={`mt-1 rounded-lg m-2`}>
              {/* Kontainer Header */}
              <div className="flex items-center gap-4 px-2 py-3">
                <div className="flex items-center gap-2">
                  <h1 className={`text-xl font-semibold ${getTextTitle()}`}>
                    Edu Learn
                  </h1>
                </div>
                <FaCircleUser
                  className={`ml-auto text-2xl mx-14 mt-1 md:mr-0 ${getTextTitle()}`}
                />
              </div>

              {/* Kontainer Utama */}
              <div
                className={`flex flex-col gap-4 px-4 py-3 m-1 rounded-2xl ${getThemeClass()} rounded-b-none border-none ${
                  theme === "dark" && "m-1"
                }`}
              >
                <h1 className="text-md font-semibold">
                  Assalamualaikum, Sdr. Budi
                </h1>
                <h1 className={`text-sm text-white`}>
                  " Sesungguhnya ilmu adalah rasa takut kepada Allah ta'ala ".
                </h1>

                <div className="flex flex-col justify-between gap-6">
                  <div
                    onClick={() => navigate("/lencana-belajar")}
                    className="flex items-center gap-2"
                  >
                    <img src="/iconPemula.png" alt="pemula" />
                    <h5 className="text-xs">Pemula</h5>
                  </div>

                  <div className="flex items-center gap-x-40">
                    <div
                      onClick={() => navigate("/pangkat")}
                      className="flex items-center -mt-5 gap-2 whitespace-nowrap"
                    >
                      <img src="/iconLencana.png" alt="lencana" className="" />
                      <h5 className="text-xs">
                        22 <span className="ml-1">Lencana</span>
                      </h5>
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
                className={`${getThemeBeranda()} border-none flex gap-3 rounded-2xl rounded-t-none items-center justify-center p-4 m-1 ${
                  theme === "dark" && "m-1 -mt-2"
                }`}
              >
                <div className="flex gap-3 w-full  items-center mx-auto space-between justify-between">
                  {category.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => navigate(item.link)}
                      className="flex flex-col gap-2 items-center "
                    >
                      <div className="flex bg-white rounded-full h-[50px] w-auto justify-center items-center p-2">
                        <h5>{item.image}</h5>
                      </div>
                      <p className="text-xs text-center whitespace-nowrap">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/*  Paragraf */}
            <div className="px-4 py-3 mb-5 bg-[#F8FFF6] mt-5 w-full flex flex-col">
              <div className="flex gap-2">
                <h2 className="mb-3 font-[500] text-md">
                  Donasi Perkembangan Aplikasi ( 1 )
                </h2>
                <MdOutlineError className={`${getIconColorAlert()}`} />
              </div>
              <p className="text-sm font-normal">
                Partisipasi perkembangan sistem serta pembuatan soal & materi
                untuk mewujudkan pendidikan islam gratis bagi muslimin dan umum.
              </p>
              <div className="flex justify-between">
                <p className="text-sm font-normal mt-3">
                  Terkumpul :
                  <span className="text-[#28A745] ml-2">Rp. 5.000.000</span>
                </p>
                <p className="text-sm font-normal mt-3">
                  Sisa hari :<span className="text-[#28A745] ml-2">20</span>
                </p>
              </div>
              <div className="flex items-center w-full mt-3 mb-2 ">
                <div className="h-2 w-1/5 bg-orange-500 rounded-l-xl p-2"></div>
                <div className="h-2 w-4/5 bg-[#EEEEEE] rounded-r-xl p-2"></div>
              </div>
            </div>

            {/* Bagian Kotak-kotak */}
            <div className="flex flex-col gap-4 px-4 mb-5 ">
              <h2 className={`text-md font-[500] ${getTextTitle()}`}>
                Mode Belajar
              </h2>
              <div className="grid grid-cols-4 gap-2 mt-1 text-center ">
                {kotak.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-2 "
                  >
                    <div
                      className={`flex items-center justify-center w-[80px] h-[80px] text-3xl p-2 rounded-xl border-4 ${borderColor()} ${
                        theme === "dark" ? "text-white" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    <p
                      className={`text-center text-sm font-normal w-full ${getTextTitle()}`}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <hr className="w-full text-[#EEEEEE] font-bold border-[6px] m-0 mb-5 " />

            <div className="px-4 mb-5 w-full flex flex-col">
              <div className="flex gap-2">
                <h2 className="mb-5 font-[500] text-md ">Sedang Dipelajari</h2>
                <MdOutlineError className={`${getIconColorAlert()}`} />
                <Link to={"/sedang-dipelajari"} className="ml-auto">
                  <h5 className="text-sm font-medium mt-2 items-center text-[#F59D09]">
                    Selengkapnya
                  </h5>
                </Link>
              </div>
              <div className="overflow-x-auto whitespace-nowrap pb-4 flex gap-3 scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack">
                {sedangDipelajari.map((item) => (
                  <div
                    key={item.id}
                    className={`flex flex-col flex-shrink-0 transition-opacity duration-700 ease-in-out p-3 border-2 rounded-xl gap-2 bg-white min-w-[250px] ${borderColor()}`}
                  >
                    <h1 className="text-green-600 text-xs font-semibold">
                      {item.name}
                    </h1>
                    <p className="text-gray-800 font-medium">{item.title}</p>
                    <div className="flex items-center gap-1">
                      <MdAccessTimeFilled className="text-gray-400" />
                      <p className="text-xs text-gray-500">{item.ket}</p>
                    </div>
                    <div className="flex items-center w-full mt-3 mb-2 relative h-6">
                      <div
                        className="h-5 bg-green-500 rounded-l-full flex items-center justify-center text-white text-xs font-normal relative z-10"
                        style={{ width: `${item.progress * 100}%` }}
                      >
                        {Math.round(item.progress * 100)}%
                      </div>
                      <div
                        className="h-5 bg-gray-100 rounded-r-full flex items-center justify-center text-gray-500 text-xs font-medium"
                        style={{ width: `${(1 - item.progress) * 100}%` }}
                      >
                        {/* {Math.round((1 - item.progress) * 100)}% */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="w-full text-[#EEEEEE] font-bold border-[6px] m-0 mb-3 -mt-2" />

            {/* LAPORAN DUKUNGAN */}
            <div className="px-4 py-3 mb-5 w-full flex flex-col">
              <div className="flex gap-2">
                <h2 className="mb-5 font-[500] text-md ">Laporan Dukungan</h2>
                <MdOutlineError className={`${getIconColorAlert()}`} />
                <Link to={"/laporan-dukungan"} className="no-underline ml-auto">
                  <h5 className="text-sm font-medium mt-2 items-center text-[#F59D09]">
                    Selengkapnya
                  </h5>
                </Link>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-medium">
                  Jaazakumullah khair, terimakasih atas dukungannya
                </h1>
              </div>
              <div className="overflow-x-auto mt-5 whitespace-nowrap pb-4 flex gap-3 scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack">
                {donate.map((item) => (
                  <Link
                    to={item.route}
                    key={item.id}
                    className={`px-3 border-2 py-2 rounded-xl flex-shrink-0 transition-opacity duration-700 ease-in-out ${borderColor()}`}
                  >
                    <h5 className="font-normal text-sm p-1">{item.name}</h5>
                  </Link>
                ))}
              </div>
            </div>
            <hr className="w-full text-[#EEEE] font-bold border-[6px] m-0 mb-5 -mt-5" />

            {/* Materi terbaru */}
            <div className="px-4 py-3 -mt-2 mb-5 w-full flex flex-col">
              <div className="flex gap-2 mb-5">
                <h2 className="mb-5 font-[500] text-md ">Materi Terbaru</h2>
                <MdOutlineError className={`${getIconColorAlert()}`} />
                <Link to={"/materi-terbaru"} className="ml-auto">
                  <h5 className="text-sm font-medium mt-2 items-center text-[#F59D09]">
                    Selengkapnya
                  </h5>
                </Link>
              </div>
              <div className="overflow-x-auto whitespace-nowrap pb-4 flex gap-3 scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack">
                {materiTerbaru.map((item) => (
                  <div
                    key={item.id}
                    className={`flex flex-col flex-shrink-0 transition-opacity duration-700 ease-in-out w-auto rounded-xl gap-2 ${borderColor()} shadow-xl shadow-gray-300 border-t-0`}
                  >
                    <h5 className="w-full rounded-xl">{item.image}</h5>

                    <div className="flex flex-col p-3">
                      <h1 className="text-green-600 text-xs font-semibold -mt-3 mb-2">
                        {item.name}
                      </h1>
                      <p className="text-gray-800 font-medium mb-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.ket}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Sticky Button */}
            <ButtonMobileKotak className="sticky bottom-0 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;

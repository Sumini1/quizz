import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { MdOutlineError } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ButtonMobileKotak from "../../components/ListButton/ButtonMobileKotak";

const JelajahiAplikasi = () => {
  const { getTextTitle, borderColor, theme, getIconColorAlert, getTextTitle1 } =
    useTheme();
  const navigate = useNavigate();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeTab, setActiveTab] = useState("Grid");

  const tabs = [
    { label: "Grid", icon: <BsFillGrid3X3GapFill className="text-md" /> },
    { label: "List", icon: <FaList className="text-md" /> },
  ];

  const navigasiUtama = [
    {
      id: 1,
      name: "Beranda",
      icon: <img src="/Home.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Pembelajaran",
      icon: <img src="/BookReading.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Belajar Sekarang",
      icon: <img src="/Reading.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Progress",
      icon: <img src="/progress.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Pengaturan",
      icon: <img src="/Settings.png" alt="" srcset="" />,
    },
    {
      id: 6,
      name: "Tampilan",
      icon: <img src="/tampilan.png" alt="" srcset="" />,
    },
    {
      id: 7,
      name: "Beranda",
      icon: <img src="/Globe.png" alt="" srcset="" />,
    },
  ];
  const dukungan = [
    {
      id: 1,
      name: "Toko",
      icon: <img src="/Shop.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Dukungan Pengguna",
      icon: <img src="/dukungan2.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Laporan Dukungan",
      icon: <img src="/dukungan3.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Dukungan Kami",
      icon: <img src="/dukungan4.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Kontributor",
      icon: <img src="/People.png" alt="" srcset="" />,
    },
    {
      id: 6,
      name: "Kerjasama",
      icon: <img src="/Handshake1.png" alt="" srcset="" />,
    },
  ];
  const menuUtama = [
    {
      id: 1,
      name: "Notifikasi",
      icon: <img src="/Info.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Sedang Dipelajari",
      icon: <img src="/progress.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Materi Terbaru",
      icon: <img src="/New.png" alt="" srcset="" />,
    },
  ];

  const modeBelajar = [
    {
      id: 1,
      name: "Mode Utama",
      icon: <img src="/BookReading.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Qur'an Hadist",
      icon: <img src="/Quran.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Agenda Spesial",
      icon: <img src="/Kaaba.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Tematik Pilihan",
      icon: <img src="/MultipleChoice.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Artikel",
      icon: <img src="/Magazine.png" alt="" srcset="" />,
    },
    {
      id: 6,
      name: "Kuis Kilat 1 menit",
      icon: <img src="/FastForward.png" alt="" srcset="" />,
    },
    {
      id: 7,
      name: "Ikuti Tantangan",
      icon: <img src="/Ambition.png" alt="" srcset="" />,
    },
    {
      id: 8,
      name: "Mode Lainnya",
      icon: <img src="/View.png" alt="" srcset="" />,
    },
  ];

  const progress = [
    {
      id: 1,
      name: "Lencana",
      icon: <img src="/iconLencana.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Pangkat",
      icon: <img src="/iconPemula.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Belajar Berturut-turut",
      icon: <img src="/Fire.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Tingkat Level",
      icon: <img src="/Rank.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Total Berlian",
      icon: <img src="/Diamond.png" alt="" srcset="" />,
    },
    {
      id: 6,
      name: "Total Poin",
      icon: <img src="/Coins.png" alt="" srcset="" />,
    },
    {
      id: 7,
      name: "Hadiah Pencapaian",
      icon: <img src="/SantaSack.png" alt="" srcset="" />,
    },
  ];

  const lainnya = [
    {
      id: 1,
      name: "Profile",
      icon: <img src="/user.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Sertifikat",
      icon: <img src="/Certificate.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Tanya Jawab",
      icon: <img src="/Help.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Saran dan Masukan",
      icon: <img src="/Feedback.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Ketentuan",
      icon: <img src="/Analyze.png" alt="" srcset="" />,
    },
  ];
  // Bagian List
  const navigasiUtamaList = [
    {
      id: 1,
      name: "Beranda",
      title: "Halaman Utama Quiz App",
      icon: <img src="/Home.png" alt="" srcset="" />,
    },
    {
      id: 2,
      name: "Pembelajaran",
      title: "Mode utama yang tersedia",
      icon: <img src="/BookReading.png" alt="" srcset="" />,
    },
    {
      id: 3,
      name: "Belajar Sekarang",
      title: "Pembelajaran mode utama yang sedang dipelajari",
      icon: <img src="/Reading.png" alt="" srcset="" />,
    },
    {
      id: 4,
      name: "Progress",
      title: "Statistik yang telah tercatat selama user pembelajaran",
      icon: <img src="/progress.png" alt="" srcset="" />,
    },
    {
      id: 5,
      name: "Pengaturan",
      title: "Pengaturan mengenai akun dan aplikasi",
      icon: <img src="/Settings.png" alt="" srcset="" />,
    },
    {
      id: 6,
      name: "Tampilan",
      title: "Pengaturan tampilan seperti tema, warna, ikon dan tampilan lain",
      icon: <img src="/tampilan.png" alt="" srcset="" />,
    },
    {
      id: 7,
      name: "Beranda",
      title: "Tempat untuk memposting informasi lengkap quiz app",
      icon: <img src="/Globe.png" alt="" srcset="" />,
    },
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        {/* Header */}
        <div className="flex justify-between items-center m-5 mb-4">
          <div className="flex items-center gap-2">
            <FaArrowLeft
              className="text-xl cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h1 className="font-semibold text-xl">Jelajahi Aplikasi</h1>
          </div>
          <IoSearch
            className="text-2xl cursor-pointer mr-14"
            onClick={() => setIsSearchActive((prev) => !prev)} // Toggle input search
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col mt-3">
          <div className="flex text-sm font-normal gap-1 m-5 -mt-1">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(tab.label)}
                className={`flex  items-center gap-1   p-2 rounded-lg  cursor-pointer ${
                  activeTab === tab.label
                    ? "bg-[#0961F5] text-white w-[60px] items-center"
                    : "bg-transparent w-[70px] items-center"
                }`}
              >
                {tab.icon}
                <span className=" items-center flex text-md font-semibold">
                  {tab.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bagian Grid Tab */}
          <>
            {activeTab === "Grid" && (
              <div className="flex flex-col -mt-5">
                <div className="flex flex-col p-5 ">
                  {isSearchActive && (
                    <div className="relative flex items-center w-full bg-[#EEEEEE] border mb-3 border-gray-300 rounded-xl p-2  ">
                      <input
                        type="text"
                        placeholder="Cari warna belajar..."
                        className="bg-transparent w-full pl-10 rounded-xl outline-none m"
                      />
                      <IoSearch className="absolute left-3 text-xl text-gray-500" />
                    </div>
                  )}
                  <div className="flex flex-col ">
                    <div className="flex ">
                      <h2 className="text-lg font-[500]">Navigasi Utama</h2>
                      <MdOutlineError className={`${getIconColorAlert()}`} />
                    </div>
                    <div className="grid grid-cols-4 gap-3  mt-3 text-center ">
                      {navigasiUtama.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center   gap-3 "
                        >
                          <div
                            className={`flex items-center justify-center w-[70px] h-[70px] text-3xl p-2 rounded-xl border-4 ${borderColor()} ${
                              theme === "dark" ? "text-white" : ""
                            }`}
                          >
                            {item.icon}
                          </div>
                          <p
                            className={`text-center text-xs -mt-2  font-normal  w-full ${getTextTitle()}`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="w-full text-[#EEEEEE] font-bold  border-[6px] m-0 mb-5  " />

                {/* dukungan */}
                <div className="flex flex-col p-5 bg-[#F8FFF6] pt-10 -mt-5 ">
                  <div className="flex flex-col -mt-5">
                    <div className={`flex  ${getTextTitle1()}`}>
                      <h1 className="text-lg font-[500]">Dukungan</h1>
                      <MdOutlineError />
                    </div>
                    <div className="grid grid-cols-4 gap-3  mt-3 text-center ">
                      {dukungan.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center   gap-3 "
                        >
                          <div
                            className={`flex items-center justify-center w-[70px] h-[70px] text-3xl p-2 rounded-xl border-4 ${borderColor()} ${
                              theme === "dark" ? "text-white" : ""
                            }`}
                          >
                            {item.icon}
                          </div>
                          <p
                            className={`text-center text-xs -mt-2  font-normal  w-full ${getTextTitle()}`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="w-full text-[#EEEEEE] font-bold  border-[6px] m-0 mb-5  " />

                {/* Menu Utama */}
                <div className="flex flex-col p-5">
                  <div className="flex flex-col -mt-5">
                    <div className={`flex `}>
                      <h2 className="text-lg font-[500]">Menu Utama</h2>
                      <MdOutlineError className={`${getIconColorAlert()}`} />
                    </div>
                    <div className="grid grid-cols-4 gap-3  mt-3 text-center ">
                      {menuUtama.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center   gap-3 "
                        >
                          <div
                            className={`flex items-center justify-center w-[70px] h-[70px] text-3xl p-2 rounded-xl border-4 ${borderColor()} ${
                              theme === "dark" ? "text-white" : ""
                            }`}
                          >
                            {item.icon}
                          </div>
                          <p
                            className={`text-center text-xs -mt-2  font-normal  w-full ${getTextTitle()}`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="w-full text-[#EEEEEE] font-bold  border-[6px] m-0 mb-5  " />

                {/* Mode Belajar */}
                <div className="flex flex-col p-5">
                  <div className="flex flex-col -mt-5">
                    <div className={`flex `}>
                      <h2 className="text-lg font-[500]">Mode Belajar</h2>
                      <MdOutlineError className={`${getIconColorAlert()}`} />
                    </div>
                    <div className="grid grid-cols-4 gap-3  mt-3 text-center ">
                      {modeBelajar.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center   gap-3 "
                        >
                          <div
                            className={`flex items-center justify-center w-[70px] h-[70px] text-3xl p-2 rounded-xl border-4 ${borderColor()} ${
                              theme === "dark" ? "text-white" : ""
                            }`}
                          >
                            {item.icon}
                          </div>
                          <p
                            className={`text-center text-xs -mt-2  font-normal  w-full ${getTextTitle()}`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="w-full text-[#EEEEEE] font-bold  border-[6px] m-0 mb-5  " />

                {/* Progress */}
                <div className="flex flex-col p-5">
                  <div className="flex flex-col -mt-5">
                    <div className={`flex ${getTextTitle1()}`}>
                      <h1 className="text-lg font-[500]">Progress</h1>
                      <MdOutlineError />
                    </div>
                    <div className="grid grid-cols-4 gap-3  mt-3 text-center ">
                      {progress.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center   gap-3 "
                        >
                          <div
                            className={`flex items-center justify-center w-[70px] h-[70px] text-3xl p-2 rounded-xl border-4 ${borderColor()} ${
                              theme === "dark" ? "text-white" : ""
                            }`}
                          >
                            {item.icon}
                          </div>
                          <p
                            className={`text-center text-xs -mt-2  font-normal  w-full ${getTextTitle()}`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="w-full text-[#EEEEEE] font-bold  border-[6px] m-0 mb-5  " />

                {/* Lainnya */}
                <div className="flex flex-col p-5">
                  <div className="flex flex-col -mt-5">
                    <div className={`flex ${getTextTitle1()}`}>
                      <h5 className="text-lg font-[500]">Lainnya</h5>
                      <MdOutlineError />
                    </div>
                    <div className="grid grid-cols-4 gap-3  mt-3 text-center ">
                      {lainnya.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center   gap-3 "
                        >
                          <div
                            className={`flex items-center justify-center w-[70px] h-[70px] text-3xl p-2 rounded-xl border-4 ${borderColor()} ${
                              theme === "dark" ? "text-white" : ""
                            }`}
                          >
                            {item.icon}
                          </div>
                          <p
                            className={`text-center text-xs -mt-2  font-normal  w-full ${getTextTitle()}`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="w-full text-[#EEEEEE] font-bold  border-[6px] m-0 mb-5  " />
              </div>
            )}
          </>

          {/* Bagian List Tab */}
          {activeTab === "List" && (
            <div>
              <div className="flex flex-col p-5">
                {isSearchActive && (
                  <div className="relative mb-10 flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 -mt-7 ">
                    <input
                      type="text"
                      placeholder="Cari warna belajar..."
                      className="bg-transparent w-full pl-10 rounded-xl outline-none m"
                    />
                    <IoSearch className="absolute left-3 text-xl text-gray-500" />
                  </div>
                )}
              </div>
              <>
                <div className="flex flex-col">
                  <div className="flex flex-col  p-5">
                    <div className="flex -mt-16">
                      <h2 className="text-lg font-[500]">Navigasi Utama</h2>
                      <MdOutlineError className={`${getIconColorAlert()}`} />
                    </div>
                    <div className="flex flex-col ">
                      {navigasiUtamaList.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between py-2"
                        >
                          {/* Bagian Kiri: Ikon dan Teks */}
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {/* Ikon */}
                            <span className="flex items-center w-[40px] h-[50px]">
                              {item.icon}
                            </span>

                            {/* Teks Name & Title */}
                            <div className="flex flex-col flex-1 min-w-0 text-start">
                              <h1 className="font-medium text-sm">
                                {item.name}
                              </h1>
                              <p className="text-xs font-normal  ">
                                {item.title}
                              </p>
                            </div>
                          </div>

                          {/* Panah Navigasi (Tidak akan terdorong keluar) */}
                          <MdArrowForwardIos className="text-lg shrink-0  items-center  flex mt-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="w-full text-[#EEEEEE] font-bold  border-[6px] m-0 mb-5 " />
                </div>
              </>
            </div>
          )}
        </div>
        {/* Sticky Button */}
        <div className="sticky bottom-0 w-full h-full">
          <ButtonMobileKotak className="p-0 m-0  text-white flex justify-center items-center h-12" />
        </div>
      </div>
    </>
  );
};

export default JelajahiAplikasi;

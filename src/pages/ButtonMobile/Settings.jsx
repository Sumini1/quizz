import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaAffiliatetheme } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdNotificationsActive, MdEmail } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaUsers, FaPersonCircleQuestion } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import ButtonMobileKotak from "../../components/Appearance/ButtonMobileKotak";
import { useTheme } from "../../context/ThemeContext";
import { TbLogout } from "react-icons/tb";
import { PiCertificateFill } from "react-icons/pi";
import { IoColorPalette } from "react-icons/io5";




const Settings = () => {
    const { theme } = useTheme();
  const listSettings = [
    {
      id: 1,
      name: "Profil",
      icon: <FaUserAlt />,
      link: "/profil",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 2,
      name: "Notifikasi",
      icon: <MdNotificationsActive />,
      link: "/notifikasi",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 3,
      name: "Tampilan",
      icon: <IoColorPalette />,
      link: "/tampilan",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 4,
      name: "Sertifikat",
      link: "/sertifikat",
      icon: <PiCertificateFill />,
      symbol: <RiArrowRightSLine />,
    },
  ];

  const dukungan = [
    {
      id: 1,
      name: "Dukung Kami",
      icon: <BiSolidDonateHeart />,
      link: "/dukungan",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 2,
      name: "Gabung berikan kontribusi",
      icon: <FaUsers />,
      link: "/kontributor",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 3,
      name: "Profil Dukungan Pengguna",
      icon: <img src="/dukung.png" alt="" />,
      link: "/profil-pengguna",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 4,
      name: "Kerjasama",
      icon: <img src="/handshake.png" alt="" />,
      link: "/kontribusi",
      symbol: <RiArrowRightSLine />,
    },
  ];

  const lainnya = [
    {
      id: 1,
      name: "Website",
      icon: <TbWorldWww />,
      link: "/website",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 2,
      name: "Tanya Jawab",
      icon: <FaPersonCircleQuestion />,
      link: "/tanya-jawab",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 3,
      name: "Saran dan Masukan",
      icon: <MdEmail />,
      link: "/saran-masukan",
      symbol: <RiArrowRightSLine />,
    },
    {
      id: 4,
      name: "Ketentuan dan Keamanan",
      icon: <AiFillSafetyCertificate />,
      link: "/ketentuan-keamanan",
      symbol: <RiArrowRightSLine />,
    },
  ];
  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white  rounded-lg p-3"
      : theme === "cupcake"
      ? "bg-pink-500 text-white rounded-lg p-3"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white rounded-lg p-3"
      : theme === "lemonade"
      ? "bg-[#027A7D] text-white  rounded-lg p-3"
      : "bg-[#F4F4F4] text-[#222]  rounded-lg p-3";
  };

  const keluar = [
    {
      id: 1,
      name: "Keluar",
      icon: <TbLogout />,
      link: "/keluar",
      symbol: <RiArrowRightSLine />,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-2 flex flex-col text-xl mx-5 mt-3 flex-grow">
        <h1 className="text-xl font-[500] mb-5">Lainnya</h1>

        <div className="mb-5">
          <h2 className="text-lg font-medium mb-3">Akun</h2>
          <div className={` ${getThemeClass()}`}>
            {listSettings.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="flex items-center justify-between gap-4   py-3 "
              >
                <div className="flex items-center gap-4 mx-1">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-base font-base">{item.name}</span>
                </div>
                <span className="text-3xl ">{item.symbol}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="font-medium text-lg mb-3">Dukungan</h2>
          <div className={`p-1 ${getThemeClass()}`}>
            {dukungan.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="flex items-center justify-between gap-4   py-3"
              >
                <div className="flex items-center gap-4 mx-1">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-base font-base">{item.name}</span>
                </div>
                <span className="text-3xl ">{item.symbol}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="font-medium text-lg mb-3">Lainnya</h2>
          <div className={`p-2 ${getThemeClass()}`}>
            {lainnya.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="flex items-center justify-between gap-4  py-3"
              >
                <div className="flex items-center gap-4 mx-1">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-base font-base">{item.name}</span>
                </div>
                <span className="text-3xl ">{item.symbol}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className={`p-2 selection:${getThemeClass()}`}>
          {keluar.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="flex items-center justify-between gap-4 p-1 py-3"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                <span className="text-base font-base">{item.name}</span>
              </div>
              <span className="text-3xl">{item.symbol}</span>
            </Link>
          ))}
        </div>
        <div className=" mt-10">
          <h1 className="text-lg font-semibold ">Quizz App</h1>
          <p className="text-sm">Version 1.00</p>
        </div>
      </div>

      <div className="sticky bottom-0 w-full">
        <ButtonMobileKotak />
      </div>
    </div>
  );
};

export default Settings;

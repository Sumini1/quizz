
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { TbProgressBolt } from "react-icons/tb";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaGraduationCap } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";

const ButtonMobileKotak = () => {
  const { theme, getBorderClass, getThemeLoveClass, getIconTheme } = useTheme();

  const kotak = [
    { id: 1, icon: <FaHome />, title: "Home", link: "/beranda" },
    {
      id: 2,
      icon: <FaGraduationCap />,
      title: "Pembelajaran",
      link: "/pembelajaran",
    },
    { id: 3, icon: <FaCirclePlay />, title: "Play", link: "/appearance-kotak" },
    { id: 4, icon: <GiProgression />, title: "Progress", link: "/progress" },
    { id: 5, icon: <IoSettingsSharp />, title: "Pengaturan", link: "/settings" },
  ];

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : theme === "lemonade"
      ? "bg-[#027A7D] text-white"
      : "text-[#0961F5] text-[#222]";
  };


  return (
    <div
      className={`p-4 rounded-lg flex justify-center items-center mx-auto sticky bottom-0 w-full max-w-lg ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#EEE]"
      }`}
    >
      <div className="flex justify-between h-[30px] gap-2 items-center w-full relative">
        {kotak.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className={`flex flex-col justify-center items-center text-center gap-1`}
            style={{ flex: "1 1 20%" }} // Membagi jarak rata semua ikon
          >
            <p
              className={`text-2xl font-bold ${
                theme === "dark" && "text-white"
              } ${getThemeClass()} ${
                item.id === 3
                  ? `rounded-full border-blue-500 bg-[#0961F5] text-blue-500 ${theme === "dark" && "bg-gray-800"} -mt-14 p-4 shadow-lg  ${getBorderClass()}`
                  : ""
              }`}
            >
              {item.icon}
            </p>
            {item.id !== 3 && <p className="text-xs">{item.title}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButtonMobileKotak;



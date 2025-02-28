import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FiUser } from "react-icons/fi";
import { BsFillAwardFill } from "react-icons/bs";

const ButtonMobileKotak = () => {
  const location = useLocation();
  const { theme, getBorderClass, getIconTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const kotak = [
    { id: 1, icon: <FaHome />, link: "/beranda" },
    {
      id: 2,
      icon: <FaGraduationCap />,
      // title: "Pembelajaran",
      link: "/pembelajaran",
    },
    { id: 3, icon: <FaCirclePlay />, link: "/themes-or-levels/:id" },
    { id: 4, icon: <BsFillAwardFill />, link: "/papan-peringkat" },
    { id: 5, icon: <GiProgression />, link: "/progress" },
    {
      id: 6,
      icon: <FiUser />,
      // title: "Pengaturan",
      link: "/settings",
    },
  ];

  const getBorderKotak = () => {
    return theme === "dark"
      ? "border-[#333]"
      : theme === "cupcake"
      ? "border-[#4B4B4B]"
      : theme === "bumblebee"
      ? "border-yellow-500"
      : theme === "lemonade"
      ? "border-[#027A7D]"
      : "bg-[] text-[#222]";
  };

  return (
    <div
      className={`p-4 rounded-lg flex justify-center items-center mx-auto sticky bottom-0 w-full max-w-lg transition-transform duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#EEE]"
      } ${isVisible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex justify-between h-[20px] gap-2 items-center w-full relative">
        {kotak.map((item) => {
          // Cek apakah item saat ini aktif berdasarkan pathname
          const isItemActive =
            location.pathname === item.link ||
            (location.pathname.startsWith("/progress") &&
              item.link === "/progress") || // Jika berada di halaman "/progress" atau "/progress/detail"
            (location.pathname === "/jelajahi-aplikasi" &&
              item.link === "/beranda");

          // Aktifkan ikon jika item aktif
          const activeIcon = isItemActive
            ? React.cloneElement(item.icon, { className: `${getIconTheme()}` })
            : item.icon;

          return (
            <Link
              to={item.link}
              key={item.id}
              className={`flex flex-col justify-center items-center text-center `}
              style={{ flex: "1 1 20%" }}
            >
              <p className={`text-2xl font-extrabold`}>{activeIcon}</p>
              <h5
                className={`text-xs ${
                  isItemActive ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.title}
              </h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonMobileKotak;

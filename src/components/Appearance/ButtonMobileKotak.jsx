import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { AiOutlineUsb } from "react-icons/ai";

const ButtonMobileKotak = () => {
  const location = useLocation();
  const { theme, getBorderClass, getIconTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Scroll ke bawah, sembunyikan navbar
      } else {
        setIsVisible(true); // Scroll ke atas, tampilkan navbar
      }
      setLastScrollY(window.scrollY); // Perbarui posisi scroll terakhir
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    {
      id: 5,
      icon: <AiOutlineUsb />,
      title: "Pengaturan",
      link: "/settings",
    },
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
      <div className="flex justify-between h-[30px] gap-2 items-center w-full relative">
        {kotak.map((item) => {
          const isActive = location.pathname === item.link;
          const activeIcon = isActive
            ? React.cloneElement(item.icon, { className: `${getIconTheme()}` })
            : item.icon;

          return (
            <Link
              to={item.link}
              key={item.id}
              className={`flex flex-col justify-center items-center text-center gap-1`}
              style={{ flex: "1 1 20%" }}
            >
              <p
                className={`text-2xl font-extrabold ${
                  item.id === 3
                    ? isActive
                      ? `rounded-full ${getBorderKotak()} text-5xl border-none -mt-14 p-4  ${getBorderClass()} ${
                          theme === "dark"
                            ? "bg-transparent text-white"
                            : "bg-transparent text-[#222]"
                        }`
                      : "-mt-14 p-4 text-5xl  rounded-full bg-transparent text-[#222]"
                    : ""
                }`}
              >
                {activeIcon}
              </p>

              {item.id !== 3 && (
                <h5
                  className={`text-xs ${
                    isActive ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </h5>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonMobileKotak;

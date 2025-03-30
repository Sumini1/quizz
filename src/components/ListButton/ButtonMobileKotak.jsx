import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaGraduationCap, FaCirclePlay } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FiUser } from "react-icons/fi";
import { BsFillAwardFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchThemesOrLevels,
  fetchThemesOrLevelsById,
} from "../../Features/ThemesOrLevels/Reducer/themesOrLevelsSlice";
import { useParams } from "react-router-dom";

const ButtonMobileKotak = () => {
  const location = useLocation();
  const { theme, getIconTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dispatch = useDispatch();
  const { data, detail, status } = useSelector((state) => state.themesOrLevels);

  // Get the ID from the URL if available
  const pathParts = location.pathname.split("/");
  const indexOfThemesOrLevels = pathParts.indexOf("themes-or-levels");
  const idFromPath =
    indexOfThemesOrLevels !== -1 && pathParts.length > indexOfThemesOrLevels + 1
      ? pathParts[indexOfThemesOrLevels + 1]
      : null;

  console.log("ID from path:", idFromPath);
  console.log("Redux detail:", detail);
  console.log("Redux data:", data);

  // First fetch the list if we don't have it
  useEffect(() => {
    if (status === "idle" && data.length === 0) {
      dispatch(fetchThemesOrLevels());
    }
  }, [dispatch, status, data]);

  // If we have an ID in the path, fetch that specific item
  useEffect(() => {
    if (idFromPath) {
      dispatch(fetchThemesOrLevelsById(idFromPath));
    }
  }, [dispatch, idFromPath]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determine the best ID to use for the Play button
  let activeThemeId = null;

  // First priority: ID from the current URL
  if (idFromPath) {
    activeThemeId = idFromPath;
  }
  // Second priority: ID from loaded detail
  else if (detail && detail.id) {
    activeThemeId = detail.id;
  }
  // Third priority: First item from the list
  else if (data && data.length > 0) {
    activeThemeId = data[0].id;
  }

  // Determine the play link based on the available ID
  const playLink = activeThemeId
    ? `/themes-or-levels/${activeThemeId}`
    : "/themes-or-levels";

  const kotak = [
    { id: 1, icon: <FaHome />, link: "/beranda", title: "Beranda" },
    {
      id: 2,
      icon: <FaGraduationCap />,
      link: "/pembelajaran",
      title: "Pembelajaran",
    },
    { id: 3, icon: <FaCirclePlay />, link: playLink, title: "Play" },
    {
      id: 4,
      icon: <BsFillAwardFill />,
      link: "/papan-peringkat",
      title: "Peringkat",
    },
    { id: 5, icon: <GiProgression />, link: "/progress", title: "Progress" },
    { id: 6, icon: <FiUser />, link: "/settings", title: "Profil" },
  ];

  return (
    <div
      className={`p-4 rounded-lg flex justify-center items-center mx-auto sticky bottom-0 w-full max-w-lg transition-transform duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#EEE]"
      } ${isVisible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex justify-between h-[20px] gap-2 items-center w-full relative">
        {kotak.map((item) => {
          const isItemActive =
            location.pathname === item.link ||
            (location.pathname.startsWith("/progress") &&
              item.link === "/progress") ||
            (location.pathname === "/jelajahi-aplikasi" &&
              item.link === "/beranda") ||
            (location.pathname.includes("/themes-or-levels/") &&
              item.link.includes("/themes-or-levels"));

          const activeIcon = isItemActive
            ? React.cloneElement(item.icon, { className: getIconTheme() })
            : item.icon;

          return (
            <Link
              to={item.link}
              key={item.id}
              className="flex flex-col justify-center items-center text-center"
              style={{ flex: "1 1 20%" }}
            >
              <p className="text-2xl font-extrabold">{activeIcon}</p>
              {/* <h5
                className={`text-xs ${
                  isItemActive ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.title}
              </h5> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonMobileKotak;

import React, { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { FaAffiliatetheme } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";


const ThemeDropdown = () => {
  const { theme, setTheme } = useTheme();
  const DEFAULT_THEMES = ["light", "dark", "cupcake", "bumblebee"];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleThemeChange = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    window.localStorage.setItem("sb-react-daisyui-preview-theme", t);
    setTheme(t);
    setIsDropdownVisible(false);
  };

  const themeButtonClass = (currentTheme) => {
    const baseClass = "block w-full text-left px-4 py-2 text-sm rounded-md";
    const isSelected = currentTheme === theme;

    const themeStyles = {
      light: "bg-blue-700 text-white",
      dark: "bg-gray-800 text-white",
      cupcake: "bg-pink-500 text-white",
      bumblebee: "bg-yellow-500 text-white",
    };

    return isSelected
      ? `${baseClass} ${themeStyles[currentTheme]} font-semibold`
      : `${baseClass} hover:bg-gray-500 ${themeStyles[currentTheme]}`;
  };

  return (
    <div className="relative -mt-1">
      <button
        className={`px-1 py-2 rounded-md ${
          theme === "dark"
            ? "text-white"
            : theme === "cupcake"
            ? "text-pink-500"
            : theme === "bumblebee"
            ? "text-yellow-500"
            : "text-blue-700"
        }`}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <FaAffiliatetheme className="text-xl"/>
      </button>
      <button>
        <HiDotsVertical  className="text-xl"/>
      </button>

      {isDropdownVisible && (
        <div className="absolute right-0 mt-2 w-40  shadow-lg rounded-md z-10">
          {DEFAULT_THEMES.map((t) => (
            <button
              key={t}
              className={themeButtonClass(t)}
              onClick={() => handleThemeChange(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};



export default ThemeDropdown;

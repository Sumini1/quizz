import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchThemesOrLevels } from "../Reducer/themesOrLevelsSlice";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";

const ModalLevel1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { getBorder, getButtonClass, getThemeModalCategory } = useTheme();
  const [activeTab, setActiveTab] = useState("materi");
  const tabs = [
    {
      id: "materi",
      icon: <MdOutlineFormatListBulleted className="w-[20px] h-[20px]" />,
    },
    {
      id: "informasi",
      icon: <HiInformationCircle className="w-[20px] h-[20px]" />,
    },
  ];

  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.themesOrLevels);
  console.log("data", data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchThemesOrLevels());
    }
  }, [status, dispatch]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-5"
      onClick={handleOverlayClick}
    >
      <div
        className={`p-5 rounded-lg shadow-lg w-full relative max-w-md ${getThemeModalCategory()}`}
      >
        <div
          className={`flex gap-3 text-sm font-normal justify-between ${getBorder()}`}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 text-sm font-medium p-2 rounded-full transition-all duration-300 w-1/2 cursor-pointer
                ${
                  activeTab === tab.id
                    ? `${getButtonClass()} border-[#DCE6F8] border-[4px] justify-center`
                    : "bg-transparent justify-center border-gray-300"
                }
              `}
            >
              {tab.icon}
              <span>
                {tab.id
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </div>
          ))}
        </div>
        {/* Bagian Materi */}
        <div className="mt-5 h-[300px] overflow-y-auto">
          {activeTab === "materi" && (
            <div>
              {data.map((item) => (
                <div key={item.id}>
                  <p>{item.description_long}</p>
                </div>
              ))}
            </div>
          )}

          {/* agian Informasi */}
          {activeTab === "informasi" && (
            <div>
              <h1>Informasi ditunggu</h1>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className={`mt-20 w-full text-[15px] font-medium py-2 px-4 border-none rounded-xl focus:outline-none focus:shadow-outline ${getButtonClass()}`}
        >
          Selesai Membaca
        </button>
      </div>
    </div>
  );
};

export default ModalLevel1;

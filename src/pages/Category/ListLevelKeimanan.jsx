import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
import ModalKeimananLevel1 from "../../components/ModalListKeimanan/ModalKeimananLevel1";
import ModalKeimananLevel2 from "../../components/ModalListKeimanan/ModalKeimananLevel2";
import ModalKeimananLevel3 from "../../components/ModalListKeimanan/ModalKeimananLevel3";
import ModalKeimananLevel4 from "../../components/ModalListKeimanan/ModalKeimananLevel4";


const ListLevelKeimanan = () => {
  const location = useLocation();
  const { getIconTheme, getBorderColor, getIconColorAlert } = useTheme();
  const categoryId = location.state?.categoryId || null;
  const selectedCategory = location.state?.selectedCategory || null;
  const [activeModal, setActiveModal] = useState(null);

  const handleIconClick = (categoryId) => {
    console.log("Icon clicked for category:", categoryId);
    setActiveModal(categoryId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const levels = [
    {
      id: 1,
      level: "Level 1",
      title: "Pembahasan dengan bahasa Arab penuh",
      progress: 3,
      total: 10,
      route: "/appearance-kotak",
    },
    {
      id: 2,
      level: "Level 2",
      title: "Pembahasan dengan bahasa Arab penuh",
      progress: 10,
      total: 10,
      route: "/level-2-quiz",
    },
    {
      id: 3,
      level: "Level 3",
      title:
        "Pembahasan rukun iman dengan penerapan dalam kehidupan sehari-hari.",
      progress: 7,
      total: 10,
      route: "/level-3-quiz",
    },
    {
      id: 4,
      level: "Level 4",
      title: "Pembahasan dengan bahasa Arab penuh",
      progress: 0,
      total: 10,
      route: "/level-4-quiz",
    },
  ];

  return (
    <div className="flex flex-col p-3 h-screen md:justify-start md:items-start md:ml-10 md:py-10 gap-5">
      <div className="flex gap-2 ">
        <FaArrowLeft className="text-xl cursor-pointer" />
      </div>
      <h1 className="text-lg font-[600] -mt-2">
        Tingkat Pelajaran Keimanan {categoryId} {selectedCategory}
      </h1>
      <div className="p-2 rounded-xl -mt-3 flex flex-col gap-5">
        {levels.map((item) => (
          <div
            key={item.id}
            className={`p-4 flex flex-col gap-3 bg-[#FFF] rounded-xl shadow-md ${getBorderColor()}`}
          >
            <div className="flex justify-between items-center">
              <Link
                to={{ pathname: item.route, state: { levelId: item.id } }}
                className="flex-1"
              >
                <h2 className="text-lg font-medium">{item.level}</h2>
              </Link>
              <MdOutlineError
                onClick={(e) => {
                  e.stopPropagation();
                  handleIconClick(item.id);
                }}
                className={`${getIconColorAlert()} cursor-pointer`}
              />
            </div>

            <Link to={{ pathname: item.route, state: { levelId: item.id } }}>
              <p className="text-base mb-4">{item.title}</p>
              {item.progress > 0 && (
                <div className="w-full mb-3 bg-gray-300 h-5 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full flex items-center justify-center text-white text-xs font-[400] ${
                      item.progress === item.total
                        ? "bg-blue-500 font-thin  items-center text-center"
                        : (item.progress / item.total) * 100 <= 35
                        ? "bg-yellow-500"
                        : (item.progress / item.total) * 100 <= 70
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                    style={{ width: `${(item.progress / item.total) * 100}%` }}
                  >
                    {item.progress === item.total
                      ? "Pelajaran Ktuntas"
                      : `${item.progress}/${item.total}`}
                  </div>
                </div>
              )}
              {item.progress === 0 ? (
                <div className="flex gap-2">
                  <h2 className="text-base">Mulai Belajar</h2>
                </div>
              ) : item.progress < item.total ? (
                <div className="flex gap-2">
                  <h2 className="text-base">Lanjut Belajar</h2>
                </div>
              ) : null}
              {item.progress === item.total ? (
                <div className="flex gap-2">
                  <h2 className="text-base">Review</h2>
                </div>
              ) : null}
            </Link>
          </div>
        ))}
            
            </div>
      {activeModal === 1 && (
        <ModalKeimananLevel1 isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 2 && (
        <ModalKeimananLevel2 isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 3 && (
        <ModalKeimananLevel3 isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 4 && (
        <ModalKeimananLevel4 isOpen={true} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ListLevelKeimanan;

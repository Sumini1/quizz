import React, { useState } from "react";
import { MdOutlineError } from "react-icons/md";
import ModalDasar from "./ModalDasar";
import ModalUmum from "./ModalUmum";
import ModalLanjutan from "./ModalLanjutan";
import PenuntutIlmu from "./PenuntutIlmu";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const PilihCategory = () => {
  const {
    getLanjutkanClass,
    getButtonClassSelected,
    getIconColorAlert,
    theme,
    getBorder,
  } = useTheme();
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Handlers
  const handleIconClick = (categoryId) => {
    console.log("Icon clicked for category:", categoryId);
    setActiveModal(categoryId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getBorderCategory = () => {
    return theme === "dark"
      ? "border-white"
      : theme === "cupcake"
      ? "border-[#D9005C]"
      : theme === "bumblebee"
      ? "border-yellow-300"
      : theme === "lemonade"
      ? "border-[#A7C050]"
      : "border-[#DCE6F8] border-[2px]";
  };

 

  const getBorder2 = () => {
    return theme === "dark"
      ? "border-white"
      : theme === "cupcake"
      ? "border-[#D9005C]"
      : theme === "bumblebee"
      ? "border-yellow-300"
      : theme === "lemonade"
      ? "border-[#A7C050]"
      : "border-white border-[4px]";
  };

  const categories = [
    {
      id: 1,
      name: "Dasar Islam",
      description: "Mengenal islam lebih dekat",
      route: "/list-category-pemula",
    },
    {
      id: 2,
      name: "Umum",
      description: "Pembahasan ringan dan sederhana ",
      route: "/list-category-umum",
    },
    {
      id: 3,
      name: "Lanjutan",
      description: "Pembahasan lanjutan dan mendalam",
      route: "/list-category-sejarah",
    },
    {
      id: 4,
      name: "Penuntut Ilmu",
      description: "Pembahasan dengan bahasa arab penuh",
      route: "/list-category-sejarah",
    },
  ];
  const findRouteById = () => {
    const category = categories.find((item) => item.id === selectedCategory);
    return category ? category.route : null;
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold flex flex-wrap mb-8">
          Tingkat Pembelajaran
        </h1>
      </div>
      {/* Grid Kategori */}
      <div className="grid grid-cols-2 gap-5 -mt-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative   rounded-xl h-full w-full transition-all duration-300 overflow-hidden ${getBorderCategory()} 
      ${
        selectedCategory === category.id
          ? `${getButtonClassSelected()} ${getBorder2()}`
          : `bg-[#FFFFFF]`
      }`}
          >
            {/* Konten Kategori */}
            <img
              src="/buku.jpeg"
              alt={category.name}
              className=" rounded-b-none w-full h-[110px] object-cover z-10"
            />
            <div
              className={`flex -mt-2 flex-col  z-50 p-3`}
              onClick={() => handleIconClick(category.id)}
            >
              <MdOutlineError
                className={`ml-auto   cursor-pointer mt-1 ${getIconColorAlert()} ${
                  selectedCategory === category.id ? "text-[#FFF]" : ""
                }`}
              />
              <h1 className={`text-normal mb-1 font-[500] -mt-5 `}>
                {category.name}
              </h1>
              <h1 className="text-sm font-light mb-3">{category.description}</h1>
            </div>

            {/* Button Pilih */}
            <div className="flex justify-between -mt-4  w-full p-3">
              <button
                onClick={() => handleSelectCategory(category.id)}
                className={`w-full text-sm p-1 rounded-xl relative z-10 ${
                  selectedCategory === category.id
                    ? `bg-white text-[#333] rounded-md`
                    : "bg-[#DCE6F8] text-[#333] rounded-md"
                }`}
              >
                {selectedCategory === category.id ? "Dipilih" : "Pilih"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {activeModal === 1 && (
        <ModalDasar isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 2 && (
        <ModalUmum isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 3 && (
        <ModalLanjutan isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 4 && (
        <PenuntutIlmu isOpen={true} onClose={handleCloseModal} />
      )}

      {/* Section Lanjutkan */}
      <div className="mt-7">
        <Link to={"/accordion-tingkat-belajar"}>
          <h3 className="text-sm text-center">Ada yang ingin ditanyakan ?</h3>
        </Link>
        <Link
          to={{
            pathname: selectedCategory ? findRouteById() : "/pilih-category",
            state: { selectedCategory },
          }}
        >
          <button
            className={`flex p-2 rounded-xl w-full items-center justify-center mt-3 transition-all duration-300  
        ${selectedCategory ? getLanjutkanClass() : "bg-[#DCE6F8] text-[#333]"}
      `}
            disabled={!selectedCategory}
          >
            Lanjutkan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PilihCategory;

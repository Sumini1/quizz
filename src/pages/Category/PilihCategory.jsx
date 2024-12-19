
import React, { useState } from "react";
import { BiSolidCommentError } from "react-icons/bi";
import ModalDasar from "./ModalUmum";
import ModalUmum from "./ModalUmum";
import ModalLanjutan1 from "./ModalLanjutan1";
import ModalLanjutan2 from "./ModalLanjutan2";
import {useTheme} from "../../context/ThemeContext"

const PilihCategory = () => {
  const { theme } = useTheme();
 const [activeModal, setActiveModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const closeModal = () => {
    setActiveModal(null); // Tutup modal
  };

  // Fungsi menentukan shadow sesuai tema
  const getThemeShadow = (isSelected) => {
    if (isSelected) {
      return theme === "dark"
        ? "shadow-2xl shadow-gray-700"
        : theme === "cupcake"
        ? "shadow-2xl shadow-pink-500"
        : theme === "bumblebee"
        ? "shadow-2xl shadow-yellow-500"
        : "shadow-2xl shadow-blue-500";
    }
    return "shadow-lg shadow-gray-200"; // Default shadow
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Button Pilih berdasarkan tema dan status
  const getButtonClass = (isSelected) => {
    if (isSelected) return "bg-gray-200 text-gray-200"; // Ketika dipilih
    return theme === "dark"
      ? "bg-gray-700 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-[#F5DEB3] text-white shadow-lg "
      : "bg-blue-500 text-white";
  };

  // Button Lanjutkan
  const getLanjutkanClass = () => {
    return selectedCategory
      ? theme === "dark"
        ? "bg-gray-700 text-white shadow-lg"
        : theme === "cupcake"
        ? "bg-pink-500 text-white shadow-lg"
        : theme === "bumblebee"
        ? "bg-[#F5DEB3] text-gray-500 shadow-lg"
        : "bg-blue-500 text-white shadow-lg"
      : "bg-gray-200 text-gray-500 shadow-lg";
  };

  const categories = [
    { id: 1, name: "Dasar Islam", description: "Mengenal islam lebih dekat" },
    { id: 2, name: "Umum", description: "Pemahaman tentang fiqih" },
    { id: 3, name: "Sejarah Islam", description: "Mempelajari sejarah islam" },
    {
      id: 4,
      name: "Al-Qur'an",
      description: "Mendalami Al-Qur'an sesuai sunnah",
    },
  ];

  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold mt-5 mb-10">
          Pilih tingkatan yang sesuai untukmu
        </h1>
      </div>
      {/* Grid Kategori */}
      <div className="grid grid-cols-2 gap-4 -mt-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`p-3 rounded-lg duration-300 
              ${
                selectedCategory === category.id
                  ? `${getButtonClass()} text-white ${getThemeShadow(
                      selectedCategory === category.id
                    )}`
                  : `bg-gray-200 text-gray-500 ${getThemeShadow(
                      selectedCategory === category.id
                    )}`
              }
            `}
          >
            <img
              src="/buku.jpeg"
              alt={category.name}
              className="mb-3 rounded-lg w-full h-[80px]"
            />
            <div className={`flex flex-col `}>
              <BiSolidCommentError
                onClick={() => setActiveModal(category.id)}
                className="ml-auto cursor-pointer"
              />
              <h1 className={`text-md font-semibold `}>{category.name}</h1>
              <p className="text-sm mt-1">{category.description}</p>
            </div>
            {/* Button Pilih */}
            <button
              onClick={() => handleSelectCategory(category.id)}
              className={`mt-2 w-full rounded-lg 
                ${
                  selectedCategory === category.id
                    ? "bg-gray-200 text-gray-600"
                    : "bg-gray-300"
                }
              `}
            >
              {selectedCategory === category.id ? "Dipilih" : "Pilih"}
            </button>
          </div>
        ))}
      </div>

      {/* Section Lanjutkan */}
      <div className="mt-7">
        <p className="text-sm text-center">Ada yang ingin ditanyakan?</p>
        <button
          className={`flex p-1 rounded-lg w-full items-center justify-center mt-2 ${getLanjutkanClass()} `}
          disabled={!selectedCategory}
        >
          Lanjutkan
        </button>
      </div>

      {/* Modal */}
      {activeModal === 1 && (
        <ModalDasar
          title="Dasar Islam"
          description="Ini adalah modal untuk kategori Dasar Islam"
          isOpen={true}
          onClose={closeModal}
        />
      )}

      {activeModal === 2 && (
        <ModalUmum
          title="Umum"
          description="Ini adalah modal untuk kategori Umum"
          isOpen={true}
          onClose={closeModal}
        />
      )}
      {
        activeModal === 3 && (
          <ModalLanjutan1
            title="Sejarah Islam"
            description="Ini adalah modal untuk kategori Sejarah Islam"
            isOpen={true}
            onClose={closeModal}
          />
        )
      }
      {
        activeModal === 4 && (
          <ModalLanjutan2
            title="Al-Qur'an"
            description="Ini adalah modal untuk kategori Al-Qur'an"
            isOpen={true}
            onClose={closeModal}
          />
        )
      }
    </div>
  );
};

export default PilihCategory;






import React, { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { Link } from "react-router-dom";
import { BiSolidMessageSquareError } from "react-icons/bi";

const ListCategoryPemula = () => {
  const { theme } = useTheme();
  const [selectCategory, setSelectCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectCategory(categoryId);
  };

  const getButtonClass = (isSelected) => {
    if (isSelected) {
      return theme === "dark"
        ? "bg-gray-800 text-white border-gray-700"
        : theme === "cupcake"
        ? "bg-pink-500 text-white border-pink-500"
        : theme === "bumblebee"
        ? "bg-yellow-500 text-white border-yellow-500"
        : "bg-blue-700 text-white border-blue-700";
    } else {
      return "bg-white text-gray-600 border-gray-300";
    }
  };

  const getBorderClass = () => {
    return theme === "dark"
      ? "border-gray-700"
      : theme === "cupcake"
      ? "border-pink-500"
      : theme === "bumblebee"
      ? "border-yellow-500"
      : "border-blue-700";
  };

  const categoryPemula = [
    { id: 1, category: "Keimanan" , route :"/list-level-keimanan"},
    { id: 2, category: "Ibadah" , route :"/page-dua"},
    { id: 3, category: "Akhlak" , route :"/page-tiga"},
    { id: 4, category: "Muamalah" , route :"/page-empat"},
    { id: 5, category: "Sejarah" , route :"/page-lima"},
    
  ];
  const selectRoute = () => {
    const selectedCategory = categoryPemula.find(
      (category) => category.id === selectCategory
    );
    return selectedCategory ? selectedCategory.route : null;
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-16 mx-5">
        <h1 className="text-xl font-semibold mb-5">
          Apa yang mau dipelajari ?
        </h1>
        {/* <p className="text-lg">Pilih tingkatan level</p> */}
      </div>
      <form action="" className="mx-5 mt-5">
        <div className="flex flex-col">
          {categoryPemula.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleSelectCategory(category.id)}
              className={`border flex w-[350px] text-left rounded-md p-2 mb-4 ${getBorderClass()} ${getButtonClass(
                selectCategory === category.id
              )}`}
            >
              {category.category}  
              <BiSolidMessageSquareError className="ml-auto " />
            </button>
          ))}
        </div>
        <div className="flex justify-center w-full mt-[170px]">
          <Link to={selectCategory ? selectRoute() : "#"}>
            <button
              type="button"
              className={`p-2 w-[350px] rounded-md ${getBorderClass()} ${
                selectCategory 
                  ? theme === "dark"
                    ? "bg-gray-800 text-white"
                    : theme === "cupcake"
                    ? "bg-pink-500 text-white"
                    : theme === "bumblebee"
                    ? "bg-yellow-500 text-white"
                    : "bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!selectCategory}
            >
              Mulai
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ListCategoryPemula;

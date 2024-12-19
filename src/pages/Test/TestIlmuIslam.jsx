import React, { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { Link } from "react-router-dom";

const TestIlmuIslam = () => {
  const { theme } = useTheme();
  const [selectTingkatan, setSelectTingkatan] = useState(null);

  const handleSelectTingkatan = (tingkatanId) => {
    setSelectTingkatan(tingkatanId);
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

  const tingkatan = [
    { id: 1, tingkatan: "Pemula", route: "/list-category-pemula" },
    { id: 2, tingkatan: "Dasar", route: "/list-category-dasar" },
    { id: 3, tingkatan: "Menengah", route: "/list-category-menengah" },
    {
      id: 4,
      tingkatan: "Menengah Lanjutan",
      route: "/list-category-menengah-lanjutan",
    },
    { id: 5, tingkatan: "Lanjutan", route: "/list-category-lanjutan" },
    {
      id: 6,
      tingkatan: "Lanjutan Tinggi",
      route: "/list-category-lanjutan-tinggi",
    },
    { id: 7, tingkatan: "Ahli", route: "/list-category-ahli" },
    {
      id: 8,
      tingkatan: "Makhluk Allah",
      route: "/list-category-makhluk-allah",
    },
  ];

  // Mendapatkan rute berdasarkan tingkatan yang dipilih
  const selectedRoute =
    tingkatan.find((tingkat) => tingkat.id === selectTingkatan)?.route || "#";

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-16 mx-5">
        <h1 className="text-xl font-semibold">Tes Pengetahuan Islam</h1>
        <p className="text-lg">Pilih tingkatan level</p>
      </div>
      <form action="" className="mx-5 mt-5">
        <div>
          {tingkatan.map((tingkat) => (
            <button
              key={tingkat.id}
              type="button"
              onClick={() => handleSelectTingkatan(tingkat.id)}
              className={`border w-[350px] text-left rounded-md p-2 mb-4 ${getBorderClass()} ${getButtonClass(
                selectTingkatan === tingkat.id
              )}`}
            >
              {tingkat.tingkatan}
            </button>
          ))}
        </div>
        <div className="flex justify-center w-full mt-2">
          <Link to={selectedRoute}>
            <button
              type="button"
              className={`p-2 w-[350px] rounded-md ${getBorderClass()} ${
                selectTingkatan
                  ? theme === "dark"
                    ? "bg-gray-800 text-white"
                    : theme === "cupcake"
                    ? "bg-pink-500 text-white"
                    : theme === "bumblebee"
                    ? "bg-yellow-500 text-white"
                    : "bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!selectTingkatan}
            >
              Mulai
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TestIlmuIslam;

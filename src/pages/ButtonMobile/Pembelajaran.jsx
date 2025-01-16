import React, { useState } from "react";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { useTheme } from "../../context/ThemeContext";
import ButtonMobileKotak from "../../components/Appearance/ButtonMobileKotak";

const Pembelajaran = () => {
  const { getButtonClass } = useTheme();
  const [selectedId, setSelectedId] = useState(null); // State untuk item yang dipilih

  const dasar = [
    { id: 1, name: "Keimanan", icon: <BiSolidMessageSquareError /> },
    { id: 2, name: "Ibadah", icon: <BiSolidMessageSquareError /> },
    { id: 3, name: "Akhlak", icon: <BiSolidMessageSquareError /> },
    { id: 4, name: "Muamalah", icon: <BiSolidMessageSquareError /> },
    { id: 5, name: "Sejarah", icon: <BiSolidMessageSquareError /> },
  ];

  const umum = [
    { id: 6, name: "Ekonomi", icon: <BiSolidMessageSquareError /> },
    { id: 7, name: "Politik", icon: <BiSolidMessageSquareError /> },
    { id: 8, name: "Sosial", icon: <BiSolidMessageSquareError /> },
    { id: 9, name: "Budaya", icon: <BiSolidMessageSquareError /> },
    { id: 10, name: "Teknologi", icon: <BiSolidMessageSquareError /> },
  ];

  return (
    <>
      <div className="w-full p-5 flex flex-col">
        <h1 className="text-2xl font-semibold mt-5 mb-5">Pembelajaran</h1>

        {/* Dasar Islam Section */}
        <div className="relative">
          <div className="flex gap-2">
            <h1 className="text-xl font-semibold mb-5">Dasar Islam</h1>
            <BiSolidMessageSquareError />
          </div>

          {dasar.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)} // Mengatur item yang dipilih
              className={`flex justify-between items-center gap-3 py-2 px-5 mb-4 cursor-pointer rounded-lg ${
                selectedId === item.id
                  ? `${getButtonClass()}` 
                  : "bg-gray-300 text-black"    
              }`}
            >
              <p className="font-semibold p-3">{item.name}</p>
              <div>{item.icon}</div>
            </div>
          ))}
        </div>

        {/* Umum Section */}
        <div className="relative mt-8">
          <div className="flex gap-2">
            <h1 className="text-xl font-semibold mb-5">Umum</h1>
            <BiSolidMessageSquareError />
          </div>

          {umum.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)} // Mengatur item yang dipilih
              className={`flex justify-between items-center gap-3 py-2 px-5 mb-4 cursor-pointer rounded-lg ${
                selectedId === item.id
                  ? `${getButtonClass()}` 
                  : "bg-gray-300 text-black"    
              }`}
            >
              <p className="font-semibold p-3 text-gray-300">{item.name}</p>
              <div>{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full sticky bottom-0 z-50">
        <ButtonMobileKotak />
      </div>
    </>
  );
};

export default Pembelajaran;

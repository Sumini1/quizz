import React, { useState } from "react";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { useTheme } from "../../context/ThemeContext";
import ButtonMobileKotak from "../../components/Appearance/ButtonMobileKotak";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineError } from "react-icons/md";


const Pembelajaran = () => {
  const { getButtonClass, getBorderColor, getIconColorAlert } = useTheme();
  const [selectedId, setSelectedId] = useState(null); // State untuk item yang dipilih

  const dasar = [
    { id: 1, name: "Keimanan", icon:   <MdOutlineError /> },
    { id: 2, name: "Ibadah", icon:   <MdOutlineError /> },
    { id: 3, name: "Akhlak", icon:   <MdOutlineError /> },
    { id: 4, name: "Muamalah", icon:   <MdOutlineError /> },
    { id: 5, name: "Sejarah", icon:   <MdOutlineError /> },
  ];

  const umum = [
    { id: 6, name: "Ekonomi", icon:   <MdOutlineError /> },
    { id: 7, name: "Politik", icon:   <MdOutlineError /> },
    { id: 8, name: "Sosial", icon:   <MdOutlineError /> },
    { id: 9, name: "Budaya", icon:   <MdOutlineError /> },
    { id: 10, name: "Teknologi", icon:   <MdOutlineError /> },
  ];

  return (
    <>
      <div className="w-full p-5 flex flex-col">
        <div className="flex items-center gap-3">
          <Link to={"/settings"}>
            <FaArrowLeft className="text-xl cursor-pointer items-center " />
          </Link>
          <h1 className="text-lg font-[600] items-center ">Pembelajaran</h1>
        </div>
        {/* Dasar Islam Section */}
        <div className="relative">
          <div className="flex gap-2">
            <h2 className="text-md font-semibold mb-2 mt-5">Dasar Islam</h2>
            <MdOutlineError className={`mt-5 ${getIconColorAlert()}`} />
          </div>

          <div className="flex flex-col gap-3 mt-2">
            {dasar.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)} // Mengatur item yang dipilih
                className={`flex justify-between items-center p-3  cursor-pointer rounded-xl ${
                  selectedId === item.id
                    ? `${getButtonClass()} text-white border-none`
                    : `${getBorderColor()}`
                }`}
              >
                <h5
                  className={`font-base ${
                    selectedId === item.id ? "text-white" : "text-[#333]"
                  }`}
                >
                  {item.name}
                </h5>
                <div className={`flex-shrink-0 ${getIconColorAlert()}`}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Umum Section */}
        <div className="relative mt-8">
          <div className="flex gap-2">
            <h2 className="text-md font-semibold mb-1">Umum</h2>
            <MdOutlineError className={` ${getIconColorAlert()}`} />
          </div>

          <div className="flex flex-col gap-3 mt-2">
            {umum.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)} // Mengatur item yang dipilih
                className={`flex justify-between items-center p-3  cursor-pointer rounded-xl ${
                  selectedId === item.id
                    ? `${getButtonClass()} text-white border-none`
                    : `${getBorderColor()}`
                }`}
              >
                <h5
                  className={`font-base  ${
                    selectedId === item.id ? "text-white" : "text-[#333]"
                  }`}
                >
                  {item.name}
                </h5>
                <div className={`flex-shrink-0 ${getIconColorAlert()}`}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full sticky bottom-0 z-50">
        <ButtonMobileKotak />
      </div>
    </>
  );
};

export default Pembelajaran;

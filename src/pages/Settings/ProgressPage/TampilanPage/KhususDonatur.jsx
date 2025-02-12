import React, {useState} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";
import { IoSearch } from "react-icons/io5";




const KhususDonatur = () => {
  const { getBorderColor } = useTheme();
   const [isSearchActive, setIsSearchActive] = useState(false);
  const warnaUser = [
    {
      id: 1,
      name: "Warna",

      type: "Midnight Breeze-Softlight",
    },
    {
      id: 2,
      name: "Warna",

      type: "Skyward Blue",
    },
  ];
  const themesByIndex = ["dark", "cupcake"];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex  items-center mr-20">
        <Link to="/warna" className="flex flex-col gap-3 mt-5 mb-8 mx-5">
          <FaArrowLeft className="text-lg" />
          <h1 className="font-semibold text-lg whitespace-nowrap">
            Khusus Donatur & Kontributor
          </h1>
        </Link>
        <div className="">
          <IoSearch
            className="text-xl cursor-pointer -mt-[33px] -ml-2 flex items-center"
            onClick={() => setIsSearchActive((prev) => !prev)} // Toggle input search
          />
        </div>
      </div>

      {/* main content */}

      <div className="flex flex-col  gap-3  px-5 text-lg mb-5">
        {isSearchActive && (
          <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 -mt-3 mb-5 ">
            <input
              type="text"
              placeholder="Cari warna belajar..."
              className="bg-transparent w-full pl-10 rounded-xl outline-none m"
            />
            <IoSearch className="absolute left-3 text-xl text-gray-500" />
          </div>
        )}
        <h2 className="text-lg font-medium -mt-3">Level 1</h2>
        <p className="text-sm -mt-2">
          Hadiah yang diperuntukkan untuk donatur level 1 & kontributor
        </p>
        <div className="grid grid-cols-1 justify-center gap-y-0">
          <div className="grid grid-cols-1  gap-y-0">
            {warnaUser.map((item, index) => {
              const itemTheme = themesByIndex[index % themesByIndex.length];
              const isSpecialId = item.id === 5;
              const commonClasses = `flex flex-col w-full p-2 rounded-xl`;
              const heightClass = isSpecialId
                ? "h-[40px] justify-center"
                : "h-[70px]";
              const themeClasses =
                itemTheme === "dark"
                  ? `bg-[#123456] text-[#87CEEB] rounded-b-none border-[1px] border-y-[1px] ${getBorderColor()}`
                  : itemTheme === "cupcake"
                  ? `bg-[#DDDDDD] text-[#0961F5] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`
                  : `bg-[#D8F3DC] text-[#4B4B4B] rounded-t-none rounded-b-xl border-[1px] border-y-[1px] ${getBorderColor()}`;

              return (
                <div
                  key={item.id}
                  className={`${commonClasses} ${heightClass} ${themeClasses}`}
                >
                  <div className="flex items-center gap-x-2 ">
                    <h5
                      className={`border-none p-1 w-[30px] mx-3 flex items-center justify-center text-lg h-[30px] font-[500] rounded-full ${
                        isSpecialId
                          ? "bg-transparent text-[#222]"
                          : //   : itemTheme === "light" ||
                            //     itemTheme === "bumblebee"
                            //   ? "bg-blue-500 text-white"
                            "bg-white text-[#222]"
                      }`}
                    >
                      {!isSpecialId && item.id}
                    </h5>

                    <div className="flex flex-col  ">
                      <h5
                        className={`font-medium text-sm mt-1   ${
                          isSpecialId && "text-center flex "
                        }`}
                      >
                        {item.name}
                      </h5>
                      <h5 className="mt-2 text-xs">{item.type}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhususDonatur;

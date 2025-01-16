import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {Link, useLocation} from 'react-router-dom';


const ChooseThemeQuiz = () => {
  const location = useLocation();
  const levelId = location.state?.levelId || null; 
  const categoryId = location.state?.categoryId || null;
    const selectedCategory = location.state?.selectedCategory || null;
  const { theme, getButtonClassSelected , getLanjutkanClass, getThemeShadow, } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(null);


  const handleSelectTheme = (themeId) => {
    setSelectedTheme(themeId);
  };
  const choseTheme = [
    {
      id: 1,
      title: "Minimalis",
      description: "Tampilan sederhana dengan kotak",
      image: "/quiz2.png",
      route: "/appearance-minimalis"
    },
    {
      id: 2,
      title: "Kotak",
      description: "Tampilan dengan langkah perjalanan",
      image: "/quiz33.png",
      route : "/appearance-kotak"
    },
    {
      id: 3,
      title: "Peta Perjalanan",
      description: "Tampilan sederhana dengan kotak",
      image: "/quiz33.png",
      route : "/appearance-peta-perjalanan"
    },
  ];

  const selectPoute = () => {
    const selectAppearance = choseTheme.find((item) => 
      item.id === selectedTheme
    );
    return selectAppearance ? selectAppearance.route : null;
  }
  return (
    <div className="p-5 flex flex-col   mt-5">
      <h1 className="text-xl font-semibold">
        Tampilan Quizz : {levelId} {categoryId} {selectedCategory}
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-4 ">
        {choseTheme.map((item) => (
          <div
            key={item.id}
            className={`p-4  gap-3  h-full  rounded-xl w-full ${
              selectedTheme === item.id
                ? `${getButtonClassSelected()} text-white `
                : `bg-gray-200 text-gray-500 `
            }
            `}
          >
            <div className="flex flex-col gap-2  justify-center items-center">
              <img src={item.image} alt="" className="w-[100px] h-[100px]" />

              <div>
                <h1 className="text-md font-semibold -mt-3 justify-start">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
              <button
                onClick={() => handleSelectTheme(item.id)}
                className={`w-full  ${
                  selectedTheme === item.id
                    ? "bg-gray-200 text-gray-600 border border-x-4 border-y-2 border-gray-400 rounded-xl"
                    : "bg-gray-500 text-white border border-x-4 border-y-2 border-gray-600 rounded-xl"
                }`}
              >
                {selectedTheme === item.id ? "Dipilih" : "Pilih"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Section Lanjutkan */}
      <div className="mt-10">
        <p className="text-sm text-center ">Ada yang ingin ditanyakan?</p>
        <Link
          to={{
            pathname: selectPoute(),
            state: { selectedTheme },
          }}
        >
          <button
            className={`flex ${getThemeShadow()} p-1 text-gray-500  rounded-xl w-full items-center justify-center mt-2 ${getLanjutkanClass()} `}
            disabled={!selectedTheme}
          >
            Lanjutkan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChooseThemeQuiz;

import React, { useState } from "react";
import {  FaChevronDown, FaChevronUp, FaArrowLeft } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const AccordionDasarIslam = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { getThemeModalCategory, getBorderColor } = useTheme();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsData = [
    {
      id: 1,
      question: "Bagi pemula tingkat mana yang sebaiknya dipilih?",
      answer:
        "Mengimani rukun iman harus sesuai dalil dari Al-Qur’an dan Sunnah...",
    },
    {
      id: 2,
      question: "Cara menyikapi rukun iman bagi muslim?",
      answer:
        "Mengimani rukun iman harus sesuai dalil dari Al-Qur’an dan Sunnah sebab agama Islam dibangun dari tawaqquf, yaitu seluruh ibadah membutuhkan dalil. Rukun iman merupakan salah satu ibadah yang paling agung karena berisi pondasi keimanan.",
    },
    {
      id: 3,
      question:
        "Apa pentingnya memahami rukun iman dalam kehidupan sehari-hari?",
      answer: "Rukun iman merupakan salah satu ibadah yang paling agung...",
    },
  ];

  return (
    <div className="space-y-4  p-4">
      <div className="flex  items-center gap-2 font-[500] mb-5">
        <Link to={"/list-category-pemula"}>
          <FaArrowLeft className="text-xl " />
        </Link>
      </div>
      <h1 className="text-lg font-[500]">Tanya Jawab Dasar Islam</h1>
      {questionsData.map((item, index) => (
        <div key={item.id} className="border   rounded-xl">
          <div
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center p-4 cursor-pointer border-[1px] bg-white  ${getBorderColor()} ${
              activeIndex === index
                ? "rounded-t-xl rounded-b-none"
                : "rounded-xl"
            }`}
          >
            <div className="flex items-center gap-2 w-full">
              <span className="text-md font-medium w-6 -mt-5">{item.id}.</span>
              <p className="text-md font-[400] flex-1 m">{item.question}</p>
            </div>
            {activeIndex === index ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {activeIndex === index && (
            <div
              className={`p-4  rounded-b-xl border-[0.5px] font-[300] ${getBorderColor()} ${getThemeModalCategory()}`}
            >
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionDasarIslam;

import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import {
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"; // Ikon tambahan buka/
import {Link} from 'react-router-dom';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsData = [
    {
      question: "Apa rukun iman ketiga?",
      isCorrect: true,
      options: [
        { text: "Mengimani dengan benar sesuai dalil", isCorrect: true },
        { text: "Mengimani yang diinginkan saja", isCorrect: false },
        { text: "Tidak menganggap penting", isCorrect: false },
        { text: "Mengimani sesuai keadaan", isCorrect: false },
      ],
      explanation:
        "Mengimani rukun iman harus sesuai dalil dari Al-Qur’an dan Sunnah...",
    },
    {
      question: "Cara menyikapi rukun iman bagi muslim?",
      isCorrect: false,
      options: [
        { text: "Mengimani dengan benar sesuai dalil", isCorrect: true },
        { text: "Mengimani yang diinginkan saja", isCorrect: false },
        { text: "Tidak menganggap penting", isCorrect: false },
        { text: "Mengimani sesuai keadaan", isCorrect: false },
      ],
      explanation:
        "Mengimani rukun iman harus sesuai dalil dari Al-Qur’an dan Sunnah sebab agama islam dibangun dari tawaqquf yaitu seluruh ibadah membutuhkan dalil. Rukun iman merupakan salah satu ibadah yang paling agung karena berisi pondasi keimanan.",
    },
    {
      question: "Cara menyikapi rukun iman bagi muslim?",
      isCorrect: true,
      options: [
        { text: "Mengimani dengan benar sesuai dalil", isCorrect: true },
        { text: "Mengimani yang diinginkan saja", isCorrect: false },
        { text: "Tidak menganggap penting", isCorrect: false },
        { text: "Mengimani sesuai keadaan", isCorrect: false },
      ],
      explanation:
        "Rukun iman merupakan salah satu ibadah yang paling agung...",
    },
  ];

  return (
    <div className="space-y-4 mt-3 p-3">
      <div className="flex items-center gap-3 font-[500]  ">
        <Link to={"/intro-test-dua"}>
          <FaArrowLeft className="text-2xl font-[500]" />
        </Link>
        <h1 className="text-xl font-[500]">Ulasan Soal</h1>
      </div>
      {questionsData.map((question, index) => (
        <div
          key={index}
          className={`rounded-xl ${
            activeIndex === index ? "rounded-b-none" : ""
          }`}
        >
          <div
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center p-4 cursor-pointer ${
              activeIndex === index ? "rounded-t-xl" : "rounded-xl"
            } ${
              question.isCorrect
                ? "bg-[#FFF] border-[#28A745] border-[1px] text-[#333]"
                : "bg-[#FFD9D9] border-[#A74828] border-[1px]"
            }`}
          >
            <span className="font-[500]">
              {index + 1}. {question.question}
            </span>
            <div className="flex items-center space-x-2">
              {question.isCorrect ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div
              className={`p-4 ${
                question.isCorrect
                  ? "bg-[#DCFFD9] border border-[#28A745] border-t-0 rounded-b-xl"
                  : "bg-[#FFD9D9] border border-[#A74828] border-t-0 rounded-b-xl"
              }`}
            >
              <div className="space-y-2">
                {question.options.map((option, i) => (
                  <button
                    key={i}
                    className={`w-full p-2 border rounded-xl ${
                      question.isCorrect
                        ? option.isCorrect
                          ? "bg-[#28A745] border-green-500 text-white" // Warna hijau untuk jawaban yang benar
                          : "bg-white border-gray-300"
                        : option.isCorrect
                        ? "bg-[#A74828] border-[#333]  text-white" // Masih hijau untuk jawaban benar meskipun pertanyaan salah
                        : "bg-[#FFF] border-[#333] text-[#333]" // Merah untuk opsi jawaban salah saat pertanyaan salah
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-md text-gray-700">
                <strong>Penjelasan:</strong>
                <p>{question.explanation}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

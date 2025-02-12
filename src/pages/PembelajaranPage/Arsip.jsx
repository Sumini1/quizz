import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  FaArrowLeft,
  FaGifts,
  FaTimes,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
} from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";


const Arsip = () => {
  const {
    getBorderColor,
    getButtonClass,
    getBorder,
    getBorderClass,
    getIconColorAlert,
  } = useTheme();
  const [activeTab, setActiveTab] = useState("terbaru");
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAnswerClick = (questionIndex, optionIndex, isCorrect) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: { optionIndex, isCorrect },
    });
  };

  const questionsData = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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

  const tabs = [
    {
      id: "terbaru",
      icon: <BiSolidTimeFive className="w-[20px] h-[20px] " />,
    },
    {
      id: "tanggal",
      icon: <BsFillCalendar2DateFill className="w-[20px] h-[20px] " />,
    },
  ];

//   Tab Tanggal
const tanggal = [
  {
    id: 1,
    name: "Januari",
    icon: <MdOutlineError />,
  },
  {
    id: 2,
    name: "Februari",
    icon: <MdOutlineError />,
  },
  {
    id: 3,
    name: "Maret",
    icon: <MdOutlineError />,
  },
  {
    id: 4,
    name: "April",
    icon: <MdOutlineError />,
  },
];

  return (
    <div className="flex flex-col min-h-screen p-5">
      <Link to="/pembelajaran">
        <div className="flex gap-2">
          <FaArrowLeft className="w-[20px] h-[20px]" />
          <h1 className="font-semibold">Arsip</h1>
        </div>
      </Link>

      {/* Tab */}
      <div
        className={`flex gap-3 mt-7 text-sm font-normal justify-between ${getBorder()}`}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
                flex items-center gap-2 text-sm font-medium p-2 rounded-full transition-all duration-300 w-1/2
                ${
                  activeTab === tab.id
                    ? `${getButtonClass()} border-[#DCE6F8] border-[4px] justify-center`
                    : "bg-transparent justify-center border-gray-300"
                } cursor-pointer
              `}
          >
            {tab.icon}
            <span>
              {tab.id
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </span>
          </div>
        ))}
      </div>

      {/* Bagian tab TERBARU */}
      {activeTab === "terbaru" && (
        <div className="flex flex-col gap-5 mt-7">
          {questionsData.map((question, index) => (
            <div
              key={index}
              className={`rounded-xl ${
                activeIndex === index ? "rounded-b-none" : ""
              }`}
            >
              <div
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center p-4 text-base cursor-pointer ${
                  activeIndex === index ? "rounded-t-xl" : "rounded-xl"
                } ${
                  question.isCorrect
                    ? `bg-[#FFF] border-[1px] text-[#333] text-base border-[#222]`
                    : `border-[1px] text-base border-[#222]`
                }`}
              >
                <div className="flex   space-x-2 font-[500]">
                  <img
                    src="/iconNomor.png"
                    alt="icon"
                    className={`w-5 h-5 items-center mt-1 ${
                      activeIndex === index && "h-5 w-5"
                    }`}
                  />
                  <span>
                    {question.id}. {question.question}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
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
                      ? `bg-[#DCFFD9] border-[1px] border-t-0 rounded-b-xl border-[#222]`
                      : `bg-[#EEEEEE] border-[1px] border-t-0 rounded-b-xl border-[#222]`
                  }`}
                >
                  <div className="space-y-4 ">
                    {question.options.map((option, i) => {
                      const userAnswer = selectedAnswers[index];
                      const isSelected = userAnswer?.optionIndex === i;
                      const isCorrectAnswer = option.isCorrect;
                      const isWrongAnswer = isSelected && !option.isCorrect;

                      return (
                        <button
                          key={i}
                          onClick={() =>
                            handleAnswerClick(index, i, option.isCorrect)
                          }
                          className={`w-full p-2 border-[1px] border-[#222] rounded-xl ${
                            isCorrectAnswer
                              ? "bg-[#28A745] border-green-500 text-white"
                              : isWrongAnswer
                              ? "bg-[#A74828] text-white border-none"
                              : "bg-white border-[#222]"
                          }`}
                        >
                          {option.text}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-md text-gray-700">
                    <strong>Penjelasan:</strong>
                    <p>{question.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col w-full gap-5 mt-28">
            <button
              className={`${getButtonClass()} border-none p-3 rounded-xl `}
            >
              Mulai Belajar
            </button>
            <button className={`${getBorderClass()} p-2 rounded-xl  `}>
              Kembali
            </button>
          </div>
        </div>
      )}

      {/* Tab TANGGAL */}
      {activeTab === "tanggal" && (
        <div className="flex flex-col gap-5 mt-10">
          {tanggal.map((item) => (
            <div
              key={item.id}
              className={`flex gap-3  justify-between  ${getBorderColor()}  p-4 rounded-xl`}
            >
              <h1>{item.name}</h1>
              <h5 className={`${getIconColorAlert()}`}>{item.icon}</h5>
            </div>
          ))}
          <div className="flex flex-col w-full gap-5 mt-12">
            <button
              className={`${getButtonClass()} p-3 rounded-xl border-none`}
            >
              Mulai Belajar
            </button>
            <button className={`${getBorderClass()} p-2 rounded-xl  `}>
              Kembali
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arsip;

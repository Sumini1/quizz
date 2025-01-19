import React, { useState } from "react";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useTheme } from "../../../context/ThemeContext";

const KumpulanUjianDasarIslam = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { getThemeModalCategory, getBorderColor, getBorder, getTextTitle1 } =
    useTheme();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsData = [
    {
      id: 1,
      question: "Pengantar Rukun Iman",
      answer: {
        score: 90,
        date: "9-12-2025",
        total: 90,
      },
    },
    {
      id: 2,
      question: "Rukun Iman ke-1",
      answer: {
        score: 80,
        date: "9-12-2025",
        total: 80,
      },
    },
    {
      id: 3,
      question: "Rukun Iman ke-2",
      answer: {
        score: 69,
        date: "9-12-2025",
        total: 70,
      },
    },
  ];

  // Menghitung total nilai dan rata-rata
  const totalScore = questionsData.reduce(
    (sum, item) => sum + (item.answer.total || 0),
    0
  );
  const averageScore = totalScore / questionsData.length;

  return (
    <div className="space-y-4 p-4 ">
      <div className="flex items-center gap-1 font-[500] mb-2">
        <FaArrowLeft className="text-xl" />
      </div>
      <h1 className="text-lg font-[500] -my-6">
        Kumpulan Ujian Dasar Islam Keimanan
      </h1>
      <div className="flex flex-col gap-1 ">
        <h1 className={`${getTextTitle1()} text-[16px] font-[500]`}>Level 1</h1>
        <h5 className="text-[16px] font-[500]">Pengantar Rukun Iman</h5>
      </div>
      <div className="flex flex-col gap-7">
        {questionsData.map((item, index) => (
          <div key={item.id} className="border rounded-xl -mt-2">
            <div
              onClick={() => toggleAccordion(index)}
              className={`flex justify-between items-center p-1 px-2 cursor-pointer border-[1px] bg-white ${getBorderColor()} ${
                activeIndex === index ? "rounded-t-xl" : "rounded-xl"
              }`}
            >
              <div className="flex flex-col gap-1 w-full ">
                <div className="flex gap-2 ">
                  <span
                    className={`text-sm mt-[1px] font-medium w-6 p-2 h-6 bg-gray-200 flex justify-center items-center  rounded-full  ${activeIndex === index && "-mt-2"}`}
                  >
                    {item.id}
                  </span>
                  <p className="text-[16px] font-[500] flex-1">
                    {item.question}
                  </p>
                </div>
                <div
                  className={`flex gap-2 mx-9 text-sm   ${
                    activeIndex == index && "hidden"
                  }`}
                >
                  <p>
                    Nilai:
                    <span
                      className={`font-medium mx-1 ${
                        item.answer.score < 70
                          ? "text-yellow-500"
                          : item.answer.score >= 71 && item.answer.score <= 80
                          ? "text-green-500"
                          : "text-blue-500"
                      }`}
                    >
                      {item.answer.score}
                    </span>
                  </p>
                </div>
              </div>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-500 " />
              ) : (
                <FaChevronDown className="text-gray-500 -mt-5" />
              )}
            </div>
            <div>
              {activeIndex === index && (
                <div
                  className={`text-base font-[300] rounded-b-xl border-[1px] ${getBorderColor()} }`}
                >
                  <div className="flex flex-col gap-1 text-sm p-3 mx-7 -mt-1">
                    <p>
                      Nilai:
                      <span
                        className={`font-medium mx-1 ${
                          item.answer.score < 70
                            ? "text-yellow-500"
                            : item.answer.score >= 71 && item.answer.score <= 80
                            ? "text-green-500"
                            : "text-blue-500"
                        }`}
                      >
                        {item.answer.score}
                      </span>
                    </p>
                    <h5>
                      Tanggal Ujian:
                      <span className="text-sm font-[500]">
                        {item.answer.date}
                      </span>
                    </h5>
                  </div>
                  <div className="flex gap-2 px-3 pb-3 mb-[px]  mx-7 w-full">
                    <button className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">
                      Artikel Materi
                    </button>
                    <button className="bg-[#DCE6F8] text-[#0961F5] py-1 px-3 rounded-full text-sm">
                      Evaluasi
                    </button>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
                      Ujian Ulang
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <table className="w-full mt-10 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left text-[16px] font-[500]">
              Keterangan
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-[16px] font-[500]">
              Nilai
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Nilai Akhir</td>
            <td className="border border-gray-300 px-4 py-2 text-green-500 font-semibold">
              {totalScore}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Rata-rata Nilai
            </td>
            <td className="border border-gray-300 px-4 py-2 text-blue-500 font-semibold">
              {averageScore.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-2 flex justify-start">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
          Sistem Penilaian
        </button>
      </div>
    </div>
  );
};

export default KumpulanUjianDasarIslam;

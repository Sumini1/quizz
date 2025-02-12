import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const TranskipNilaiLanjutan = () => {
  const navigate = useNavigate();
  const { theme, getButtonClass, getBorderClass } = useTheme();
  const nilai = [
    { id: 1, name: "Implementasi Rukun Iman ke-3", nilai: 80 },
    { id: 2, name: "Implementasi Rukun Iman ke-4", nilai: 80 },
    { id: 3, name: "Implementasi Rukun Iman ke-5", nilai: 90 },
    { id: 4, name: "Implementasi Rukun Iman ke-6", nilai: 70 },
    {
      id: 5,
      name: "Rukun Iman sebagai dasar islam yang harus dijalankan ( bagian ke-1 )",
      nilai: 80,
    },
    {
      id: 6,
      name: "Rukun Iman sebagai dasar islam yang harus dijalankan ( bagian ke-2 )",
      nilai: 90,
    },
    {
      id: 7,
      name: "Rukun Iman sebagai dasar islam yang harus dijalankan ( bagian ke-3 )",
      nilai: 80,
    },
    {
      id: 8,
      name: "Rukun Iman sebagai dasar islam yang harus dijalankan ( bagian ke-4 )",
      nilai: 70,
    },
    {
      id: 9,
      name: "Rukun Iman sebagai dasar islam yang harus dijalankan ( bagian ke-5 )",
      nilai: 70,
    },
    {
      id: 10,
      name: "Rukun Iman sebagai dasar islam yang harus dijalankan ( bagian ke-6 )",
      nilai: 70,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-5">
        <div onClick={() => navigate(-1)} className="flex items-center gap-2">
          <FaArrowLeft className="text-2xl cursor-pointer" />
          <h1 className="text-xl font-semibold">Sertifikat Kelulusan</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col bg-[#DCE6F8] p-5 -mt-3 flex-grow">
        <h1 className="text-lg font-bold text-[#4B4B4B] -mt-1">EduLearn</h1>
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-base font-semibold">Transkip Nilai Bagian 1</h2>
          <p className="text-sm font-medium">No. 221/03-05-2025</p>
        </div>
        <h2 className="text-base font-bold whitespace-nowrap mt-2">
          Tingkat Dasar Islam Kategori Keimanan Level 1
        </h2>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-base font-semibold">Nama Lengkap</h1>
          <p className="text-sm font-medium">NIP : 10202025</p>
        </div>

        {/* Table */}
        <table className="bg-white border w-full overflow-hidden rounded-xl mt-3">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-slate-300 p-2 text-sm font-medium">
                No
              </th>
              <th className="border border-slate-300 p-2 text-sm font-medium">
                Mata Pelajaran
              </th>
              <th className="border border-slate-300 p-2 text-sm font-medium">
                Nilai
              </th>
            </tr>
          </thead>
          <tbody>
            {nilai.map((item, index) => (
              <tr
                key={item.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
              >
                <td
                  className={`border border-slate-300 p-2 text-sm font-medium text-center`}
                >
                  {item.id}
                </td>
                <td className="border border-slate-300 p-2   text-sm font-medium">
                  {item.name}
                </td>
                <td className="border border-slate-300 p-2 text-sm text-[#3E8E41] text-center font-medium">
                  {item.nilai}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex justify-between items-center w-full mt-4">
          <p className="text-sm font-medium">www.quiz-app.com</p>
          <p className="text-sm font-medium">Halaman 3 dari 3</p>
        </div>
      </div>

      {/* Button */}
      <div className="bg-white flex justify-between gap-4 p-5">
        <button
          onClick={() => navigate("/test/transkip-nilai-lanjutan")}
          className={`${getButtonClass()} border-none p-2 w-3/4 rounded-xl`}
        >
          Lanjut
        </button>
        <button className={`${getBorderClass()} p-2 rounded-xl w-1/3`}>
          Unduh
        </button>
      </div>
    </div>
  );
};

export default TranskipNilaiLanjutan;

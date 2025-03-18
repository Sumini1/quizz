import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const SertifikatKelulusan = () => {
  const navigate = useNavigate();
  const { theme, getButtonClass, getBorderClass } = useTheme();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-5">
        <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-2">
          <FaArrowLeft className="text-2xl cursor-pointer" />
          <h1 className="text-xl font-semibold">Sertifikat Kelulusan</h1>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center  bg-[#DCE6F8] ">
        <h1 className="text-2xl font-semibold text-[#4B4B4B] mt-3">EduLearn</h1>
        <h2 className="text-2xl font-semibold mt-5">Sertifikat Kelulusan</h2>
        <p className="text-base font-medium mt-2">No. 221/03-05-2025</p>
        <h1 className="text-base font-medium mt-6">Diberikan Kepada</h1>
        <h1 className="text-2xl font-semibold">Nama Lengkap</h1>
        <p className="text-base font-medium">Nomor Induk Peserta : 10202025</p>
        <h1 className="text-base font-medium mt-3 text-center">
          Atas pencapaiannya sebagai peserta telah menyelesaikan pembelajaran
        </h1>
        <h2 className="text-base font-semibold">
          Tingkat Dasar Islam Kategori Keimanan Level
        </h2>
        <h1 className="text-base font-medium mt-3">Dengan Nilai</h1>
        <h1 className="text-base font-bold">90 ( Baik Sekali )</h1>
        <p className="text-base font-medium  text-center p-5 -mt-2 ">
          Semoga Ilmu yang telah dipelajari bermanfaat dan mendapatkan ridho
          Allah ta’ala
        </p>
        <img src="/QR.png" alt="" className="w-20 h-20"/>
        <div className="flex justify-between w-full p-5">
          <p>www.quiz-app.com</p>
          <p>Halaman 1 dari 3</p>
        </div>
      </div>

      {/* Button */}
      <div className="bg-white flex justify-between gap-4 p-5">
        <button
        onClick={() => navigate("/test/transkip-nilai")}
        className={`${getButtonClass()} border-none p-2 w-3/4 rounded-xl`}>lanjut</button>
        <button className={`${getBorderClass()} p-2 rounded-xl w-1/3`}>unduh</button>
      </div>
    </div>
  );
};

export default SertifikatKelulusan;

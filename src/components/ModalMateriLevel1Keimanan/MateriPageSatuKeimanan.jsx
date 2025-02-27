import React from "react";
import { useTheme } from "../../context/ThemeContext";

const MateriPageSatuKeimanan = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const { theme, getButtonClass } = useTheme();

  const getThemeClass = () => {
    return theme === "dark"
      ? "bg-gray-800 text-white"
      : theme === "cupcake"
      ? "bg-pink-500 text-white"
      : theme === "bumblebee"
      ? "bg-yellow-500 text-white"
      : "bg-[#EEE] text-[#333]";
  };

   const handleOverlayClick = (e) => {
     if (e.target === e.currentTarget) {
       onClose();
     }
   };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-5"
    >
      <div
        className={`p-5 rounded-lg shadow-lg w-full relative max-w-md ${getThemeClass()}`}
      >
        <div className="flex flex-col ">
          <h2 className="text-lg font-[600] mb-3 ">Materi Dzikir Ke-1</h2>
          <h1 className="text-md font-[500] mb-1">Lafadz Doa Hadits</h1>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ
            إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ.  رَبِّ
            أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ،
            وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا
            بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ،
            رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي
            الْقَبْرِ
          </p>

          <p className="text-sm leading-relaxed">
            ”Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah,
            segala puji hanya milik Allah. Tidak ada ilah yang berhak diibadahi
            dengan benar kecuali Allah Yang Maha Esa, tiada sekutu bagi-Nya.
            Bagi-Nya kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas
            segala sesuatu.
          </p>
          <p className="text-sm leading-relaxed">
            Wahai Rabb, aku mohon kepada-Mu kebaikan di hari ini dan kebaikan
            sesudahnya. Aku berlindung kepada-Mu dari kejahatan hari ini dan
            kejahatan sesudahnya. Wahai Rabb, aku berlindung kepada-Mu dari
            kemalasan dan kejelekan di hari tua. Wahai Rabb, aku berlindung
            kepada-Mu dari siksaan di Neraka dan siksaan di kubur.”
          </p>
        </div>

        <button
          onClick={onClose}
          className={`mt-5 w-full text-[15px] font-medium py-2 border-none rounded-xl focus:outline-none focus:shadow-outline ${getButtonClass()}`}
        >
          Selesai Membaca
        </button>
      </div>
    </div>
  );
};

export default MateriPageSatuKeimanan;

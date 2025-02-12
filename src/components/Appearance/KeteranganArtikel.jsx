import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const KeteranganArtikel = () => {
  const navigate = useNavigate();

  const { theme, getButtonClass, getThemeModalCategory } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${getThemeModalCategory()}`}>
      {/* Back to Settings Link */}

      <div
        className="flex items-center gap-3 mt-5 mx-3 text-lg mb-2"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <h1 className="font-semibold">Modal Artikel</h1>
      </div>

      {/* Article Content */}
      <div className="flex flex-col p-5 gap-3">
        <p >
          Dalil yang paling jelas dan langsung tentang urutan rukun iman adalah
          Hadis Jibril alaihissalam pada hadis riwayat Muslim (No. 8) yang
          berbunyi :
        </p>
        <p>
          Dari Umar bin Khattab radhiyallahu 'anhu, ia berkata: Suatu hari kami
          duduk bersama Rasulullah ﷺ, lalu datang seorang laki-laki berpakaian
          sangat putih dan berambut sangat hitam (Jibril). Ia bertanya: "Wahai
          Muhammad, kabarkan kepadaku tentang iman." Rasulullah ﷺ menjawab:
        </p>
        <p>
          "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya,
          kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman
          kepada takdir yang baik maupun yang buruk." Hadis ini secara eksplisit
          menyebutkan urutan rukun iman yang menjadi dasar keyakinan umat Islam.
        </p>

        {/* Finish Reading Button */}
        <button
          onClick={() => navigate(-1)}
          className={`mt-16 w-full text-[15px] font-medium py-2 px-4 border-none rounded-xl focus:outline-none focus:shadow-outline ${getButtonClass()}`}
        >
          Selesai Membaca
        </button>
      </div>
    </div>
  );
};

export default KeteranganArtikel;

import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';


const pengingat = () => {
  const { getTextTitle1, getButtonClass } = useTheme();
    return (
      <div className="flex flex-col min-h-screen">
        <Link to={"/notifikasi"}>
          <div className="flex items-center gap-3 mt-5 px-5 text-lg">
            <FaArrowLeft />
            <h1 className="font-semibold">Pengingat</h1>
          </div>
        </Link>
        <div className="flex flex-col gap-3 p-5 ">
          <p className="text-xs mb-3">1 jam yang lalu</p>
          <div className="text-base flex flex-col gap-4">
            <p>
              Mulai 12 agustus 2025. Quiz app akan melaknakan program khusus
              menyambut hari raya Idul Adha. Bersiaplah dari sekarang....
            </p>
            <p>
              Dari Umar bin Khattab radhiyallahu 'anhu, ia berkata: Suatu hari
              kami duduk bersama Rasulullah ﷺ, lalu datang seorang laki-laki
              berpakaian sangat putih dan berambut sangat hitam (Jibril). Ia
              bertanya: "Wahai Muhammad, kabarkan kepadaku tentang iman."
              Rasulullah ﷺ menjawab:
            </p>
            <p>
              "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya,
              kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman
              kepada takdir yang baik maupun yang buruk." Hadis ini secara
              eksplisit menyebutkan urutan rukun iman yang menjadi dasar
              keyakinan umat Islam.
            </p>
            <Link to={"/notifikasi"}>
              <button
                className={`${getButtonClass()} mt-[45px] border-none p-2 w-full items-center  mx-auto flex justify-center`}
              >
                Kembali
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default pengingat;
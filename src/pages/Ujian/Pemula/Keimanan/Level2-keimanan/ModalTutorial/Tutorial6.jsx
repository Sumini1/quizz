import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../../../../reducer/modalSlice";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";

const Tutorial6 = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClick = () => {
    dispatch(openModal()); // Aktifkan modal di Redux state
    navigate("/page-tujuh"); // Pindah ke halaman 2
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-5">
      {/* Bagian Informasi Tambahan */}
      <div className=" bg-white p-3 fixed top-16 w-[250px] rounded-lg shadow-md text-sm text-gray-800   ">
        {/* Konten Informasi */}
        <p className="border-b border-gray-400 pb-2">
          Sistem pengaturan menjawab dan menyimpan soal
        </p>

        {/* Panah kecil di bawah dan bergeser ke kanan */}
        <div className="absolute mt-5 -bottom-2 left-4 rotate-180">
          <svg
            className="w-6 h-6  text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0L0 10h20L10 0z"></path>
          </svg>
        </div>
        {/* Diamond */}

        <div
          onClick={handleClick}
          className="flex justify-end gap-2 items-center pt-2 "
        >
          <span>6/11</span>
          <button className="hover:underline text-[#0961F5] underline underline-offset-2">
            Lanjut
          </button>
        </div>
      </div>
      <div className="flex justify-between bg-[#DCE6F8] p-3 rounded-lg shadow-md text-sm text-gray-800 w-[300px] -mt-56 items-center">
        <div className="flex gap-2 items-center">
          <IoDiamond className="text-xl" />
          <p className="text-base font-medium">Sistem dan Arsip</p>
        </div>
        <IoIosArrowForward className="text-xl" />
      </div>
    </div>
  );
};

export default Tutorial6;

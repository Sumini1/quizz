import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../../../../../reducer/modalSlice";

const Tutorial2 = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(1);
   const handleClick = () => {
      dispatch(openModal()); // Aktifkan modal di Redux state
      navigate("/page-tiga"); // Pindah ke halaman 2
    };

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center h-screen p-5">
      <div className="w-[300px] ">
        {" "}
        {/* Tambahkan margin atas */}
        {/* Progress Bar */}
        <div className="w-full bg-[#0961F5] rounded-full h-3 mb-3"></div>
        {/* Konten */}
        <div className="relative bg-white p-3 rounded-lg shadow-md text-sm text-gray-800">
          {/* Panah kecil di atas */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0L0 10h20L10 0z"></path>
            </svg>
          </div>

          {/* Konten Informasi */}
         <p className="border-b border-gray-400 pb-2 ">
            Soal dan jawaban yang terkait materi pembahasan
          </p>
          <div
            onClick={handleClick}
            className="flex justify-end gap-2 items-center pt-2  font-medium"
          >
            <span>2/11</span>
            <button className="hover:underline text-[#0961F5] underline underline-offset-2">
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial2;

import React from "react";
import { Link } from "react-router-dom";

const SurveiSatu = () => {
  return (
    <div className="relative flex flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      <div className="mt-5 flex flex-col h-4 mb-2 justify-center items-center">
        <div className="flex w-[370px] h-3">
          <div className="flex mr-2">
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </div>
          <div className="w-1/2 bg-green-600 rounded-sm"></div>
          <div className="w-1/2 bg-slate-200 rounded-sm"></div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2 mt-2">
          Mohon Partisipasinya
        </h1>
        <p className="text-sm text-gray-600">
          Kuosioner untuk pengembangan Aplikasi
        </p>
      </div>
      {/* Garis tanpa jarak */}
      <div className="absolute mt-32 left-0 w-full border-b-2 border-gray-300 "></div>
      <div className="mt-5 flex flex-col">
        <h1 className="text-lg font-semibold mt-7">Usia</h1>
        <div className="flex flex-col">
          <div className="flex gap-5 mt-5 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Di bawah 12 tahun</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">12 - 14 tahun</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">15 - 18 tahun</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">19 - 25 tahun</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">26 - 35 tahun</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">36 - 55 tahun</label>
          </div>
          <div className="flex gap-5 mt-3">
            <input type="checkbox" />
            <label htmlFor="">Di atas 55 tahun</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to="/survei-dua">
          <button className="bg-orange-600 text-white flex p-2 rounded-md mt-28 w-[350px] items-center justify-center">
            Lanjut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SurveiSatu;

import React from "react";
import { Link } from "react-router-dom";

const PageSatu = () => {
  return (
    <div className="relative flex flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      <div className="mt-5 flex flex-col h-4 mb-2 justify-center items-center">
        <div className="flex w-[370px] h-3 ">
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
        <div className="flex flex-col mt-24">
          <h1 className="text-lg">Ada berapa rukun islam ?</h1>
        </div>
        <div className="flex flex-wrap gap-5 mt-10">
          <p className="flex border p-2 w-24 text-center items-center justify-center">
            Empat
          </p>
          <p className="flex border p-2 w-24 text-center items-center justify-center">
            Lima
          </p>
          <p className="flex border p-2 w-24 text-center items-center justify-center">
            Enam
          </p>
          <p className="flex border p-2 w-24 text-center items-center justify-center">
            Tiga
          </p>
        </div>
      </div>

      <div className="flex  gap-5 mt-72">
        <Link>
          <button className="bg-slate-500 text-white flex p-2 rounded-md  w-[100px] items-center justify-center">
            Lewati
          </button>
        </Link>
        <Link to={"/page-dua"}>
          <button className="bg-orange-600 text-white flex p-2 rounded-md  w-[250px] items-center justify-center">
            Cek
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageSatu;
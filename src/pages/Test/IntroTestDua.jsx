import React from "react";
import { FaUserCheck } from "react-icons/fa6";
import { TbAlarmFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BiSolidCommentError } from "react-icons/bi";

const IntroTestDua = () => {
  return (
    <div className="flex  flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      <div className="mt-5 flex flex-col  h-4 mb-2  justify-center items-center ">
        <div className="absolute left-0 w-full border-b-2 border-gray-300  md:hidden"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-2  mt-2 ">
          Alhamdulillah Selesai
        </h1>
      </div>
      <div className="absolute left-0 w-full border-b-2 border-gray-300 mt-28 md:hidden"></div>
      <div className="mt-5 flex  justify-center items-center mx-auto">
        <p className="text-lg mt-28 flex  mb-10">
          "Bersyukurlah atas segala apa yang Allah ta'ala berikan"
        </p>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <div className="border bg-slate-100 p-5 flex flex-col gap-2">
          <h1>Penilaian</h1>
          <FaUserCheck className="ml-5" />
        </div>
        <div className="border bg-slate-100 p-5 flex flex-col gap-2">
          <h1>Waktu</h1>
          <TbAlarmFilled className="ml-5" />
        </div>
      </div>
      <div className="flex  gap-5 mt-36">
        <Link to={"/pilih-category"}>
          <button className="bg-orange-500 text-white flex p-2 rounded-md  w-[250px] items-center justify-center">
            Lanjut
          </button>
        </Link>
    
          <button className="bg-violet-600 text-white flex p-3 rounded-md  w-[70px] items-center justify-center">
            <BiSolidCommentError />
          </button>
       
      </div>
    </div>
  );
};

export default IntroTestDua;

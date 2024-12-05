import React, {useState} from "react";
import { Link } from "react-router-dom";

const IntroTestSatu = () => {
  return (
    <div className="flex  flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      <div className="mt-5 flex flex-col  h-4 mb-2  justify-center items-center ">
        <div className="absolute left-0 w-full border-b-2 border-gray-300  md:hidden"></div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-2  mt-2 ">Alhamdulillah</h1>
        <p className="text-md text-gray-600 ">
          Proses verifikasi dan survei telah selesai. Terimakasih atas
          kerjasamanya
        </p>

        {/* Div dengan jarak ke border */}

        {/* Border terpisah */}
      </div>
      <div className="absolute left-0 w-full border-b-2 border-gray-300 mt-40 md:hidden"></div>
      <div className="mt-5 flex  justify-center items-center mx-auto">
        <p className="text-lg mt-36 flex justify-center  items-center text-center mb-10">
          Yuk, uji kemampuan dasar kita menenai ilmu islam
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={"/test-ilmu-islam-intro-page"}>
          <button className="bg-orange-600 text-white flex p-2 rounded-md mt-28 w-[350px]  items-center justify-center">
            Uji pengetahuan ilmu islam
          </button>
        </Link>
      </div>
    </div>
  );
};

export default  IntroTestSatu;

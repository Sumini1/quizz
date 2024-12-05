import React from "react";


const IntroTestDua = () => {
  return (
    <div className="flex  flex-col p-5 h-screen md:justify-start md:items-start md:ml-10 md:py-10">
      <div className="mt-5 flex flex-col  h-4 mb-2  justify-center items-center ">
        <div className="absolute left-0 w-full border-b-2 border-gray-300  md:hidden"></div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-3  mt-2 ">
          Mulai Tes Pengetahuan Islam
        </h1>
      </div>
      <div className="absolute left-0 w-full border-b-2 border-gray-300 mt-20 md:hidden"></div>
      <div className="mt-5 flex flex-col ">
        <h2 className="text-lg font-semibold mt-5 ">Pilih tingkatan level</h2>
        <div className="flex flex-col">
          <div className="flex gap-5 mt-10 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Pemula</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Dasar</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Menengah</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Menengah Lanjutan</label>
          </div>
          <div className="flex gap-5 mt-3 mb-2">
            <input type="checkbox" />
            <label htmlFor="">Lanjutan</label>
          </div>
          <div className="flex gap-5 mt-3">
            <input type="checkbox" />
            <label htmlFor="">Lanjutan Tinggi</label>
          </div>
          <div className="flex gap-5 mt-3">
            <input type="checkbox" />
            <label htmlFor="">Ahli</label>
          </div>
          <div className="flex gap-5 mt-3">
            <input type="checkbox" />
            <label htmlFor="">Master</label>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="bg-orange-600 text-white flex p-2 rounded-md mt-20 w-[350px]  items-center justify-center">
          Lanjut
        </button>
      </div>
    </div>
  );
};

export default IntroTestDua;

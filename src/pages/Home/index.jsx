import React, { useState } from "react";
import ModalRegister from "../../components/Auth/ModalRegister";
import ModalLogin from "../../components/Auth/ModalLogin";

const Home = () => {
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const handleOpenModalRegister = () => {
    setIsModalRegisterOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto p-14">
      <div className="flex justify-center items-center bg-gray-300 mx-auto w-full h-[220px] rounded-lg"></div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="text-xl font-semibold mt-10 items-center justify-center mx-auto text-center">
          Perjalanan Menuntut Ilmu Mulai dari Sini
        </h1>
        <p className="text-sm mt-5 items-center justify-center mx-auto text-center">
          Perdalam islam dan bahasa Arab dengan menyenangkan melalui artikel dan
          quiz interaktif
        </p>
        <div className="flex border w-[200px] gap-2 justify-center items-center mt-7 p-1">
          Pilih Bahasa
          <select name="bahasa" id="bahasa">
            <option value="indonesia">Indonesia</option>
            <option value="inggris">Inggris</option>
          </select>
        </div>
        <button
          onClick={handleOpenModalRegister}
          className="bg-amber-500 text-white p-2 mt-7 w-[100px] rounded-md"
        >
          Lanjut
        </button>
        <p className="mt-5 text-green-700">Tentang Kami</p>
      </div>
      {/* Modal Components */}
      <ModalRegister
        isModalRegisterOpen={isModalRegisterOpen}
        setIsModalRegisterOpen={setIsModalRegisterOpen}
        setIsModalLoginOpen={setIsModalLoginOpen}
      />
      <ModalLogin
        isModalLoginOpen={isModalLoginOpen}
        setIsModalLoginOpen={setIsModalLoginOpen}
        setIsModalRegisterOpen={setIsModalRegisterOpen}
      />
    </div>
  );
};

export default Home;

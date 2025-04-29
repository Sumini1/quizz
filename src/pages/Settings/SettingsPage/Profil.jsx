import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { useTheme } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";

const Profil = () => {
  const { theme, getBorder, getButtonClass, getBorderClass, middleTheme } = useTheme();
  const userProfil = [
    {
      id: 1,
      input: (
        <input
          type="text"
          placeholder="Budi Hadi"
          className="flex-1 bg-transparent focus:outline-none"
        />
      ),
      label: "Nama Lengkap",
      description: "Nama lengkap akan tercantum pada sertifikat.",
      icon: <AiFillEdit className="text-gray-400 cursor-pointer" />,
    },
    {
      id: 2,
      input: (
        <input
          type="text"
          placeholder="Budi"
          className="flex-1 bg-transparent focus:outline-none"
        />
      ),
      label: "Nama Pengguna",
      description: "Nama pengguna akan terlihat oleh pengguna akun lain",
      icon: <AiFillEdit className="text-gray-400 cursor-pointer" />,
    },
    {
      id: 3,
      input: (
        <input
          type="email"
          placeholder="budi@gmail.com"
          className="flex-1 bg-transparent focus:outline-none"
        />
      ),
      label: "Email",
      icon: <AiFillEdit className="text-gray-400 cursor-pointer" />,
    },
    {
      id: 4,
      input: (
        <input
          type="text"
          placeholder="0854-3133-3133"
          className="flex-1 bg-transparent focus:outline-none"
        />
      ),
      label: "Telepon",
      icon: <AiFillEdit className="text-gray-400 cursor-pointer" />,
    },
    {
      id: 5,
      input: (
        <input
          type="text"
          placeholder="Domisili (Kecamatan, Kota/Kabupaten)"
          className="flex-1 bg-transparent focus:outline-none"
        />
      ),
      label: "Domisili",
      icon: <AiFillEdit className="text-gray-400 cursor-pointer" />,
    },
    {
      id: 6,
      input: (
        <input
          type="date"
          className="flex-1 bg-transparent focus:outline-none"
        />
      ),
      label: "Tanggal Lahir",
      icon: <AiFillEdit className="text-gray-400 cursor-pointer" />,
    },
    {
      id: 7,
      input: (
        <input
          type="text"
          placeholder="PNS"
          className="flex-1 bg-transparent focus:outline-none"
        />
      ),
      label: "Pekerjaan",
      icon: <AiFillEdit className="text-gray-400 cursor-pointer" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4  md:px-5 min-h-screen w-full h-full">
      {/* Header */}
      <div
        className={`py-2 flex flex-col text-xl  px-5 flex-grow max-w-md mx-auto w-full ${middleTheme()} `}
      >
        <Link to={"/settings"}>
          <div className="flex items-center gap-2">
            <FaArrowLeft className="text-2xl cursor-pointer" />
            <h1 className="text-2xl font-semibold">Profil</h1>
          </div>
        </Link>

        {/* Description */}
        <p className="text-gray-600 mt-4 text-lg font-medium mb-4">
          Harap diisi profil pengguna untuk kemajuan aplikasi. Data pengguna
          insya Allah akan kami lindungi.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {userProfil.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              <label
                htmlFor={`input-${item.id}`}
                className="text-sm font-medium text-gray-700"
              >
                {item.label}
              </label>
              <div
                className={`flex text-sm font-medium items-center border ${getBorder()} rounded-lg p-2 `}
              >
                {item.input}
                {item.icon}
              </div>
              {item.description && (
                <p className="text-xs text-gray-500">{item.description}</p>
              )}
              {item.id === 2 && (
                <h5 className="text-xs text-blue-500">Selengkapnya...</h5>
              )}
            </div>
          ))}
        </form>
        <div className="flex flex-col gap-4 mt-10 text-base font-medium">
          <button className={`border-none rounded-xl p-3 ${getButtonClass()}`}>
            Simpan
          </button>
          <button
            className={`border-none rounded-xl p-3 mb-5 ${getBorderClass()}`}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;

import React from "react";
import { FiUser } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../../reducer/modalSlice";

const DataDiriLanjutan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getBorder, getButtonClass } = useTheme();

const handleClick = (destination) => {
  dispatch(openModal()); // Aktifkan modal di Redux state
  navigate(destination); // Pindah ke halaman yang sesuai
};
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 p-5">
        <h1 className="text-xl font-semibold"> Data diri lanjutan</h1>
        <div className="flex flex-col gap-3">
          <h1 className="text-md font-medium mt-3">
            Untuk proses lebih lanjut mohon lengkapi data berikut
          </h1>
          {/* Nama Lengkapa */}
          <div className="flex flex-col mt-3">
            <h2 className="text-base font-medium mb-2">Nama Lengkap</h2>
            <div className="relative w-full">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
              <input
                type="text"
                className={`border rounded-md p-2 pl-10 w-full ${getBorder()}`}
                placeholder="Budi Hadi"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              <span>
                Nama lengkap akan{" "}
                <span className="font-semibold">tercantum</span> pada
                <span className="font-semibold">sertifikat</span>
              </span>
              <span
                onClick={() => navigate("/test/sertifikat-kelulusan")}
                className="text-[#28A745] ml-1"
              >
                lihat contoh penerapan
              </span>
            </p>
          </div>

          {/* Nama Pengguna */}
          <div className="flex flex-col mt-3">
            <h2 className="text-base font-medium mb-2">Nama Pengguna</h2>
            <div className="relative w-full">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
              <input
                type="text"
                className={`border rounded-md p-2 pl-10 w-full ${getBorder()}`}
                placeholder="Nama Pengguna"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              <span>
                Nama pengguna akan{" "}
                <span className="font-semibold">terlihat</span> oleh pengguna
                lain pada papan <span className="font-semibold">prestasi</span>
              </span>
              <span
                onClick={() => handleClick("/papan-peringkat-prestasi")}
                className="text-[#28A745] ml-1"
              >
                lihat contoh penerapan.
              </span>
            </p>
          </div>

          {/* Nma donatur */}
          <div className="flex flex-col mt-3">
            <h2 className="text-base font-medium mb-2">Nama Donatur</h2>
            <div className="relative w-full">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
              <input
                type="text"
                className={`border rounded-md p-2 pl-10 w-full ${getBorder()}`}
                placeholder="Nama Donatur"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              <span>
                Nama pengguna akan{" "}
                <span className="font-semibold">terlihat</span> oleh pengguna
                lain pada papan <span className="font-semibold">donasi</span>
              </span>
              <span
                onClick={() => handleClick("/papan-peringkat-donatur")}
                className="text-[#28A745] ml-1"
              >
                lihat contoh penerapan
              </span>
            </p>
          </div>
          <button
            onClick={() => navigate("/pilih-category")}
            className={`${getButtonClass()} w-full border-none p-3 mt-10 rounded-xl`}
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataDiriLanjutan;

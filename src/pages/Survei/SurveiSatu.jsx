import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useTheme } from "../../context/ThemeContext";

const SurveiSatu = () => {
  const location = useLocation();
  const { theme, getDotClassSurvey, getButtonClass } = useTheme();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

   // Set overflow:hidden hanya saat halaman ini aktif
    useEffect(() => {
      document.body.style.overflow = "hidden";
  
      return () => {
        document.body.style.overflow = "auto"; // Pulihkan scroll saat keluar dari halaman
      };
    }, []);

  const options = [
    { id: 1, label: "Dibawah 12 tahun" },
    { id: 2, label: "12 - 14 tahun" },
    { id: 3, label: "15 - 18 tahun" },
    { id: 4, label: "19 - 25 tahun" },
    { id: 5, label: "26 - 35 tahun" },
    { id: 6, label: "36 - 55 tahun" },
    { id: 7, label: "Diatas 55 tahun" },
  ];

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setIsModalOpen(true);
      console.log("Modal state set to true");
    } else {
      navigate("/survei-dua", {
        state: {
          selectedOption: options.find(
            (option) => option.id === selectedOption
          ),
        },
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col p-9 h-screen overflow-hidden md:justify-start md:items-start md:ml-10">
      <div className="mt-2 flex flex-col">
        <h2 className="text-xl  font-medium mb-3 mt-auto">Usia</h2>
        <h1 className="text-md mb-5 ">
          Mohon partisipasinya untuk pengembangan aplikasi
        </h1>
        <div className="flex flex-col gap-1">
          {options.map((option) => (
            <div key={option.id} className="flex gap-5 mt-3 mb-2">
              <input
                type="checkbox"
                id={`option-${option.id}`}
                name="usia"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <p className="text-md" htmlFor={`option-${option.id}`}>
                {option.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex fixed bottom-20 left-1/2 -translate-x-1/2 mb-2 text-xl justify-center items-center text-center">
        <GoDotFill className={getDotClassSurvey(0)} />
        <GoDotFill className={getDotClassSurvey(1)} />
        <GoDotFill className={getDotClassSurvey(2)} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-3 shadow-md">
        <button
          onClick={handleNextClick}
          className={`text-white flex p-3 border-none rounded-xl w-full items-center justify-center ${getButtonClass()}`}
        >
          Lanjut
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md shadow-md w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-3">Peringatan</h2>
            <p className="mb-5">
              Anda harus memilih usia terlebih dahulu sebelum melanjutkan.
            </p>
            <button
              onClick={closeModal}
              className={` px-4 py-2 rounded-xl border-none ${getButtonClass()}`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveiSatu;

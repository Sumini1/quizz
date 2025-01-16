import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useTheme } from "../../context/ThemeContext";



const SurveiDua = () => {
  const location = useLocation();
  const { theme, getDotClassSurvey, getButtonClass } = useTheme();
  const navigate = useNavigate();
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleNextClick = () => {
    if (!selectedOption2) {
      setIsModalOpen2(true);
      console.log("Modal state set to true");
    } else {
      navigate("/survei-tiga", {
          state: {
            selectedOption: options.find(
              (option) => option.id === selectedOption2
            ),
          },
        });
      }
    };

     const handleOptionChange = (id) => {
       setSelectedOption2(id);
     };


  const closeModal = () => {
    setIsModalOpen2(false);
  };
  // Ambil label usia dari SurveiSatu
  const selectedOptionFromSurveiSatu = location.state?.selectedOption?.label;

  const options = [
    { id: 1, label: "Teman/saudara" },
    { id: 2, label: "Guru/lembaga" },
    { id: 3, label: "Whatsapp" },
    { id: 4, label: "Instagram" },
    { id: 5, label: "Youtube" },
    { id: 6, label: "Twitter" },
    { id: 7, label: "Facebook" },
  ];

 

  return (
    <div className="flex flex-col p-9 h-screen md:justify-start md:items-start md:ml-10">
      <div className="mt-7 flex flex-col">
        <h2 className="text-xl  font-medium mb-3">
          Mengetahui Learn Quiz dari
        </h2>
        <h1 className="text-md ">
          Mohon partisipasinya untuk pengembangan aplikasi
        </h1>
        {/* {selectedOptionFromSurveiSatu && (
          <p className=" mt-4">
            Usia Anda: <strong>{selectedOptionFromSurveiSatu}</strong>
          </p>
        )} */}
        <div className="mt-5 flex flex-col gap-1">
          {options.map((option) => (
            <div key={option.id} className="flex gap-5 mt-3 mb-2">
              <input
                type="checkbox"
                id={`option-${option.id}`}
                name="learn-quiz"
                value={option.id}
                checked={selectedOption2 === option.id}
                onChange={() => handleOptionChange(option.id)}
              />
              <p htmlFor={`option-${option.id}`}>{option.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-[60px] mb-2 text-xl justify-center items-center">
        <GoDotFill className={getDotClassSurvey(0)} />
        <GoDotFill className={getDotClassSurvey(1)} />
        <GoDotFill className={getDotClassSurvey(2)} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleNextClick}
          className={`text-white border-none w-full flex p-3 rounded-xl items-center justify-center ${getButtonClass()}`}
        >
          Lanjut
        </button>
      </div>
      {isModalOpen2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md shadow-md w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-3">Peringatan</h2>
            <p className="mb-5">
              Anda harus memilih usia terlebih dahulu sebelum melanjutkan.
            </p>
            <button
              onClick={closeModal}
              className={`px-4 py-2 rounded-xl border-none ${getButtonClass()}`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveiDua;

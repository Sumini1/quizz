import React, { useState , useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { GoDotFill } from "react-icons/go";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { HiBadgeCheck } from "react-icons/hi";

const SurveiTiga = () => {
  const {
    theme,
    getButtonClass,
    getDotClassSurvey,
    getBorderClass,
    getIconTheme,
    getBorder,
    getThemeClass,
  } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

   // Set overflow:hidden hanya saat halaman ini aktif
    useEffect(() => {
      document.body.style.overflow = "hidden";
  
      return () => {
        document.body.style.overflow = "auto"; // Pulihkan scroll saat keluar dari halaman
      };
    }, []);

  const handleSurvey = () => {
    setIsModalOpen(false);
    navigate("/list-levels");
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex  flex-col p-5 h-screen overflow-hidden md:justify-start md:items-start md:ml-10 md:py-10">
      <h2 className="text-xl font-medium mb-3  mt-5 tracking-wide leading-[1.6]">
        Motivasi Belajar
      </h2>
      <h1 className="text-md mb-5 tracking-wide leading-[1.6]">
        Mohon partisipasinya untuk pengembangan aplikasi
      </h1>

      <div className="flex flex-col mt-14">
        <textarea
          style={{ backgroundColor: "transparent" }}
          name="motivasi"
          id="motivasi"
          cols="20"
          rows="5"
          placeholder="Motivasi belajar, tulis di sini yaa"
          className={`border-[1px] rounded-md text-[#333] p-5 ${getBorder()}  ${
            theme === "cupcake" && "border-[rgb(237,226,236)] border-2"
          }`}
        ></textarea>
      </div>

      <div className="flex fixed bottom-20 left-1/2 -translate-x-1/2 mb-2 text-xl justify-center items-center text-center">
        <GoDotFill className={getDotClassSurvey(0)} />
        <GoDotFill className={getDotClassSurvey(1)} />
        <GoDotFill className={getDotClassSurvey(2)} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-3 shadow-md">
        <button
          onClick={handleOpenModal}
          type="submit"
          className={` text-white flex p-3 border-none rounded-xl w-full items-center justify-center ${getButtonClass()}`}
        >
          Lanjut
        </button>
      </div>
      {isModalOpen && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-7"
          style={{ zIndex: 50 }}
        >
          <div
            className={`p-5 rounded-xl flex flex-col items-center border-none gap-4 bg-white`}
          >
            <HiBadgeCheck className={`text-8xl  p-2  ${getIconTheme()}`} />
            {/* Ikon sukses */}
            <p className="text-lg font-semibold ">Survei berhasil dikirim</p>
            <div className="text-center mb-2 ">
              <p>Jaazakumullah khair terimakasih banyak atas partisipasinya</p>
            </div>
            <button
              onClick={handleSurvey}
              className={`p-3 w-full border-none rounded-xl ${getButtonClass()}`}
            >
              Lanjut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveiTiga;

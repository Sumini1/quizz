import React, { useState, useEffect } from "react";
import { MdOutlineError } from "react-icons/md";
import ModalDasar from "./ModalDasar";
import ModalUmum from "./ModalUmum";
import ModalLanjutan from "./ModalLanjutan";
import PenuntutIlmu from "./PenuntutIlmu";
import { useTheme } from "../../context/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoryDifficulties } from "../../reducer/categoryDifficultiesSlice";
import { useNavigate } from "react-router-dom";

const PilihCategory = () => {
  const { getLanjutkanClass, getButtonClassSelected, getIconColorAlert } =
    useTheme();
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data = [],  
    status,
    error,
  } = useSelector((state) => state.categoryDifficulties);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategoryDifficulties());
    }
  }, [status, dispatch]);

  const handleIconClick = (categoryId) => setActiveModal(categoryId);
  const handleCloseModal = () => setActiveModal(null);
  const handleSelectCategory = (categoryId) => setSelectedCategory(categoryId);

  const handleContinue = () => {
    const selected = data.find((category) => category.id === selectedCategory);
    if (selected) {
      navigate(`/category/${selected.id}`, {
        state: { selectedCategory, categoryDetails: selected },
      });
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center p-4">Loading...</div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center p-4 text-red-500">
        <p>Error: {error}</p>
        <button
          onClick={() => dispatch(fetchCategoryDifficulties())}
          className="mt-2 px-4 py-2 bg-red-100 rounded-md"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-lg font-semibold mb-6">Tingkat Pembelajaran</h1>

      {/* Grid kategori */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">
        {data.map((category) => (
          <div
            key={category.id}
            className={`relative rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 ${
              selectedCategory === category.id
                ? getButtonClassSelected()
                : "bg-white"
            }`}
          >
            {/* Gambar */}
            <img
              src="/buku.jpeg"
              alt={category.name}
              className="w-full h-[120px] object-cover"
            />

            {/* Konten */}
            <div className="p-2 mx-1 flex flex-col h-full space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-base">{category.name}</h1>
                <MdOutlineError
                  className={`text-lg cursor-pointer ${getIconColorAlert()}`}
                  onClick={() => handleIconClick(category.id)}
                />
              </div>
              
              <h5 className="text-sm font-light">
                {category.description_long}
              </h5>

              {/* Tombol Pilih */}
              <div className="mt-20">
                <button
                  onClick={() => handleSelectCategory(category.id)}
                  className={`w-full py-1 rounded-xl ${
                    selectedCategory === category.id
                      ? "bg-white text-black border"
                      : "bg-[#DCE6F8] text-[#333]"
                  }`}
                >
                  {selectedCategory === category.id ? "Dipilih" : "Pilih"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal === 1 && (
        <ModalDasar isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 2 && (
        <ModalUmum isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 3 && (
        <ModalLanjutan isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 4 && (
        <PenuntutIlmu isOpen={true} onClose={handleCloseModal} />
      )}

      {/* Tombol Lanjutkan */}
      <button
        onClick={handleContinue}
        className={`flex p-3 rounded-xl w-full mt-6 items-center justify-center ${
          selectedCategory ? getLanjutkanClass() : "bg-[#DCE6F8] text-[#333]"
        }`}
        disabled={!selectedCategory}
      >
        Lanjutkan
      </button>
    </div>
  );
};

export default PilihCategory;

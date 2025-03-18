import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnits } from "../Reducer/unitsSlice";

const ModalOverView = ({ onClose, unitId }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.units);
  // const [loading, setLoading] = useState(true);
  const { theme, getButtonClass, getThemeModalCategory } = useTheme();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchUnits());
    }
  }, [dispatch, data]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Find the specific unit to display
  const displayUnit =
    unitId && data?.length
      ? data.find((item) => item.id === unitId || item.id === parseInt(unitId))
      : null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-5"
      onClick={handleOverlayClick}
    >
      <div
        className={`p-6 rounded-lg shadow-lg w-full relative max-w-md ${getThemeModalCategory()}`}
      >
        {displayUnit && (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">{displayUnit.name}</h2>
            <p className="text-gray-600">{displayUnit.description_overview}</p>
          </div>
        )}
        <button
          onClick={onClose}
          className={`mt-20 w-full text-[15px] font-medium py-2 px-4 border-none rounded-xl focus:outline-none focus:shadow-outline ${getButtonClass()}`}
        >
          Selesai Membaca
        </button>
      </div>
    </div>
  );
};

export default ModalOverView;

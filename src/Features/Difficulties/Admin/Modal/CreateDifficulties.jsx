import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchCreateDifficulties } from "../../Features/Difficulties/Reducer/difficultiesSlice";

const CreateDifficultis = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const { data } = useSelector((state) => state.categoryDifficultie);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description_short: "",
    description_long: "",
    total_categories: null,
  });

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "total_categories" ? Number(value) : value, // Konversi ke Number
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data yang dikirim:", formData); // Pastikan total_categories berupa Number

    try {
      await dispatch(fetchCreateCategoryDifficulties(formData)).unwrap();
      onClose();
    } catch (error) {
      alert(`Gagal membuat kategori: ${error}`);
    }
  };

  // Early return setelah semua hooks
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Tambah Tingkat Kesulitan</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description_short"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Deskripsi Singkat
            </label>
            <input
              type="text"
              id="description_short"
              name="description_short"
              value={formData.description_short}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description_long"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Deskripsi Panjang
            </label>
            <textarea
              id="description_long"
              name="description_long"
              value={formData.description_long}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="total_categories"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Total Kategori
            </label>
            <input
              type="number"
              id="total_categories"
              name="total_categories"
              value={formData.total_categories}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isLoading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDifficultis;

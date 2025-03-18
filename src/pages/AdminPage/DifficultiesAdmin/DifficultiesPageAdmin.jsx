import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDifficulties } from "../../Features/Difficulties/Reducer/difficultiesSlice";
import CreateDifficultis from "./ModalDifficulties/CreateDifficulties";
import UpdateDifficulties from "./ModalDifficulties/UpdateDifficulties";
import { fetchDeleteDifficulties } from "../../Features/Difficulties/Reducer/difficultiesSlice";
import Swal from "sweetalert2";

const DifficultiesPageAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(fetchDeleteDifficulties(id)).then(() => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          dispatch(fetchDifficulties());
        });
      }
    });
  };

  const handleModalUpdate = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setIsOpenUpdate(true);
  };

  const handleModalUpdateClose = () => {
    setIsOpenUpdate(false);
  };

  const handleModalCreate = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const {
    data = [],
    status,
    error,
  } = useSelector((state) => state.categoryDifficulties);

  // Ambil data difficulties id saat status idle
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategoryDifficulties());
    }
  }, [status, dispatch]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Error state
  if (status === "failed") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-500">
        <p>Error: {error || "Terjadi kesalahan saat mengambil data."}</p>
        <button
          onClick={() => dispatch(fetchCategoryDifficulties())}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  // Success state
  return (
    <div className="p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Halaman Admin</h2>
      <div className="overflow-x-auto">
        <button onClick={handleModalCreate} className="mb-4">
          Create
        </button>
        {isOpen && (
          <CreateDifficultis isOpen={isOpen} onClose={handleModalClose} />
        )}
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-md">
              <th className="py-2 px-3 text-left text-sm font-semibold">
                Category
              </th>
              <th className="py-2 px-3 text-left text-sm font-semibold">
                Description Long
              </th>
              <th className="py-2 px-3 text-left text-sm font-semibold">
                Created At
              </th>
              <th className="py-2 px-3 text-left text-sm font-semibold">
                Updated At
              </th>
              <th className="py-2 px-3 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((category) => (
                <tr
                  key={category.id}
                  className="border-b hover:bg-gray-100 transition duration-300"
                >
                  <td className="py-2 px-4 font-normal text-sm">
                    {category.name}
                  </td>
                  <td className="py-2 px-4 text-gray-600 text-sm font-normal whitespace-pre-line">
                    {category.description_long}
                  </td>
                  <td className="py-2 px-4 text-gray-600 text-xs font-normal whitespace-pre-wrap">
                    {category.created_at}
                  </td>
                  <td className="py-2 px-4 text-gray-600 text-xs font-normal whitespace-pre-line">
                    {category.updated_at}
                  </td>
                  <td className="py-2 px-4 space-x-2 gap-2 flex flex-col items-center">
                    <button
                      onClick={() => handleModalUpdate(category)}
                      className="bg-blue-500 text-white px-3 py-1 w-20 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    {isOpenUpdate && (
                      <UpdateDifficulties
                        isOpen={isOpenUpdate}
                        onClose={handleModalUpdateClose}
                        category={category}
                      />
                    )}
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="bg-red-500 text-white px-3 py-1 w-20 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  Tidak ada data kategori kesulitan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DifficultiesPageAdmin;

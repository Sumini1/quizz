import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../context/ThemeContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import ModalKeimanan from "../Modal/ModalKeimanan";
import ModalIbadah from "../Modal/ModalIbadah";
import ModalAkhlak from "../Modal/ModalAkhlak";
import ModalMuamalah from "../Modal/ModalMuamalah";
import ModalSejarah from "../Modal/ModalSejarah";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDifficultiesById } from "../../Difficulties/Reducer/difficultiesSlice";
import { fetchListCategories } from "../Reducer/listCategories";

const ListCategories = () => {
  const navigate = useNavigate();
  const { getButtonClassListCategory, getButtonClass, getIconColorAlert } =
    useTheme();
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory || null;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.difficulties);
  const description_short =
    detail?.description_short || "Deskripsi tidak tersedia";
  const { data, status } = useSelector((state) => state.listCategories);

  useEffect(() => {
    if (id) {
      dispatch(fetchDifficultiesById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchListCategories());
  }, [dispatch]);

  const handleSelectCategory = (categoryId) => {
    setSelectCategory(categoryId);
  };

  const handleIconClick = (categoryId, e) => {
    e.stopPropagation(); // Mencegah event klik menyebar ke parent button
    // console.log("Icon clicked for category:", categoryId);
    setActiveModal(categoryId);
  };

  const handleCloseModal = () => {
    // console.log("Closing modal");
    setActiveModal(null);
  };

  const [sortBy, setSortBy] = useState("Abjad Minimalis");

  // Filter data berdasarkan difficulty_id yang cocok dengan id dari params
  const categoriesForDifficulty = data.filter(
    (category) => category.difficulty_id === parseInt(id)
  );

  // Filter data berdasarkan pencarian
  const filteredCategories = categoriesForDifficulty.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Urutkan data yang sudah difilter
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (sortBy === "Abjad Minimalis") return a.name.localeCompare(b.name);
    if (sortBy === "Abjad Informatif")
      return (a.status || "").localeCompare(b.status || "");
    if (sortBy === "Kelas Terbaru")
      return new Date(b.created_at) - new Date(a.created_at);
    return 0;
  });

  const selectRoute = () => {
    return selectCategory ? `/themes-or-levels` : "#";
  };

  // Konversi status API ke status UI
  const getUIStatus = (apiStatus) => {
    // Jika perlu mapping status dari API ke tampilan UI
    switch (apiStatus) {
      case "active":
        return "Aktif";
      case "pending":
        return "Sedang Dikerjakan";
      case "completed":
        return "Tuntas";
      default:
        return apiStatus;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center mr-20">
        <div
          onClick={() => navigate(-1)}
          className="flex flex-col gap-3 mt-5 px-5 text-lg mb-8"
        >
          <FaArrowLeft />
          <h1 className="font-semibold text-xl">
            {description_short ? description_short : "Deskripsi belum tersedia"}
          </h1>
        </div>

        <IoSearch
          className="text-2xl -mt-[43px] cursor-pointer"
          onClick={() => setIsSearchActive((prev) => !prev)}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col p-5 -mt-7">
        {isSearchActive && (
          <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mb-5">
            <input
              type="text"
              placeholder="Cari level belajar..."
              className="bg-transparent w-full pl-10 rounded-xl outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoSearch className="absolute left-3 text-xl text-gray-500" />
          </div>
        )}
        <h2 className="text-lg font-[500]">
          Tersedia {sortedCategories.length} kelas
        </h2>
        <div className="flex gap-3 justify-between items-center mt-3">
          <p className="text-sm font-normal flex items-center">
            Urutkan berdasarkan:
          </p>
          <div className="border border-gray-200 rounded-xl p-2 flex items-center">
            <select
              className="bg-transparent outline-none text-sm px-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Abjad Minimalis">Abjad Minimalis</option>
              <option value="Abjad Informatif">Abjad Informatif</option>
              <option value="Kelas Terbaru">Kelas Terbaru</option>
            </select>
          </div>
        </div>

        {status === "loading" && (
          <p className="text-center py-4">Memuat data...</p>
        )}
        {status === "failed" && (
          <p className="text-center py-4 text-red-500">Gagal memuat data</p>
        )}

        <form action="" className="mt-5">
          <div className="flex flex-col">
            {sortedCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleSelectCategory(category.id)}
                className={`flex flex-col w-full text-md text-left 
                ${
                  category.status === "completed"
                    ? sortBy === "Abjad Minimalis"
                      ? "bg-none "
                      : "bg-yellow-300"
                    : ""
                } 
                rounded-xl p-3 border-[2px] mb-4  
                ${getButtonClassListCategory(selectCategory === category.id)}`}
              >
                {/* Header Kategori */}
                <div className="flex justify-between items-center w-full">
                  <h5 className="flex items-center gap-2">
                    <span className="text-sm font-normal">{category.name}</span>
                    {/* Label Status */}
                    {category.status && (
                      <span
                        className={`text-xs ${
                          sortBy === "Abjad Minimalis" ? "hidden" : ""
                        } font-normal px-2 py-1 rounded-lg ${
                          category.status === "active"
                            ? "bg-[#28A745] text-white"
                            : category.status === "pending"
                            ? "bg-gray-200 text-gray-600"
                            : category.status === "completed"
                            ? "bg-[#0961F5] text-white"
                            : ""
                        }`}
                      >
                        {getUIStatus(category.status)}
                      </span>
                    )}
                  </h5>

                  {/* Ikon info di ujung kanan */}
                  <MdOutlineError
                    onClick={(e) => handleIconClick(category.id, e)}
                    className={`${getIconColorAlert()} ${
                      selectCategory === category.id ? "text-[#FFF]" : ""
                    }`}
                  />
                </div>

                {/* Level Informasi */}
                <h5
                  className={`text-xs mt-1 text-[#777] ${
                    selectCategory === category.id ? "text-white" : ""
                  } `}
                >
                  {category.total_subcategories || 0} level
                </h5>
              </button>
            ))}
          </div>

          {sortedCategories.length === 0 && status === "succeeded" && (
            <p className="text-center py-4">
              Tidak ada kategori yang tersedia untuk tingkat kesulitan ini
            </p>
          )}

          <div className="flex flex-col justify-center w-full mt-[20px]">
            <Link to={"/accordion-dasar-islam"}>
              <h3 className="text-sm text-center mb-5">
                Ada yang ingin ditanyakan?
              </h3>
            </Link>
            <Link
              to={selectCategory ? selectRoute() : "#"}
              onClick={(e) => {
                if (!selectCategory) {
                  e.preventDefault();
                  alert("Silakan pilih kategori terlebih dahulu!");
                }
              }}
            >
              <button
                type="button"
                className={`p-3 w-[340px] -mt-2 rounded-xl ${
                  selectCategory
                    ? `${getButtonClass()} border-none`
                    : "bg-[#DCE6F8] text-[#0961F5] border-none"
                }`}
                disabled={!selectCategory}
              >
                Lanjutkan
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* Modal handling - perlu disesuaikan dengan kategori dinamis */}
      {activeModal && (
        <>
          {activeModal === 1 && (
            <ModalKeimanan isOpen={true} onClose={handleCloseModal} />
          )}
          {activeModal === 2 && (
            <ModalIbadah isOpen={true} onClose={handleCloseModal} />
          )}
          {activeModal === 3 && (
            <ModalAkhlak isOpen={true} onClose={handleCloseModal} />
          )}
          {activeModal === 4 && (
            <ModalMuamalah isOpen={true} onClose={handleCloseModal} />
          )}
          {activeModal === 5 && (
            <ModalSejarah isOpen={true} onClose={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
};

export default ListCategories;

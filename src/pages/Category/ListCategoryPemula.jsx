import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import ModalKeimanan from "../../components/ModalListCategory/ModalKeimanan";
import ModalIbadah from "../../components/ModalListCategory/ModalIbadah";
import ModalAkhlak from "../../components/ModalListCategory/ModalAkhlak";
import ModalMuamalah from "../../components/ModalListCategory/ModalMuamalah";
import ModalSejarah from "../../components/ModalListCategory/ModalSejarah";
import { IoSearch } from "react-icons/io5";

const ListCategoryPemula = () => {
  const {
    getButtonClassListCategory,
    getButtonClass,
    getIconTheme,
    getIconColorAlert,
  } = useTheme();
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory || null;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const handleSelectCategory = (categoryId) => {
    setSelectCategory(categoryId);
  };

  const handleIconClick = (categoryId) => {
    console.log("Icon clicked for category:", categoryId);
    setActiveModal(categoryId);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setActiveModal(null);
  };

  const categoryPemula = [
    { id: 1, category: "Keimanan", route: "/list-level-keimanan", level: 2 },
    { id: 2, category: "Ibadah", route: "/page", level: 4, status: "Update" },
    { id: 3, category: "Akhlak", route: "/page", level: 10, status: "Baru" },
    {
      id: 4,
      category: "Muamalah",
      route: "/page",
      level: " 9 ",
      status: "Sedang Dikerjakan",
    },
    {
      id: 5,
      category: "Sejarah Nabi Muhammad",
      route: "/page",
      level: "2 tema terselesaikan",
      status: "Tuntas",
    },
  ];
  const [sortBy, setSortBy] = useState("Abjad Minimalis");

  const sortedCategories = [...categoryPemula].sort((a, b) => {
    if (sortBy === "Abjad Minimalis")
      return a.category.localeCompare(b.category);
    if (sortBy === "Abjad Informatif")
      return (b.status || "").localeCompare(a.status || "");
    if (sortBy === "Kelas Terbaru") return b.id - a.id; // Misal ID terbesar adalah kelas terbaru
    return 0;
  });

  const selectRoute = () => {
    const selectedCategory = categoryPemula.find(
      (category) => category.id === selectCategory
    );
    return selectedCategory ? selectedCategory.route : null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center mr-20">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 mt-5 px-5 text-lg mb-8"
        >
          <FaArrowLeft />
          <h1 className="font-semibold text-xl">Materi dasar Islam</h1>
        </div>

        <IoSearch
          className="text-2xl -mt-4 cursor-pointer"
          onClick={() => setIsSearchActive((prev) => !prev)} // Toggle input search
        />
      </div>

      {/* Main Contect */}
      <div className="flex flex-col p-5 -mt-7">
        {isSearchActive && (
          <div className="relative flex items-center w-full bg-[#EEEEEE] border border-gray-300 rounded-xl p-2 mb-5">
            <input
              type="text"
              placeholder="Cari level belajar..."
              className="bg-transparent w-full pl-10 rounded-xl outline-none"
            />
            <IoSearch className="absolute left-3 text-xl text-gray-500" />
          </div>
        )}
        <h2 className="text-lg font-[500]">Tersedian 7 kelas</h2>
        <div className="flex gap-3 justify-between items-center mt-3">
          <p className="text-sm   font-normal flex items-center">
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
        <form action="" className="  mt-5">
          <div className="flex flex-col">
            {sortedCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleSelectCategory(category.id)}
                className={`flex flex-col w-full text-md text-left 
  ${
    category.status === "Tuntas"
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
                    <span className="text-sm font-normal">
                      {category.category}
                    </span>
                    {/* Label Status */}
                    {category.status && (
                      <span
                        className={`text-xs  ${
                          sortBy === "Abjad Minimalis" ? "hidden" : ""
                        } font-normal px-2 py-1 rounded-lg ${
                          category.status === "Baru"
                            ? "bg-[#F59D09] text-white"
                            : category.status === "Update"
                            ? "bg-[#28A745] text-white"
                            : category.status === "Sedang Dikerjakan"
                            ? "bg-gray-200 text-gray-600"
                            : category.status === "Tuntas"
                            ? "bg-[#0961F5] text-white"
                            : ""
                        }`}
                      >
                        {category.status}
                      </span>
                    )}
                  </h5>

                  {/* Ikon info di ujung kanan */}
                  <MdOutlineError
                    onClick={() => handleIconClick(category.id)}
                    className={`${getIconColorAlert()} ${
                      selectCategory === category.id ? "text-[#FFF]" : ""
                    }`}
                  />
                </div>

                {/* Level Informasi */}
                <h5 className={`text-xs mt-1  text-[#777]`}>
                  {category.level} level
                </h5>
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-center w-full mt-[20px] ">
            <Link to={"/accordion-dasar-islam"}>
              <h3 className="text-sm text-center mb-5">
                Ada yang ingin ditanyakan?
              </h3>
            </Link>
            <Link
              to={
                selectCategory
                  ? {
                      pathname: selectRoute(),
                      state: { categoryId: selectCategory },
                    }
                  : "#"
              }
            >
              <button
                type="button"
                className={`p-3 w-[340px] -mt-2 rounded-xl  ${
                  selectCategory
                    ? `${getButtonClass()} border-none`
                    : `bg-[#DCE6F8] text-[#0961F5] border-none`
                }`}
                disabled={!selectCategory}
              >
                Lanjutkan
              </button>
            </Link>
          </div>
        </form>
      </div>
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
    </div>
  );
};

export default ListCategoryPemula;

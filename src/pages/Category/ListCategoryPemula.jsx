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

const ListCategoryPemula = () => {
  const { getButtonClassListCategory, getButtonClass, getIconTheme, getIconColorAlert } = useTheme();
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory || null;
  const [selectCategory, setSelectCategory] = useState(null);
const [activeModal, setActiveModal] = useState(null);
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
    { id: 1, category: "Keimanan", route: "/list-level-keimanan" },
    { id: 2, category: "Ibadah", route: "/page" },
    { id: 3, category: "Akhlak", route: "/page" },
    { id: 4, category: "Muamalah", route: "/page" },
    { id: 5, category: "Sejarah", route: "/page" },
  ];

  const selectRoute = () => {
    const selectedCategory = categoryPemula.find(
      (category) => category.id === selectCategory
    );
    return selectedCategory ? selectedCategory.route : null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex gap-2 mt-5 mx-5 items-center">
        <Link to={"/pilih-category"}>
          <FaArrowLeft className="text-xl cursor-pointer items-center " />
        </Link>
        <h1 className="text-lg font-[600] items-center ">
          Materi Dasar Islam {selectedCategory}
        </h1>
      </div>
      <form action="" className="mx-5  mt-10">
        <div className="flex flex-col">
          {categoryPemula.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleSelectCategory(category.id)}
              className={` flex w-full text-md text-left rounded-xl p-3 border-[2px] mb-4 ${getButtonClassListCategory(
                selectCategory === category.id
              )}`}
            >
              {category.category}
              <MdOutlineError
                onClick={() => handleIconClick(category.id)}
                className={`ml-auto ${getIconColorAlert()} ${
                  selectCategory === category.id ? "text-[#FFF]" : ""
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col justify-center w-full mt-[135px] ">
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

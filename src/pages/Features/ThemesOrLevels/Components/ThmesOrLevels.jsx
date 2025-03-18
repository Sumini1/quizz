import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { useTheme } from "../../../../context/ThemeContext";
import ModalLevel1 from "../Modal/ModalLevel1";
import ModalLevel2 from "../Modal/ModalLevel2";
import { useDispatch, useSelector } from "react-redux";
import { fetchThemesOrLevels } from "../Reducer/themesOrLevelsSlice";

const ThemesOrLevels = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getBorderColor, getIconColorAlert } = useTheme();
  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.themesOrLevels);
  const [activeModal, setActiveModal] = useState(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchThemesOrLevels());
    }
  }, [status, dispatch]);

  const handleIconClick = (categoryId, type) => {
    // Set both modal ID and type at once
    setActiveModal(categoryId);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalType(null);
  };

  return (
    <div className="flex flex-col h-screen md:justify-start md:items-start md:ml-10 md:py-10 gap-5">
      <div className="flex gap-2 items-center p-5">
        <FaArrowLeft
          className="text-xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-[600]">Level Keimanan</h1>
      </div>

      <div className="p-5 rounded-xl -mt-3 flex flex-col gap-5">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`p-4 flex flex-col gap-3 bg-[#FFF] rounded-xl shadow-md ${getBorderColor()}`}
          >
            <div className="flex justify-between items-center">
              <h2
                className="text-lg font-medium cursor-pointer"
                onClick={() => navigate(`/themes-or-levels/${item.id}`)}
              >
                {item.name}
              </h2>
              <MdOutlineError
                onClick={(e) => {
                  e.stopPropagation();
                  // Use alternating modal types based on index
                  const type = index % 2 === 0 ? "level1" : "level2";
                  handleIconClick(item.id, type);
                }}
                className={`${getIconColorAlert()} cursor-pointer`}
              />
            </div>

            <p className="text-base font-medium">{item.description_short}</p>
            <div className="flex items-center w-full mt-3 mb-2">
              <div className="h-2 w-1/5 bg-orange-500 rounded-l-xl p-2"></div>
              <div className="h-2 w-4/5 bg-[#EEEEEE] rounded-r-xl p-2"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Render modals based on activeModal and modalType */}
      {activeModal && modalType === "level1" && (
        <ModalLevel1
          isOpen={true}
          onClose={handleCloseModal}
          itemId={activeModal} // Pass the item ID to the modal if needed
        />
      )}

      {activeModal && modalType === "level2" && (
        <ModalLevel2
          isOpen={true}
          onClose={handleCloseModal}
          itemId={activeModal} // Pass the item ID to the modal if needed
        />
      )}
    </div>
  );
};

export default ThemesOrLevels;

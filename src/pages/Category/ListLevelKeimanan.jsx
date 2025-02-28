import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
import ModalKeimananLevel1 from "../../components/ModalListKeimanan/ModalKeimananLevel1";
import { useDispatch, useSelector } from "react-redux";
import { fetchThemesOrLevels } from "../../reducer/themesOrLevelsSlice";

const ListLevelKeimanan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getBorderColor, getIconColorAlert } = useTheme();
  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.themesOrLevels);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchThemesOrLevels());
    }
  }, [status, dispatch]);

  const handleIconClick = (categoryId) => {
    setActiveModal(categoryId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
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
        {data.map((item) => (
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
                  handleIconClick(item.id);
                }}
                className={`${getIconColorAlert()} cursor-pointer`}
              />
            </div>

            <p className="text-base font-medium">{item.description_short}</p>
            <div className="flex items-center w-full mt-3 mb-2">
              <div className="h-2 w-1/5 bg-orange-500 rounded-l-xl p-2"></div>
              <div className="h-2 w-4/5 bg-[#EEEEEE] rounded-r-xl p-2"></div>
            </div>
            {activeModal === item.id && (
              <ModalKeimananLevel1 isOpen={true} onClose={handleCloseModal} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListLevelKeimanan;

import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { PiNotebookBold } from "react-icons/pi";
import { MdLibraryBooks } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonMobileKotak from "../../components/Appearance/ButtonMobileKotak";
import ModalOverView from "../../components/Appearance/ModalOverView";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchThemesOrLevelsById } from "../../reducer/themesOrLevelsSlice";
import Wavify from "react-wavify";
import ModalNomorSatu from "../../components/Appearance/ModalNomorSatu";
import ModalEvaluasi from "../../components/Appearance/ModalEvaluasi";
import { TbGiftCardFilled } from "react-icons/tb";
import ModalBonus from "../../components/Appearance/ModalBonus";
import ModalUjianAkhir from "../../components/Appearance/ModalUjianAkhir";

const AppearanceKotak = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { getIconColor, getBorder, getKotakStyle, theme } = useTheme();
  const [selectedKotak, setSelectedKotak] = useState(null);
  const [activeModal, setActiveModal] = useState(
    location.state?.returnToModal || null
  );
   const dispatch = useDispatch();
   const {detail} = useSelector((state) => state.themesOrLevels);
   const name = detail?.name || "Nama tidak tersedia";

   useEffect(() => {
    if (id) {
      dispatch(fetchThemesOrLevelsById(id));
    }
   }, [dispatch, id])
  const getBorderKotak = () => {
    return theme === "dark"
      ? "border-[#333]"
      : theme === "cupcake"
      ? "border-[#4B4B4B]"
      : theme === "bumblebee"
      ? "border-yellow-500"
      : theme === "lemonade"
      ? "border-[#027A7D]"
      : "border-[#0961F5]";
  };
  const closeModal = () => {
    setActiveModal(null); // Tutup modal
  };

  const [kotak, setKotak] = useState([
    {
      id: 1,
      no: "00",
      name: "Kumpulan Artikel",
      description: "Artikel yang ada di pembahasan keimanan tingkat pemula",
      value: [
        { id: 1, icon: <PiNotebookBold />, clicked: false },
        { id: 2, icon: <MdLibraryBooks />, clicked: false },
        { id: 3, icon: 1, clicked: false },
        { id: 4, icon: 2, clicked: false },
        { id: 5, icon: 3, clicked: false },
        { id: 6, icon: 4, clicked: false },
        { id: 7, icon: 5, clicked: false },
        { id: 8, icon: <TbGiftCardFilled />, clicked: false },
        { id: 9, icon: <MdLibraryBooks />, clicked: false },
        { id: 10, icon: <FaTrophy />, clicked: false },
      ],
    },

    {
      id: 2,
      no: "01",
      name: "Pengantar Rukun Iman",
      description: "Artikel yang ada di pembahasan keimanan tingkat pemula",
      value: [
        { id: 1, icon: <PiNotebookBold />, clicked: false },
        { id: 2, icon: <MdLibraryBooks />, clicked: false },
        { id: 3, icon: 1, clicked: false },
        { id: 4, icon: 2, clicked: false },
        { id: 5, icon: 3, clicked: false },
        { id: 6, icon: 4, clicked: false },
        { id: 7, icon: 5, clicked: false },
        { id: 8, icon: <TbGiftCardFilled />, clicked: false },
        { id: 9, icon: <MdLibraryBooks />, clicked: false },
        { id: 10, icon: <FaTrophy />, clicked: false },
      ],
    },
    {
      id: 3,
      no: "02",
      name: "Kumpulan Artikel",
      description: "Artikel yang ada di pembahasan keimanan tingkat pemula",
      value: [
        { id: 1, icon: <PiNotebookBold />, clicked: false },
        { id: 2, icon: <MdLibraryBooks />, clicked: false },
        { id: 3, icon: 1, clicked: false },
        { id: 4, icon: 2, clicked: false },
        { id: 5, icon: 3, clicked: false },
        { id: 6, icon: 4, clicked: false },
        { id: 7, icon: 5, clicked: false },
        { id: 8, icon: <TbGiftCardFilled />, clicked: false },
        { id: 9, icon: <MdLibraryBooks />, clicked: false },
        { id: 10, icon: <FaTrophy />, clicked: false },
      ],
    },
    {
      id: 4,
      no: "03",
      name: "Kumpulan Artikel",
      description: "Artikel yang ada di pembahasan keimanan tingkat pemula",
      value: [
        { id: 1, icon: <PiNotebookBold />, clicked: false },
        { id: 2, icon: <MdLibraryBooks />, clicked: false },
        { id: 3, icon: 1, clicked: false },
        { id: 4, icon: 2, clicked: false },
        { id: 5, icon: 3, clicked: false },
        { id: 6, icon: 4, clicked: false },
        { id: 7, icon: 5, clicked: false },
        { id: 8, icon: <TbGiftCardFilled />, clicked: false },
        { id: 9, icon: <MdLibraryBooks />, clicked: false },
        { id: 10, icon: <FaTrophy />, clicked: false },
      ],
    },
  ]);

  const handleKotakClick = (kotakId, index) => {
    setKotak((prevKotak) =>
      prevKotak.map((k) =>
        k.id === kotakId
          ? {
              ...k,
              value: k.value.map(
                (v, i) => (i === index ? { ...v, clicked: !v.clicked } : v) // Toggle clicked state
              ),
            }
          : k
      )
    );

    // Membuka modal hanya jika belum ada modal yang terbuka
    if (!activeModal) {
      if (kotakId === 1 && index === 0) {
        setActiveModal("ModalOverView");
      } else if (kotakId === 1 && index === 1) {
        // Navigasi dengan React Router
        navigate("/keterangan-artikel");
        return;
      } else if (kotakId === 1 && index === 2) {
        setActiveModal("ModalNomorSatu");
      } else if (kotakId === 1 && index === 4) {
        setActiveModal("ModalNomorTiga");
      } else if (kotakId === 1 && index === 7) {
        setActiveModal("ModalBonus");
      } else if (kotakId === 1 && index === 8) {
        setActiveModal("ModalEvaluasi");
      } else if (kotakId === 1 && index === 9) {
        setActiveModal("ModalUjianAkhir");
      } else {
        setSelectedKotak(kotakId);
      }
    }
  };

  return (
    <>
      <div className="justify-center p-4 min-h-screen">
        <h1 className="text-xl font-semibold p-3 -mt-2 mb-7 mx-auto flex flex-col">
          {name}
        </h1>
        {kotak.map((k) => (
          <div
            key={k.id}
            className="flex mb-10 cursor-pointer mt-4 justify-center   items-center"
          >
            <div
              className={`flex flex-col border rounded-lg w-full h-full ${getBorderKotak()}`}
            >
              {/* Nomor dan Nama */}
              <div className="relative">
                <div className="flex items-center w-full">
                  <div
                    className={`flex items-center justify-center border  bg-white rounded-full px-4 py-2 -mt-4 ${getBorderKotak()}`}
                  >
                    <span className="font-semibold text-md mr-1">{k.no}.</span>
                    <span className="font-semibold text-md">{k.name}</span>
                  </div>
                  <div
                  // className={`border-t flex-grow -mt-5 ${getBorderKotak()}`}
                  />
                </div>
              </div>

              {/* Deskripsi */}
              <div className="p-3">
                <p className="text-base font-normal">{k.description}</p>

                {/* Kotak */}
                <div
                  className={`grid grid-cols-5 gap-2 gap-y-5 p-1 mt-3 rounded-md`}
                >
                  {k.value.map((v, i) => (
                    <div
                      key={i}
                      onClick={() => handleKotakClick(k.id, i)}
                      className={`w-[60px] h-[60px] p-1 flex items-center justify-center rounded-md transition-all duration-200 ${getKotakStyle(
                        v.clicked
                      )}`}
                    >
                      <span
                        className={`text-xl font-[400] ${getIconColor(
                          v.clicked
                        )}`}
                      >
                        {v.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Buka tutup Modal sesuai Pilihan */}
        {activeModal === "ModalOverView" && (
          <ModalOverView isOpen={true} onClose={closeModal} />
        )}
        {/* {activeModal === "ModalArticle" && (
          <ModalArticle isOpen={true} onClose={closeModal} />
        )} */}
        {activeModal === "ModalNomorSatu" && (
          <ModalNomorSatu isOpen={true} onClose={closeModal} />
        )}
        {/* Modals lainnya */}
        {/* {activeModal === "ModalNomorTiga" && (
          <ModalNomorTiga isOpen={true} onClose={closeModal} />
        )} */}
        {activeModal === "ModalBonus" && (
          <ModalBonus isOpen={true} onClose={closeModal} />
        )}
        {activeModal === "ModalEvaluasi" && (
          <ModalEvaluasi isOpen={true} onClose={closeModal} />
        )}
        {activeModal === "ModalUjianAkhir" && (
          <ModalUjianAkhir isOpen={true} onClose={closeModal} />
        )}
      </div>
      <ButtonMobileKotak className="sticky bottom-0 w-full " />
    </>
  );
};

export default AppearanceKotak;

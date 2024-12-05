import React, { useState } from "react";
import { BiSolidCommentError } from "react-icons/bi";
import ModalCategory from "./ModalCategory";
import { Link } from "react-router-dom";

const PilihCategory = () => {
  const [modalCategoryOpen, setModalCategoryOpen] = useState(false);

  const handleModalCategoryOpen = () => {
    setModalCategoryOpen(true);
  };

  const handleModalCategoryClose = () => {
    setModalCategoryOpen(false);
  };

  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold mt-5 mb-10">
          Pilih tingkatan yang sesuai untukmu
        </h1>
      </div>
      <div>
        {/* Section gambar */}
        <div className="flex gap-5 rounded-lg">
          <div className="shadow-lg p-3 rounded-lg relative">
            <Link to="/menu-category">
              <div>
                <img
                  src="/buku.jpeg"
                  alt="Dasar Islam"
                  className="mb-3 mt-2 rounded-lg w-full"
                />
                <h1>Dasar Islam</h1>
                <p className="text-sm mt-1">Mengenal islam lebih dekat</p>
              </div>
            </Link>
            <BiSolidCommentError
              onClick={handleModalCategoryOpen}
              className="ml-32 cursor-pointer"
            />
          </div>
          <div className="shadow-lg p-3 rounded-lg relative">
            <img
              src="/buku.jpeg"
              alt="Dasar Islam"
              className="mb-3 mt-2 rounded-lg w-full"
            />
            <h1>Dasar Islam</h1>
            <p className="text-sm mt-1">Mengenal islam lebih dekat</p>
            <BiSolidCommentError className="ml-32 cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-5 rounded-lg  relative ">
          <div className="shadow-lg p-3 rounded-lg">
            <Link to="/menu-category">
              <div>
                <img
                  src="/buku.jpeg"
                  alt="Dasar Islam"
                  className="mb-3 mt-2 rounded-lg w-full"
                />
                <h1>Dasar Islam</h1>
                <p className="text-sm mt-1">Mengenal islam lebih dekat</p>
              </div>
            </Link>

            <BiSolidCommentError
              onClick={handleModalCategoryOpen}
              className="ml-32 cursor-pointer"
            />
          </div>
          <div className="shadow-lg p-3 rounded-lg relative">
            <img
              src="/buku.jpeg"
              alt="Dasar Islam"
              className="mb-3 mt-2 rounded-lg w-full"
            />
            <h1>Dasar Islam</h1>
            <p className="text-sm mt-1">Mengenal islam lebih dekat</p>
            <BiSolidCommentError className="ml-32 cursor-pointer" />
          </div>
        </div>
        <button className="bg-purple-700 text-white flex p-2 rounded-md w-full items-center justify-center mt-10">
          Lanjutkan
        </button>
        <p className="text-sm mt-5 justify-center items-center flex">
          Ada yang ingin ditanyakan?
        </p>
      </div>
      {/* Komponen Modal */}
      <ModalCategory
        isOpen={modalCategoryOpen}
        onClose={handleModalCategoryClose}
      />
    </div>
  );
};

export default PilihCategory;

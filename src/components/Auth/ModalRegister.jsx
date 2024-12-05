import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import ModalLogin from "./ModalLogin";


const ModalRegister = ({
  isModalRegisterOpen,
  setIsModalRegisterOpen,
  // isModalLoginOpen,
  setIsModalLoginOpen,
}) => {
  const handleClose = () => {
    setIsModalRegisterOpen(false);
  };

  const handleOpenLogin = () => {
    setIsModalRegisterOpen(false);
    setIsModalLoginOpen(true);
  };

  return (
    <>
      {/* Overlay */}
      {isModalRegisterOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
      )}

      {/* Modal */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden={!isModalRegisterOpen}
        className={`${
          isModalRegisterOpen ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5  rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Ahlan wa Sahlan
              </h3>

              <button
                type="button"
                onClick={handleClose}
                className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center "
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6 border-b">
              <p>Yuk, daftar dahulu sebelum belajar</p>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Nama
                  </label>
                  <div className="relative">
                    <FaUser className="absolute inset-y-0 left-3 text-gray-500 text-lg pointer-events-none mt-3" />
                    <input
                      type="name"
                      name="name"
                      id="name"
                      className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Namanya siapa ?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute inset-y-0 left-3 text-gray-500 text-lg pointer-events-none mt-3" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <RiLockPasswordFill className="absolute inset-y-0 left-3 text-gray-500 text-lg pointer-events-none mt-3" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="......."
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full text-white bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
                  >
                    Register
                  </button>
                  <p className="text-sm mt-5 items-center justify-center mx-auto text-center">
                    Atau Login dengan
                  </p>
                  <button
                    type="submit"
                    className="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
                  >
                    Google
                  </button>
                  <p className="text-sm mt-5 items-center justify-center mx-auto text-center">
                    Sudah punya akun?{" "}
                    <span className="text-green-700" onClick={handleOpenLogin}>
                      Login
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ModalLogin
          // isModalLoginOpen={isModalLoginOpen}
          setIsModalLoginOpen={setIsModalLoginOpen}
        />
      </div>
    </>
  );
};

export default ModalRegister;

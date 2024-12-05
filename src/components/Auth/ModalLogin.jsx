import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import ForgotPassword from "./ForgotPassword";

const ModalLogin = ({ isModalLoginOpen, setIsModalLoginOpen }) => {
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleClose = () => {
    setIsModalLoginOpen(false);
    setForgotPassword(false);
  };

  return (
    <>
      {/* Overlay */}
      {isModalLoginOpen && !forgotPassword && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
      )}

      {/* Modal Login */}
      {isModalLoginOpen && !forgotPassword && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden={!isModalLoginOpen}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ahlan wa Sahlan
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6 border-b">
                <p>Yuk, login dahulu sebelum belajar</p>
              </div>
              <div className="p-4">
                <form className="space-y-4">
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
                        className="pl-10 bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
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
                        className="pl-10 bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                        placeholder="......."
                        required
                      />
                      <p
                        className="text-sm text-end text-green-700 cursor-pointer"
                        onClick={handleForgotPassword}
                      >
                        Lupa Password?
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-violet-700 text-white rounded-lg px-5 py-2.5"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Forgot Password */}
      <ForgotPassword
        forgotPassword={forgotPassword}
        setForgotPassword={setForgotPassword}
      />
    </>
  );
};

export default ModalLogin;

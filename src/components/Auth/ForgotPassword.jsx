import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import VerifikasiPassword from "./VerifikasiPassword";

const ForgotPassword = ({ forgotPassword, setForgotPassword }) => {
  const [verifikasiPassword, setVerifikasiPassword] = useState(false);

  const handleVerifikasiPassword = () => {
    setVerifikasiPassword(true);
  };

  const handleClose = () => {
    setForgotPassword(false);
  };

  return (
    <>
      {/* Overlay */}
      {forgotPassword && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
      )}

      {/* Modal */}
      <div
        id="forgot-password-modal"
        tabIndex="-1"
        aria-hidden={!forgotPassword}
        className={`${
          forgotPassword ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="bg-white rounded-lg shadow">
            <div className="flex justify-between p-4">
              <div className="flex gap-3">
                <FaArrowLeftLong className="mt-1" />
                <h3 className="text-md font-semibold">Reset Password</h3>
              </div>

              <button
                onClick={handleClose}
                className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2 font-semibold"
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
            <div className="border-b">
              <p className=" p-6">Insya Allah, kami bantu pemulihan akun</p>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
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
                  <button
                    onClick={handleVerifikasiPassword}
                    type="submit"
                    className="w-full bg-violet-700 text-white rounded-lg px-5 py-2.5"
                  >
                    Reset Password
                  </button>
                  <p className="text-sm text-center py-10">
                    Lupa Email?{" "}
                    <span className="text-green-700">Kontak Kami</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <VerifikasiPassword
          verifikasiPassword={verifikasiPassword}
          setVerifikasiPassword={setVerifikasiPassword}
        />
      </div>
    </>
  );
};

export default ForgotPassword;

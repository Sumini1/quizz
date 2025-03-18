// import React, { useState, useEffect } from "react";
// import { useTheme } from "../../context/ThemeContext";
// import { FaArrowLeft } from "react-icons/fa6";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { Link, useNavigate } from "react-router-dom";
// import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
// import { HiUserCircle } from "react-icons/hi";
// import { MdEmail, MdPhone } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";

// const ForgotPassword = () => {
//   const { getBorder, getButtonClass, getThemeClass, getIconTheme } = useTheme();
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   // Set overflow:hidden hanya saat halaman ini aktif
//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "auto"; // Pulihkan scroll saat keluar dari halaman
//     };
//   }, []);

//   const handleVerifikasi = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       navigate("/verifikasi-email");
//     }, 2000);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex flex-col h-screen overflow-hidden justify-between">
//       {/* Header */}
//       <div className="flex items-center gap-3 mt-5 px-5">
//         <FaArrowLeft className="text-2xl cursor-pointer" />
//         <h1 className="text-lg font-semibold">Lupa Password</h1>
//       </div>

//       {/* Form Section */}
//       <div className="flex flex-col mx-5 mt-10 text-lg flex-grow">
//         <h2 className="font-semibold mb-5">
//           Insya Allah, kami bantu pulihkan akun
//         </h2>
//         <p>Mohon tuliskan email yang terdaftar</p>
//         <form className="mt-5">
//           <div
//             className={`flex gap-2 items-center p-2 rounded-xl border-2 ${getBorder()}`}
//           >
//             <MdEmail />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full focus:outline-none"
//             />
//           </div>
//         </form>
//       </div>

//       {/* Footer Section */}
//       <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-md flex flex-col items-center">
//         <p className="mb-3 text-center">
//           Mau mencoba login?
//           <Link to="/login" className="text-blue-600 mx-2">
//             Login
//           </Link>
//         </p>
//         <button
//           onClick={handleVerifikasi}
//           className={`p-4 w-full border-none ${getButtonClass()}`}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <FiLoader className="animate-spin inline-block mr-2" />
//           ) : (
//             "Lanjutkan"
//           )}
//         </button>
//       </div>

//       {/* Modal Spinner */}
//       {isLoading && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4">
//             <HiUserCircle
//               className={`${getThemeClass()} text-5xl border-none rounded-full`}
//             />
//             <p className="text-lg font-semibold">Mohon tunggu...</p>
//             <p className="text-sm text-gray-500">Sedang memproses verifikasi</p>
//             <FiLoader
//               style={{ animation: "spin 2s linear infinite" }}
//               className={`text-4xl ${getIconTheme()}`}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState, useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setForgotPasswordData } from "../Reducer/forgotPasswordSlice";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const {
    getBorder,
    getButtonClass,
    getTextTitle,
    getThemeClass,
    getIconTheme,
  } = useTheme();

  const [formData, setFormData] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.forgotPassword);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email) {
      Swal.fire("Error", "Email harus diisi!", "error");
      return false;
    }

    return true;
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simpan data registrasi ke Redux store untuk digunakan di halaman berikutnya
    dispatch(
      setForgotPasswordData({
        email: formData.email,
      })
    );

    // Navigasi ke halaman pertanyaan keamanan
    navigate("/pertanyaan-keamanan");
  };

  return (
    <div className="flex flex-col  min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mt-5 px-5">
        <FaArrowLeft className="text-2xl cursor-pointer" />
        <h1 className="text-xl font-semibold">Lupa Password</h1>
      </div>

      <div className="p-5 flex flex-col">
        <h2 className="text-xl font-medium mt-10">
          Insya Allah kami bantu pemulihan akun
        </h2>
        <p className="mb-7 text-lg font-medium mt-20">
          Mohon tuliskan Email terdaftar
        </p>
        <form onSubmit={handleContinue} className="flex flex-col gap-5 w-full">
          {/* Email Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 ${getBorder()} bg-transparent`}
          >
            <MdEmail className="mx-1" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-grow p-2 text-sm bg-transparent rounded-xl outline-none"
            />
          </div>
          {/* Login Link and Submit Button */}
          <div className="fixed left-5 right-5 bottom-5 items-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`p-3 w-full mt-2 border-none rounded-xl ${getButtonClass()}`}
            >
              {isLoading ? (
                <FiLoader className="animate-spin inline-block mr-2" />
              ) : (
                "Lanjutkan"
              )}
            </button>
            <p className="flex justify-center mt-2">
              Sudah memiliki akun?{" "}
              <span
                className="underline cursor-pointer text-[#2F80ED] mx-2"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* Loading Modal */}
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4">
            <HiBadgeCheck
              className={`${getIconTheme()} text-5xl border-none rounded-full`}
            />
            <p className="text-lg font-semibold">Mohon tunggu...</p>
            <p className="text-sm text-gray-500">Sedang memproses verifikasi</p>
            <FiLoader
              style={{ animation: "spin 2s linear infinite" }}
              className={`text-4xl ${getIconTheme()}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

import React, { useState, useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";
import { FaUserAlt } from "react-icons/fa";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterData } from "../Reducer/registerSlice";
import Swal from "sweetalert2";

const RegisterEmail = () => {
  const {
    getBorder,
    getButtonClass,
    getTextTitle,
    getThemeClass,
    getIconTheme,
  } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Track which fields are focused or filled
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.register);
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

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setFocusedFields((prev) => ({
      ...prev,
      [field]: formData[field] !== "",
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      Swal.fire("Error", "Semua field harus diisi!", "error");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire(
        "Error",
        "Password dan konfirmasi password tidak cocok!",
        "error"
      );
      return false;
    }

    return true;
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simpan data registrasi ke Redux store untuk digunakan di halaman berikutnya
    dispatch(
      setRegisterData({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );

    // Navigasi ke halaman pertanyaan keamanan
    navigate("/security-question");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center relative px-5 min-h-screen">
      <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

      <div className="mt-20 flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Daftar dengan Email</h2>
        <p className="text-md mb-5">
          Untuk proses lebih lanjut mohon lengkapi data berikut
        </p>

        <form onSubmit={handleContinue} className="flex flex-col gap-5 w-full">
          {/* Name Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} bg-transparent`}
          >
            <FaUserAlt className="mx-1" />

            <div className="flex-grow relative">
              <label
                className={`absolute text-sm transition-all duration-200 ${
                  focusedFields.name
                    ? "-top-5 left-0 text-xs text-blue-500 bg-white px-1"
                    : "top-2 left-2 text-gray-500"
                }`}
              >
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
              />
            </div>
          </div>

          {/* Email Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} bg-transparent`}
          >
            <MdEmail className="mx-1" />

            <div className="flex-grow relative">
              <label
                className={`absolute text-sm transition-all duration-200 ${
                  focusedFields.email
                    ? "-top-5 left-0 text-xs text-blue-500 bg-white px-1"
                    : "top-2 left-2 text-gray-500"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
              />
            </div>
          </div>

          {/* Password Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} bg-transparent`}
          >
            <RiLockPasswordFill className="mx-1" />

            <div className="flex-grow relative">
              <label
                className={`absolute text-sm transition-all duration-200 ${
                  focusedFields.password
                    ? "-top-3 left-0 text-xs text-blue-500 bg-white px-1"
                    : "top-2 left-2 text-gray-500"
                }`}
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
              />
            </div>

            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <FiEyeOff className="text-lg" />
              ) : (
                <FiEye className="text-lg" />
              )}
            </div>
          </div>

          {/* Confirm Password Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} bg-transparent`}
          >
            <RiLockPasswordFill className="mx-1" />

            <div className="flex-grow relative">
              <label
                className={`absolute text-sm transition-all duration-200 ${
                  focusedFields.confirmPassword
                    ? "-top-3 left-0 text-xs text-blue-500 bg-white px-1"
                    : "top-2 left-2 text-gray-500"
                }`}
              >
                Konfirmasi Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => handleFocus("confirmPassword")}
                onBlur={() => handleBlur("confirmPassword")}
                className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
              />
            </div>

            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <FiEyeOff className="text-lg" />
              ) : (
                <FiEye className="text-lg" />
              )}
            </div>
          </div>

          {/* Login Link and Submit Button */}
          <div className="mt-5 flex flex-col items-center">
            <p className="flex justify-center">
              Sudah memiliki akun?{" "}
              <span
                className="underline cursor-pointer text-[#2F80ED] mx-2"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
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

export default RegisterEmail;

import React, { useState, useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
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
    middleTheme,
  } = useTheme();

  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Track which fields are focused or filled
  const [focusedFields, setFocusedFields] = useState({
    user_name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
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

    // Validate field on blur
    validateField(field, formData[field]);
  };

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "user_name":
        if (!value) error = "Username tidak boleh kosong";
        else if (value.length < 3) error = "Username minimal 3 karakter";
        break;
      case "email":
        if (!value) error = "Email tidak boleh kosong";
        else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) error = "Format email tidak valid";
        }
        break;
      case "password":
        if (!value) error = "Password tidak boleh kosong";
        else if (value.length < 6) error = "Password minimal 6 karakter";
        break;
      case "confirmPassword":
        if (!value) error = "Konfirmasi password tidak boleh kosong";
        else if (value !== formData.password) error = "Password tidak cocok";
        break;
      default:
        break;
    }

    setFormErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return !error;
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach((field) => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // Simpan data registrasi ke Redux store untuk digunakan di halaman berikutnya
    dispatch(
      setRegisterData({
        name: formData.user_name, // Change user_name to name to match with SecurityQuestion
        email: formData.email,
        password: formData.password,
      })
    );

    // Navigasi ke halaman pertanyaan keamanan
    navigate("/security-question");
    setIsSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <div
        className={`w-full max-w-md mx-auto h-screen overflow-y-auto flex flex-col md:${middleTheme()} p-5`}
      >
        <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

        <div className="mt-20 md:mt-32 flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Daftar dengan Email</h2>
          <p className="text-md mb-5">
            Untuk proses lebih lanjut mohon lengkapi data berikut
          </p>

          <form
            onSubmit={handleContinue}
            className="flex flex-col gap-5 w-full"
          >
            {/* Name Input */}
            <div
              className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} 
              ${formErrors.user_name ? "border-red-500" : ""} bg-transparent`}
            >
              <FaUserAlt className="mx-1" />

              <div className="flex-grow relative">
                <label
                  className={`absolute text-sm transition-all duration-200 ${
                    focusedFields.user_name
                      ? "-top-5 left-0 text-xs text-blue-500 bg-white px-1"
                      : "top-2 left-2 text-gray-500"
                  } ${formErrors.user_name ? "text-red-500" : ""}`}
                >
                  Username
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("user_name")}
                  onBlur={() => handleBlur("user_name")}
                  className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
                />
              </div>
            </div>
            {formErrors.user_name && (
              <p className="text-red-500 text-xs -mt-4 ml-2">
                {formErrors.user_name}
              </p>
            )}

            {/* Email Input */}
            <div
              className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} 
              ${formErrors.email ? "border-red-500" : ""} bg-transparent`}
            >
              <MdEmail className="mx-1" />

              <div className="flex-grow relative">
                <label
                  className={`absolute text-sm transition-all duration-200 ${
                    focusedFields.email
                      ? "-top-5 left-0 text-xs text-blue-500 bg-white px-1"
                      : "top-2 left-2 text-gray-500"
                  } ${formErrors.email ? "text-red-500" : ""}`}
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
            {formErrors.email && (
              <p className="text-red-500 text-xs -mt-4 ml-2">
                {formErrors.email}
              </p>
            )}

            {/* Password Input */}
            <div
              className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} 
              ${formErrors.password ? "border-red-500" : ""} bg-transparent`}
            >
              <RiLockPasswordFill className="mx-1" />

              <div className="flex-grow relative">
                <label
                  className={`absolute text-sm transition-all duration-200 ${
                    focusedFields.password
                      ? "-top-3 left-0 text-xs text-blue-500 bg-white px-1"
                      : "top-2 left-2 text-gray-500"
                  } ${formErrors.password ? "text-red-500" : ""}`}
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
            {formErrors.password && (
              <p className="text-red-500 text-xs -mt-4 ml-2">
                {formErrors.password}
              </p>
            )}

            {/* Confirm Password Input */}
            <div
              className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()} 
              ${
                formErrors.confirmPassword ? "border-red-500" : ""
              } bg-transparent`}
            >
              <RiLockPasswordFill className="mx-1" />

              <div className="flex-grow relative">
                <label
                  className={`absolute text-sm transition-all duration-200 ${
                    focusedFields.confirmPassword
                      ? "-top-3 left-0 text-xs text-blue-500 bg-white px-1"
                      : "top-2 left-2 text-gray-500"
                  } ${formErrors.confirmPassword ? "text-red-500" : ""}`}
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
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-xs -mt-4 ml-2">
                {formErrors.confirmPassword}
              </p>
            )}

            {/* Login Link and Submit Button */}
            <div className="mt-10 flex flex-col items-center sticky md:mt-32 left-0 bottom-5">
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
                disabled={isLoading || isSubmitting}
                className={`p-3 w-full mt-2 border-none rounded-xl ${getButtonClass()} `}
              >
                {isLoading || isSubmitting ? (
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-md flex flex-col items-center gap-4">
              <HiBadgeCheck
                className={`${getIconTheme()} text-5xl border-none rounded-full`}
              />
              <p className="text-lg font-semibold">Mohon tunggu...</p>
              <p className="text-sm text-gray-500">
                Sedang memproses verifikasi
              </p>
              <FiLoader
                style={{ animation: "spin 2s linear infinite" }}
                className={`text-4xl ${getIconTheme()}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterEmail;

import React, { useState, useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaUserAlt } from "react-icons/fa";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { HiBadgeCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../reducer/registerSlice";
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
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.register);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
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
    if (!formData.email || !formData.password) {
      Swal.fire("Error", "Email dan password harus diisi!", "error");
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

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Only pass email and password to the API
      await dispatch(
        fetchRegister({
          email: formData.email,
          password: formData.password,
        })
      ).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Register error");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center h-screen overflow-hidden relative px-5">
      <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

      <div className="-mt-16 flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Daftar dengan Email</h2>
        <p className="text-md mb-5">
          Untuk proses lebih lanjut mohon lengkapi data berikut
        </p>

        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-5 w-full -mt-2"
        >
          {/* Name Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 ${getBorder()}`}
            style={{ backgroundColor: "transparent" }}
          >
            <FaUserAlt className="mx-1" />
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              className="flex-grow text-sm p-2 bg-transparent rounded-xl outline-none"
            />
          </div>

          {/* Email Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 ${getBorder()}`}
            style={{ backgroundColor: "transparent" }}
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

          {/* Phone Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 ${getBorder()}`}
            style={{ backgroundColor: "transparent" }}
          >
            <MdPhone className="mx-2" />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Nomor Telepon"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="flex-grow p-2 bg-transparent text-sm rounded-xl outline-none"
            />
          </div>

          {/* Password Input */}
          <div
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()}`}
            style={{ backgroundColor: "transparent" }}
          >
            <RiLockPasswordFill className="mx-1" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="flex-grow p-2 bg-transparent text-sm rounded-xl outline-none"
            />
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
            className={`flex gap-2 items-center border-2 rounded-xl p-2 relative ${getBorder()}`}
            style={{ backgroundColor: "transparent" }}
          >
            <RiLockPasswordFill className="mx-1" />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Konfirmasi Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="flex-grow p-2 bg-transparent text-sm rounded-xl outline-none"
            />
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

          <div className="fixed bottom-0 left-0 w-full bg-white p-5 shadow-md flex flex-col items-center">
            <p className="flex justify-center -mt-3">
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
                "Daftar"
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

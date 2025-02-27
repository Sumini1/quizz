// Login.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useDispatch } from "react-redux";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { fetchLogin } from "../../reducer/loginSlice";

const Login = () => {
  const { getBorder, getButtonClass, getBorderClass } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    setErrorMessage("Please fill in all fields.");
    return;
  }

  try {
    setErrorMessage(""); // Reset error message
    await dispatch(fetchLogin({ email, password })).unwrap();

    // Ambil jumlah login dari localStorage
    let loginCount = parseInt(localStorage.getItem("loginCount")) || 0;
    loginCount += 1; // Tambah 1 setiap kali login berhasil
    localStorage.setItem("loginCount", loginCount); // Simpan kembali ke localStorage

    if (loginCount >= 2) {
      navigate("/beranda"); // Arahkan ke halaman beranda jika sudah login 2 kali
    } else {
      navigate("/survei-satu"); // Arahkan ke survei-satu untuk pertama kali login
    }
  } catch (error) {
    if (error.message === "Email atau password salah") {
      setErrorMessage("Email atau password salah");
    } else {
      setErrorMessage("Login gagal");
    }
  }
};



  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
     const hasCompletedSurvey = localStorage.getItem("hasCompletedSurvey");

     if (hasCompletedSurvey) {
       navigate("/beranda"); // Jika survei sudah selesai, arahkan ke beranda
     }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center h-screen overflow-hidden relative px-5">
      <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

      <div className="flex flex-col mt-5">
        <h2 className="text-lg font-semibold mb-2 tracking-wide leading-[1.6]">
          Ahlan Wa Sahlan
        </h2>
        <p className="mb-7">
          Alhamdulillah bisa bertemu kembali, Login untuk melanjutkan
          pembelajaran
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full items-center"
        >
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <div
            className={`flex gap-2 items-center rounded-xl p-3 border-2 w-full ${getBorder()}`}
          >
            <MdEmail />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow p-1 rounded-md outline-none bg-transparent"
              required
            />
          </div>

          <div
            className={`flex gap-2 items-center rounded-xl p-3 relative border-2 w-full ${getBorder()}`}
          >
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow p-1 rounded-md outline-none bg-transparent"
              required
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <FiEyeOff className="text-xl" />
              ) : (
                <FiEye className="text-xl" />
              )}
            </div>
          </div>

          <Link to="/forgot-password">
            <p className="ml-[210px] text-sm -mt-4">Lupa Password?</p>
          </Link>

          <button
            type="submit"
            className={`p-4 w-full border-none rounded-xl ${getButtonClass()}`}
          >
            Login dengan Email
          </button>

          <div className="flex items-center gap-3 w-full">
            <hr className={`flex-grow border-[1px] ${getBorderClass()}`} />
            <span className="text-gray-500">Atau</span>
            <hr className={`flex-grow border-[1px] ${getBorderClass()}`} />
          </div>

          <button
            className={`p-4 w-full rounded-xl border-none border-gray-300 ${getBorderClass()}`}
          >
            Login dengan Google
          </button>

          <p className="text-center mt-5">
            Belum Punya Akun?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#2F80ED] underline"
            >
              Daftar Disini
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

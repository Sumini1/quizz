import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import { useDispatch } from "react-redux";
import { MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { fetchLogin } from "../Reducer/loginSlice";
import { FcGoogle } from "react-icons/fc";
import Button from "../../../components/ListButton/Button";

const Login = () => {
  const { getBorder, getButtonClass, getBorderClass, middleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  // Login dengan Google
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    if (!code || !state) {
      console.error("❌ Missing code or state parameter");
      return;
    }

    const storedState = localStorage.getItem("googleAuthState");
    if (state !== storedState) {
      console.error("❌ Invalid state parameter! Possible CSRF attack.");
      return;
    }

    fetch("https://quiz-fiber-production.up.railway.app/auth/google/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`Server error: ${data.error || response.status}`);
        }
        return data;
      })
      .then((data) => {
        if (data.token && data.user) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("🎉 Google Login Success:", data);
          navigate("/beranda");
        } else {
          console.error("❌ Failed to retrieve token or user data");
        }
      })
      .catch((error) => {
        console.error("❌ Google login error:", error.message);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Login dengan email
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { identifier, password } = formData;

    // Kirim login request ke Redux
    const resultAction = await dispatch(fetchLogin({ identifier, password }));

    if (fetchLogin.fulfilled.match(resultAction)) {
      console.log("✅ Login Response:", resultAction.payload);
      const { user, token } = resultAction.payload;

      if (user) {
        localStorage.setItem("id", user.id);
        localStorage.setItem("role", user.role);
        localStorage.setItem("token", token);

        let loginCount = parseInt(localStorage.getItem("loginCount")) || 0;
        loginCount++;
        localStorage.setItem("loginCount", loginCount);

        navigate(loginCount === 1 ? "/survei-satu" : "/beranda");
      } else {
        console.error("❌ Data user tidak ditemukan dalam response");
      }
    } else {
      console.error("❌ Login gagal atau response tidak sesuai");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Login dengan Google
  const handleLogin = () => {
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem("googleAuthState", state);

    window.location.href = `https://quiz-fiber-production.up.railway.app/auth/google?state=${state}`;
  };

  // Track which fields are focused or filled
  const [focusedFields, setFocusedFields] = useState({
    identifier: false,
    password: false,
  });

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

  return (
    <div className=" w-full  mx-auto h-screen overflow-hidden  md:p-0 flex flex-col">
      <div
        className={`flex flex-col justify-center h-screen px-5 max-w-md mx-auto md:${middleTheme()}`}
      >
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
            {/* Input Email / Username */}
            <div
              className={`flex gap-2 items-center rounded-xl p-3 border-2 w-full ${getBorder()} bg-transparent relative`}
            >
              <MdPerson className="mx-1" />
              <div className="flex-grow relative">
                <label
                  className={`absolute block text-sm transition-all duration-200 ${
                    focusedFields.identifier
                      ? `-top-6 left-0 text-xs text-blue-500 bg-white px-1`
                      : "top-2 left-2 text-gray-500"
                  }`}
                >
                  Email atau Username
                </label>
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  onFocus={() => handleFocus("identifier")}
                  onBlur={() => handleBlur("identifier")}
                  className="w-full text-sm p-1 bg-transparent rounded-xl outline-none"
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* Input Password */}
            <div
              className={`flex gap-2 items-center rounded-xl p-3 relative border-2 w-full ${getBorder()} bg-transparent`}
            >
              <RiLockPasswordFill className="mx-1" />
              <div className="flex-grow relative">
                <label
                  className={`absolute text-sm transition-all duration-200 ${
                    focusedFields.password
                      ? `-top-6 left-0 text-xs text-blue-500 bg-white px-1`
                      : "top-1 left-2 text-gray-500"
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
                  className="w-full text-sm p-1 bg-transparent rounded-xl outline-none"
                  placeholder=""
                  required
                />
              </div>
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

            <Link to="/forgot-password" className="self-end">
              <h5 className="text-sm underline text-[#0961F5]">
                Lupa Password?
              </h5>
            </Link>

            <Button type="submit" className={getButtonClass()}>
              Login dengan Email
            </Button>

            <div className="flex items-center gap-3 w-full">
              <hr className="flex-grow border-[1px] border-gray-500" />
              <span className="text-gray-500">Atau</span>
              <hr className="flex-grow border-[1px] border-gray-500" />
            </div>

            <div className="flex items-center w-full justify-end">
              <Button
                onClick={handleLogin}
                className={`${getBorderClass()}  flex items-center justify-center`}
              >
                <FcGoogle className="mr-2 text-xl" />
                Login dengan Google
              </Button>
            </div>

            <p className="text-center mt-5">
              Belum Punya Akun?{" "}
              <Link
                to="/login-register"
                className="font-semibold text-[#2F80ED] underline"
              >
                Daftar Disini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

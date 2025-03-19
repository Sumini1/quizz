// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { useTheme } from "../../../../context/ThemeContext";
// import { useDispatch, useSelector } from "react-redux";
// import { MdPerson } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { fetchLogin } from "../Reducer/loginSlice";
// import { googleLogin, googleCallback } from "../Reducer/googleSlice";
// import { FcGoogle } from "react-icons/fc";

// const Login = () => {
//   const { getBorder, getButtonClass, getBorderClass } = useTheme();
//   const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [error, setError] = useState(null);
//   const authState = useSelector((state) => state.google);
//   console.log("data user", authState);

//   const [formData, setFormData] = useState({
//     identifier: "",
//     password: "",
//   });

//   const [focusedFields, setFocusedFields] = useState({
//     identifier: false,
//     password: false,
//   });

//   // Handle Google OAuth callback
//   useEffect(() => {
//     const code = searchParams.get("code");
//     const state = searchParams.get("state");

//     if (code && state && !authState.loading && !authState.user) {
//       console.log("Processing Google OAuth code");

//       dispatch(googleCallback({ code, state }))
//         .unwrap()
//         .then((userData) => {
//           console.log("Google authentication successful:", userData);

//           if (userData && userData.token) {
//             // Store authentication data
//             localStorage.setItem("token", userData.token);

//             if (userData.user) {
//               localStorage.setItem("id", userData.user.id);
//               localStorage.setItem("role", userData.user.role);
//               localStorage.setItem("userData", JSON.stringify(userData.user));
//             }

//             // Increment login count
//             const loginCount =
//               parseInt(localStorage.getItem("loginCount") || "0") + 1;
//             localStorage.setItem("loginCount", loginCount);

//             // Redirect based on login count
//             if (loginCount === 1) {
//               navigate("/survei-satu");
//             } else {
//               navigate("/beranda");
//             }
//           } else {
//             setError("User data not found in response");
//           }
//         })
//         .catch((err) => {
//           console.error("Google authentication error:", err);
//           setError(
//             "Google authentication failed: " +
//               (err.message || "Please try again.")
//           );
//         });
//     }
//   }, [searchParams, dispatch, navigate, authState.loading, authState.user]);

//   // Handle Google login button click
//   const handleGoogleLogin = () => {
//     setError(null);
//     dispatch(googleLogin());
//   };

//   const handleFocus = (field) => {
//     setFocusedFields((prev) => ({
//       ...prev,
//       [field]: true,
//     }));
//   };

//   const handleBlur = (field) => {
//     setFocusedFields((prev) => ({
//       ...prev,
//       [field]: formData[field] !== "",
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const resultAction = await dispatch(fetchLogin(formData)).unwrap();

//       if (resultAction && resultAction.token) {
//         const { user, token } = resultAction;

//         // Store authentication data
//         localStorage.setItem("token", token);

//         if (user) {
//           localStorage.setItem("id", user.id);
//           localStorage.setItem("role", user.role);
//           localStorage.setItem("userData", JSON.stringify(user));

//           // Increment login count
//           const loginCount =
//             parseInt(localStorage.getItem("loginCount") || "0") + 1;
//           localStorage.setItem("loginCount", loginCount);

//           // Redirect based on login count
//           if (loginCount === 1) {
//             navigate("/survei-satu");
//           } else {
//             navigate("/beranda");
//           }
//         } else {
//           setError("User data not found in response");
//         }
//       } else {
//         setError("Login failed. Please check your credentials.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Login failed. " + (err.message || "Please try again."));
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex flex-col justify-center h-screen overflow-hidden px-5">
//       <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

//       <div className="flex flex-col mt-5">
//         <h2 className="text-lg font-semibold mb-2 tracking-wide leading-[1.6]">
//           Ahlan Wa Sahlan
//         </h2>
//         <p className="mb-7">
//           Alhamdulillah bisa bertemu kembali, Login untuk melanjutkan
//           pembelajaran
//         </p>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//             <span className="block sm:inline">{error}</span>
//           </div>
//         )}

//         {authState.loading && (
//           <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
//             <span className="block sm:inline">Memproses autentikasi...</span>
//           </div>
//         )}

//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-5 w-full items-center"
//         >
//           {/* Field Identifier (Email/Username) */}
//           <div
//             className={`flex gap-2 items-center rounded-xl p-3 border-2 w-full ${getBorder()} bg-transparent relative`}
//           >
//             <MdPerson className="mx-1" />
//             <div className="flex-grow relative">
//               <label
//                 className={`absolute text-sm transition-all duration-200 ${
//                   focusedFields.identifier
//                     ? "-top-6 left-0 text-xs text-blue-500 bg-white px-1"
//                     : "top-2 left-2 text-gray-500"
//                 }`}
//               >
//                 Email atau Username
//               </label>
//               <input
//                 type="text"
//                 name="identifier"
//                 value={formData.identifier}
//                 onChange={handleChange}
//                 onFocus={() => handleFocus("identifier")}
//                 onBlur={() => handleBlur("identifier")}
//                 className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Field Password */}
//           <div
//             className={`flex gap-2 items-center rounded-xl p-3 relative border-2 w-full ${getBorder()} bg-transparent`}
//           >
//             <RiLockPasswordFill className="mx-1" />
//             <div className="flex-grow relative">
//               <label
//                 className={`absolute text-sm transition-all duration-200 ${
//                   focusedFields.password
//                     ? "-top-6 left-0 text-xs text-blue-500 bg-white px-1"
//                     : "top-2 left-2 text-gray-500"
//                 }`}
//               >
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 onFocus={() => handleFocus("password")}
//                 onBlur={() => handleBlur("password")}
//                 className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
//                 required
//               />
//             </div>
//             <div
//               onClick={togglePasswordVisibility}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
//             >
//               {showPassword ? (
//                 <FiEyeOff className="text-xl" />
//               ) : (
//                 <FiEye className="text-xl" />
//               )}
//             </div>
//           </div>

//           <Link to="/forgot-password" className="self-end">
//             <h5 className="text-sm underline text-[#0961F5]">Lupa Password?</h5>
//           </Link>

//           <button
//             type="submit"
//             className={`p-4 w-full border-none rounded-xl ${getButtonClass()}`}
//             disabled={authState.loading}
//           >
//             Login dengan Email
//           </button>

//           <div className="flex items-center gap-3 w-full">
//             <hr className={`flex-grow border-[1px] border-gray-500`} />
//             <span className="text-gray-500">Atau</span>
//             <hr className={`flex-grow border-[1px] border-gray-500`} />
//           </div>

//           {/* Google Login Button */}
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className={`p-4 w-full rounded-xl border-none border-gray-300 ${getBorderClass()}`}
//             disabled={authState.loading}
//           >
//             <p className="flex items-center justify-center gap-3">
//               <FcGoogle className="text-2xl" />
//               <span>Login dengan Google</span>
//             </p>
//           </button>

//           <p className="text-center mt-5">
//             Belum Punya Akun?{" "}
//             <Link
//               to="/register"
//               className="font-semibold text-[#2F80ED] underline"
//             >
//               Daftar Disini
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { MdPerson } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { fetchLogin } from "../Reducer/loginSlice";
import { googleLogin, googleCallback } from "../Reducer/googleSlice";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { getBorder, getButtonClass, getBorderClass } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const authState = useSelector((state) => state.google);
  console.log("data user", authState);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [focusedFields, setFocusedFields] = useState({
    identifier: false,
    password: false,
  });

  // Handle Google OAuth callback
  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state && !authState.loading && !authState.user) {
      console.log("Processing Google OAuth code");

      dispatch(googleCallback({ code, state }))
        .unwrap()
        .then((userData) => {
          console.log("Google authentication successful:", userData);

          if (userData && userData.token) {
            // Store authentication data
            localStorage.setItem("token", userData.token);

            if (userData.user) {
              localStorage.setItem("id", userData.user.id);
              localStorage.setItem("role", userData.user.role);
              localStorage.setItem("userData", JSON.stringify(userData.user));
            }

            // Increment login count
            const loginCount =
              parseInt(localStorage.getItem("loginCount") || "0") + 1;
            localStorage.setItem("loginCount", loginCount);

            // Redirect based on login count
            if (loginCount === 1) {
              navigate("/survei-satu");
            } else {
              navigate("/beranda");
            }
          } else {
            setError("User data not found in response");
          }
        })
        .catch((err) => {
          console.error("Google authentication error:", err);
          setError(
            "Google authentication failed: " +
              (err.message || "Please try again.")
          );
        });
    }
  }, [searchParams, dispatch, navigate, authState.loading, authState.user]);

  // Handle Google login button click
  const handleGoogleLogin = () => {
    setError(null);
    dispatch(googleLogin());
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const resultAction = await dispatch(fetchLogin(formData)).unwrap();

      if (resultAction && resultAction.token) {
        const { user, token } = resultAction;

        // Store authentication data
        localStorage.setItem("token", token);

        if (user) {
          localStorage.setItem("id", user.id);
          localStorage.setItem("role", user.role);
          localStorage.setItem("userData", JSON.stringify(user));

          // Increment login count
          const loginCount =
            parseInt(localStorage.getItem("loginCount") || "0") + 1;
          localStorage.setItem("loginCount", loginCount);

          // Redirect based on login count
          if (loginCount === 1) {
            navigate("/survei-satu");
          } else {
            navigate("/beranda");
          }
        } else {
          setError("User data not found in response");
        }
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. " + (err.message || "Please try again."));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center h-screen overflow-hidden px-5">
      <h1 className="text-xl font-bold absolute top-5">EduLearn</h1>

      <div className="flex flex-col mt-5">
        <h2 className="text-lg font-semibold mb-2 tracking-wide leading-[1.6]">
          Ahlan Wa Sahlan
        </h2>
        <p className="mb-7">
          Alhamdulillah bisa bertemu kembali, Login untuk melanjutkan
          pembelajaran
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {authState.loading && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">Memproses autentikasi...</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full items-center"
        >
          {/* Field Identifier (Email/Username) */}
          <div
            className={`flex gap-2 items-center rounded-xl p-3 border-2 w-full ${getBorder()} bg-transparent relative`}
          >
            <MdPerson className="mx-1" />
            <div className="flex-grow relative">
              <label
                className={`absolute text-sm transition-all duration-200 ${
                  focusedFields.identifier
                    ? "-top-6 left-0 text-xs text-blue-500 bg-white px-1"
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
                className="w-full text-sm p-2 bg-transparent rounded-xl outline-none"
                required
              />
            </div>
          </div>

          {/* Field Password */}
          <div
            className={`flex gap-2 items-center rounded-xl p-3 relative border-2 w-full ${getBorder()} bg-transparent`}
          >
            <RiLockPasswordFill className="mx-1" />
            <div className="flex-grow relative">
              <label
                className={`absolute text-sm transition-all duration-200 ${
                  focusedFields.password
                    ? "-top-6 left-0 text-xs text-blue-500 bg-white px-1"
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
            <h5 className="text-sm underline text-[#0961F5]">Lupa Password?</h5>
          </Link>

          <button
            type="submit"
            className={`p-4 w-full border-none rounded-xl ${getButtonClass()}`}
            disabled={authState.loading}
          >
            Login dengan Email
          </button>

          <div className="flex items-center gap-3 w-full">
            <hr className={`flex-grow border-[1px] border-gray-500`} />
            <span className="text-gray-500">Atau</span>
            <hr className={`flex-grow border-[1px] border-gray-500`} />
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={`p-4 w-full rounded-xl border-none border-gray-300 ${getBorderClass()}`}
            disabled={authState.loading}
          >
            <p className="flex items-center justify-center gap-3">
              <FcGoogle className="text-2xl" />
              <span>Login dengan Google</span>
            </p>
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

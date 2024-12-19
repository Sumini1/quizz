import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";
import { FaUserAlt } from "react-icons/fa";

const RegisterGmail = () => {
  const { theme } = useTheme();


 const getBorderColor = () => {
   switch (theme) {
     case "dark":
       return "border-gray-700";
     case "cupcake":
       return "border-pink-500";
     case "bumblebee":
       return "border-yellow-500";
     default:
       return "border-blue-700";
   }
 };

  return (
    <div>
      <div className="w-full max-w-sm p-5 flex flex-col items-center">
        {/* Header */}
        <div className="flex justify-between w-full mb-7">
          <Link to="/">
            <h1 className="text-lg font-bold">EduLearn</h1>
          </Link>
          {/* <Link to="/login">
            <h1 className="text-lg font-bold">Login</h1>
          </Link> */}
        </div>

        {/* Welcome Section */}
        <div className=" mb-7 mt-5">
          <h1 className="text-xl font-semibold mb-2">Daftar</h1>
          <p className="text-md">
            Alhamdulillah bisa bertemu kembali, Login dengan email untuk
            melanjutkan pembelajaran
          </p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col mt-5 gap-3 w-full">
          {/* name */}
          <div
            className={`flex gap-2 border items-center rounded-lg p-1 ${getBorderColor()}`}
          >
            <FaUserAlt />
            <input
              type="text"
              placeholder="Nama"
              className="flex-grow bg-transparent p-1 rounded-md outline-none"
            />
          </div>

          <div
            className={`flex gap-2 items-center border rounded-lg p-1 ${getBorderColor()}`}
          >
            <FaUserAlt />
            <input
              type="text"
              placeholder="Nama User"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
          </div>

          {/* Email Input */}
          <div className={`flex gap-2 items-center border rounded-lg p-1 ${getBorderColor()}`}>
            <MdEmail />
            <input
              type="text"
              placeholder="Email"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
          </div>

          {/* phone number */}
          <div className={`flex gap-2 items-center border rounded-lg p-1 ${getBorderColor()}`}>
            <MdPhone />
            <input
              type="text"
              placeholder="Nomor Telepon"
              className="flex-grow p-1 bg-transparent rounded-md outline-none"
            />
          </div>

          {/* Google Login Button */}
          <button
            className={`p-2 w-full mt-40 rounded-md ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : theme === "cupcake"
                ? "bg-pink-500 text-white"
                : theme === "bumblebee"
                ? "bg-yellow-500 text-white"
                : "bg-blue-700 text-white"
            }`}
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterGmail;

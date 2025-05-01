import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { useTheme } from "../../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUserCreate, fetchUserProfile } from "../../Reducer/userProfile";

const Profil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, getBorder, getButtonClass, getBorderClass, middleTheme } =
    useTheme();

  const userData = useSelector((state) => state.userProfile.user); // ambil dari redux

  const [form, setForm] = useState({
    donation_name: "",
    full_name: "",
    date_of_birth: "",
    gender: "",
    phone_number: "",
    bio: "",
    location: "",
    occupation: "",
  });

  // Ambil user_id dari localStorage & fetch profile user
  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      dispatch(fetchUserProfile(userId));
    }
  }, [dispatch]);

  // Isi form kalau sudah ada data dari API
  useEffect(() => {
    if (userData) {
      setForm({
        donation_name: userData.donation_name || "",
        full_name: userData.full_name || "",
        date_of_birth: userData.date_of_birth?.split("T")[0] || "",
        gender: userData.gender || "",
        phone_number: userData.phone_number || "",
        bio: userData.bio || "",
        location: userData.location || "",
        occupation: userData.occupation || "",
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting form:", form); // ← tambahkan ini
  const userId = localStorage.getItem("id");
  if (!userId) return;

  const payload = {
    user_id: userId,
    ...form,
  };

  await dispatch(saveUserCreate(payload));
  alert("Profil berhasil disimpan!");
};


  return (
    <div className="flex flex-col gap-4 md:px-5 min-h-screen w-full h-full">
      <div
        className={`py-2 flex flex-col text-xl px-5 flex-grow max-w-md mx-auto w-full ${middleTheme()}`}
      >
        <Link to={"/settings"}>
          <div className="flex items-center gap-2">
            <FaArrowLeft className="text-2xl cursor-pointer" />
            <h1 className="text-2xl font-semibold">Profil</h1>
          </div>
        </Link>

        <p className="text-gray-600 mt-4 text-lg font-medium mb-4">
          Harap diisi profil pengguna untuk kemajuan aplikasi. Data pengguna
          insya Allah akan kami lindungi.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            label="Nama Lengkap"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
          />
          <InputField
            label="Nama Donatur"
            name="donation_name"
            value={form.donation_name}
            onChange={handleChange}
          />
          <InputField
            label="Nomor Telepon"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
          />
          <InputField
            label="Domisili"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
          <InputField
            label="Tanggal Lahir"
            name="date_of_birth"
            type="date"
            value={form.date_of_birth}
            onChange={handleChange}
          />
          <InputField
            label="Pekerjaan"
            name="occupation"
            value={form.occupation}
            onChange={handleChange}
          />
          <InputField
            label="Bio"
            name="bio"
            value={form.bio}
            onChange={handleChange}
          />
          <InputField
            label="Jenis Kelamin"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            placeholder="male / female"
          />
          <button
            type="submit"
            className={`border-none rounded-xl p-3 ${getButtonClass()}`}
          >
            Simpan
          </button>
          <button
            type="button"
            className={`border-none rounded-xl p-3 mb-5 ${getBorderClass()}`}
            onClick={() => navigate("/settings")}
          >
            Kembali
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => {
  const { getBorder } = useTheme();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div
        className={`flex text-sm font-medium items-center border ${getBorder()} rounded-lg p-2`}
      >
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 bg-transparent focus:outline-none"
        />
        <AiFillEdit className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default Profil;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const fetchRegister = createAsyncThunk(
  "register/fetchRegister",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://arabiya-syari-test-production.up.railway.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json", // Pastikan server menerima JSON
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log("Response dari server:", data);

      if (!response.ok) {
        throw new Error(
          data.error || "Registrasi gagal, periksa kembali input Anda"
        );
      }

      Swal.fire({
        title: "Register Successfully",
        icon: "success",
        text: "Akun berhasil dibuat!",
        showConfirmButton: true,
      });

      return data;
    } catch (error) {
      console.log("Error pada try catch", error);

      Swal.fire({
        title: "Register Failed",
        icon: "error",
        text: error.message || "Terjadi kesalahan, coba lagi.",
        showConfirmButton: true,
      });

      return rejectWithValue(error.message || "Registrasi gagal");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "Registrasi berhasil!";
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload || "Registrasi gagal.";
      });
  },
});

export default registerSlice.reducer;

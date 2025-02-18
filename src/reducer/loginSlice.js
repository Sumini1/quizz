// loginSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://arabiya-syari-test-production.up.railway.app/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      console.log("API Response: ", data); // Menambahkan log untuk debugging

      // Menghapus pemeriksaan code karena tidak ada di respons
      if (!data.token) {
        throw new Error(data.message || "Login gagal");
      }

      localStorage.setItem("accessToken", data.token);
    //   localStorage.setItem("role", data.data.role);

      Swal.fire({
        title: "Login Berhasil",
        icon: "success",
        showConfirmButton: true,
      });

      return data;
    } catch (error) {
      console.log("Login Error: ", error); // Log error untuk debugging
      Swal.fire({
        title: "Login Gagal",
        text: error.message,
        icon: "error",
        showConfirmButton: true,
      });
      return rejectWithValue(error.message);
    }
  }
);



const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    isLoggedIn: !!localStorage.getItem("accessToken"),
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.isError = false;
        state.message = action.payload.message;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || action.error.message;
      });
  },
});

export const { setLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import axios from "axios"; // Ensure axios is imported

// Thunk for login
export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (userData, { rejectWithValue }) => {
    try {
      // Validate input: ensure identifier and password are provided
      if (!userData.identifier || !userData.password) {
        throw new Error("Email atau username serta password harus diisi");
      }

      // Send login request to API
      const response = await axios.post(
        "https://arabiya-syari-fiber-production.up.railway.app/auth/login",
        {
          identifier: userData.identifier,
          password: userData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data; // Axios already parses JSON

      if (!data.token) {
        throw new Error("Email atau password salah");
      }

      // Store token and user details in localStorage
      localStorage.setItem("accessToken", data.token);
      if (data.id) localStorage.setItem("userId", data.id); // Store user ID if available
      if (data.role) localStorage.setItem("role", data.role); // Store user role if available

      Swal.fire({
        title: "Login Berhasil",
        icon: "success",
        showConfirmButton: true,
      });

      return data; // Return user data
    } catch (error) {
      // Handle backend error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response?.data?.error ||
          error.message ||
          "Terjadi kesalahan saat login.",
      });

      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Thunk for logout
export const fetchLogout = createAsyncThunk("login/fetchLogout", async () => {
  try {
    // Send logout request to API
    await axios.post(
      "https://arabiya-syari-fiber-production.up.railway.app/api/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    // Remove token from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    Swal.fire({
      title: "Logout Berhasil",
      icon: "success",
      showConfirmButton: true,
    });

    return null; // Return null to indicate successful logout
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response?.data?.error || "Terjadi kesalahan saat logout.",
    });

    return rejectWithValue(error.response?.data || error.message);
  }
});

// Slice for login
const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Additional reducers can be added here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store user data
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      })
      .addCase(fetchLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.loading = false;
        state.user = null; // Reset user data
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      });
  },
});

export default loginSlice.reducer;

// loginSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (userData, { rejectWithValue }) => {
    try {
      
      
      const response = await fetch(
        "https://arabiya-syari-fiber-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (data.message === "Invalid email or password") {
        throw new Error("Email atau password salah");
      }

      if (!data.token) {
        throw new Error("Email atau password salah");
      }

      localStorage.setItem("accessToken", data.token);
    //   localStorage.setItem("role", data.data.role);npn

      Swal.fire({ title: "Login Berhasil", icon: "success", showConfirmButton: true });

      return data;
    } catch (error) {
      console.log("Login Error: ", error); // Log error untuk debugging
      Swal.fire({ title: "Login Gagal", text: error.message, icon: "error", showConfirmButton: true });
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



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Swal from "sweetalert2";

// // Fungsi helper untuk menyiapkan headers dengan token
// export const getAuthHeaders = () => {
//   const token = localStorage.getItem("accessToken");
//   return {
//     "Content-Type": "application/json",
//     Authorization: token ? `Bearer ${token}` : "",
//   };
// };

// // Fungsi untuk membuat API client yang sudah terotentikasi
// export const apiRequest = async (url, options = {}) => {
//   const token = localStorage.getItem("accessToken");

//   const defaultOptions = {
//     headers: {
//       "Content-Type": "application/json",
//       ...(token && { Authorization: `Bearer ${token}` }),
//       ...options.headers,
//     },
//   };

//   const mergedOptions = {
//     ...defaultOptions,
//     ...options,
//     headers: {
//       ...defaultOptions.headers,
//       ...(options.headers || {}),
//     },
//   };

//   const response = await fetch(url, mergedOptions);
//   const data = await response.json();

//   // Handle token expired atau unauthorized
//   if (response.status === 401) {
//     localStorage.removeItem("accessToken");
//     Swal.fire({
//       title: "Sesi Berakhir",
//       text: "Silahkan login kembali",
//       icon: "warning",
//       showConfirmButton: true,
//     });
//     window.location.href = "/login";
//     throw new Error("Unauthorized access");
//   }

//   return { data, status: response.status };
// };

// export const fetchLogin = createAsyncThunk(
//   "login/fetchLogin",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://arabiya-syari-fiber-production.up.railway.app/auth/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(userData),
//         }
//       );

//       const data = await response.json();

//       if (data.message === "Invalid email or password") {
//         throw new Error("Email atau password salah");
//       }

//       if (!data.token) {
//         throw new Error("Email atau password salah");
//       }

//       // Simpan token ke localStorage
//       localStorage.setItem("accessToken", data.token);

//       // Jika ada informasi user yang perlu disimpan
//       if (data.data) {
//         if (data.data.role) {
//           localStorage.setItem("role", data.data.role);
//         }
//         if (data.data.userId) {
//           localStorage.setItem("userId", data.data.userId);
//         }
//       }

//       Swal.fire({
//         title: "Login Berhasil",
//         icon: "success",
//         showConfirmButton: true,
//       });

//       return data;
//     } catch (error) {
//       console.log("Login Error: ", error); // Log error untuk debugging
//       Swal.fire({
//         title: "Login Gagal",
//         text: error.message,
//         icon: "error",
//         showConfirmButton: true,
//       });
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Contoh penggunaan untuk API call lain yang memerlukan authorization
// export const fetchProtectedData = createAsyncThunk(
//   "login/fetchProtectedData",
//   async (endpoint, { rejectWithValue }) => {
//     try {
//       const { data, status } = await apiRequest(
//         `https://arabiya-syari-fiber-production.up.railway.app/${endpoint}`,
//         { method: "GET" }
//       );

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const loginSlice = createSlice({
//   name: "login",
//   initialState: {
//     isLoading: false,
//     isLoggedIn: !!localStorage.getItem("accessToken"),
//     isSuccess: false,
//     isError: false,
//     message: "",
//     user: null,
//   },
//   reducers: {
//     setLoggedOut: (state) => {
//       state.isLoggedIn = false;
//       state.user = null;
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("role");
//       localStorage.removeItem("userId");
//     },
//     checkAuthStatus: (state) => {
//       state.isLoggedIn = !!localStorage.getItem("accessToken");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchLogin.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.isSuccess = false;
//       })
//       .addCase(fetchLogin.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isLoggedIn = true;
//         state.isError = false;
//         state.message = action.payload.message;
//         // Simpan user data jika tersedia
//         if (action.payload.data) {
//           state.user = action.payload.data;
//         }
//       })
//       .addCase(fetchLogin.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload || action.error.message;
//       });
//     // Tambahkan case untuk fetchProtectedData jika diperlukan
//   },
// });

// export const { setLoggedOut, checkAuthStatus } = loginSlice.actions;
// export default loginSlice.reducer;
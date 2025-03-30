import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fungsi untuk mengambil data kuis berdasarkan user ID
export const fetchUserQuizzesById = createAsyncThunk(
  "quizzes/fetchUserQuizzesById",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return rejectWithValue("Token tidak ditemukan, silakan login ulang");
      }

      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/user_quizzes/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text(); // Ambil pesan error
        throw new Error(errorText || "Gagal mengambil data kuis");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Terjadi kesalahan");
    }
  }
);

const quizzesSlice = createSlice({
  name: "userQuizzes",
  initialState: {
    userQuizzes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserQuizzesById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserQuizzesById.fulfilled, (state, action) => {
        state.loading = false;
        state.userQuizzes = action.payload || [];
      })
      .addCase(fetchUserQuizzesById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Gagal memuat data kuis";
      });
  },
});

export default quizzesSlice.reducer;

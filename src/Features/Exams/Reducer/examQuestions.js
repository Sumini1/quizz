import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk untuk mengambil pertanyaan kuis
export const fetchExamQuestions = createAsyncThunk(
  "examQuestions/fetch",
  async (_, { rejectWithValue }) => {
    // Menghilangkan quizId dari parameter
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/exam-questions`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil pertanyaan Evaluasi");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Membuat slice untuk pertanyaan kuis
const examQuestionsSlice = createSlice({
  name: "examQuestions",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamQuestions.pending, (state) => {
        state.loading = true;
      })
      // Di reducer, pastikan data yang disimpan sesuai dengan struktur yang Anda harapkan
      .addCase(fetchExamQuestions.fulfilled, (state, action) => {
        state.loading = false;
        // Pastikan struktur ini sesuai dengan respons API Anda
        state.data = action.payload.data || action.payload;
      })
      .addCase(fetchExamQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default examQuestionsSlice.reducer;

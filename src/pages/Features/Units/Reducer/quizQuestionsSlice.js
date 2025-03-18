import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk untuk mengambil pertanyaan kuis
export const fetchQuizQuestions = createAsyncThunk(
  "quizQuestions/fetch",
  async (_, { rejectWithValue }) => {
    // Menghilangkan quizId dari parameter
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/quizzes-questions`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil pertanyaan kuis");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Membuat slice untuk pertanyaan kuis
const quizQuestionsSlice = createSlice({
  name: "quizQuestions",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Menyimpan pertanyaan yang diambil
      })
      .addCase(fetchQuizQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizQuestionsSlice.reducer;

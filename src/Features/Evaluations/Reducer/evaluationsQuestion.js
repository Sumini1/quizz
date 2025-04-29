import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk untuk mengambil pertanyaan kuis
export const fetchEvaluationQuestions = createAsyncThunk(
  "evaluationQuestions/fetch",
  async (_, { rejectWithValue }) => {
    // Menghilangkan quizId dari parameter
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/evaluation-questions`,
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
const evaluationQuestionsSlice = createSlice({
  name: "evaluationQuestions",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvaluationQuestions.pending, (state) => {
        state.loading = true;
      })
      // Di reducer, pastikan data yang disimpan sesuai dengan struktur yang Anda harapkan
      .addCase(fetchEvaluationQuestions.fulfilled, (state, action) => {
        state.loading = false;
        // Pastikan struktur ini sesuai dengan respons API Anda
        state.data = action.payload.data || action.payload;
      })
      .addCase(fetchEvaluationQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default evaluationQuestionsSlice.reducer;

// Questions.js - Redux Slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllQuestions = createAsyncThunk(
  "allQuestion/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://quiz-fiber-production.up.railway.app/api/question",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil pertanyaan questions");
      }
      const data = await response.json();
      if (!data.data || !Array.isArray(data.data)) {
        throw new Error("Format data tidak valid");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const allQuestionSlice = createSlice({
  name: "allQuestion", // Make sure this matches what you use in useSelector
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchAllQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default allQuestionSlice.reducer;

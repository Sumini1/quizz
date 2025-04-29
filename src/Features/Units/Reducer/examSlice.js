import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExams = createAsyncThunk("exams/fetchExams", async () => {
  try {
    const response = await fetch(
      "https://quiz-fiber-production.up.railway.app/api/exams",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Gagal mengambil data exams");
    }
    const responseData = await response.json();

    // Validate that responseData has a data property that is an array
    if (!responseData.data || !Array.isArray(responseData.data)) {
      throw new Error("Format data tidak valid");
    }

    // Return the whole response object
    return responseData;
  } catch (error) {
    throw "tolong selesaikan quizz terlebih dahulu";
  }
});

const examsSlice = createSlice({
  name: "exams",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default examsSlice.reducer;

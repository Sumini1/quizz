import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTooltips = createAsyncThunk(
  "tooltips/fetchTooltips",
  async () => {
    try {
      const response = await fetch(
        "https://quiz-app-api-production.up.railway.app/tooltips",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data tooltips");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const tooltipsSlice = createSlice({
  name: "tooltips",
  initialState: {
    status: "idle",
    error: null,
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTooltips.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTooltips.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.data || []; // Pastikan ada data
      })
      .addCase(fetchTooltips.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tooltipsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch data berdasarkan ID kategori
export const fetchCategoryId = createAsyncThunk(
  "category/categoryId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-app-api-production.up.railway.app/themes_or_levels?sub_category_id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data kategori");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    status: "idle", // Mengindikasikan status awal
    error: null,
    data: [], // Pastikan ini sesuai dengan bentuk data yang diterima API
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; // Sesuaikan dengan data yang dikembalikan API
      })
      .addCase(fetchCategoryId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message; // Tangani error dengan lebih baik
      });
  },
});

export default categorySlice.reducer;

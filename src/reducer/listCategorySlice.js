import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListCategory = createAsyncThunk(
  "listCategory/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        " https://arabiya-syari-fiber-production.up.railway.app/api/categories",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Data langsung berupa array, tidak perlu mengakses .data
      if (!Array.isArray(data)) {
        throw new Error("Format data tidak valid");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const listCategorySlice = createSlice({
  name: "listCategory",
  initialState: {
    status: "idle",
    error: null,
    data: [],
  },
  reducers: {
    resetListCategory: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchListCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Langsung assign action.payload karena sudah berupa array
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchListCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Terjadi kesalahan";
      });
  },
});

export const { resetListCategory } = listCategorySlice.actions;
export default listCategorySlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListCategories = createAsyncThunk(
  "listCategories/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        " https://quiz-fiber-production.up.railway.app/api/categories",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Validate that responseData has a data property that is an array
      if (!data.data || !Array.isArray(data.data)) {
        throw new Error("Format data tidak valid");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const listCategoriesSlice = createSlice({
  name: "listCategories",
  initialState: {
    status: "idle",
    error: null,
    data: [],
  },
  reducers: {
    resetListCategories: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchListCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Langsung assign action.payload karena sudah berupa array
        state.data = action.payload.data;
        state.error = null;
      })
      .addCase(fetchListCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Terjadi kesalahan";
      });
  },
});

export const { resetListCategories } = listCategoriesSlice.actions;
export default listCategoriesSlice.reducer;

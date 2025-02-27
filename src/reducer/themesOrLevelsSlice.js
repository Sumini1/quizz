import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchThemesOrLevels = createAsyncThunk(
  "themesOrLevels/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://arabiya-syari-fiber-production.up.railway.app/api/themes-or-levels",
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

      if (!Array.isArray(data)) {
        throw new Error("Format data tidak valid");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const themesOrLevelsSlice = createSlice({
  name: "themesOrLevels",
  initialState: {
    status: "idle",
    error: null,
    data: [],
  },
  reducers: {
    resetThemesOrLevels: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThemesOrLevels.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchThemesOrLevels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchThemesOrLevels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Menggunakan payload karena kita mengirim rejectWithValue
      });
  },
});

export const { resetThemesOrLevels } = themesOrLevelsSlice.actions;
export default themesOrLevelsSlice.reducer;

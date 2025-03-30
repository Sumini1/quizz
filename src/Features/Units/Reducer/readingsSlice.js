import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReadings = createAsyncThunk(
  "readings/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://arabiya-syari-fiber-production.up.railway.app/api/readings",
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

      console.log("Fetched data:", data); // Debug log

      if (!Array.isArray(data)) {
        throw new Error("Format data tidak valid");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// fetching reading by id / convertTooltips
export const fetchReadingsByIdConverTooltips = createAsyncThunk(
  "readingsById/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/readings/${id}/convertTooltips`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const readingsSlice = createSlice({
  name: "readings",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    detailConvert : null  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadings.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchReadings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchReadings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // fetch reading by id
      .addCase(fetchReadingsByIdConverTooltips.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchReadingsByIdConverTooltips.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detailConvert = action.payload;
      })
      .addCase(fetchReadingsByIdConverTooltips.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default readingsSlice.reducer;

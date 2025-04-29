import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUnits = createAsyncThunk("units/fetchUnits", async () => {
  try {
    const response = await fetch(
      "https://quiz-fiber-production.up.railway.app/api/units",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Gagal mengambil data units");
    }
    const responseData = await response.json();

    // Validate that responseData has a data property that is an array
    if (!responseData.data || !Array.isArray(responseData.data)) {
      throw new Error("Format data tidak valid");
    }

    // Return the whole response object
    return responseData;
  } catch (error) {
    throw "tolong login kembali";
  }
});

// get unitsid
export const fetchUnitsById = createAsyncThunk(
  "unitsById/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/units/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data units");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const unitsSlice = createSlice({
  name: "units",
  initialState: {
    status: "idle",
    error: null,
    data: [],
    detail: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUnits.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchUnits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // fetch units berdasarka id
      .addCase(fetchUnitsById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUnitsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload.data;
      })
      .addCase(fetchUnitsById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default unitsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUnits = createAsyncThunk("units/fetchUnits", async () => {
  try {
    const response = await fetch(
      "https://arabiya-syari-fiber-production.up.railway.app/api/units",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
    throw "tolong login kembali";
  }
});

// get unitsid
export const fetchUnitsById = createAsyncThunk(
  "unitsById/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/units/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
        state.data = action.payload;
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
        state.detail = action.payload;
      })
      .addCase(fetchUnitsById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default unitsSlice.reducer;

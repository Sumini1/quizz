import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubcategory = createAsyncThunk(
  "subcategory/fetch",
  async ({ userId, difficultyId }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/user-subcategory/category/${userId}/difficulty/${difficultyId}`,
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

      const responseData = await response.json();

      if (!responseData.data || !Array.isArray(responseData.data)) {
        throw new Error("Format data tidak valid");
      }

      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// create user-subcategory
export const fetchCreateUserSubcategory = createAsyncThunk(
  "user-subcategory/create",
  async (newUserSubcategory, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://quiz-fiber-production.up.railway.app/api/user-subcategory",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserSubcategory),
        }
      );

      const responseData = await response.json();
      console.log("Response dari API:", responseData); // Debugging

      if (!response.ok) {
        return rejectWithValue(responseData); // Kirim error dari server
        return responseData;
      }
      } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const subcategorySlice = createSlice({
    name: "subcategory",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubcategory.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchSubcategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.data;
            })
            .addCase(fetchSubcategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })

            // create
            .addCase(fetchCreateUserSubcategory.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCreateUserSubcategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.data;
            })
            .addCase(fetchCreateUserSubcategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });

    },
});

export default subcategorySlice.reducer;
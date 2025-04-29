import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUserUnits = createAsyncThunk(
    "userUnits/fetch",
    async({userId, themeId}, {rejectWithValue}) => {
        try {
            const response = await fetch(
                `https://quiz-fiber-production.up.railway.app/api/user-units/${userId}/themes-or-levels/${themeId}`,
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
             console.log("API response data:", responseData);

            if (!responseData.data || !Array.isArray(responseData.data)) {
                throw new Error("Format data tidak valid");
            }

            return responseData;
           

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
// Add this to your userUnitsSlice.js file
export const fetchUserUnitsById = createAsyncThunk(
  "userUnits/fetchById",
  async(userId, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/user-units/${userId}`,
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
      
      return responseData;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userUnitsSlice = createSlice({
    name: "userUnits",
    initialState: {
        status: "idle",
        data: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUserUnits.pending, (state) => {
            state.status = "loading";
            state.error = null;
          })
          .addCase(fetchUserUnits.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload.data || [];
          })
          .addCase(fetchUserUnits.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          })
          // New cases for fetchUserUnitsById
          .addCase(fetchUserUnitsById.pending, (state) => {
            state.detailStatus = "loading";
            state.error = null;
          })
          .addCase(fetchUserUnitsById.fulfilled, (state, action) => {
            state.detailStatus = "succeeded";
            state.detail = action.payload.data;
          })
          .addCase(fetchUserUnitsById.rejected, (state, action) => {
            state.detailStatus = "failed";
            state.error = action.payload;
          });
    },
});

export default userUnitsSlice.reducer;
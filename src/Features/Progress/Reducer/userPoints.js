import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserPointById = createAsyncThunk(
    "userPoints/fetchUserPoints",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await fetch(
              `https://quiz-fiber-production.up.railway.app/api/user-point-logs/${userId}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch user points");
            }
           const responseData = await response.json(); // Menggunakan await untuk mendapatkan responsedata
           if (!responseData.data || !Array.isArray(responseData.data)) {
                throw new Error("Format data tidak valid");
            }
            return responseData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userPointsSlice = createSlice({
    name: "userPoints",
    initialState: {
        userPoints: [],
        isLoading: false,
        error: null,
        detail : null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPointById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserPointById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userPoints = action.payload;
            })
            .addCase(fetchUserPointById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default userPointsSlice.reducer;
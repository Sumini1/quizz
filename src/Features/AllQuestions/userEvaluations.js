import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserEvaluations = createAsyncThunk(
    "userEvaluations/fetchUserEvaluations",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://quiz-fiber-production.up.railway.app/api/user-evaluations`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch user evaluations");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);  

// cretate new thunk for saving evaluations progress 
export const saveUserEvaluationProgress = createAsyncThunk(
    "userEvaluations/saveUserEvaluationProgress",
    async (progressData, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://quiz-fiber-production.up.railway.app/api/user-evaluations`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(progressData),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to save evaluation progress");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

)
const  userEvaluationsSlice = createSlice({
    name: "userEvaluations",
    initialState: {
        data: [],
        loading : false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserEvaluations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserEvaluations.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserEvaluations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // save evaluation progress
            .addCase(saveUserEvaluationProgress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveUserEvaluationProgress.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(saveUserEvaluationProgress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export default userEvaluationsSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using axios for API calls

// Async thunk for saving user quiz progress
export const saveUserEvaluationProgress = createAsyncThunk(
  "userEvaluationSave/saveProgress",
  async (evaluationProgressData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://arabiya-syari-fiber-production.up.railway.app/api/user-evaluations",
        evaluationProgressData,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userEvaluationSaveSlice = createSlice({
  name: "userEvaluationSave",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveUserEvaluationProgress.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(saveUserEvaluationProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(saveUserEvaluationProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default userEvaluationSaveSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using axios for API calls

// Async thunk for saving user quiz progress
export const saveUserExamProgress = createAsyncThunk(
  "userExamSave/saveProgress",
  async (examProgressData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://arabiya-syari-fiber-production.up.railway.app/api/user-exams",
        examProgressData,
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

const userExamSaveSlice = createSlice({
  name: "userExamSave",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveUserExamProgress.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(saveUserExamProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(saveUserExamProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default userExamSaveSlice.reducer;

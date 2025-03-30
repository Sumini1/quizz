import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using axios for API calls

// Async thunk for saving user quiz progress
export const saveUserQuizProgress = createAsyncThunk(
  "userQuizzesSave/saveProgress",
  async (quizProgressData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://arabiya-syari-fiber-production.up.railway.app/api/user_quizzes/save",
        quizProgressData,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userQuizzesSaveSlice = createSlice({
  name: "userQuizzesSave",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveUserQuizProgress.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(saveUserQuizProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(saveUserQuizProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default userQuizzesSaveSlice.reducer;

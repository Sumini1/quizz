import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserExams = createAsyncThunk(
  "userExams/fetchUserExams",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/user-exams`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user exams");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  create new thunk for saving quiz progress
export const saveUserExamProgress = createAsyncThunk(
  "userExams/saveUserExamProgress",
  async (progressData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/user-exams`,
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
        throw new Error("Failed to save quiz progress");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userExamsSlice = createSlice({
  name: "userExams",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserExams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserExams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUserExams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(saveUserExamProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveUserExamProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(saveUserExamProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userExamsSlice.reducer;

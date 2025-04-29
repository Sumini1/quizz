
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserQuizzes = createAsyncThunk(
  "userQuizzes/fetchUserQuizzes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/user-quizzes`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user quizzes");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create a new thunk for saving quiz progress
export const saveUserQuizProgress = createAsyncThunk(
  "userQuizzes/saveUserQuizProgress",
  async (progressData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/user-quizzes`,
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

const userQuizzesSlice = createSlice({
  name: "userQuizzes",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data || [];
      })
      .addCase(fetchUserQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(saveUserQuizProgress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveUserQuizProgress.fulfilled, (state, action) => {
        state.loading = false;
        // If you want to update local state with the response
        const newProgress = action.payload.data;
        const existingIndex = state.data.findIndex(
          (item) => item.id === newProgress.id
        );
        if (existingIndex >= 0) {
          state.data[existingIndex] = newProgress;
        } else {
          state.data.push(newProgress);
        }
      })
      .addCase(saveUserQuizProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userQuizzesSlice.reducer;

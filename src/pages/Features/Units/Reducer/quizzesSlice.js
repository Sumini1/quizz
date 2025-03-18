import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchQuizzes = createAsyncThunk(
    "quizzes/fetchQuizzes",
    async () => {
        try {
            const response = await fetch(
                "https://arabiya-syari-fiber-production.up.railway.app/api/quizzes",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data quizzes");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
);

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        status: "idle",
        error: null,
        data: [],
    },
    reducers: {},


extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quizzesSlice.reducer;    
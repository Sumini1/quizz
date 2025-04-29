import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchQuizzes = createAsyncThunk(
    "quizzes/fetchQuizzes",
    async () => {
        try {
            const response = await fetch(
              "https://quiz-fiber-production.up.railway.app/api/quizzes",
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "token"
                  )}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data quizzes");
            }
             const responseData = await response.json();

             // Validate that responseData has a data property that is an array
             if (!responseData.data || !Array.isArray(responseData.data)) {
               throw new Error("Format data tidak valid");
             }

             // Return the whole response object
             return responseData;
        } catch (error) {
            throw error;
        }
    }
);

// quizbyId
export const fetchQuizById = createAsyncThunk(
    "quizzes/fetchQuizById",
    async (id) => {
        try {
            const response = await fetch(
              `https://quiz-fiber-production.up.railway.app/api/quizzes/${id}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "token"
                  )}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data quizzes");
            }
             const responseData = await response.json();

             // Validate that responseData has a data property that is an array
             if (!responseData.data || !Array.isArray(responseData.data)) {
               throw new Error("Format data tidak valid");
             }

             // Return the whole response object
             return responseData;
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
        state.data = action.payload.data;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // fetch units berdasarka id
      .addCase(fetchQuizById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload.data;
      })
      .addCase(fetchQuizById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quizzesSlice.reducer;    
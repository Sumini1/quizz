import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchEvaluations = createAsyncThunk(
    "evaluations/fetchEvaluations",
    async () => {
        try {
            const response = await fetch(
                "https://arabiya-syari-fiber-production.up.railway.app/api/evaluations",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data evaluations");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw "tolong selesaikan quizz terlebih dahulu";
        }
    }
);

const evaluationsSlice = createSlice({
    name: "evaluations",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvaluations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEvaluations.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchEvaluations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default evaluationsSlice.reducer;
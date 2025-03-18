import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersProfile = createAsyncThunk(
  "usersProfile/fetchUsersProfile",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data users");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// by id
export const fetchUsersProfileById = createAsyncThunk(
  "usersProfile/fetchUsersProfileById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data users");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// create users
export const fetchCreateUsersProfile = createAsyncThunk(
  "usersProfile/fetchCreateUsersProfile",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://arabiya-syari-fiber-production.up.railway.app/api/users",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data users");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);



const usersProfileSlice = createSlice({
  name: "usersProfile",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    detail : null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsersProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
    //   by id
    .addCase(fetchUsersProfileById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchUsersProfileById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchUsersProfileById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
    // create users
    .addCase(fetchCreateUsersProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchCreateUsersProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchCreateUsersProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default usersProfileSlice.reducer;

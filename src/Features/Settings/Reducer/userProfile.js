// src/redux/userProfile.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET user profile by user_id
export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/users-profiles/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil profil pengguna");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// POST create/update user profile
export const saveUserCreate = createAsyncThunk(
  "userProfile/saveUserCreate",
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://quiz-fiber-production.up.railway.app/api/users-profiles`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profileData),
        }
      );
      if (!response.ok) {
        throw new Error("Gagal menyimpan profil pengguna");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: null, // hanya satu profil
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // SAVE
      .addCase(saveUserCreate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveUserCreate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload; // langsung update state.user
      })
      .addCase(saveUserCreate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userProfileSlice.reducer;

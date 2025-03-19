import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetch(
      "https://arabiya-syari-fiber-production.up.railway.app/api/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Gagal mengambil data users");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

// Thunk to fetch user by ID
export const fetchUsersById = createAsyncThunk(
  "usersById/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("Token tidak tersedia");
      }

      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Log response for debugging
      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error status ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in fetchUsersById:", error);
      return rejectWithValue(error.message);
    }
  }
);

// Users slice
const usersSlice = createSlice({
  name: "users",
  initialState: {
    status: "idle",
    error: null,
    data: [],
    detail: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Mengatur pengguna
    },
    clearUser: (state) => {
      state.user = null; // Menghapus pengguna
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload || [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Fetch user by ID
      .addCase(fetchUsersById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload; // Store user detail
      })
      .addCase(fetchUsersById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setUser, clearUser } = usersSlice.actions;
export default usersSlice.reducer;

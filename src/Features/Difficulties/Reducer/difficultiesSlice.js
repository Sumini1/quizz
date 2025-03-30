import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get category difficulties
export const fetchDifficulties = createAsyncThunk(
  "difficulties/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://arabiya-syari-fiber-production.up.railway.app/api/difficulties",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Format data tidak valid");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get difficulties by ID
export const fetchDifficultiesById = createAsyncThunk(
  "difficultiesById/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/difficulties/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Cek apakah data adalah objek
      if (typeof data !== "object" || data === null) {
        throw new Error("Format data tidak valid");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create category difficulties
export const fetchCreateDifficulties = createAsyncThunk(
  "difficulties/create",
  async (newCategory, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://arabiya-syari-fiber-production.up.railway.app/api/difficulties",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCategory),
        }
      );

      const responseData = await response.json();
      console.log("Response dari API:", responseData); // Debugging

      if (!response.ok) {
        return rejectWithValue(responseData); // Kirim error dari server
      }

      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update category difficulties
export const fetchUpdateDifficulties = createAsyncThunk(
  "difficulties/update",
  async (updatedCategory, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/difficulties/${updatedCategory.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCategory),
        }
      );

      const responseData = await response.json();
      console.log("Response dari API:", responseData); // Debugging

      if (!response.ok) {
        return rejectWithValue(responseData); // Kirim error dari server
      }

      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete difficulties
export const fetchDeleteDifficulties = createAsyncThunk(
  "difficulties/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://arabiya-syari-fiber-production.up.railway.app/api/difficulties/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Slice untuk category difficulties
const difficultiesSlice = createSlice({
  name: "difficulties",
  initialState: {
    status: "idle",
    error: null,
    data: [],
    detail: null, // Menyimpan data detail berdasarkan ID
  },
  reducers: {
    resetCategoryDifficulties: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = [];
      state.detail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch semua kategori
      .addCase(fetchDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Terjadi kesalahan";
      })

      // Fetch kategori berdasarkan ID
      .addCase(fetchDifficultiesById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchDifficultiesById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload; // Simpan detail kategori
        state.error = null;
      })
      .addCase(fetchDifficultiesById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Terjadi kesalahan";
      })
      // Create kategori baru
      .addCase(fetchCreateDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCreateDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Tambahkan kategori baru ke data
        state.error = null;
      })
      .addCase(fetchCreateDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Terjadi kesalahan saat membuat kategori";
      })
      // update category
      .addCase(fetchUpdateDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUpdateDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.map((category) => {
          if (category.id === action.payload.id) {
            return action.payload;
          }
          return category;
        });
        state.error = null;
      })
      .addCase(fetchUpdateDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Terjadi kesalahan saat mengupdate kategori";
      })
      // Deletee category
      .addCase(fetchDeleteDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchDeleteDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (category) => category.id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(fetchDeleteDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Terjadi kesalahan saat menghapus kategori";
      });
  },
});

export const { resetCategoryDifficulties } = difficultiesSlice.actions;
export default difficultiesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get category difficulties
export const fetchCategoryDifficulties = createAsyncThunk(
  "categoryDifficulties/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        return rejectWithValue("Token tidak ditemukan, silakan login ulang.");
      }

      const response = await fetch(
        "https://arabiya-syari-fiber-production.up.railway.app/api/difficulties",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Cek apakah response sukses (200-299)
      if (!response.ok) {
        const errorText = await response.text(); // Ambil teks error dari server
        throw new Error(`HTTP error ${response.status}: ${errorText}`);
      }

      // Periksa apakah response memiliki isi sebelum parse JSON
      const contentType = response.headers.get("Content-Type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response bukan JSON yang valid.");
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Format data tidak valid, expected array.");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Terjadi kesalahan.");
    }
  }
);


// get difficulties by ID
export const fetchCategoryDifficultiesById = createAsyncThunk(
  "categoryDifficultiesById/fetch",
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
export const fetchCreateCategoryDifficulties = createAsyncThunk(
  "categoryDifficulties/create",
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
export const fetchUpdateCategoryDifficulties = createAsyncThunk(
  "categoryDifficulties/update",
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
export const fetchDeleteCategoryDifficulties = createAsyncThunk(
  "categoryDifficulties/delete",
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
const categoryDifficultiesSlice = createSlice({
  name: "categoryDifficulties",
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
      .addCase(fetchCategoryDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategoryDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCategoryDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Terjadi kesalahan";
      })

      // Fetch kategori berdasarkan ID
      .addCase(fetchCategoryDifficultiesById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategoryDifficultiesById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detail = action.payload; // Simpan detail kategori
        state.error = null;
      })
      .addCase(fetchCategoryDifficultiesById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Terjadi kesalahan";
      })
      // Create kategori baru
      .addCase(fetchCreateCategoryDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCreateCategoryDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload); // Tambahkan kategori baru ke data
        state.error = null;
      })
      .addCase(fetchCreateCategoryDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Terjadi kesalahan saat membuat kategori";
      })
      // update category
      .addCase(fetchUpdateCategoryDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUpdateCategoryDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.map((category) => {
          if (category.id === action.payload.id) {
            return action.payload;
          }
          return category;
        });
        state.error = null;
      })
      .addCase(fetchUpdateCategoryDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Terjadi kesalahan saat mengupdate kategori";
      })
      // Deletee category
      .addCase(fetchDeleteCategoryDifficulties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchDeleteCategoryDifficulties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (category) => category.id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(fetchDeleteCategoryDifficulties.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Terjadi kesalahan saat menghapus kategori";
      });
  },
});

export const { resetCategoryDifficulties } = categoryDifficultiesSlice.actions;
export default categoryDifficultiesSlice.reducer;

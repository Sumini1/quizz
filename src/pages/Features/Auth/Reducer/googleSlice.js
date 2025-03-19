// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Ensure environment variables are defined
// const BASE_URL = import.meta.env.VITE_BASE_URL || "";
// const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || "";

// if (!BASE_URL || !REDIRECT_URL) {
//   console.error("BASE_URL or REDIRECT_URL not found in .env");
// }

// // Store Google auth state in localStorage
// const storeGoogleAuthState = (state) => {
//   try {
//     localStorage.setItem("googleAuthState", JSON.stringify(state));
//   } catch (error) {
//     console.error("Error storing Google auth state:", error);
//   }
// };

// // Retrieve Google auth state from localStorage
// const getGoogleAuthState = () => {
//   try {
//     const state = localStorage.getItem("googleAuthState");
//     return state ? JSON.parse(state) : null;
//   } catch (error) {
//     console.error("Error retrieving Google auth state:", error);
//     return null;
//   }
// };

// // Thunk for initiating Google OAuth
// export const googleLogin = createAsyncThunk(
//   "auth/googleLogin",
//   async (_, { rejectWithValue }) => {
//     try {
//       if (!BASE_URL || !REDIRECT_URL) {
//         throw new Error("Environment variables not found.");
//       }

//       // Generate a state parameter to verify the callback
//       const state = Math.random().toString(36).substring(2, 15);

//       // Store state in localStorage before redirect
//       const stateObj = { state, timestamp: Date.now() };
//       storeGoogleAuthState(stateObj);

//       // Redirect user to Google OAuth endpoint with state parameter
//       window.location.href = `${BASE_URL}/auth/google?redirectUrl=${encodeURIComponent(
//         REDIRECT_URL
//       )}&state=${state}`;

//       return stateObj; // Won't be processed due to redirect
//     } catch (error) {
//       console.error("Google login error:", error.message);
//       return rejectWithValue(error.message || "Failed to get Google OAuth URL");
//     }
//   }
// );

// // Thunk for handling callback from Google OAuth
// export const googleCallback = createAsyncThunk(
//   "auth/googleCallback",
//   async ({ code, state }, { rejectWithValue }) => {
//     try {
//       if (!BASE_URL || !REDIRECT_URL) {
//         throw new Error("Environment variables not found.");
//       }

//       if (!code) {
//         throw new Error("Authentication code not found.");
//       }

//       // Verify state parameter to prevent CSRF attacks
//       const storedState = getGoogleAuthState();

//       if (!storedState || storedState.state !== state) {
//         throw new Error("Invalid state parameter. Authentication failed.");
//       }

//       // Check if state is expired (30 minutes max)
//       const stateAge = Date.now() - storedState.timestamp;
//       if (stateAge > 30 * 60 * 1000) {
//         throw new Error("Authentication session expired. Please try again.");
//       }

//       // Send code to backend for verification
//       const response = await axios.post(
//         `${BASE_URL}/auth/google/callback`,
//         {
//           code,
//           state,
//           redirectUrl: REDIRECT_URL,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const userData = response.data;

//       if (!userData) {
//         throw new Error("No user data received from server.");
//       }

//       // Clear the stored state after successful authentication
//       localStorage.removeItem("googleAuthState");

//       return userData;
//     } catch (error) {
//       console.error("Google callback error:", error.message);
//       // Clear the stored state on error
//       localStorage.removeItem("googleAuthState");
//       return rejectWithValue(
//         error.message || "Failed to authenticate with Google"
//       );
//     }
//   }
// );

// const googleSlice = createSlice({
//   name: "googleAuth",
//   initialState: {
//     user: null,
//     token: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     clearGoogleAuthState: (state) => {
//       state.user = null;
//       state.token = null;
//       state.error = null;
//       localStorage.removeItem("googleAuthState");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(googleLogin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(googleLogin.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(googleLogin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(googleCallback.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(googleCallback.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload?.user || null;
//         state.token = action.payload?.token || null;
//       })
//       .addCase(googleCallback.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { clearGoogleAuthState } = googleSlice.actions;
// export default googleSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Ensure environment variables are defined
const BASE_URL = import.meta.env.VITE_BASE_URL || "";
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || "";

if (!BASE_URL || !REDIRECT_URL) {
  console.error("BASE_URL or REDIRECT_URL not found in .env");
}

// Store Google auth state in localStorage
const storeGoogleAuthState = (state) => {
  try {
    localStorage.setItem("googleAuthState", JSON.stringify(state));
  } catch (error) {
    console.error("Error storing Google auth state:", error);
  }
};

// Retrieve Google auth state from localStorage
const getGoogleAuthState = () => {
  try {
    const state = localStorage.getItem("googleAuthState");
    return state ? JSON.parse(state) : null;
  } catch (error) {
    console.error("Error retrieving Google auth state:", error);
    return null;
  }
};

// Thunk for initiating Google OAuth
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (_, { rejectWithValue }) => {
    try {
      if (!BASE_URL || !REDIRECT_URL) {
        throw new Error("Environment variables not found.");
      }

      // Generate a state parameter to verify the callback
      const state = Math.random().toString(36).substring(2, 15);

      // Store state in localStorage before redirect
      const stateObj = { state, timestamp: Date.now() };
      storeGoogleAuthState(stateObj);

      // Redirect user to Google OAuth endpoint with state parameter
      window.location.href = `${BASE_URL}/auth/google?redirectUrl=${encodeURIComponent(
        REDIRECT_URL
      )}&state=${state}`;

      return stateObj; // Won't be processed due to redirect
    } catch (error) {
      console.error("Google login error:", error.message);
      return rejectWithValue(error.message || "Failed to get Google OAuth URL");
    }
  }
);

// Thunk for handling callback from Google OAuth
export const googleCallback = createAsyncThunk(
  "auth/googleCallback",
  async ({ code, state }, { rejectWithValue }) => {
    try {
      if (!BASE_URL || !REDIRECT_URL) {
        throw new Error("Environment variables not found.");
      }

      if (!code) {
        throw new Error("Authentication code not found.");
      }

      // Verify state parameter to prevent CSRF attacks
      const storedState = getGoogleAuthState();

      if (!storedState || storedState.state !== state) {
        throw new Error("Invalid state parameter. Authentication failed.");
      }

      // Check if state is expired (30 minutes max)
      const stateAge = Date.now() - storedState.timestamp;
      if (stateAge > 30 * 60 * 1000) {
        throw new Error("Authentication session expired. Please try again.");
      }

      // Send code to backend for verification
      const response = await axios.post(
        `${BASE_URL}/auth/google/callback`,
        {
          code,
          state,
          redirectUrl: REDIRECT_URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userData = response.data;

      if (!userData) {
        throw new Error("No user data received from server.");
      }

      // Clear the stored state after successful authentication
      localStorage.removeItem("googleAuthState");

      return userData;
    } catch (error) {
      console.error("Google callback error:", error.message);
      // Clear the stored state on error
      localStorage.removeItem("googleAuthState");
      return rejectWithValue(
        error.message || "Failed to authenticate with Google"
      );
    }
  }
);

const googleSlice = createSlice({
  name: "googleAuth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearGoogleAuthState: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("googleAuthState");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(googleCallback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleCallback.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user || null;
        state.token = action.payload?.token || null;
      })
      .addCase(googleCallback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearGoogleAuthState } = googleSlice.actions;
export default googleSlice.reducer;

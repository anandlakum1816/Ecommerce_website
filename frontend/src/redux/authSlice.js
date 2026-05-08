// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import API from "../services/api";

// ================= REGISTER USER =================

export const registerUser = createAsyncThunk(
  "auth/registerUser",

  async (userData, thunkAPI) => {
    try {
      const { data } = await API.post("/auth/register", userData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// ================= LOGIN USER =================

export const loginUser = createAsyncThunk(
  "auth/loginUser",

  async (userData, thunkAPI) => {
    try {
      const { data } = await API.post("/auth/login", userData);

      // STORE TOKEN
      localStorage.setItem("token", data.token);

      // STORE USER ID
      localStorage.setItem("userId", data.user._id);

      // STORE USER
      localStorage.setItem("user", JSON.stringify(data.user));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// ================= LOGOUT USER =================

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",

  async (_, thunkAPI) => {
    try {
      const { data } = await API.post("/auth/logout");

      // CLEAR STORAGE
      localStorage.removeItem("token");

      localStorage.removeItem("user");

      localStorage.removeItem("userId");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// ================= GET USER PROFILE =================

export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",

  async (_, thunkAPI) => {
    try {
      const userId = localStorage.getItem("userId");

      const { data } = await API.get(`/auth/profile/${userId}`);

      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,

    successMessage: "",

    errorMessage: "",

    token: localStorage.getItem("token") || null,

    userId: localStorage.getItem("userId") || null,

    profile: null,
  },

  reducers: {
    // CLEAR MESSAGES
    clearMessages: (state) => {
      state.successMessage = "";

      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder

      // ================= REGISTER =================

      // PENDING
      .addCase(registerUser.pending, (state) => {
        state.loading = true;

        state.successMessage = "";

        state.errorMessage = "";
      })

      // SUCCESS
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;

        state.errorMessage = "";

        state.successMessage = action.payload.message;
      })

      // ERROR
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;

        state.successMessage = "";

        state.errorMessage = action.payload;
      })

      // ================= LOGIN =================

      // PENDING
      .addCase(loginUser.pending, (state) => {
        state.loading = true;

        state.successMessage = "";

        state.errorMessage = "";
      })

      // SUCCESS
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.errorMessage = "";

        state.successMessage = action.payload.message;

        state.token = action.payload.token;

        state.userId = action.payload.user._id;
      })

      // ERROR
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;

        state.successMessage = "";

        state.errorMessage = action.payload;
      })

      // ================= LOGOUT =================

      // SUCCESS
      // ================= LOGOUT =================

      // SUCCESS
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;

        state.userId = null;

        state.successMessage = "";

        state.errorMessage = "";
      })

      // ================= GET PROFILE =================

      // PENDING
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })

      // SUCCESS
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;

        state.profile = action.payload;
      })

      // ERROR
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;

        state.errorMessage = action.payload;
      });
  },
});

export const { clearMessages } = authSlice.actions;

export default authSlice.reducer;

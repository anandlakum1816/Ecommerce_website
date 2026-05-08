import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import API from "../service/api.js";

// ================= ADMIN LOGIN =================

export const adminLogin = createAsyncThunk(
  "admin/adminLogin",

  async (adminData, thunkAPI) => {
    try {
      const { data } = await API.post("/admin/login", adminData);

      // STORE TOKEN
      localStorage.setItem("adminToken", data.token);

      // STORE ADMIN
      localStorage.setItem("admin", JSON.stringify(data.admin));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// ================= GET ALL USERS =================

export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",

  async ({ page = 1, role }, thunkAPI) => {
    try {
      const token = localStorage.getItem("adminToken");

      const { data } = await API.get(`/admin/users?page=${page}&role=${role}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const adminAuthSlice = createSlice({
  name: "adminAuth",

  initialState: {
    loading: false,

    successMessage: "",

    errorMessage: "",

    users: [],

    currentPage: 1,

    totalPages: 1,

    totalUsers: 0,

    adminToken: localStorage.getItem("adminToken") || null,

    admin: JSON.parse(localStorage.getItem("admin")) || null,
  },

  reducers: {
    // LOGOUT
    adminLogout: (state) => {
      localStorage.removeItem("adminToken");

      localStorage.removeItem("admin");

      state.adminToken = null;

      state.admin = null;

      state.users = [];

      state.successMessage = "";

      state.errorMessage = "";

      state.currentPage = 1;

      state.totalPages = 1;

      state.totalUsers = 0;
    },

    // CLEAR MESSAGE
    clearMessages: (state) => {
      state.successMessage = "";

      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder

      // ================= LOGIN =================

      .addCase(adminLogin.pending, (state) => {
        state.loading = true;

        state.successMessage = "";

        state.errorMessage = "";
      })

      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;

        state.successMessage = action.payload.message;

        state.adminToken = action.payload.token;

        state.admin = action.payload.admin;
      })

      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;

        state.errorMessage = action.payload;
      })

      // ================= GET USERS =================

      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;

        state.users = action.payload.users;

        state.currentPage = action.payload.currentPage;

        state.totalPages = action.payload.totalPages;

        state.totalUsers = action.payload.totalUsers;
      })

      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;

        state.errorMessage = action.payload;
      });
  },
});

export const { adminLogout, clearMessages } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;

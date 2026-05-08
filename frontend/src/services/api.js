// api.js

import axios from "axios";

const API = axios.create({

  baseURL:
  "https://ecommerce-website-c88o.onrender.com/api",

});

// ================= REQUEST INTERCEPTOR =================

API.interceptors.request.use(

  (config) => {

    // GET TOKEN
    const token =
      localStorage.getItem(
        "token"
      );

    // SEND TOKEN
    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;

  },

  (error) => {

    return Promise.reject(error);

  }

);

// ================= RESPONSE INTERCEPTOR =================

API.interceptors.response.use(

  (response) => response,

  (error) => {

    // TOKEN EXPIRED / INVALID
    if (
      error.response &&
      error.response.status === 401
    ) {

      // REMOVE STORAGE
      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "userId"
      );

      // REDIRECT LOGIN
      window.location.href =
        "/login";

    }

    return Promise.reject(error);

  }

);

export default API;
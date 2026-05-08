import React from "react";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./pages/Home";

import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";

import Profile from "./pages/Profile";

import CustomerDashboard from "./pages/CustomerDashboard";

import SellerDashboard from "./pages/SellerDashboard";

import Products from "./components/Products";

import Aboutus from "./components/Aboutus";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // HIDE NAVBAR & FOOTER
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-sky-50">
      {/* NAVBAR */}
      {!hideLayout && <Navbar />}

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<Aboutus />} />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* CUSTOMER DASHBOARD */}
        <Route
          path="/customer/dashboard"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />

        {/* SELLER DASHBOARD */}
        <Route
          path="/seller/dashboard"
          element={
            <ProtectedRoute role="seller">
              <SellerDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
      </Routes>

      {/* FOOTER */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;

import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";

import Navbar from "./components/Navbar";

import User from "./pages/User";

import Sellers from "./pages/Sellers";

import Sidebar from "./components/Sidebar";

import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";

import { AppContext } from "./context/AppContext";

function App() {
  // GET ADMIN FROM CONTEXT
  const { admin } = useContext(AppContext);

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* SHOW AFTER LOGIN */}
      {admin && (
        <>
          <Navbar />

          <Sidebar />
        </>
      )}

      {/* PAGE AREA */}
      <div className={admin ? "ml-[80px] md:ml-[270px] pt-[80px]" : ""}>
        <Routes>
          {/* DEFAULT */}
          <Route path="/" element={<Navigate to="/admin/login" />} />

          {/* LOGIN */}
          <Route path="/admin/login" element={<Login />} />

          {/* DASHBOARD */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* SELLERS */}
          <Route
            path="/admin/sellers"
            element={
              <ProtectedRoute>
                <Sellers />
              </ProtectedRoute>
            }
          />

          {/* CUSTOMERS */}
          <Route
            path="/admin/customers"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

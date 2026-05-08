import React, { useState, useContext, useEffect } from "react";

import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import { adminLogin, clearMessages } from "../redux/adminAuthSlice";

import { AppContext } from "../context/AppContext";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { setAdmin } = useContext(AppContext);

  const { loading, successMessage, errorMessage, admin } = useSelector(
    (state) => state.adminAuth,
  );

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(adminLogin(formData));

    if (result.payload?.admin) {
      setAdmin(result.payload.admin);
    }
  };

  // SUCCESS & ERROR
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);

      navigate("/admin/dashboard");

      dispatch(clearMessages());
    }

    if (errorMessage) {
      toast.error(errorMessage);

      dispatch(clearMessages());
    }
  }, [successMessage, errorMessage, navigate, dispatch]);

  return (
    <section className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
        {/* TOP */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Admin Login</h1>

          <p className="text-gray-500 mt-3">Welcome back admin panel</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Email Address
            </label>

            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 focus-within:border-pink-500 transition">
              <FiMail className="text-gray-400 text-xl mr-3" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter admin email"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Password
            </label>

            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 focus-within:border-pink-500 transition">
              <FiLock className="text-gray-400 text-xl mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full bg-transparent outline-none text-gray-700"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-400 text-xl" />
                ) : (
                  <FiEye className="text-gray-400 text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-lg"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;

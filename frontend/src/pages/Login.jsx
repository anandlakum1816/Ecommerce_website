import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  loginUser,
  clearMessages,
} from "../redux/authSlice";

import {
  AppContext,
} from "../context/AppContext";

import toast from "react-hot-toast";

function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    setUser,
  } = useContext(
    AppContext
  );

  const {
    loading,
    successMessage,
    errorMessage,
    token,
  } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(
      loginUser(formData)
    );

  };

  // SUCCESS + ERROR
  useEffect(() => {

    // SUCCESS
    if (successMessage) {

      toast.success(successMessage);

      // GET USER FROM LOCALSTORAGE
      const userData =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

      // SET USER CONTEXT
      setUser(userData);

      // CLEAR INPUTS
      setFormData({
        email: "",
        password: "",
      });

      // CLEAR MESSAGE
      dispatch(clearMessages());

      // REDIRECT HOME
      setTimeout(() => {

        navigate("/");

      }, 1500);

    }

    // ERROR
    if (errorMessage) {

      toast.error(errorMessage);

      // CLEAR ERROR
      dispatch(clearMessages());

    }

  }, [
    successMessage,
    errorMessage,
    navigate,
    dispatch,
    setUser,
  ]);

  // AUTO LOGIN CHECK
  useEffect(() => {

    if (token) {

      navigate("/");

    }

  }, [
    token,
    navigate,
  ]);

  return (
    <section className="min-h-screen bg-[#fff7fa] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* HEADING */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">

            Welcome Back

          </h1>

          <p className="text-gray-500 mt-2 text-sm">

            Login to your account

          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">

              Email Address

            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-pink-500 transition duration-300">

              <FiMail className="text-gray-400 text-xl mr-3" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent text-gray-700"
              />

            </div>

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">

              Password

            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-pink-500 transition duration-300">

              <FiLock className="text-gray-400 text-xl mr-3" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent text-gray-700"
              />

              {/* SHOW PASSWORD */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >

                {
                  showPassword
                    ? (
                      <FiEyeOff className="text-gray-400 text-xl cursor-pointer" />
                    )
                    : (
                      <FiEye className="text-gray-400 text-xl cursor-pointer" />
                    )
                }

              </button>

            </div>

          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">

              <input
                type="checkbox"
                className="accent-pink-500"
              />

              Remember me

            </label>

            <button
              type="button"
              className="text-pink-500 hover:underline"
            >

              Forgot?

            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl uppercase tracking-wider font-semibold transition duration-300"
          >

            {
              loading
                ? "Loading..."
                : "Login"
            }

          </button>

        </form>

        {/* REGISTER LINK */}
        <p className="text-center text-gray-600 text-sm mt-6">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-pink-500 font-semibold hover:underline"
          >

            Register

          </Link>

        </p>

      </div>

    </section>
  );
}

export default Login;
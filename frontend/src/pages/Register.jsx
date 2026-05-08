import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
} from "react-icons/fi";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  registerUser,
  clearMessages,
} from "../redux/authSlice";

import toast from "react-hot-toast";

function Register() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    loading,
    successMessage,
    errorMessage,
  } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      role: "customer",
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

    const userData = {
      name:
        formData.firstName +
        " " +
        formData.lastName,

      email: formData.email,

      mobile: formData.mobile,

      password:
        formData.password,

      role: formData.role,
    };

    dispatch(
      registerUser(userData)
    );
  };

  // SUCCESS + ERROR
 // SUCCESS + ERROR
useEffect(() => {

  // SUCCESS
  if (successMessage) {

    toast.success(successMessage);

    // CLEAR INPUTS
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      role: "customer",
    });

    // CLEAR REDUX MESSAGE
    dispatch(clearMessages());

    // REDIRECT LOGIN
    setTimeout(() => {

      navigate("/login");

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
]);

  return (
    <section className="min-h-screen bg-[#fff7fa] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">

        {/* TOP */}
        <div className="text-center pt-10 pb-6 px-6">

          <h1 className="text-4xl font-bold text-gray-800">

            Create Account

          </h1>

          <p className="text-gray-500 mt-3 text-sm">

            Join Ecommerce and start shopping today

          </p>

        </div>

        {/* FORM */}
        <div className="px-6 md:px-10 pb-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* FIRST & LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* FIRST NAME */}
              <div>

                <label className="text-sm font-medium text-gray-700 mb-2 block">

                  First Name

                </label>

                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-pink-500 transition duration-300">

                  <FiUser className="text-gray-400 text-xl mr-3" />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First name"
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent"
                  />

                </div>

              </div>

              {/* LAST NAME */}
              <div>

                <label className="text-sm font-medium text-gray-700 mb-2 block">

                  Last Name

                </label>

                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-pink-500 transition duration-300">

                  <FiUser className="text-gray-400 text-xl mr-3" />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last name"
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent"
                  />

                </div>

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">

                Email Address

              </label>

              <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-pink-500 transition duration-300">

                <FiMail className="text-gray-400 text-xl mr-3" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* MOBILE */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">

                Mobile Number

              </label>

              <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-pink-500 transition duration-300">

                <FiPhone className="text-gray-400 text-xl mr-3" />

                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  placeholder="Enter mobile number"
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">

                Password

              </label>

              <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-pink-500 transition duration-300">

                <FiLock className="text-gray-400 text-xl mr-3" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Create password"
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* ACCOUNT TYPE */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-3 block">

                Select Account Type

              </label>

              <div className="flex flex-col sm:flex-row gap-4">

                <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-5 py-3 cursor-pointer hover:border-pink-500 transition duration-300 w-full">

                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={
                      formData.role ===
                      "customer"
                    }
                    onChange={handleChange}
                    className="accent-pink-500"
                  />

                  <span className="text-gray-700 font-medium">
                    Customer
                  </span>

                </label>

                <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-5 py-3 cursor-pointer hover:border-pink-500 transition duration-300 w-full">

                  <input
                    type="radio"
                    name="role"
                    value="seller"
                    checked={
                      formData.role ===
                      "seller"
                    }
                    onChange={handleChange}
                    className="accent-pink-500"
                  />

                  <span className="text-gray-700 font-medium">
                    Seller
                  </span>

                </label>

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl uppercase tracking-wider font-semibold transition duration-300"
            >

              {
                loading
                  ? "Loading..."
                  : "Create Account"
              }

            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-gray-600 text-sm mt-7">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-pink-500 font-semibold hover:underline"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Register;
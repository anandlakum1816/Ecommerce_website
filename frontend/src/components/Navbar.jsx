import React, { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { FaSearch, FaShoppingCart, FaShoppingBag } from "react-icons/fa";

import { HiMenuAlt3, HiChevronDown, HiX } from "react-icons/hi";

import { AppContext } from "../context/AppContext";

import { useDispatch } from "react-redux";

import { logoutUser } from "../redux/authSlice";

import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, setUser } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  // LOGOUT
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());

      setUser(null);

      setShowDropdown(false);

      toast.success("Logout Successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-[#f5f5f5] w-full py-5 border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaShoppingBag className="text-3xl text-black" />

            <h1 className="text-3xl md:text-4xl font-light tracking-[4px] uppercase text-black">
              Ecommerce
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-12 text-[17px] font-medium uppercase">
            <NavLink to="/">Home</NavLink>

            {/* CUSTOMER DASHBOARD */}
            {user?.role === "customer" && (
              <NavLink to="/customer/dashboard">Dashboard</NavLink>
            )}
            {/* SELLER DASHBOARD */}
            {user?.role === "seller" && (
              <NavLink to="/seller/dashboard">Dashboard</NavLink>
            )}

            <NavLink to="/products">Products</NavLink>

            <NavLink to="/about">About</NavLink>
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">
            {/* CART */}
            <button className="relative text-xl">
              <FaShoppingCart />
            </button>

            {/* SEARCH */}
            <button className="text-xl">
              <FaSearch />
            </button>

            {/* USER */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2"
                >
                  {/* AVATAR */}
                  <div className="w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center text-lg font-bold uppercase">
                    {user?.name?.charAt(0)}
                  </div>

                  <HiChevronDown className="text-xl" />
                </button>

                {/* DROPDOWN */}
                {showDropdown && (
                  <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-xl w-44 overflow-hidden border z-50">
                    <button
                      onClick={() => {
                        navigate("/profile");

                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-pink-50"
                    >
                      Profile
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-3 hover:bg-pink-50 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* LOGIN */}
                <button
                  onClick={() => navigate("/login")}
                  className="px-5 py-2 border border-black"
                >
                  Login
                </button>

                {/* REGISTER */}
                <button
                  onClick={() => navigate("/register")}
                  className="px-5 py-2 bg-pink-500 text-white"
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setShowMenu(true)}
            className="lg:hidden text-4xl"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-[999] transition-all duration-500 overflow-hidden ${
          showMenu ? "w-[280px]" : "w-0"
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <h1 className="text-2xl font-light tracking-[4px]">Ecommerce</h1>

          <button onClick={() => setShowMenu(false)} className="text-3xl">
            <HiX />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-6 px-6 py-8 text-[16px] uppercase font-medium">
          <NavLink to="/" onClick={() => setShowMenu(false)}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={() => setShowMenu(false)}>
            Products
          </NavLink>

          <NavLink to="/about" onClick={() => setShowMenu(false)}>
            About
          </NavLink>

          {/* CUSTOMER DASHBOARD */}
          {user?.role === "customer" && (
            <NavLink
              to="/customer/dashboard"
              onClick={() => setShowMenu(false)}
            >
              Customer Dashboard
            </NavLink>
          )}

          {user?.role === "seller" && (
            <NavLink to="/seller/dashboard" onClick={() => setShowMenu(false)}>
              Seller Dashboard
            </NavLink>
          )}

          {/* USER */}
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full py-3 bg-red-500 text-white rounded-lg"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-4 mt-5">
              <button
                onClick={() => navigate("/login")}
                className="w-full py-3 border border-black uppercase"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="w-full py-3 bg-pink-500 text-white uppercase"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

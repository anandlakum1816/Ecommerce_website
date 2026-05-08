import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaShoppingBag } from "react-icons/fa";

import { HiChevronDown } from "react-icons/hi";

import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();

  const { admin, setAdmin } = useContext(AppContext);

  const [showDropdown, setShowDropdown] = useState(false);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    localStorage.removeItem("admin");

    setAdmin(null);

    navigate("/admin/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white border-b border-gray-200 z-50">
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <FaShoppingBag className="text-3xl text-black" />

          <h1 className="text-xl md:text-3xl font-light tracking-[2px] md:tracking-[4px] uppercase text-black">
            Admin Ecommerce
          </h1>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 md:gap-3"
          >
            {/* AVATAR */}
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-pink-500 text-white flex items-center justify-center text-lg font-bold uppercase">
              {admin?.email?.charAt(0)}
            </div>

            <HiChevronDown className="text-xl md:text-2xl text-gray-700" />
          </button>

          {/* DROPDOWN */}
          {showDropdown && (
            <div className="absolute right-0 mt-4 bg-white shadow-xl rounded-2xl overflow-hidden border w-40 md:w-44">
              <button
                onClick={handleLogout}
                className="w-full text-left px-5 py-4 hover:bg-pink-50 text-red-500 font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

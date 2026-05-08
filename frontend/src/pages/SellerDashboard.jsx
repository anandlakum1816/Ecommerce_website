import React from "react";

import { useSelector } from "react-redux";

import {
  FiSearch,
  FiShoppingBag,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

function SellerDashboard() {
  const { user } = useSelector((state) => state.auth);

  const products = [
    {
      title: "Premium Hoodie",
      price: "$49",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Stylish Jacket",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Casual T-Shirt",
      price: "$29",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Modern Shoes",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-10 bg-gray-50 min-h-screen">
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Seller Dashboard
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Welcome Back,
            <span className="text-pink-500 font-semibold ml-2 capitalize">
              {user?.name}
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* SEARCH */}
          <div className="relative w-full md:w-[320px]">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-5 outline-none focus:border-pink-500 shadow-sm"
            />
          </div>

          {/* CATEGORY */}
          <div className="relative w-full md:w-[220px]">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 px-5 pr-12 outline-none focus:border-pink-500 shadow-sm text-gray-700">
              <option>All Categories</option>

              <option>Men</option>

              <option>Women</option>

              <option>Children</option>

              <option>Electronics</option>

              <option>Shoes</option>

              <option>Accessories</option>
            </select>

            {/* CUSTOM ARROW */}
            <div className="absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* ADD PRODUCT BUTTON */}
          <button className="w-full md:w-auto bg-pink-500 hover:bg-pink-600 text-white px-7 py-4 rounded-2xl font-semibold shadow-sm transition">
            + Add Product
          </button>
        </div>
      </div>

      {/* DASHBOARD CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
        {/* TOTAL PRODUCTS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Total Products
              </p>

              <h1 className="text-3xl font-bold text-gray-800 mt-2">
                120
              </h1>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
              <FiShoppingBag className="text-3xl text-pink-500" />
            </div>
          </div>
        </div>

        {/* TOTAL ORDERS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Total Orders
              </p>

              <h1 className="text-3xl font-bold text-gray-800 mt-2">
                340
              </h1>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <FiUsers className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>

        {/* TOTAL SALES */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Total Sales
              </p>

              <h1 className="text-3xl font-bold text-gray-800 mt-2">
                ₹45,000
              </h1>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <FiDollarSign className="text-3xl text-green-500" />
            </div>
          </div>
        </div>

        {/* TOTAL CUSTOMERS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Customers
              </p>

              <h1 className="text-3xl font-bold text-gray-800 mt-2">
                890
              </h1>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
              <FiUsers className="text-3xl text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* TRENDING PRODUCTS */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Trending Products
          </h2>

          <button className="text-pink-500 font-medium">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-pink-500 text-2xl font-bold mt-2">
                  {item.price}
                </p>

                <button className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-2xl transition duration-300">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SellerDashboard;
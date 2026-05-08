import React from "react";

import {
  FaBoxOpen,
  FaHeart,
  FaShoppingCart,
  FaClock,
} from "react-icons/fa";

import {
  FiSearch,
} from "react-icons/fi";

function CustomerDashboard() {

  // USER
  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  // DASHBOARD CARDS
  const cards = [
    {
      title: "Orders",
      count: "12",
      icon: <FaBoxOpen />,
    },

    {
      title: "Wishlist",
      count: "08",
      icon: <FaHeart />,
    },

    {
      title: "Cart",
      count: "05",
      icon: <FaShoppingCart />,
    },

    {
      title: "Pending",
      count: "03",
      icon: <FaClock />,
    },
  ];

  // CATEGORIES
  const categories = [
    {
      title: "Mens Fashion",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Womens Fashion",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Kids Collection",
      image:
        "https://images.unsplash.com/photo-1519238359922-989348752efb?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // PRODUCTS
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
    <section className="min-h-screen bg-[#f8fafc] px-5 md:px-10 py-10">

      {/* TOP */}
    {/* TOP */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">

  {/* LEFT */}
  <div>

    <h1 className="text-4xl font-bold text-gray-800">

      Customer Dashboard

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

  <select
    className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 px-5 pr-12 outline-none focus:border-pink-500 shadow-sm text-gray-700"
  >

    <option>
      All Categories
    </option>

    <option>
      Men
    </option>

    <option>
      Women
    </option>

    <option>
      Children
    </option>

    <option>
      Electronics
    </option>

    <option>
      Shoes
    </option>

    <option>
      Accessories
    </option>

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

  </div>

</div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">

        {cards.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
          >

            <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-500 flex items-center justify-center text-3xl mb-6">

              {item.icon}

            </div>

            <h3 className="text-gray-500 text-sm uppercase tracking-wide">

              {item.title}

            </h3>

            <h1 className="text-4xl font-bold text-gray-800 mt-3">

              {item.count}

            </h1>

          </div>

        ))}

      </div>

      {/* CATEGORIES */}
      <div className="mb-16">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold text-gray-800">

            Shop Categories

          </h2>

          <button className="text-pink-500 font-medium">

            View All

          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {categories.map((item, index) => (

            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-7">

                <h2 className="text-white text-3xl font-bold">

                  {item.title}

                </h2>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* PRODUCTS */}
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

export default CustomerDashboard;
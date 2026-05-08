import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../redux/adminAuthSlice";

import { FiUsers, FiShoppingBag, FiPackage, FiClipboard } from "react-icons/fi";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.adminAuth);

  // API CALL
  useEffect(() => {
    dispatch(
      getAllUsers({
        page: 1,
        role: "",
      }),
    );
  }, [dispatch]);

  // REAL CUSTOMER COUNT
  const customerCount = users.filter((user) => user.role === "customer").length;

  // REAL SELLER COUNT
  const sellerCount = users.filter((user) => user.role === "seller").length;

  // DUMMY DATA
  const dashboardData = [
    {
      name: "Jan",
      users: 40,
      products: 24,
    },

    {
      name: "Feb",
      users: 30,
      products: 13,
    },

    {
      name: "Mar",
      users: 20,
      products: 98,
    },

    {
      name: "Apr",
      users: 27,
      products: 39,
    },

    {
      name: "May",
      users: 18,
      products: 48,
    },

    {
      name: "Jun",
      users: 23,
      products: 38,
    },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-10 bg-gray-50 min-h-screen">
      {/* TOP */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>

        <p className="text-gray-500 mt-2 text-lg">Welcome Back Admin 👋</p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {/* CUSTOMERS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-medium">Customers</p>

              <h1 className="text-4xl font-bold text-gray-800 mt-3">
                {customerCount}
              </h1>

              <p className="text-green-500 text-sm mt-2">Real Customers</p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
              <FiUsers className="text-3xl text-pink-500" />
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-medium">Products</p>

              <h1 className="text-4xl font-bold text-gray-800 mt-3">890</h1>

              <p className="text-blue-500 text-sm mt-2">+8% This Month</p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <FiShoppingBag className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>

        {/* SELLERS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-medium">Sellers</p>

              <h1 className="text-4xl font-bold text-gray-800 mt-3">
                {sellerCount}
              </h1>

              <p className="text-purple-500 text-sm mt-2">Real Sellers</p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
              <FiPackage className="text-3xl text-purple-500" />
            </div>
          </div>
        </div>

        {/* ORDERS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-medium">Orders</p>

              <h1 className="text-4xl font-bold text-gray-800 mt-3">2,430</h1>

              <p className="text-yellow-500 text-sm mt-2">+20% This Month</p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
              <FiClipboard className="text-3xl text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* CHART SECTION */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Analytics Overview
            </h2>

            <p className="text-gray-500 mt-2">Customer & Product Growth</p>
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl transition">
            Download Report
          </button>
        </div>

        {/* CHART */}
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dashboardData}>
              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="users" radius={[10, 10, 0, 0]} />

              <Bar dataKey="products" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

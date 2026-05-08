import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../redux/adminAuthSlice";

function Sellers() {
  const dispatch = useDispatch();

  // GET USERS
  const { users, loading, currentPage, totalPages } = useSelector(
    (state) => state.adminAuth,
  );

  // API CALL
  useEffect(() => {
    dispatch(
      getAllUsers({
        page: 1,
        role: "seller",
      }),
    );
  }, [dispatch]);

  // FILTER SELLERS
  const sellers = users.filter((user) => user.role === "seller");

  // NEXT PAGE
  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(
        getAllUsers({
          page: currentPage + 1,
          role: "seller",
        }),
      );
    }
  };

  // PREVIOUS PAGE
  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(
        getAllUsers({
          page: currentPage - 1,
          role: "seller",
        }),
      );
    }
  };

  return (
    <section className="p-4 md:p-8 lg:p-10">
      {/* TOP */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Sellers Management
        </h1>

        <p className="text-gray-500 mt-2">Manage all registered sellers</p>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="bg-white rounded-3xl p-10 text-center text-gray-500 font-semibold shadow-sm border border-gray-100">
          Loading Sellers...
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-x-auto">
          <table className="w-full min-w-[900px]">
            {/* HEAD */}
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-5 text-left text-gray-600 font-semibold">
                  #
                </th>

                <th className="px-6 py-5 text-left text-gray-600 font-semibold">
                  Seller
                </th>

                <th className="px-6 py-5 text-left text-gray-600 font-semibold">
                  Email
                </th>

                <th className="px-6 py-5 text-left text-gray-600 font-semibold">
                  Mobile
                </th>

                <th className="px-6 py-5 text-left text-gray-600 font-semibold">
                  Role
                </th>

                <th className="px-6 py-5 text-left text-gray-600 font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {sellers.length > 0 ? (
                sellers.map((seller, index) => (
                  <tr
                    key={seller._id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    {/* INDEX */}
                    <td className="px-6 py-5 font-semibold text-gray-700">
                      {(currentPage - 1) * 10 + index + 1}
                    </td>

                    {/* SELLER */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        {/* AVATAR */}
                        <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center text-lg font-bold uppercase shadow-md">
                          {seller.name.charAt(0)}
                        </div>

                        {/* NAME */}
                        <div>
                          <h1 className="font-semibold text-gray-800">
                            {seller.name}
                          </h1>

                          <p className="text-sm text-gray-400">
                            Seller Account
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="px-6 py-5 text-gray-600 font-medium">
                      {seller.email}
                    </td>

                    {/* MOBILE */}
                    <td className="px-6 py-5 text-gray-600 font-medium">
                      +91 {seller.mobile}
                    </td>

                    {/* ROLE */}
                    <td className="px-6 py-5">
                      <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold capitalize">
                        {seller.role}
                      </span>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                        Approved
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-16">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-5">
                        ⛔
                      </div>

                      <h1 className="text-2xl font-bold text-gray-700">
                        No Sellers Found
                      </h1>

                      <p className="text-gray-400 mt-2">
                        There are no sellers available right now
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="flex items-center justify-between px-6 py-5 border-t border-gray-100">
            <h1 className="text-sm font-medium text-gray-500">
              Page {currentPage} of {totalPages}
            </h1>

            <div className="flex items-center gap-3">
              {/* PREVIOUS */}
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-5 py-2 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-100 transition disabled:opacity-50"
              >
                Previous
              </button>

              {/* NEXT */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-5 py-2 rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600 transition disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Sellers;

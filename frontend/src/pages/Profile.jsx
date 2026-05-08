import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

function Profile() {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // GET PROFILE
  useEffect(() => {

    const fetchProfile =
      async () => {

        try {

          const userId =
            localStorage.getItem(
              "userId"
            );

          const { data } =
            await API.get(
              `/auth/profile/${userId}`
            );

          setUser(data.user);

        } catch (error) {

          console.log(
            error.response?.data
              ?.message
          );

        } finally {

          setLoading(false);

        }

      };

    fetchProfile();

  }, []);

  // LOADING
  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">

        Loading...

      </div>
    );

  }

  return (
    <section className="min-h-screen bg-white px-6 py-12">

      <div className="max-w-3xl">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-800 mb-10">

          My Profile

        </h1>

        {/* USER INFO */}
        <div className="space-y-8">

          {/* NAME */}
          <div>

            <h3 className="text-gray-500 text-sm uppercase mb-2">

              Name

            </h3>

            <p className="text-2xl font-semibold text-gray-800">

              {user?.name}

            </p>

          </div>

          {/* EMAIL */}
          <div>

            <h3 className="text-gray-500 text-sm uppercase mb-2">

              Email

            </h3>

            <p className="text-xl text-gray-700">

              {user?.email}

            </p>

          </div>

          {/* MOBILE */}
          <div>

            <h3 className="text-gray-500 text-sm uppercase mb-2">

              Mobile

            </h3>

            <p className="text-xl text-gray-700">

              {user?.mobile}

            </p>

          </div>

          {/* ROLE */}
          <div>

            <h3 className="text-gray-500 text-sm uppercase mb-2">

              Role

            </h3>

            <p className="text-xl capitalize text-gray-700">

              {user?.role}

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;
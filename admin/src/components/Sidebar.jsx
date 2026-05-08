import React from "react";

import { NavLink } from "react-router-dom";

import { HiHome, HiUsers } from "react-icons/hi";

import { FaBoxOpen, FaUserTie } from "react-icons/fa";

function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <HiHome />,
    },

    {
      name: "Customers",
      path: "/admin/customers",
      icon: <HiUsers />,
    },

    {
      name: "Sellers",
      path: "/admin/sellers",
      icon: <FaUserTie />,
    },

    {
      name: "Products",
      path: "/admin/products",
      icon: <FaBoxOpen />,
    },
  ];

  return (
    <aside
      className="

        fixed top-[80px] left-0
        h-[calc(100vh-80px)]

        bg-white border-r border-gray-200
        z-50

        w-[80px] md:w-[270px]

        transition-all duration-300

      "
    >
      {/* MENU */}
      <div className="px-3 md:px-4 py-6 flex flex-col gap-3">
        {menus.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `

                  flex items-center
                  justify-center md:justify-start

                  gap-4

                  px-3 md:px-5
                  py-4

                  rounded-2xl

                  font-semibold

                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-pink-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-pink-50"
                  }

                  `
            }
          >
            {/* ICON */}
            <span className="text-2xl min-w-[24px]">{item.icon}</span>

            {/* TEXT */}
            <span className="hidden md:block text-[16px]">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

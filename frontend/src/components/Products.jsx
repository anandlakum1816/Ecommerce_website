import React from "react";

import { FaHeart } from "react-icons/fa";

// IMPORT IMAGES
import product1 from "../assets/special_product_1.jpg";
import product2 from "../assets/special_product_2.jpg";
import product3 from "../assets/special_product_3.jpg";
import product4 from "../assets/special_product_4.jpg";

const products = [
  {
    id: 1,
    name: "Gray Shirt",
    price: "$45.50",
    image: product1,
  },
  {
    id: 2,
    name: "Stylish Jacket",
    price: "$60.00",
    image: product2,
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: "$35.00",
    image: product3,
  },
  {
    id: 4,
    name: "Modern Hoodie",
    price: "$55.00",
    image: product4,
  },
];

function Products() {
  return (
    <section className="py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-5">

        {/* TITLE */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold inline-block relative">

            Special Selection

            <span className="absolute left-0 bottom-[-10px] w-full h-[3px] bg-pink-500"></span>

          </h2>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              className="group"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden bg-gray-100 rounded-md">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* HEART ICON */}
                <span className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center text-pink-500 shadow-md cursor-pointer hover:bg-pink-500 hover:text-white transition duration-300">

                  <FaHeart />

                </span>

              </div>

              {/* CONTENT */}
              <div className="text-center mt-5">

                <p className="text-lg capitalize mb-2">

                  {item.name}

                </p>

                <span className="font-bold block text-gray-800">

                  {item.price}

                </span>

                <button className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white uppercase tracking-wide transition duration-300 rounded-md">

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

export default Products;
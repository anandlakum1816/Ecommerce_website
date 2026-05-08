import React from "react";

// IMPORT IMAGE
import aboutImg from "../assets/about_us.jpg";

function Aboutus() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="order-1 lg:order-1">

            <img
              src={aboutImg}
              alt="About Us"
              className="w-full rounded-lg shadow-lg object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="order-2 lg:order-2 text-center lg:text-left">

            {/* TITLE */}
            <div className="mb-8">

              <h2 className="text-4xl font-bold inline-block relative">

                About Us

                <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-pink-500"></span>

              </h2>

            </div>

            {/* SUB TITLE */}
            <p className="text-lg text-gray-500 mb-5 leading-8">

              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis, ipsam.

            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-8">

              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem fuga blanditiis, modi exercitationem quae quam
              eveniet! Minus labore voluptatibus corporis recusandae
              accusantium velit, nemo, nobis, nulla ullam pariatur totam
              quos.

            </p>

            {/* BUTTON */}
            <button className="mt-8 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white uppercase tracking-wider transition duration-300 rounded-md">

              Read More

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Aboutus;
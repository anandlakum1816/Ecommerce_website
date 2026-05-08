
//Footer.jsx
import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <h1 className="text-4xl font-bold uppercase tracking-[5px]">

              Ecommerce

            </h1>

            <p className="text-gray-400 leading-8 mt-6 text-[15px]">

              Discover premium fashion collections with modern style,
              trendy outfits and high quality products for every season.

            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition duration-300"
              >
                <FaPinterestP />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-semibold mb-8 relative inline-block">

              Quick Links

              <span className="absolute left-0 -bottom-2 w-14 h-[3px] bg-pink-500"></span>

            </h2>

            <ul className="space-y-5 text-gray-400">

              <li>
                <a
                  href="/"
                  className="flex items-center gap-3 hover:text-pink-500 transition duration-300"
                >
                  <FaArrowRight className="text-sm" />
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="flex items-center gap-3 hover:text-pink-500 transition duration-300"
                >
                  <FaArrowRight className="text-sm" />
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="flex items-center gap-3 hover:text-pink-500 transition duration-300"
                >
                  <FaArrowRight className="text-sm" />
                  About Us
                </a>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h2 className="text-2xl font-semibold mb-8 relative inline-block">

              Contact Us

              <span className="absolute left-0 -bottom-2 w-14 h-[3px] bg-pink-500"></span>

            </h2>

            <div className="space-y-6 text-gray-400">

              <div className="flex items-start gap-4">

                <div className="mt-1 text-pink-500">
                  <FaMapMarkerAlt />
                </div>

                <p className="leading-7 text-[15px]">

                  Albert Street, New York, AS 756,
                  United States Of America

                </p>

              </div>

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-pink-500" />

                <p className="text-[15px]">
                  ecommerce.support@gmail.com
                </p>

              </div>

              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-pink-500" />

                <p className="text-[15px]">
                  +9786 6776 236
                </p>

              </div>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h2 className="text-2xl font-semibold mb-8 relative inline-block">

              Newsletter

              <span className="absolute left-0 -bottom-2 w-14 h-[3px] bg-pink-500"></span>

            </h2>

            <p className="text-gray-400 leading-7 text-[15px] mb-6">

              Subscribe to get updates about new collections and offers.

            </p>

            <form className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-[#1b1b1b] border border-gray-700 outline-none focus:border-pink-500 transition duration-300"
              />

              <button
                className="bg-pink-500 hover:bg-pink-600 py-3 uppercase tracking-wider transition duration-300 font-medium"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">

          <p className="text-gray-500 text-sm tracking-wide">

            © 2026 Ecommerce. All Rights Reserved | Designed With ❤️

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
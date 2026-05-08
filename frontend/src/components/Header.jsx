import React, { useEffect, useState } from "react";

const slides = [
  {
    subtitle: "best collection",
    title: "new arrivals",
    button: "shop now",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
  },
  {
    subtitle: "best price & offer",
    title: "new season",
    button: "buy now",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop",
  },
];

function Header() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  // NEXT
  const nextSlide = () => {
    setCurrent(
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  // PREV
  const prevSlide = () => {
    setCurrent(
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            index === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >

          {/* BACKGROUND IMAGE */}
          <img
            src={slide.image}
            alt="banner"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-5">

            <div>

              <h2 className="text-white text-2xl md:text-4xl capitalize mb-4 tracking-wide">

                {slide.subtitle}

              </h2>

              <h1 className="text-white text-5xl md:text-7xl font-bold uppercase mb-6">

                {slide.title}

              </h1>

              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 uppercase tracking-widest transition duration-300">

                {slide.button}

              </button>

            </div>

          </div>
        </div>
      ))}

      {/* PREV BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full text-2xl backdrop-blur-sm transition duration-300"
      >
        ❮
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full text-2xl backdrop-blur-sm transition duration-300"
      >
        ❯
      </button>

    </header>
  );
}

export default Header;
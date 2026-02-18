import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Reduce Food Waste. Feed Communities.",
    desc: "Connecting restaurants with charities to create a hunger-free world.",
    img: "/donation.jpg",
  },
  {
    title: "Share Surplus, Spread Smiles",
    desc: "Join hands to minimize waste and maximize impact.",
    img: "/delivery.jpg",
  },
  {
    title: "Every Meal Matters",
    desc: "Your small action can make a big difference.",
    img: "/family.webp",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#e7e2c8] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Text Section */}
        <div
          className={`md:w-1/2 space-y-6 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-lg text-gray-700">
            {slides[current].desc}
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">
            Donate Now
          </button>
        </div>

        {/* Image Section */}
        <div
          className={`md:w-1/2 mt-10 md:mt-0 flex justify-center transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slides[current].img}
            alt="banner"
            className="w-[350px] md:w-[500px]"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-orange-500 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;

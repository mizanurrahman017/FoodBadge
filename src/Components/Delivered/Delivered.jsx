import React from "react";

const Delivered = () => {
  const foods = [
    { id: 1, name: "Fruits", image: "/Fruits.jpg" },
    { id: 2, name: "Nuts", image: "/Nut.jpg" },
    { id: 3, name: "Sandwich", image: "/Sandwich.jpg" },
    { id: 4, name: "Meat with Tomato", image: "/tomato.jpg" },
  ];

  return (
    <div className="bg-[#f4f1df] py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-green-600 text-sm tracking-widest">
          FIGHTING FOOD WASTE, ONE DONATION AT A TIME
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          Explore the Types of Food Being Rescued
          <br />
          and Delivered to Those Who Need It Most
        </h2>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-16">

          {/* Duplicate array for circular effect */}
          {[...foods, ...foods].map((food, index) => (
            <div key={index} className="flex flex-col items-center min-w-[200px]">
              <img
                src={food.image}
                alt={food.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              <p className="mt-4 text-green-700 font-medium">{food.name}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            gap: 4rem;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Delivered;

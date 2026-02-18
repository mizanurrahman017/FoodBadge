import React from "react";

const Stories = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-700 mb-2">
          💚 Community Stories
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from the heroes making an impact through FoodBridge.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 
                          transition duration-300 transform hover:-translate-y-2 
                          hover:shadow-xl hover:bg-green-50 cursor-pointer">
            
            <img
              src="/mamas.png"
              alt="Mama's Kitchen"
              className="w-20 h-20 rounded-full border-4 border-yellow-400"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold text-green-700">
                Mama’s Kitchen
              </h3>
              <p className="text-gray-600 mt-2 italic">
                "Thanks to FoodBridge, we've donated surplus food regularly
                and built strong ties with our community."
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 
                          transition duration-300 transform hover:-translate-y-2 
                          hover:shadow-xl hover:bg-green-50 cursor-pointer">
            
            <img
              src="/smile.jpg"
              alt="SaveSmile Foundation"
              className="w-20 h-20 rounded-full border-4 border-green-500"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold text-green-700">
                SaveSmile Foundation
              </h3>
              <p className="text-gray-600 mt-2 italic">
                "With help from FoodBridge, we're now able to serve 300+
                people every week. Truly a blessing!"
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stories;

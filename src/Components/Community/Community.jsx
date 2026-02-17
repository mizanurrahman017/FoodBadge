import React from "react";
import CountUp from "react-countup";
import { FaBoxOpen, FaHandsHelping, FaLeaf } from "react-icons/fa";

const Community = () => {
  return (
    <div className="relative bg-white py-24 px-6 overflow-hidden">

      {/* Gradient Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-green-700 flex justify-center items-center gap-3">
          🌱 Our Community Impact
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Together, we've reduced food waste and supported thousands in need —
          see how your contributions help create a greener world.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center relative z-10">

        {/* Stat 1 */}
        <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-3 transition duration-500">
          <FaBoxOpen className="text-green-500 text-5xl mx-auto mb-4" />
          <h3 className="text-4xl font-bold text-gray-800">
            <CountUp end={5200} duration={3} separator="," />+ kg
          </h3>
          <p className="text-gray-600 mt-3">
            Food Donated
          </p>
        </div>

        {/* Stat 2 */}
        <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-3 transition duration-500">
          <FaHandsHelping className="text-yellow-500 text-5xl mx-auto mb-4" />
          <h3 className="text-4xl font-bold text-gray-800">
            <CountUp end={12000} duration={3} separator="," />+
          </h3>
          <p className="text-gray-600 mt-3">
            Meals Served
          </p>
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-3 transition duration-500">
          <FaLeaf className="text-teal-500 text-5xl mx-auto mb-4" />
          <h3 className="text-4xl font-bold text-gray-800">
            <CountUp end={18000} duration={3} separator="," />+ kg
          </h3>
          <p className="text-gray-600 mt-3">
            CO₂ Saved
          </p>
        </div>

      </div>
    </div>
  );
};

export default Community;

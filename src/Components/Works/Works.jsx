import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-white py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-green-700 tracking-wide">
          HOW IT WORKS
        </h2>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

        {/* Step 1 */}
        <div className="flex gap-6" data-aos="fade-up">
          <h1 className="text-8xl font-bold text-green-200">1</h1>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Restaurants Donate Surplus Food
            </h3>
            <p className="text-gray-700">
              Restaurants post extra meals they want to give away instead of
              wasting.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-6" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-8xl font-bold text-green-200">2</h1>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Charities Request & Schedule Pickup
            </h3>
            <p className="text-gray-700">
              Verified charities browse available donations and request a
              pickup time.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-6" data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-8xl font-bold text-green-200">3</h1>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Admins Approve & Monitor Requests
            </h3>
            <p className="text-gray-700">
              Admins verify each donation and approve requests to ensure smooth
              coordination.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-6" data-aos="fade-up" data-aos-delay="600">
          <h1 className="text-8xl font-bold text-green-200">4</h1>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Charities Collect & Distribute
            </h3>
            <p className="text-gray-700">
              Charities pick up the food and distribute it to those in need in
              their communities.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Works;

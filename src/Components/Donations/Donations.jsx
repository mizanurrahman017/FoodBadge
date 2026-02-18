import React from "react";
import { NavLink } from "react-router";

const Donations = () => {
  const donations = [
    {
      id: 1,
      title: "Healthy Food",
      restaurant: "Mizanur Rahman",
      location: "Khulna, Bangladesh",
      status: "approved",
      image: "/healty.jpg",
    },
    {
      id: 2,
      title: "Fast Food",
      restaurant: "Mizanur Rahman",
      location: "Sylhet, Bangladesh",
      status: "approved",
      image: "/fastfood.jpg",
    },
    {
      id: 3,
      title: "Rice",
      restaurant: "Mizanur Rahman",
      location: "Sylhet, Bangladesh",
      status: "approved",
      image: "/rise.jpg",
    },
    {
      id: 4,
      title: "Fast Food",
      restaurant: "Mizanur Rahman",
      location: "Dhaka, Bangladesh",
      status: "approved",
      image: "/fastfood.jpg",
    },
  ];

  return (
    <div className="bg-[#f4f1df] py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        🍽 Featured Donations
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={donation.image}
              alt={donation.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">
                {donation.title}
              </h3>

              <p className="text-sm text-gray-600">
                <span className="font-medium">Restaurant:</span>{" "}
                {donation.restaurant}
              </p>

              <p className="text-sm text-gray-600">
                <span className="font-medium">Location:</span>{" "}
                {donation.location}
              </p>

              <p className="text-sm mb-4">
                <span className="font-medium">Status:</span>{" "}
                <span className="text-orange-500 font-semibold">
                  {donation.status}
                </span>
              </p>

              {/* 🔥 NavLink Added Here */}
              <NavLink
                to={`/donations/${donation.id}`}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;

import React, { useState } from "react";
import { NavLink } from "react-router";

const donationData = [
  {
    id: 1,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/healty.jpg",
  },
  {
    id: 2,
    title: "Fast Food Combo",
    location: "Sylhet",
    quantity: 2,
    pickupTime: "Tomorrow 1:00 PM",
    status: "Pending",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: false,
    featured: false,
    image: "/public/fastfood.jpg",
  },
  {
    id: 3,
    title: "Rice & Vegetables",
    location: "Dhaka",
    quantity: 8,
    pickupTime: "Today 9:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: false,
    image: "/public/rise.jpg",
  },
  {
    id: 4,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/Fruits.jpg",
  },
  {
    id: 5,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/Nut.jpg",
  },
  {
    id: 6,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/Sandwich.jpg",
  },
  {
    id: 7,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/tomato.jpg",
  },
  {
    id: 8,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/Nut.jpg",
  },
  {
    id: 9,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/fastfood.jpg",
  },
  {
    id: 10,
    title: "Healthy Food Pack",
    location: "Khulna",
    quantity: 5,
    pickupTime: "Today 6:00 PM",
    status: "Approved",
    restaurant: "Mizanur Rahman",
    charity: "Not Assigned",
    approved: true,
    featured: true,
    image: "/public/healty.jpg",
  },
];

const AllDonations = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  // 🔎 Filter
  let filtered = donationData.filter((item) =>
    item.location.toLowerCase().includes(search.toLowerCase())
  );

  // 🔽 Sort
  if (sortOption === "high") {
    filtered = [...filtered].sort((a, b) => b.quantity - a.quantity);
  } else if (sortOption === "low") {
    filtered = [...filtered].sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row gap-4 justify-between">

        {/* 🔎 Search */}
        <input
          type="text"
          placeholder="Search by city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* 🔽 Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full md:w-1/4 px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Sort by</option>
          <option value="high">Quantity (High → Low)</option>
          <option value="low">Quantity (Low → High)</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {filtered.map((donation) => (
          <div
            key={donation.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative"
          >
            {/* ⭐ Featured Badge */}
            {donation.featured && (
              <div className="absolute top-3 left-3 bg-yellow-400 text-white text-xs px-3 py-1 rounded-full shadow">
                ⭐ Featured
              </div>
            )}

            <img
              src={donation.image}
              alt={donation.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {donation.title}
              </h3>

              <p className="text-gray-600 mt-2">
                <span className="font-medium">Location:</span>{" "}
                {donation.location}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Quantity:</span>{" "}
                {donation.quantity} kg
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Pickup Time:</span>{" "}
                {donation.pickupTime}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Restaurant:</span>{" "}
                {donation.restaurant}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Charity:</span>{" "}
                {donation.charity}
              </p>

              {/* Status Badge */}
              <p className="mt-2">
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold ${
                    donation.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {donation.status}
                </span>
              </p>

              {/* Approved */}
              {donation.approved && (
                <p className="mt-2 text-green-600 font-semibold">
                  Approved: ✅
                </p>
              )}

              <NavLink
                to={`/donation/${donation.id}`}
                className="inline-block mt-4 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDonations;

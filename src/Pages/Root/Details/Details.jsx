import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  const donations = [
    {
      id: 1,
      title: "Healthy Food",
      image: "/public/healty.jpg",
      foodType: "Vegetables & Fruits",
      quantity: "5kg",
      pickupTime: "3pm - 6pm",
      status: "approved",
      location: "Khulna, Bangladesh",
      restaurantName: "Mizanur rahman",
      restaurantEmail: "mizanasif1@gmail.com",
      map: "https://www.google.com/maps?q=Khulna,Bangladesh&output=embed"
    },
    {
      id: 2,
      title: "Fast Food",
      image: "/fastfood.jpg",
      foodType: "Fast Food",
      quantity: "2kg",
      pickupTime: "4pm - 5pm",
      status: "approved",
      location: "Sylhet, Bangladesh",
      restaurantName: "Mizanur rahman",
      restaurantEmail: "mizanasif1@gmail.com",
      map: "https://www.google.com/maps?q=Sylhet,Bangladesh&output=embed"
    },
     {
      id: 3,
      title: "Rice",
      image: "/public/rise.jpg",
      foodType: "Rice",
      quantity: "2kg",
      pickupTime: " 4pm - 5pm",
      status: "approved",
      location: "Sylhet, Bangladesh",
      restaurantName: "Mizanur rahman",
      restaurantEmail: "mizanasif1@gmail.com",
      map: "https://www.google.com/maps?q=Khulna,Bangladesh&output=embed"
    },
     {
      id: 4,
      title: "Fast food",
      image: "/public/fastfood.jpg",
      foodType: "Vegetables & Fruits",
      quantity: "10kg",
      pickupTime: "7pm-8pm",
      status: "approved",
      location: "Dhaka, Bangladesh",
      restaurantName: "Mizanur rahman",
      restaurantEmail: "mizanasif1@gmail.com",
      map: "https://www.google.com/maps?q=Khulna,Bangladesh&output=embed"
    },
  ];

  const donation = donations.find(
    (item) => item.id === parseInt(id)
  );

  // 🔥 Review State
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  const handleAddReview = () => {
    if (!reviewText) return;

    const newReview = {
      id: Date.now(),
      name: "Anonymous User",
      text: reviewText,
      rating: 5,
    };

    setReviews([...reviews, newReview]);
    setReviewText("");
  };

  // 🔥 Save to Favorites (LocalStorage)
  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find((item) => item.id === donation.id);

    if (!exists) {
      favorites.push(donation);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Saved to Favorites ❤️");
    } else {
      alert("Already in Favorites!");
    }
  };

  if (!donation) {
    return (
      <h2 className="text-center mt-10 text-red-500">
        Donation Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10">

        <div className="flex-1">
          <img
            src={donation.image}
            alt={donation.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold text-green-700">
            {donation.title}
          </h2>

          <p><strong>Food Type:</strong> {donation.foodType}</p>
          <p><strong>Quantity:</strong> {donation.quantity}</p>
          <p><strong>Pickup Time:</strong> {donation.pickupTime}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="text-orange-500 font-semibold">
              {donation.status}
            </span>
          </p>
          <p><strong>Location:</strong> {donation.location}</p>

          <div className="pt-4">
            <p className="font-semibold">Restaurant Info:</p>
            <p><strong>Name:</strong> {donation.restaurantName}</p>
            <p><strong>Email:</strong> {donation.restaurantEmail}</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleFavorite}
              className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              ❤️ Save to Favorites
            </button>

            <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition">
              🚩 Report Donation
            </button>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-green-700 mb-4">
          Location Map
        </h3>

        <iframe
          src={donation.map}
          width="100%"
          height="300"
          className="rounded-xl"
          loading="lazy"
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-green-700 mb-4">
          📝 Reviews
        </h3>

        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100 p-4 rounded-lg mb-3 shadow"
          >
            <p className="font-semibold">{review.name}</p>
            <p>{review.text}</p>
            <p className="text-yellow-500">⭐ {review.rating}</p>
          </div>
        ))}

        {/* Add Review */}
        <div className="mt-4 flex flex-col gap-2">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            className="border p-3 rounded-lg"
          ></textarea>

          <button
            onClick={handleAddReview}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
          >
            ✍️ Add Review
          </button>
        </div>
      </div>

    </div>
  );
};

export default Details;

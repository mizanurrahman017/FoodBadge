import React from "react";

const CharityRequests = () => {
  const requests = [1, 2, 3];

  return (
    <div className="bg-white py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-green-700 flex justify-center items-center gap-3">
          🤝 Latest Charity Requests
        </h2>
        <p className="text-gray-600 mt-3">
          See what charities near you are requesting to help those in need.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {requests.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://i.ibb.co/3W0JbQh/charity.jpg"
                alt="Charity"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-semibold">
                  Charity Foundation
                </h3>
                <p className="text-gray-600 mt-2">
                  Requested Food: <span className="font-medium">N/A</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharityRequests;

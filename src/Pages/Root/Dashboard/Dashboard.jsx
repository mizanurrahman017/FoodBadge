import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard Overview
        </h1>

        {/* ================= STATS SECTION ================= */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Total Donations</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">120</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Approved</h3>
            <p className="text-3xl font-bold text-green-500 mt-2">85</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Pending</h3>
            <p className="text-3xl font-bold text-yellow-500 mt-2">20</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">Total Quantity</h3>
            <p className="text-3xl font-bold text-blue-500 mt-2">560 kg</p>
          </div>

        </div>

        {/* ================= QUICK ACTIONS ================= */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition">
              Add Donation
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition">
              View Requests
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition">
              Manage Users
            </button>
          </div>
        </div>

        {/* ================= RECENT DONATIONS TABLE ================= */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-6">Recent Donations</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Title</th>
                  <th>Location</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Pickup Time</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3">Healthy Food Pack</td>
                  <td>Dhaka</td>
                  <td>5 kg</td>
                  <td>
                    <span className="bg-green-100 text-green-600 px-3 py-1 text-xs rounded-full">
                      Approved
                    </span>
                  </td>
                  <td>Today 6:00 PM</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3">Fast Food Combo</td>
                  <td>Sylhet</td>
                  <td>2 kg</td>
                  <td>
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 text-xs rounded-full">
                      Pending
                    </span>
                  </td>
                  <td>Tomorrow 1:00 PM</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-3">Rice & Vegetables</td>
                  <td>Khulna</td>
                  <td>8 kg</td>
                  <td>
                    <span className="bg-green-100 text-green-600 px-3 py-1 text-xs rounded-full">
                      Approved
                    </span>
                  </td>
                  <td>Today 9:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

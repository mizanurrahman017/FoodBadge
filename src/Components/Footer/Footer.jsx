import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-medium block"
      : "text-gray-400 hover:text-orange-400 transition block";

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-white">
            <span className="text-orange-500">Food</span> Bridge
          </h1>
          <p className="text-sm leading-6 text-gray-400">
            Connecting surplus food from restaurants to charities.
            Together, we reduce waste and serve the community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-green-400">
            Quick Links
          </h2>
          <div className="space-y-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/donations" className={linkClass}>All Donations</NavLink>
            <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
            <NavLink to="/login" className={linkClass}>Login</NavLink>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-green-400">
            About Us
          </h2>
          <div className="space-y-2">
            <NavLink to="/story" className={linkClass}>Our Story</NavLink>
            <NavLink to="/team" className={linkClass}>Team</NavLink>
            <NavLink to="/mission" className={linkClass}>Our Mission</NavLink>
            <NavLink to="/partners" className={linkClass}>Partners</NavLink>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-green-400">
            Support
          </h2>
          <div className="space-y-2">
            <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQs</NavLink>
            <NavLink to="/help" className={linkClass}>Help Center</NavLink>
            <NavLink to="/feedback" className={linkClass}>Send Feedback</NavLink>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 text-sm border-t border-gray-800 text-gray-500">
        © 2026 <span className="text-orange-500 font-medium">FoodBridge</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-400 transition";

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center shadow-md">
        
        {/* ✅ Logo Clickable */}
        <NavLink to="/" className="text-2xl font-bold">
          <span className="text-orange-500">Food</span> Bridge
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/donations" className={linkClass}>All Donations</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>

          <NavLink to="/login">
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-md text-white transition">
              Login
            </button>
          </NavLink>

          {/* Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-3 py-1 border rounded-md"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 font-medium">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/donations" className={linkClass} onClick={() => setMenuOpen(false)}>All Donations</NavLink>
          <NavLink to="/dashboard" className={linkClass} onClick={() => setMenuOpen(false)}>Dashboard</NavLink>

          <NavLink to="/login" onClick={() => setMenuOpen(false)}>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-md text-white transition">
              Login
            </button>
          </NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded-md"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

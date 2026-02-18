import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🔐 Detect Logged User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-400 transition";

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center shadow-md">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          <span className="text-orange-500">Food</span> Bridge
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">

          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/donations" className={linkClass}>All Donations</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>

          {/* 👤 If Logged In */}
          {user ? (
            <div className="flex items-center gap-3">

              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="user"
                className="w-9 h-9 rounded-full border"
              />

              <span className="font-medium">
                {user.displayName || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white transition"
              >
                Logout
              </button>

            </div>
          ) : (
            <NavLink to="/login">
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-md text-white transition">
                Login
              </button>
            </NavLink>
          )}

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

          {user ? (
            <>
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="user"
                className="w-10 h-10 rounded-full border"
              />

              <span>{user.displayName || "User"}</span>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1 rounded-md text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <button className="bg-orange-500 px-4 py-1 rounded-md text-white">
                Login
              </button>
            </NavLink>
          )}

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

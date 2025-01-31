import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <header className="bg-black pt-4 pb-4 shadow-sm relative z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
          Dating App
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className={`md:flex md:items-center gap-6 absolute md:static bg-black md:bg-transparent w-full left-0 top-16 md:w-auto p-6 md:p-0 transition-all ${menuOpen ? "block" : "hidden"} md:flex`}>
          {user ? (
            <>
              <li>
                <Link to="/dashboard" className="text-white ransform hover:scale-110 hover:text-pink-400 transition-all duration-300 block py-2 md:py-0">Dashboard</Link>
              </li>
              <li>
                <Link to="/profilePage" className="text-white ransform hover:scale-110 hover:text-pink-400 transition-all duration-300 block py-2 md:py-0">Your Profile</Link>
              </li>
              <li className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-white ransform hover:scale-110 hover:text-pink-400 transition-all duration-300 flex items-center gap-2 focus:outline-none">
                  <FaUser className="text-xl" />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                    <Link to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help</Link>
                    <Link to="/view-more" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View More</Link>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <li>
              <Link to="/signIn">
                <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                  Sign In
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
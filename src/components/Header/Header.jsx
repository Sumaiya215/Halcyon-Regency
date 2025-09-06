import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-md fixed flex justify-between items-center px-4 top-0 left-0 w-full z-50">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className=" normal-case text-3xl font-bold">
            Halcyon regency
          {/* <img src={logo} className="w-12 h-12 rounded-full bg-cyan-700" alt="logo" /> */}
        </Link>
      </div>

      {/* Right: Menu */}
      <div className="flex items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex menu menu-horizontal px-1 space-x-4">
          <li>
            <Link to="/" className="font-semibold text-xl hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="font-semibold text-xl hover:text-blue-400 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="font-semibold text-xl hover:text-blue-400 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-semibold text-xl hover:text-blue-400 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-circle text-2xl"
          >
            ☰
          </button>
          {menuOpen && (
            <ul className="absolute right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-400 hover:text-white transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-400 hover:text-white transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-400 hover:text-white transition"
                >
                  About
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

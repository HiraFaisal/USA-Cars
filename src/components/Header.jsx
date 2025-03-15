import { useState } from "react";
import { FaChevronDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/usa-cars-logo.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="USA Cars" className="w-12 h-12 object-contain rounded-full" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
        <a href="/" className="text-yellow-500 font-semibold relative">
          Home
          <span className="block w-full h-1 bg-yellow-500 rounded mt-1"></span>
        </a>
        <a href="/search">Search</a>
        <div className="relative">
          <button className="flex items-center space-x-1">
            <span>Shipping</span> <FaChevronDown size={12} />
          </button>
        </div>
        <div className="relative">
          <button className="flex items-center space-x-1">
            <span>How to buy</span> <FaChevronDown size={12} />
          </button>
        </div>
        <div className="relative">
          <button className="flex items-center space-x-1">
            <span>About us</span> <FaChevronDown size={12} />
          </button>
        </div>
        <div className="relative">
          <button className="flex items-center space-x-1">
            <span>Help</span> <FaChevronDown size={12} />
          </button>
        </div>
      </nav>

      {/* Right Section (Visible on Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="flex items-center text-gray-600">
          <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-6 h-4" />
        </button>
        <button className="text-gray-600">
          <FaSearch size={18} />
        </button>
        <button className="text-gray-600" onClick={() => navigate("/login")}>
          Log in
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>

      {/* Hamburger Menu Button (Visible on Mobile) */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
{/* Mobile Navigation (Slide-in from Right) */}
<div
  className={`fixed top-0 right-0 h-full w-5/6 bg-white shadow-lg transform transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  } flex flex-col items-center space-y-4 py-6 z-50`}
>
  {/* Close Button */}
  <button className="absolute top-4 right-4 text-gray-600" onClick={() => setMenuOpen(false)}>
    <FaTimes size={24} />
  </button>

  {/* Navigation Links */}
  <a href="/" className="text-yellow-500 font-semibold mt-8">Home</a>
  <a href="/search">Search</a>
  <button className="flex items-center space-x-1">
    <span>Shipping</span> <FaChevronDown size={12} />
  </button>
  <button className="flex items-center space-x-1">
    <span>How to buy</span> <FaChevronDown size={12} />
  </button>
  <button className="flex items-center space-x-1">
    <span>About us</span> <FaChevronDown size={12} />
  </button>
  <button className="flex items-center space-x-1">
    <span>Help</span> <FaChevronDown size={12} />
  </button>
  
  {/* Language & Search */}
  <button className="flex items-center text-gray-600">
    <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-6 h-4" />
  </button>
  <button className="text-gray-600">
    <FaSearch size={18} />
  </button>

  {/* Login & Register (Full Width & Positioned at Bottom) */}
  <div className="absolute bottom-0 w-full flex flex-col">
    <button 
      className="text-gray-600 w-full py-4 border-t border-gray-200 text-center bg-white"
      onClick={() => navigate("/login")}
    >
      Log in
    </button>
    <button
  className="bg-yellow-500  text-white w-full py-3 text-center font-semibold rounded-full ml-2 mr-5"
  onClick={() => navigate("/register")}
>
  Register
</button>

  </div>
</div>


    </header>
  );
};

export default Header;

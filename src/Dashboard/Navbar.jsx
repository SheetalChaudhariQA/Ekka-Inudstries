import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For menu icons
import { useLocation } from 'react-router-dom'; // Make sure to install react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Define the nav links and their paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Name */}
        <div className="flex flex-col items-center rtl:space-x-reverse">
          <a href="/" className="flex flex-col items-center">
            <img
              src="https://img.freepik.com/premium-vector/2024-new-water-lily-shapla-vector-icon_1097891-22.jpg"
              className="h-16 w-24"
              alt="Shree Balaji Corporation Logo"
            />
            <span className="text-sm font-serif whitespace-nowrap dark:text-white mt-0">
              Shree Balaji Corporation
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
          <span className="sr-only">Toggle navigation</span>
        </button>

        {/* Navbar Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white dark:bg-gray-800 md:static md:w-auto md:flex md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900 dark:border-gray-700`}
          id="navbar-menu"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className={`block py-2 px-3 rounded ${
                    location.pathname === link.path
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import images from "../image/home 1.jpeg";
import About from './aboutus.jsx';
import Services from './serviceus.jsx';
import Footer from './Footer';
import Contact from './contactus.jsx';
import { IoMdContacts } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="relative mt-24">
        {/* Image Container */}
        <div className="relative">
          <img
            className="h-auto w-full max-h-[370px] object-cover md:max-h-[480px]"
            src={images}
            alt="Home"
          />

          {/* "Contact Us" Button with Custom Color */}
          <Link to="/contact"> {/* Change this line to use Link */}
            <button
              className="absolute lg:left-[150px] md:left-[120px] md:top-[370px] lg:top-[440px] top-[200px] left-20 transform -translate-x-1/2 -translate-y-1/2 bg-[#5c483f] text-white text-sm flex items-center justify-center space-x-2 py-2 px-4 rounded-md shadow-lg hover:bg-opacity-80 transition duration-300 md:py-2 md:px-4"
            >
              <IoMdContacts className="text-lg mr-1" />
              <span>Contact Us</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;

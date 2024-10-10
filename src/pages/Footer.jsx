import React from 'react';
import techSurya from "../image/logo2.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat py-6" // Reduced padding here
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Grid Item 1: Logo */}
          <div className="flex justify-center md:justify-start mb-4 md:mb-0"> {/* Adjusted margin here */}
            <img
              src="https://img.freepik.com/premium-vector/2024-new-water-lily-shapla-vector-icon_1097891-22.jpg" // Replace with your logo URL
              alt="Logo"
              className="w-30 h-36 md:w-52 md:h-48 object-cover"
            />
          </div>

          {/* Grid Item 2: Company Info */}
          <div>
            <h2 className="text-white font-serif font-medium mb-2">
              Office Address: Office No.1, Ground floor, Golden City Centre, Besides Prozone mall, Chikhalthana, Chh. Sambhajinagar, Maharashtra - 431003
            </h2>
            <p className="text-white font-medium font-serif text-sm md:text-base">
              Ware House: Godown No 8, Kanchan Compound, Dapoda Road, Behind Kanchan Kata, Bhiwandi – 421302
            </p>
          </div>

          {/* Grid Item 3: Additional Info */}
          <div>
            <p className="text-white font-medium font-serif text-sm md:text-base mb-3">
              Ware House: L.Survey No.200, Gandhidham Modvadar Road Modvadar, Kachchh Gujarat-370110
            </p>
            <p className="text-white font-medium font-serif text-sm md:text-base">
              Factory Address: Gut No.12, Mirzapur Shivas, Tal.Gangapur, Jikthan, Waluj, Sambhajinagar, Maharashtra – 431136
            </p>
          </div>

          {/* Grid Item 4: Legal Information */}
          <div>
            <a href="#" className="text-white hover:underline font-serif font-medium text-sm md:text-base">Email: p.vishal1100@gmail.com</a><br />
            <a href="#" className="text-white hover:underline font-serif font-medium text-sm md:text-base">GST NO. 27AJJPP0464D1ZA</a>

            {/* Map Embed */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.165481575726!2d75.37046957427326!3d19.87523312639825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9a2ecb89e829%3A0x9b5f417bc5f4fdb1!2sGolden%20city%20centre!5e0!3m2!1sen!2sin!4v1728044180545!5m2!1sen!2sin"
                width="100%"
                height="100" // Reduced height of the map
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Centered Bottom Section */}
        <div className="mt-4 md:mt-6 text-center"> {/* Adjusted margin here */}
          <div className="flex items-center justify-center flex-col md:flex-row">
            <a href='https://techsuryaitsolution.com/' className="text-white text-sm font-medium mb-2 md:mb-0">
              © 2024 Tech Surya It Solution. All Rights Reserved.
            </a>
            <a href='https://techsuryaitsolution.com/'> {/* Wrap the image with an anchor tag */}
              <img
                src={techSurya} // Replace with your bottom logo URL
                alt="Bottom Logo"
                className="w-42 h-15 md:w-46 md:h-20 mt-2 md:mt-0 object-cover"
              />
            </a>
          </div>
        

      </div>
    </div>
    </footer >
  );
};

export default Footer;

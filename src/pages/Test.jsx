import React from 'react';

const Test = () => {
  return <>
  <footer className="bg-cover bg-center bg-no-repeat py-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Grid Item 1: Logo */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="https://img.freepik.com/premium-vector/2024-new-water-lily-shapla-vector-icon_1097891-22.jpg" // Replace with your logo URL
              alt="Logo"
              className="w-52 h-48 object-cover"
            />
          </div>

          {/* Grid Item 2: Company Info */}
          <div>
            <h2 className="text-white font-serif text-lg font-medium mb-2 mt-2">Proprietor . Vishal V. Parashar</h2>
            <p className="text-white  font-medium font-serif">Office Address :- Office No.1, Ground floor, Golden City Centre, Besides Prozone mall, Chikhalthana, Chh. Sambhajinagar, Maharashtra - 431003</p>
           
          </div>

          {/* Grid Item 3: Social Media Links */}
          <div>
            <h2 className="text-white  font-serif font-medium mb-2"></h2>
            <p className="text-white  font-medium font-serif mb-3">Ware House :- Godown No 8, Kanchan Compound, Dapoda Road, Behind Kanchan Kata, Bhiwandi – 421302</p> 
            <p  className="text-white font-medium font-serif ">Ware House :- L.Survey No.200,Gandhidham Modvadar Road Modvadar , Kachchh Gujarat-370110</p><br />
            
          </div>

          {/* Grid Item 4: Legal Information */}
          <div>
            <h2 className="text-white font-serif font-medium mb-2 mt-2">Factory Address :- Gut No.12, Mirzapur Shivas, Tal.Gangapur, Jikthan, Waluj, Sambhajinagar, Maharashtra – 431136</h2>
            <a href="#" className="text-white hover:underline font-serif font-medium">Email :- p.vishal1100@gmail.com</a><br />
            <a href="#" className="text-white hover:underline font-serif font-medium">GST NO. 27AJJPP0464D1ZA</a>
          </div>
        </div>

       
      </div>
    </footer>
  </>
};

export default Test;

import React from 'react';
import { useInView } from 'react-intersection-observer';
import images from "../image/service.png";

const Services = () => {
  const { ref: imgRef1, inView: imgInView1 } = useInView({ triggerOnce: false });
  const { ref: imgRef2, inView: imgInView2 } = useInView({ triggerOnce: false });
  const { ref: imgRef3, inView: imgInView3 } = useInView({ triggerOnce: false });

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes hoverZoom {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.1);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }

          .animate-zoom-in {
            animation: zoomIn 1s ease-out;
          }

          .hover-zoom:hover {
            animation: hoverZoom 0.3s ease-in-out;
          }
           .hero-image { position: relative; height: 40vh; width: 100%; overflow: hidden; margin-top: 100px; }

         .hero-image img { width: 100%; height: 100%; object-fit: cover; }


         
        `}
      </style>

      <div className="min-h-screen ">
        {/* Hero Section */}
        <div className="hero-image">
          <img src={images}
          alt='about-img'
          className="w-full h-[70vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover" 
          />
          
        </div>

        <div className="text-center mb-12 pt-8">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
            Shree Balaji Corporation
          </h1>
          <h2 className="text-xl font-serif text-gray-600">IMPORT & TRADE</h2>
        </div>

        <div className="max-w-6xl mx-auto mb-12 "> {/* Added mb-12 here for bottom margin */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-0  ">
    <div
      ref={imgRef1}
      className={`border border-gray-300 bg-white rounded-lg shadow-lg transition-transform duration-500 ${imgInView1 ? 'animate-zoom-in' : ''} hover:shadow-2xl hover:scale-105`}
    >
      <img
        src="https://images.unsplash.com/photo-1582282577080-2ebf8af6ca81?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="American Pine"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold font-serif text-gray-800 mb-2">American Pine</h3>
        <p className="text-gray-600 font-serif">Known for its durability and strength, American Pine is perfect for a variety of applications.</p>
      </div>
    </div>

    <div
      ref={imgRef2}
      className={`border border-gray-300 bg-white rounded-lg shadow-lg transition-transform duration-500 ${imgInView2 ? 'animate-fade-in-up' : ''} hover:shadow-2xl hover:scale-105`}
    >
      <img
        src="https://images.unsplash.com/photo-1681752972950-6229ca099fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Australian Pine"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold font-serif text-gray-800 mb-2">Australian Pine</h3>
        <p className="text-gray-600 font-serif">Australian Pine offers excellent resistance to insects and rot, making it ideal for outdoor use.</p>
      </div>
    </div>

    <div
      ref={imgRef3}
      className={`border border-gray-300 bg-white rounded-lg shadow-lg transition-transform duration-500 ${imgInView3 ? 'animate-zoom-in' : ''} hover:shadow-2xl hover:scale-105`}
    >
      <img
        src="https://images.unsplash.com/photo-1560125330-65e097c48708?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="African Pine"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold font-serif text-gray-800 mb-2">African Pine</h3>
        <p className="text-gray-600 font-serif">African Pine is valued for its rich color and is commonly used in high-end furniture and decor.</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Services;

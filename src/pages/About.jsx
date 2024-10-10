import React from 'react';
import { useInView } from 'react-intersection-observer';
import images from "../image/about.png";

const About = () => {
  const { ref: leftRef1, inView: leftInView1 } = useInView({ triggerOnce: false });
  const { ref: rightRef1, inView: rightInView1 } = useInView({ triggerOnce: false });
  const { ref: leftRef2, inView: leftInView2 } = useInView({ triggerOnce: false });
  const { ref: rightRef2, inView: rightInView2 } = useInView({ triggerOnce: false });

  return (
    <>
      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideInFromLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInFromRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-scale { animation: fadeInScale 0.8s ease-in-out; }
          .animate-slide-in-left { animation: slideInFromLeft 0.8s ease-in-out; }
          .animate-slide-in-right { animation: slideInFromRight 0.8s ease-in-out; }
          .hover-zoom { transition: transform 0.5s ease; }
          .hover-zoom:hover { transform: scale(1.05); }
          .hero-image { position: relative; height: 40vh; width: 100%; overflow: hidden; margin-top: 100px; }
          .hero-image img { width: 100%; height: 100%; object-fit: cover; }
        `}
      </style>

      {/* Hero Section with Full Width Image */}
      <div className="hero-image">
        <img src={images} alt='about-img' className="object-cover" />
      </div>

      {/* About Section */}
      <div className="min-h-screen bg-gray-100 py-5 px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
          {/* Right Side Content - Image with Hover Animation */}
          <div ref={rightRef1} className={`flex justify-center items-center ${rightInView1 ? 'animate-slide-in-right' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1611491064644-a9ff17219a53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-md w-full max-w-full object-cover hover-zoom mt-2"
            />
          </div>

          {/* Left Side Content */}
          <div ref={leftRef1} className={`flex flex-col justify-center ${leftInView1 ? 'animate-slide-in-left' : ''}`}>
            <h2 className="text-2xl font-serif md:text-3xl font-bold text-gray-800 mb-4">
              Shree Balaji Corporation
            </h2>

            {/* Added Content: Table for Thickness and Prices */}
            <h3 className="text-xl font-serif text-gray-800 mb-4">
              Thickness and Pricing Details
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Thickness (mm)</th>
                    <th className="px-4 py-2 border-b">Plain Pr Sq Ft (Rs)</th>
                    <th className="px-4 py-2 border-b">Sheet Rate + With GST</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">2 mm</td>
                    <td className="px-4 py-2 border-b text-center">5.3</td>
                    <td className="px-4 py-2 border-b text-center">169.6 + 200.12</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">3.2 mm</td>
                    <td className="px-4 py-2 border-b text-center">7.78</td>
                    <td className="px-4 py-2 border-b text-center">248.96 + 293.77</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">3.4 mm</td>
                    <td className="px-4 py-2 border-b text-center">8.17</td>
                    <td className="px-4 py-2 border-b text-center">261.96 + 308.49</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">4.0 mm</td>
                    <td className="px-4 py-2 border-b text-center">9.22</td>
                    <td className="px-4 py-2 border-b text-center">295.04 + 348.14</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">4.2 mm</td>
                    <td className="px-4 py-2 border-b text-center">9.97</td>
                    <td className="px-4 py-2 border-b text-center">319.04 + 376.46</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">5.2 mm</td>
                    <td className="px-4 py-2 border-b text-center">12.21</td>
                    <td className="px-4 py-2 border-b text-center">390.72 + 461.04</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">5.5 mm</td>
                    <td className="px-4 py-2 border-b text-center">12.72</td>
                    <td className="px-4 py-2 border-b text-center">407.04 + 480.26</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">7 mm</td>
                    <td className="px-4 py-2 border-b text-center">14.77</td>
                    <td className="px-4 py-2 border-b text-center">472.64 + 557.71</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">7.3 mm</td>
                    <td className="px-4 py-2 border-b text-center">14.96</td>
                    <td className="px-4 py-2 border-b text-center">478.72 + 564.88</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">9.75 mm</td>
                    <td className="px-4 py-2 border-b text-center">23.54</td>
                    <td className="px-4 py-2 border-b text-center">753.28 + 771.28</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">11 mm</td>
                    <td className="px-4 py-2 border-b text-center">26.22</td>
                    <td className="px-4 py-2 border-b text-center">839.04 + 990.06</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">15 mm</td>
                    <td className="px-4 py-2 border-b text-center">34.06</td>
                    <td className="px-4 py-2 border-b text-center">1089.92 + 1286.10</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">16.7 mm</td>
                    <td className="px-4 py-2 border-b text-center">36.12</td>
                    <td className="px-4 py-2 border-b text-center">1156.16 + 1364.26</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-center">25 mm</td>
                    <td className="px-4 py-2 border-b text-center">62.35</td>
                    <td className="px-4 py-2 border-b text-center">1995.2 + 2354.36</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
          {/* Left Side Content */}
          <div ref={leftRef2} className={`flex flex-col justify-center ${leftInView2 ? 'animate-slide-in-left' : ''}`}>

<div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="px-4 py-2 border-b">Thickness (mm)</th>
        <th className="px-4 py-2 border-b">Plain Pr Sq Ft (Rs)</th>
        <th className="px-4 py-2 border-b">Sheet Rate + With GST</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border-b text-center">1.5 mm</td>
        <td className="px-4 py-2 border-b text-center">5.25</td>
        <td className="px-4 py-2 border-b text-center">168 + 198.24</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">1.9 mm</td>
        <td className="px-4 py-2 border-b text-center">5.32</td>
        <td className="px-4 py-2 border-b text-center">170.24 + 200.88</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">2.1 mm</td>
        <td className="px-4 py-2 border-b text-center">6.12</td>
        <td className="px-4 py-2 border-b text-center">195.84 + 231.09</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">2.3 mm</td>
        <td className="px-4 py-2 border-b text-center">6.65</td>
        <td className="px-4 py-2 border-b text-center">212.8 + 251.18</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">2.5 mm</td>
        <td className="px-4 py-2 border-b text-center">7.18</td>
        <td className="px-4 py-2 border-b text-center">229.70 + 271.18</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">3.2 mm</td>
        <td className="px-4 py-2 border-b text-center">8.9</td>
        <td className="px-4 py-2 border-b text-center">229.76 + 271.11</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">3.4 mm</td>
        <td className="px-4 py-2 border-b text-center">9.45</td>
        <td className="px-4 py-2 border-b text-center">284.8 + 336.06</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">4.2 mm</td>
        <td className="px-4 py-2 border-b text-center">12.25</td>
        <td className="px-4 py-2 border-b text-center">302.4 + 365.83</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">5.2 mm</td>
        <td className="px-4 py-2 border-b text-center">13.65</td>
        <td className="px-4 py-2 border-b text-center">436.8 + 515.42</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">5.5 mm</td>
        <td className="px-4 py-2 border-b text-center">14.8</td>
        <td className="px-4 py-2 border-b text-center">473.6 + 558.42</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">7 mm</td>
        <td className="px-4 py-2 border-b text-center">18.86</td>
        <td className="px-4 py-2 border-b text-center">603.52 + 712.15</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">9 mm</td>
        <td className="px-4 py-2 border-b text-center">23.8</td>
        <td className="px-4 py-2 border-b text-center">761.60 + 898.68</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">10 mm</td>
        <td className="px-4 py-2 border-b text-center">26.62</td>
        <td className="px-4 py-2 border-b text-center">851.84 + 1005.17</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">15 mm</td>
        <td className="px-4 py-2 border-b text-center">36.17</td>
        <td className="px-4 py-2 border-b text-center">1157.44 + 1365.77</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">16 mm</td>
        <td className="px-4 py-2 border-b text-center">40.1</td>
        <td className="px-4 py-2 border-b text-center">1280 + 1510.4</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">16.7 mm</td>
        <td className="px-4 py-2 border-b text-center">41.61</td>
        <td className="px-4 py-2 border-b text-center">1331.52 + 1571.19</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b text-center">25 mm</td>
        <td className="px-4 py-2 border-b text-center">66.12</td>
        <td className="px-4 py-2 border-b text-center">2115.84 + 2496.69</td>
      </tr>
    </tbody>
  </table>

</div>
</div>


          {/* Right Side Content - Image with Hover Animation */}
          <div ref={rightRef2} className={`flex justify-center items-center ${rightInView2 ? 'animate-slide-in-right' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1700973408133-b45276ec8feb?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-md w-full max-w-full object-cover hover-zoom"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

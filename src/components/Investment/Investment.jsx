import img1 from "../../assets/images/Garden-Tulum.jpg";
import img2 from "../../assets/images/Baan-Mai-Khao.jpg";
import img3 from "../../assets/images/nature.jpg";

const Investment = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-6">
        Investment Opportunities &  Benefits
      </h2>
      <p className="text-center text-gray-800 max-w-3xl mx-auto mb-12">
        Be part of the largest integrated lifestyle, entertainment, and leisure
        hub in Northern Bangladesh — combining luxury, recreation, and sustainable
        business models under one roof.
      </p>

      {/* Cards Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 px-6 pt-6">
          <img src={img1} alt="Why Invest" className="w-full h-52 object-cover rounded-2xl" />
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold ">Why Invest With Us?</h3>
            <p className="text-gray-800 text-sm font-semibold">
              North Bengal’s first & biggest lifestyle hub with hotel, resort,
              amusement park, retail shops, and more.
            </p>
            <ul className=" list-inside text-gray-500 text-sm space-y-1 pl-4">
              <li>  - Prime location for tourists & corporates</li>
              <li>  - Scenic rooftop & luxury cottages</li>
              <li>  - Diversified business model</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 px-6 pt-6" >
          <img src={img2} alt="Investment Highlights" className="w-full h-52 object-cover rounded-2xl" />
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold"> Investment Highlights</h3>
            <p className="text-gray-800 text-sm font-semibold">
              Affordable entry with proportional ownership and flexible payment options.
            </p>
            <ul className=" list-inside text-gray-500 text-sm space-y-1 pl-4">
              <li>  - Minimum Share: ৳560,000 </li>
              <li>  - Booking starts at ৳200,000</li>
              <li>  - Easy EMI facilities</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 px-6 pt-6">
          <img src={img3} alt="Shareholder Privileges" className="w-full h-52 object-cover rounded-2xl" />
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold "> Shareholder Privileges</h3>
            <p className="text-gray-800 text-sm font-semibold">
              Unlock exclusive benefits and secure your future with lifetime rights.
            </p>
            <ul className=" list-inside text-gray-500 text-sm space-y-1 pl-4">
              <li>  - Guaranteed ROI</li>
              <li>  - Profit-sharing opportunities</li>
              <li>  - Lifetime ownership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;

import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import offer1 from "../../assets/images/offer1.jpeg";
import offer2 from "../../assets/images/offer2.jpg";
import offer3 from "../../assets/images/offer3.jpg";
import offer4 from "../../assets/images/offer4.jpeg";

const Discounts = () => {
  return (
    <div className="p-6 my-12 w-full">
      <h1 className="text-3xl font-bold text-center mb-8">
        All Discounts & Promotions
      </h1>

      {/* Responsive Marquee Animation */}
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex gap-2 lg:gap-8">
          {/* Card 1 */}
          <Link to="/discounts/1" className="flex-shrink-0">
            <img
              src={offer4}
              alt="Resort 1"
              className="w-32 h-28 lg:w-72 lg:h-48 
                         object-cover rounded-lg shadow-lg 
                         hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Card 2 */}
          <Link to="/discounts/2" className="flex-shrink-0">
            <img
              src={offer3}
              alt="Resort 2"
              className="w-32 h-28 lg:w-72 lg:h-48 
                         object-cover rounded-lg shadow-lg 
                         hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Card 3 */}
          <Link to="/discounts/3" className="flex-shrink-0">
            <img
              src={offer2}
              alt="Hotel 1"
              className="w-32 h-28 lg:w-72 lg:h-48 
                         object-cover rounded-lg shadow-lg 
                         hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Card 4 */}
          <Link to="/discounts/4" className="flex-shrink-0">
            <img
              src={offer1}
              alt="Hotel 2"
              className="w-32 h-28 lg:w-72 lg:h-48 
                         object-cover rounded-lg shadow-lg 
                         hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default Discounts;

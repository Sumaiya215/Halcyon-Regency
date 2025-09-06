import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/images/1.jpg";
import banner2 from "../../assets/images/5_1.jpg";
import banner3 from "../../assets/images/2.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center mt-18 mb-48 px-4">
      {/* Responsive container */}
      <div className="w-5/6 lg:max-w-[960px] max-h-[300px] lg:h-[400px]">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
        >
          {/* Slide 1 */}
          <div className="relative w-full h-full">
            <img
              src={banner1}
              className="w-full h-[460px] object-cover rounded-xl"
              alt="Slide 1"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 p-4 sm:p-6 rounded-xl text-white max-w-xs sm:max-w-md lg:max-w-lg text-center">
                <h1 className="text-2xl  lg:text-3xl font-bold mb-2">
                  Halcyon Regency Hotel & Resort
                </h1>
                <p className="text-sm sm:text-base lg:text-lg">
                  Discover the best at unbeatable prices.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative w-full h-full">
            <img
              src={banner2}
              className="w-full h-[460px] object-cover rounded-xl"
              alt="Slide 2"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 p-4 sm:p-6 rounded-xl text-white max-w-xs sm:max-w-md lg:max-w-lg text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  Halcyon Regency Hotel & Resort
                </h1>
                <p className="text-sm sm:text-base lg:text-lg">
                  Discover the best at unbeatable prices.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative w-full h-full">
            <img
              src={banner3}
              className="w-full h-[460px] object-cover rounded-xl"
              alt="Slide 3"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 p-4 sm:p-6 rounded-xl text-white max-w-xs sm:max-w-md lg:max-w-lg text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  Halcyon Regency Hotel & Resort
                </h1>
                <p className="text-sm sm:text-base lg:text-lg">
                  Discover the best at unbeatable prices.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

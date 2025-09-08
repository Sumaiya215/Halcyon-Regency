import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/images/10.jpg";
import Img2 from "../../assets/images/11.jpg";
import Img3 from "../../assets/images/9.jpg";

const Welcome = () => {
  return (
    <div className="max-w-[420px] mx-auto lg:max-w-7xl   px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 pt-22">
        {/* Left: Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-xl font-bold italic">Grand Welcome</h3>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Halcyon Regency Hotel & Resort
          </h1>
          <p className="py-4 text-sm sm:text-base leading-relaxed">
            Imagine a charming and picturesque heritage village in the northern
            part of the countryside, surrounded by spectacular natural beauty.
            Experience a relaxing, exciting, and comfortable stay with glamorous
            hospitality and a unique atmosphere that makes every moment special.
          </p>
        </div>

        {/* Right: Image Carousel */}
        <div className="lg:w-1/2 w-full ">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img
                src={Img1}
                className="w-4/5 mx-auto h-[260px] sm:h-[260px] lg:h-[360px] object-cover rounded-lg shadow-2xl"
                alt="welcome slide 1"
              />
            </div>
            <div>
              <img
                src={Img2}
                className="w-4/5 mx-auto h-[260px] sm:h-[260px] lg:h-[360px] object-cover rounded-lg shadow-2xl"
                alt="welcome slide 2"
              />
            </div>
            <div>
              <img
                src={Img3}
                className="w-4/5 mx-auto h-[260px] sm:h-[260px] lg:h-[360px] object-cover rounded-lg shadow-2xl"
                alt="welcome slide 3"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

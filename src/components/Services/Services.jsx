import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/images/Banquet-Hall.jpg"
import img2 from "../../assets/images/3.jpg"
import img3 from "../../assets/images/2.jpg"
import img4 from "../../assets/images/cottage.jpg"
import img5 from "../../assets/images/4.jpg"
import img6 from "../../assets/images/luxurious-hotel.jpg"
import img7 from "../../assets/images/Amusement-park.jpg"
import img8 from "../../assets/images/5.jpg"
import img9 from "../../assets/images/Aquatica.jpg"
const Services = () => {
    return (
        <>
            <h3 className="text-4xl text-center font-bold mt-24 mb-12">
                Our Services
            </h3>

            {/* 1st */}
            <div className="hero my-12">
                <div className="hero-content flex-col lg:flex-row">
                    {/* Left Carousel */}
                    <div className="w-full lg:w-2/5">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={3000}
                            showThumbs={false}
                            showStatus={false}
                            className="rounded-lg shadow-lg"
                        >
                            <div>
                                <img src={img1} className="w-full h-72 object-cover rounded-2xl" alt="slide1" />
                            </div>
                            <div>
                                <img src={img2}  className="w-full h-72 object-cover rounded-2xl" alt="slide2" />
                            </div>
                            <div>
                                <img src={img3}  className="w-full h-72 object-cover rounded-2xl" alt="slide3" />
                            </div>
                        </Carousel>
                    </div>

                    {/* Right Text */}
                    <div className="w-full lg:w-1/2 p-6">
                        <h4 className="text-2xl font-bold mb-3">Halcyon Regency Hights</h4>
                        <p className="font-semibold text-gray-400">
                            200 Premium Hotel Rooms | Infinity Pool | Rooftop Cafe | Conference Hall
                        </p>
                        <p className="font-semibold text-gray-400">Room Rent: ৳5000-৳20000</p>
                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className="hero mb-12">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    {/* Left Text */}
                    <div className="w-full lg:w-1/2 p-6">
                        <h4 className="text-2xl font-bold mb-3">Halcyon Lagoon</h4>
                        <p className="font-semibold text-gray-400">
                            Maldives Theme Cottage | Camping Zone | Live Kitchen | Instagram Spot
                        </p>
                        <p className="font-semibold text-gray-400">Room Rent: ৳8000-৳25000</p>
                    </div>

                    {/* Right Carousel */}
                    <div className="w-full lg:w-2/5">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={3000}
                            showThumbs={false}
                            showStatus={false}
                            className="rounded-lg shadow-lg"
                        >
                            <div>
                                <img src={img4} className="w-full h-72 object-cover rounded-2xl"  alt="slide1" />
                            </div>
                            <div>
                                <img src={img5} className="w-full h-72 object-cover rounded-2xl"  alt="slide2" />
                            </div>
                            <div>
                                <img src={img6} className="w-full h-72 object-cover rounded-2xl"  alt="slide3" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* 3rd */}
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    {/* Left Carousel */}
                    <div className="w-full lg:w-2/5">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={3000}
                            showThumbs={false}
                            showStatus={false}
                            className="rounded-lg shadow-lg"
                        >
                            <div>
                                <img src={img7} className="w-full h-72 object-cover rounded-2xl"  alt="slide1" />
                            </div>
                            <div>
                                <img src={img8} className="w-full h-72 object-cover rounded-2xl"  alt="slide2" />
                            </div>
                            <div>
                                <img src={img9} className="w-full h-72 object-cover rounded-2xl"  alt="slide3" />
                            </div>
                        </Carousel>
                    </div>

                    {/* Right Text */}
                    <div className="w-full lg:w-1/2 p-6">
                        <h4 className="text-2xl font-bold mb-3">Halcyon Adventures</h4>
                        <p className="font-semibold text-gray-400">
                            Splash Bides | Theme Park Bides | Game Zone | Food Court 
                        </p>
                        <p className="font-semibold text-gray-400">Intry + Rides : ৳300-৳800</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
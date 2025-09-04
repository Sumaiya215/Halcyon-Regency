import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/images/1.jpg"
import banner2 from "../../assets/images/5_1.jpg"
import banner3 from "../../assets/images/2.jpg"
const Banner = () => {
    return (
        <div className="w-full mt-20 mb-64">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                showThumbs={false}
                showStatus={false}
            >
                <div className="relative">
                    <img src={banner1} className="w-full h-[600px]" alt="Slide 1" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className=" bg-black/50 p-6 rounded-xl text-white max-w-xl">
                            <h1 className="text-4xl font-bold mb-2">Halcyon Regency Hotel & Resort</h1>
                            <p className="text-lg">Discover the best at unbeatable prices.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner2} className="w-full h-[600px]" alt="Slide 2" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className=" bg-black/50 p-6 rounded-xl text-white max-w-xl">
                            <h1 className="text-4xl font-bold mb-2">Halcyon Regency Hotel & Resort</h1>
                            <p className="text-lg">Discover the best at unbeatable prices.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner3} className="w-full h-[600px]" alt="Slide 3" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className=" bg-black/50 p-6 rounded-xl text-white max-w-xl">
                            <h1 className="text-4xl font-bold mb-2">Halcyon Regency Hotel & Resort</h1>
                            <p className="text-lg">Discover the best at unbeatable prices.</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>


    )
}

export default Banner
import offer1 from "../../assets/images/offer1.jpeg";
import offer2 from "../../assets/images/offer2.jpg";
import offer3 from "../../assets/images/offer3.jpg";
import offer4 from "../../assets/images/offer4.jpeg";


const Discounts = () => {
    return (
        <div className="p-6 my-22">
            <h1 className="text-3xl font-bold text-center mb-8">
                All Discounts & Promotions
            </h1>

            {/* Grid of Cards */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Card 1 */}
                <div className="rounded-lg">
                    <img
                        src={offer4}
                        alt="Resort 1"
                        className="w-4/5 mx-auto md:w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Card 2 */}
                <div className="rounded-lg">
                    <img
                        src={offer3}
                        alt="Resort 2"
                        className="w-4/5 mx-auto md:w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Card 3 */}
                <div className="rounded-lg">
                    <img
                        src={offer2}
                        alt="Hotel 1"
                        className="w-4/5 mx-auto md:w-full h-64 object-cover rounded-lg"
                    />
                </div>

                {/* Card 4 */}
                <div className="rounded-lg">
                    <img
                        src={offer1}
                        alt="Hotel 2"
                        className="w-4/5 mx-auto md:w-full h-64 object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Discounts
import img1 from '../../assets/images/Garden-Tulum.jpg'

const Investment = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            {/* Header */}
            <h2 className="text-4xl font-bold text-center mb-6">
                Investment Opportunities & Exclusive Benefits
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Welcome to the largest integrated lifestyle, entertainment, and leisure
                destination in Northern Bangladesh — a landmark project that combines
                luxury, recreation, and sustainable business models under one roof.
            </p>

            {/* Flex Container */}
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={img1}
                        alt="Investment Opportunities"
                        className="rounded-2xl shadow-lg"
                    />
                </div>

                {/* Right Text */}
                <div className="w-full lg:w-1/2 space-y-6">
                    {/* Why Invest */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">Why Invest With Us?</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                The first and biggest integrated lifestyle hub in North Bengal.
                            </li>
                            <li>
                                Multiple ventures: 5-star hotel, resort, party center,
                                amusement park, convention center, picnic spot, and retail
                                shops.
                            </li>
                            <li>
                                Scenic rooftop restaurant, botanical garden, and luxury
                                cottages.
                            </li>
                            <li>
                                Prime location attracting tourists, corporates, and families.
                            </li>
                            <li>World-class services with affordable investment.</li>
                            <li>Sustainable infrastructure and diversified revenue streams.</li>
                        </ul>
                    </div>

                    {/* Investment Highlights */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">💰 Investment Highlights</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Minimum Share Value: ৳ 560,000 only </li>
                            <li>Proportional ownership based on your investment.</li>
                            <li>Booking requirement: ৳ 200,000 only </li>
                            <li>Flexible EMI options available </li>
                        </ul>
                    </div>

                    {/* Shareholder Privileges */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">🎁 Shareholder Privileges</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Guaranteed ROI (Return on Investment).</li>
                            <li>Profit-sharing opportunities.</li>
                            <li>Lifetime ownership rights.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Investment
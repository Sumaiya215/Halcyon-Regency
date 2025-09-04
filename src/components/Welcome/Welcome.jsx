import Img from "../../assets/images/10.jpg";

const Welcome = () => {
    return (
        <div className="hero min-h-screen bg-base-200 max-w-7xl mx-auto mb-22">
            <div className="hero-content flex  flex-col lg:flex-row-reverse">
                {/* Right Side Image */}
                <img
                    src={Img}
                    className="max-w-lg rounded-lg shadow-2xl my-10"
                    alt="welcome image"
                />

                {/* Left Side Text */}
                <div>
                    <h3 className="text-xl font-bold text-primary">Grand Welcome</h3>
                    <h1 className="text-4xl font-bold mb-2">
                        Halcyon Regency Hotel & Resort
                    </h1>
                    <p className="w-3/4 py-6 text-lg text-gray-600">
                        Imagine a charming and picturesque heritage village in the northern
                        part of the countryside, surrounded by spectacular natural beauty.
                        Experience a relaxing, exciting, and comfortable stay at Momo Inn
                        with its glamorous hospitality and unique atmosphere.
                    </p>
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
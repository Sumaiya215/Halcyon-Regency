import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import img1 from "../../assets/images/9.jpg";
import img2 from "../../assets/images/10.jpg";
import img3 from "../../assets/images/11.jpg";

const About = () => {
    const images = [img1, img2, img3];
    const [index, setIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="max-w-6xl mx-auto px-6 py-16 ">
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
                About Our Establishment
            </h2>
            {/* Text Content */}
            <div className="flex flex-col lg:flex-row items-center gap-6"> 
                <div className="flex-1">
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                        <li>Largest lifestyle & leisure hub in Northern Bangladesh.</li>
                        <li>Five-star hotel, resort, convention center, and retail shops.</li>
                        <li>Rooftop dining, botanical garden & cozy cottages.</li>
                        <li>Amusement park and picnic spots for families.</li>
                        <li>Corporate party center with modern facilities.</li>
                        <li>Event-ready convention hall for 1,000+ guests.</li>
                        <li>Strategic location attracting tourists & businesses.</li>
                        <li>Ideal for family gatherings, short trips, and day visitors.</li>
                        <li>Blending regional culture with world-class service.</li>
                        <li>Experienced management ensuring premium hospitality.</li>
                    </ul>
                </div>

                {/* Image Slider */}
                <div className="flex-1 relative w-full max-w-lg h-72 md:h-96 overflow-hidden rounded-xl shadow-lg">
                    <motion.img
                        key={index}
                        src={images[index]}
                        alt="Resort view"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;

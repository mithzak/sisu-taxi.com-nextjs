"use client";

import { motion } from "framer-motion";
import { FaCarSide, FaPlane, FaSmile, FaMapSigns, FaBusinessTime, FaClock, FaTaxi } from "react-icons/fa";

export default function AboutUsPage() {
    const featureList = [
        { icon: <FaClock size={28} className="text-[#2A2A2A]" />, title: "Fast Pickup" },
        { icon: <FaCarSide size={28} className="text-[#2A2A2A]" />, title: "City Transport" },
        { icon: <FaPlane size={28} className="text-[#2A2A2A]" />, title: "Airport Transport" },
        { icon: <FaSmile size={28} className="text-[#2A2A2A]" />, title: "Satisfaction Guarantee" },
        { icon: <FaMapSigns size={28} className="text-[#2A2A2A]" />, title: "Tour Transport" },
        { icon: <FaBusinessTime size={28} className="text-[#2A2A2A]" />, title: "Business Transport" },
        { icon: <FaTaxi size={28} className="text-[#2A2A2A]" />, title: "Regular Transport" },
        { icon: <FaCarSide size={28} className="text-[#2A2A2A]" />, title: "Flexible & Cost-Effective" },
    ];

    const cardMotion = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A] text-gray-200 min-h-screen">

            <div className="relative w-full h-[60vh] bg-black flex items-center justify-center">
                <motion.img
                    src="https://images.wallpaperscraft.com/image/single/taxi_city_road_114395_1920x1080.jpg"
                    alt="About Hero"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full object-cover"
                />
                <motion.h1
                    className="absolute text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-yellow-400 text-center px-6 py-2 rounded-lg backdrop-brightness-15 bg-black/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h1>
            </div>

            <motion.div
                className="max-w-5xl mx-auto py-16 px-4 sm:px-8 text-center space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.p
                    variants={cardMotion}
                    className="text-xl sm:text-2xl font-semibold"
                >
                    Sisu-Taxi is Finland&#39;s pioneering mobility super-app, revolutionizing urban transportation.
                </motion.p>
                <motion.p variants={cardMotion} className="text-gray-300 leading-relaxed">
                    We are reimagining urban mobility by creating people-centric cities. Our innovative solutions provide superior alternatives to private car ownership, encompassing on-demand ride services, car-sharing programs, micro-mobility, tours, and more.
                </motion.p>
                <motion.p variants={cardMotion} className="text-gray-300 leading-relaxed">
                    Address: Tullilasintie 31 A, 00770 Helsinki, Finland
                </motion.p>
            </motion.div>

            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 pb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {featureList.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardMotion}
                        className="bg-[#2A2A2A] rounded-2xl flex flex-col items-center text-center p-6 shadow-2xl hover:shadow-[0_0_25px_#FDB813aa] transition transform hover:scale-105"
                    >
                        <div className="bg-[#FDB813] p-4 rounded-full mb-4">{feature.icon}</div>
                        <span className="text-lg font-semibold text-white">{feature.title}</span>
                    </motion.div>
                ))}
            </motion.div>
            <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                    Our Location
                </h2>
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.285796959376!2d24.934456816020833!3d60.18236038191123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920c0b2d05f24f%3A0x2b5dfc9b7a3c42e6!2sTullilasintie%2031%2C%2000770%20Helsinki%2C%20Finland!5e0!3m2!1sen!2sus!4v1695160000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0"
                    ></iframe>

                    {/*<iframe*/}
                    {/*    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Tullilasintie+31+A,+00770+Helsinki,+Finland"*/}
                    {/*    width="100%"*/}
                    {/*    height="400"*/}
                    {/*    style={{ border: 0 }}*/}
                    {/*    allowFullScreen=""*/}
                    {/*    loading="lazy"*/}
                    {/*    referrerPolicy="no-referrer-when-downgrade"*/}
                    {/*></iframe>*/}

                </div>
            </div>

        </div>
    );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2;
        const y = (e.clientY / innerHeight - 0.5) * 2;
        setMousePos({ x, y });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative h-screen overflow-hidden"
        >
            <section className="relative h-full bg-[#0C0C0C] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl relative z-10">
                    {/* متن سمت چپ */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDB813] mb-4">
                            Sisu
                        </h4>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-snug">
                            Affordable Ride{" "}
                            <span className="text-[#FDB813]">For Everyone</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-lg mx-auto md:mx-0">
                            Book safe, fast, and affordable rides anytime. Download our app
                            today and travel with ease across the city.
                        </p>

                        {/* دکمه‌ها */}
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <motion.a
                                href="#"
                                className="flex items-center justify-center gap-2 bg-green-600 text-white
                                       px-3 py-2 rounded-md shadow-md hover:bg-green-700 transition
                                       text-xs sm:text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGooglePlay size={35} /> {/* smaller icon */}
                                Download Android
                            </motion.a>

                            <motion.a
                                href="#"
                                className="flex items-center justify-center gap-2 bg-gray-900 text-white
                                   px-3 py-2 rounded-md shadow-md hover:bg-gray-800 transition
                                   text-xs sm:text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaApple size={35} /> {/* smaller icon */}
                                Download iOS
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* بک‌گراند پارالاکس */}
            <motion.img
                src="/assets/hero.jpeg"
                alt="Parallax"
                className="absolute top-0 left-0 w-full h-full object-cover"
                animate={{
                    scale: 1.1,
                    x: -mousePos.x * 40,
                    y: -mousePos.y * 40,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />

            {/* لایه تاریک */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 pointer-events-none" />
        </div>
    );
};

export default HeroSection;

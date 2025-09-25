"use client";

import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import animationData from "../../../../public/assets/floating_phone_vertical.json";

const DownloadSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#FDB813] to-yellow-600 text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                <div className="w-full max-w-xl text-center lg:text-left space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black"
                    >
                        Your Ride. Your Way. Anytime, Anywhere.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-black"
                    >
                        Download our taxi app today and enjoy fast and affordable rides whenever you need them.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2 bg-black px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:shadow-[0_0_25px_#FDB813aa] hover:scale-105 transition transform"
                        >
                            <FaDownload size={20} /> Download for Android
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-[0_0_25px_#FDB813aa] hover:scale-105 transition transform"
                        >
                            <FaDownload size={20} /> Download for iOS
                        </a>
                    </motion.div>
                </div>

                {/*<motion.div*/}
                {/*    initial={{ opacity: 0, scale: 0.9 }}*/}
                {/*    whileInView={{ opacity: 1, scale: 1 }}*/}
                {/*    transition={{ duration: 0.7 }}*/}
                {/*    className="w-full max-w-md flex justify-center lg:justify-end"*/}
                {/*>*/}
                {/*    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl">*/}
                {/*        <Lottie animationData={animationData} loop={true} />*/}
                {/*    </div>*/}
                {/*</motion.div>*/}

            </div>
        </div>
    );
};

export default DownloadSection;

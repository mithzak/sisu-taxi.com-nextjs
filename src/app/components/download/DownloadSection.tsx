"use client";

import { FaDownload } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../../public/assets/appointment_booking_with_smartphone.json";

const DownloadSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#FDB813] to-yellow-700 text-white py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                {/* متن و دکمه‌ها */}
                <div className="w-full max-w-xl text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-4">
                        Your Ride. Your Way. Anytime, Anywhere.
                    </h2>
                    <p className="text-base sm:text-lg mb-6 text-black">
                        Download our taxi app today and enjoy fast and affordable rides whenever you need them.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2 bg-black px-5 py-3 rounded-xl text-white font-semibold shadow-lg"
                        >
                            <FaDownload size={20} /> Download for Android
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold shadow-lg"
                        >
                            <FaDownload size={20} /> Download for iOS
                        </a>
                    </div>
                </div>

                {/* انیمیشن */}
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl">
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { GiSteeringWheel } from "react-icons/gi";
import { RiRoadMapFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ServiceSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const events = [
        {
            icon: IoCarSportSharp,
            title: "Best Quality Taxi",
            desc: "High remuneration for drivers as they earn almost 90% to 95% on every ride.",
        },
        {
            icon: GiSteeringWheel,
            title: "Expert Drivers",
            desc: "Highly qualified drivers with exceptional customer services, faithful and reliable.",
        },
        {
            icon: RiRoadMapFill,
            title: "Anywhere Everywhere",
            desc: "We're not limited to few locations. Anywhere you're located in Finland, book a ride, and we'll be there in no time.",
        },
    ];

    const items = [
        { id: 1, title: "Tour Transport", text: "Get a driver for a tour on agreed hourly fare as long as you want." },
        { id: 5, title: "Online Booking", text: "Easy fast and accessible." },
        { id: 2, title: "City Transport", text: "Easy fast and accessible." },
        { id: 3, title: "Airport Transport", text: "Arrive on time to be ready for departure, also providing convenient ride from airport to anywhere." },
        { id: 6, title: "Business Transport", text: "Easy go and prompt response to request, so you wouldn't miss that business meeting." },
        { id: 4, title: "Regular Transport", text: "Low Cost And Affordable Ride For Everyone." },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mx-2 md:mx-8 my-10">
            {/* Timeline Section */}
            <div ref={ref} className="w-full md:w-5/12 relative">
                <div className="relative pl-8">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gray-600 rounded-full"></div>
                    <motion.div
                        className="absolute left-0 top-0 w-1 bg-[#FDB813] rounded-full origin-top"
                        style={{ height: lineHeight }}
                    />
                    <div className="space-y-8 md:space-y-12">
                        {events.map((event, index) => {
                            const Icon = event.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative pl-6"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-[#FDB813] rounded-full mt-2 -left-[7px] md:-left-[9px] border-2 border-gray-900"></div>
                                    <div className="flex items-center p-4 md:p-5 bg-gray-800 text-gray-100 rounded-xl shadow-lg hover:shadow-xl transition">
                                        <Icon size={48} className="md:size-72 text-[#FDB813]" />
                                        <div className="mx-2">
                                            <h3 className="text-base md:text-lg font-semibold">{event.title}</h3>
                                            <p className="text-sm md:text-gray-300">{event.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Swiper Section */}
            <div className="w-full md:w-5/12 mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    direction="vertical"
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 2000 }}
                    loop
                    className="h-60 md:h-96"
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="grid grid-rows-2 text-center items-center justify-center h-full">
                                <div className="row-span-1">
                                    <h1 className="text-2xl md:text-5xl font-semibold">{item.title}</h1>
                                </div>
                                <div className="row-span-1">
                                    <p className="text-sm md:text-base">{item.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ServiceSection;

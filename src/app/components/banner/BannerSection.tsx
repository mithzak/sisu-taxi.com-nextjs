"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const BannerSection = () => {

    const slides = [
        {
            img: "https://images.wallpaperscraft.com/image/single/taxi_auto_city_122356_1920x1080.jpg",
            title: "Fast & Reliable",
            subtitle: "Taxi services you can trust",
        },
        {
            img: "https://images.wallpaperscraft.com/image/single/taxi_town_inscription_114396_1920x1080.jpg",
            title: "Comfortable Rides",
            subtitle: "Travel in style and comfort",
        },
        {
            img: "https://img.goodfon.com/original/1920x1080/7/a4/new-york-usa-town-city-snow.jpg",
            title: "Anytime, Anywhere",
            subtitle: "Available 24/7 for you",
        },
    ];

    return (
        <div className="w-full h-[80vh] relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative text-center text-white px-4">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BannerSection;
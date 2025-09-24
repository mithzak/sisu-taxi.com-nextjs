"use client";

import { motion } from "framer-motion";

const GallerySection = () => {
    const items = [
        { img: "https://media.istockphoto.com/id/1160783478/photo/business-couple-entering-taxi-at-airport.jpg?s=612x612&w=0&k=20&c=U3i8CXPufuMYaudSKOuRxalhWSfuvaiW2zFKbsiVwvA=", text: "Item 1", w: 2, h: 2 },
        { img: "https://img.freepik.com/premium-photo/beautiful-latin-woman-tourist-traveling-taxi-rewritten-with-your-friends-your-smartphon_926199-4424810.jpg?semt=ais_incoming&w=740&q=80", text: "Item 2", w: 1, h: 2 },
        { img: "https://media.istockphoto.com/id/1006876186/photo/businesswoman-taking-a-taxi-ride.jpg?s=612x612&w=0&k=20&c=IcJfrR7UNI2SQysVRbThOxTMAaEQjorFXE6hsahBKBM=", text: "Item 3", w: 1, h: 1 },
        { img: "https://img.freepik.com/free-photo/smiley-woman-talking-phone-backseat-car-while-having-coffee_23-2148685302.jpg?semt=ais_hybrid&w=740&q=80", text: "Item 4", w: 1, h: 2 },
        { img: "https://img.freepik.com/free-photo/man-giving-taxi-services-through-app_23-2149149651.jpg?semt=ais_hybrid&w=740&q=80", text: "Item 5", w: 2, h: 2 },
        { img: "https://images.pexels.com/photos/1521580/pexels-photo-1521580.jpeg?cs=srgb&dl=pexels-rodolfoclix-1521580.jpg&fm=jpg", text: "Item 6", w: 1, h: 1 },
        { img: "https://media.istockphoto.com/id/1159637659/photo/young-black-woman-driving-car-for-rideshare.jpg?s=612x612&w=0&k=20&c=H4LmKKT4aDER5G11JwHMG4GZ-1mvqk4127Ud73thyII=", text: "Item 7", w: 1, h: 1 },
        { img: "https://img.freepik.com/free-photo/passenger-using-her-mobile-phone-car_23-2148510543.jpg?semt=ais_incoming&w=740&q=80", text: "Item 8", w: 1, h: 1 },
    ];

    return (
        <div className="hidden lg:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:auto-rows-[150px] md:gap-2 mx-auto md:max-w-6xl p-4">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-lg"
                    style={{
                        gridColumn: `span ${item.w}`,
                        gridRow: `span ${item.h}`,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.img})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg">
                        {item.text}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default GallerySection;

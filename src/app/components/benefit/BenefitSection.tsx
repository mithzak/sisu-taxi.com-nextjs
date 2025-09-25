"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaTaxi, FaUser, FaCarSide } from "react-icons/fa";

const BenefitSection = () => {
    const cardMotion = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const sections = [
        {
            title: "Earn with Sisu Taxi",
            text: "Every ride is an opportunity. With Sisu, drivers keep more of their income while building long-term stability. Our model is built to reward the people behind the wheel, not just the platform.",
            img: "https://t4.ftcdn.net/jpg/04/62/40/55/360_F_462405552_OKCZsIPaFydzpsyR8RUlMhqhMCqUWkqR.jpg",
            icon: <FaTaxi size={28} className="text-[#2A2A2A]" />,
            button: "Add To Driver",
            bg: "bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A]",
            reverse: false,
            href: "#",
        },
        {
            title: "Ride with Confidence",
            text: "For passengers, Sisu means affordable rides, reliable service, and a smooth experience from pickup to drop-off. The app makes it simple to book, track, and pay for your journey anytime, anywhere.",
            img: "https://media.istockphoto.com/id/1470035625/photo/driver-transporting-a-business-man-on-a-crowdsourced-taxi.jpg?s=612x612&w=0&k=20&c=HbVWN87JGim9g0CDhh2NHPM8oZ1g4qVGx86vxJ5RM24=",
            icon: <FaUser size={28} className="text-[#2A2A2A]" />,
            button: "Get Started",
            bg: "bg-gradient-to-r from-[#111111] to-[#1E1E1E]",
            reverse: true,
            href: "#",
        },
        {
            title: "Grow with Your Fleet",
            text: "Whether you own one car or many, Sisu gives fleet owners the tools to manage vehicles, support drivers, and maximize revenue. As we expand, so do your opportunities to scale with us.",
            img: "https://yestech.co.uk/wp-content/uploads/2022/03/best-phone-system-features-for-taxi-business.png",
            icon: <FaCarSide size={28} className="text-[#2A2A2A]" />,
            button: "Add Your Fleet",
            bg: "bg-gradient-to-r from-[#1E1E1E] via-[#2A2A2A] to-[#1E1E1E]",
            reverse: false,
            href: "#",
        },
    ];

    return (
        <div  className="bg-gradient-to-b from-[#2A2A2A] via-[#FDB81333] to-[#1E1E1E]">
            {sections.map((sec, i) => (
                <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`${sec.bg} p-6 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                        sec.reverse ? "flex-col-reverse md:flex-row-reverse" : ""
                    }`}
                >
                    {/* تصویر */}
                    <motion.img
                        variants={cardMotion}
                        src={sec.img}
                        alt={sec.title}
                        className="rounded-2xl w-full md:w-1/2 object-cover shadow-2xl"
                    />

                    {/* متن */}
                    <motion.div variants={cardMotion} className="text-center md:text-left md:w-1/2 space-y-5">
                        <div className="flex items-center justify-center md:justify-start mb-2">
                            <div className="bg-[#FDB813] p-3 rounded-full shadow-lg">{sec.icon}</div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FDB813] to-yellow-400">
                            {sec.title}
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">{sec.text}</p>
                        <Link
                            href={sec.href}
                            className="inline-block bg-[#FDB813] hover:bg-amber-300 text-[#2A2A2A] px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-[0_0_25px_#FDB813aa] hover:scale-105 transition transform"
                        >
                            {sec.button}
                        </Link>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default BenefitSection;

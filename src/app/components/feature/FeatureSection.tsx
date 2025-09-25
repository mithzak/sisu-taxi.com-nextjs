"use client"

import { FaEuroSign } from "react-icons/fa";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { FaApplePay } from "react-icons/fa6";
import { BiLogoPaypal } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";
import { LuTabletSmartphone } from "react-icons/lu";
import { ImAppleinc } from "react-icons/im";
import { GrAndroid } from "react-icons/gr";
import { motion } from "framer-motion";

const FeatureSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] py-20 overflow-hidden">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 text-center">
                Designed for{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-[#FDB813] to-yellow-600 bg-clip-text text-transparent">
                    You
                </span>
            </h2>

            <div className="w-11/12 sm:w-10/12 lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                {[
                    {
                        icon: <FaEuroSign size={64} />,
                        title: "Pay Your Way",
                        items: [
                            { icon: <RiVisaLine size={26} />, label: "Visa" },
                            { icon: <RiMastercardFill size={26} />, label: "Master" },
                            { icon: <FaApplePay size={26} />, label: "Apple Pay" },
                            { icon: <BiLogoPaypal size={26} />, label: "PayPal" },
                        ],
                    },
                    {
                        icon: <AiOutlineSafety size={64} />,
                        title: "Safety First",
                        items: [
                            { icon: <BsFillTaxiFrontFill size={26} />, label: "Guarantee" },
                            { icon: <MdHighQuality size={26} />, label: "Quick Ride" },
                        ],
                    },
                    {
                        icon: <LuTabletSmartphone size={64} />,
                        title: "100% Digital",
                        items: [
                            { icon: <ImAppleinc size={26} />, label: "Apple" },
                            { icon: <GrAndroid size={26} />, label: "Android" },
                        ],
                    },
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:scale-105 transition"
                    >
                        <div className="bg-gradient-to-br from-[#FDB813] to-yellow-600 text-[#1a1a1a] rounded-2xl p-4 shadow-[0_0_20px_#FDB813aa] mb-6">
                            {card.icon}
                        </div>
                        <span className="text-white text-2xl font-semibold tracking-wide mb-6">
                            {card.title}
                        </span>
                        <hr className="h-0.5 bg-white/20 my-4 w-9/12 mx-auto" />

                        <div
                            className={`flex justify-center ${
                                card.items.length > 2 ? "gap-4 flex-wrap" : "gap-10"
                            }`}
                        >
                            {card.items.map((item, j) => (
                                <div
                                    key={j}
                                    className="flex flex-col items-center gap-2 group"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center bg-white/80 text-[#1a1a1a] rounded-xl group-hover:bg-[#FDB813] group-hover:text-black transition shadow-md">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm text-white/80 group-hover:text-[#FDB813] transition">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;

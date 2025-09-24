"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";

const Menu = () => {
    const [isTop, setIsTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsTop(window.scrollY < 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-50 bg-[#111428] shadow-md"
            animate={{
                paddingTop: isTop ? "1.5rem" : "0.5rem",
                paddingBottom: isTop ? "1.5rem" : "0.5rem",
            }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <div
                    className="font-bold text-[#111428] py-2 px-3 bg-[#FDB813] rounded-xl cursor-pointer hover:bg-amber-200"
                >
                    <div className="flex items-center">
                        <IoCarSportSharp size={20} className="mx-2" />
                        <strong className="text-xl">Fleet Owner?</strong>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-white">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <a key={item} href="#" className="hover:text-gray-700">
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6 md:hidden"
                >
                    {/* Menu Links */}
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:text-gray-700 text-[#111428] py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}

                    {/* Divider */}
                    <hr className="my-4 border-gray-300" />

                    {/* Contact Info */}
                    <div className="text-gray-700 text-sm space-y-2">
                        <div className="flex items-center gap-2">
                            <HiOutlineMail size={18} className="text-[#FDB813]" />
                            <a href="mailto:support@sisu-taxi.com" className="hover:text-white">
                                support@sisu-taxi.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlinePhone size={18} className="text-[#FDB813]" />
                            <a href="tel:+358465480460" className="hover:text-white">
                                +358465480460
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlineClock size={18} className="text-[#FDB813]" />
                            <span>Sun 09:00 - 17:00 | Mon - Sat 08:00 - 22:00</span>
                        </div>
                        <div className="mt-2 font-semibold text-white">
                            We Provide
                            <br />
                            <span className="text-[#FDB813]">The Best Service & Discounts</span>
                            <br />
                            For You
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Optional overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </motion.header>
    );
};

export default Menu;

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";
import Link from "next/link";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const items = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'About',
            url: '/about'
        },
        {
            title: 'Service',
            url: '/service'
        },
        {
            title: 'Contact',
            url: '/contact'
        },
        {
            title: 'Login',
            url: '/login'
        },
    ]

    return (
        <div
            className="fixed top-0 left-0 w-full z-50 bg-[#2A2A2A] shadow-md py-5"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
                <div
                    className="inline-block bg-[#FDB813] hover:bg-amber-300 text-[#2A2A2A] px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-[0_0_25px_#FDB813aa] hover:scale-105 transition transform cursor-pointer"
                >
                    <div className="flex items-center ">
                        <IoCarSportSharp size={20} className="mx-2" />
                        <strong className="text-xl">Manage Your Fleet</strong>
                    </div>
                </div>

                <nav className="hidden md:flex gap-6 text-white">
                    {items && items.map((item, index) => (
                        <Link key={index} href={item.url} className="hover:text-[#FDB813]">
                            {item.title}
                        </Link>
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

            {menuOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 w-64 h-full bg-[#111428] shadow-lg z-50 flex flex-col p-6 md:hidden"
                >
                    {items && items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.url}
                            className="hover:text-gray-700 text-[#111428] py-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
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

            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Menu;

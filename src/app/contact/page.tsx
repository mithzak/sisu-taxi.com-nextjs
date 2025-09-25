"use client";

import { motion } from "framer-motion";

export default function ContactUsPage() {
    const inputMotion = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A] text-gray-200 flex items-center justify-center py-20 px-4 sm:px-8 lg:px-16">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#2A2A2A] rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-3xl"
            >
                <motion.h1
                    variants={inputMotion}
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-yellow-400 text-center mb-6"
                >
                    Contact Us
                </motion.h1>

                <motion.p
                    variants={inputMotion}
                    className="text-center text-gray-300 mb-8"
                >
                    We&#39;d love to hear from you! Fill out the form below and we&#39;ll get back to you as soon as possible.
                </motion.p>

                <motion.form variants={inputMotion} className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-[#1E1E1E] text-white p-4 rounded-xl shadow-inner border border-gray-700 focus:border-[#FDB813] outline-none transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-[#1E1E1E] text-white p-4 rounded-xl shadow-inner border border-gray-700 focus:border-[#FDB813] outline-none transition"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={6}
                        className="bg-[#1E1E1E] text-white p-4 rounded-xl shadow-inner border border-gray-700 focus:border-[#FDB813] outline-none transition resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#FDB813] hover:bg-amber-300 text-[#2A2A2A] font-bold py-4 rounded-2xl cursor-pointer shadow-lg hover:shadow-[0_0_25px_#FDB813aa] hover:scale-105 transition transform"
                    >
                        Send Message
                    </button>
                </motion.form>
            </motion.div>
        </div>
    );
}

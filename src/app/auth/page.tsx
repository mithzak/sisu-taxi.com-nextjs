"use client";

import { motion } from "framer-motion";
import LoginForm from "@/app/components/forms/login/LoginForm";

export default function LoginPage() {

    const motionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A] px-4 sm:px-8">
            <motion.div
                className="bg-[#2A2A2A] rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-md"
                {...motionProps}
            >
                <motion.h1
                    className="text-3xl sm:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-yellow-400 text-center"
                    {...motionProps}
                >
                    Login
                </motion.h1>

                <LoginForm />

                <p className="text-gray-400 text-sm mt-4 text-center">
                    Don&#39;t have an account? <span className="text-[#FDB813] cursor-pointer">Sign Up</span>
                </p>
            </motion.div>
        </div>
    );
}

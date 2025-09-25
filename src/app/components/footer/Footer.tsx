import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const pages = [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Services", url: "/service" },
        { title: "Contact", url: "/contact" },
    ];

    return (
        <footer className="bg-[#1E1E1E] text-gray-200 pt-12">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                <div>
                    <h3 className="text-2xl font-bold text-[#FDB813] mb-4">Sisu-Taxi</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Fast, safe, and reliable taxi service for everyone. Ride with confidence anytime.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-[#FDB813] transition-colors"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[#FDB813] transition-colors"><FaTwitter /></a>
                        <a href="#" className="hover:text-[#FDB813] transition-colors"><FaInstagram /></a>
                        <a href="#" className="hover:text-[#FDB813] transition-colors"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-gray-200 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <Link href={page.url} className="hover:text-[#FDB813] transition-colors">
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-gray-200 mb-4">Contact</h3>
                    <p className="text-sm sm:text-base">Email: support@sisu-taxi.com</p>
                    <p className="text-sm sm:text-base">Phone: (+358) 465-480-460</p>
                </div>

                {/* Address */}
                <div>
                    <h3 className="text-lg font-bold text-gray-200 mb-4">Address</h3>
                    <p className="text-sm sm:text-base">
                        Tullilasintie 31 A, 00770 Helsinki, Finland
                    </p>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 py-4 text-center text-gray-400 text-xs sm:text-sm">
                © 2025 SISU-TAXI OY. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

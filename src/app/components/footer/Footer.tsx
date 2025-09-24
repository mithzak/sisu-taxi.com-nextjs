const Footer = () => {
    const pages = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Services', url: '/service' },
        { title: 'Contact', url: '/contact' },
    ]

    return (
        <footer className="bg-gray-950 text-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-[#FDB813] text-lg font-bold mb-4">Sisu Taxi</h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Fast, safe, and reliable taxi service for everyone. Ride with confidence anytime.
                    </p>
                </div>
                <div>
                    <h3 className="text-[#FDB813] text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                        {pages && pages.map((page, index) => (
                            <li key={index}>
                                <a href={page.url} className="hover:text-[#FDB813] transition-colors duration-200">
                                    {page.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-[#FDB813] text-lg font-bold mb-4">Contact</h3>
                    <p className="text-sm sm:text-base">Email: support@sisu-taxi.com</p>
                    <p className="text-sm sm:text-base">Phone: (+358) 465-480-460</p>
                </div>
                <div>
                    <h3 className="text-[#FDB813] text-lg font-bold mb-4">Address</h3>
                    <p className="text-sm sm:text-base">Tullilasintie 31 A 00770 Helsinki, Finland</p>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-400 text-xs sm:text-sm">
                © 2025 SISU TAXI OY
            </div>
        </footer>
    );
}

export default Footer;

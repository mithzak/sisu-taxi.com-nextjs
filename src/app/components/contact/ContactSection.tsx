const ContactSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#FDB813] to-yellow-700 text-gray-900 py-12 px-6 text-center shadow-lg mx-auto mt-0.5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                24 Hour Taxi Service Available
            </h2>
            <p className="text-lg md:text-xl mb-6">
                Call now & book your taxi for your next ride.
            </p>
            <a
                href="tel:+358465480460"
                className="inline-block bg-gray-900 text-yellow-500 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition-colors"
            >
                (+358) 465 480 460
            </a>
        </section>
    );
}

export default ContactSection;
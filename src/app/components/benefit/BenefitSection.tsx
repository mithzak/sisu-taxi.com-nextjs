import Link from "next/link";

const BenefitSection = () => {
    return (
        <div className="bg-[#1A1A1A]">
            <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto py-1">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-12 items-center my-12 md:my-24 text-stone-100">
                    <img
                        className="rounded-2xl w-full md:w-1/2 object-cover"
                        src="https://t4.ftcdn.net/jpg/04/62/40/55/360_F_462405552_OKCZsIPaFydzpsyR8RUlMhqhMCqUWkqR.jpg"
                        alt="driver"
                    />
                    <div className="text-center md:text-left md:w-1/2">
                        <span className="block text-sm sm:text-base text-amber-300">
                          Drive with Sisu Taxi and turn your time into income.
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-4xl mt-2 font-bold">
                            Turn every ride into income with Sisu Taxi.
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            Over 200 million riders worldwide are looking for rides. The busier it gets, the more you earn.
                        </p>
                        <div className="my-5 sm:my-6">
                            <Link
                                href=""
                                className="inline-block bg-[#FDB813] hover:bg-amber-200 text-[#2A2A2A] px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl rounded-xl font-bold transition"
                            >
                                Add To Driver
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-10 md:gap-12 items-center my-12 md:my-24 text-stone-100">
                    <div className="text-center md:text-left md:w-1/2">
                        <span className="block text-sm sm:text-base text-amber-300">
                          Join thousands of couriers worldwide who partner with Sisu Taxi.
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-4xl mt-2 font-bold">
                            Earn with every delivery
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            Deliver on your own schedule — weekdays, nights, weekends, or just the occasional hour. The choice is yours.
                        </p>
                        <div className="my-5 sm:my-6">
                            <Link
                                href=""
                                className="inline-block bg-[#FDB813] hover:bg-amber-200 text-[#2A2A2A] px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl rounded-xl font-bold transition"
                            >
                                Register as a courier
                            </Link>
                        </div>
                    </div>
                    <img
                        className="rounded-2xl w-full md:w-1/2 object-cover"
                        src="https://media.istockphoto.com/id/1470035625/photo/driver-transporting-a-business-man-on-a-crowdsourced-taxi.jpg?s=612x612&w=0&k=20&c=HbVWN87JGim9g0CDhh2NHPM8oZ1g4qVGx86vxJ5RM24="
                        alt="courier"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-12 items-center my-12 md:my-24 text-stone-100">
                    <img
                        className="rounded-2xl w-full md:w-1/2 object-cover"
                        src="https://yestech.co.uk/wp-content/uploads/2022/03/best-phone-system-features-for-taxi-business.png"
                        alt="merchant"
                    />
                    <div className="text-center md:text-left md:w-1/2">
                        <span className="block text-sm sm:text-base text-amber-300">
                          Increase earnings as merchant
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-4xl mt-2 font-bold">
                            Expand your reach and increase sales by connecting with new customers.
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            Millions of people rely on our platform to order food and goods from restaurants and stores like yours.
                        </p>
                        <div className="my-5 sm:my-6">
                            <Link
                                href=""
                                className="inline-block bg-[#FDB813] hover:bg-amber-200 text-[#2A2A2A] px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl rounded-xl font-bold transition"
                            >
                                Register your fleet
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitSection;

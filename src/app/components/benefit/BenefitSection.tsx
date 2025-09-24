import Link from "next/link";

const BenefitSection = () => {
    return (
        <div className="bg-[#1A1A1A]">
            <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto py-10">
                {/* Title & Description */}
                <div>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-100 text-center md:text-left leading-tight">
                        <strong>Earn money with Sisu-Taxi</strong>
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl mt-4 sm:mt-6 md:mt-10 text-stone-300 text-center md:text-left leading-relaxed">
                        Join over 4.5 million partners worldwide that earn with Bolt. For
                        drivers, couriers, merchants, and fleet owners looking for new ways
                        to boost revenue.
                    </p>
                </div>

                {/* Section 1 */}
                <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-12 items-center my-12 md:my-24 text-stone-100">
                    <img
                        className="rounded-2xl w-full md:w-1/2 object-cover"
                        src="https://t4.ftcdn.net/jpg/04/62/40/55/360_F_462405552_OKCZsIPaFydzpsyR8RUlMhqhMCqUWkqR.jpg"
                        alt="driver"
                    />
                    <div className="text-center md:text-left md:w-1/2">
                        <span className="block text-sm sm:text-base text-amber-300">
                          Earn money as a Bolt driver
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-4xl mt-2 font-bold">
                            Drive and earn money
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            Our 200+ million riders will send you plenty of ride requests.
                            When demand is high, you can earn even more.
                        </p>
                        <div className="my-5 sm:my-6">
                            <Link
                                href=""
                                className="inline-block bg-[#FDB813] hover:bg-amber-200 text-[#2A2A2A] px-5 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl rounded-xl font-bold transition"
                            >
                                Register To Driver
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-10 md:gap-12 items-center my-12 md:my-24 text-stone-100">
                    <div className="text-center md:text-left md:w-1/2">
                        <span className="block text-sm sm:text-base text-amber-300">
                          Become a Bolt courier partner
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-4xl mt-2 font-bold">
                            Earn with every delivery
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            You decide when and how often you deliver — weekdays, evenings,
                            weekends, or just the occasional hour — it’s up to you.
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

                {/* Section 3 */}
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
                            Increase your sales and reach new customers
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            Millions of our users are ordering food or goods from restaurants
                            and stores just like yours.
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

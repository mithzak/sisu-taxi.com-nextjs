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

const FeatureSection = () => {
    return (
        <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center text-white my-10">
                Designed for <span className="text-[#FDB813]">You</span>
            </h2>

            <div className="w-11/12 sm:w-10/12 lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mx-auto my-6">

                <div className="bg-[#2A2A2A] rounded-2xl flex flex-col items-center text-center py-8 sm:py-10">
                    <FaEuroSign
                        size={64}
                        className="bg-[#FDB813] p-4 text-[#2A2A2A] rounded-lg mb-4"
                    />
                    <span className="text-white text-xl sm:text-2xl font-semibold">
                        Support <br /> All Payment
                    </span>
                    <hr className="h-0.5 bg-gray-700 my-6 w-10/12 mx-auto" />
                    <div className="flex justify-center gap-4 sm:gap-2 w-full sm:w-8/12">
                        <RiVisaLine className="w-8 h-8 bg-white text-[#2A2A2A] rounded-sm p-0.5 hover:bg-[#FDB813]" />
                        <RiMastercardFill className="w-8 h-8 bg-white text-[#2A2A2A] rounded-sm p-0.5 hover:bg-[#FDB813]" />
                        <FaApplePay className="w-8 h-8 bg-white text-[#2A2A2A] rounded-sm p-0.5 hover:bg-[#FDB813]" />
                        <BiLogoPaypal className="w-8 h-8 bg-white text-[#2A2A2A] rounded-sm p-0.5 hover:bg-[#FDB813]" />
                    </div>
                </div>

                <div className="bg-[#FDB813] rounded-2xl flex flex-col justify-center items-center text-center py-8 sm:py-10">
                    <AiOutlineSafety
                        size={64}
                        className="bg-[#2A2A2A] p-4 text-[#FDB813] rounded-lg mb-4"
                    />
                    <span className="text-[#2A2A2A] text-xl sm:text-2xl font-semibold mb-6">
                        Safety First
                    </span>
                    <hr className="h-0.5 bg-gray-300 my-6 w-10/12 mx-auto" />
                    <div className="flex justify-center items-center gap-10">
                        <div className="flex flex-col items-center gap-2">
                            <BsFillTaxiFrontFill className="w-8 h-8 rounded-sm p-0.5 bg-[#2A2A2A] hover:bg-white text-[#FDB813]" />
                            <span className="text-[#2A2A2A] hover:text-white">Guarantee</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <MdHighQuality className="w-8 h-8 rounded-sm p-0.5 bg-[#2A2A2A] hover:bg-white text-[#FDB813]" />
                            <span className="text-[#2A2A2A] hover:text-white">Quick Ride</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl flex flex-col justify-center items-center text-center py-8 sm:py-10">
                    <LuTabletSmartphone
                        size={64}
                        className="bg-[#FDB813] p-4 text-[#2A2A2A] rounded-lg mb-4"
                    />
                    <span className="text-[#2A2A2A] text-xl sm:text-2xl font-semibold mb-6">
                        100% Digital
                    </span>
                    <div className="flex justify-center items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <ImAppleinc className="w-8 h-8 rounded-sm p-0.5 bg-[#2A2A2A] hover:bg-[#FDB813] text-white" />
                            <span className="text-[#2A2A2A] hover:text-[#FDB813]">Apple</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <GrAndroid className="w-8 h-8 rounded-sm p-0.5 bg-[#2A2A2A] hover:bg-[#FDB813] text-white" />
                            <span className="text-[#2A2A2A] hover:text-[#FDB813]">Android</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureSection;

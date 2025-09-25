import H from "@/app/components/core/H";
import P from "@/app/components/core/P";
import FeatureSection from "@/app/components/feature/FeatureSection";
import ContactSection from "@/app/components/contact/ContactSection";
import DownloadSection from "@/app/components/download/DownloadSection";

const About = () => {
    return (
        <div className="">
            <div className="h-72"></div>

            <div className="w-7/12 mx-auto">
                <div>
                    <H as="h1" className="text-[#FFC200]">About Us</H>
                    <H as="h1" className="w-96">Sisu is Finland&#39;s pioneering mobility super-app,</H>
                    <H as="h1" className="w-96 text-[#FFC200]">revolutionizing urban transportation.</H>
                    <P>
                        We are reimagining urban mobility by creating people-centric cities. Our innovative solutions provide superior alternatives to private car ownership, encompassing on-demand ride services, car-sharing programs, micro-mobility, tours etc.
                    </P>
                </div>

                <div className="w-96 grid grid-cols-2 gap-2">
                    <div className="col-span-1">
                        <div><span>Flexible & Cost-Effective</span></div>
                        <div><span>City Transport</span></div>
                        <div><span>Airport Transport</span></div>
                        <div><span>Satisfaction Guarantee</span></div>
                    </div>
                    <div className="col-span-1">
                        <div><span>Tour Transport</span></div>
                        <div><span>Regular Transport</span></div>
                        <div><span>Business Transport</span></div>
                        <div><span>Fast Pickup</span></div>
                    </div>
                </div>
            </div>

            <FeatureSection />
            <DownloadSection />
            <ContactSection />
        </div>
    );
}

export default About;
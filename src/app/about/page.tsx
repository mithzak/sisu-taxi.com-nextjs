import H from "@/app/components/core/H";
import P from "@/app/components/core/P";
import FeatureSection from "@/app/components/feature/FeatureSection";
import ContactSection from "@/app/components/contact/ContactSection";
import DownloadSection from "@/app/components/download/DownloadSection";

const About = () => {
    return (
        <div className="">
            <div className="h-72"></div>

            <div>
                <H as="h1" className="text-[#FFC200]">About Us</H>
                <H as="h1">Sisu is Finland&#39;s pioneering mobility super-app,</H>
                <H as="h1" className="text-[#FFC200]">revolutionizing urban transportation.</H>
                <P>
                    We are reimagining urban mobility by creating people-centric cities. Our innovative solutions provide superior alternatives to private car ownership, encompassing on-demand ride services, car-sharing programs, micro-mobility, tours etc.
                </P>
            </div>

            <FeatureSection />
            <DownloadSection />
            <ContactSection />
        </div>
    );
}

export default About;
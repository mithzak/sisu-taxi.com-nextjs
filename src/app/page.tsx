import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "@/app/components/hero/HeroSection";
import ServiceSection from "@/app/components/service/ServiceSection";
import DownloadSection from "@/app/components/download/DownloadSection";
import BannerSection from "@/app/components/banner/BannerSection";
import FeatureSection from "@/app/components/feature/FeatureSection";
import BenefitSection from "@/app/components/benefit/BenefitSection";

export default function Page() {

    return (
        <div className="bg-gray-900 text-gray-100">

            <HeroSection />
            <FeatureSection />
            <BannerSection />
            <BenefitSection />
            <ServiceSection />
            <DownloadSection />

        </div>
    );
}

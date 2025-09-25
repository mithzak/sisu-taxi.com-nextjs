import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";


const HeroZoomSection = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

    return (
        <section
            ref={ref}
            className="relative h-[75vh] w-full overflow-hidden bg-black"
        >
        <motion.img
            src="https://images.wallpaperscraft.com/image/single/taxi_town_inscription_114396_1920x1080.jpg"
            alt="Scroll Zoom"
            style={{ scale }}
            className="w-full h-full object-cover"
        />
        </section>
    );
}

export default HeroZoomSection;
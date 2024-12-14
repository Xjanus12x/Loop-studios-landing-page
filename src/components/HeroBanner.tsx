import { PropsWithChildren } from "react";
import heroBannerMobile from "../assets/images/mobile/image-hero.jpg";
import heroBannerDesktop from "../assets/images/desktop/image-hero.jpg";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
type HeroBannerProps = PropsWithChildren;
export default function HeroBanner({ children }: HeroBannerProps) {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <section
      className="bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover bg-blend-darken"
      style={{
        backgroundImage: `url(" ${
          isTablet ? heroBannerDesktop : heroBannerMobile
        }")`,
      }}
    >
      <div className="max-w-[75rem] p-6 sm:py-16 mx-auto sm:px-12">
        {children}
        <motion.div
          className="grid justify-center py-36 sm:justify-normal"
          initial={{ opacity: 0, x: -50 }} // Starting state
          whileInView={{ opacity: 1, x: 0 }} // Animate when in view
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="border-2 max-w-max">
            <h1 className="p-6 text-5xl text-white uppercase  josefin-sans max-w-[15ch] md:text-6xl md:p-10 lg:text-7xl">
              Immersive Experience That Deliver
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import interactiveMobile from "../assets/images/mobile/image-interactive.jpg";
import interactiveDesktop from "../assets/images/desktop/image-interactive.jpg";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative space-y-12">
      <picture>
        <source media="(min-width:768px)" srcSet={interactiveDesktop} />
        <motion.img
          src={interactiveMobile}
          aria-hidden={true}
          initial={{ opacity: 0, y: 100 }} // Starting state
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true, amount: 0.5 }} // Trigger animation once, 30% in view
        />
      </picture>

      <motion.article
        className="space-y-4 text-center md-plus:text-left md-plus:absolute md-plus:right-0 md-plus:top-[40%] md-plus:bg-white md-plus:p-10 md-plus:shadow-md lg:p-20 lg:shadow-lg lg:top-[20%]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Smooth transition
        viewport={{ once: true, amount: 0.5 }} // Trigger animation once, 30% in view
      >
        <header className="text-4xl uppercase lg:text-5xl josefin-sans">
          <h2 className="md-plus:max-w-[15ch]">The leader in interactive vr</h2>
        </header>
        <p className="leading-7 alata-regular text-primary-veryDarkGray md-plus:max-w-[45ch]">
          Founded in 2011, Loopstudios has been producing world-class
          virtual-reality projects for some of the best companies around the
          globe. Our award-winning creations have transformed businesses through
          digital experiences that bind to their brand.
        </p>
      </motion.article>
    </section>
  );
}

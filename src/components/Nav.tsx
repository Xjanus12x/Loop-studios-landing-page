import companyLogo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger.svg";
import { useSlidingNav } from "../context/SlidingNavProvider";
import NavItems from "./NavItems";
import { motion } from "framer-motion";

export default function Nav() {
  const { toggleNav, onClick } = useSlidingNav();
  return (
    <nav>
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0 }} // Starting state
        whileInView={{ opacity: 1 }} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.5 }} // Trigger animation once, 30% in view
      >
        <img src={companyLogo} aria-hidden={true} />

        <NavItems className="hidden text-white md:flex md:gap-6" />

        <button
          className="md:hidden"
          aria-label="Open menu"
          aria-controls="menu"
          aria-expanded={toggleNav}
          onClick={onClick}
        >
          <img src={hamburgerMenu} alt="Hamburger menu" aria-hidden />
        </button>
      </motion.div>
    </nav>
  );
}

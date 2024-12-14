import { createPortal } from "react-dom";
import NavItems from "./NavItems";
import companyLogo from "../assets/images/logo.svg";
import close from "../assets/images/icon-close.svg";
import { useSlidingNav } from "../context/SlidingNavProvider";
import { AnimatePresence, motion } from "framer-motion";

export default function SlidingNav() {
  const { toggleNav, onClick } = useSlidingNav();
  return createPortal(
    <AnimatePresence>
      {toggleNav && (
        <motion.div
          className="absolute inset-0 bg-black"
          id="menu"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-6 py-10 space-y-36">
            <div className="flex justify-between">
              <img src={companyLogo} alt="Company logo" aria-hidden />
              <button
                aria-label="Close menu"
                aria-controls="menu"
                aria-expanded={toggleNav}
                onClick={onClick}
              >
                <img src={close} alt="Close icon" aria-hidden={true} />
              </button>
            </div>
            <NavItems className="space-y-5 text-2xl text-white uppercase josefin-sans" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal-root")!
  );
}

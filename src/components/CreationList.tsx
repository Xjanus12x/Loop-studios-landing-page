import deepEarthMobile from "../assets/images/mobile/image-deep-earth.jpg";
import deepEarthDesktop from "../assets/images/desktop/image-deep-earth.jpg";
import nightArcadeMobile from "../assets/images/mobile/image-night-arcade.jpg";
import nightArcadeDesktop from "../assets/images/desktop/image-night-arcade.jpg";
import soccerTeamVrMobile from "../assets/images/mobile/image-soccer-team.jpg";
import soccerTeamVrDesktop from "../assets/images/desktop/image-soccer-team.jpg";
import theGridMobile from "../assets/images/mobile/image-grid.jpg";
import theGridDesktop from "../assets/images/desktop/image-grid.jpg";
import fromUpAboveVrMobile from "../assets/images/mobile/image-from-above.jpg";
import fromUpAboveVrDesktop from "../assets/images/desktop/image-from-above.jpg";
import pocketBorealisMobile from "../assets/images/mobile/image-pocket-borealis.jpg";
import pocketBorealisDesktop from "../assets/images/desktop/image-pocket-borealis.jpg";
import theCuriosityMobile from "../assets/images/mobile/image-curiosity.jpg";
import theCuriousityDesktop from "../assets/images/desktop/image-curiosity.jpg";
import makeItFisheyeMobile from "../assets/images/mobile/image-fisheye.jpg";
import makeItFisheyeDesktop from "../assets/images/desktop/image-fisheye.jpg";
import Button from "./Button";
import { motion } from "framer-motion";

export default function CreationList() {
  return (
    <section>
      <motion.div
        className="mb-12 sm:flex sm:items-center sm:justify-between"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl text-center uppercase lg:text-5xl josefin-sans">
          Our creations
        </h2>
        <Button className="hidden sm:inline sm:mt-0 sm:mx-0" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CreationCard
          creationDesktopImg={deepEarthDesktop}
          creationMobileImg={deepEarthMobile}
          title="Deep Earth"
          titleMaxWidth="max-w-[4ch]"
        />
        <CreationCard
          creationDesktopImg={nightArcadeDesktop}
          creationMobileImg={nightArcadeMobile}
          title="Night Arcade"
          titleMaxWidth="max-w-[5ch]"
        />
        <CreationCard
          creationDesktopImg={soccerTeamVrDesktop}
          creationMobileImg={soccerTeamVrMobile}
          title="Soccer Team VR"
          titleMaxWidth="max-w-[8ch]"
        />
        <CreationCard
          creationDesktopImg={theGridDesktop}
          creationMobileImg={theGridMobile}
          title="The Grid"
          titleMaxWidth="max-w-[3ch]"
        />
        <CreationCard
          creationDesktopImg={fromUpAboveVrDesktop}
          creationMobileImg={fromUpAboveVrMobile}
          title="From Up Above VR"
          titleMaxWidth="max-w-[10ch]"
        />
        <CreationCard
          creationDesktopImg={pocketBorealisDesktop}
          creationMobileImg={pocketBorealisMobile}
          title="Pocket Borealis"
          titleMaxWidth="max-w-[6ch]"
        />
        <CreationCard
          creationDesktopImg={theCuriousityDesktop}
          creationMobileImg={theCuriosityMobile}
          title="The Curiosity"
          titleMaxWidth="max-w-[3ch]"
        />
        <CreationCard
          creationDesktopImg={makeItFisheyeDesktop}
          creationMobileImg={makeItFisheyeMobile}
          title="Make It Fisheye"
          titleMaxWidth="max-w-[10ch]"
        />
      </motion.div>
      <Button className="sm:hidden" />
    </section>
  );
}

type CreationCardProps = {
  creationMobileImg: string;
  creationDesktopImg: string;
  title: string;
  titleMaxWidth: string;
};

function CreationCard({
  creationDesktopImg,
  creationMobileImg,
  title,
  titleMaxWidth,
}: CreationCardProps) {
  return (
    <div className="relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/80 before:to-transparent md-plus:before:bg-gradient-to-t md:shadow-md">
      <picture>
        <source media="(min-width:768px)" srcSet={creationDesktopImg} />
        <img className="min-w-full" src={creationMobileImg} alt={title} />
      </picture>

      <span className="absolute inset-0 grid p-6 text-xl text-white uppercase josefin-sans md-plus:text-2xl md-plus:p-10">
        <span
          className={`self-end ${titleMaxWidth} md-plus:self-end md-plus:justify-self-center md-plus:text-center md-plus:max-w-max md-plus:text-balance`}
        >
          {title}
        </span>
      </span>
    </div>
  );
}

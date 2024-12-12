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

export default function CreationList() {
  return (
    <section >
      <h2 className="text-5xl text-center uppercase josefin-sans mb-14">
        Our creations
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CreationCard
          creationDesktopImg={deepEarthDesktop}
          creationMobileImg={deepEarthMobile}
          title="Deep Earth"
          titleMaxWidth="4ch"
        />
        <CreationCard
          creationDesktopImg={nightArcadeDesktop}
          creationMobileImg={nightArcadeMobile}
          title="Night Arcade"
          titleMaxWidth="5ch"
        />
        <CreationCard
          creationDesktopImg={soccerTeamVrDesktop}
          creationMobileImg={soccerTeamVrMobile}
          title="Soccer Team VR"
          titleMaxWidth="8ch"
        />
        <CreationCard
          creationDesktopImg={theGridDesktop}
          creationMobileImg={theGridMobile}
          title="The Grid"
          titleMaxWidth="3ch"
        />
        <CreationCard
          creationDesktopImg={fromUpAboveVrDesktop}
          creationMobileImg={fromUpAboveVrMobile}
          title="From Up Above VR"
          titleMaxWidth="10ch"
        />
        <CreationCard
          creationDesktopImg={pocketBorealisDesktop}
          creationMobileImg={pocketBorealisMobile}
          title="Pocket Borealis"
          titleMaxWidth="6ch"
        />
        <CreationCard
          creationDesktopImg={theCuriousityDesktop}
          creationMobileImg={theCuriosityMobile}
          title="The Curiosity"
          titleMaxWidth="3ch"
        />
        <CreationCard
          creationDesktopImg={makeItFisheyeDesktop}
          creationMobileImg={makeItFisheyeMobile}
          title="Make It Fisheye"
          titleMaxWidth="10ch"
        />
      </div>
      <button className="block px-14 py-3.5 mx-auto mt-10 text-xl uppercase border-2 border-black josefin-sans">See All</button>
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
    <div className="relative">
      <picture>
        <source media="(min-width:768px)" srcSet={creationDesktopImg} />
        <img
          src={creationMobileImg}
          alt={title}
          className="object-cover w-full h-auto mix-blend-darken "
        />
      </picture>

      <span
        className={`text-3xl uppercase  text-white max-w-[${titleMaxWidth}] josefin-sans left-6 bottom-6 absolute`}
      >
        {title}
      </span>
    </div>
  );
}

import interactiveMobile from "../assets/images/mobile/image-interactive.jpg";
import interactiveDesktop from "../assets/images/desktop/image-interactive.jpg";

export default function CompanyIntroduction() {
  return (
    <section className="space-y-12">
      <picture>
        <source media="(min-width:768px)" srcSet={interactiveDesktop} />
        <img src={interactiveMobile} aria-hidden={true} />
      </picture>

      <article className="text-center space-y-4">
        <header className="josefin-sans text-3xl uppercase">
          <h2>The leader in interactive vr</h2>
        </header>
        <p className="alata-regular text-primary-veryDarkGray leading-7">
          Founded in 2011, Loopstudios has been producing world-class
          virtual-reality projects for some of the best companies around the
          globe. Our award-winning creations have transformed businesses through
          digital experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}

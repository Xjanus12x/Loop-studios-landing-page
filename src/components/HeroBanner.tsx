import { PropsWithChildren } from "react";
import heroBanner from "../assets/images/mobile/image-hero.jpg";
type HeroBannerProps = PropsWithChildren;
export default function HeroBanner({ children }: HeroBannerProps) {
  return (
    <section
      className="bg-no-repeat  bg-cover p-6"
      style={{ backgroundImage: `url("${heroBanner}")` }}
    >
      {children}
      <div className="grid justify-center py-36">
        <h1 className="uppercase text-white josefin-sans max-w-min text-5xl p-6 outline outline-4 ">
          Immersive Experience That Deliver
        </h1>
      </div>
    </section>
  );
}

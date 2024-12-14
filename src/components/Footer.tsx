import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import logo from "../assets/images/logo.svg";
import NavItems from "./NavItems";

export default function Footer() {
  return (
    <footer>
      <div className="bg-black">
        <div className="grid py-16 space-y-10 text-center text-white justify-items-center alata-regular sm:flex sm:justify-between max-w-[75rem] mx-auto sm:px-6 sm:space-y-0 sm:items-center">
          <div className="space-y-10 sm:space-y-5">
            <img src={logo} alt="Company logo" aria-hidden={true} />
            <nav aria-label="Footer navigation">
              <NavItems className="flex flex-col gap-6 md:flex-row " />
            </nav>
          </div>

          <div className="space-y-5">
            <ul className="flex justify-center gap-5">
              <li>
                <a
                  href="https://facebook.com"
                  aria-label="Visit our Facebook page"
                >
                  <img src={facebook} alt="Facebook logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  aria-label="Visit our Twitter page"
                >
                  <img src={twitter} alt="Twitter logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  aria-label="Visit our Pinterest page"
                >
                  <img src={pinterest} alt="Pinterest logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  aria-label="Visit our Instagram page"
                >
                  <img src={instagram} alt="Instagram logo" />
                </a>
              </li>
            </ul>

            <span className="block">
              © 2021 Loopstudios. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

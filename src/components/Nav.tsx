import companyLogo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger.svg";
export default function Nav() {
  const toggleMenu = false;
  return (
    <nav>
      <div className="flex justify-between items-center">
        <img src={companyLogo} aria-hidden={true} />

        <button
          className=""
          aria-label={toggleMenu ? "Open menu" : "Close menu"}
          aria-controls="menu"
          aria-expanded={toggleMenu}
        >
          <img src={hamburgerMenu} alt="Hamburger menu" aria-hidden />
        </button>
      </div>
    </nav>
  );
}

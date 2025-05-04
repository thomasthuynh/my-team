import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";
import bgPatternAbout1 from "../assets/patterns/bg-pattern-about-1-mobile-nav-1.svg";

import { useState } from "react";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-green-midnight flex h-28 items-center">
      <div className="mx-auto flex h-[2rem] w-[90%] max-w-7xl items-center justify-between">
        <div className="h-full">
          <img src={logo} alt="myteam logo" className="h-full w-full" />
        </div>
        <button onClick={() => setMobileMenu(!mobileMenu)} className="z-10">
          <img
            src={mobileMenu ? close : hamburger}
            alt="Hamburger menu"
            className="h-full w-full"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-blue-police absolute top-0 ${mobileMenu ? "right-0" : "-right-100"} h-screen w-2/3 transition-all duration-300`}
      >
        <div className="flex h-3/5 flex-col items-center justify-center text-lg font-semibold text-white">
          <div className="w-2/3">
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li className="py-8">
                <a href="">about</a>
              </li>
            </ul>
            <button className="w-full rounded-full border-2 py-2">
              contact us
            </button>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="relative h-2/5 w-full">
          <div className="absolute -right-2/5 bottom-0">
            <img src={bgPatternAbout1} alt="Pattern" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

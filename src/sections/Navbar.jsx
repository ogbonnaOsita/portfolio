import { useState } from "react";
import MenuDivider from "../components/MenuDivider";
import DarkModeToggle from "../components/DarkModeToggle";
import Github from "../components/socials/Github";
import LinkedIn from "../components/socials/LinkedIn";
import Twitter from "../components/socials/Twitter";
import { Link } from "react-scroll";

const AnotherNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navLinks = [
    {
      label: "Home",
      link: "home",
    },
    {
      label: "About",
      link: "about",
    },
    {
      label: "Portfolio",
      link: "portfolio",
    },
    {
      label: "Contact",
      link: "contact",
    },
  ];
  return (
    <div>
      <nav className="relative px-4 py-6 flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href="/">
          <div
            className="left nav-logo relative font-semibold text-xl dark:text-white text-secondary pr-3
          after:content-[''] dark:after:bg-darkPrimary after:bg-primary after:h-2 after:w-2 after:right-0 after:top-0 after:absolute after:rounded-full"
          >
            <h2>
              <span className="text-gray-400">Osita </span>Ogbonna
            </h2>
          </div>
        </a>
        <div className="lg:hidden">
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="navbar-burger flex items-center text-primary dark:text-darkPrimary p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="text-md cursor-pointer text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-darkPrimary transtion-all duration-200"
              >
                Home
              </Link>
            </li>
            <MenuDivider />
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="text-md cursor-pointer text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-darkPrimary transtion-all duration-200"
              >
                About
              </Link>
            </li>
            <MenuDivider />
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="text-md cursor-pointer text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-darkPrimary transtion-all duration-200"
              >
                Portolio
              </Link>
            </li>
            <MenuDivider />
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="text-md cursor-pointer text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-darkPrimary transtion-all duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
      </nav>
      <div className={isNavOpen ? "block" : "hidden"}>
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 transition-all duration-300"></div>
          <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#0f0f0f] border-r overflow-y-auto transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setIsNavOpen(false)}
                className="navbar-close"
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer  hover:text-primary dark:hover:text-darkPrimary hover:bg-[#222]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <DarkModeToggle />
            </div>
            <div>
              <ul>
                {navLinks.map((item, i) => (
                  <li key={i} className="mb-1">
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="cursor-pointer block p-4 text-sm font-semibold text-gray-400 hover:bg-[#222] hover:text-primary dark:hover:text-darkPrimary rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="flex items-center justify-start gap-3">
                <Github />
                <LinkedIn />
                <Twitter />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AnotherNav;

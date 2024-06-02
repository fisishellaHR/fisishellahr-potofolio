import { useEffect, useRef } from "react";
import "/header.css";
import { Link } from "react-scroll";

export const Header = () => {
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        const fixedNav = header.offsetTop;
        if (window.pageYOffset > fixedNav) {
          header.classList.add("navbar-fixed");
        } else {
          header.classList.remove("navbar-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHamburgerClick = () => {
      if (hamburgerRef.current && navMenuRef.current) {
        hamburgerRef.current.classList.toggle("hamburger-active");
        navMenuRef.current.classList.toggle("hidden");
      }
    };

    const hamburger = hamburgerRef.current;
    hamburger.addEventListener("click", handleHamburgerClick);

    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 scroll-smooth"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="font-bold text-lg cursor-pointer text-primary block py-6"
            >
              FisiShellaH.R
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              ref={hamburgerRef}
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              ref={navMenuRef}
              id="nav-menu"
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary cursor-pointer"
                  >
                    About Me
                  </Link>
                </li>
                <li className="group">
                  <Link
                    activeClass="active"
                    to="portofolio"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary cursor-pointer"
                  >
                    Portofolio
                  </Link>
                </li>
                <li className="group">
                  <Link
                    activeClass="active"
                    to="mytechstack"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary cursor-pointer"
                  >
                    My TechStack
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import BookNow from "./BookNow";
import Notification from "./Notification";
import AddToCart from "./AddTocart";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/company" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/partnerLogin" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <nav className="flex items-center justify-center h-16 lg:h-25">
          {/* ===== DESKTOP (centered group) ===== */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center justify-center overflow-auto ">
              <Link
                to="/"
                aria-label="Shubhakarya Home"
                className="flex items-center"
              >
                <img
                  src={Logo}
                  alt="Shubhakarya Logo"
                  className={`
                    h-10            
                    sm:h-11
                    md:h-12         
                    lg:h-25       
                    w-auto
                    object-contain
                    transition-all duration-300
                    ${
                      scrolled
                        ? "bg-white/20 backdrop-blur-sm shadow-md"
                        : "bg-white shadow-sm"
                    }`}
                />
              </Link>
            </div>

            {/* NAV */}
            <nav aria-label="Primary Navigation">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        `relative inline-block px-1 py-2 text-sm lg:text-base font-medium
                        transition-all duration-300
                        hover:text-orange-600 hover:scale-105
                        after:absolute after:left-1/2 after:bottom-0
                        after:h-[2px] after:bg-orange-600
                        after:w-0 after:-translate-x-1/2
                        after:transition-all after:duration-300
                        hover:after:w-full
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded
                        ${
                          isActive
                            ? "text-orange-600 after:w-full font-semibold scale-105"
                            : "text-gray-700"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-3 lg:gap-4">
              {/* <BookNow /> */}
              {/* <Notification /> */}
              {/* <AddToCart /> */}
            </div>
          </div>

          {/* ===== MOBILE BAR ===== */}
          <div className="flex md:hidden items-center justify-between w-full">
            <Link
              to="/"
              className="text-lg font-bold text-orange-600 hover:text-orange-700 transition-colors"
              aria-label="Shubhakarya Home"
            >
              SHUBHAKARYA
            </Link>

            <div className="flex items-center gap-3">
              <BookNow />
              <Notification />
              <AddToCart />
              <button
                className="text-orange-600 text-2xl p-2 hover:bg-orange-50 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col items-center gap-1 py-4 px-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block w-full text-center py-3 px-4 rounded-lg transition-all duration-200 font-medium
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset
                    ${
                      isActive
                        ? "text-orange-600 bg-orange-50 font-semibold"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={handleNavClick}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;

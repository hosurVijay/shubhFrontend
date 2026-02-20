import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../Containter/Container";
import Twitter from "./Twitter";
import Mail from "./Mail";

const Footer = () => {
  const footerLinks = {
    left: [{ name: "Company", path: "/company" }],
    right: [
      { name: "Support", path: "/contact" },
      // { name: "Legal", path: "/contact" },
    ],
  };

  return (
    <footer className="w-full bg-gray-100 py-6 mt-16">
      <Container>
        <nav className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          {/* LEFT */}
          <ul className="flex">
            {footerLinks.left.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-semibold underline underline-offset-4"
                      : "text-gray-700 hover:text-orange-600 transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* LINKS */}
            <ul className="flex items-center gap-8">
              {footerLinks.right.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-600 font-semibold underline underline-offset-4"
                        : "text-gray-700 hover:text-orange-600 transition"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* ICONS */}
            <div className="flex items-center gap-4">
              {/* <Twitter /> */}
              <Mail />
            </div>
          </div>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;

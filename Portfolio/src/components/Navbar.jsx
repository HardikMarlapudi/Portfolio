import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Achievements from "./Achievements";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const closeMenu = () => setMenuOpen(true);

  const navLinks = [
    { path: "/", label: "Home", element: <Home /> },
    { path: "/about", label: "About", element: <About /> },
    { path: "/projects", label: "Projects", element: <Projects /> },
    { path: "/resume", label: "Resume", element: <Resume /> },
    { path: "/achievements", label: "Achievements", element: <Achievements /> },
    { path: "/contact", label: "Contact", element: <Contact /> },
  ];

  return (
    <nav className="flex sticky top-0 z-50 bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul
            className={`
              ${menuOpen ? "flex" : "hidden"}
              md:flex
              flex-col
              md:flex-row
              absolute
              text-center
              md:static
              top-16
              left-0
              w-full
              md:w-auto
              bg-slate-900
              md:bg-transparent
              gap-6
              p-6
              md:p-0
            `}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-white hover:text-blue-400 transition"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        ☰
      </button>

      <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/home" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
